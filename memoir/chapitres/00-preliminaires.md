# Pages Préliminaires — Mémoire PFE
## SmartHeart — Application Web de Dietary Intelligence
**Master 2 SID — Université Badji Mokhtar Annaba — 2025–2026**

---

## RÉSUMÉ

L'Algérie fait face à une prévalence croissante des maladies chroniques liées à l'alimentation — diabète, maladies cardiovasculaires, intolérances alimentaires — dans un contexte où les outils numériques d'aide à la décision nutritionnelle restent quasi absents du marché local. SmartHeart est une application web de Dietary Intelligence conçue pour le marché algérien, développée dans le cadre d'un projet de fin d'études à l'Université Badji Mokhtar d'Annaba, avec une ancrage territorial concret dans la wilaya d'Annaba. Elle propose un catalogue de produits alimentaires enrichis de données nutritionnelles, un moteur de recommandation personnalisé, et un réseau de commerces partenaires locaux. Ses fonctionnalités clés couvrent la recherche et le filtrage de produits avec avertissements adaptés au profil médical de l'utilisateur, un moteur de scoring multi-axe gérant cinq profils — diabétique, cœliaque, cardiovasculaire, végétarien et sain — ainsi que des recettes filtrées, une bibliothèque nutritionnelle et une cartographie des commerces partenaires. Techniquement, SmartHeart est construit avec Next.js 16.2.4 et React 19 en mode App Router, TypeScript 5, Tailwind CSS 4 et Supabase comme backend-as-a-service intégrant base de données PostgreSQL, authentification et politiques de sécurité par ligne. L'application repose sur une base de données structurée en vingt tables relationnelles avec dix-huit politiques RLS et un algorithme de recommandation à sept axes pour les produits et six pour les recettes. Le résultat est une application web fonctionnelle, déployable, offrant une intelligence nutritionnelle adaptée aux contraintes et pathologies spécifiques de l'utilisateur algérien. Les perspectives portent sur l'intégration d'une cartographie dynamique, l'extension du catalogue et un module nutritionniste-patient.

**Mots-clés :** Intelligence alimentaire, Recommandation nutritionnelle, Nutri-Score, Santé numérique Algérie, Indice glycémique

---

## ABSTRACT

Algeria faces a growing prevalence of diet-related chronic diseases — diabetes, cardiovascular conditions, and food intolerances — in a context where digital nutritional decision-support tools remain virtually absent from the local market. SmartHeart is a Dietary Intelligence web application designed for the Algerian market, developed as a final-year engineering project at Badji Mokhtar University of Annaba, with concrete territorial grounding in the Annaba region. It provides a food product catalogue enriched with nutritional data, a personalized recommendation engine, and a network of local partner stores. Its key features include product search and filtering with medical-profile-aware warnings, a multi-axis scoring engine covering five health profiles — diabetic, celiac, cardiovascular, vegetarian, and healthy — along with filtered recipe suggestions, a nutritional learning library, and a partner store locator. Technically, SmartHeart is built on Next.js 16.2.4 with React 19 App Router architecture, TypeScript 5, Tailwind CSS 4, and Supabase as a backend-as-a-service integrating a PostgreSQL database, authentication, and row-level security. The application relies on a twenty-table relational database with eighteen RLS policies and a recommendation algorithm spanning seven axes for products and six for recipes. The outcome is a fully functional, deployable web application delivering nutritional intelligence tailored to the specific constraints and pathologies of Algerian users. Future directions include dynamic mapping integration, catalogue expansion, and a nutritionist-patient monitoring module.

**Keywords:** Dietary Intelligence, Nutritional Recommendation, Nutri-Score, Digital Health Algeria, Glycemic Index

---

## ملخص

