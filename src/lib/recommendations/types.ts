import type { Product, Recipe, UserHealthProfile } from "@/lib/database.types";

export type HealthProfileForRecommendations = Pick<
  UserHealthProfile,
  | "health_conditions"
  | "goals"
  | "tdee_kcal"
  | "bmr_kcal"
  | "activity_level"
  | "is_complete"
> | null;

export type ProductForRecommendations = Pick<
  Product,
  | "id"
  | "category_id"
  | "name"
  | "brand"
  | "image_url"
  | "nutri_score"
  | "glycemic_index"
  | "labels"
  | "compatible_with"
  | "energy_kcal"
  | "carbs_g"
  | "sugars_g"
  | "fiber_g"
  | "protein_g"
  | "sodium_g"
  | "is_published"
>;

export type RecipeForRecommendations = Pick<
  Recipe,
  | "id"
  | "title"
  | "description"
  | "image_url"
  | "prep_time_min"
  | "cook_time_min"
  | "difficulty"
  | "calories_kcal"
  | "diet_tags"
  | "compatible_with"
  | "is_published"
  | "is_featured"
>;

export interface RecommendationContext {
  /** Conditions normalisées (ex: ["diabetic","celiac"]). */
  conditions: string[];
  /** Objectifs normalisés (ex: ["lose_weight"]). */
  goals: string[];
  /** True si le profil santé est rempli et complet. */
  hasProfile: boolean;
  /** Identifiants des produits déjà sauvegardés par l'utilisateur. */
  savedProductIds: Set<string>;
  /** Identifiants des recettes déjà sauvegardées par l'utilisateur. */
  savedRecipeIds: Set<string>;
  /** Produits ayant attiré l'utilisateur via vues partenaires (boost léger). */
  popularProductIds: Set<string>;
  /** Catégories implicitement intéressantes (issues des recherches/vues). */
  affinityCategoryIds: Set<string>;
}

export interface RecommendationReason {
  primary: string;
  tags: string[];
}

/**
 * Décomposition du score. Les clés de `components` sont libres mais doivent
 * rester stables (utilisées par les tests/UI). Pour les produits :
 *   health, nutri, gi, fiber, sodium, labels, popularity
 * Pour les recettes :
 *   health, diet_tags, calories, difficulty, featured, variety
 */
export interface ScoreBreakdown {
  total: number;
  components: Record<string, number>;
  excluded: boolean;
  exclusionReason?: string;
  signals: string[];
}

export interface RecommendedProduct {
  product: ProductForRecommendations;
  recommendation_score: number;
  recommendation_reason: RecommendationReason;
  recommendation_tags: string[];
}

export interface RecommendedRecipe {
  recipe: RecipeForRecommendations;
  recommendation_score: number;
  recommendation_reason: RecommendationReason;
  recommendation_tags: string[];
}

export interface RecommendationResult<T> {
  items: T[];
  /** Indique si on est en fallback (profil absent/incomplet ou pas de match). */
  fallback: boolean;
  /** Vrai si l'utilisateur a un profil santé complet. */
  profileComplete: boolean;
}