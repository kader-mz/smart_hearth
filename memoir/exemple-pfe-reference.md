# République Algérienne Démocratique et Populaire
## Ministère de l'Enseignement Supérieur et de la Recherche Scientifique

**Université Badji Mokhtar - Annaba**

**Faculté : Technologie**
**Département : Informatique**
**Domaine : Mathématique-Informatique**
**Filière : Informatique**
**Spécialité étudiante 1 : Intelligence Artificielle et Traitement de l'Information**
**Spécialité étudiante 2 : Systèmes Informatiques et Décision**

## Mémoire

Présenté en vue de l’obtention du Diplôme de Master

### Thème

## Stratégies innovantes pour la surveillance et la gestion des efflorescences algales nuisibles de cyanobactéries

**Présenté par :**
- Hemici Meriem (IATI)
- Bounekhla Oumaima (SID)

**Encadrant :** Dendani Nadjette, MCB
**Co-encadrant :** Saoudi Amel, Professeur, UBMA

**Jury de Soutenance :**
| Fonction | Nom | Grade | Université |
| :--- | :--- | :--- | :--- |
| Président | Taleb Nora | Professeur | UBMA |
| Encadrant | Denadni Nadjette | MCB | UBMA |
| Co-encadrant | Saoudi Amel | Professeur | UBMA |
| Examinateur | Azizi Nabila | Professeur | UBMA |

---

### Dédicace (Oumaima Bounekha)

À mes chers parents,
Maman, ton amour inconditionnel, ta tendresse et tes prières m'ont portée et protégée dans les moments de doute. Tu es cette lumière douce qui éclaire mes pas, même quand tout semble sombre. Ta foi en moi a souvent été plus forte que la mienne.

Papa, ta patience, ta sagesse et ta force tranquille ont été mes fondations. Par ton regard rempli de fierté et ton silence rassurant, tu m’as appris la persévérance, la dignité et le respect.

Vous êtes mes piliers, mes repères, mes racines.
Ce mémoire est bien plus qu'un aboutissement académique : c'est le fruit de votre amour, de vos sacrifices, et de votre présence constante.
Merci pour tout ce que vous m’avez donné, pour tout ce que vous êtes.

À mon frère et sœurs, pour vos mots simples mais puissants, vos sourires sincères et votre présence apaisante. Merci d'avoir été là sans avoir besoin de trop parler.

À mes ami(e)s véritables, merci pour vos mots doux, vos silences bienveillants, vos rires spontanés, et votre énergie positive.

À mes encadrantes, Mme Dendani Nadjette et Mme Saoudi Amel, merci pour votre bienveillance, vos conseils éclairés, et votre confiance. Grâce à vous, j'ai grandi intellectuellement et humainement.

À ma promotion du Master SID 2023-2025, merci pour ce chemin parcouru ensemble, entre efforts partagés, soutien mutuel et souvenirs gravés. Vous avez été bien plus que des camarades : des compagnons de route dans cette aventure universitaire.

À chacun de vous, merci pour votre bienveillance, vos sourires et votre esprit d'équipe. Ce mémoire est aussi le reflet de ces années inoubliables.

À ma binôme Meriem, merci pour ta patience, ton écoute et ta détermination. Travailler avec toi a été un réel plaisir. Entre les nuits blanches, les moments de stress et les éclats de rire, tu as toujours su apporter de la clarté dans le chaos. Ta rigueur, ton sens du détail et ta gentillesse ont enrichi ce travail. Ce projet est le fruit de notre complicité, de notre amitié et de notre persévérance partagée. Merci pour tout ce chemin parcouru ensemble.

À tous ceux qui me sont chers, merci.
Ce mémoire, signé de ma plume, porte aussi l'empreinte de chacun de vous.

- **Oumaima Bounekha**

---

### Dédicace (Meriem Hemici)

À ma chère maman, Tu es mon pilier, ma source d’amour, celle qui m’a toujours portée avec une tendresse infinie et une force. Dans tes prières, j’ai trouvé la paix ; dans ton regard, le courage ; et dans ton cœur, un amour sans condition. Merci pour tes sacrifices, ton soutien constant, ta patience et ta foi en moi. Ce mémoire est une partie de toi, car sans toi, je ne serais jamais arrivée jusque-là.

À mon papa, Ta force tranquille a toujours été un exemple pour moi. Par ton regard plein de fierté, par ta présence discrète mais rassurante, tu m’as donné le courage d’avancer, même dans les moments les plus difficiles. Ta patience, ton soutien silencieux, et ta confiance en moi ont été des repères précieux. Je te dois tant… Ce mémoire, je le dédie aussi à toi.

À mes frères,
À toi Youcef, Merci pour ta présence, ton humour et ton soutien au quotidien.
Et à toi Seif… Tu es et tu resteras une partie de moi. Chaque pensée, chaque effort, chaque ligne de ce mémoire porte ton nom en silence. Même si la vie nous a éloignés, tu n’as jamais quitté mon cœur. J’espère qu’un jour, tu sauras que ce travail, je l’ai aussi fait pour toi, avec tout mon amour.

À mes amis les plus chers,
Hadoulaa, ma bestie, mon amie de toujours. Depuis l’enfance, tu es là, fidèle, vraie, irremplaçable. Merci pour ta lumière, ton rire, ta loyauté.
Soeur, plus qu’une amie, une sœur d’âme. Ton énergie, ta sincérité et ton amour m’ont portée dans les moments les plus difficiles. Je suis chanceuse de t’avoir dans ma vie.
Malek, ma copine, Tu es une belle surprise dans ma vie. Je n’aurais jamais imaginé avoir une amie comme toi : douce, sincère, drôle, précieuse. Merci d’être simplement toi.
Et à ma binôme Oumaima, ma copine de galère et de folie, Des nuits blanches aux fous rires, des moments de panique aux petites victoires : on a tout traversé ensemble. Merci pour ton amitié unique, ton naturel, ta patience et ta folie.

---

### Remerciements

Avant tout, nous adressons nos louanges et notre gratitude à Allah, Le Tout-Puissant, Le Miséricordieux, qui nous a accordé la force, la patience et la persévérance nécessaires pour mener à bien ce travail. Sans Sa volonté et Sa guidance, rien n'aurait été possible. Alhamdulillah.

Nous exprimons notre profonde reconnaissance à nos encadrantes, Madame Dendani et Madame Saoudi, pour leur accompagnement bienveillant, leurs conseils éclairés et leur disponibilité tout au long de ce projet. Leur encadrement a été pour nous d'une aide précieuse, aussi bien sur le plan scientifique que sur le plan humain.

Nos remerciements les plus sincères vont également à nos familles respectives, pour leur amour inconditionnel, leurs encouragements constants et leur soutien moral indéfectible. Leur présence à nos côtés a été une source de force inestimable, notamment dans les moments les plus exigeants.

Nous remercions du fond du cœur nos amis, pour leur écoute, leur bienveillance, leurs encouragements et leur humour qui ont allégé les périodes de stress. Leur amitié a rendu cette aventure plus agréable et chaleureuse.

Nous tenons à remercier l'ensemble de l'équipe pédagogique et administrative de nos spécialités - SID et IATI - pour la qualité de l'enseignement dispensé, leur engagement et leur disponibilité tout au long de notre formation.

Nous adressons également nos remerciements à toutes les personnes, connues ou discrètes, qui ont contribué, de près ou de loin, à la réalisation de ce mémoire. Chaque geste, chaque mot, chaque soutien a compté.

Nous souhaitons aussi exprimer notre gratitude à toutes les institutions et acteurs qui nous ont accompagnés dans ce projet. Nous avons initié une demande de labellisation du système développé, et restons confiants, avec espoir et patience, en attendant une réponse favorable, inch'Allah.

Que les membres du jury trouvent ici l'expression de nos sincères remerciements pour l'honneur qu'ils nous font en prenant le temps de lire et d'évaluer ce travail.

---

### Résumé

Les efflorescences algales nuisibles causées par les cyanobactéries (CyanoHABs) constituent une menace croissante pour la santé publique, l’environnement et les économies locales. Face à ce défi, ce travail propose une approche innovante alliant intelligence artificielle et technologies web pour anticiper et analyser ces phénomènes.

Le projet repose sur deux axes complémentaires :

1. **La prédiction de la densité cellulaire des cyanobactéries (approche quantitative)** , menée dans une optique académique et exploratoire, vise à évaluer la capacité de différents modèles à représenter fidèlement les dynamiques environnementales. Plusieurs familles de modèles ont été comparées : des modèles de régression classiques (Random Forest, XGBoost, LightGBM, HGB), des modèles de Deep Learning (notamment LSTM), ainsi que des modèles hybrides combinant apprentissage profond et apprentissage automatique pour maximiser la précision. Cette étape permet de mieux comprendre les relations entre les paramètres environnementaux et la prolifération cyanobactérienne.

2. **La prédiction du moment d’apparition d’un bloom (blooming time prediction)** , constitue l’axe central de l’implémentation. Elle vise à anticiper les épisodes d’efflorescence jusqu’à 7 jours à l’avance, grâce à des modèles séquentiels de Deep Learning (LSTM, TCN). Ces prédictions sont intégrées dans une application web intelligente nommée CyanoAlert.

L’application propose une interface graphique interactive pour la visualisation dynamique des données, l’analyse automatisée, la génération de rapports et le suivi de la qualité de l’eau.

Des techniques comme PSO et Optuna ont permis l’optimisation des hyperparamètres. La génération de données synthétiques via CGAN a amélioré la robustesse globale des modèles.

Ce projet contribue à une gestion intelligente et durable des ressources hydriques en réduisant les coûts de traitement et en prévention des risques sanitaires.

**Mots-clés :** Cyanobactéries, CyanoHABs, intelligence artificielle, Deep Learning, modèles hybrides, LSTM, TCN, XGBoost, PSO, CGAN, application web, prédiction, visualisation, gestion de l’eau.

---

### Abstract

Cyanobacterial harmful algal blooms (CyanoHABs) pose a growing threat to public health, the environment, and local economies. To address this challenge, this work proposes an innovative approach combining artificial intelligence and web technologies to anticipate and analyze these phenomena.

The project is built on two complementary axes:

1.  **Cyanobacterial density prediction (quantitative approach)** , conducted for academic and exploratory purposes, evaluates the capacity of various models to represent environmental dynamics. The study includes classical regression models (Random Forest, XGBoost, LightGBM, HGB), Deep Learning models (LSTM), and hybrid models combining both paradigms. This phase aims to better understand the relationships between environmental factors and cyanobacterial proliferation.

2.  **Blooming time prediction (temporal approach)** forms the core of the operational system. It anticipates bloom events up to 7 days in advance, using sequential Deep Learning models such as LSTM and TCN. The predictions are embedded in a smart web application named CyanoAlert.

The platform features an interactive dashboard with data visualisation, automated analysis, dynamic reporting, and real-time monitoring of water quality indicators.

Optimization techniques such as PSO and Optuna were used to fine-tune the models, while synthetic data generation through CGAN improved overall robustness.

This project contributes to the sustainable and intelligent management of aquatic resources, while reducing treatment costs and mitigating public health risks.

**Keywords:** Cyanobacteria, CyanoHABs, AI, Deep Learning, hybrid models, LSTM, TCN, XGBoost, PSO, CGAN, web application, forecasting, water management.

---

### ملخص

تُعد الإزهارات الطحلبية الضارة الناتجة عن البكتيريا الزرقاء (CyanoHABs) تهديدًا متزايدًا للصحة العامة، والبيئة، والاقتصادات المحلية. استجابةً لهذا التحدي، يقترح هذا العمل نهجًا مبتكرًا يجمع بين الذكاء الاصطناعي وتكنولوجيا الويب بهدف التنبؤ بهذه الظواهر البيئية وفهمها بشكل أعمق.

يرتكز المشروع على محورين تكميليين:

1. **التنبؤ بكثافة الخلايا السيانوبكتيرية (نهج كمي)** في سياق أكاديمي واستكشافي يهدف إلى تقييم قدرة النماذج المختلفة على تمثيل الديناميكيات البيئية. وقد تم اختبار نماذج انحدار تقليدية (مثل Random Forest، وLightGBM، وHGB)، ونماذج تعلم عميق (مثل LSTM)، بالإضافة إلى نماذج هجينة تجمع بين التعلم الآلي والتعلم العميق لزيادة الدقة. تساهم هذه الخطوة في فهم العلاقة بين العوامل البيئية وتكاثر السيانوبكتيريا.

2. **التنبؤ بتاريخ ظهور الإزهار الطحلي (blooming time prediction)** ، والذي يُعد المحور الأساسي للتطبيق العملي. يهدف هذا الجزء إلى التنبؤ بالإزهارات لمدة تصل إلى سبعة أيام مسبقًا، باستخدام نماذج تعلم تسلسلي مثل LSTM. وقد تم دمج هذه التنبؤات مباشرة في تطبيق ويب ذكي يُدعى CyanoAlert.

يوفر التطبيق واجهة تفاعلية متقدمة لعرض البيانات بشكل ديناميكي، والتحليل الآلي، وإنشاء التقارير، ومتابعة مؤشرات جودة المياه.

كما ساهم استخدام تقنيات مثل PSO و Optuna في تحسين الضبط الفائق للنماذج، في حين أدت البيانات الاصطناعية عبر CGAN إلى تعزيز دقة النتائج.

