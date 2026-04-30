-- ============================================================
-- SmartHeart — Schéma Supabase Complet
-- Basé sur les 11 écrans de l'application
-- ============================================================

-- Extension UUID (activée par défaut sur Supabase)
create extension if not exists "uuid-ossp";


-- ============================================================
-- 1. PROFILS UTILISATEURS
--    Étend auth.users de Supabase (déclenché à l'inscription)
-- ============================================================

create table public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  email         text not null,
  full_name     text,
  avatar_url    text,
  role          text not null default 'user'
                  check (role in ('user', 'nutritionist', 'partner_admin', 'admin')),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Trigger : créer le profil automatiquement après inscription
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- ============================================================
-- 2. DONNÉES DE SANTÉ UTILISATEUR
--    Écrans : profile_setup_step_1, profile_setup_step_2
-- ============================================================

create table public.user_health_profiles (
  id              uuid primary key default uuid_generate_v4(),
  user_id         uuid not null references public.profiles(id) on delete cascade,

  -- Étape 1 : données biométriques
  age             smallint check (age > 0 and age < 130),
  weight_kg       numeric(5,2) check (weight_kg > 0),
  height_cm       numeric(5,2) check (height_cm > 0),
  activity_level  text check (activity_level in ('sedentary', 'moderate', 'active')),

  -- Étape 2 : conditions médicales (tableau de valeurs)
  health_conditions text[] default '{}',
  -- ex : ['diabetic', 'celiac', 'healthy', 'vegetarian', 'vegan', 'keto']

  -- Objectifs prioritaires
  goals           text[] default '{}',
  -- ex : ['manage_diabetes', 'lose_weight', 'avoid_allergens', 'maintain_weight']

  -- Calculé à partir des biométriques
  bmr_kcal        numeric(7,2),  -- métabolisme de base (TMB)
  tdee_kcal       numeric(7,2),  -- dépense énergétique totale

  is_complete     boolean not null default false,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),

  unique (user_id)
);


-- ============================================================
-- 3. PARTENAIRES (COMMERCES)
--    Écrans : store_locator_map, product_detail, partner_dashboard
-- ============================================================

create table public.partners (
  id              uuid primary key default uuid_generate_v4(),
  owner_id        uuid references public.profiles(id) on delete set null,

  name            text not null,
  description     text,
  logo_url        text,
  cover_url       text,

  -- Adresse
  address_line    text,
  city            text,
  postal_code     text,
  country         text not null default 'DZ',

  -- Géolocalisation (PostGIS-lite via lat/lng)
  latitude        numeric(9,6),
  longitude       numeric(9,6),

  -- Infos opérationnelles
  phone           text,
  email           text,
  website         text,
  opening_hours   jsonb,
  -- ex : {"monday":{"open":"08:00","close":"22:00"}, ...}

  partner_code    text unique,         -- ID affiché dans le dashboard (ex : 8829-SH)
  is_active       boolean not null default true,
  is_verified     boolean not null default false,

  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);


-- ============================================================
-- 4. CATÉGORIES DE PRODUITS
-- ============================================================

create table public.product_categories (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null unique,
  slug        text not null unique,
  icon        text,          -- nom d'icône Material Symbols
  parent_id   uuid references public.product_categories(id) on delete set null,
  sort_order  smallint not null default 0
);

-- Données initiales
insert into public.product_categories (name, slug, icon) values
  ('Épicerie salée',    'epicerie-salee',    'rice_bowl'),
  ('Produits laitiers', 'produits-laitiers', 'egg'),
  ('Boissons',          'boissons',          'local_drink'),
  ('Boulangerie',       'boulangerie',       'bakery_dining'),
  ('Fruits & Légumes',  'fruits-legumes',    'nutrition'),
  ('Épicerie sucrée',   'epicerie-sucree',   'cake');


-- ============================================================
-- 5. PRODUITS
--    Écrans : product_catalog, product_detail, home_dashboard_light
-- ============================================================

