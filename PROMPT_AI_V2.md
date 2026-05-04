Tu travailles sur le projet SmartHeart.

CONTEXTE GÉNÉRAL
SmartHeart est une application Next.js App Router + Supabase + TypeScript strict + Tailwind CSS.
Le projet contient déjà un moteur de recommandation V1 qui a été ajouté récemment.
Le module existe déjà dans :
- src/lib/recommendations/types.ts
- src/lib/recommendations/scoring.ts
- src/lib/recommendations/reasons.ts
- src/lib/recommendations/queries.ts

Le dashboard a aussi été modifié pour afficher :
- une section "Pour vous"
- une section "Recettes adaptées"
- un bandeau de profil incomplet

Ta mission maintenant n’est PAS de refaire le moteur depuis zéro.
Ta mission est de faire un audit complet, très rigoureux, puis de corriger, fiabiliser et améliorer la V1 existante sans casser l’application.

==================================================
1. OBJECTIF DE CETTE MISSION
==================================================

Je veux que tu fasses 5 choses dans un seul passage de travail :

1. Lire le code réel déjà présent
2. Vérifier la cohérence entre le moteur de recommandation et le schéma Supabase réel
3. Corriger tous les problèmes logiques, métier, TypeScript, UX ou data que tu trouves
4. Renforcer la fiabilité du moteur sans le complexifier inutilement
5. Me livrer un résumé final clair + des cas de test métier manuels

IMPORTANT :
- Ne pars pas d’hypothèses abstraites
- Base-toi sur les fichiers réels
- Les noms de colonnes et types réels priment toujours
- Si le code actuel diverge du schéma, corrige le code
- Si le prompt suppose un nom mais que le schéma réel a un autre nom, le schéma réel gagne
- Ne garde aucune logique fragile si elle peut être rendue plus sûre

==================================================
2. CE QUE TU DOIS LIRE EN PRIORITÉ
==================================================

Lis d’abord les fichiers suivants avant toute modification :

### Base de données et types
- SCHEMA.sql
- src/lib/database.types.ts

### Auth / Supabase
- src/lib/auth.ts
- src/lib/supabase/server.ts
- src/lib/supabase/client.ts

### Queries existantes
- src/lib/queries/products.ts
- src/lib/queries/recipes.ts
- src/lib/queries/favorites.ts
- src/lib/queries/partners.ts

### Dashboard / UI
- src/app/dashboard/page.tsx
- composants réutilisés liés aux cartes produits/recettes si le dashboard en utilise déjà
- composant ProductImage si utilisé dans l’affichage

### Nouveau moteur de recommandation
- src/lib/recommendations/types.ts
- src/lib/recommendations/scoring.ts
- src/lib/recommendations/reasons.ts
- src/lib/recommendations/queries.ts

Avant de modifier quoi que ce soit :
- fais un mini-diagnostic
- identifie les faiblesses
- puis applique les corrections

==================================================
3. RAPPEL DES DONNÉES DISPONIBLES DANS LE PROJET
==================================================

Le projet s’appuie sur une base de données avec des entités comme :
- profils utilisateur
- profils santé
- partenaires
- inventaire partenaires
- catégories produits
- produits
- recettes
- ingrédients de recettes
- étapes de recettes
- articles
- favoris produits
- favoris recettes
- articles lus
- listes de courses
- alertes
- vues de produits partenaires
- logs de recherche produit

Tu dois exploiter au maximum ce qui existe déjà.
N’ajoute pas de nouvelles tables sauf nécessité absolue.
N’ajoute pas de nouvelle dépendance npm.
N’ajoute pas de système vectoriel, embeddings, cron, worker, queue ou service externe.

==================================================
4. BUT MÉTIER DU MOTEUR
==================================================

Le moteur de recommandation doit recommander :
- des produits adaptés au profil santé
- des recettes adaptées au profil santé
- des recommandations compréhensibles
- des résultats robustes même si le profil utilisateur est incomplet
- des résultats sûrs vis-à-vis des incompatibilités majeures

Ce moteur doit rester :
- explicable
- maintenable
- stable
- performant à échelle raisonnable
- cohérent avec les données réellement présentes

==================================================
5. CONTRAINTES FONCTIONNELLES FORTES
==================================================

Tu dois vérifier et garantir les points suivants :

