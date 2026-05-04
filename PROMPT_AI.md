# MISSION CLAUDE CODE — SYSTÈME DE RECOMMANDATION IA V1 POUR SMARTheart

Tu travailles sur le projet SmartHeart.

SmartHeart est une application web de nutrition intelligente développée avec Next.js App Router, Supabase, TypeScript strict et Tailwind CSS. Le produit cible principalement :
- les personnes diabétiques,
- les personnes cœliaques,
- les utilisateurs qui cherchent une alimentation saine,
- potentiellement un usage en Algérie, notamment Annaba.

L’application contient déjà :
- un dashboard,
- une recherche produits,
- des recettes,
- une carte partenaires,
- une section d’apprentissage,
- un profil utilisateur,
- une base Supabase déjà structurée.

Ta mission est d’implémenter un **système de recommandation IA V1**, réaliste, robuste, explicable, et totalement compatible avec le projet existant.

IMPORTANT :
- Ici, “IA” signifie un moteur intelligent de recommandation basé sur scoring, règles métier, signaux utilisateur et priorisation personnalisée.
- N’utilise aucune API externe payante.
- N’ajoute pas pgvector, embeddings, PostGIS, LLMs, notifications, workers, cron jobs ou nouvelles extensions SQL.
- N’invente pas de nouvelles tables si ce n’est pas absolument nécessaire.
- Réutilise d’abord le schéma et les patterns existants.
- Garde le design actuel.
- Tous les textes UI doivent être en français.

==================================================
1. OBJECTIF PRODUIT
==================================================

Le système doit recommander à l’utilisateur :

1. Des produits adaptés à son profil santé
2. Des recettes adaptées à son profil santé
3. Des suggestions expliquées clairement
4. Des recommandations utiles même si le profil est incomplet
5. Des recommandations robustes qui évitent les incompatibilités critiques

Le système doit être :
- simple à comprendre,
- facile à maintenir,
- évolutif vers une V2 plus avancée plus tard.

==================================================
2. SOURCE DE VÉRITÉ — SCHÉMA EXISTANT
==================================================

Avant toute implémentation, lis les fichiers suivants et base-toi dessus uniquement :

- SCHEMA.sql
- src/lib/database.types.ts
- src/lib/auth.ts
- src/lib/supabase/server.ts
- src/lib/supabase/client.ts
- src/app/dashboard/page.tsx
- src/app/search/page.tsx
- src/app/recipes/page.tsx
- src/app/profile/page.tsx
- src/lib/queries/products.ts
- src/lib/queries/recipes.ts
- src/lib/queries/partners.ts
- src/lib/queries/favorites.ts

Respecte les noms exacts du schéma existant.

Le schéma actuel contient déjà notamment :
- public.profiles
- public.user_health_profiles
- public.partners
- public.partner_inventory
- public.product_categories
- public.products
- public.recipes
- public.recipe_ingredients
- public.recipe_steps
- public.articles
- public.user_saved_products
- public.user_saved_recipes
- public.user_read_articles
- public.shopping_lists
- public.shopping_list_items
- public.patient_alerts
- public.partner_product_views
- public.product_search_logs

IMPORTANT :
- N’utilise pas des noms inventés si la base a déjà d’autres noms exacts.
- Vérifie les colonnes exactes dans `database.types.ts`.
- Si tu constates une divergence entre le prompt et les fichiers réels, les fichiers réels priment.

==================================================
3. DONNÉES MÉTIER À EXPLOITER
==================================================

Le moteur doit exploiter les données suivantes si elles existent dans le projet :

### Côté profil santé
Depuis `user_health_profiles` :
- age
- weight_kg
- height_cm
- activity_level
- health_conditions
- goals
- bmr_kcal
- tdee_kcal
- is_complete

### Côté produits
Depuis `products` :
- id
- name
- brand
- description
- image_url
- nutri_score
- glycemic_index
- labels
- compatible_with
- energy_kcal
- carbs_g
- sugars_g
- fat_g
- saturated_fat_g
- fiber_g
- protein_g
- sodium_g
- is_published
- category_id

