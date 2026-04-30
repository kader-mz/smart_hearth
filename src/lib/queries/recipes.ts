import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export interface RecipeFilters {
  dietTags?: string[];
  compatibleWith?: string[];
  maxPrice?: number;
  maxCalories?: number;
  search?: string;
  featured?: boolean;
}

export async function getRecipes(filters: RecipeFilters = {}) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  let query = supabase
    .from("recipes")
    .select("*")
    .eq("is_published", true)
    .order("is_featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (filters.featured) query = query.eq("is_featured", true);
  if (filters.search) query = query.ilike("title", `%${filters.search}%`);
  if (filters.dietTags?.length) query = query.overlaps("diet_tags", filters.dietTags);
  if (filters.compatibleWith?.length) query = query.overlaps("compatible_with", filters.compatibleWith);
  if (filters.maxPrice !== undefined) query = query.lte("price_estimate", filters.maxPrice);
  if (filters.maxCalories !== undefined) query = query.lte("calories_kcal", filters.maxCalories);

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getRecipeById(id: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("recipes")
    .select(`
      *,
      recipe_ingredients(*, products(name, image_url)),
      recipe_steps(step_number, instruction)
    `)
    .eq("id", id)
    .eq("is_published", true)
    .single();
  if (error) throw error;
  return data;
}
