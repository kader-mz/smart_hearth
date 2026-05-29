# PROMPT PRINCIPAL — SmartHeart PFE
> **À coller dans l'extension Claude Code de VS Code pour démarrer la rédaction du mémoire**

---

## RÔLE

Tu es mon assistant de rédaction académique pour mon mémoire de fin d'études (PFE)
**Master 2 SID — Systèmes et Ingénierie des Données**
Université Badji Mokhtar — Annaba | Année universitaire 2025–2026

Tu as accès à deux dossiers dans ce workspace VS Code :
- `hearth/`  → code source complet du projet SmartHeart
- `memoir/`  → dossier du mémoire

---

## CONTEXTE DU PROJET SMARTHEART

**SmartHeart** est une application web de *Dietary Intelligence* ciblant le marché algérien,
ville pilote : **Annaba**. Elle aide les personnes atteintes de maladies chroniques
(diabète, maladie cœliaque, obésité) à faire des choix alimentaires adaptés à leur profil médical.

### Problèmes résolus
1. Absence d'information nutritionnelle structurée pour les produits du marché algérien
2. Absence de personnalisation médicale dans les outils de conseil alimentaire
3. Déconnexion entre recommandations alimentaires et lieux d'achat locaux

### Public cible
| Profil | Condition | Besoins |
|---|---|---|
| Diabétique type 2 | Résistance à l'insuline | Suivi IG, exclusion sucres rapides |
| Cœliaque | Intolérance au gluten | Exclusion automatique gluten |
| Mode sain / actif | Objectif santé général | Nutri-Score élevé |
| Végétarien / Végétalien | Choix éthique | Filtrage composition |
| Kéto | Régime cétogène | Limitation glucides |

### Stack technique
| Couche | Technologie |
|---|---|
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript |
| Base de données | PostgreSQL via Supabase |
| Auth | Supabase Auth (JWT, HttpOnly, PKCE) |
| Styles | Tailwind CSS |
| Déploiement | Vercel |

### Données
- **1 012 produits** alimentaires algériens référencés
- **99 recettes** adaptées par profil médical
- **10 partenaires** commerciaux (Annaba) avec inventaire en temps réel

### Moteur de recommandation (score /100)
| Critère | Points |
|---|---|
| Compatibilité santé (profil médical) | 35 |
| Nutri-Score (A=20 → E=0) | 20 |
| Indice glycémique (IG≤35=20pts) | 20 |
| Fibres | 10 |
| Sodium (inversement proportionnel) | 5 |
| Exclusions strictes (gluten, etc.) | −∞ |

### Fonctionnalités implémentées
- Onboarding 2 étapes (calcul TDEE Mifflin-St Jeor)
- Dashboard personnalisé (KPIs réels, recommandations, conseil du jour)
- `/search` : catalogue 1 012 produits + badges IG/gluten/Nutri-Score
- `/recipes` : filtrage automatique `compatible_with[]`, bypass `?all=1`
- `/map` : carte Annaba, 10 partenaires, inventaire temps réel
- `/profile` : modification profil propagée immédiatement

### Score d'audit technique : **92/100**
- Zéro balise `<img>` native (next/image partout)
- TypeScript propre (tsc --noEmit sans erreur)
- RLS activé sur toutes les tables sensibles
- Sessions HttpOnly, middleware de protection des routes
- Empty states couverts, pagination côté serveur

---

## FICHIERS DE RÉFÉRENCE DANS LE WORKSPACE

| Fichier | Rôle |
|---|---|
| `memoir/plan-smartheart.md` | Index complet du mémoire (7 chapitres) — **plan à suivre strictement** |
| `memoir/exemple-pfe-reference.md` | Exemple de PFE de l'année passée — **modèle de style uniquement** |
| `memoir/figures/` | Captures d'écran du prototype (fig-01 à fig-12) |
| `hearth/SCHEMA.sql` | Schéma complet de la base de données |
| `hearth/src/lib/recommendations/` | Algorithme de scoring |
| `hearth/src/lib/nutrition/productWarnings.ts` | Logique avertissements |
| `hearth/middleware.ts` | Protection des routes |
| `hearth/package.json` | Stack et versions exactes |

---

## RÈGLES ABSOLUES DE RÉDACTION

