Voici mon analyse complète du projet SmartHeart après inspection de tout le code source.

🔍 Diagnostic — Ce qui marche vs ce qui ne marche pas
✅ Pages fonctionnelles (code correct)
Page	Route	Statut
Dashboard	/dashboard	✅ Connecté à Supabase via queries
Recettes	/recipes	✅ Query Supabase présente
Recherche	/search	✅ Query produits présente
Partenaires (Map)	/map	⚠️ Données hardcodées (mock)
Apprendre	/learn	⚠️ Données hardcodées (mock)
Profil	/profile	✅ Connecté via requireAuth
❌ Problèmes identifiés
1. /map — Données mock, pas de Supabase
La page utilise un tableau stores et availableProducts codés en dur avec des données parisiennes fictives. Les vrais partenaires de ta BDD (Annaba) ne s'affichent pas.

2. /learn — Articles hardcodés
La page learn/page.tsx utilise un tableau articles local au lieu de charger les articles depuis la table articles de Supabase.

3. TopBar reçoit undefined
Dans la page /learn et /map, <TopBar /> est appelé sans les props userName et userAvatar, contrairement au dashboard qui les passe correctement. Cela peut causer un crash TypeScript ou un affichage cassé.

4. learn/page.tsx n'est pas protégée
Pas de requireAuth() alors que le dashboard l'utilise — accès sans connexion possible.

Tu travailles sur le projet Next.js 15 SmartHeart (App Router + Supabase + TypeScript + Tailwind CSS v4).

## Contexte du projet
Application web de santé nutritionnelle pour diabétiques et cœliaques.
Stack : Next.js 15 App Router, Supabase (auth + DB), TypeScript strict, Tailwind CSS v4.

## Ce qui a été fait sur Supabase
L'ancienne base de données (tables : users, stores, store_products, health_profiles) a été
complètement supprimée et remplacée par un nouveau schéma défini dans SCHEMA.sql.

### Nouvelles tables créées (23 tables) :
- profiles, user_health_profiles
- partners, partner_inventory, partner_product_views, product_search_logs
- product_categories, products
- recipes, recipe_ingredients, recipe_steps
- articles, quizzes, quiz_questions, quiz_answers, user_quiz_results
- user_saved_products, user_saved_recipes, user_read_articles
- shopping_lists, shopping_list_items
- patient_alerts
- Vue : partner_daily_views

### Données insérées :
- 6 catégories de produits
- 12 produits (lentilles, riz, yaourt, avocat, etc.) avec nutri_score et glycemic_index
- 4 recettes avec ingrédients et étapes
- 4 articles éducatifs (IG, étiquettes, graisses, céréales) avec 1 quiz
- 5 partenaires à Annaba (UNO Hypermarché, Ardis Market, Supérette El Hadjar, Bio Santé Store, Pharma Nutrition+)
- 46 lignes d'inventaire partenaire (partner_inventory)
- 300 vues analytiques (partner_product_views)
- 40 logs de recherche (product_search_logs)

### Trigger Supabase actif :
Quand un utilisateur s'inscrit via auth.users → création automatique dans public.profiles
via la fonction handle_new_user().

## Architecture existante du projet

### Fichiers Supabase
- `src/lib/supabase/server.ts` — client Supabase côté serveur (utilise cookieStore)
- `src/lib/supabase/client.ts` — client Supabase côté client
- `src/lib/auth.ts` — fonctions requireAuth(), getUser(), getHealthProfile()
- `src/lib/queries/products.ts` — requêtes produits
- `src/lib/queries/recipes.ts` — requêtes recettes
- `src/lib/queries/partners.ts` — requêtes partenaires
- `src/lib/queries/articles.ts` — requêtes articles
- `src/lib/queries/favorites.ts` — requêtes favoris
- `src/lib/database.types.ts` — types TypeScript générés depuis Supabase