يُعد هذا المشروع مساهمة importante في الإدارة الذكية والمستدامة للموارد المائية، من خلال تقليل تكاليف المعالجة، والوقاية من المخاطر الصحية.

**الكلمات المفتاحية:** البكتيريا الزرقاء، CyanoHABs، الذكاء الاصطناعي، التعلم العميق، النماذج الهجينة، LSTM، TCN، XGBoost، PSO، CGAN، تطبيق ويب، التنبؤ،visualization، إدارة المياه.

---

## Table des matières

- Dédicace .............................................................................................................................................................2
- Remerciements ..................................................................................................................................................4
- Résumé ...............................................................................................................................................................5
- Abstract .............................................................................................................................................................6
- ملخص ...................................................................................................................................................................7
- Introduction générale .....................................................................................................................................15
- Chapitre 1 : Domaine d’étude ......................................................................................................................17
    - Introduction ............................................................................................................................................. 17
    - Cyanobactérie ...........................................................................................................................................17
        - Définition .....................................................................................................................................17
        - Morphologie et structure cellulaire ..............................................................................................18
        - Développement des cyanobactéries .............................................................................................19
    - Cyanotoxines ............................................................................................................................................20
        - Généralités ...................................................................................................................................20
        - Classification et caractéristiques ..................................................................................................20
        - Mécanismes d'action ....................................................................................................................21
    - Impact des cyanobactéries sur l'économie, le tourisme et les secteurs clés .................................21
    - Conclusion ...............................................................................................................................................23
- Chapitre 2 : Méthodes appliquées au domaine étudié ...............................................................................24
    - Introduction ............................................................................................................................................. 24
    - Augmentation de données .......................................................................................................................25
        - Réseaux Antagonistes Génératifs (GAN) ....................................................................................25
        - GANs Conditionnels (CGAN) .....................................................................................................25
    - Apprentissage automatique (Machine Learning) ....................................................................................25
        - Apprentissage supervisé .............................................................................................................26
        - Apprentissage non supervisé ......................................................................................................27
        - Méthodes ensemblistes ...............................................................................................................27
    - Apprentissage profond (deep learning ) ..................................................................................................29
        - Les réseaux de neurones convolutifs (CNN) ..............................................................................29
        - Les réseaux de neurones récurrents (RNN) ................................................................................29
        - Réseaux de Convolution Temporelle (TCN) ..............................................................................30
        - Les Transformers ........................................................................................................................30
    - Combinaison et hybridation de modèles ..................................................................................................31
    - Techniques d'Optimisation Avancées pour l'Apprentissage Automatique ..............................................32
        - Optimisation par Essaim de Particules (PSO) .............................................................................33
        - Optimisation par Algorithmes Evolutionnaires ...........................................................................33
        - Optimisation par Recherche Aléatoire (Random Search) ...........................................................33
    - Travaux similaires ...................................................................................................................................33
    - Conclusion ................................................................................................................................................35
- Chapitre 3 : Conception et système proposé ...............................................................................................37
    - Introduction ............................................................................................................................................. 37
    - Architecture du système ..........................................................................................................................38
    - Sites d'étude .............................................................................................................................................38
        - Barrage de Mexa (Algérie) .........................................................................................................40
        - Plans d’eau en Corée du Sud ......................................................................................................42
    - Prétraitement des données .......................................................................................................................42
        - Suppression des lignes avec trop de valeurs manquantes ...........................................................42
        - Imputation par K plus proches voisins (KNN) ...........................................................................42
    - Modèles appliqués ...................................................................................................................................49
        - Prédiction de la densité ......................................................................................................................49
            - Apprentissage automatique .....................................................................................................50
            - Apprentissage automatique Avancé ........................................................................................51
            - Apprentissage profond ............................................................................................................56
            - Apprentissage profond avancé ................................................................................................58
        - Prédiction du "Blooming Time" .........................................................................................................62
            - Détermination des seuils de blooming ....................................................................................62
            - Rééquilibrage des classes avec SMOTE .................................................................................63
            - Modèles de Deep Learning appliqués .....................................................................................64
            - Modèles hybrides .....................................................................................................................65
    - Les mesures de performance ...................................................................................................................67
    - Conclusion ................................................................................................................................................68
- Chapitre 4 : Implémentation et interprétation des résultats .......................................................................70
    - Introduction ............................................................................................................................................. 70
    - Technologies, outils et frameworks utilisés ............................................................................................70
        - Langages et environnements de développement ..........................................................................70
        - Les bibliothèques utilisées ...........................................................................................................71
    - Sécurité & RGPD ......................................................................................................................................72
    - Résultats expérimentaux ..........................................................................................................................73
        - Prédiction de la densité des cyanobactéries .................................................................................73
            - Apprentissage automatique .....................................................................................................73
            - Apprentissage automatique combiné .......................................................................................80
            - Apprentissage profond ............................................................................................................82
            - Apprentissage profond combiné .............................................................................................88
        - Prédiction du "Blooming Time" .........................................................................................................91
            - Apprentissage profond ............................................................................................................91
            - Apprentissage profond avancé ................................................................................................92
    - Intégration d’un module d’analyse automatisé et de génération de rapports visuels via IA ..............94
        - Fonctionnement global du module ..............................................................................................95
        - Choix de données à analyser ........................................................................................................95
        - Visualisation graphique dynamique .............................................................................................95
        - Analyse textuelle automatisé avec l'API Cohere .........................................................................96
        - Génération de rapport PDF ...........................................................................................................96
        - Objectifs atteints et apports du module .......................................................................................96
    - Conclusion ................................................................................................................................................97
- Conclusion et perspectives .............................................................................................................................98
    - Perspectives d’évolution .........................................................................................................................98
    - Appréciation personnelle .........................................................................................................................98
- Références bibliographiques ........................................................................................................................100

---

## Liste des figures

- Figure 1 : Structure d'une cyanobactérie [11,12] 17
- Figure 2 : Diverses formes morphologiques des cyanobactéries : (A) unicellulaires (sphériques et ovoïdes), (B) coloniales, (C) filamenteuses droites, (D) filamenteuses spiralées. 18
- Figure 3 : Facteurs favorisant la formation d’un bloom de cyanobactéries [18] 19
- Figure 4 : Croissance et division cellulaire chez les cyanobactéries [15] 20
- Figure 5 : Exemples visuels de blooms de cyanobactéries dans le monde [38] 23
- Figure 6 : Catégories d'apprentissage automatique [64] 27
- Figure 7 : Schéma du processus de Bagging. [73] 29
- Figure 8 : Schéma du processus de Boosting [74] 30
- Figure 9 : architecteur LSTM [82] 31
- Figure 10 : architecteur de transformer[87] 32
- Figure 11 : Schéma du processus de Blending [91] 33
- Figure 12 : Schéma du processus de Stacking [92] 34
- Figure 13 : Architecture du système prédictif proposé. 40
- Figure 14 : Illustration du site d’étude du barrage de Mexa avec différentes vues. 42
- Figure 15 : Schéma de l'architecture du cGAN – Générateur (à gauche) et Discriminateur (à droite). 48
- Figure 16: Visualisation graphique des scores R2 pour Random Forest (Mexa) 74
- Figure 17: Visualisation graphique des scores R2 pour XGBoost (Mexa) 75
- Figure 18: Visualisation graphique des scores R2 pour LightGBM (Mexa) 76
- Figure 19: Visualisation graphique des scores R2 pour Histogram-based Gradient Boosting(Mexa) 76
- Figure 20: Visualisation graphique des scores R2 pour Random Forest (Corée du Sud) 77
- Figure 21: Visualisation graphique des scores R2 pour XGBoost (Corée du Sud) 78
- Figure 22: Visualisation graphique des scores R2 pour LightGBM (Corée du Sud) 79
- Figure 23: Visualisation graphique des scores R2 pour Histogram-based Gradient Boosting(Corée du Sud) 80
- Figure 24: Scores R2 des modèles Stacking sur le site de Mexa 81
- Figure 25: Scores R2 des modèles Stacking sur le site de Corée du Sud 82
- Figure 26: Visualisation graphique des scores R2 pour CNN (Mexa) 83
- Figure 27: Visualisation graphique des scores R2 pour LSTM (Mexa) 84
- Figure 28: Visualisation graphique des scores R2 pour Transformer (Mexa) 85
- Figure 29: Visualisation graphique des scores R2 pour CNN (Corée du Sud) 86
- Figure 30: Visualisation graphique des scores R2 pour LSTM (Corée du Sud) 87
- Figure 31: Visualisation graphique des scores R2 pour Transformer (Corée du Sud) 88
- Figure 32: Scores R2 des modèles hybrides CNN/LSTM + Transformer sur le site de Mexa 89
- Figure 33: Scores R2 des modèles hybrides CNN/LSTM + Transformer sur le site de Corée du Sud 90
- Figure 34: Visualisation des scores pour les modèles classiques (Mexa) 91
- Figure 35: Visualisation des scores pour les modèles classiques (Corée du Sud) 92
- Figure 36: Visualisation des scores pour les modeles hybrides (Mexa) 93
- Figure 37: Visualisation des scores pour les modèles hybrides (Corée du Sud) 94

---

## Liste des tableaux

- Tableau 1 : Classification de cyanotoxines et leurs actions[19,20] 21
- Tableau 2 : Exemples Mondiaux d’Impacts des Blooms de Cyanobactéries 22
- Tableau 3: Articles similaires sur la modélisation et la prédiction des cyanobactéries 34
- Tableau 4 : Sites et applications similaires 36
- Tableau 5 : Description des paramètres mesurés au barrage de Mexa 43
- Tableau 6 : Description des variables collectées en Corée du Sud (2005–2025) 45
- Tableau 7: Récapitulatif des traitements appliqués aux datasets A (Rivières sud-coréennes) et B (Mexa) 48
- Tableau 8: Hyperparamètres du Random Forest 50
- Tableau 9: Hyperparamètres de XGBoost 50
- Tableau 10: Hyperparamètres de LightGBM 50
- Tableau 11: Hyperparamètres du HistGradientBoostingRegressor 51
- Tableau 12: Random Search — Random Forest 51
- Tableau 13: Random Search — XGBoost 51
- Tableau 14: Random Search — LightGBM 51
- Tableau 15: Random Search - HistGradientBoostingRegressor 52
- Tableau 16: PSO-Random Forest 52
- Tableau 17: PSO - XGBoost 52
- Tableau 18: PSO - LightGBM 52
- Tableau 19: PSO — HistGradientBoostingRegressor 53
- Tableau 20: Optuna — Random Forest 53
- Tableau 21: Optuna — XGBoost 53
- Tableau 22: Optuna — LightGBM 53
- Tableau 23: Optuna — HistGradientBoostingRegressor 54
- Tableau 24: Stacking simple — Random Forest + XGBoost (Configuration initiale) 54
- Tableau 25: Stacking simple — LightGBM + HistGradientBoosting (Configuration initiale) 55
- Tableau 26: Random Search - Random Forest + XGBoost (Optimisé) 55
- Tableau 27: Random Search - LightGBM + HistGradientBoosting (Optimisé) 55
- Tableau 28: PSO - Random Forest + XGBoost (Optimisé) 55
- Tableau 29 : PSO — LightGBM + HistGradientBoosting (Optimisé) 56
- Tableau 30: Optuna — Random Forest + XGBoost (Optimisé) 56
- Tableau 31 : Optuna — LightGBM + HistGradientBoosting (Optimisé) 56
- Tableau 32: Hyperparamètres du CNN 57
- Tableau 33: Hyperparamètres du LSTM 57
- Tableau 34: Hyperparamètres du Transformer 57
- Tableau 35: Random Search — CNN 58
- Tableau 36: Random Search — LSTM 58
- Tableau 37: Random Search — Transformer 58
- Tableau 38 : PSO — CNN 59
- Tableau 39: PSO — LSTM 59
- Tableau 40: PSO — Transformer 59
- Tableau 41: Optuna — CNN 59
- Tableau 42: Optuna — LSTM 60
- Tableau 43: Optuna — Transformer 60
- Tableau 44: Configuration combinée — Transformer + CNN 60
- Tableau 45: Configuration combinée — Transformer + LSTM 61
- Tableau 46: Random Search — Transformer + CNN 61
- Tableau 47: Random Search — Transformer + LSTM 61
- Tableau 48: PSO — Transformer + CNN 61
- Tableau 49: Optuna — Transformer + CNN 62
- Tableau 50: Optuna — Transformer + LSTM 62
- Tableau 51: Barrage de Mexa : seuils de blooming 63
- Tableau 52: Seuils de blooming estimés par K-means vs seuils OMS pour les plans d’eau en Corée du Sud 63
- Tableau 53: Hyperparamètres LSTM pour la prédiction du blooming time 64
- Tableau 54: Hyperparamètres Transformer pour la prédiction du blooming time 64
- Tableau 55: Hyperparamètres TCN pour la prédiction du blooming time 65
- Tableau 56: Hyperparamètres Transformer + CNN pour la prédiction du blooming time 65
- Tableau 57: Hyperparamètres Transformer + LSTM pour la prédiction du blooming time 66
- Tableau 58: Hyperparamètres TCN + CNN pour la prédiction du blooming time 66
- Tableau 59: Hyperparamètres TCN + LSTM pour la prédiction du blooming time 66
- Tableau 60: Mesures de sécurité intégrées ou prévues dans le système 72
- Tableau 61: Performances du modèle Random Forest sur le jeu de données de Mexa 73
- Tableau 62: Performances du modèle XGBoost sur le jeu de données de Mexa 74
- Tableau 63: Performances du modèle LightGBM sur le jeu de données de Mexa 75
- Tableau 64: Performances du modèle Hist. Gradient Boosting sur le jeu de données de Mexa 76
- Tableau 65: Performances du modèle Random Forest sur le jeu de données de Corée du Sud 77
- Tableau 66: Performances du modèle XGBoost sur le jeu de données de Corée du Sud 78
- Tableau 67 : Performances du modèle LightGBM sur le jeu de données de Corée du Sud 78
- Tableau 68 : Performances du modèle Hist. Gradient Boosting sur le jeu de données de Corée du Sud 79
- Tableau 69: Performances des modèles Stacking sur le site de Mexa 80
- Tableau 70: Performances des modèles Stacking sur le site de Corée du Sud 81
- Tableau 71: Performances du modèle CNN sur le jeu de données de Mexa 82
- Tableau 72: Performances du modèle LSTM sur le jeu de données de Mexa 83
- Tableau 73: Performances du modèle Transformer sur le jeu de données de Mexa 84
- Tableau 74: Performances du modèle CNN sur le jeu de données de Corée du Sud 85
- Tableau 75: Performances du modèle LSTM sur le jeu de données de Corée du Sud 86
- Tableau 76: Performances du modèle Transformer sur le jeu de données de Corée du Sud 87
- Tableau 77: Performances des modèles hybrides CNN/LSTM + Transformer sur le site de Mexa 88
- Tableau 78: Performances des modèles hybrides CNN/LSTM + Transformer sur le site de Corée du Sud 89
- Tableau 79: Performances des modèles d’apprentissage profond pour la classification du blooming time (Mexa) 91
- Tableau 80: Performances des modèles d’apprentissage profond pour la classification du blooming time (Corée du Sud) 91
- Tableau 81: Performances des modèles hybrides pour la classification du blooming time (Mexa) 92
- Tableau 82: Performances des modèles hybrides pour la classification du blooming time (Corée du Sud) 93