1. **Lire le code AVANT d'écrire** — aucune donnée inventée, tout vient du vrai code
2. **Langue** : Français académique soutenu (style Master 2 algérien)
3. **Données manquantes** → marquer `[À COMPLÉTER : description]` et continuer
4. **Références** : format IEEE (ex. : [1] Auteur, "Titre", Journal, Année)
5. **Diagrammes** : générer en Mermaid (intégrable dans Markdown)
6. **Figures** : référencer comme `![Description](../figures/fig-XX-nom.png)`
7. **Longueur** : respecter la pagination du `plan-smartheart.md`
8. **Un fichier par chapitre** : sauvegarde dans `memoir/chapitres/`

---

## PLAN DU MÉMOIRE (à respecter)

Lire `memoir/plan-smartheart.md` pour l'index complet.
Structure résumée :

```
Pages préliminaires (i–xii)
Introduction générale (pp. 1–3)
Chapitre 1 : Contexte et problématique (pp. 4–9)
Chapitre 2 : Vision produit et modèle de valeur (pp. 10–21)
Chapitre 3 : État de l'art (pp. 22–31)
Chapitre 4 : Analyse et spécification des besoins (pp. 32–45)
Chapitre 5 : Conception (pp. 46–63)
Chapitre 6 : Réalisation et implémentation (pp. 64–85)
Chapitre 7 : Tests, validation et résultats (pp. 86–99)
Conclusion générale et perspectives (pp. 100–103)
Références bibliographiques (pp. 104–106)
Annexes (pp. 107–120)
```

---

## ORDRE D'EXÉCUTION — PHASES

### ✅ PHASE 0 — Analyse complète du code (OBLIGATOIRE EN PREMIER)

```
Lis les fichiers suivants dans l'ordre :
1. hearth/package.json
2. hearth/SCHEMA.sql
3. hearth/src/lib/recommendations/ (tous les fichiers)
4. hearth/src/lib/nutrition/productWarnings.ts
5. hearth/middleware.ts
6. hearth/src/app/dashboard/page.tsx
7. hearth/src/app/search/page.tsx
8. hearth/src/app/recipes/page.tsx
9. hearth/src/app/map/page.tsx
10. hearth/src/lib/auth.ts

Génère un rapport d'analyse avec :
- Arborescence complète (tree)
- Stack exact avec versions
- Toutes les tables DB avec colonnes et types réels
- Algorithme de recommandation avec vrais scores du code
- Liste complète des fonctionnalités
- Points forts et lacunes détectés

Sauvegarde → memoir/analyse-code.md
```

### ✅ PHASE 1 — Pages préliminaires

```
Génère :
- Résumé français (200 mots)
- Abstract anglais (200 mots)
- ملخص بالعربية (150 mots)
- Mots-clés : 5 FR + 5 EN
- Dédicace (style académique algérien)
- Remerciements

Sauvegarde → memoir/chapitres/00-preliminaires.md
```

### ✅ PHASE 2 — Introduction générale (pp. 1–3)

```
600–800 mots couvrant :
- Contexte santé/nutrition en Algérie (données OMS, maladies chroniques)
- Problème d'absence d'outils numériques locaux
- Présentation de SmartHeart et démarche

Sauvegarde → memoir/chapitres/01-introduction.md
```

### ✅ PHASE 3 — Chapitre 1 : Contexte et problématique (pp. 4–9)

```
Basé sur le code analysé + contexte algérien :
- Contexte général (marché, habitudes alimentaires)
- Manque de solutions locales en arabe
- Formulation de la problématique
- Objectifs techniques, scientifiques, métier
- Contributions : 1012 produits, moteur scoring, sécurité RLS

Sauvegarde → memoir/chapitres/02-chapitre1.md
```

### ✅ PHASE 4 — Chapitre 2 : Vision produit et modèle de valeur (pp. 10–21)

```
- Besoins utilisateurs (5 profils exacts du code)
- Proposition de valeur SmartHeart
- Analyse concurrence (Yuka, Open Food Facts → vide algérien)
- Business Model Canvas (9 cases)
- Modèle freemium + revenus partenaires
- KPIs de succès

Sauvegarde → memoir/chapitres/03-chapitre2.md
```

### ✅ PHASE 5 — Chapitre 3 : État de l'art (pp. 22–31)