### A. Cœliaque / sans gluten
Si le profil utilisateur indique une contrainte de type cœliaque / gluten :
- ne recommande jamais un produit incompatible
- ne recommande jamais une recette incompatible
- si les données sont ambiguës, adopte une logique prudente
- si un produit n’a aucun signal rassurant et qu’une exclusion prudente est préférable, applique-la
- aucun élément risqué ne doit passer comme "très recommandé"

### B. Diabète
Si le profil utilisateur indique diabète / gestion glycémique :
- pénaliser fortement les IG élevés
- valoriser IG bas à modéré
- valoriser fibres
- valoriser bon Nutri-Score
- éviter qu’un produit à IG élevé sorte dans les top résultats sauf cas très particulier et score global faible, avec raison non trompeuse
- ne jamais afficher un libellé qui laisse croire qu’un produit à IG élevé est idéal pour diabétique

### C. Profil incomplet
Si le profil est absent ou incomplet :
- utiliser un fallback propre
- afficher des recommandations saines générales
- favoriser les éléments publiés, équilibrés, sûrs
- afficher dans le dashboard un message incitant à compléter le profil
- ne pas afficher de message alarmiste

### D. Diversité
Le top des recommandations ne doit pas être monotone.
Éviter par exemple :
- 6 produits très similaires
- 4 recettes quasi identiques
- une seule catégorie dominante si d’autres bonnes options existent

### E. Robustesse
Le moteur doit continuer à fonctionner même si :
- certaines colonnes sont null
- certaines images sont null
- certains tableaux sont vides
- il n’y a pas de vues analytics
- il n’y a pas encore de favoris utilisateur
- il n’y a pas de profil santé

==================================================
6. AUDIT COMPLET À RÉALISER
==================================================

Je veux un audit en 4 dimensions :

### 6.1 Audit schéma ↔ code
Vérifie que le moteur utilise exactement les bons noms de tables et colonnes.
Vérifie :
- compatibilité des types
- nullabilité
- tableaux text[]
- champs booléens
- colonnes numériques
- cohérence des sélections Supabase

Tu dois détecter les erreurs du style :
- code qui lit `full_name` alors que la base expose autre chose
- code qui suppose `compatible_with` mais le type généré utilise une autre forme
- confusion snake_case / camelCase dans les réponses
- oublis sur `is_published`, `is_featured`, `image_url`, etc.
- mauvais cast TypeScript
- union de types mal gérée

### 6.2 Audit logique métier
Vérifie que les règles de scoring ne produisent pas des recommandations incohérentes.
Tu dois tester mentalement et dans le code des scénarios comme :
- utilisateur diabétique
- utilisateur cœliaque
- utilisateur diabétique + cœliaque
- utilisateur sans profil
- utilisateur avec objectif perte de poids
- utilisateur avec sensibilité cardiovasculaire
- utilisateur avec peu de données comportementales

### 6.3 Audit UX
Vérifie :
- que les raisons sont toujours lisibles
- qu’elles sont naturelles en français
- qu’elles ne sont pas redondantes
- qu’aucune carte ne casse si image absente
- qu’un état vide est propre
- qu’un score nul ou faible n’explose pas l’UI
- qu’un dashboard sans résultats reste propre
- que les badges et labels affichés sont utiles et non trop techniques

### 6.4 Audit technique
Vérifie :
- zéro `any`
- logique réutilisable
- fonctions pures quand possible
- pas de duplication abusive
- requêtes pas inutilement coûteuses
- pas de tri fragile
- pas de branches mortes
- pas de conditions implicites dangereuses
- pas de promesses inutiles
- pas de code client là où un Server Component suffit

==================================================
7. CE QUE TU DOIS FAIRE SUR LE CODE
==================================================

Après audit, tu dois corriger et améliorer le code existant.

### 7.1 Dans `types.ts`
Vérifie que les types couvrent correctement :
- profil santé pour recommandation
- produit pour recommandation
- recette pour recommandation
- contexte de scoring
- score détaillé si utile
- structure finale renvoyée au dashboard
- raisons
- tags de recommandation

Renforce les types si nécessaire.
Supprime tout type trop large ou ambigu.
Ne garde pas de `string[] | null | undefined` non maîtrisé sans normalisation claire si cela complique le moteur.