---

## Liste des acronymes

| Acronyme | Signification en anglais | Signification en français |
| :--- | :--- | :--- |
| AI | Artificial Intelligence | Intelligence Artificielle |
| ANN | Artificial Neural Network | Réseau de Neurones Artificiel |
| AWWA | American Water Works Association | Association Américaine des Travaux Hydrauliques |
| BMAA | Beta-Methylamino-L-alanine | Bêta-N-Méthylamino-L-alanine |
| CNN | Convolutional Neural Network | Réseau de Neurones Convolutif |
| CyanoHABs | Cyanobacterial Harmful Algal Blooms | Efflorescence Algales Nuisibles à Cyanobactéries |
| DL | Deep Learning | Apprentissage Profond |
| EPA | Environmental Protection Agency | Agence de Protection de l'Environnement |
| GAN | Generative Adversarial Network | Réseau Antagoniste Génératif |
| IARC | International Agency for Research on Cancer | Centre International de Recherche sur le Cancer |
| IoT | Internet of Things | Internet des Objets |
| IPBES | Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services | Plateforme Intergouvernementale sur la Biodiversité et les Services Écosystémiques |
| LSTM | Long Short-Term Memory | Mémoire à Long-Court Terme |
| MATE | Ministère de l'Aménagement du Territoire et de l'Environnement | Ministère de l'Aménagement du Territoire et de l'Environnement |
| MedECC | Mediterranean Experts on Climate and environmental Change | Experts Méditerranéens sur le Climat et le Changement Environnemental |
| ML | Machine Learning | Apprentissage Automatique |
| NASA ECOSTRESS | ECOSystem Spaceborne Thermal Radiometer Experiment on Space Station | Radionètre Thermique Spatial pour les Écosystèmes sur la Station Spatiale |
| NOAA | National Oceanic and Atmospheric Administration | Administration Nationale Océanique et Atmosphérique |
| OMS | Organisation Mondiale de la Santé | World Health Organization |
| RNN | Recurrent Neural Network | Réseau de Neurones Récurrent |
| SLA | Sclérose Latérale Amyotrophique | Amyotrophic Lateral Sclerosis |
| SVM | Support Vector Machine | Machine à Vecteurs de Support |
| UNEP | United Nations Environment Programme | Programme des Nations Unies pour l'Environnement |
| API | Application Programming Interface | Interface de Programmation Applicative |
| F1-score | F1-score | Score F1 (métrique) |
| GPU | Graphics Processing Unit | Unité de Traitement Graphique |
| MSE | Mean Squared Error | Error Quadratique Moyenne |
| NLP | Natural Language Processing | Traitement Automatique du Langage Naturel |
| ReLU | Rectified Linear Unit | Unité Linéaire Rectifiée |
| RMSE | Root Mean Squared Error | Racine de l'Erreur Quadratique Moyenne |
| TPU | Tensor Processing Unit | Unité de Traitement Tensorielle |
| Afssa | Agence française de sécurité sanitaire des aliments | (Acronyme français) |
| Afsset | Agence française de sécurité sanitaire de l'environnement et du travail | (Acronyme français) |

---

## Introduction générale

### 1. Contexte

À l’échelle mondiale, les écosystèmes aquatiques – tels que les lacs, rivières et barrages – remplissent des fonctions essentielles pour la survie des espèces, la régulation du climat et le développement humain. Ces milieux naturels assurent des services écosystémiques vitaux : fourniture d’eau potable, soutien à l’agriculture, préservation de la biodiversité et production d’oxygène via la photosynthèse réalisée par des micro-organismes aquatiques, notamment les cyanobactéries. Cependant, sous l’effet des changements climatiques, de l’eutrophisation (excès de nutriments) et de la pollution anthropique, ces écosystèmes subissent une dégradation croissante. Un symptôme particulièrement alarmant de ce déséquilibre est la prolifération massive et incontrôlée des cyanobactéries, connue sous le nom de bloom. Bien que ces micro-organismes soient responsables de près de 50 % de la production d’oxygène atmosphérique, leur surdéveloppement libère des cyanotoxines toxiques qui menacent la santé humaine, la faune aquatique et les économies locales.

### 2. Problématique

Les blooms toxiques représentent désormais une urgence écologique à l’échelle planétaire. Leur fréquence a augmenté de plus de 30 % depuis 2010, exposant près de 2 milliards de personnes à des risques sanitaires (OMS), avec des pertes économiques mondiales estimées à 260 milliards de dollars par an (Banque mondiale).

Malgré la gravité de ce phénomène, les méthodes de surveillance actuelles – telles que les prélèvements manuels, les analyses de laboratoire ou les dispositifs satellitaires – demeurent coûteuses, lentes et peu accessibles, en particulier dans les régions les plus vulnérables. Ces approches sont souvent réactives, fournissant les résultats trop tardivement pour prévenir les impacts.

Quant aux technologies plus récentes (IoT, drones, satellites), elles permettent une observation plus fréquente, mais présentent également des limites majeures : coût élevé, besoin important en énergie, et difficulté à mesurer certains paramètres critiques en temps réel, tels que la concentration des toxines ou la densité cellulaire. Ce manque de solutions prédictives, accessibles et intégrées freine considérablement les stratégies de gestion proactive des blooms, aggravant leurs conséquences écologiques, sanitaires et économiques.

Face à ces limites persistantes, une question essentielle se pose : comment développer des outils à la fois prédictifs, accessibles et adaptés aux contextes locaux pour prévenir efficacement les blooms de cyanobactéries ?

### 3. Objectifs

Le projet CyanoAlert a pour ambition de répondre à ces défis en développant une solution technologique intelligente et accessible, basée sur l’intelligence artificielle. Ses objectifs principaux sont :

- Prédire de manière précoce les efflorescences de cyanobactéries à partir de données environnementales, même limitées ou partiellement manquantes.
- Anticiper les impacts sanitaires, écologiques et économiques liés aux blooms.
- Automatiser l’analyse des données et la génération de rapports d’alerte exploitables par les autorités locales et les usagers.
- Offrir une solution utilisable dans des contextes à faibles ressources technologiques, notamment en Afrique.
- Intégrer un écosystème numérique alliant prédiction environnementale, marketplace de produits artisanaux locaux, et accès à des services d’experts.

### 4. Contribution

Ce travail propose une approche innovante de détection prédictive des blooms de cyanobactéries, fondée sur l’intelligence artificielle. Il s’appuie notamment sur des modèles d’apprentissage profond capables de traiter des données spatio-temporelles environnementales, même lorsqu’elles sont partielles ou limitées.

La contribution principale réside dans le développement d’un système intégré, automatisé et adaptable, combinant :

- une modélisation prédictive fiable des phénomènes de bloom,
- une visualisation graphique claire et intuitive des alertes à destination des autorités locales et des usagers,
- une analyse et une interprétation approfondies des données collectées, facilitant la prise de décision,
- ainsi qu’un accès à des services complémentaires, tels qu’une marketplace locale et une interface avec des experts techniques.

Le projet CyanoAlert vise ainsi à associer avancées technologiques et simplicité d’usage, en proposant une solution adaptée aux contextes à faibles ressources, au service d’une gestion durable, équitable et proactive des ressources en eau.

### 5. Organisation du mémoire

Le document se structure en six chapitres :

- **Chapitre 1 — Domaine d’étude :** Présente les bases biologiques et écologiques des efflorescences de cyanobactéries (CyanoHABs), leur toxicité, les causes, et les enjeux globaux associés.
- **Chapitre 2 — Méthodes appliquées :** Présente les approches d’IA retenues : régression, réseaux de neurones, modèles ensemblistes, GAN, SMOTE, PSO, etc.
- **Chapitre 3 — Conception et système proposé :** Décrit l’architecture du système, la modélisation des tâches (prédiction densité/bloom), les jeux de données, et les choix algorithmiques.
- **Chapitre 4 — Implémentation et interprétation des résultats :** Détaille la réalisation technique, les données utilisées, les résultats obtenus, et les limites identifiées.

---

## Chapitre 1 : Domaine d’étude

### 1. Introduction

Les écosystèmes aquatiques, garants de la biodiversité et des équilibres hydroclimatiques, sont aujourd’hui gravement menacés par la prolifération des cyanobactéries toxiques, ou CyanoHABs (Cyanobacterial Harmful Algal Blooms). En forte augmentation à l’échelle mondiale, ces efflorescences représentent un risque écologique, sanitaire et socio-économique majeur, notamment dans les régions méditerranéennes [1].

Favorisées par l’eutrophisation et le réchauffement climatique — qui progresse en Méditerranée 20% plus vite que la moyenne mondiale [2] —, ces proliférations sont à l’origine de toxines puissantes (microcystines, anatoxines, cylindrospermopsines), reconnues comme dangers émergents pour la santé par l’OMS [3].

En Algérie, des réservoirs stratégiques comme le barrage de Mexa et le lac Oubeira subissent régulièrement des blooms, affectant l’eau potable de près de 500 000 habitants et générant plus de 15 millions d’euros de pertes en 2022 [4] [5]. À l’échelle mondiale, 40 % des masses d’eau douce sont aujourd’hui exposées à un risque cyanobactérien significatif [6].

Face à cette urgence, ce chapitre établit les bases scientifiques nécessaires à la compréhension du phénomène, en explorant la biologie des cyanobactéries, les conditions de leur prolifération, les types de toxines produites et les impacts observés. L’objectif ultime est de mieux anticiper et gérer ces événements grâce aux approches d’intelligence artificielle.

### 2. Cyanobactéries

#### 2.1. Définition

Les cyanobactéries, souvent appelées à tort algues bleues, sont en réalité des bactéries Gram négative photosynthétiques appartenant au règne des procaryotes. Leur couleur bleu-vert caractéristique provient de pigments comme la phycocyanine et la chlorophylle a, utilisés dans la photosynthèse oxygénique [7].

On les retrouve dans une grande variété de milieux aquatiques – lacs, barrages, rivières, zones humides – où elles jouent un rôle écologique important, notamment dans la production d’oxygène et la fixation de l’azote atmosphérique [8]. Toutefois, sous l’effet de conditions favorables comme l’eutrophisation, une forte luminosité ou des températures élevées, ces micro-organismes peuvent former des efflorescences massives appelées blooms, dont certaines espèces produisent des cyanotoxines (microcystines, cylindrospermopsines, anatoxines), dangereuses pour la santé humaine, animale et la biodiversité aquatique [9,10].

**Figure 1 : Structure d’une cyanobactérie [11,12].**

#### 2.2. Morphologie et structure cellulaire

Les cyanobactéries présentent une grande diversité morphologique : elles peuvent être unicellulaires (sphériques ou ovoïdes), coloniales (agrégats de cellules enveloppés d’une gaine mucilagineuse), ou encore adopter des formes filamenteuses et spiralées [13]. Cette variabilité structurelle reflète leur remarquable capacité d’adaptation aux environnements aquatiques et terrestres.

**Figure 2 : Diverses formes morphologiques des cyanobactéries : (A) unicellulaires (sphériques et ovoïdes), (B) coloniales, (C) filamenteuses droites, (D) filamenteuses spiralées.**

