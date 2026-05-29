# Analyse Technique — SmartHeart
## Rapport PHASE 0 — Mémoire PFE Master 2 SID
**Université Badji Mokhtar Annaba — 2025–2026**

---

## 1. Stack Technique

| Catégorie | Technologie | Version | Rôle |
|-----------|-------------|---------|------|
| Framework | Next.js | 16.2.4 | Framework React full-stack (App Router) |
| Langage | TypeScript | ^5 | Typage statique |
| Runtime UI | React | 19.2.4 | Bibliothèque d'interface |
| Runtime DOM | React-DOM | 19.2.4 | Rendu DOM |
| Backend-as-a-Service | Supabase JS | ^2.105.1 | Base de données + Auth + RLS |
| SSR Supabase | @supabase/ssr | ^0.10.2 | Gestion cookies pour Server Components |
| Styles | Tailwind CSS | ^4 | CSS utilitaire |
| PostCSS | @tailwindcss/postcss | ^4 | Pipeline CSS |
| Icônes | lucide-react | ^1.9.0 | Composants icônes |
| Validation | Zod | ^4.4.1 | Schémas de validation des formulaires |
| Lint | ESLint + eslint-config-next | ^9 / 16.2.4 | Qualité de code |

**Notes importantes :**
- Pas de bibliothèque de gestion d'état globale (pas de Redux/Zustand) → état géré par Server Components
- Pas de bibliothèque de cartes réelle (pas de Leaflet/MapBox) → carte statique simulée
- Pas de service de paiement, pas de PWA, pas de tests automatisés

---

## 2. Arborescence complète de `hearth/src/`

```
hearth/src/
│
├── app/                                    # App Router Next.js 16
│   ├── layout.tsx                          # Layout racine (fonts, meta)
│   ├── globals.css                         # Variables CSS globales + Tailwind
│   ├── page.tsx                            # Page d'accueil (landing / redirect)
│   ├── favicon.ico
│   │
│   ├── (auth)/                             # Groupe de routes auth (layout partagé)
│   │   ├── layout.tsx                      # Layout minimal sans Sidebar
│   │   ├── login/
│   │   │   ├── page.tsx                    # Page connexion/inscription
│   │   │   ├── _actions/
│   │   │   │   ├── login.action.ts         # Server Action : connexion email/mdp
│   │   │   │   ├── logout.action.ts        # Server Action : déconnexion
│   │   │   │   └── register.action.ts      # Server Action : création de compte
│   │   │   └── _components/
│   │   │       ├── AuthTabs.tsx            # Tabs Login / Register
│   │   │       ├── LoginForm.tsx           # Formulaire de connexion
│   │   │       └── RegisterForm.tsx        # Formulaire d'inscription
│   │   │
│   │   ├── profile-setup-step-1/
│   │   │   ├── page.tsx                    # Étape 1 : données biométriques
│   │   │   ├── _actions/
│   │   │   │   └── save-step1.action.ts    # Server Action : calcul BMR/TDEE + upsert
│   │   │   └── _components/
│   │   │       └── Step1Form.tsx           # Formulaire âge/poids/taille/activité
│   │   │
│   │   └── profile-setup-step-2/
│   │       ├── page.tsx                    # Étape 2 : conditions & objectifs
│   │       ├── _actions/
│   │       │   └── save-step2.action.ts    # Server Action : sauvegarde conditions + is_complete=true
│   │       └── _components/
│   │           └── Step2Form.tsx           # Sélection multi-choix conditions/objectifs
│   │
│   ├── dashboard/
│   │   └── page.tsx                        # Dashboard principal (recommandations IA)
│   │
│   ├── dashboard-dark/
│   │   └── page.tsx                        # Variante dark (expérimentale)
│   │
│   ├── search/
│   │   ├── page.tsx                        # Catalogue produits + filtres + warnings profil
│   │   ├── [id]/
│   │   │   └── page.tsx                    # Fiche produit détaillée
│   │   └── _actions/
│   │       └── favorites.action.ts         # Server Action : sauvegarder/retirer favori produit
│   │
│   ├── recipes/
│   │   ├── page.tsx                        # Catalogue recettes + filtre profil
│   │   └── _actions/
│   │       └── favorites.action.ts         # Server Action : sauvegarder/retirer favori recette
│   │
│   ├── learn/
│   │   ├── page.tsx                        # Bibliothèque d'articles + lecture inline
│   │   ├── _actions/
│   │   │   └── read.action.ts              # Server Action : marquer article comme lu
│   │   └── [slug]/quiz/
│   │       └── page.tsx                    # Quiz interactif associé à un article
│   │
│   ├── map/
│   │   ├── page.tsx                        # Store Locator (carte statique + inventaires)
│   │   └── _components/
│   │       └── PartnerCard.tsx             # Carte d'un commerce partenaire
│   │
│   ├── partners/
│   │   ├── page.tsx                        # Dashboard partenaire (gestion inventaire)
│   │   ├── _actions/
│   │   │   └── inventory.action.ts         # Server Action : mise à jour stock
│   │   └── _components/
│   │       └── InventoryRow.tsx            # Ligne d'inventaire éditable
│   │
│   └── profile/
│       ├── page.tsx                        # Profil utilisateur (lecture BMR/TDEE/conditions)
│       └── _components/
│           └── LogoutButton.tsx            # Bouton déconnexion (Client Component)
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx                     # Navigation latérale principale
│   │   └── TopBar.tsx                      # Barre supérieure (avatar + notifications)
│   └── ui/
│       └── ProductImage.tsx                # Composant image produit avec fallback
│
├── lib/
│   ├── auth.ts                             # Helpers : getUser, requireAuth, getHealthProfile
│   ├── database.types.ts                   # Types TypeScript générés depuis le schéma Supabase
│   │
│   ├── nutrition/
│   │   └── productWarnings.ts              # Logique d'alertes profil × produit
│   │
│   ├── queries/                            # Couche d'accès données (Supabase queries)
│   │   ├── articles.ts                     # Requêtes articles + suivi lecture
│   │   ├── favorites.ts                    # Requêtes produits/recettes favoris
│   │   ├── partners.ts                     # Requêtes partenaires + inventaire
│   │   ├── products.ts                     # Requêtes produits + pagination + recherche
│   │   └── recipes.ts                      # Requêtes recettes + pagination + filtres
│   │
│   ├── recommendations/                    # Moteur de recommandation IA
│   │   ├── types.ts                        # Interfaces TypeScript du moteur
│   │   ├── scoring.ts                      # Algorithme de scoring (produits + recettes)
│   │   ├── reasons.ts                      # Génération des libellés de recommandation
│   │   └── queries.ts                      # Façade principale + chargement du contexte
│   │
│   └── supabase/
│       ├── client.ts                       # Client Supabase navigateur (createBrowserClient)
│       ├── server.ts                       # Client Supabase serveur (createServerClient + cookies)
│       └── admin.ts                        # Client admin avec SERVICE_ROLE_KEY (bypass RLS)
│
└── proxy.ts                                # Proxy de configuration (usage interne)
```

