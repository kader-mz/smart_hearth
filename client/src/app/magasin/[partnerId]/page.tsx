import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { getPublishedCatalog } from "@/lib/queries/catalog";

export default async function MagasinPage({
  params,
}: {
  params: Promise<{ partnerId: string }>;
}) {
  const { partnerId } = await params;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: partner } = await supabase
    .from("partners")
    .select("*")
    .eq("id", partnerId)
    .eq("is_active", true)
    .maybeSingle();

  if (!partner) notFound();

  const catalog = await getPublishedCatalog(partnerId);
  const products = catalog.filter((item) => item.type === "product");
  const recipes = catalog.filter((item) => item.type === "recipe");

  return (
    <div className="min-h-screen bg-[#f7fafa] text-[#181c1d]">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link
            href="/map"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#01696f] mb-4 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Retour à la carte
          </Link>
          <h1 className="text-3xl font-bold">{partner.name}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-neutral-500">
            {partner.address_line && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                {partner.address_line}
              </span>
            )}
            {partner.city && <span>{partner.city}</span>}
            {partner.phone && (
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">call</span>
                {partner.phone}
              </span>
            )}
            {partner.latitude && partner.longitude && (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${partner.latitude},${partner.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[#01696f] hover:underline font-bold"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                Itinéraire
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 mb-6">
          <button className="px-4 py-2 bg-[#01696f] text-white rounded-lg text-sm font-bold">
            Produits
            <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded text-xs">
              {products.length}
            </span>
          </button>
          <button className="px-4 py-2 bg-neutral-100 text-neutral-600 rounded-lg text-sm font-bold hover:bg-neutral-200 transition-colors">
            Recettes
            <span className="ml-2 bg-neutral-200 px-1.5 py-0.5 rounded text-xs">
              {recipes.length}
            </span>
          </button>
        </div>

        {/* Products */}
        {products.length === 0 ? (
          <div className="text-center py-16 text-neutral-400">
            <span className="material-symbols-outlined text-5xl mb-3 block text-neutral-300">
              inventory_2
            </span>
            <p className="font-semibold">Aucun produit publié pour le moment.</p>
            <p className="text-sm mt-1">
              Revenez plus tard pour découvrir le catalogue de {partner.name}.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((item) => {
              const d = item.data as Record<string, string>;
              const price = d["prix"] ?? d["price"] ?? d["Prix"] ?? d["PRICE"];
              const category = d["catégorie"] ?? d["categorie"] ?? d["category"] ?? d["Catégorie"];
              const description = d["description"] ?? d["Description"] ?? d["DESCRIPTION"];

              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:border-[#01696f]/20 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-[#181c1d] mb-2">{item.name}</h3>
                  {category && (
                    <span className="inline-block bg-neutral-100 text-neutral-600 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                      {category}
                    </span>
                  )}
                  {description && (
                    <p className="text-xs text-neutral-500 mb-3 line-clamp-2">{description}</p>
                  )}
                  {price && (
                    <p className="text-lg font-bold text-[#01696f]">{price} DZD</p>
                  )}

                  {/* Extra fields */}
                  <div className="mt-3 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-1">
                    {Object.entries(d)
                      .filter(
                        ([k]) =>
                          !["nom", "name"].includes(k.toLowerCase()) &&
                          k.toLowerCase() !== (typeof price === "string" ? "prix" : "price") &&
                          k.toLowerCase() !== "catégorie" &&
                          k.toLowerCase() !== "categorie" &&
                          k.toLowerCase() !== "category" &&
                          k.toLowerCase() !== "description",
                      )
                      .slice(0, 4)
                      .map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-neutral-400">{key}</span>
                          <p className="font-bold text-[#181c1d] truncate">{value}</p>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Recipes section (shown only if products tab is active, scroll down) */}
        {recipes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#181c1d] mb-4">
              Recettes
              <span className="ml-2 text-sm font-normal text-neutral-500">
                ({recipes.length})
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recipes.map((item) => {
                const d = item.data as Record<string, string>;
                const prepTime = d["temps_preparation"] ?? d["prep_time"] ?? d["Temps de préparation"];
                const cookTime = d["temps_cuisson"] ?? d["cook_time"] ?? d["Temps de cuisson"];
                const servings = d["portions"] ?? d["servings"] ?? d["Portions"];
                const description = d["description"] ?? d["Description"];

                return (
                  <div
                    key={item.id}
                    className="bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:border-[#01696f]/20 hover:shadow-md transition-all"
                  >
                    <h3 className="font-bold text-[#181c1d] mb-2">{item.name}</h3>
                    {description && (
                      <p className="text-xs text-neutral-500 mb-3 line-clamp-2">{description}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      {prepTime && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">timer</span>
                          {prepTime}
                        </span>
                      )}
                      {cookTime && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">cooking</span>
                          {cookTime}
                        </span>
                      )}
                      {servings && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">person</span>
                          {servings}
                        </span>
                      )}
                    </div>

                    <div className="mt-3 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-1">
                      {Object.entries(d)
                        .filter(
                          ([k]) =>
                            !["nom", "name", "titre", "title"].includes(k.toLowerCase()) &&
                            k.toLowerCase() !== "description" &&
                            k.toLowerCase() !== (typeof prepTime === "string" ? "temps_preparation" : "prep_time") &&
                            k.toLowerCase() !== (typeof cookTime === "string" ? "temps_cuisson" : "cook_time") &&
                            k.toLowerCase() !== (typeof servings === "string" ? "portions" : "servings"),
                        )
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div key={key} className="text-xs">
                            <span className="text-neutral-400">{key}</span>
                            <p className="font-bold text-[#181c1d] truncate">{value}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