### Pattern Server Component (obligatoire)
```ts
// Toujours ce pattern pour les pages :
import { cookies } from 'next/headers'
import { createClient } from '@/lib/supabase/server'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase.from('table').select('*')
  return <div>{/* JSX */}</div>
}
```

## Tâche 1 — Mettre à jour database.types.ts

Regénérer les types TypeScript pour correspondre au nouveau schéma.
Lance cette commande dans le terminal :

```bash
npx supabase gen types typescript --project-id TON_PROJECT_ID --schema public > src/lib/database.types.ts
```

Si la commande ne fonctionne pas, remplace manuellement le contenu de
`src/lib/database.types.ts` avec les types correspondant aux 23 nouvelles tables.
Les types essentiels à créer sont :

```ts
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'user' | 'nutritionist' | 'partner_admin' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>
      }
      user_health_profiles: {
        Row: {
          id: string
          user_id: string
          age: number | null
          weight_kg: number | null
          height_cm: number | null
          activity_level: 'sedentary' | 'moderate' | 'active' | null
          health_conditions: string[]
          goals: string[]
          bmr_kcal: number | null
          tdee_kcal: number | null
          is_complete: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['user_health_profiles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['user_health_profiles']['Insert']>
      }
      partners: {
        Row: {
          id: string
          owner_id: string | null
          name: string
          description: string | null
          logo_url: string | null
          cover_url: string | null
          address_line: string | null
          city: string | null
          postal_code: string | null
          country: string
          latitude: number | null
          longitude: number | null
          phone: string | null
          email: string | null
          website: string | null
          opening_hours: Record<string, unknown> | null
          partner_code: string | null
          is_active: boolean
          is_verified: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['partners']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['partners']['Insert']>
      }
      products: {
        Row: {
          id: string
          category_id: string | null
          name: string
          brand: string | null
          description: string | null
          barcode: string | null
          image_url: string | null
          image_urls: string[]
          nutri_score: 'A' | 'B' | 'C' | 'D' | 'E' | null
          glycemic_index: number | null
          labels: string[]
          compatible_with: string[]
          energy_kcal: number | null
          carbs_g: number | null
          sugars_g: number | null
          fat_g: number | null
          saturated_fat_g: number | null
          fiber_g: number | null
          protein_g: number | null
          sodium_g: number | null
          is_published: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['products']['Insert']>
      }
      partner_inventory: {
        Row: {
          id: string
          partner_id: string
          product_id: string
          price: number
          currency: string
          quantity: number
          is_available: boolean
          low_stock_threshold: number
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['partner_inventory']['Row'], 'id' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['partner_inventory']['Insert']>
      }
      recipes: {
        Row: {
          id: string
          created_by: string | null
          title: string
          description: string | null
          image_url: string | null
          prep_time_min: number | null
          cook_time_min: number | null
          servings: number
          difficulty: 'easy' | 'medium' | 'hard'
          calories_kcal: number | null
          price_estimate: number | null
          diet_tags: string[]
          compatible_with: string[]
          is_published: boolean
          is_featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['recipes']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['recipes']['Insert']>
      }
      recipe_ingredients: {
        Row: {
          id: string
          recipe_id: string
          product_id: string | null
          name: string
          quantity: string
          sort_order: number
        }
        Insert: Omit<Database['public']['Tables']['recipe_ingredients']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['recipe_ingredients']['Insert']>
      }
      recipe_steps: {
        Row: {
          id: string
          recipe_id: string
          step_number: number
          instruction: string
        }
        Insert: Omit<Database['public']['Tables']['recipe_steps']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['recipe_steps']['Insert']>
      }
      articles: {
        Row: {
          id: string
          author_id: string | null
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          image_url: string | null
          category: string
          read_time_min: number | null
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          tags: string[]
          is_published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: Omit<Database['public']['Tables']['articles']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['articles']['Insert']>
      }
      user_saved_products: {
        Row: { user_id: string; product_id: string; saved_at: string }
        Insert: Omit<Database['public']['Tables']['user_saved_products']['Row'], 'saved_at'>
        Update: Partial<Database['public']['Tables']['user_saved_products']['Insert']>
      }
      user_saved_recipes: {
        Row: { user_id: string; recipe_id: string; saved_at: string }
        Insert: Omit<Database['public']['Tables']['user_saved_recipes']['Row'], 'saved_at'>
        Update: Partial<Database['public']['Tables']['user_saved_recipes']['Insert']>
      }
      user_read_articles: {
        Row: { user_id: string; article_id: string; read_at: string }
        Insert: Omit<Database['public']['Tables']['user_read_articles']['Row'], 'read_at'>
        Update: Partial<Database['public']['Tables']['user_read_articles']['Insert']>
      }
      shopping_lists: {
        Row: { id: string; user_id: string; name: string; is_active: boolean; created_at: string }
        Insert: Omit<Database['public']['Tables']['shopping_lists']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['shopping_lists']['Insert']>
      }
      shopping_list_items: {
        Row: {
          id: string
          shopping_list_id: string
          product_id: string | null
          product_name: string
          quantity: number
          is_checked: boolean
          added_at: string
        }
        Insert: Omit<Database['public']['Tables']['shopping_list_items']['Row'], 'id' | 'added_at'>
        Update: Partial<Database['public']['Tables']['shopping_list_items']['Insert']>
      }
      patient_alerts: {
        Row: {
          id: string
          nutritionist_id: string
          patient_id: string
          type: 'warning' | 'success' | 'info'
          title: string
          message: string
          is_read: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['patient_alerts']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['patient_alerts']['Insert']>
      }
      product_categories: {
        Row: { id: string; name: string; slug: string; icon: string | null; parent_id: string | null; sort_order: number }
        Insert: Omit<Database['public']['Tables']['product_categories']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['product_categories']['Insert']>
      }
      quizzes: {
        Row: { id: string; article_id: string | null; title: string; created_at: string }
        Insert: Omit<Database['public']['Tables']['quizzes']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['quizzes']['Insert']>
      }
      quiz_questions: {
        Row: { id: string; quiz_id: string; question: string; sort_order: number }
        Insert: Omit<Database['public']['Tables']['quiz_questions']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['quiz_questions']['Insert']>
      }
      quiz_answers: {
        Row: { id: string; question_id: string; answer_text: string; is_correct: boolean; explanation: string | null; sort_order: number }
        Insert: Omit<Database['public']['Tables']['quiz_answers']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['quiz_answers']['Insert']>
      }
      user_quiz_results: {
        Row: { id: string; user_id: string; quiz_id: string; score: number; max_score: number; completed_at: string }
        Insert: Omit<Database['public']['Tables']['user_quiz_results']['Row'], 'id' | 'completed_at'>
        Update: Partial<Database['public']['Tables']['user_quiz_results']['Insert']>
      }
      partner_product_views: {
        Row: { id: string; partner_id: string; product_id: string; user_id: string | null; viewed_at: string }
        Insert: Omit<Database['public']['Tables']['partner_product_views']['Row'], 'id' | 'viewed_at'>
        Update: Partial<Database['public']['Tables']['partner_product_views']['Insert']>
      }
      product_search_logs: {
        Row: { id: string; partner_id: string | null; product_id: string | null; search_term: string | null; user_id: string | null; searched_at: string }
        Insert: Omit<Database['public']['Tables']['product_search_logs']['Row'], 'id' | 'searched_at'>
        Update: Partial<Database['public']['Tables']['product_search_logs']['Insert']>
      }
    }
    Views: {
      partner_daily_views: {
        Row: { partner_id: string; day: string; total_views: number }
      }
    }
  }
}
```