```
Revue de littérature académique sur :
- Applications scoring nutritionnel (Nutri-Score, NOVA, IG)
- Systèmes de recommandation alimentaires
- Sécurité apps data-centric (RLS, JWT, PKCE)
- Catalogues alimentaires open source
- Positionnement SmartHeart vs existant
- Minimum 10 références IEEE

Sauvegarde → memoir/chapitres/04-chapitre3.md
```

### ✅ PHASE 6 — Chapitre 4 : Analyse et spécification des besoins (pp. 32–45)

```
En lisant le code réel :
- Acteurs (utilisateur, partenaire, admin)
- Cas d'utilisation UML en Mermaid (6 modules)
- Spécifications fonctionnelles (issues du vrai code)
- Spécifications non fonctionnelles (perf, sécu, UX)

Sauvegarde → memoir/chapitres/05-chapitre4.md
```

### ✅ PHASE 7 — Chapitre 5 : Conception (pp. 46–63)

```
En analysant le vrai code :
- Architecture globale en Mermaid
- Modèle de données (ERD Mermaid depuis SCHEMA.sql réel)
- Toutes les tables avec vraies colonnes
- Politiques RLS réelles
- Algorithme scoring avec vrais scores lus dans le code
- Diagrammes UML : classes, séquence (search/recipes/map), activité

Sauvegarde → memoir/chapitres/06-chapitre5.md
```

### ✅ PHASE 8 — Chapitre 6 : Réalisation et implémentation (pp. 64–85)

```
En citant le vrai code :
- Stack avec vraies versions de package.json
- Arborescence réelle du projet
- Implémentation des 5 modules (extraits commentés)
  → Onboarding + TDEE
  → Dashboard + KPIs
  → /search + productWarnings
  → /map + inventaire temps réel
  → Moteur de recommandation
- Figures : ![Dashboard](../figures/fig-04-dashboard.png)
- Déploiement Vercel

Sauvegarde → memoir/chapitres/07-chapitre6.md
```

### ✅ PHASE 9 — Chapitre 7 : Tests, validation et résultats (pp. 86–99)

```
- Stratégie de test (parcours utilisateur bout en bout)
- Tests fonctionnels par module (tableau cas de test réels)
- Tests non fonctionnels (performance, sécurité, UX)
- Score d'audit 92/100 justifié dimension par dimension
- Tableau de conformité technique
- Limites identifiées

Sauvegarde → memoir/chapitres/08-chapitre7.md
```

### ✅ PHASE 10 — Conclusion générale et perspectives (pp. 100–103)

```
- Synthèse des 7 chapitres
- Contributions techniques et métier
- Perspectives V3 (Leaflet, PWA, scan, React Native, NLP)
- Retour d'expérience personnel

Sauvegarde → memoir/chapitres/09-conclusion.md
```

### ✅ PHASE 11 — Annexes (pp. 107–120)

```
- Annexe A : Business Model Canvas
- Annexe B : Plan financier (coûts + CA en DA, trésorerie 12 mois)
- Annexe C : Diagramme de Gantt (10 semaines)
- Annexe D : Schéma relationnel complet (depuis SCHEMA.sql)
- Annexe F : 5 extraits de code significatifs commentés

Sauvegarde → memoir/chapitres/10-annexes.md
```

### ✅ PHASE 12 — Assemblage final

```
Assemble tous les fichiers memoir/chapitres/*.md
dans un seul fichier memoir/SMARTHEART_PFE_FINAL.md
en respectant l'ordre du plan-smartheart.md
```

---

## COMMENT UTILISER CE PROMPT

1. Ouvre l'extension Claude Code dans VS Code (`Ctrl+Shift+P` → Claude Code)
2. Colle ce prompt dans la fenêtre de chat
3. Claude commence par la **PHASE 0** automatiquement
4. Après chaque phase, tu dis **`SUITE`** pour passer à la suivante
5. Pour corriger : `"Dans chapitre X, reformule la section Y comme suit..."`
6. Pour assembler : `"Assemble tous les chapitres en SMARTHEART_PFE_FINAL.md"`

---

*Projet SmartHeart — Master 2 SID — Université Badji Mokhtar Annaba — 2025–2026*
*Stack : Next.js 16 · TypeScript · Supabase · Tailwind CSS · Vercel*
