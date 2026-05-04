import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { scoreProduct, scoreRecipe, normalizeConditions, normalizeGoals } from "./scoring";
import { buildProductRecommendationReason, buildRecipeRecommendationReason } from "./reasons";
import type {
  ProductForRecommendations,
  RecipeForRecommendations,
  RecommendationContext,
  RecommendationResult,
  RecommendedProduct,
  RecommendedRecipe,
  HealthProfileForRecommendations,
} from "./types";

type DBClient = Awaited<ReturnType<typeof getSupabase>>;

const PRODUCT_FIELDS =
  "id, category_id, name, brand, image_url, nutri_score, glycemic_index, labels, compatible_with, energy_kcal, carbs_g, sugars_g, fiber_g, protein_g, sodium_g, is_published";

const RECIPE_FIELDS =
  "id, title, description, image_url, prep_time_min, cook_time_min, difficulty, calories_kcal, diet_tags, compatible_with, is_published, is_featured";

/** Seuil minimal en deçà duquel une recommandation est jugée trop douteuse. */
const MIN_PRODUCT_SCORE = 35;
const MIN_RECIPE_SCORE = 35;

async function getSupabase(): Promise<DBClient> {
  const cookieStore = await cookies();
  return createClient(cookieStore);
}

/* ── Diversité produits : limite par catégorie ─────────────────── */
function diversifyProducts(items: RecommendedProduct[], maxPerCategory = 2): RecommendedProduct[] {
  const counts = new Map<string, number>();
  const out: RecommendedProduct[] = [];
  const overflow: RecommendedProduct[] = [];
  for (const it of items) {
    const cat = it.product.category_id ?? "_uncat";
    const c = counts.get(cat) ?? 0;
    if (c < maxPerCategory) {
      out.push(it);
      counts.set(cat, c + 1);
    } else {
      overflow.push(it);
    }
  }
  return [...out, ...overflow];
}

/* ── Diversité recettes : variété par difficulté + temps total ── */
function diversifyRecipes(items: RecommendedRecipe[]): RecommendedRecipe[] {
  const counts = new Map<string, number>();
  const out: RecommendedRecipe[] = [];
  const overflow: RecommendedRecipe[] = [];
  for (const it of items) {
    const total = (it.recipe.prep_time_min ?? 0) + (it.recipe.cook_time_min ?? 0);
    const timeBucket = total <= 20 ? "fast" : total <= 40 ? "med" : "long";
    const key = `${it.recipe.difficulty ?? "?"}::${timeBucket}`;
    const c = counts.get(key) ?? 0;
    if (c < 2) {
      out.push(it);
      counts.set(key, c + 1);
    } else {
      overflow.push(it);
    }
  }
  return [...out, ...overflow];
}

/* ── Chargement du contexte (un seul appel Supabase passé) ────── */

async function loadContext(
  supabase: DBClient,
  userId: string | null,
): Promise<{
  context: RecommendationContext;
  health: HealthProfileForRecommendations;
}> {
  let health: HealthProfileForRecommendations = null;
  let savedProductIds = new Set<string>();
  let savedRecipeIds = new Set<string>();
  const popularProductIds = new Set<string>();
  const affinityCategoryIds = new Set<string>();

  if (userId) {
    const [healthRes, savedP, savedR, viewsRes, searchRes] = await Promise.all([
      supabase
        .from("user_health_profiles")
        .select("health_conditions, goals, tdee_kcal, bmr_kcal, activity_level, is_complete")
        .eq("user_id", userId)
        .maybeSingle(),
      supabase.from("user_saved_products").select("product_id").eq("user_id", userId),
      supabase.from("user_saved_recipes").select("recipe_id").eq("user_id", userId),
      supabase
        .from("partner_product_views")
        .select("product_id")
        .eq("user_id", userId)
        .order("viewed_at", { ascending: false })
        .limit(50),
      supabase
        .from("product_search_logs")
        .select("product_id")
        .eq("user_id", userId)
        .not("product_id", "is", null)
        .order("searched_at", { ascending: false })
        .limit(50),
    ]);

    health = healthRes.data ?? null;
    savedProductIds = new Set((savedP.data ?? []).map((r) => r.product_id));
    savedRecipeIds = new Set((savedR.data ?? []).map((r) => r.recipe_id));

    (viewsRes.data ?? []).forEach((r) => popularProductIds.add(r.product_id));
    (searchRes.data ?? []).forEach((r) => {
      if (r.product_id) popularProductIds.add(r.product_id);
    });

    if (popularProductIds.size > 0) {
      const { data: catRows } = await supabase
        .from("products")
        .select("category_id")
        .in("id", Array.from(popularProductIds))
        .not("category_id", "is", null);
      (catRows ?? []).forEach((r) => {
        if (r.category_id) affinityCategoryIds.add(r.category_id);
      });
    }
  }

  // Fallback popularité globale uniquement si on n'a aucun signal personnel.
  if (popularProductIds.size === 0) {
    const { data: globalViews } = await supabase
      .from("partner_product_views")
      .select("product_id")
      .order("viewed_at", { ascending: false })
      .limit(50);
    (globalViews ?? []).forEach((r) => popularProductIds.add(r.product_id));
  }

  const conditions = normalizeConditions(health?.health_conditions);
  const goals = normalizeGoals(health?.goals);
  const hasProfile = Boolean(health?.is_complete);

  return {
    health,
    context: {
      conditions,
      goals,
      hasProfile,
      savedProductIds,
      savedRecipeIds,
      popularProductIds,
      affinityCategoryIds,
    },
  };
}