---

## 3. Base de données — Tables et colonnes

### Table `profiles`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK, FK → auth.users(id) ON DELETE CASCADE | Identifiant utilisateur |
| email | text | NOT NULL | Email |
| full_name | text | — | Nom complet |
| avatar_url | text | — | URL avatar |
| role | text | NOT NULL, DEFAULT 'user', CHECK IN ('user','nutritionist','partner_admin','admin') | Rôle |
| created_at | timestamptz | NOT NULL, DEFAULT now() | Création |
| updated_at | timestamptz | NOT NULL, DEFAULT now() | Mise à jour |

### Table `user_health_profiles`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK, DEFAULT uuid_generate_v4() | Identifiant |
| user_id | uuid | NOT NULL, FK → profiles(id) ON DELETE CASCADE, UNIQUE | Utilisateur propriétaire |
| age | smallint | CHECK (age > 0 AND age < 130) | Âge |
| weight_kg | numeric(5,2) | CHECK (weight_kg > 0) | Poids |
| height_cm | numeric(5,2) | CHECK (height_cm > 0) | Taille |
| activity_level | text | CHECK IN ('sedentary','moderate','active') | Niveau d'activité |
| health_conditions | text[] | DEFAULT '{}' | Conditions médicales |
| goals | text[] | DEFAULT '{}' | Objectifs nutritionnels |
| bmr_kcal | numeric(7,2) | — | Métabolisme de base (Harris-Benedict) |
| tdee_kcal | numeric(7,2) | — | Dépense énergétique totale |
| is_complete | boolean | NOT NULL, DEFAULT false | Profil complété |
| created_at | timestamptz | NOT NULL, DEFAULT now() | Création |
| updated_at | timestamptz | NOT NULL, DEFAULT now() | Mise à jour |

### Table `partners`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK | Identifiant |
| owner_id | uuid | FK → profiles(id) ON DELETE SET NULL | Propriétaire |
| name | text | NOT NULL | Nom du commerce |
| description | text | — | Description |
| logo_url, cover_url | text | — | Images |
| address_line, city, postal_code | text | — | Adresse |
| country | text | NOT NULL, DEFAULT 'DZ' | Pays |
| latitude, longitude | numeric(9,6) | — | Coordonnées GPS |
| phone, email, website | text | — | Contact |
| opening_hours | jsonb | — | Horaires d'ouverture |
| partner_code | text | UNIQUE | Code partenaire SmartHeart |
| is_active | boolean | NOT NULL, DEFAULT true | Actif |
| is_verified | boolean | NOT NULL, DEFAULT false | Vérifié |
| created_at, updated_at | timestamptz | NOT NULL | Horodatages |