Leur cellule, typiquement procaryote, ne contient ni noyau ni organites membranaires, mais elle est hautement spécialisée pour la photosynthèse. Celle-ci s’effectue grâce à des membranes thylakoïdiennes internes, disposées en couches parallèles sous la membrane plasmique, riches en pigments photosynthétiques tels que la chlorophylle a et les phycobiliprotéines [12]. Ces membranes accueillent les photosystèmes I et II, les chaînes de transport d’électrons, ainsi que les phycobilisomes, structures protéiques responsables de la capture de l’énergie lumineuse.

La paroi cellulaire est de type Gram-négatif, avec une structure typique des eubactéries : une mince couche de peptidoglycane recouverte d’une membrane externe riche en lipopolysaccharides [11]. Le cytoplasme contient des inclusions comme :
- les granules de réserve (glycogène, cyanophycine),
- les carboxysomes (centres de concentration de CO2),
- et des vacuoles gazeuses (aérotopes), assurant la flottabilité des colonies [14].

Chez les formes filamenteuses, trois types cellulaires spécialisés sont observés [15] :
- **Cellules végétatives** : responsables de la photosynthèse et de la croissance du filament.
- **Hétérocystes** : cellules différenciées, à paroi épaisse, dépourvues de pigments, spécialisées dans la fixation de l’azote moléculaire en conditions anaérobies [16].
- **Akinètes** : cellules dormantes, de forme élargie et à paroi épaissie, riches en cyanophycine et glycogène, jouant un rôle crucial dans la survie en conditions extrêmes [16].

Certaines cyanobactéries peuvent même modifier leur organisation morphologique selon les conditions du milieu, passant d’une forme libre à une structure filamenteuse pour mieux résister au stress. Cette plasticité témoigne de leur importance écologique et évolutive, notamment comme ancêtres des chloroplastes via un événement d’endosymbiose [17].

### 3. Développement des cyanobactéries

Les cyanobactéries sont des micro-organismes photosynthétiques qui prospèrent dans les milieux aquatiques, en particulier en présence de nutriments tels que le phosphore et l’azote. Cependant, leur prolifération excessive peut entraîner des problèmes environnementaux, comme la formation de fleurs d’eau toxiques. Le développement des cyanobactéries est conditionné par divers facteurs environnementaux favorables : températures élevées, forte luminosité, et forte concentration en nutriments [12,14]. Cette surabondance peut affecter la qualité de l’eau, la biodiversité aquatique, et même la santé humaine, en raison de la production potentielle de toxines.

#### 3.1. Photosynthèse

Appartenant à la classe procaryote du phytoplancton, les cyanobactéries représentent la base de nombreuses chaînes trophiques dans les écosystèmes aquatiques. Elles réalisent la photosynthèse à l’aide de pigments comme la chlorophylle a et les phycobiliprotéines, qui captent l’énergie lumineuse. Cette lumière permet la photolyse de l’eau, libérant de l’oxygène, et l’énergie générée est utilisée pour fixer le dioxyde de carbone (CO2) en molécules organiques via le cycle de Calvin [11,12]. Les cyanobactéries jouent ainsi un rôle fondamental dans la production d’oxygène et la régulation des grands cycles biogéochimiques.

#### 3.2. Croissance et prolifération

La croissance des cyanobactéries est favorisée par des conditions environnementales spécifiques : une température de l’eau élevée, une forte luminosité, un pH alcalin, une stabilité de la colonne d’eau, un temps calme, et une abondance de nutriments [13,14]. Ces conditions peuvent conduire à la formation de blooms cyanobactériens, des proliférations massives visibles à la surface des eaux (Figure 3). Ce phénomène est renforcé par l’eutrophisation due aux activités humaines, et engendre des effets négatifs : coloration et odeur désagréables de l’eau, production de toxines, et difficultés dans le traitement des eaux destinées à la consommation [16].

**Figure 3 : Facteurs favorisant la formation d’un bloom de cyanobactéries [18]**

#### 3.3. Reproduction

Les cyanobactéries se reproduisent principalement par scission binaire, une forme de reproduction asexuée où une cellule mère se divise en deux cellules filles génétiquement identiques [15]. Ce mode de reproduction rapide permet une multiplication efficace des populations, en particulier dans des conditions favorables (Figure 4).

**Figure 4 : Croissance et division cellulaire chez les cyanobactéries [15]**

### 4. Cyanotoxines

Les cyanotoxines constituent l’un des aspects les plus préoccupants des efflorescences de cyanobactéries en raison de leur toxicité et de leurs impacts potentiels sur les milieux aquatiques et la santé humaine.

#### 4.1. Généralités

Les cyanotoxines sont des métabolites secondaires produits par certaines souches de cyanobactéries lors d'efflorescences algales (blooms). Ces composés toxiques présentent des risques majeurs pour les écosystèmes aquatiques et la santé publique [19,20].

#### 4.2. Classification et caractéristiques

Les cyanotoxines se répartissent :
- par organe cible : hépatotoxines, neurotoxines, dermatotoxines ;
- par structure chimique : microcystines, cylindrospermopsines, anatoxines, saxitoxines ;
- par famille moléculaire : alcaloïdes, lipopolysaccharides, peptides cycliques.

Elles sont libérées lors de la sénescence ou de la lyse cellulaire, parfois sous l’action de cyanophages ou d’algicides [9].

**Tableau 1 : Classification de cyanotoxines et leurs actions [19,20]**

| Famille de Cyanotoxines | Exemples | Cibles/Caractéristiques | Persistance/Temps d'Action |
| :--- | :--- | :--- | :--- |
| Hépatotoxines | Microcystines, Nodularines | - Ciblent le foie (lésions hépatiques)<br/>- Potentiel cancérigène à long terme | - Résistantes à la chaleur<br/>- Persistantes dans l'eau |
| Neurotoxines | Anatoxines, Saxitoxines | - Affectent le système nerveux (paralysies, convulsions)<br/>- Blocage des canaux ioniques | - Action rapide (minutes à heures) |
| Dermatotoxines | Lyngbyatoxine | - Irritation cutanée et muqueuses<br/>- Risque accru lors de contact direct (baignade, sports nautiques) | - Effets immédiats |

#### 4.3. Mécanismes d'action

Après avoir identifié les principales familles de cyanotoxines, il est essentiel d’examiner les mécanismes moléculaires et cellulaires par lesquels elles exercent leur toxicité :

- **Hépatotoxines** :
    - Inhibition des phosphatases PP1/PP2A → dérégulation cellulaire [21]
    - Induction de stress oxydatif hépatique
- **Neurotoxines** :
    - Anatoxine-a : agoniste des récepteurs nicotiniques → convulsions [3]
    - BMAA : implication dans la pathogenèse de la SLA [22]
- **Dermatotoxines** :
    - Activation de la protéine kinase C → inflammation cutanée

### 5. Impact des cyanobactéries sur l'économie, le tourisme et les secteurs clés

Les proliférations cyanobactériennes représentent une menace sérieuse pour la santé humaine, en raison de leurs cyanotoxines, pouvant provoquer des effets graves tels que des irritations cutanées et oculaires, des détresses respiratoires, voire des atteintes neurotoxiques et hépatotoxiques, notamment chez les personnes exposées à de l’eau contaminée. Plusieurs cas de maladies et de décès ont été rapportés à travers le monde. Sur le plan environnemental, ces proliférations massives altèrent profondément les écosystèmes aquatiques : elles augmentent la turbidité de l’eau, provoquent la disparition des plantes subaquatiques, perturbent l’équilibre des communautés phytoplanctoniques et réduisent la teneur en oxygène, entraînant des mortalités chez les poissons et les oiseaux (tableau 2). Cependant, d’un point de vue économique, ces blooms engendrent des nuisances majeures telles que la coloration de l’eau, des odeurs nauséabondes et des perturbations dans les procédés de traitement de l’eau, ce qui alourdit considérablement les coûts de gestion des ressources hydriques continentales [3, 23].

**Tableau 2 : Exemples Mondiaux d’Impacts des Blooms de Cyanobactéries.**

| Localisation | Détails | Références |
| :--- | :--- | :--- |
| Lac Érié, USA/Canada | Bloom massif de Microcystis ; 400 000 personnes privées d’eau à Toledo (2014). | [3, 24] |
| Floride, USA | Anatoxine et microcystines dans les rivières St. Lucie et Caloosahatchee ; fermetures de plages. | [25] |
| Lac Balaton, Hongrie | Dégradation de la qualité de l’eau et perte de biodiversité aquatique. | [26] |
| Côte Est, Australie | Cylindrospermopsine liée à des mortalités piscicoles. | [27] |
| Lac Taihu, Chine | Bloom permanent ; crises de l’eau potable ; menace pour des millions de personnes. | [28] |
| Lac Elephant Butte, USA | Bloom massif, interdictions de baignade, mortalités piscicoles. | [29] |

Voici quelques impacts délétères des blooms sur plusieurs secteurs clés :

#### Traitement de l’Eau Potable
- **Coûts de traitement accrus** : Les compagnies d’eau doivent utiliser du charbon actif, l’ozonation ou la nanofiltration, ce qui représente un coût supplémentaire de 0,50 à 2 €/m3 [3,30]
- **Coupures d’eau potable** : À Toledo (USA), un bloom en 2014 a contaminé l’eau potable, affectant plus de 500 000 personnes [24].
- **Risque sanitaire grave** : L’ingestion de microcystines est liée à des lésions hépatiques et classée comme potentiellement cancérogène (Groupe 2B, IARC) [28].

#### Pêche et Aquaculture
- **Mortalité piscicole massive** : En Australie, plus d’un million de poissons sont morts dans la rivière Darling entre 2019 et 2023, en lien avec des blooms de Microcystis et de faibles niveaux d’oxygène (<2 mg/L) [27, 31].
- **Contamination des produits de la mer** : Les toxines comme la microcystine et la cylindrospermopsine peuvent s’accumuler dans les mollusques et poissons, entraînant des interdictions de pêche (e.g., Maine, 2021–2023) [23,33].

#### Agriculture
- **Irrigation contaminée** : L’eau d’irrigation contaminée par des cyanotoxines peut réduire les rendements agricoles et affecter la santé des cultures [3,34].
- **Effets phytotoxiques** : Les microcystines inhibent la croissance des racines et perturbent la photosynthèse des plantes, provoquant des nécroses et un stress oxydatif [35].

#### Tourisme et Loisirs
- **Fermeture de sites** : Lors de blooms toxiques, l’accès à des zones touristiques telles que plages et lacs est interdit. Par exemple, des interdictions ont été imposées sur le Lac d’Annecy (France) ou encore sur les Grands Lacs (USA/Canada) à la suite de proliférations [25,36].
- **Annulations massives** : La fermeture des sites induit une baisse significative des réservations hôtelières et de fréquentation des campings [30].
- **Baisse du chiffre d’affaires** : Les entreprises proposant des activités nautiques rapportent des pertes allant jusqu’à 70 % durant les périodes de bloom [25]
- **Déclin de l’attractivité touristique** : Une étude aux États-Unis a montré qu’un seul épisode de bloom visible pouvait réduire la fréquentation touristique de 25 à 40 % [37]

**Figure 5 : Exemples visuels de blooms de cyanobactéries dans le monde [38]**

### 6. Conclusion

Les cyanobactéries, bien qu’essentielles dans les écosystèmes aquatiques, deviennent préoccupantes lorsqu’elles prolifèrent de manière excessive. Leurs blooms toxiques, favorisés par le changement climatique et l’eutrophisation, représentent une menace croissante pour la santé publique, la biodiversité, et de nombreux secteurs économiques. Comprendre leur biologie, les facteurs de leur développement et les effets des cyanotoxines est essentiel pour élaborer des stratégies de gestion efficaces. C’est dans cette optique que le chapitre suivant présentera les méthodes d’intelligence artificielle pouvant être mobilisées pour anticiper ces phénomènes.

---

## Chapitre 2 : Méthodes appliquées au domaine étudié

### 1. Introduction

L'Intelligence Artificielle (IA) est aujourd'hui un domaine clé dans la transformation numérique mondiale, offrant des solutions permettant de simuler des fonctions cognitives humaines telles que le raisonnement, l’apprentissage et la prise de décision autonome [39,40]. En raison de ses capacités exceptionnelles à traiter de grandes quantités de données et à s’adapter aux évolutions des contextes, l'IA trouve des applications dans de nombreux secteurs, allant de la médecine à la finance, en passant par l’industrie et les systèmes décisionnels [41,42]. Elle permet de répondre à des défis complexes, comme l'optimisation de processus, la prédiction de tendances ou l'amélioration de la prise de décision en temps réel.

Dans ce cadre, l’apprentissage automatique (Machine Learning) constitue l’une des techniques les plus utilisées pour modéliser des relations complexes et extraire des informations utiles à partir de données historiques, sans nécessiter une programmation explicite pour chaque tâche [43,44]. Ce processus est au cœur de nombreuses innovations technologiques, allant de la détection de maladies à la prédiction des comportements consommateurs. L'apprentissage automatique se divise en plusieurs familles d'algorithmes, chacun offrant des solutions adaptées à des types spécifiques de données et de problèmes.