create table public.products (
  id                uuid primary key default uuid_generate_v4(),
  category_id       uuid references public.product_categories(id) on delete set null,

  -- Identité
  name              text not null,
  brand             text,
  description       text,
  barcode           text unique,
  image_url         text,
  image_urls        text[] default '{}',

  -- Scores nutritionnels (écran product_detail)
  nutri_score       char(1) check (nutri_score in ('A','B','C','D','E')),
  glycemic_index    smallint check (glycemic_index >= 0 and glycemic_index <= 100),

  -- Labels / certifications
  labels            text[] default '{}',
  -- ex : ['bio', 'vegan', 'sans_gluten', 'sans_lactose', 'halal']

  -- Profils de santé compatibles
  compatible_with   text[] default '{}',
  -- ex : ['diabetic', 'celiac', 'vegetarian']

  -- Tableau nutritionnel (pour 100g)
  energy_kcal       numeric(7,2),
  carbs_g           numeric(6,2),
  sugars_g          numeric(6,2),
  fat_g             numeric(6,2),
  saturated_fat_g   numeric(6,2),
  fiber_g           numeric(6,2),
  protein_g         numeric(6,2),
  sodium_g          numeric(6,2),

  -- Méta
  is_published      boolean not null default true,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

-- Index sur glycemic_index et nutri_score pour les filtres du catalog
create index idx_products_gi      on public.products(glycemic_index);
create index idx_products_score   on public.products(nutri_score);
create index idx_products_labels  on public.products using gin(labels);
create index idx_products_compat  on public.products using gin(compatible_with);


-- ============================================================
-- 6. INVENTAIRE PARTENAIRE ↔ PRODUIT
--    Écrans : product_detail (tableau "Où acheter"), store_locator_map
-- ============================================================

create table public.partner_inventory (
  id              uuid primary key default uuid_generate_v4(),
  partner_id      uuid not null references public.partners(id) on delete cascade,
  product_id      uuid not null references public.products(id) on delete cascade,

  price           numeric(10,2) not null check (price >= 0),
  currency        char(3) not null default 'DZD',
  quantity        integer not null default 0 check (quantity >= 0),
  is_available    boolean not null default true,

  -- Seuil d'alerte stock faible (écran partner_dashboard)
  low_stock_threshold integer not null default 5,

  updated_at      timestamptz not null default now(),

  unique (partner_id, product_id)
);

create index idx_inventory_partner on public.partner_inventory(partner_id);
create index idx_inventory_product on public.partner_inventory(product_id);
create index idx_inventory_avail   on public.partner_inventory(is_available);


-- ============================================================
-- 7. RECETTES
--    Écrans : recipe_recommender, home_dashboard_light/dark
-- ============================================================

create table public.recipes (
  id              uuid primary key default uuid_generate_v4(),
  created_by      uuid references public.profiles(id) on delete set null,

  title           text not null,
  description     text,
  image_url       text,

  -- Méta cuisine
  prep_time_min   smallint check (prep_time_min >= 0),
  cook_time_min   smallint check (cook_time_min >= 0),
  servings        smallint check (servings > 0) default 2,
  difficulty      text check (difficulty in ('easy', 'medium', 'hard')) default 'medium',

  -- Nutritionnel (par portion)
  calories_kcal   numeric(7,2),
  price_estimate  numeric(6,2),    -- budget estimé (écran recipe_recommender)

  -- Filtres IA (écran recipe_recommender)
  diet_tags       text[] default '{}',
  -- ex : ['faible_ig', 'sans_gluten', 'vegetalien', 'keto', 'premium', 'eco']

  compatible_with text[] default '{}',

  is_published    boolean not null default true,
  is_featured     boolean not null default false,

  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

create index idx_recipes_tags   on public.recipes using gin(diet_tags);
create index idx_recipes_compat on public.recipes using gin(compatible_with);


-- ============================================================
-- 8. INGRÉDIENTS DE RECETTE
--    Écran : recipe_recommender (drawer détail)
-- ============================================================

create table public.recipe_ingredients (
  id          uuid primary key default uuid_generate_v4(),
  recipe_id   uuid not null references public.recipes(id) on delete cascade,
  product_id  uuid references public.products(id) on delete set null,

  name        text not null,           -- nom affiché (ex: "Blanc de poulet grillé")
  quantity    text not null,           -- ex : "150g", "1/2", "2 c.s."
  sort_order  smallint not null default 0
);

create index idx_recipe_ingredients_recipe on public.recipe_ingredients(recipe_id);


-- ============================================================
-- 9. ÉTAPES DE RECETTE
--    Écran : recipe_recommender (drawer détail — Préparation)
-- ============================================================

create table public.recipe_steps (
  id          uuid primary key default uuid_generate_v4(),
  recipe_id   uuid not null references public.recipes(id) on delete cascade,
  step_number smallint not null,
  instruction text not null,

  unique (recipe_id, step_number)
);


-- ============================================================
-- 10. ARTICLES ÉDUCATIFS
--     Écran : education_hub
-- ============================================================

create table public.articles (
  id            uuid primary key default uuid_generate_v4(),
  author_id     uuid references public.profiles(id) on delete set null,

  title         text not null,
  slug          text not null unique,
  excerpt       text,
  content       text,                  -- Markdown / HTML
  image_url     text,

  category      text not null default 'general',
  -- ex : 'glycemic_index', 'labels', 'fiber', 'fats', 'general'

  read_time_min smallint check (read_time_min > 0),
  difficulty    text check (difficulty in ('beginner', 'intermediate', 'advanced'))
                  default 'beginner',

  tags          text[] default '{}',

  is_published  boolean not null default true,
  published_at  timestamptz,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index idx_articles_category on public.articles(category);
create index idx_articles_tags     on public.articles using gin(tags);


-- ============================================================
-- 11. QUIZ (Écran education_hub — "Prêt pour un quiz ?")
-- ============================================================

create table public.quizzes (
  id          uuid primary key default uuid_generate_v4(),
  article_id  uuid references public.articles(id) on delete cascade,
  title       text not null,
  created_at  timestamptz not null default now()
);

create table public.quiz_questions (
  id          uuid primary key default uuid_generate_v4(),
  quiz_id     uuid not null references public.quizzes(id) on delete cascade,
  question    text not null,
  sort_order  smallint not null default 0
);

create table public.quiz_answers (
  id           uuid primary key default uuid_generate_v4(),
  question_id  uuid not null references public.quiz_questions(id) on delete cascade,
  answer_text  text not null,
  is_correct   boolean not null default false,
  explanation  text,
  sort_order   smallint not null default 0
);

create table public.user_quiz_results (
  id            uuid primary key default uuid_generate_v4(),
  user_id       uuid not null references public.profiles(id) on delete cascade,
  quiz_id       uuid not null references public.quizzes(id) on delete cascade,
  score         smallint not null,
  max_score     smallint not null,
  completed_at  timestamptz not null default now()
);


-- ============================================================
-- 12. FAVORIS UTILISATEUR
--     Écrans : product_catalog (cœur), recipe_recommender (cœur)
-- ============================================================

create table public.user_saved_products (
  user_id     uuid not null references public.profiles(id) on delete cascade,
  product_id  uuid not null references public.products(id) on delete cascade,
  saved_at    timestamptz not null default now(),
  primary key (user_id, product_id)
);

create table public.user_saved_recipes (
  user_id    uuid not null references public.profiles(id) on delete cascade,
  recipe_id  uuid not null references public.recipes(id) on delete cascade,
  saved_at   timestamptz not null default now(),
  primary key (user_id, recipe_id)
);

create table public.user_read_articles (
  user_id     uuid not null references public.profiles(id) on delete cascade,
  article_id  uuid not null references public.articles(id) on delete cascade,
  read_at     timestamptz not null default now(),
  primary key (user_id, article_id)
);


-- ============================================================
-- 13. LISTES DE COURSES
--     Écran : product_catalog (FAB "Voir ma liste")
-- ============================================================

create table public.shopping_lists (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references public.profiles(id) on delete cascade,
  name        text not null default 'Ma liste',
  is_active   boolean not null default true,
  created_at  timestamptz not null default now()
);

create table public.shopping_list_items (
  id               uuid primary key default uuid_generate_v4(),
  shopping_list_id uuid not null references public.shopping_lists(id) on delete cascade,
  product_id       uuid references public.products(id) on delete set null,
  product_name     text not null,     -- dénormalisé en cas de suppression produit
  quantity         smallint not null default 1,
  is_checked       boolean not null default false,
  added_at         timestamptz not null default now()
);


-- ============================================================
-- 14. ALERTES PATIENTS (Écran home_dashboard_dark)
--     Fonctionnalité nutritionniste / médecin
-- ============================================================

create table public.patient_alerts (
  id              uuid primary key default uuid_generate_v4(),
  nutritionist_id uuid not null references public.profiles(id) on delete cascade,
  patient_id      uuid not null references public.profiles(id) on delete cascade,

  type            text not null check (type in ('warning', 'success', 'info')),
  title           text not null,
  message         text not null,

  is_read         boolean not null default false,
  created_at      timestamptz not null default now()
);

create index idx_alerts_nutritionist on public.patient_alerts(nutritionist_id, is_read);


-- ============================================================
-- 15. ANALYTICS PARTENAIRE (Écran partner_dashboard)
--     Vues de produits quotidiennes (dénormalisé pour perf)
-- ============================================================

create table public.partner_product_views (
  id          uuid primary key default uuid_generate_v4(),
  partner_id  uuid not null references public.partners(id) on delete cascade,
  product_id  uuid not null references public.products(id) on delete cascade,
  user_id     uuid references public.profiles(id) on delete set null,
  viewed_at   timestamptz not null default now()
);

create index idx_views_partner on public.partner_product_views(partner_id, viewed_at desc);

-- Vue agrégée pour le graphique "Vues des produits" (7 derniers jours)
create or replace view public.partner_daily_views as
  select
    partner_id,
    date_trunc('day', viewed_at) as day,
    count(*) as total_views
  from public.partner_product_views
  where viewed_at >= now() - interval '30 days'
  group by partner_id, day
  order by day;

-- Vue pour les produits les plus recherchés
create table public.product_search_logs (
  id          uuid primary key default uuid_generate_v4(),
  partner_id  uuid references public.partners(id) on delete cascade,
  product_id  uuid references public.products(id) on delete cascade,
  search_term text,
  user_id     uuid references public.profiles(id) on delete set null,
  searched_at timestamptz not null default now()
);


-- ============================================================
-- 16. UPDATED_AT AUTOMATIQUE
--     Trigger générique pour toutes les tables concernées
-- ============================================================

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_updated_at before update on public.profiles
  for each row execute procedure public.set_updated_at();

create trigger set_updated_at before update on public.user_health_profiles
  for each row execute procedure public.set_updated_at();

create trigger set_updated_at before update on public.partners
  for each row execute procedure public.set_updated_at();

create trigger set_updated_at before update on public.products
  for each row execute procedure public.set_updated_at();

create trigger set_updated_at before update on public.partner_inventory
  for each row execute procedure public.set_updated_at();

create trigger set_updated_at before update on public.recipes
  for each row execute procedure public.set_updated_at();

create trigger set_updated_at before update on public.articles
  for each row execute procedure public.set_updated_at();


-- ============================================================
-- 17. ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Activer RLS sur toutes les tables publiques
alter table public.profiles                enable row level security;
alter table public.user_health_profiles    enable row level security;
alter table public.partners                enable row level security;
alter table public.partner_inventory       enable row level security;
alter table public.products                enable row level security;
alter table public.product_categories      enable row level security;
alter table public.recipes                 enable row level security;
alter table public.recipe_ingredients      enable row level security;
alter table public.recipe_steps            enable row level security;
alter table public.articles                enable row level security;
alter table public.user_saved_products     enable row level security;
alter table public.user_saved_recipes      enable row level security;
alter table public.user_read_articles      enable row level security;
alter table public.shopping_lists          enable row level security;
alter table public.shopping_list_items     enable row level security;
alter table public.patient_alerts          enable row level security;

-- ── profiles ──────────────────────────────────────────────────
create policy "Lecture publique des profils"
  on public.profiles for select using (true);

create policy "Modification de son propre profil"
  on public.profiles for update using (auth.uid() = id);

-- ── user_health_profiles ─────────────────────────────────────
create policy "Accès à son propre profil santé"
  on public.user_health_profiles for all
  using (auth.uid() = user_id);

-- ── products & categories ────────────────────────────────────
create policy "Lecture publique des produits"
  on public.products for select using (is_published = true);

create policy "Lecture publique des catégories"
  on public.product_categories for select using (true);

-- ── recipes ──────────────────────────────────────────────────
create policy "Lecture publique des recettes publiées"
  on public.recipes for select using (is_published = true);

create policy "Lecture publique des ingrédients"
  on public.recipe_ingredients for select using (true);

create policy "Lecture publique des étapes"
  on public.recipe_steps for select using (true);

-- ── articles ─────────────────────────────────────────────────
create policy "Lecture publique des articles publiés"
  on public.articles for select using (is_published = true);

-- ── user_saved_products ──────────────────────────────────────
create policy "Gestion de ses produits favoris"
  on public.user_saved_products for all
  using (auth.uid() = user_id);

-- ── user_saved_recipes ───────────────────────────────────────
create policy "Gestion de ses recettes favorites"
  on public.user_saved_recipes for all
  using (auth.uid() = user_id);

-- ── user_read_articles ───────────────────────────────────────
create policy "Gestion de ses articles lus"
  on public.user_read_articles for all
  using (auth.uid() = user_id);

-- ── shopping_lists ───────────────────────────────────────────
create policy "Gestion de ses listes de courses"
  on public.shopping_lists for all
  using (auth.uid() = user_id);

create policy "Gestion des items de ses listes"
  on public.shopping_list_items for all
  using (
    exists (
      select 1 from public.shopping_lists sl
      where sl.id = shopping_list_id and sl.user_id = auth.uid()
    )
  );

-- ── partners ─────────────────────────────────────────────────
create policy "Lecture publique des partenaires actifs"
  on public.partners for select using (is_active = true);

create policy "Modification par le propriétaire du commerce"
  on public.partners for update
  using (auth.uid() = owner_id);

-- ── partner_inventory ────────────────────────────────────────
create policy "Lecture publique de l'inventaire disponible"
  on public.partner_inventory for select using (is_available = true);

create policy "Gestion de l'inventaire par le partenaire"
  on public.partner_inventory for all
  using (
    exists (
      select 1 from public.partners p
      where p.id = partner_id and p.owner_id = auth.uid()
    )
  );

-- ── patient_alerts ───────────────────────────────────────────
create policy "Alertes visibles par le nutritionniste et le patient"
  on public.patient_alerts for select
  using (auth.uid() = nutritionist_id or auth.uid() = patient_id);

create policy "Création d'alertes par le nutritionniste"
  on public.patient_alerts for insert
  with check (auth.uid() = nutritionist_id);


insert into public.partners (name, description, city, address_line, latitude, longitude, is_verified)
values
('UNO Hypermarché Annaba', 'Grande surface alimentaire', 'Annaba', 'Centre Ville', 36.9001, 7.7662, true),
('Ardis Market', 'Supermarché moderne', 'Annaba', 'El Bouni', 36.8525, 7.7203, true),
('Supérette El Hadjar', 'Commerce de proximité', 'Annaba', 'El Hadjar', 36.8035, 7.7368, true),
('Bio Santé Store', 'Produits bio & sans gluten', 'Annaba', 'Valmascort', 36.9050, 7.7700, true),
('Pharma Nutrition+', 'Produits diabétiques spécialisés', 'Annaba', 'Sidi Amar', 36.8200, 7.7300, true);


insert into public.products (
  name, brand, category_id, nutri_score, glycemic_index,
  labels, compatible_with,
  energy_kcal, carbs_g, sugars_g, protein_g, fat_g, fiber_g, sodium_g
)
select
  'Produit ' || gs,
  (array['Candia','Soummam','Rouiba','Isla','Barilla','Local'])[floor(random()*6)+1],
  (select id from public.product_categories order by random() limit 1),
  (array['A','B','C','D','E'])[floor(random()*5)+1],
  (random()*80)::int,

  -- labels
  case when random() > 0.7 then array['bio'] else array[]::text[] end,

  -- compatibilité
  case 
    when random() > 0.6 then array['diabetic']
    when random() > 0.3 then array['celiac']
    else array['healthy']
  end,

  (random()*400 + 50),
  (random()*80),
  (random()*40),
  (random()*30),
  (random()*30),
  (random()*10),
  (random()*2)

from generate_series(1,1000) gs;



insert into public.partner_inventory (partner_id, product_id, price, quantity, is_available)
select
  p.id,
  pr.id,
  (random()*400 + 50)::int,
  (random()*50)::int,
  (random() > 0.1)
from public.partners p
cross join public.products pr
limit 2000;



insert into public.recipes 
(title, description, prep_time_min, difficulty, calories_kcal, diet_tags, compatible_with)
values
('Salade healthy algérienne', 'Recette légère et équilibrée', 15, 'easy', 250,
 array['faible_ig','eco'], array['diabetic','vegetarian']),

('Couscous léger diabétique', 'Version adaptée du couscous', 60, 'medium', 450,
 array['faible_ig'], array['diabetic']),

('Pâtes sans gluten aux légumes', 'Repas rapide', 25, 'easy', 350,
 array['sans_gluten'], array['celiac']);



insert into public.recipe_ingredients (recipe_id, name, quantity)
select r.id, 'Tomates fraîches', '2'
from public.recipes r
limit 3;


insert into public.articles 
(title, slug, excerpt, category, read_time_min, content, tags, is_published, published_at)
values
(
 'Comprendre l''indice glycémique',
 'indice-glycemique',
 'Apprenez à gérer votre glycémie',
 'glycemic_index',
 5,
 '## IG expliqué simplement...',
 array['diabete','nutrition'],
 true,
 now()
),
(
 'Lire les étiquettes alimentaires',
 'lire-etiquettes',
 'Bien choisir ses produits',
 'labels',
 6,
 '## Guide complet...',
 array['courses','sante'],
 true,
 now()
);


insert into public.quizzes (title)
values ('Quiz nutrition de base');

insert into public.quiz_questions (quiz_id, question)
select q.id, 'Quel aliment a un IG élevé ?'
from public.quizzes q
limit 1;

insert into public.quiz_answers (question_id, answer_text, is_correct)
select qq.id, 'Pain blanc', true
from public.quiz_questions qq;


insert into public.shopping_lists (user_id, name)
select id, 'Ma liste Annaba'
from public.profiles
limit 1;


insert into public.patient_alerts (nutritionist_id, patient_id, type, title, message)
select p1.id, p2.id, 'warning',
'Attention sucre',
'Votre consommation de sucre est élevée'
from public.profiles p1, public.profiles p2
limit 1;




insert into public.partner_product_views (partner_id, product_id)
select
  p.id,
  pr.id
from public.partners p
join public.products pr on true
limit 500;