### Table `product_categories`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK | Identifiant |
| name | text | NOT NULL, UNIQUE | Nom |
| slug | text | NOT NULL, UNIQUE | Slug URL |
| icon | text | — | Icône Material |
| parent_id | uuid | FK → product_categories(id) ON DELETE SET NULL | Catégorie parente |
| sort_order | smallint | NOT NULL, DEFAULT 0 | Ordre d'affichage |

**Données initiales :** Épicerie salée, Produits laitiers, Boissons, Boulangerie, Fruits & Légumes, Épicerie sucrée

### Table `products`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK | Identifiant |
| category_id | uuid | FK → product_categories(id) ON DELETE SET NULL | Catégorie |
| name | text | NOT NULL | Nom |
| brand | text | — | Marque |
| description | text | — | Description |
| barcode | text | UNIQUE | Code-barres |
| image_url | text | — | Image principale |
| image_urls | text[] | DEFAULT '{}' | Galerie images |
| nutri_score | char(1) | CHECK IN ('A','B','C','D','E') | Nutri-Score |
| glycemic_index | smallint | CHECK >= 0 AND <= 100 | Indice glycémique |
| labels | text[] | DEFAULT '{}' | Labels (bio, vegan, sans_gluten, halal…) |
| compatible_with | text[] | DEFAULT '{}' | Profils compatibles |
| energy_kcal | numeric(7,2) | — | Énergie |
| carbs_g | numeric(6,2) | — | Glucides |
| sugars_g | numeric(6,2) | — | Sucres |
| fat_g | numeric(6,2) | — | Lipides |
| saturated_fat_g | numeric(6,2) | — | Acides gras saturés |
| fiber_g | numeric(6,2) | — | Fibres |
| protein_g | numeric(6,2) | — | Protéines |
| sodium_g | numeric(6,2) | — | Sodium |
| is_published | boolean | NOT NULL, DEFAULT true | Publié |
| created_at, updated_at | timestamptz | NOT NULL | Horodatages |

**Index :** glycemic_index, nutri_score, labels (GIN), compatible_with (GIN)

### Table `partner_inventory`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK | Identifiant |
| partner_id | uuid | NOT NULL, FK → partners(id) ON DELETE CASCADE | Partenaire |
| product_id | uuid | NOT NULL, FK → products(id) ON DELETE CASCADE | Produit |
| price | numeric(10,2) | NOT NULL, CHECK >= 0 | Prix |
| currency | char(3) | NOT NULL, DEFAULT 'DZD' | Devise |
| quantity | integer | NOT NULL, DEFAULT 0, CHECK >= 0 | Stock |
| is_available | boolean | NOT NULL, DEFAULT true | Disponible |
| low_stock_threshold | integer | NOT NULL, DEFAULT 5 | Seuil alerte stock faible |
| updated_at | timestamptz | NOT NULL | Mise à jour |
| — | — | UNIQUE (partner_id, product_id) | Unicité |

### Table `recipes`
| Colonne | Type | Contraintes | Description |
|---------|------|-------------|-------------|
| id | uuid | PK | Identifiant |
| created_by | uuid | FK → profiles(id) ON DELETE SET NULL | Auteur |
| title | text | NOT NULL | Titre |
| description | text | — | Description |
| image_url | text | — | Image |
| prep_time_min | smallint | CHECK >= 0 | Temps préparation |
| cook_time_min | smallint | CHECK >= 0 | Temps cuisson |
| servings | smallint | CHECK > 0, DEFAULT 2 | Portions |
| difficulty | text | CHECK IN ('easy','medium','hard'), DEFAULT 'medium' | Difficulté |
| calories_kcal | numeric(7,2) | — | Calories |
| price_estimate | numeric(6,2) | — | Prix estimé (DZD) |
| diet_tags | text[] | DEFAULT '{}' | Tags régimes |
| compatible_with | text[] | DEFAULT '{}' | Profils compatibles |
| is_published | boolean | NOT NULL, DEFAULT true | Publié |
| is_featured | boolean | NOT NULL, DEFAULT false | Mise en avant |
| created_at, updated_at | timestamptz | NOT NULL | Horodatages |