### 7.2 Dans `scoring.ts`
Tu dois auditer et améliorer :
- `scoreProduct`
- `scoreRecipe`
- toutes les fonctions auxiliaires de normalisation / scoring

Objectifs :
- rendre le scoring cohérent
- éviter les scores trompeurs
- mieux contrôler les exclusions dures
- mieux gérer les valeurs nulles
- stabiliser les seuils
- garder un score final borné entre 0 et 100

Je veux un système compréhensible.
Pas de magie opaque.
Chaque facteur doit avoir une raison claire d’exister.

### 7.3 Dans `reasons.ts`
Tu dois vérifier que :
- chaque recommandation a toujours une raison principale
- les tags secondaires sont courts et utiles
- le français est naturel
- on ne répète pas la même raison pour tout
- les raisons reflètent réellement le scoring
- une raison ne dit jamais quelque chose de faux ou exagéré

Exemples de bon ton :
- "Compatible avec votre profil"
- "Faible indice glycémique"
- "Riche en fibres"
- "Nutri-Score A"
- "Sans gluten"
- "Recette simple et équilibrée"

Évite :
- raisons trop génériques
- jargon technique
- phrases robotiques
- promesses médicales

### 7.4 Dans `queries.ts`
Tu dois auditer et améliorer :
- `getRecommendedProducts`
- `getRecommendedRecipes`
- `getTrendingProducts`
- `getRecommendationSummary`

Je veux que ces fonctions :
- chargent correctement les données nécessaires
- excluent les éléments incompatibles
- appliquent le scoring proprement
- gèrent les fallbacks
- retournent un résultat stable
- soient solides même avec peu de données

Tu dois aussi vérifier :
- que les éléments déjà sauvegardés sont exclus uniquement si c’est bien souhaité
- que la logique de popularité ne domine pas la logique santé
- que les requêtes restent raisonnables
- que les sélections Supabase ne récupèrent pas inutilement trop de colonnes si ce n’est pas nécessaire

### 7.5 Dans `dashboard/page.tsx`
Tu dois vérifier et corriger si besoin :
- l’intégration des sections
- le bandeau de profil incomplet
- les états loading/empty/error
- l’affichage des raisons
- l’affichage des badges
- la stabilité visuelle
- la robustesse quand il manque des données

Le dashboard ne doit pas casser la hiérarchie visuelle existante.
Pas de redesign.
Pas de gros refactor UX inutile.
Tu améliores sans tout réinventer.

==================================================
8. SCORING PRODUITS — RÈGLES ATTENDUES
==================================================

Je veux que tu gardes l’esprit actuel du scoring, mais que tu le fiabilises.

Le score produit doit combiner intelligemment :
- compatibilité santé
- Nutri-Score
- indice glycémique
- fibres
- sodium
- labels utiles
- popularité / signaux comportementaux
- légère diversité

### Compatibilité santé
C’est le facteur le plus important.
Si un produit est incompatible avec une contrainte forte, il doit être exclu ou très fortement pénalisé.
Si un produit est clairement compatible avec le profil, il reçoit un bonus fort.

### Nutri-Score
Garde une gradation raisonnable :
- A meilleur que B
- B meilleur que C
- etc.

Mais évite qu’un Nutri-Score excellent compense totalement une incompatibilité santé importante.

### IG
Pour diabétiques :
- IG bas = gros bonus
- IG moyen = bonus modéré
- IG élevé = pénalité forte

Pour non diabétiques :
- IG reste utile mais moins dominant

### Fibres
Favoriser les produits riches en fibres.
Les fibres ne doivent pas suffire à sauver un produit mauvais sur le reste.

### Sodium
Si le profil suggère un risque cardiovasculaire / tension :
- renforcer la pénalité sodium élevé
Sinon :
- garder le sodium comme signal secondaire

### Labels
Les labels doivent affiner, pas dominer.
Bonus utile pour :
- sans gluten
- bio
- vegan / végétarien selon contexte
- autres labels réellement exploités dans les données

### Popularité
La popularité est un signal faible.
Elle doit seulement départager, pas piloter le classement.
Évite qu’un produit populaire mais nutritionnellement moyen dépasse un produit beaucoup plus cohérent avec le profil.

==================================================
9. SCORING RECETTES — RÈGLES ATTENDUES
==================================================

