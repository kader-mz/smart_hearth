import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { requireAuth } from "@/lib/auth";
import { getRecipes } from "@/lib/queries/recipes";
import { getSavedRecipeIds } from "@/lib/queries/favorites";

const difficultyLabel: Record<string, string> = { easy: "Facile", medium: "Moyen", hard: "Difficile" };

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ tags?: string; q?: string }>;
}) {
  const params = await searchParams;
  const tags = params.tags ? params.tags.split(",") : [];

  const [, recipes, savedIds] = await Promise.all([
    requireAuth(),
    getRecipes({ dietTags: tags.length ? tags : undefined, search: params.q }),
    getSavedRecipeIds(),
  ]);

  const allTags = ["faible_ig", "sans_gluten", "vegetalien", "keto", "premium", "eco"];

  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar />

      <main className="ml-60 mt-[60px] flex min-h-screen">
        {/* Panneau filtre IA */}
        <aside className="w-[300px] border-r border-neutral-200 bg-white p-6 flex flex-col gap-6 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto shrink-0">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Générateur IA</h3>
            <p className="text-sm text-on-surface-variant">Filtrez les recettes selon vos besoins nutritionnels.</p>
          </div>

          <form className="flex flex-col gap-6 flex-1">
            {/* Recherche */}
            <div>
              <label className="text-sm font-semibold text-on-surface block mb-2">Recherche</label>
              <input name="q" defaultValue={params.q}
                placeholder="Nom de recette…"
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20" />
            </div>

            {/* Tags */}
            <div>
              <label className="text-sm font-semibold text-on-surface block mb-3">Régimes &amp; Santé</label>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => {
                  const active = tags.includes(tag);
                  const nextTags = active ? tags.filter((t) => t !== tag) : [...tags, tag];
                  return (
                    <a key={tag} href={`/recipes?tags=${nextTags.join(",")}`}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${active ? "border-2 border-primary-container bg-primary-container/5 text-primary" : "border border-outline-variant bg-surface text-on-surface-variant hover:border-primary-container"}`}>
                      {tag.replace(/_/g, " ")}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-neutral-100">
              <button type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                Générer
              </button>
              {(tags.length > 0 || params.q) && (
                <a href="/recipes" className="block text-center text-xs text-outline mt-3 hover:text-on-surface">
                  Réinitialiser
                </a>
              )}
            </div>
          </form>
        </aside>

        {/* Grille recettes */}
        <section className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-on-surface">
                {recipes.length} recette{recipes.length > 1 ? "s" : ""}
              </h2>
            </div>

            {recipes.length === 0 ? (
              <div className="bg-white rounded-xl custom-shadow p-16 text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">restaurant_menu</span>
                <p className="font-semibold text-on-surface">Aucune recette trouvée.</p>
                <p className="text-sm text-outline mt-1">Ajoutez des recettes dans Supabase ou modifiez les filtres.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {recipes.map((recipe) => {
                  const saved = savedIds.includes(recipe.id);
                  return (
                    <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-[0px_2px_4px_rgba(40,37,29,0.05)] group cursor-pointer border border-neutral-100">
                      <div className="relative h-56 overflow-hidden bg-surface-container-low">
                        {recipe.image_url ? (
                          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            src={recipe.image_url} alt={recipe.title} />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="material-symbols-outlined text-6xl text-outline-variant">restaurant</span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                          {recipe.diet_tags.slice(0, 2).map((tag, i) => (
                            <span key={tag} className={`bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase ${i === 0 ? "text-primary" : "text-secondary"}`}>
                              {tag.replace(/_/g, " ")}
                            </span>
                          ))}
                        </div>
                        <button className={`absolute bottom-4 right-4 bg-white/90 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center shadow-sm ${saved ? "text-secondary" : "text-primary"}`}>
                          <span className="material-symbols-outlined" style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-on-surface mb-2">{recipe.title}</h3>
                        {recipe.description && (
                          <p className="text-sm text-on-surface-variant line-clamp-2 mb-4">{recipe.description}</p>
                        )}
                        <div className="flex items-center gap-4 text-on-surface-variant text-xs font-semibold">
                          {recipe.prep_time_min && (
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              {recipe.prep_time_min} min
                            </div>
                          )}
                          {recipe.calories_kcal && (
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">local_fire_department</span>
                              {recipe.calories_kcal} kcal
                            </div>
                          )}
                          {recipe.price_estimate && (
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">euro_symbol</span>
                              {recipe.price_estimate}€
                            </div>
                          )}
                          {recipe.difficulty && (
                            <div className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-sm">fitness_center</span>
                              {difficultyLabel[recipe.difficulty]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