### Côté recettes
Depuis `recipes` :
- id
- title
- description
- image_url
- prep_time_min
- cook_time_min
- servings
- difficulty
- calories_kcal
- price_estimate
- diet_tags
- compatible_with
- is_published
- is_featured

### Côté comportement utilisateur
Depuis :
- user_saved_products
- user_saved_recipes
- user_read_articles
- product_search_logs
- partner_product_views

### Côté disponibilité commerce
Depuis :
- partners
- partner_inventory

==================================================
4. IDÉE GÉNÉRALE DU SYSTÈME IA V1
==================================================

Le système doit être un moteur de recommandation hybride simple :

A. Rule-based
- applique des règles de compatibilité fortes liées à la santé

B. Score-based
- attribue un score de pertinence de 0 à 100

C. Behavior-aware
- tient compte des signaux comportementaux simples :
  - favoris,
  - recherches,
  - vues,
  - produits populaires

D. Explainable
- génère toujours une raison claire pour chaque recommandation

==================================================
5. CONTRAINTES MÉTIER FORTES
==================================================

Ces règles sont prioritaires et non négociables :

### Règle 1 — Celiac / Sans gluten
Si l’utilisateur a une condition liée à la maladie cœliaque, ne recommande jamais :
- un produit non compatible,
- une recette non compatible,
- un produit qui ne possède aucun signal rassurant tel que `sans_gluten` dans labels ou `celiac` dans compatible_with si cette logique existe dans les données.

### Règle 2 — Diabète
Si l’utilisateur a une condition liée au diabète :
- pénaliser fortement les produits à IG élevé,
- favoriser les produits à IG bas,
- ne jamais présenter comme “idéal” un produit à IG élevé,
- valoriser les produits riches en fibres et à bon Nutri-Score.

### Règle 3 — Profil incomplet
Si le profil santé n’existe pas ou `is_complete = false` :
- utiliser un fallback intelligent,
- recommander des produits génériquement sains,
- recommander des recettes featured / publiées / équilibrées,
- afficher un message incitant à compléter le profil.

### Règle 4 — Exclusion des doublons inutiles
Éviter de recommander :
- les produits déjà sauvegardés par l’utilisateur,
- les recettes déjà sauvegardées si cela fait sens dans l’UI,
- plusieurs recommandations quasi identiques si la diversité peut être améliorée.

### Règle 5 — Données publiées seulement
Ne jamais recommander :
- produits non publiés,
- recettes non publiées.

==================================================
6. CE QU’IL FAUT IMPLÉMENTER
==================================================

Tu dois créer un module de recommandation V1 avec les fichiers suivants.

### Fichiers à créer
1. `src/lib/recommendations/scoring.ts`
2. `src/lib/recommendations/reasons.ts`
3. `src/lib/recommendations/types.ts`
4. `src/lib/recommendations/queries.ts`

### Fichiers à modifier
5. `src/app/dashboard/page.tsx`
6. éventuellement `src/lib/queries/products.ts`
7. éventuellement `src/lib/queries/recipes.ts`
8. éventuellement un composant UI réutilisable si c’est pertinent

### Fichiers facultatifs
9. `src/components/recommendations/RecommendationCard.tsx`
10. `src/app/api/recommendations/route.ts`
11. `src/hooks/useRecommendations.ts`

IMPORTANT :
- Ne crée les fichiers facultatifs que s’ils apportent une vraie valeur.
- Si le projet fonctionne mieux avec Server Components + helpers serveur, préfère cette solution.

==================================================
7. TYPES À CRÉER
==================================================

Créer dans `src/lib/recommendations/types.ts` des types stricts pour éviter tout `any`.

Types attendus, adaptés aux types existants de la base :

- `HealthProfileForRecommendations`
- `ProductForRecommendations`
- `RecipeForRecommendations`
- `RecommendationReason`
- `RecommendedProduct`
- `RecommendedRecipe`
- `RecommendationContext`
- `RecommendationResult<T>`

Exemple d’intention :
- `RecommendedProduct` = produit + `recommendation_score` + `recommendation_reason` + `recommendation_tags`
- `RecommendedRecipe` = recette + `recommendation_score` + `recommendation_reason` + `recommendation_tags`

