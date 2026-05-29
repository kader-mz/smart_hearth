# Index du Mémoire — SmartHeart

## Pages préliminaires `i – xii`

| Page | Contenu |
|------|---------|
| i | Page de garde |
| ii – iii | Dédicaces |
| iv | Remerciements |
| v | Résumé (Français) |
| vi | Abstract (English) |
| vii | ملخص (Arabe) |
| viii – ix | Table des matières |
| x | Liste des figures |
| xi | Liste des tableaux |
| xii | Liste des acronymes / abréviations |

---

## Introduction générale `pp. 1 – 3`

1. Contexte santé / nutrition en Algérie — p. 1
2. Problème d'absence d'outils numériques locaux adaptés — p. 2
3. Présentation de SmartHeart et de la démarche globale — p. 3

---

## Chapitre 1 : Contexte et problématique `pp. 4 – 9`

1. Introduction — p. 4
2. Contexte général (marché algérien, habitudes alimentaires) — pp. 4 – 5
3. Manque de solutions locales en langue arabe — pp. 5 – 6
4. Problématique — p. 6
   - 4.1 Formulation de la problématique
5. Objectifs du projet — pp. 7 – 8
   - 5.1 Objectifs techniques
   - 5.2 Objectifs scientifiques
   - 5.3 Objectifs métier
6. Contributions du mémoire — p. 9
   - 6.1 Catalogue algérien (1 012 produits)
   - 6.2 Moteur de scoring nutritionnel sur 100 points
   - 6.3 Mécanismes de sécurité (RLS, etc.)

---

## Chapitre 2 : Vision produit et modèle de valeur `pp. 10 – 21`

1. Introduction — p. 10
2. Besoins utilisateurs et parties prenantes — pp. 10 – 12
   - 2.1 Profils diabétique, coeliaque, etc. (pp. 11 – 12)
3. Proposition de valeur SmartHeart — pp. 12 – 13
4. Analyse du marché et des solutions concurrentes — pp. 13 – 16
   - 4.1 Solutions internationales (Yuka, Open Food Facts, etc.) (pp. 13 – 15)
   - 4.2 Spécificités du marché algérien (pp. 15 – 16)
5. Business Model Canvas (BMC) — pp. 16 – 18
6. Modèle économique et offre freemium — pp. 18 – 20
7. KPI et mesures de succès — pp. 20 – 21
8. Conclusion — p. 21

---

## Chapitre 3 : État de l'art `pp. 22 – 31`

1. Introduction — p. 22
2. Applications de scoring nutritionnel — pp. 22 – 24
3. Systèmes de recommandation alimentaires — pp. 24 – 26
4. RLS et sécurité dans les applications data-centric — pp. 26 – 28
5. Catalogues alimentaires (Open Food Facts, etc.) — pp. 28 – 30
6. Positionnement de SmartHeart par rapport aux travaux existants — pp. 30 – 31
7. Conclusion — p. 31

---

## Chapitre 4 : Analyse et spécification des besoins `pp. 32 – 45`

1. Introduction — p. 32
2. Identification des acteurs — pp. 32 – 33
   - 2.1 Utilisateur final (p. 32)
   - 2.2 Commerçant / partenaire (p. 33)
   - 2.3 Administrateur (p. 33)
3. Cas d'utilisation — pp. 34 – 38
   - 3.1 Onboarding & profil santé (pp. 34 – 35)
   - 3.2 Dashboard personnalisé (pp. 35 – 36)
   - 3.3 Catalogue produits (search) (pp. 36 – 37)
   - 3.4 Recettes (recipes) (pp. 37 – 38)
   - 3.5 Carte des partenaires (map) (p. 38)
   - 3.6 Gestion du profil (profile) (p. 38)
4. Spécifications fonctionnelles — pp. 39 – 41
5. Spécifications non fonctionnelles — pp. 42 – 44
   - 5.1 Performance (p. 42)
   - 5.2 Sécurité et confidentialité (p. 43)
   - 5.3 Expérience utilisateur (UX) (p. 44)
6. Conclusion — p. 45

---

## Chapitre 5 : Conception `pp. 46 – 63`

1. Introduction — p. 46
2. Architecture globale du système (Next.js 16 RSC + Supabase + Tailwind) — pp. 46 – 49
3. Modèle de données — pp. 49 – 54
   - 3.1 Schéma relationnel et principales tables (pp. 49 – 52)
   - 3.2 Politiques RLS et contraintes d'intégrité (pp. 52 – 54)
4. Conception du moteur de recommandation — pp. 54 – 58
   - 4.1 Score nutritionnel sur 100 points (pp. 55 – 57)
   - 4.2 Règles par profil médical (pp. 57 – 58)
5. Diagrammes UML — pp. 58 – 62
   - 5.1 Diagramme de classes (pp. 58 – 59)
   - 5.2 Diagrammes de séquence (search, recipes, map) (pp. 59 – 61)
   - 5.3 Diagrammes d'activité (pp. 61 – 62)
6. Conclusion — p. 63

---

## Chapitre 6 : Réalisation et implémentation `pp. 64 – 85`

1. Introduction — p. 64
2. Stack technique détaillée et justification — pp. 64 – 66
   - 2.1 Next.js, TypeScript, Supabase, Tailwind, etc. (pp. 65 – 66)
3. Structure du projet (App Router, Server/Client Components) — pp. 67 – 69
4. Implémentation des modules clés — pp. 69 – 80
   - 4.1 Onboarding & profil santé (pp. 69 – 71)
   - 4.2 Dashboard personnalisé (pp. 71 – 73)
   - 4.3 Catalogue produits avec avertissements (pp. 73 – 76)
   - 4.4 Carte avec inventaire temps réel (pp. 76 – 78)
   - 4.5 Moteur de recommandations centralisé (pp. 78 – 80)
5. Déploiement (Vercel, configuration, variables d'environnement) — pp. 81 – 84
6. Conclusion — p. 85

---

## Chapitre 7 : Tests, validation et résultats `pp. 86 – 99`

1. Introduction — p. 86
2. Stratégie de test — pp. 86 – 88
   - 2.1 Parcours complet utilisateur (pp. 87 – 88)
   - 2.2 Tests fonctionnels (pp. 88 – 92)
   - 2.3 Tests non fonctionnels (pp. 92 – 94)
3. Résultats obtenus — pp. 95 – 97
   - 3.1 Score d'audit (92/100) (pp. 95 – 96)
   - 3.2 Conformité technique (RLS, middleware, pagination, etc.) (pp. 96 – 97)
4. Limites identifiées et analyse critique — pp. 97 – 99
5. Conclusion — p. 99

---

## Conclusion générale et perspectives `pp. 100 – 103`

1. Synthèse des contributions techniques et métier — pp. 100 – 101
2. Perspectives d'évolution (V3 : Leaflet/Mapbox, PWA, scan, mobile, NLP) — pp. 101 – 102
3. Retour d'expérience personnelle — pp. 102 – 103

---

## Références bibliographiques `pp. 104 – 106`

---

## Annexes `pp. 107 – 120`

| Annexe | Contenu | Pages |
|--------|---------|-------|
| A | Business Model Canvas (BMC) | 107 |
| B | Plan financier et prévisions | 108 – 110 |
| C | Diagramme de Gantt | 111 |
| D | Schéma relationnel complet | 112 – 114 |
| E | Captures d'écran du prototype | 115 – 118 |
| F | Extraits de code significatifs | 119 – 120 |