### Tables quiz
- **`quizzes`** : id, article_id (FK), title, created_at
- **`quiz_questions`** : id, quiz_id (FK), question, sort_order
- **`quiz_answers`** : id, question_id (FK), answer_text, is_correct, explanation, sort_order
- **`user_quiz_results`** : id, user_id (FK), quiz_id (FK), score, max_score, completed_at

### Tables favoris et historique
- **`user_saved_products`** : PK (user_id, product_id), saved_at
- **`user_saved_recipes`** : PK (user_id, recipe_id), saved_at
- **`user_read_articles`** : PK (user_id, article_id), read_at

### Tables shopping list
- **`shopping_lists`** : id, user_id (FK), name, is_active, created_at
- **`shopping_list_items`** : id, shopping_list_id (FK), product_id (FK), product_name, quantity, is_checked, added_at

### Table alertes
- **`patient_alerts`** : id, nutritionist_id (FK), patient_id (FK), type (warning/success/info), title, message, is_read, created_at

### Tables analytics
- **`partner_product_views`** : id, partner_id (FK), product_id (FK), user_id (FK nullable), viewed_at
- **`product_search_logs`** : id, partner_id (FK nullable), product_id (FK nullable), search_term, user_id (FK nullable), searched_at

### Vue analytique
- **`partner_daily_views`** : agrégation quotidienne des vues par partenaire (30 derniers jours)

---

## 4. Politiques RLS (Row Level Security)

| Table | Politique | Opération | Règle |
|-------|-----------|-----------|-------|
| profiles | Lecture publique des profils | SELECT | `true` (tous) |
| profiles | Modification de son propre profil | UPDATE | `auth.uid() = id` |
| user_health_profiles | Accès à son propre profil santé | ALL | `auth.uid() = user_id` |
| products | Lecture publique des produits | SELECT | `is_published = true` |
| product_categories | Lecture publique des catégories | SELECT | `true` |
| recipes | Lecture publique des recettes publiées | SELECT | `is_published = true` |
| recipe_ingredients | Lecture publique des ingrédients | SELECT | `true` |
| recipe_steps | Lecture publique des étapes | SELECT | `true` |
| articles | Lecture publique des articles publiés | SELECT | `is_published = true` |
| user_saved_products | Gestion de ses produits favoris | ALL | `auth.uid() = user_id` |
| user_saved_recipes | Gestion de ses recettes favorites | ALL | `auth.uid() = user_id` |
| user_read_articles | Gestion de ses articles lus | ALL | `auth.uid() = user_id` |
| shopping_lists | Gestion de ses listes de courses | ALL | `auth.uid() = user_id` |
| shopping_list_items | Gestion des items de ses listes | ALL | Sous-requête : `sl.user_id = auth.uid()` |
| partners | Lecture publique des partenaires actifs | SELECT | `is_active = true` |
| partners | Modification par le propriétaire | UPDATE | `auth.uid() = owner_id` |
| partner_inventory | Lecture publique de l'inventaire | SELECT | `is_available = true` |
| partner_inventory | Gestion par le partenaire | ALL | Sous-requête : `p.owner_id = auth.uid()` |
| patient_alerts | Visible par nutritionniste et patient | SELECT | `auth.uid() = nutritionist_id OR auth.uid() = patient_id` |
| patient_alerts | Création par le nutritionniste | INSERT | `auth.uid() = nutritionist_id` |

**Tables sans RLS configuré :** quizzes, quiz_questions, quiz_answers, user_quiz_results, shopping_lists (sécurisé indirectement), partner_product_views, product_search_logs

---

## 5. Relations entre les tables

```
auth.users (Supabase Auth)
    │
    └──► profiles (1:1 via trigger on_auth_user_created)
              │
              ├──► user_health_profiles (1:1, user_id UNIQUE)
              │
              ├──► user_saved_products (N:M avec products)
              ├──► user_saved_recipes  (N:M avec recipes)
              ├──► user_read_articles  (N:M avec articles)
              │
              ├──► shopping_lists (1:N)
              │         └──► shopping_list_items (1:N → products nullable)
              │
              ├──► patient_alerts (nutritionist_id et patient_id)
              │
              └──► partners (1:N via owner_id)
                        └──► partner_inventory (N:M avec products)
                        └──► partner_product_views (analytics)
                        └──► product_search_logs (analytics)

product_categories (auto-référence parent_id)
    └──► products (1:N via category_id)
              ├──► recipe_ingredients (nullable product_id)
              ├──► partner_inventory
              ├──► partner_product_views
              ├──► product_search_logs
              └──► shopping_list_items

recipes
    ├──► recipe_ingredients (1:N)
    ├──► recipe_steps (1:N)
    └──► user_saved_recipes

articles
    ├──► quizzes (1:1)
    │         └──► quiz_questions (1:N)
    │                    └──► quiz_answers (1:N)
    └──► user_read_articles
```