Utiliser les types de `database.types.ts` comme base.

==================================================
8. LOGIQUE DE SCORING PRODUITS
==================================================

Créer dans `src/lib/recommendations/scoring.ts` une fonction pure :

- `scoreProduct(product, profile, context?)`

Cette fonction doit retourner :
- `score: number`
- éventuellement les détails de scoring si utile pour générer la raison

Le score final doit être borné entre 0 et 100.

### 8.1 Facteurs de scoring produit
Le score produit doit combiner au minimum :

1. Compatibilité santé
2. Nutri-Score
3. Glycemic Index
4. Fibres
5. Sodium
6. Labels utiles
7. Popularité / comportement
8. Diversité / nouveauté légère

### 8.2 Pondérations recommandées
Utilise une base proche de celle-ci :

- compatibilité santé : 35
- nutri_score : 20
- glycemic_index : 20
- fibres : 10
- sodium : 5
- labels utiles : 5
- popularité / comportement : 5

Tu peux ajuster légèrement si le code réel le justifie.

### 8.3 Détails attendus

#### Compatibilité santé
- si `compatible_with` contient une ou plusieurs conditions du profil → bonus fort
- si condition critique absente pour un profil sensible → pénalité ou exclusion
- si produit incompatible → score très bas ou exclusion avant scoring final

#### Nutri-Score
Map conseillé :
- A = 100
- B = 80
- C = 55
- D = 25
- E = 5

#### Glycemic Index
Pour utilisateurs diabétiques :
- IG <= 35 : excellent
- IG <= 55 : bon
- IG <= 69 : moyen
- IG >= 70 : faible

Pour utilisateurs non diabétiques :
- garder l’IG comme facteur utile mais moins dominant

#### Fibres
- >= 5g : excellent
- >= 3g : bon
- < 3g : faible impact

#### Sodium
Si le profil mentionne une problématique cardiovasculaire / hypertension, pénaliser le sodium élevé.
Sinon pondération plus faible.

#### Labels utiles
Exemples :
- sans_gluten
- bio
- halal
- vegan
- autres labels existants réellement en base

Ces labels ne doivent pas dominer le score, seulement l’affiner.

#### Popularité / comportement
Bonus léger pour :
- produits beaucoup vus,
- produits recherchés,
- produits cohérents avec intérêts implicites de l’utilisateur.

IMPORTANT :
ne pas transformer le système en moteur purement “populaire”.
La santé doit rester prioritaire.

==================================================
9. LOGIQUE DE SCORING RECETTES
==================================================

Créer dans `src/lib/recommendations/scoring.ts` une fonction pure :

- `scoreRecipe(recipe, profile, context?)`

Le score doit aussi être borné entre 0 et 100.

### 9.1 Facteurs de scoring recette
- compatibilité santé
- diet_tags
- calories_kcal
- difficulté
- featured / popularité
- éventuellement variété

### 9.2 Pondérations conseillées
- compatibilité santé : 40
- diet_tags : 20
- calories : 15
- difficulté : 10
- featured / popularité : 10
- diversité : 5

### 9.3 Détails

#### Compatibilité
- si `recipe.compatible_with` correspond aux conditions du profil → gros bonus
- si recette incompatible avec une contrainte forte → exclusion

#### Diet tags
Bonus pour des tags comme :
- faible_ig
- sans_gluten
- high_fiber
- diabetic_friendly
- healthy
- tags réellement présents dans la base

#### Calories
Si `tdee_kcal` existe :
- comparer `recipe.calories_kcal` à une portion raisonnable de l’apport journalier
- bonus si cohérent
- ne pas être trop strict

#### Difficulté
- `easy` bonus léger
- `medium` neutre
- `hard` bonus faible ou neutre selon contexte

#### Featured
- `is_featured = true` peut aider en fallback ou pour profils incomplets

==================================================
10. GÉNÉRATION DES RAISONS
==================================================

Créer dans `src/lib/recommendations/reasons.ts` :

- `buildProductRecommendationReason(...)`
- `buildRecipeRecommendationReason(...)`