/* ── PRODUITS ─────────────────────────────────────────────────── */

export async function getRecommendedProducts(
  userId: string,
  limit = 6,
): Promise<RecommendationResult<RecommendedProduct>> {
  const supabase = await getSupabase();
  const { context } = await loadContext(supabase, userId);

  const { data: rawProducts } = await supabase
    .from("products")
    .select(PRODUCT_FIELDS)
    .eq("is_published", true);

  const products = (rawProducts ?? []) as ProductForRecommendations[];

  const scored: RecommendedProduct[] = [];
  for (const product of products) {
    if (context.savedProductIds.has(product.id)) continue;
    const breakdown = scoreProduct(product, context);
    if (breakdown.excluded) continue;
    scored.push({
      product,
      recommendation_score: Math.round(breakdown.total),
      recommendation_reason: buildProductRecommendationReason(product, breakdown, context),
      recommendation_tags: [],
    });
  }

  scored.sort((a, b) => b.recommendation_score - a.recommendation_score);

  // Qualité > quantité : on n'expose pas de produits trop faibles.
  const qualified = scored.filter((s) => s.recommendation_score >= MIN_PRODUCT_SCORE);
  const pool = qualified.length > 0 ? qualified : scored.slice(0, limit);

  const diversified = diversifyProducts(pool, 2);
  const items = diversified.slice(0, limit);

  return {
    items,
    fallback: !context.hasProfile || qualified.length === 0,
    profileComplete: context.hasProfile,
  };
}

/* ── RECETTES ─────────────────────────────────────────────────── */

export async function getRecommendedRecipes(
  userId: string,
  limit = 4,
): Promise<RecommendationResult<RecommendedRecipe>> {
  const supabase = await getSupabase();
  const { context, health } = await loadContext(supabase, userId);

  const { data: rawRecipes } = await supabase
    .from("recipes")
    .select(RECIPE_FIELDS)
    .eq("is_published", true);

  const recipes = (rawRecipes ?? []) as RecipeForRecommendations[];
  const tdee = health?.tdee_kcal ?? null;

  const scored: RecommendedRecipe[] = [];
  for (const recipe of recipes) {
    if (context.savedRecipeIds.has(recipe.id)) continue;
    const breakdown = scoreRecipe(recipe, context, tdee);
    if (breakdown.excluded) continue;
    scored.push({
      recipe,
      recommendation_score: Math.round(breakdown.total),
      recommendation_reason: buildRecipeRecommendationReason(recipe, breakdown, context),
      recommendation_tags: [],
    });
  }

  scored.sort((a, b) => b.recommendation_score - a.recommendation_score);

  const qualified = scored.filter((s) => s.recommendation_score >= MIN_RECIPE_SCORE);
  const pool = qualified.length > 0 ? qualified : scored.slice(0, limit);

  const diversified = diversifyRecipes(pool);
  const items = diversified.slice(0, limit);

  return {
    items,
    fallback: !context.hasProfile || qualified.length === 0,
    profileComplete: context.hasProfile,
  };
}

/* ── TENDANCES ────────────────────────────────────────────────── */

export async function getTrendingProducts(limit = 4): Promise<ProductForRecommendations[]> {
  const supabase = await getSupabase();

  const { data: views } = await supabase
    .from("partner_product_views")
    .select("product_id")
    .order("viewed_at", { ascending: false })
    .limit(200);

  const counts = new Map<string, number>();
  (views ?? []).forEach((v) => {
    counts.set(v.product_id, (counts.get(v.product_id) ?? 0) + 1);
  });

  const topIds = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => id);

  if (topIds.length === 0) {
    const { data } = await supabase
      .from("products")
      .select(PRODUCT_FIELDS)
      .eq("is_published", true)
      .in("nutri_score", ["A", "B"])
      .limit(limit);
    return (data ?? []) as ProductForRecommendations[];
  }

  const { data: rows } = await supabase
    .from("products")
    .select(PRODUCT_FIELDS)
    .in("id", topIds)
    .eq("is_published", true);

  const ordered = (rows ?? []).slice().sort((a, b) => {
    return (counts.get(b.id) ?? 0) - (counts.get(a.id) ?? 0);
  });

  return ordered as ProductForRecommendations[];
}

/* ── RÉSUMÉ ───────────────────────────────────────────────────── */

export async function getRecommendationSummary(userId: string): Promise<{
  profileComplete: boolean;
  conditions: string[];
  goals: string[];
}> {
  const supabase = await getSupabase();
  const { context } = await loadContext(supabase, userId);
  return {
    profileComplete: context.hasProfile,
    conditions: context.conditions,
    goals: context.goals,
  };
}