---

## 6. Algorithme de recommandation

### Vue d'ensemble

Le moteur est localisé dans `src/lib/recommendations/`. Il est déclenché à chaque chargement du dashboard via `getRecommendations(userId, productLimit=6, recipeLimit=4)`.

### Flux d'exécution

```
getRecommendations(userId)
    │
    ├── loadContext(supabase, userId)   [5 requêtes parallèles]
    │   ├── user_health_profiles        → conditions, goals, tdee_kcal
    │   ├── user_saved_products         → savedProductIds
    │   ├── user_saved_recipes          → savedRecipeIds
    │   ├── partner_product_views       → popularProductIds (50 dernières vues)
    │   └── product_search_logs         → popularProductIds (50 dernières recherches)
    │       └── [si popularProductIds vide] → fallback global (50 vues globales)
    │       └── affinityCategoryIds     → catégories des produits populaires
    │
    ├── Promise.all([
    │   supabase.products (is_published=true),
    │   supabase.recipes  (is_published=true)
    │   ])
    │
    ├── buildProductRecommendations()   → scoreProduct() × N produits
    └── buildRecipeRecommendations()    → scoreRecipe() × N recettes
```

### Normalisation des conditions médicales

Les chaînes brutes sont normalisées par `normalizeConditions()` :
- Contient "diab" → `"diabetic"`
- Contient "celi", "coelia", "gluten" → `"celiac"`
- Contient "vegan" → `"vegan"`
- Contient "veget" → `"vegetarian"`
- Contient "hyper", "cardio", "tension" → `"cardiovascular"`

### Scoring des produits (max 100 points)

| Axe | Poids max | Détail |
|-----|-----------|--------|
| **health** | 35 | Compatibilité conditions médicales |
| **nutri** | 20 | Nutri-Score |
| **gi** | 20 | Indice glycémique |
| **fiber** | 10 | Teneur en fibres |
| **sodium** | 5 | Teneur en sodium |
| **labels** | 5 | Labels (bio, sans_gluten, vegan, halal) |
| **popularity** | 5 | Popularité comportementale |

#### Détail — Axe `health` (35 pts)
- `conditions.length == 0` → 18 pts (neutre)
- Toutes conditions matchées → 35 pts + signal `compatible_full`
- Quelques conditions matchées → 22 pts + signal `compatible_partial`
- Pas de données compat → 14 pts
- Incompatible → 8 pts

#### Détail — Axe `nutri` (20 pts)
| Nutri-Score | Points |
|-------------|--------|
| A | 20 |
| B | 16 |
| C | 11 |
| D | 5 |
| E | 1 |
| Absent | 10 (neutre) |

#### Détail — Axe `gi` (20 pts) — Mode diabétique
| IG | Points (diabétique) | Points (standard) |
|----|---------------------|-------------------|
| ≤ 35 | 20 — signal `gi_excellent` | 14 |
| ≤ 55 | 15 — signal `gi_good` | 12 |
| ≤ 69 | 5 — signal `gi_medium` | 8 |
| ≥ 70 | 0 — signal `gi_high` | 4 |
| Absent | 10 (neutre) | 10 |

#### Détail — Axe `fiber` (10 pts)
| Fibres | Points |
|--------|--------|
| ≥ 5g | 10 — signal `fiber_high` |
| ≥ 3g | 7 — signal `fiber_good` |
| < 3g | 2 |
| Absent | 4 |

#### Détail — Axe `sodium` (5 pts)
| Sodium | Standard | Cardiovasculaire |
|--------|----------|------------------|
| ≤ 0.1g | 5 | 5 |
| ≤ 0.4g | 4 | 2 |
| > 0.4g | 2 | 0 + signal `sodium_high` |

#### Exclusions dures (produits)
- **Cœliaque :** si le produit n'a pas le label `sans_gluten` ET n'est pas `compatible_with: ["celiac"]` → score 0, excluded = true, motif : "Non compatible sans gluten"

#### Garde-fous (produits)
- **Diabétique + IG ≥ 70 :** `health` plafonné à 12, signal `compatible_full` retiré
- **Diabétique + sucres > 15g :** `gi -= 5`, `nutri -= 4`, signal `sugar_high`
- **Perte de poids + kcal ≥ 400 :** `nutri -= 3`, signal `energy_dense`

### Scoring des recettes (max 100 points)

| Axe | Poids max | Détail |
|-----|-----------|--------|
| **health** | 40 | Compatibilité conditions médicales |
| **diet_tags** | 20 | Tags régimes (faible_ig, sans_gluten, keto…) |
| **calories** | 15 | Calories vs TDEE ou valeur absolue |
| **difficulty** | 10 | Difficulté (easy=10, medium=7, hard=4) |
| **featured** | 10 | Recette mise en avant |
| **variety** | 5 | Temps total de préparation |