Les algorithmes supervisés sont parmi les plus couramment utilisés, exploitant des jeux de données étiquetées pour entraîner des modèles capables de prédire des résultats pour de nouvelles données. Parmi ces modèles, on trouve des approches classiques comme la régression linéaire, les arbres de décision ou les machines à vecteurs de support (SVM), qui permettent de traiter une variété de problèmes dans des domaines comme la finance, la santé ou le marketing [45]. Les réseaux de neurones supervisés, inspirés du fonctionnement biologique du cerveau humain, représentent également une méthode puissante de cette catégorie. Ils sont capables d'apprendre des relations complexes entre les variables d'entrée et les sorties, et sont utilisés dans des contextes variés tels que la reconnaissance d’images, la classification de textes ou la prévision de séries temporelles.

Par ailleurs, les modèles ensembles, qui incluent le bagging, le boosting (notamment avec des algorithmes comme XGBoost ou LightGBM) et le stacking, combinent plusieurs modèles pour obtenir des prédictions plus robustes et plus précises, et sont utilisés pour optimiser les performances dans des contextes très variés [46,47]. Dans tous ces cas, la qualité et la diversité des données d'entraînement jouent un rôle crucial dans les performances des modèles. Ainsi, des techniques comme l'augmentation de données (data augmentation), souvent basées sur des méthodes avancées telles que les réseaux antagonistes génératifs (GAN) et leurs variantes conditionnelles (cGAN) [48,49], sont fréquemment employées. Ces techniques permettent de générer artificiellement de nouvelles données réalistes à partir des données existantes, améliorant ainsi la généralisation des modèles et réduisant le risque de surapprentissage [50,51].

Une autre approche très puissante est l’apprentissage profond (Deep Learning), qui repose sur l’utilisation de réseaux neuronaux multicouches pour l’exploration de données complexes et volumineuses. Cette méthode est particulièrement efficace dans des domaines comme la reconnaissance d'images et de textes, avec des architectures telles que les réseaux convolutifs (CNN) pour le traitement d’images et les réseaux récurrents (RNN, LSTM) pour l’analyse des séries temporelles et du langage naturel [52, 53,54].

Enfin, des techniques d'optimisation comme l’optimisation par essaim de particules (PSO), les algorithmes évolutionnaires et l’optimisation bayésienne sont couramment utilisées pour ajuster les hyperparamètres des modèles et maximiser leur efficacité dans des espaces de solution complexes et de grande dimension [55,56]. Ces méthodologies permettent de trouver des solutions optimales dans des environnements de plus en plus complexes.

### 2. Augmentation de données

La génération de données synthétiques est devenue une stratégie cruciale pour faire face au manque ou à l’inhomogénéité des données, en particulier dans les systèmes environnementaux où la collecte est coûteuse ou difficile. Les Generative Adversarial Networks (GAN) et leur variante conditionnelle Conditional GAN (CGAN) sont parmi les techniques les plus puissantes pour cette tâche [48,49].

#### 2.1 Réseaux Antagonistes Génératifs (GAN)

Les GANs, introduits par [48], consistent en deux réseaux neuronaux en compétition : un générateur qui produit des données synthétiques et un discriminateur qui évalue leur authenticité. Cette approche est largement utilisée pour pallier le déséquilibre des données dans divers domaines. Par exemple, Frid-Adar et al. (2018) ont montré l’efficacité des GANs pour améliorer la classification des images échographiques du sein en générant des données synthétiques réalistes, réduisant ainsi les biais liés aux données déséquilibrées. Par ailleurs, une analyse systématique menée par Wang et al. (2020) a confirmé que les GANs et leurs variantes, dont les CGANs, sont des outils efficaces pour le suréchantillonnage dans des domaines variés tels que la santé, la finance et la cybersécurité.

#### 2.2 GANs Conditionnels (CGAN)

Les CGANs, proposés par [49], permettent de conditionner la génération de données sur des informations supplémentaires comme des étiquettes de classe ou des variables contextuelles. Par exemple, [12] ont utilisé un CGAN pour générer des échantillons synthétiques dans un ensemble de données d’analyses d’eaux usées, en conditionnant l’entraînement sur des variables externes, ce qui a amélioré la performance des modèles de classification. De même, [58] ont appliqué un CGAN dans un contexte médical pour générer des dossiers patients synthétiques multi-étiquettes, démontrant l’efficacité de cette approche dans des contextes industriels et de santé.

### 3. Apprentissage automatique (Machine Learning)

L’apprentissage automatique est un champ dynamique de l’intelligence artificielle qui permet aux systèmes de tirer des leçons de données passées afin d’effectuer des prédictions ou de prendre des décisions sans être explicitement programmés pour chaque tâche [59]. Il repose sur la modélisation de relations complexes entre les variables d’un jeu de données, permettant ainsi de découvrir des régularités et de généraliser à de nouvelles situations.

Les approches d’apprentissage automatique se classent généralement en trois catégories principales : l’apprentissage supervisé, l’apprentissage non supervisé et l’apprentissage par renforcement. L’apprentissage supervisé, qui fait l’objet de cette étude, utilise des ensembles de données étiquetées pour entraîner des modèles capables d’effectuer des tâches telles que la classification ou la régression [60]. L’apprentissage non supervisé, quant à lui, est utilisé lorsque les données ne possèdent pas de labels. Il permet de détecter des structures cachées, de regrouper les données ou d’identifier des anomalies. Enfin, l’apprentissage par renforcement repose sur un agent qui interagit avec un environnement et apprend à prendre des décisions séquentielles en maximisant une récompense cumulative obtenue par essais et erreurs [61,62].

**Figure 6 : Catégories d’apprentissage automatique [64]**

#### 3.1 Apprentissage supervisé

L’apprentissage supervisé est une branche fondamentale du machine learning qui consiste à entraîner un modèle à partir d’un jeu de données étiqueté, c’est-à-dire où chaque exemple d’entrée est associé à une sortie ou une classe connue. L’objectif est d’apprendre une fonction capable de prédire correctement les labels pour de nouvelles données non vues, en généralisant les relations apprises lors de la phase d’entraînement [60].

Le processus typique de l’apprentissage supervisé comprend deux étapes : l’apprentissage proprement dit, où le modèle ajuste ses paramètres pour minimiser l’erreur sur les données d’entraînement, et l’évaluation, qui mesure la capacité du modèle à généraliser sur des données test. Les tâches courantes en apprentissage supervisé sont la classification (prédire des catégories discrètes) et la régression (prédire des valeurs continues).

Parmi les algorithmes classiques les plus utilisés en apprentissage supervisé, on distingue notamment :
- La régression linéaire et logistique, qui modélisent respectivement des relations continues ou des probabilités d’appartenance à une classe, avec une bonne interprétabilité [66].
- Les arbres de décision, qui segmentent l’espace des données en régions selon des règles simples, faciles à interpréter et à visualiser [67].
- Les machines à vecteurs de support (SVM), qui cherchent à maximiser la marge entre les classes dans un espace transformé, offrant de bonnes performances même dans des espaces de grande dimension [68].

#### 3.2 Apprentissage non supervisé

L’apprentissage non supervisé constitue une branche du machine learning qui se distingue par l’absence d’étiquettes ou de classes préalablement définies. L’algorithme apprend uniquement à partir des structures inhérentes aux données elles-mêmes, sans supervision extérieure. Cette approche est particulièrement utile pour explorer de grands volumes de données et révéler des schémas ou regroupements sous-jacents.

L’une des applications les plus répandues de l’apprentissage non supervisé est le clustering, qui permet de regrouper automatiquement des objets similaires au sein de groupes distincts. Ces regroupements peuvent ensuite servir à mieux comprendre les données, orienter des décisions stratégiques ou alimenter d’autres modèles prédictifs. Parmi les méthodes de clustering, l’algorithme K-means est l’un des plus populaires en raison de sa simplicité et de son efficacité.

- **L’algorithme K-means**
L’algorithme K-means vise à regrouper un ensemble de données en k clusters en minimisant la variance intra-cluster. Chaque itération comporte deux étapes principales : l’assignation des points de données au centroïde le plus proche, puis la mise à jour des centroïdes en calculant la moyenne des points affectés à chaque cluster. Ce processus se répète jusqu’à la stabilisation des centres ou convergence.

L’un des principaux atouts de K-means est sa simplicité algorithmique et sa rapidité de convergence, même sur de grands ensembles de données. Son implémentation est largement disponible dans des bibliothèques telles que Scikit-learn ou TensorFlow, ce qui explique sa popularité croissante [69].

Cependant, K-means repose sur plusieurs hypothèses restrictives. Il suppose que les clusters sont sphériques et de taille comparable, ce qui limite son efficacité sur des distributions complexes. De plus, l’algorithme est sensible à l’initialisation aléatoire des centroïdes, ce qui peut générer des résultats variables d’une exécution à l’autre [70].

Le choix du nombre de clusters k est également une étape délicate et cruciale. La méthode du coude (Elbow method) analyse la somme des carrés des distances intra-cluster (WCSS) en fonction de k, et un point d’inflexion sur la courbe indique souvent une valeur optimale. En complément, le coefficient de silhouette évalue la cohérence interne des clusters, où une valeur proche de 1 traduit une bonne séparation des groupes [71].

Enfin, des techniques plus avancées telles que la statistique de l’écart (Gap Statistic) ont été développées pour estimer automatiquement k, réduisant ainsi la subjectivité liée au choix initial [72].

#### 3.3 Méthodes ensembles

Les méthodes ensembles sont des techniques avancées en apprentissage automatique qui visent à améliorer les performances prédictives en combinant plusieurs modèles de base appelés learners. L’idée générale repose sur le principe que l’agrégation de plusieurs modèles faiblement performants peut conduire à un modèle global plus robuste, plus précis et moins sensible aux erreurs individuelles [63].

Parmi les stratégies les plus utilisées, on distingue le bagging et le boosting, qui diffèrent principalement dans la manière dont les modèles sont entraînés et combinés.

- **Bagging (Bootstrap Aggregating)**
Le bagging consiste à entraîner plusieurs modèles en parallèle sur des sous-ensembles différents des données d’entraînement, obtenus par échantillonnage aléatoire avec remise (bootstrap). Cette diversité permet de réduire la variance et d’améliorer la stabilité des prédictions.
L’algorithme Random Forest est un exemple classique de bagging : il combine une multitude d’arbres de décision, chacun construit sur un échantillon différent, et introduit également de l’aléa dans la sélection des variables. Ce mécanisme permet d'obtenir un modèle robuste aux variations des données et performant même en présence de bruit [59].
**Figure 7 : Schéma du processus de Bagging. [73]**

- **Boosting**
Contrairement au bagging, le boosting fonctionne de manière séquentielle : chaque modèle apprend des erreurs des modèles précédents, en mettant davantage l’accent sur les exemples mal prédits. Cela permet de construire progressivement un modèle puissant à partir de learners faibles.
**Figure 8 : Schéma du processus de Boosting [74]**

Voici les principales variantes modernes du boosting :
    - **XGBoost (Extreme Gradient Boosting)** : connu pour sa rapidité et son efficacité, il intègre des techniques de régularisation (L1 et L2), la gestion automatique des valeurs manquantes et l’élagage intelligent (pruning). Il est largement utilisé dans les compétitions de data science pour sa robustesse et ses performances [75].
    - **LightGBM** : développé par Microsoft, cet algorithme est optimisé pour les grands volumes de données. Il utilise une croissance leaf-wise (au lieu de level-wise) et une structure d’histogrammes pour accélérer l’apprentissage tout en réduisant l’utilisation mémoire [76].
    - **Histogram-based Gradient Boosting** : variante utilisée dans des bibliothèques comme scikit-learn, cette méthode repose sur la discrétisation des variables numériques en histogrammes. Cela permet d’accélérer significativement l’apprentissage tout en conservant une bonne précision [77].
    - **XGBRF (eXtreme Gradient Boosted Random Forest)** : il s'agit d'une variante hybride de XGBoost qui combine les principes du Random Forest avec ceux du Gradient Boosting. À chaque itération, une forêt d’arbres aléatoires est construite avec échantillonnage bootstrap et sous-sélection de variables. Cette approche permet de bénéficier à la fois d’une faible variance (comme les forêts aléatoires) et d’une capacité d’optimisation de l’erreur (comme le boosting), offrant un compromis très efficace pour les données complexes ou bruitées [78].

### 4. Apprentissage profond (deep learning)

L’apprentissage profond est une sous-catégorie de l’apprentissage automatique qui s’appuie sur des réseaux de neurones artificiels composés de plusieurs couches hiérarchiques, appelées couches profondes, pour apprendre des représentations de plus en plus abstraites des données [53]. Cette approche est particulièrement performante pour traiter des données complexes et non structurées, telles que des images, du texte ou des signaux temporels.

Contrairement aux modèles classiques de machine learning, qui nécessitent souvent une étape de sélection ou d’extraction manuelle de caractéristiques, les modèles de deep learning sont capables de découvrir automatiquement les caractéristiques pertinentes à partir des données brutes. Cette capacité d’apprentissage de haut niveau repose sur la composition de plusieurs couches non linéaires, permettant au modèle de capturer des relations complexes.

Les architectures profondes se déclinent en plusieurs variantes spécialisées selon le type de données :

#### 4.1. Les réseaux de neurones convolutifs (CNN)