## Tâche 2 — Corriger src/app/map/page.tsx

PROBLÈME : La page utilise des données mock hardcodées (tableau `stores` fictif avec des
adresses parisiennes). Les vrais partenaires de la BDD Supabase ne s'affichent pas.

CORRECTION :
- Transformer en Server Component async
- Ajouter requireAuth() pour protéger la page (redirection vers /login si non connecté)
- Utiliser getPartners() depuis @/lib/queries/partners (ou créer la fonction si absente)
- Remplacer le tableau stores hardcodé par les données réelles
- Afficher pour chaque partenaire : name, address_line, city, phone, is_active, latitude, longitude
- Le statut "Ouvert/Fermé" doit utiliser is_active du partenaire
- Passer userName et userAvatar à <TopBar /> depuis le profil retourné par requireAuth()
- NE PAS changer le design visuel

Si getPartners() n'existe pas dans src/lib/queries/partners.ts, la créer :
```ts
export async function getPartners(options?: { city?: string; activeOnly?: boolean }) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  let query = supabase
    .from('partners')
    .select('*')
    .order('name')
  if (options?.activeOnly !== false) query = query.eq('is_active', true)
  if (options?.city) query = query.eq('city', options.city)
  const { data } = await query
  return data ?? []
}
```

## Tâche 3 — Corriger src/app/learn/page.tsx