Le score recette doit combiner :
- compatibilité santé
- diet tags
- calories
- difficulté
- featured / popularité
- variété

### Compatibilité
Très important.
Même logique de prudence que pour les produits.

### Diet tags
Si les tags confirment un usage pertinent, bonus utile.
Exemples :
- faible_ig
- sans_gluten
- healthy
- high_fiber
- diabetic_friendly
Mais ne code pas des tags imaginaires si la base contient autre chose.
Observe d’abord les tags réels.

### Calories
Si `tdee_kcal` existe, le moteur peut en tenir compte légèrement.
Mais ne sois pas trop strict.
Une recette plus calorique peut rester pertinente selon le contexte.
L’objectif est d’aider, pas de rigidifier.

### Difficulté
Facile à préparer = bonus léger.
Moyenne = neutre ou léger bonus.
Difficile = pas forcément mauvaise, mais moins accessible.

### Featured
Peut aider surtout en fallback.
Ne doit pas écraser la compatibilité santé.

### Variété
Évite plusieurs recettes trop proches.

==================================================
10. NORMALISATION DES VALEURS
==================================================

Je veux une normalisation solide des conditions santé et objectifs.

Tu dois :
- lire les valeurs réellement présentes ou possibles
- implémenter une normalisation prudente
- supporter variantes FR / EN si le code actuel le fait déjà
- garder un comportement stable même si une valeur inconnue apparaît

Exemples de normalisation tolérante :
- diab / diabetes / diabetic → diabetic
- celiac / coeliac / gluten / sans gluten → celiac
- hyper / tension / cardio → cardiovascular
- veget / vegetarian / vegan → vegetarian (ou distinguer si le code le permet proprement)

Même logique pour les objectifs :
- perdre du poids
- gérer diabète
- éviter gluten
- santé cardiaque
- gain musculaire
etc.

IMPORTANT :
- Ne casse pas les valeurs libres existantes si elles existent
- Préserve les inconnues si nécessaire
- Documente les hypothèses dans le résumé final

==================================================
11. EXCLUSIONS ET PRIORITÉS
==================================================

Je veux une logique explicite de priorité :

1. sécurité / compatibilité
2. qualité nutritionnelle
3. pertinence profil
4. comportement utilisateur
5. popularité
6. diversité

Si deux signaux se contredisent :
- la santé gagne
- puis la qualité nutritionnelle
- puis le reste

Exemple :
Un produit populaire mais mal adapté à un diabétique ne doit pas sortir au-dessus d’un produit moins populaire mais bien adapté.

==================================================
12. FALLBACKS OBLIGATOIRES
==================================================

Je veux des fallbacks propres pour tous les cas.

### Cas 1 — aucun profil santé
Retourner :
- produits sains généraux
- recettes équilibrées, publiées, sûres
- message d’incitation à compléter le profil

### Cas 2 — profil incomplet
Même logique, avec personnalisation légère si possible.

### Cas 3 — pas de données comportementales
Ne pas casser le moteur.
Utiliser :
- qualité nutritionnelle
- compatibilité
- éventuellement popularité globale faible pondération

### Cas 4 — peu de résultats compatibles
Retourner moins de résultats si nécessaire plutôt que de recommander des éléments douteux.
La qualité prime sur la quantité.

### Cas 5 — images nulles
UI stable avec placeholder propre.

### Cas 6 — analytics vides
Le moteur doit fonctionner sans `partner_product_views` ni `product_search_logs`.

==================================================
13. DIVERSITÉ
==================================================

Je veux un mécanisme simple mais utile.

Pour les produits :
- éviter trop de répétition par catégorie si possible
- éviter que le top soit monopolisé par une seule famille alors qu’il existe plusieurs bonnes options

Pour les recettes :
- éviter trop de répétition de format ou de profil si possible
- si la base ne permet pas une vraie catégorisation, fais un mécanisme léger de variété basé sur tags, difficulté, temps ou calories

La diversité ne doit pas casser la pertinence.
Elle est un ajustement léger, pas une règle dure aveugle.

==================================================
14. QUALITÉ DU FRANÇAIS
==================================================

Tous les textes visibles utilisateur doivent être en français naturel.

Tu dois corriger si tu trouves :
- formulations robotiques
- répétitions
- mots techniques inutiles
- raisons vagues
- messages trop froids