Ils sont particulièrement adaptés au traitement des images et des signaux spatiaux. Ils utilisent des filtres convolutifs pour détecter automatiquement des motifs visuels (bords, textures, formes, etc.) à différents niveaux de granularité. Les CNN sont à la base de nombreuses avancées en vision par ordinateur, comme la reconnaissance d'objets, la segmentation d'images ou l'analyse biomédicale [79].

#### 4.2. Les réseaux de neurones récurrents (RNN)

Notamment les variantes LSTM (Long Short-Term Memory), sont conçus pour modéliser les données séquentielles comme les séries temporelles, les textes ou les signaux biologiques. Grâce à leur mémoire interne, ils capturent les dépendances à long terme entre les éléments d'une séquence, ce qui les rend particulièrement efficaces pour des tâches telles que la prédiction temporelle, la traduction automatique ou l'analyse de sentiments [80,81].

**Figure 9 : Architecture LSTM [82]**

#### 4.3. Réseaux de Convolution Temporelle (TCN)

Les réseaux de convolution temporelle (Temporal Convolutional Networks, TCN) constituent une architecture de réseaux neuronaux spécifiquement conçue pour le traitement des données séquentielles, telles que les séries temporelles. Contrairement aux réseaux récurrents classiques (RNN, LSTM), qui traitent les séquences de manière itérative et séquentielle, les TCN exploitent des convolutions causales dilatées, assurant que la sortie à un instant donné dépend uniquement des entrées présentes ou passées, respectant ainsi la causalité temporelle sans fuite d'informations futures [83].

Cette architecture basée sur les convolutions causales permet aux TCN de modéliser efficacement les dépendances à long terme présentes dans les séquences, ce qui est crucial pour des phénomènes complexes à dynamique étendue dans le temps, comme la prolifération des cyanobactéries. De plus, l'usage de convolutions dilatées élargit le champ réceptif du réseau sans augmenter excessivement la profondeur, permettant ainsi de capturer des informations sur des horizons temporels larges tout en limitant la complexité du modèle [84].

Par ailleurs, contrairement aux réseaux récurrents, les TCN bénéficient d'un entraînement plus rapide grâce à la possibilité de paralléliser les calculs sur l'ensemble de la séquence, réduisant ainsi les temps de convergence. De plus, l'architecture convolutionnelle des TCN atténue les problèmes classiques de disparition et d’explosion du gradient, fréquemment rencontrés dans les modèles RNN, ce qui contribue à une meilleure stabilité de l’apprentissage [85].

Ces particularités rendent les TCN particulièrement adaptés à l’analyse et à la prédiction de séries temporelles dans des domaines variés, allant des applications industrielles à la surveillance environnementale, notamment pour la prévision des blooms cyanobactériens (CyanoHABs), où il est essentiel de modéliser avec précision l’évolution temporelle des facteurs environnementaux complexes influençant leur développement [86].

#### 4.4. Les Transformers

Ils représentent une avancée majeure dans le domaine de l’apprentissage profond. Proposés par Vaswani et al. (2017) [87], ils s’appuient exclusivement sur des mécanismes d’attention, sans faire appel à la récurrence. Cette approche permet au modèle de pondérer l’importance relative de chaque élément d’une séquence, facilitant ainsi la capture des dépendances à long terme.

Initialement conçus pour le traitement du langage naturel, les Transformers ont depuis été adaptés à d’autres domaines tels que la vision artificielle (Vision Transformers) et la prédiction de séries temporelles complexes. Leur capacité à gérer efficacement de grandes quantités de données et à apprendre des représentations profondes en fait une architecture particulièrement performante pour les tâches prédictives à forte dimensionnalité, comme la modélisation du comportement environnemental.

**Figure 10 : Architecture du transformer [87]**

### 5. Combinaison et hybridation de modèles

L’amélioration des performances prédictives en apprentissage automatique ne dépend pas uniquement du choix d’un modèle unique, mais souvent de la capacité à combiner intelligemment plusieurs modèles. Cette stratégie, connue sous le nom de combinaison ou hybridation de modèles, permet de réduire les erreurs de généralisation, d’augmenter la robustesse et d'exploiter les forces complémentaires de différents algorithmes [88].

Ces approches reposent sur le principe que des modèles hétérogènes peuvent capturer des aspects différents des données, et qu’en les combinant, on peut obtenir des performances supérieures à celles de tout modèle individuel. Cela est particulièrement vrai dans des contextes complexes, bruyants ou déséquilibrés [63,59].

Parmi les stratégies les plus répandues figurent le voting, le blending, et le stacking, qui représentent des techniques de méta-apprentissage efficaces dans divers contextes, allant des compétitions de data science à l’analyse biomédicale ou environnementale [75,89].

- **Voting (majoritaire ou pondéré)**
Le voting est une technique simple et intuitive qui consiste à combiner les prédictions de plusieurs modèles en prenant la décision majoritaire (voting dur) ou en calculant une moyenne pondérée des probabilités (voting mou). Cette méthode est particulièrement utile lorsque les modèles ont des performances comparables mais font des erreurs sur différents échantillons de données. Elle est fréquemment utilisée avec des classificateurs indépendants pour réduire la variance globale [59,89].

- **Blending**
Le blending est une variante plus souple du stacking. Il consiste à entraîner un ou plusieurs modèles de niveau supérieur (appelés meta-learners) sur un ensemble de validation distinct, au lieu d’utiliser une validation croisée. L’avantage principal du blending est sa simplicité, mais il peut être plus sensible au surapprentissage, surtout si le jeu de validation est petit ou peu représentatif [63].
**Figure 11: Schéma du processus de Blending [91]**

- **Stacking (Stacked Generalization)**
Le stacking est une méthode plus avancée où les prédictions de plusieurs modèles de base (niveau 0) servent d’entrées à un modèle méta (niveau 1), entraîné à prédire la sortie finale. Contrairement au voting, le stacking apprend à corriger les erreurs des modèles de base de manière supervisée, ce qui le rend souvent plus performant, en particulier lorsque les modèles sont très différents [88,90]. Le stacking est couramment utilisé dans les compétitions de machine learning, notamment sur Kaggle, où il permet d’atteindre des résultats de pointe en combinant les forces de divers algorithmes comme XGBoost ou LightGBM [75,76].
**Figure 12 : Schéma du processus de Stacking [92]**

### 6. Techniques d'Optimisation Avancées pour l'Apprentissage Automatique

L'optimisation est un élément central dans le processus d'apprentissage automatique, permettant d'améliorer la performance des modèles en ajustant les hyperparamètres, les variables ou les architectures. Ce sous-chapitre présente plusieurs approches avancées d'optimisation, en mettant l'accent sur les algorithmes métaheuristiques et automatisés qui facilitent l'exploration de l'espace de recherche et garantissent une convergence efficace vers les solutions optimales.

#### 6.1. Optimisation par Essaim de Particules (PSO)

L'optimisation par essaim de particules (Particle Swarm Optimization, PSO) est une méthode métaheuristique inspirée du comportement collectif des oiseaux en vol ou des bancs de poissons. Proposée initialement par Kennedy et Eberhart en 1995, cette technique repose sur une population de particules (solutions potentielles) qui se déplacent dans l’espace de recherche à la fois selon leur propre expérience et celle de leurs voisines, dans le but de trouver une solution optimale [93].

Chaque particule ajuste sa position en fonction de sa meilleure solution personnelle (pBest) et de la meilleure solution trouvée par l’ensemble du groupe (gBest). Cette dynamique permet une exploration efficace de l’espace de recherche, tout en favorisant une convergence rapide vers des optima globaux [94].

En apprentissage automatique, PSO est largement utilisé pour l’optimisation des hyperparamètres, la sélection de variables ou même pour l’entraînement de réseaux de neurones. Son principal avantage réside dans sa simplicité de mise en œuvre, sa capacité à éviter les minima locaux et sa flexibilité à s’adapter à différents types de problèmes [95].

Des variantes modernes de PSO intègrent des mécanismes hybrides (PSO + algorithmes évolutionnaires, PSO + gradient), ainsi que des versions adaptées aux grandes dimensions et aux environnements dynamiques [96].

#### 6.2. Optimisation par Algorithmes Evolutionnaires

La recherche de grille est une méthode systématique d'optimisation qui consiste à tester toutes les combinaisons possibles d'hyperparamètres dans un espace défini. Bien qu'elle soit simple et exhaustive, elle est souvent coûteuse en temps, surtout lorsqu'il y a un grand nombre d'hyperparamètres à tester. Cette méthode est couramment utilisée pour des modèles simples mais peut s'avérer inefficace pour des problèmes complexes à grande échelle.

#### 6.3. Optimisation par Recherche Aléatoire (Random Search)

La recherche aléatoire est une alternative à la recherche de grille qui consiste à échantillonner aléatoirement les hyperparamètres dans un espace donné. Cette approche est moins coûteuse en termes de calcul que la recherche de grille et a montré qu'elle peut être plus efficace, en particulier lorsque les hyperparamètres ont un impact inégal sur la performance du modèle.

### 7. Travaux similaires

#### 1. Les articles similaires

Plusieurs travaux antérieurs ont été consacrés à la surveillance, à la prédiction et à la gestion des efflorescences de cyanobactéries (CyanoHAB), en exploitant diverses approches allant des modèles traditionnels aux techniques avancées d’intelligence artificielle. Le tableau 3 synthétise les contributions majeures identifiées :

**Tableau 3: Articles similaires sur la modélisation et la prédiction des cyanobactéries**

| Titres | Auteurs | Dates |
| :--- | :--- | :--- |
| Utilisation de l'intelligence artificielle pour la modélisation de l'habitat des CyanoHAB : découverte et visualisation des associations Microcystis-environnement dans l'ouest du lac Érié. | David F. Millie, Gary R. Weckman, Gary L. Fahnenstiel, Hunter J. Carrick, Ehsan Ardjmand, William A. Young, Michael J. Sayers et Robert A. Shuchman. | 2014 |
| Système de surveillance automatique pour la mesure à haute fréquence et la gestion en temps réel des efflorescences de cyanobactéries dans les plans d'eau urbains. | Viet Tran Khac, Yi Hong, Denis Plec, Bruno J. Lemaire, Philippe Dubois, Mohamed Saad et Brigitte Vinçon-Leite | 2018 |
| Prédiction de la croissance de la colonisation des algues sur les surfaces de mortier à l'aide d'un réseau de neurones artificiels. | TH Tran, ND Hoang | 2016 |
| Étude des efflorescences toxiques de cyanobactéries dans le barrage de Mexa, Algérie. | Amel Saoudi, Barour Choukri, Brient Luc, Rachid, Mourad Bensouilah | 2011 |
| Prédiction et surveillance des cyanobactéries potentiellement toxiques dans le barrage de Mexa basées sur des approches d'apprentissage. | Derradji Aymen, Dendani Nadjette, Saoudi Amel | 2021 |
| La sélection de paramètres et regression pour la prédiction des cyanobactéries potentiellement toxiques dans les eaux de barrages. | Yahia-bey Nihal, Dendani Nadjette, Saoudi Amel | 2023 |
| Artificial Intelligence algorithms for Prediction and Monitoring of Potentially Toxic Cyanobacteria in Water Dams | Talai Meriem, Dendani Nadjette, Saoudi Amel | 2023 |
| Boosting Methods for Predicting Cyanobacteria's Potential Toxicity in Water Dams | Berrezzek amira, Dendani nadjette, Ammara nour djihen, Azizi nabiha, Saoudi amel | 2024 |

#### 2. Les sites et les applications similaires

Plusieurs plateformes en ligne ont été développées afin de suivre et anticiper les blooms de cyanobactéries, chacune adoptant des approches variées. Le tableau 4 en compare trois :

**Tableau 4 : Sites et applications similaires**

| | CyANWeb | BloomWatch | CyanoAlert |
| :--- | :--- | :--- | :--- |
| **Services offerts** | - Surveillance des blooms par imagerie satellite<br/>- Accès aux données environnementales | - Signalement participatif des blooms<br/>- Soumission de photos et géolocalisation | - Détection prédictive des blooms à l'aide d'IA<br/>- Prévention proactive |
| **Expérience utilisateur** | Interface orientée scientifique, structurée et technique | Interface simple, adaptée au grand public | Interface intuitive, accessible et adaptée au contexte local |
| **Options de collecte de données** | Données satellites (États-Unis uniquement) | Contributions des citoyens (photos, position GPS) | Données locales + apprentissage automatique |
| **Visualisation des résultats** | Cartes interactives avec indices de risque | Carte simplifiée de signalements par utilisateur | Tableau de bord intelligent avec alertes personnalisées |
| **Couverture géographique (Algérie)** | X | X | ✓ |
| **Surveillance automatisée** | ✓ | X | ✓ |
| **Signalement manuel par l'utilisateur** | X | ✓ | ✓ |
| **Analyse prédictive par IA** | X | X | ✓ |

### 8. Conclusion

Ce chapitre a présenté un panorama structuré des méthodes les plus pertinentes en analyse de données appliquées au domaine étudié. Nous avons d'abord introduit les fondements de l'apprentissage automatique, en mettant en évidence les algorithmes supervisés et les approches ensemblistes telles que le bagging, le boosting et leurs variantes modernes (XGBoost, LightGBM, XGBRF), reconnues pour leur robustesse et leur efficacité face à des jeux de données complexes.

