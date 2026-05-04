import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { requireAuth } from "@/lib/auth";
import { getProducts } from "@/lib/queries/products";
import { getSavedProductIds } from "@/lib/queries/favorites";
import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";

const scoreColors: Record<string, string> = {
  A: "bg-emerald-600", B: "bg-yellow-500",
  C: "bg-orange-500",  D: "bg-orange-700", E: "bg-red-600",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; score?: string; page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page ?? 1);
  const [, { products, total }, savedIds] = await Promise.all([
    requireAuth(),
    getProducts({ search: params.q, nutriScore: params.score ? [params.score] : undefined, page }),
    getSavedProductIds(),
  ]);

  const totalPages = Math.ceil(total / 12);

  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar />

      <main className="pl-60 pt-[60px] min-h-screen">
        <div className="p-8 max-w-7xl mx-auto flex gap-8">

          {/* Filter Panel */}
          <aside className="w-64 shrink-0">
            <form className="bg-white rounded-xl p-6 custom-shadow space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">filter_list</span>
                  Recherche
                </h4>
                <input
                  name="q"
                  defaultValue={params.q}
                  placeholder="Nom, marque…"
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-on-surface mb-4">Nutri-Score</h4>
                <div className="flex flex-wrap gap-2">
                  {["A", "B", "C", "D", "E"].map((s) => (
                    <a key={s} href={`/search?score=${s}`}
                      className={`w-8 h-8 flex items-center justify-center rounded font-bold text-white text-sm transition-opacity ${scoreColors[s]} ${params.score === s ? "ring-2 ring-offset-1 ring-on-surface" : "opacity-60 hover:opacity-100"}`}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full py-2 bg-primary text-on-primary text-sm font-semibold rounded-lg hover:opacity-90">
                Rechercher
              </button>
              <a href="/search" className="block w-full text-center text-sm text-outline hover:text-on-surface">
                Réinitialiser
              </a>
            </form>
          </aside>

          {/* Grid */}
          <section className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-outline">{total} produit{total > 1 ? "s" : ""} trouvé{total > 1 ? "s" : ""}</p>
            </div>

            {products.length === 0 ? (
              <div className="bg-white rounded-xl custom-shadow p-16 text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">search_off</span>
                <p className="font-semibold text-on-surface">Aucun produit trouvé.</p>
                <p className="text-sm text-outline mt-1">Modifiez vos filtres ou ajoutez des produits dans Supabase.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                  const saved = savedIds.includes(product.id);
                  return (
                    <article key={product.id} className="bg-white rounded-xl overflow-hidden custom-shadow group flex flex-col">
                      <div className="relative h-48 bg-surface-container-low">
                        <ProductImage
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.nutri_score && (
                            <span className={`px-2 py-0.5 ${scoreColors[product.nutri_score]} text-white font-bold text-lg rounded-md`}>
                              {product.nutri_score}
                            </span>
                          )}
                          {product.glycemic_index !== null && (
                            <span className="px-2 py-1 bg-primary text-on-primary text-xs font-semibold rounded-md uppercase">
                              IG {product.glycemic_index}
                            </span>
                          )}
                        </div>
                        <div className={`absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center ${saved ? "text-secondary" : "text-outline hover:text-secondary"} transition-colors`}>
                          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>
                            favorite
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-semibold leading-tight text-on-surface">{product.name}</h3>
                        </div>
                        {product.brand && <p className="text-xs text-outline mb-4">{product.brand}</p>}
                        <div className="mt-auto flex gap-2">
                          <Link href={`/search/${product.id}`}
                            className="flex-1 bg-primary text-on-primary text-sm font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined text-sm">visibility</span>
                            Voir le produit
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl custom-shadow">
                <span className="text-sm text-outline">Page {page} sur {totalPages}</span>
                <div className="flex items-center gap-1">
                  {page > 1 && (
                    <a href={`/search?${new URLSearchParams({ ...(params.q ? { q: params.q } : {}), page: String(page - 1) })}`}
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container">
                      <span className="material-symbols-outlined text-lg">chevron_left</span>
                    </a>
                  )}
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
                    <a key={p} href={`/search?${new URLSearchParams({ ...(params.q ? { q: params.q } : {}), page: String(p) })}`}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold ${p === page ? "bg-primary text-on-primary" : "hover:bg-surface-container text-outline"}`}>
                      {p}
                    </a>
                  ))}
                  {page < totalPages && (
                    <a href={`/search?${new URLSearchParams({ ...(params.q ? { q: params.q } : {}), page: String(page + 1) })}`}
                      className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container">
                      <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
