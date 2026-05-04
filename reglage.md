Dans le projet SmartHeart Next.js 15, le dashboard (src/app/dashboard/page.tsx) affiche
encore des produits et recettes hardcodés/mock au lieu des vraies données Supabase.

## Problème observé
- Des produits fictifs s'affichent (Quinoa Royal des Andes, Flocons d'Avoine Entiers Bio
  avec marque Soummam) alors que ces produits n'existent pas dans la base
- Des cartes avec images cassées apparaissent (Lentilles Vertes Sèches, Pois Chiches Secs Bio)
- La section recettes affiche "Aucune recette disponible" alors que 4 recettes existent en base

## Ce qui existe réellement en base Supabase

Produits (avec image_url remplie) :
- Avocat Hass (Terroir DZ) — id: 18e53987-b632-4766-8ce2-ae873792fe3d
- Carottes bio (Terroir DZ) — id: feb3de07-cceb-4cce-80db-9371e6e3e29e
- Eau minérale plate (Ifri) — id: ac5c970e-f585-4dd9-a7a3-9876f2464b0b
- Flocons d'Avoine Entiers Bio (Safia) — id: e5b8b618-ffba-4a50-9694-6eb45d82f8c5
- Fromage blanc maigre (Soummam) — id: 07666c43-cfd2-4331-97a8-388d75b7d2d7
- Lentilles Vertes Sèches (Boni) — id: 9134e456-2dfc-4f41-b484-327732377573
- Miel pur naturel (Bejaia Miel) — id: 5338e3b9-10e5-4a3f-8306-1a92ba6d3553
- Pain complet au blé entier (Rania) — id: d20338da-a194-4165-81ee-9f8a39088164
- Pois Chiches Secs Bio (Zitoun) — id: a831ebf0-38c4-4e4d-a60d-2a1342572acb
- Pommes Gala (Terroir DZ) — id: 8e18abec-554e-4ae5-bb69-d5e9269002f2
- Riz basmati complet (El Boustane) — id: 9207d90d-5233-4392-9783-4425773fd93b
- Yaourt nature 0% (Hodna) — id: 9322297a-7aee-44c0-8061-89ca3127c73e

Recettes (toutes avec is_published=true et image_url remplie) :
- Bol Riz Basmati & Poulet Grillé — is_featured: false
- Porridge à l'Avoine & Pomme — is_featured: true
- Salade de Lentilles Méditerranéenne — is_featured: true
- Smoothie Avocat & Yaourt Nature — is_featured: true

## Correction à appliquer dans src/app/dashboard/page.tsx

1. Lire le fichier src/app/dashboard/page.tsx
2. Identifier tout tableau de données hardcodées (produits mock, recettes mock)
3. Remplacer par des vraies requêtes Supabase :

Pour les produits vedettes du dashboard :
```ts
const { data: featuredProducts } = await supabase
  .from('products')
  .select('*')
  .eq('is_published', true)
  .limit(6)
  .order('created_at', { ascending: false })
```

Pour les recettes du dashboard :
```ts
const { data: featuredRecipes } = await supabase
  .from('recipes')
  .select('*')
  .eq('is_published', true)
  .eq('is_featured', true)
  .limit(3)
```

4. S'assurer que image_url est utilisé dans les composants <Image /> ou <img />
5. Ajouter un fallback si image_url est null :
   - Pour les produits : afficher un placeholder gris avec l'initiale du nom
   - Pour les recettes : afficher un placeholder avec l'icône 🍽️

## Règles
- NE PAS changer le design visuel
- Utiliser le pattern Server Component (pas de useEffect)
- Utiliser createClient(cookieStore) avec await cookies()
- Si un composant enfant reçoit les données via props, adapter les props en conséquence
- NE PAS ajouter de librairies

Commence par lire src/app/dashboard/page.tsx et tous les composants qu'il importe
avant d'appliquer les corrections.