L’apprentissage profond a ensuite été abordé à travers des architectures avancées comme les réseaux convolutifs (CNN), les réseaux récurrents (LSTM), les réseaux de convolution temporelle (TCN) et les Transformers, capables de capturer des représentations riches et adaptées à divers types de données temporelles et séquentielles.

Par ailleurs, l’apprentissage non supervisé a été illustré par l’algorithme K-means, un outil efficace pour détecter des structures sous-jacentes dans les données et réaliser du clustering.

Nous avons également souligné l’importance des techniques d’augmentation de données, qui permettent d’enrichir les jeux de données et d’améliorer la robustesse des modèles face à la variabilité des entrées.

Enfin, le rôle croissant des techniques d’optimisation, notamment l’optimisation par essaim de particules (PSO) et d’autres méthodes évolutionnaires, a été mis en avant, indispensables pour ajuster les paramètres des modèles et améliorer leurs performances.

Ainsi, l’ensemble des approches exposées dans ce chapitre constitue une base méthodologique solide, essentielle pour développer des solutions intelligentes, précises et adaptables à une grande variété de contextes applicatifs.

---

## Chapitre 3 : Conception et système proposé

### 1. Introduction

L’analyse prédictive appliquée aux systèmes écologiques représente aujourd’hui un levier fondamental pour la gestion proactive des risques environnementaux. Parmi les phénomènes les plus critiques figure la prolifération des cyanobactéries, ou blooms, qui peuvent compromettre la qualité des ressources en eau, affecter la biodiversité et présenter des risques sanitaires sérieux. La complexité de ces phénomènes résulte de l’interaction non linéaire de multiples variables abiotiques et biotiques, rendant difficile leur anticipation par des méthodes conventionnelles.

Dans ce contexte, l’apprentissage automatique (ML) et l’apprentissage profond (DL) se sont imposés comme des outils de référence pour la modélisation de phénomènes environnementaux complexes [97,98]. Ces approches permettent d’identifier des schémas implicites dans les séries temporelles multivariées, et de réaliser des prédictions robustes, tant sur des variables continues (ex. : densité de cyanobactéries) que sur des cibles binaires (ex. : blooming time).

Parmi les techniques utilisées, les modèles supervisés classiques (Random Forest, SVM, XGBoost, etc.) constituent une base solide pour la prédiction sur données étiquetées. Les méthodes ensemblistes telles que le boosting et le bagging permettent d’enrichir la robustesse et la généralisation des prédicteurs [99]. En parallèle, l’émergence de modèles profonds, tels que les LSTM (Long Short-Term Memory), Transformers, TCN (Temporal Convolutional Networks) ou CNN (Convolutional Neural Networks), a permis des avancées significatives dans le traitement de séquences temporelles environnementales [54].

Deux axes de prédiction ont été explorés dans ce travail :
- La prédiction de la densité des cyanobactéries, formulée comme une tâche de régression.
- La prédiction du blooming time, formulée comme une tâche de classification binaire.

Afin de répondre aux limites structurelles des jeux de données, différentes stratégies d’amélioration des performances ont été mises en œuvre :
- L’augmentation des données via des réseaux génératifs adversariaux conditionnels (cGAN), appliquée exclusivement au jeu de données du barrage de Mexa, dans le but d’accroître la diversité des séquences temporelles d’entraînement [100].
- La gestion du déséquilibre de classes par l’algorithme SMOTE (Synthetic Minority Over-sampling Technique), particulièrement utile pour améliorer la sensibilité du modèle aux cas de bloom [101].
- L’optimisation automatique des hyperparamètres à l’aide d’algorithmes métahéoristiques comme le Particle Swarm Optimization (PSO), qui permet de rechercher efficacement les configurations optimales du modèle [102].

L’ensemble de ces approches s’inscrit dans une démarche rigoureuse de développement d’un système prédictif hybride, combinant différentes architectures et techniques de prétraitement, en vue d’anticiper avec précision les blooms dans des contextes environnementaux variés.

### 2. Architecture du système

L’architecture du système prédictif que nous proposons repose sur une approche modulaire combinant des techniques d’apprentissage automatique et profond, appliquées à deux volets distincts mais complémentaires : la prédiction du moment de survenue des blooms cyanobactériens (blooming time) et l’estimation de leur densité. La Figure 13 illustre le flux de traitement, depuis la collecte et le prétraitement des données jusqu’à l’évaluation des modèles déployés.

**Figure 13 : Architecture du système prédictif proposé.**

### 3. Sites d'étude

Dans le cadre de ce travail, deux sites d'étude aux contextes géographiques et environnementaux distincts ont été sélectionnés afin d'analyser les dynamiques de prolifération des cyanobactéries : le barrage de Mexa en Algérie et plusieurs plans d’eau en Corée du Sud.

#### 3.1. Barrage de Mexa (Algérie)

Le barrage de Mexa, situé dans la commune de Bougous (wilaya d'El Tarf, 36°45'14.31"N, 8°23'33.68"E), constitue une infrastructure hydraulique stratégique dans le nord-est algérien. Avec une capacité totale de 75 millions de m3 – dont 30,24 millions de m3 sont régularisables – et une emprise de 280 hectares, ce réservoir est alimenté principalement par trois oueds : Oued El-Kebir, Oued Bougous et Oued Ballouta. Le bassin versant de Mexanna, d'une superficie de 651 km2, est en grande partie forestier, contribuant de manière significative à l’alimentation en eau du barrage [103].

Ce plan d’eau joue un rôle vital dans l’approvisionnement en eau potable des populations locales ainsi que dans l’irrigation agricole des zones environnantes, notamment les wilayas d’El Tarf et d’Annaba.

Une campagne de surveillance environnementale a été conduite sur ce site pendant 24 mois consécutifs (2010-2011). Un protocole rigoureux d’échantillonnage mensuel a été mis en place, avec des prélèvements effectués sur 10 stations stratégiquement réparties selon les caractéristiques hydrologiques du site [103]:
- Stations 1 à 4 et 8 : situées à proximité des confluences des affluents, afin de suivre les apports en nutriments et en matières en suspension.
- Stations 5 à 7 : positionnées au centre du réservoir, dans les zones exposées aux courants principaux, pour représenter les conditions générales du plan d’eau.
- Station 9 : localisée près du déversoir, permettant d’évaluer les caractéristiques de l’eau évacuée.
- Station 10 : implantée dans la zone profonde de la retenue, où les phénomènes de stratification thermique et d’hypoxie peuvent être observés.

**Figure 14 : Illustration du site d’étude du barrage de Mexa avec différentes vues.**

Cette étude a permis de constituer une base de données environnementales riche et diversifiée, comprenant 17 paramètres répartis en cinq catégories : indicateurs biotiques (notamment la densité de cyanobactéries), paramètres physico-chimiques, concentrations en nutriments, caractéristiques physiques et données météorologiques.

**Tableau 5 : Description des paramètres mesurés au barrage de Mexa**

| Category | Feature Name | Data Type | Range/Values |
| :--- | :--- | :--- | :--- |
| Biotic | Cyanobacteria density (Cell/ml) | Numerical | 0 - 1.12×10^7 |
| | Chlorophyll-a (μg/l) | Numerical | 0 - 180 |
| | Microcystins (μg/l) | Numerical | 0 - 168.41 |
| Physico-chemical | Water temperature (°C) | Numerical | 1.3 - 31.1 |
| | pH | Numerical | 6.26 - 9.98 |
| | Dissolved oxygen (mg/l) | Numerical | 2.41 - 15.04 |
| | Conductivity (μs/cm) | Numerical | 389 - 648 |
| | Salinity (g/l) | Numerical | 0.1 - 0.38 |
| | Turbidity (NTU) | Numerical | 0.24 - 113.3 |
| Nutritional | Nitrates (mg/l) | Numerical | 0.1 - 34.62 |
| | Nitrites (mg/l) | Numerical | 0 - 1.6 |
| | Ammoniums (mg/l) | Numerical | 0.001 - 2.2 |
| | Phosphorus (mg/l) | Numerical | 0.001 - 1.2 |
| Physical | Depth (m) | Numerical | 0 - 18 |
| | Station's location | Categorical | Exposed, Sheltered, No role for wind |
| Meteorological | Air temperature (°C) | Numerical | 10 - 33.0 |

#### 3.2. Plans d'eau en Corée du Sud

La Corée du Sud dispose d'un programme national de surveillance écologique des plans d'eau intérieurs, coordonné par le National Institute of Environmental Research (NIER). Ce programme, actif depuis 2005, vise à observer et prévenir les phénomènes de prolifération de cyanobactéries, notamment dans les barrages, les lacs et réservoirs stratégiques pour l'eau potable, l'irrigation ou les loisirs aquatiques. Les données sont accessibles via la plateforme publique : https://water.nier.go.kr/web/algaePreMeasure?pMENU_NO=111

Dans le cadre de ce programme, des campagnes de prélèvement ont été conduites sur un vaste réseau de stations d'échantillonnage réparties sur l'ensemble du territoire sud-coréen. Les prélèvements sont effectués à une fréquence régulière, en tenant compte des variations saisonnières et des spécificités hydrologiques de chaque site. Chaque site est géolocalisé et associé à un nom, un code de localisation et une date précise de mesure.

La période couverte par les données s'étend de janvier 2005 à février 2025, soit 20 années consécutives de surveillance environnementale. La base brute contient un total de 36 605 enregistrements, qui ont été soumis à un processus rigoureux de nettoyage : suppression des doublons, gestion des valeurs manquantes, homogénéisation des formats de date et de mesure. À l’issue de cette étape, 29 604 observations valides ont été retenues pour l’analyse.

Chaque observation est décrite par 24 variables environnementales, regroupées en quatre grandes catégories :
- des paramètres biotiques, incluant la concentration en chlorophylle-a (Chl-a), la densité totale de cyanobactéries, ainsi que les dénombrements spécifiques de genres comme Microcystis, Anabaena, Oscillatoria et Aphanizomenon ;
- des paramètres abiotiques, tels que la température de l’eau, le pH, l’oxygène dissous, la transparence et la turbidité ;
- des paramètres nutritionnels, incluant les concentrations en nitrates, nitrites, ammoniums et phosphore ;
- des métadonnées spatio-temporelles, notamment la date de prélèvement, le nom du site et sa localisation géographique.

**Tableau 6 : Description des variables collectées en Corée du Sud (2005–2025)**

| Category | Feature Name | Data Type | Ranges/Values |
| :--- | :--- | :--- | :--- |
| Biotic | Chl-a (μg/l) | Numerical | 0.00 - 96.70 |
| | Cyanobacteria's density (Cell/ml) | Numerical | 0.00 - 206126.00 |
| | Microcystis (Cell/ml) | Numerical | 0.00 - 205340.00 |
| | Anabaena (Cell/ml) | Numerical | 0.00 - 70075.00 |
| | Oscillatoria (Cell/ml) | Numerical | 0.00 - 16260.00 |
| | Aphanizomenon (Cell/ml) | Numerical | 0.00 - 58259.00 |
| Abiotic | Water temperature (°C) | Numerical | 0.40 - 33.00 |
| | pH | Numerical | 5.20 - 12.80 |
| | Dissolved oxygen (mg/l) | Numerical | 1.20 - 21.10 |
| | Transparency (m) | Numerical | 0.00 - 13.50 |
| | Turbidity (NTU) | Numerical | 0.00 - 13.50 |
| Nutritional | Nitrates (mg/l) | Numerical | 0.24 - 25.0 |
| | Nitrites (mg/l) | Numerical | 0.001 - 0.45 |
| | Ammoniums (mg/l) | Numerical | 0.01 - 1.80 |
| | Phosphorus (mg/l) | Numerical | 0.003 - 0.95 |
| Cyanotoxin | Microcystin-LR (μg/L) | Numerical | 0.000 - 10.000 |
| | Microcystin-RR (μg/L) | Numerical | 0.000 - 10.000 |
| | Microcystin-YR (μg/L) | Numerical | 0.000 - 5.000 |
| | Microcystin-LF (μg/L) | Numerical | 0.000 - 2.000 |
| | Microcystin-LY (μg/L) | Numerical | 0.000 - 2.000 |
| | Microcystin-LA (μg/L) | Numerical | 0.000 - 5.000 |
| Metadata | Date | Temporal | 2005-01-01, ....., 2025-02-20... |
| | Site | Categorical | ... |
| | Location | Categorical | Nakdonggang, Hangang... |

### 4. Prétraitement des données

Avant d'entraîner un modèle ou d'extraire des conclusions fiables à partir des données, il est crucial de passer par une étape rigoureuse de prétraitement. Cette phase permet de nettoyer les données, de corriger les biais potentiels, et d'optimiser la qualité des variables utilisées dans les modèles. Dans ce travail, deux jeux de données ont été exploités, avec des niveaux de traitement différents.

#### 4.1. Suppression des lignes avec trop de valeurs manquantes
#### 4.2. Imputation par K plus proches voisins (KNN)
#### 4.3. Conversion temporelle
#### 4.4. Ingénierie des caractéristiques
#### 4.5. Réseaux Antagonistes Génératifs Conditionnels (cGAN)

Un cGAN a été spécifiquement entraîné pour le jeu de données du barrage de Mexa afin de générer des données synthétiques réalistes. L'architecture et l'entraînement sont détaillés dans le document original (pages 47-48). 10 000 échantillons synthétiques ont été générés.