PROBLÈME : La page utilise un tableau articles hardcodé. Les articles de la table Supabase
ne sont pas chargés. La page n'est pas protégée par l'auth.

CORRECTION :
- Transformer en Server Component async
- Ajouter requireAuth() au début
- Utiliser getArticles() depuis @/lib/queries/articles
- Remplacer le tableau articles hardcodé par les données réelles
- Mapper : title, excerpt, read_time_min, difficulty, category, tags, is_published
- Passer userName et userAvatar à <TopBar /> depuis le profil retourné par requireAuth()
- NE PAS changer le design visuel

Si getArticles() n'existe pas ou est incomplète dans src/lib/queries/articles.ts, la créer :
```ts
export async function getArticles(options?: { category?: string; limit?: number }) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  let query = supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
  if (options?.category) query = query.eq('category', options.category)
  if (options?.limit) query = query.limit(options.limit)
  const { data } = await query
  return data ?? []
}
```

## Tâche 4 — Vérifier toutes les autres pages

Lire le contenu de ces fichiers et corriger toute référence aux anciennes tables supprimées :
- Toute référence à 'users' → remplacer par 'profiles'
- Toute référence à 'stores' → remplacer par 'partners'
- Toute référence à 'store_products' → remplacer par 'partner_inventory'
- Toute référence à 'health_profiles' → remplacer par 'user_health_profiles'

Pages à vérifier :
- src/app/dashboard/page.tsx
- src/app/recipes/page.tsx
- src/app/search/page.tsx
- src/app/profile/page.tsx
- src/app/profile/setup/page.tsx (si elle existe)
- Tous les fichiers dans src/lib/queries/

## Tâche 5 — Vérifier la connexion Supabase


Ces valeurs ne changent PAS — la connexion Supabase reste la même car seule la
structure des tables a changé, pas le projet Supabase lui-même.

Vérifier que src/lib/supabase/server.ts utilise bien ces variables d'environnement.

## Règles absolues
- NE PAS changer le design visuel (couleurs, layout, composants UI)
- NE PAS utiliser useEffect ou useState pour la récupération de données initiales
- NE PAS ajouter de librairies supplémentaires
- Toujours utiliser createClient(cookieStore) avec await cookies() côté serveur
- Typer avec les types de @/lib/database.types
- Gérer les cas où les données sont vides → afficher message "Aucun résultat"
- Pattern Server Component uniquement pour les pages

## Ordre d'exécution
1. Mettre à jour database.types.ts (Tâche 1)
2. Corriger src/lib/queries/ (Tâche 4 en premier pour les fichiers queries)
3. Corriger map/page.tsx (Tâche 2)
4. Corriger learn/page.tsx (Tâche 3)
5. Vérifier les autres pages (Tâche 4)
6. Vérifier .env.local (Tâche 5)