#### Détail — Tags recettes (20 pts)
| Tag | Points (standard) | Points (profil spécifique) |
|-----|-------------------|---------------------------|
| faible_ig / low_gi / diabetic_friendly | 7 | 12 si diabétique |
| sans_gluten | 3 | 8 si cœliaque |
| high_fiber / fiber | 4 | 4 |
| healthy | 3 | 3 |
| eco | 1 | 1 |
| keto (si lose_weight) | 3 | 3 |

#### Détail — Calories (15 pts) avec TDEE disponible
| Part TDEE | Points |
|-----------|--------|
| 20–40% | 15 — `calories_balanced` |
| < 20% | 11 — `calories_light` |
| 40–50% | 8 |
| > 50% | 4 (signal `calories_high` si lose_weight) |

#### Filtrage final
- Score minimum requis : **35 points**
- Si aucun qualifié → fallback : top N sans filtre de score
- Diversification produits : **max 2 par catégorie**
- Diversification recettes : **max 2 par bucket (difficulté × tranche-temps)**

---

## 7. Logique des avertissements produits (`productWarnings.ts`)

Système de badge unique par carte produit sur la page `/search`. Priorité décroissante :

### 1. Cœliaque (priorité maximale — sécurité alimentaire)
| Condition | Badge | Niveau | Icône |
|-----------|-------|--------|-------|
| `labels` ne contient pas `sans_gluten` ET `compatible_with` ne contient pas `celiac` | "Vérifier le gluten" | `warning` (fond amber) | `warning` |
| Produit conforme | "Sans gluten ✓" | `positive` (fond emerald) | `check_circle` |

### 2. Diabétique (IG puis Nutri-Score)
| Condition | Badge | Niveau |
|-----------|-------|--------|
| IG ≥ 70 | "IG élevé — à limiter" | `warning` |
| Nutri-Score D ou E | "À consommer avec prudence" | `caution` (fond slate) |
| IG ≤ 35 | "IG faible — adapté" | `positive` |
| Autres | aucun badge | — |

### 3. Végétarien / Vegan
| Condition | Badge | Niveau |
|-----------|-------|--------|
| Aucun label vegan/végétalien ET pas compatible | "Vérifier la composition" | `caution` |
| Conforme | aucun badge | — |

### 4. Healthy (mode sain général)
| Condition | Badge | Niveau |
|-----------|-------|--------|
| Nutri-Score D ou E | "Choix moins équilibré" | `caution` |
| Nutri-Score A | "Excellent choix" | `positive` |
| Autres | aucun badge | — |

**Styles visuels :**
- `warning` : fond amber-50, texte amber-800, bordure amber-200
- `caution` : fond slate-50, texte slate-600, bordure slate-200
- `positive` : fond emerald-50, texte emerald-700, bordure emerald-200

---

## 8. Pages implémentées

### `/login` — Authentification
- **Composants :** `AuthTabs` (Login/Register), `LoginForm`, `RegisterForm`
- **Server Actions :** `login.action.ts`, `register.action.ts`, `logout.action.ts`
- **Logique :** Formulaire split — page gauche auth, page droite marketing avec témoignages fictifs
- **Pas de middleware** — protection via `requireAuth()` dans chaque page

### `/profile-setup-step-1` — Profil biométrique (Étape 1/2)
- **Données collectées :** âge, poids, taille, niveau d'activité
- **Calcul :** Harris-Benedict révisé (homme uniquement) → BMR puis TDEE
  - `BMR = 10 × poids + 6.25 × taille − 5 × âge + 5`
  - `TDEE = BMR × facteur_activité` (1.2 / 1.55 / 1.725)
- **Validation :** Zod (age 1-129, poids > 0, taille > 0, activité enum)
- **Stockage :** `upsert` dans `user_health_profiles`, `is_complete = false`
- **Redirect :** vers `/profile-setup-step-2`

### `/profile-setup-step-2` — Conditions & objectifs (Étape 2/2)
- **Données collectées :** health_conditions[], goals[]
- **Validation :** Zod (arrays de strings)
- **Stockage :** `update` sur `user_health_profiles`, `is_complete = true`
- **Redirect :** vers `/dashboard`