**Figure 15 : Schéma de l'architecture du cGAN – Générateur (à gauche) et Discriminateur (à droite).**

#### 4.6. Mise à l’échelle des données
#### 4.7. Stratégie de validation croisée
#### 4.8. Résumé des prétraitements effectués sur les jeux de données

**Tableau 7: Récapitulatif des traitements appliqués aux datasets A (Rivières sud-coréennes) et B (Mexa)**

| Technique de prétraitement | Dataset A (Rivières sud-coréennes) | Dataset B (Mexa) |
| :--- | :--- | :--- |
| Suppression lignes très incomplètes | ✓ (lignes avec >10 valeurs manquantes supprimées) | ✗ |
| Imputation par KNN | ✓ (imputation avec normalisation + validation croisée pour k) | ✗ |
| Conversion temporelle (date → jour, mois, saison, etc.) | ✓ (extraction de features temporelles) | ✓ |
| Ingénierie des caractéristiques | ✓ (création/suppression de variables + one-hot encoding) | ✓ |
| Standardisation des données | ✓ (moyenne = 0, écart-type = 1) | ✓ |
| Normalisation | ✗ | ✓ |
| Validation croisée (5-fold) | ✓ (pour choisir k et évaluer les modèles) | ✓ |
| CGAN | ✗ | ✓ |

### 5. Modèles appliqués

Afin de développer un système prédictif fiable pour la densité et le moment de floraison des cyanobactéries, différentes méthodes d’apprentissage supervisé issues du Machine Learning et du Deep Learning ont été mises en œuvre et comparées, en s’appuyant sur deux jeux de données environnementales distincts.

#### 5.1. Prédiction de la densité

##### 5.1.1 Apprentissage automatique

Les modèles de base (Random Forest) et ensembles (XGBoost, LightGBM, HistGradientBoostingRegressor) ont été testés avec des configurations initiales (voir tableaux 8 à 11).

##### 5.1.2 Apprentissage automatique Avancé

Trois stratégies d’optimisation (Random Search, PSO, Optuna) ont été appliquées aux quatre modèles. Les meilleures configurations sont présentées dans les tableaux 12 à 23.

Des modèles combinés via Stacking ont également été développés et optimisés (voir tableaux 24 à 31).

##### 5.1.3 Apprentissage profond

Les architectures CNN, LSTM et Transformer ont été implémentées avec des configurations initiales (voir tableaux 32 à 34).

##### 5.1.4 Apprentissage profond avancé

L'optimisation des modèles profonds (CNN, LSTM, Transformer) a été réalisée avec Random Search, PSO et Optuna (tableaux 35 à 43). Des modèles hybrides (Transformer+CNN, Transformer+LSTM) ont également été conçus et optimisés (tableaux 44 à 50).

#### 5.2. Prédiction du "Blooming Time"

##### 5.2.1 Détermination des seuils de blooming

Des seuils de bloom ont été déterminés par clustering K-means et validés par l'experte Mme Saoudi Amel.

**Tableau 51: Barrage de Mexa : seuils de blooming**
| Critère | Seuil estimé par K-means | Seuil OMS / Littérature |
| :--- | :--- | :--- |
| Nombre de cellules | ≈ 19 877 cellules/mL | 20 000 cellules/mL (bloom modéré) |
| Microcystine (μg/L) | 1 μg/L | 1 μg/L (limite sécurité eau potable) |

**Tableau 52: Seuils de blooming estimés par K-means vs seuils OMS pour les plans d’eau en Corée du Sud**
| Critère | estimé par K-means | Seuil OMS / Littérature |
| :--- | :--- | :--- |
| Nombre de cellules | ≈ 60 709 cellules/mL | 20 000 – 100 000 cellules/mL (modéré à élevé) |
| Microcystine (μg/L) | ≈ 1 μg/L | 1 μg/L (limite sécurité eau potable) |

##### 5.2.2 Rééquilibrage des classes avec SMOTE

SMOTE a été appliqué pour gérer le déséquilibre entre les classes bloom et non-bloom.

##### 5.2.3 Modèles de Deep Learning appliqués

Les architectures LSTM, Transformer et TCN ont été configurées pour la classification binaire (tableaux 53 à 55).

##### 5.2.4 Modèles hybrides

Des modèles hybrides (Transformer+CNN, Transformer+LSTM, TCN+CNN, TCN+LSTM) ont été conçus pour améliorer la prédiction (tableaux 56 à 59).

### 7. Les mesures de performance

- **Pour la régression :** RMSE, MAE, MAPE, R2.
- **Pour la classification binaire :** Accuracy, Precision, Recall, F1-score.

### 8. Conclusion

Ce chapitre a présenté les fondements méthodologiques, des données aux modèles, en passant par le prétraitement et l'optimisation. Deux axes de prédiction (densité et blooming time) ont été définis, avec des métriques d'évaluation appropriées.

---

## Chapitre 4 : Implémentation et interprétation des résultats

### 1. Introduction

Ce chapitre présente une étude comparative des approches d’apprentissage automatique et d’apprentissage profond pour la prédiction de la densité des cyanobactéries ainsi que du temps de floraison (blooming time) à partir de données environnementales collectées au barrage de Mexa (Algérie) et en Corée du Sud.

### 2. Technologies, outils et frameworks utilisés

- **Langages :** Python, HTML/CSS, JavaScript (Node.js, Express)
- **Environnements :** Jupyter Notebook, Google Colab, VS Code, XAMPP
- **Bibliothèques :** Pandas, NumPy, Scikit-learn, XGBoost, LightGBM, TensorFlow, Keras, Keras-TCN, imbalanced-learn (SMOTE), Optuna, Matplotlib, Seaborn.

### 3. Sécurité & RGPD

Des mesures comme le stockage sécurisé des secrets (.env), CORS, validation des entrées, rate limiting, authentification JWT et logging sont implémentées. Le chiffrement HTTPS est prévu.

**Tableau 60: Mesures de sécurité intégrées ou prévues dans le système**

### 4. Résultats expérimentaux

#### 4.1. Prédiction de la densité des cyanobactéries

##### a. Mexa (Apprentissage automatique)

- **Random Forest :** Meilleur résultat avec PSO (MAE=24.3, RMSE=42.5, R²=0.9721). (Tableau 61, Figure 16)
- **XGBoost :** Meilleur résultat avec Optuna (MAE=20.5, RMSE=37.2, R²=0.9800). (Tableau 62, Figure 17)
- **LightGBM :** Meilleur résultat avec Optuna (MAE=24.8, RMSE=43.6, R²=0.9687). (Tableau 63, Figure 18)
- **Hist. Gradient Boosting :** Meilleur résultat avec Optuna (MAE=29.2, RMSE=48.3, R²=0.9583). (Tableau 64, Figure 19)

##### b. Corée du Sud (Apprentissage automatique)

- **Random Forest :** Meilleur résultat avec PSO (MAE=10.0, RMSE=23.9, R²=0.9973). (Tableau 65, Figure 20)
- **XGBoost :** Meilleur résultat avec Optuna (MAE=29.6, RMSE=39.8, R²=0.9924). (Tableau 66, Figure 21)
- **LightGBM :** Résultats similaires pour PSO et Optuna (R²=0.9860). (Tableau 67, Figure 22)
- **Hist. Gradient Boosting :** Meilleur résultat avec PSO (MAE=38.5, RMSE=58.7, R²=0.9448). (Tableau 68, Figure 23)

##### c. Mexa (Apprentissage automatique combiné - Stacking)

- **Stacking (RF+XGBoost) avec PSO :** MAE=17.8, RMSE=31.2, R²=0.9893.
- **Stacking (LightGBM+HistGB) avec PSO :** MAE=22.7, RMSE=39.5, R²=0.9836. (Tableau 69, Figure 24)

##### d. Corée du Sud (Apprentissage automatique combiné - Stacking)

- **Stacking (RF+XGBoost) avec PSO :** MAE=22.7, RMSE=43.2, R²=0.9662.
- **Stacking (LightGBM+HistGB) avec PSO :** MAE=15.5, RMSE=31.4, R²=0.9668. (Tableau 70, Figure 25)

##### e. Mexa (Apprentissage profond)

- **CNN :** Meilleur résultat avec Optuna (MAE=23.8, RMSE=31.5, R²=0.8965). (Tableau 71, Figure 26)
- **LSTM :** Meilleur résultat avec PSO (MAE=21.7, RMSE=35.8, R²=0.9350). (Tableau 72, Figure 27)
- **Transformer :** Meilleur résultat avec PSO (MAE=30.0, RMSE=40.0, R²=0.8990). (Tableau 73, Figure 28)

##### f. Corée du Sud (Apprentissage profond)

- **CNN :** Meilleur résultat avec PSO (MAE=65.5, RMSE=72.0, R²=0.8400). (Tableau 74, Figure 29)
- **LSTM :** Meilleur résultat avec PSO (MAE=43.0, RMSE=58.0, R²=0.9910). (Tableau 75, Figure 30)
- **Transformer :** Meilleur résultat avec PSO (MAE=56.6, RMSE=65.3, R²=0.9780). (Tableau 76, Figure 31)

##### g. Mexa (Apprentissage profond combiné)

- **LSTM + Transformer avec PSO :** MAE=16.0, RMSE=20.0, R²=0.9425. (Tableau 77, Figure 32)

##### h. Corée du Sud (Apprentissage profond combiné)

- **LSTM + Transformer avec PSO :** MAE=35.3, RMSE=45.6, R²=0.9900. (Tableau 78, Figure 33)

#### 4.2. Prédiction du "Blooming Time"

##### a. Mexa (Apprentissage profond)

- **TCN :** Accuracy=0.91, F1-score=0.91 (meilleur résultat).
- **LSTM :** Accuracy=0.71, F1-score=0.70.
- **Transformer :** Accuracy=0.65, F1-score=0.64. (Tableau 79, Figure 34)

##### b. Corée du Sud (Apprentissage profond)

- **LSTM :** Accuracy=0.96, F1-score=0.96 (meilleur résultat).
- **TCN :** Accuracy=0.94, F1-score=0.94.
- **Transformer :** Accuracy=0.91, F1-score=0.91. (Tableau 80, Figure 35)

##### c. Mexa (Apprentissage profond avancé/hybride)

- **Transformer + LSTM :** Accuracy=0.87, F1-score=0.87 (meilleur résultat).
- **Transformer + CNN :** Accuracy=0.86, F1-score=0.86.
- **TCN + LSTM :** Accuracy=0.85, F1-score=0.85. (Tableau 81, Figure 36)

##### d. Corée du Sud (Apprentissage profond avancé/hybride)

- **CNN + TCN :** Accuracy=0.94, F1-score=0.94 (meilleur résultat).
- **Transformer + LSTM :** Accuracy=0.92, F1-score=0.92. (Tableau 82, Figure 37)

### 5. Intégration d’un module d’analyse automatisé et de génération de rapports visuels via IA

Un module intégré à l'application CyanoAlert permet :
- La sélection interactive de données.
- La génération de visualisations dynamiques.
- L'analyse textuelle automatique via l'API Cohere Command R+.
- La génération de rapports PDF.

### 6. Conclusion

Les résultats montrent la supériorité des modèles d'apprentissage profond optimisés, en particulier les architectures hybrides, pour la prédiction de la densité et du temps de floraison. L'optimisation des hyperparamètres (PSO, Optuna) est cruciale. Les performances varient selon les sites, soulignant la nécessité d'adapter les modèles aux contextes locaux.

---

## Conclusion et perspectives

Le projet a abouti à un système prédictif web (CyanoAlert) capable de :
- Transformer des séries temporelles issues de prélèvements manuels en alertes précoces (>90% de F1-score).
- Fonctionner avec une connexion faible (architecture Node.js/Express légère).
- Générer automatiquement des visualisations et rapports via NLP.

**Perspectives d’évolution :**
- Intégration progressive de capteurs temps réel (LoRa/4G).
- Mise en place d'un apprentissage actif pour une amélioration continue.
- Ouverture de l'API et développement de partenariats.

**Appréciation personnelle :**
Le projet a été une expérience enrichissante, alliant technologie de pointe et réponse à un problème environnemental concret. Une demande de labellisation a été initiée.

---

## Business Model Canvas (Annexe)

Le document se termine par un Business Model Canvas détaillé, incluant :

- **Segment du marché :** ~293 structures nationales (barrages, agences, stations de traitement, laboratoires) et ~200 structures internationales.
- **Proposition de valeur :** Modernité, performance, flexibilité, accessibilité, réduction des coûts et des risques.
- **Flux de revenus :** Abonnements annuels (ex. 720 000 DA/structure), paiement à l'analyse, commissions marketplace, ventes de rapports, contrats de maintenance.
- **Structure des coûts :** Développement, hébergement, API IA, salaires (équipe de 10 personnes), marketing, location.
- **Analyse financière prévisionnelle :** Scénarios optimiste (CA N=106,56 MDZD, N+1=159,84 MDZD) et pessimiste (CA N=35,28 MDZD, N+1=71,28 MDZD). Bilan d'ouverture et compte de résultat prévisionnel présentés.

---
## Références bibliographiques

(La liste des 130 références est reprise du document original, couvrant des sujets allant de l'écologie des cyanobactéries aux techniques d'IA comme les GAN, LSTM, XGBoost, etc., en passant par des rapports d'organisations internationales (OMS, IPBES, MedECC).)