تواجه الجزائر تصاعداً ملحوظاً في انتشار الأمراض المزمنة المرتبطة بالتغذية، كالسكري وأمراض القلب والأوعية الدموية وعدم تحمل الغلوتين، في ظل شبه غياب للأدوات الرقمية المتخصصة في الإرشاد الغذائي على المستوى المحلي. SmartHeart تطبيق ويب للذكاء الغذائي صُمِّم خصيصاً للسوق الجزائرية، وطُوِّر في إطار مشروع التخرج بجامعة باجي مختار عنابة، مع ارتكاز ميداني على ولاية عنابة. يقدم التطبيق فهرساً من المنتجات الغذائية المعززة بالبيانات التغذوية، ومحرك توصيات مخصصاً، وشبكة من المتاجر الشريكة المحلية. تشمل وظائفه الرئيسية البحث في المنتجات مع تنبيهات مكيَّفة وفق المشكلات الصحية للمستخدم، ومحرك تنقيط متعدد المحاور يغطي خمسة ملفات طبية: مرضى السكري، وحساسية الغلوتين، وأمراض القلب، والنباتيين، والنمط الصحي العام. يعتمد التطبيق تقنياً على إطار Next.js 16.2.4 وReact 19 وTypeScript 5 وTailwind CSS 4 وSupabase كمنصة خلفية متكاملة. يرتكز على قاعدة بيانات من عشرين جدولاً علائقياً، مع خوارزمية توصية شاملة لتقديم تجربة غذائية ذكية ومتوافقة مع احتياجات المستخدم الجزائري. وتتضمن آفاق التطوير إدراج خرائط تفاعلية وتوسيع الفهرس وبناء وحدة متابعة بين الأخصائي والمريض.

**الكلمات المفتاحية:** الذكاء الغذائي، التوصية التغذوية، نوتري-سكور، الصحة الرقمية، المؤشر الجلايسيمي

---

## MOTS-CLÉS

**Français :**
1. Intelligence alimentaire (Dietary Intelligence)
2. Recommandation nutritionnelle personnalisée
3. Nutri-Score et indice glycémique
4. Santé numérique en Algérie
5. Application web de santé

**Anglais :**
1. Dietary Intelligence
2. Personalized nutritional recommendation
3. Nutri-Score and glycemic index
4. Digital health in Algeria
5. Health web application

---

## DÉDICACE

*À la mémoire de tous ceux qui nous ont précédé sur le chemin du savoir.*

Je dédie ce modeste travail

À mes chers parents,
pour leur amour inconditionnel, leurs sacrifices silencieux
et leur soutien indéfectible tout au long de mon parcours.

À mes frères et sœurs,
pour leur présence, leur encouragement et leur foi en moi.

À mes professeurs,
qui ont éveillé en moi la curiosité intellectuelle
et forgé la rigueur qui m'a conduit jusqu'ici.

À tous mes amis et collègues de promotion,
avec qui j'ai partagé doutes, efforts et victoires.

À **[À COMPLÉTER : nom du dédicataire]**,
dont le soutien a été une lumière dans les moments les plus difficiles.

*Ce travail vous appartient.*

---

## REMERCIEMENTS

Au terme de ce travail, il m'est particulièrement agréable d'exprimer ma profonde gratitude à toutes les personnes qui ont contribué, de près ou de loin, à son aboutissement.

Je tiens à adresser mes sincères remerciements à mon encadrant, **[À COMPLÉTER : Pr/Dr Nom Prénom]**, pour la confiance qu'il m'a accordée, ses précieux conseils, sa disponibilité et la qualité de son encadrement tout au long de ce projet. Sa rigueur scientifique et ses orientations éclairées ont été déterminantes dans l'accomplissement de ce travail.

Mes vifs remerciements vont également aux membres du jury, **[À COMPLÉTER : Pr/Dr Nom Prénom]** et **[À COMPLÉTER : Pr/Dr Nom Prénom]**, pour l'honneur qu'ils me font en acceptant d'évaluer ce mémoire. Leur expertise et leurs remarques constitueront, sans nul doute, un enrichissement précieux.

Je remercie chaleureusement le corps enseignant du département d'Informatique de l'Université Badji Mokhtar Annaba, et plus particulièrement les enseignants du Master Systèmes d'Information et Décision, pour la qualité de la formation dispensée et les compétences transmises durant ces deux années de master.

J'exprime ma profonde reconnaissance à ma famille, pour son soutien moral constant, sa patience et ses encouragements tout au long de ce cursus universitaire.

Enfin, je remercie tous mes collègues de promotion pour l'esprit de solidarité et d'entraide qui a marqué ces années d'études.

*À tous, merci.*