### `/dashboard` — Tableau de bord principal
- **Auth :** `requireAuth()` → redirect `/login` si non authentifié
- **Données :** `getRecommendations()`, `getHealthProfile()`, `getPartners()`, `getUserReadArticleIds()` — parallèles
- **Sections :**
  1. KPI Cards : produits/recettes sauvegardés, articles lus, TDEE
  2. Banner "Profil incomplet" si `is_complete = false`
  3. Banner fallback si profil complet mais peu de correspondances
  4. Grille "Pour vous" (6 produits recommandés)
  5. "Recette du jour" (1ère recette recommandée)
  6. "Conseil du jour" (adapté si diabétique)
  7. "Recettes adaptées" (recettes 2 à 4)
  8. "Commerces proches" (3 premiers partenaires)

### `/search` — Catalogue produits
- **Auth :** `requireAuth()`
- **URL params :** `q` (recherche), `score` (filtre Nutri-Score A-E), `page`
- **Pagination :** 12 produits par page, fenêtre de 5 pages
- **Features :** Banner "profil santé actif", badge warning par produit, bookmark favoris
- **Composants :** `ProductImage`, filtres latéraux statiques

### `/search/[id]` — Fiche produit
- Fiche détaillée d'un produit unique avec toutes les valeurs nutritionnelles

### `/recipes` — Catalogue recettes
- **URL params :** `tags` (filtres régimes), `q` (recherche), `page`, `all=1` (bypass filtre profil)
- **Filtre profil :** si `is_complete` ET conditions, filtre auto `compatible_with`
- **Override :** bouton "Voir toutes" qui ajoute `all=1`
- **Tags disponibles :** faible_ig, sans_gluten, vegetalien, keto, premium, eco

### `/learn` — Bibliothèque nutritionnelle
- **Auth :** `requireAuth()`
- **Layout :** Liste articles (colonne gauche) + Lecture inline (colonne droite)
- **Filtres :** par catégorie (glycemic_index, labels, fiber, general)
- **Suivi progression :** barre de progression articles lus / total
- **Server Action :** marquer article comme lu dans `user_read_articles`
- **Quiz :** lien vers `/learn/[slug]/quiz`

### `/map` — Store Locator
- **Données :** liste des partenaires actifs + inventaire du partenaire sélectionné
- **Carte :** image statique simulée (pas de SDK cartographique)
- **Marqueurs :** positionnés sur positions prédéfinies (6 slots cycliques)
- **Interactivité :** clic sur marqueur/card → `?partner=ID` → chargement inventaire
- **Bande du bas :** scroll horizontal des produits en stock du partenaire sélectionné
- **Données Annaba :** 5 partenaires (UNO Hypermarché, Ardis Market, Supérette El Hadjar, Bio Santé Store, Pharma Nutrition+)

### `/profile` — Profil utilisateur
- **Données :** profil + `user_health_profiles` (BMR, TDEE, conditions, objectifs)
- **Sections :** Identité + rôle, données biométriques (4 KPIs), objectif calorique (BMR/TDEE), conditions médicales, objectifs
- **Édition :** liens vers `/profile-setup-step-1` et `/profile-setup-step-2`

### `/partners` — Dashboard partenaire
- **Fonctionnalité :** gestion de l'inventaire (prix, stock, disponibilité)
- **Server Action :** `inventory.action.ts` pour mise à jour des stocks

---

## 9. Sécurité et authentification

### Absence de middleware centralisé
Le fichier `middleware.ts` est **absent** du projet. La protection des routes est entièrement assurée par la fonction `requireAuth()` appelée dans chaque Server Component protégé.

### Flux d'authentification

```
1. Utilisateur non authentifié → /login
2. Inscription (RegisterForm)
   → register.action.ts
   → supabase.auth.signUp()
   → trigger on_auth_user_created → INSERT profiles
3. Connexion (LoginForm)
   → login.action.ts
   → supabase.auth.signInWithPassword()
   → Session stockée en cookies HTTP
4. Accès page protégée
   → requireAuth() dans Server Component
   → supabase.auth.getUser() (cookie → token Supabase)
   → SELECT profiles WHERE id = user.id
   → Si absent → redirect('/login')
5. Déconnexion (LogoutButton Client Component)
   → logout.action.ts
   → supabase.auth.signOut()
   → redirect('/login')
```

### Fonctions d'authentification (`src/lib/auth.ts`)

| Fonction | Rôle | Retour |
|----------|------|--------|
| `getUser()` | Récupère l'utilisateur Supabase ou null | `User \| null` |
| `requireAuth()` | Récupère profil ou redirect '/login' | `Profile` |
| `getHealthProfile()` | Récupère profil santé ou null | `UserHealthProfile \| null` |

### Clients Supabase

| Client | Fichier | Usage | Note sécurité |
|--------|---------|-------|---------------|
| Server | `supabase/server.ts` | Server Components, Server Actions | Lit/écrit les cookies de session |
| Browser | `supabase/client.ts` | Client Components | Utilise `createBrowserClient` |
| Admin | `supabase/admin.ts` | Opérations admin (bypass RLS) | Utilise `SUPABASE_SERVICE_ROLE_KEY` |