Je veux une UI qui sonne humaine et claire.

==================================================
15. ÉTATS UI À GARANTIR
==================================================

Vérifie et améliore si nécessaire :

### Loading
- skeletons propres ou fallback visuel cohérent

### Empty
- message simple
- pas de vide brutal
- éventuellement lien vers profil si utile

### Error
- message discret
- pas de crash visuel
- possibilité de fallback de contenu si raisonnable

### Null images
- placeholder propre
- layout préservé

### Long texts
- pas de débordement
- raisons courtes
- ellipsis si nécessaire

==================================================
16. PERFORMANCE ET MAINTENABILITÉ
==================================================

Je ne veux pas d’optimisation prématurée compliquée, mais je veux éviter les erreurs évidentes.

Vérifie :
- tris inutiles en double
- chargement de données excessif
- logique répétée
- recalculs inutiles
- requêtes trop larges
- transformations fragiles

Si une amélioration simple et sûre est possible, applique-la.
N’introduis pas de complexité architecturale inutile.

==================================================
17. CE QUE TU NE DOIS PAS FAIRE
==================================================

Interdictions :
- ne pas refaire tout le dashboard
- ne pas changer le design global
- ne pas ajouter de nouvelle lib sans nécessité absolue
- ne pas ajouter d’API externe
- ne pas ajouter de table ou migration lourde sauf nécessité impérieuse
- ne pas transformer la V1 en système ML compliqué
- ne pas inventer des champs inexistants
- ne pas conserver de données mock
- ne pas masquer un problème par un cast TypeScript paresseux
- ne pas utiliser `any`
- ne pas écrire du code théorique non branché dans l’app

==================================================
18. CE QUE TU DOIS PRODUIRE COMME RÉSULTAT
==================================================

Je veux que tu travailles jusqu’à obtenir un résultat concret dans le code.

À la fin, fournis impérativement :

### A. Résumé d’audit
- ce que tu as vérifié
- les problèmes trouvés
- leur niveau de gravité

### B. Corrections appliquées
- liste des fichiers modifiés
- ce qui a changé dans chacun
- pourquoi

### C. Résumé du scoring final
- logique produits
- logique recettes
- exclusions dures
- fallbacks
- diversité
- popularité

### D. Hypothèses prises
- normalisation des conditions
- normalisation des objectifs
- arbitrages quand les données sont ambiguës

### E. Limites restantes
- ce qui reste volontairement simple en V1
- ce qui pourrait être amélioré plus tard

### F. Cas de test manuels
Donne 8 cas de test métier très concrets à exécuter dans l’application.
Pour chaque cas, donne :
1. profil utilisateur
2. données attendues
3. comportement attendu des recommandations
4. ce qui serait considéré comme un bug

==================================================
19. FORMAT DE TRAVAIL IMPOSÉ
==================================================

Travaille dans cet ordre exact :

1. Lire les fichiers réels
2. Établir un mini-diagnostic
3. Auditer les types
4. Auditer le scoring
5. Auditer les raisons
6. Auditer les queries
7. Auditer l’intégration dashboard
8. Corriger le code
9. Vérifier TypeScript
10. Vérifier cohérence métier
11. Donner le résumé final

IMPORTANT :
- commence par une phase de lecture
- ne code pas à l’aveugle
- si tu fais une hypothèse, dis-la
- privilégie des corrections sûres, nettes et maintenables

==================================================
20. CHECKLIST FINALE OBLIGATOIRE
==================================================

Avant de terminer, vérifie explicitement :

- [ ] aucune colonne inexistante n’est utilisée
- [ ] aucune table inexistante n’est utilisée
- [ ] aucun `any`
- [ ] aucun mock restant dans le moteur
- [ ] pas de recommandation risquée pour cœliaque
- [ ] pas de top recommandation trompeuse pour diabétique avec IG élevé
- [ ] fallback propre si profil incomplet
- [ ] dashboard stable si zéro résultat
- [ ] raisons toujours non vides
- [ ] français naturel
- [ ] pas de crash si image absente
- [ ] pas de duplication abusive
- [ ] pas de dépendance ajoutée inutilement

Commence maintenant par lire les fichiers réels, faire un mini-diagnostic, puis appliquer les corrections.