Chaque recommandation doit avoir :
1. une raison principale,
2. éventuellement 1 à 3 tags secondaires.

### Exemples de raisons produit
- "Idéal pour votre profil"
- "Faible indice glycémique"
- "Compatible avec votre alimentation"
- "Riche en fibres"
- "Nutri-Score A"
- "Sans gluten"
- "Bon équilibre nutritionnel"

### Exemples de raisons recette
- "Recette bien adaptée à votre profil"
- "Compatible avec une alimentation sans gluten"
- "Option intéressante pour mieux contrôler la glycémie"
- "Recette simple et équilibrée"
- "Faible en calories par portion"

IMPORTANT :
- rester court,
- naturel,
- en français,
- ne jamais exposer une logique technique brute,
- ne jamais afficher une raison vide.

==================================================
11. COUCHE DE REQUÊTES
==================================================

Créer `src/lib/recommendations/queries.ts`.

Fonctions minimales :

### 11.1 getRecommendedProducts
Signature attendue :
- `getRecommendedProducts(userId: string, limit = 6)`

Étapes :
1. charger le profil santé de l’utilisateur
2. charger les produits publiés
3. charger les produits déjà sauvegardés
4. charger les signaux comportementaux utiles :
   - recherches utilisateur
   - partner_product_views éventuellement
5. construire un contexte de recommandation
6. scorer tous les produits
7. exclure ceux qui doivent être exclus
8. trier par score décroissant
9. retourner les meilleurs `limit`

### 11.2 getRecommendedRecipes
Signature attendue :
- `getRecommendedRecipes(userId: string, limit = 4)`

Étapes :
1. charger le profil santé
2. charger les recettes publiées
3. charger les recettes déjà sauvegardées si pertinent
4. scorer
5. exclure les incompatibles
6. trier
7. retourner les meilleures

### 11.3 getTrendingProducts
Signature attendue :
- `getTrendingProducts(limit = 4)`

Sources possibles :
- `partner_product_views`
- ou fallback sur produits publiés de bonne qualité si pas assez de données

### 11.4 getRecommendationSummary
Si utile, créer une fonction qui retourne :
- `profileComplete`
- nombre de recommandations
- raison de fallback éventuelle

==================================================
12. FALLBACKS OBLIGATOIRES
==================================================

Le système doit toujours renvoyer quelque chose d’utile.

### Cas A — Pas de profil
Retourner des produits :
- Nutri-Score A ou B
- IG bas à modéré
- largement compatibles

Retourner des recettes :
- publiées
- featured
- équilibrées
- simples

### Cas B — Profil incomplet
Même logique que ci-dessus mais avec message incitatif UI.

### Cas C — Aucune recommandation spécifique
Afficher un fallback propre :
- produits sains généraux,
- recettes saines générales,
- message : "Complétez votre profil pour affiner vos recommandations."

==================================================
13. INTÉGRATION DASHBOARD
==================================================

Modifier `src/app/dashboard/page.tsx`.

Ajouter au moins deux sections :

### Section 1 — Pour vous
Titre :
- "Pour vous"

Sous-titre :
- "Sélection basée sur votre profil santé"

Contenu :
- grille de produits recommandés

### Section 2 — Recettes adaptées
Titre :
- "Recettes adaptées"

Sous-titre :
- "Des idées de repas cohérentes avec vos besoins"

Contenu :
- grille de recettes recommandées

### Si profil incomplet
Afficher un encart :
- "Complétez votre profil pour recevoir des recommandations plus précises"
- bouton ou lien vers `/profile`

IMPORTANT :
- ne casse pas le dashboard actuel
- garde la structure visuelle existante
- respecte les composants et classes Tailwind existants
- pas de redesign inutile

==================================================
14. UI DES CARTES
==================================================

Si nécessaire, créer `src/components/recommendations/RecommendationCard.tsx`.

Sinon, réutiliser les cartes existantes.

Chaque carte doit afficher au minimum :

### Produit
- image
- nom
- marque
- badge Nutri-Score si dispo
- badge IG si dispo
- raison de recommandation
- éventuellement un petit score discret
- éventuellement un bouton favori si déjà prévu dans le projet