### Variables d'environnement requises
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (admin uniquement)

---

## 10. Points forts

1. **Moteur de recommandation multi-axe documenté** : 7 axes pour produits, 6 pour recettes, avec pondérations explicites et garde-fous médicaux réfléchis.

2. **Architecture Server Components** : données chargées côté serveur (0 useEffect, 0 appel API client-side), excellente performance et SEO.

3. **Requêtes parallèles** : usage systématique de `Promise.all()` pour les chargements multi-sources (ex: dashboard charge 4 sources en parallèle).

4. **Sécurité RLS Supabase** : Row Level Security activé sur 16 tables avec des politiques granulaires par rôle et par propriété.

5. **Validation Zod** : schemas stricts sur toutes les Server Actions avec messages d'erreur explicites.

6. **Typage TypeScript strict** : types générés depuis le schéma Supabase, interfaces dédiées pour chaque sous-domaine du moteur de recommandation.

7. **Exclusions dures pour cas médicaux critiques** : un cœliaque ne voit jamais un produit contenant gluten recommandé (excluded = true, score = 0).

8. **Calcul TDEE/BMR intégré** : formule de Harris-Benedict, multiplicateur d'activité, utilisé dans le scoring des recettes.

9. **Filtre profil réversible sur /recipes** : l'utilisateur peut désactiver le filtre auto avec `all=1` sans perdre ses filtres manuels.

10. **Analytics partenaire** : vues produits et logs de recherche permettent un signal de popularité réel pour le scoring.

11. **Données initiales cohérentes** : 12 produits, 4 recettes, 5 partenaires, 4 articles avec quiz pour Annaba — ensemble permettant des démonstrations complètes.

---

## 11. Lacunes et limitations techniques

1. **Pas de middleware centralisé** : la protection des routes repose sur des appels manuels à `requireAuth()`. Un oubli dans une nouvelle page expose la route. Un middleware Next.js centralisé serait plus robuste.

2. **Formule BMR homme uniquement** : `BMR = 10×poids + 6.25×taille − 5×âge + 5` est la formule Mifflin-St Jeor pour l'homme. La formule féminine (`+ 5` → `− 161`) n'est pas implémentée. Le profil ne collecte pas le genre.

3. **Carte statique sans SDK cartographique** : `/map` utilise une image fixe avec marqueurs positionnés en dur (6 slots prédéfinis). Il n'y a pas de géolocalisation réelle, ni de routing, ni de calcul de distance.

4. **Pas de filtres par distance géographique** : les coordonnées GPS sont stockées (latitude, longitude) mais jamais utilisées pour trier les partenaires.

5. **Pas de tests automatisés** : aucun fichier `*.test.ts`, `*.spec.ts`, ni configuration Jest/Vitest/Playwright.

6. **Pas de gestion des rôles dans les pages** : la table `profiles` supporte 4 rôles (`user`, `nutritionist`, `partner_admin`, `admin`) mais les pages ne différencient pas les accès (ex: `/partners` devrait n'être accessible qu'aux `partner_admin`).

7. **Carte est une image externe hébergée** : la carte dans `/map` est une image Google/AIDA hébergée sur des serveurs tiers — lien de dépendance fragile.

8. **Pas de recherche full-text avancée** : la recherche dans `/search` utilise un filtre `ilike` standard. Il n'y a pas d'indexation full-text (ex: PostgreSQL `tsvector`) ni de tolérance aux fautes de frappe.

9. **Pas de notifications temps réel** : les alertes patient sont stockées mais pas diffusées en temps réel (pas de Supabase Realtime subscriptions).

10. **Données de test en dur dans le SQL** : les images produits et recettes pointent vers des URLs Unsplash/pplx — dépendance aux CDN externes, fragiles en production.

11. **Absence de gestion des erreurs globale** : pas de `error.tsx` ou `not-found.tsx` dans l'arborescence, pas de boundary d'erreur React visible.

12. **Dashboard partenaire limité** : `/partners` ne présente pas encore les analytiques (vues, recherches) malgré les tables et la vue `partner_daily_views` existantes.

13. **Quiz partiellement implémenté** : la page `/learn/[slug]/quiz` existe mais l'enregistrement des résultats dans `user_quiz_results` n'est pas visible dans le code analysé.

14. **Pas de mode hors-ligne / PWA** : pas de `manifest.json`, pas de service worker.

---

*Rapport généré le 2026-05-25 — Analyse basée sur le code source de `hearth/` dans son état actuel.*