### Recette
- image
- titre
- difficulté
- calories si dispo
- raison de recommandation
- tags utiles

### Fallback image
Si `image_url` est absente ou cassée :
- afficher un placeholder propre
- ne pas casser la mise en page

==================================================
15. ÉTATS UI
==================================================

Gérer proprement :

### Loading
- skeleton cards cohérentes avec le design existant

### Empty
- message simple et rassurant
- invitation à compléter le profil si utile

### Error
- message discret
- fallback de contenu si possible

==================================================
16. STRATÉGIE DE DIVERSITÉ
==================================================

Le moteur doit éviter, dans la mesure du possible :
- 6 produits presque identiques,
- 4 recettes redondantes.

Ajouter un petit mécanisme de diversité :
- limiter le nombre de recommandations trop similaires par catégorie / type / profil
- par exemple éviter que tout soit uniquement des féculents ou uniquement des produits laitiers si d’autres bonnes options existent

Ce mécanisme doit rester simple.

==================================================
17. INTERPRÉTATION DES CONDITIONS ET OBJECTIFS
==================================================

Analyser les valeurs réelles présentes dans la base avant de coder en dur.

Exemples possibles :
- `diabetic`
- `celiac`
- `vegetarian`
- `healthy`
- etc.

Exemples d’objectifs possibles :
- `lose_weight`
- `manage_diabetes`
- `avoid_allergens`
- etc.

IMPORTANT :
- ne code pas des valeurs non présentes dans la base sans fallback
- si nécessaire, crée une petite fonction de normalisation
- documente les hypothèses prises

==================================================
18. QUALITÉ DE CODE ATTENDUE
==================================================

- TypeScript strict
- pas de `any`
- fonctions pures quand possible
- code lisible
- commentaires courts seulement quand utiles
- noms clairs
- aucune duplication évitable
- architecture cohérente avec le projet existant

==================================================
19. RÈGLES D’ARCHITECTURE
==================================================

- Préférer les Server Components
- Préférer les query helpers côté serveur
- Ne créer une API route que si elle simplifie vraiment le projet
- Ne créer un hook client que si un composant client en a réellement besoin
- Respecter les patterns Supabase déjà présents
- Utiliser `createClient(cookieStore)` et `await cookies()` si le projet suit ce pattern
- Respecter `requireAuth()` ou la logique auth existante

==================================================
20. VÉRIFICATIONS À FAIRE AVANT FIN
==================================================

Avant de terminer :

1. Vérifier qu’aucune donnée mock n’est utilisée
2. Vérifier que toutes les requêtes utilisent les vraies tables Supabase
3. Vérifier que les noms de colonnes sont exacts
4. Vérifier que les recommandations ne proposent pas d’éléments incompatibles
5. Vérifier que le dashboard compile sans erreur TypeScript
6. Vérifier que les états empty/loading/error sont propres
7. Vérifier que les textes sont en français
8. Vérifier qu’aucune nouvelle dépendance n’a été ajoutée inutilement

==================================================
21. LIVRABLE FINAL ATTENDU
==================================================

À la fin de ton travail, donne :

1. Le plan d’implémentation suivi
2. La liste des fichiers créés
3. La liste des fichiers modifiés
4. Un résumé de la logique de scoring
5. Les hypothèses prises sur les valeurs de `health_conditions` et `goals`
6. Les éventuelles limites de cette V1
7. Les prochaines améliorations possibles en V2

==================================================
22. ORDRE D’EXÉCUTION
==================================================

Travaille dans cet ordre :

1. Lire les fichiers réels du projet
2. Identifier les types et helpers déjà existants
3. Créer `types.ts`
4. Créer `scoring.ts`
5. Créer `reasons.ts`
6. Créer `queries.ts`
7. Intégrer au dashboard
8. Ajouter les états UI
9. Vérifier TypeScript
10. Résumer les changements

IMPORTANT :
Commence d’abord par lire les fichiers existants et produire un mini-plan précis avant d’écrire le code.
Ne pars pas directement en implémentation aveugle.