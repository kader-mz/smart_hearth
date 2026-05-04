import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import { requireAuth, getHealthProfile } from "@/lib/auth";
import { getDashboardProducts } from "@/lib/queries/products";
import { ProductImage } from "@/components/ui/ProductImage";
import { getRecipes } from "@/lib/queries/recipes";
import { getPartners } from "@/lib/queries/partners";
import Link from "next/link";

export default async function DashboardPage() {
  const [profile, healthProfile, products, recipes, partners] = await Promise.all([
    requireAuth(),
    getHealthProfile(),
    getDashboardProducts(4),
    getRecipes({ featured: true, limit: 3 }),
    getPartners(),
  ]);

  const firstName = profile.full_name?.split(" ")[0] ?? "vous";

  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar userName={profile.full_name ?? "Utilisateur"} userAvatar={profile.avatar_url ?? undefined} />

      <main className="ml-60 pt-[60px] p-6 min-h-screen">
        <div className="max-w-[1440px] mx-auto space-y-8">

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "bookmark",   bg: "bg-teal-50",   color: "text-[#004f54]", label: "Produits sauvegardés", value: "0" },
              { icon: "restaurant", bg: "bg-orange-50", color: "text-[#6e3815]", label: "Recettes essayées",    value: "0" },
              { icon: "menu_book",  bg: "bg-blue-50",   color: "text-blue-600",  label: "Articles lus",         value: "0" },
              {
                icon: "favorite", bg: "bg-red-50", color: "text-[#ae2f34]", accent: true,
                label: "Objectif calorique",
                value: healthProfile?.tdee_kcal ? `${Math.round(healthProfile.tdee_kcal)} kcal` : "—",
              },
            ].map((card) => (
              <div key={card.label} className={`bg-white p-6 rounded-xl custom-shadow flex items-center gap-4 ${card.accent ? "border-l-4 border-secondary" : ""}`}>
                <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center ${card.color}`}>
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#3f4949]">{card.label}</p>
                  <p className="text-2xl font-bold">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Produits recommandés */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Bonjour, {firstName} 👋</h2>
                <Link href="/search" className="text-sm font-semibold text-[#004f54] hover:underline">
                  Voir tout →
                </Link>
              </div>

              {products.length === 0 ? (
                <div className="bg-white rounded-xl custom-shadow p-12 text-center text-outline">
                  <span className="material-symbols-outlined text-5xl mb-3 block text-outline-variant">inventory_2</span>
                  <p className="font-semibold">Aucun produit encore disponible.</p>
                  <p className="text-sm mt-1">Ajoutez des produits dans Supabase pour les voir ici.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((product) => (
                    <Link key={product.id} href={`/search/${product.id}`}
                      className="bg-white rounded-xl overflow-hidden custom-shadow group block">
                      <div className="relative h-48 bg-surface-container-low">
                        <ProductImage
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.nutri_score && (
                            <span className={`px-2 py-0.5 font-bold text-lg rounded-md text-white ${{ A: "bg-emerald-600", B: "bg-yellow-500", C: "bg-orange-500", D: "bg-orange-700", E: "bg-red-600" }[product.nutri_score]}`}>
                              {product.nutri_score}
                            </span>
                          )}
                          {product.glycemic_index !== null && (
                            <span className="bg-[#004f54] text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                              IG {product.glycemic_index}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-xs font-semibold text-[#3f4949] mb-1">{product.brand ?? "—"}</p>
                        <h4 className="font-bold">{product.name}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Recette + Conseil */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {recipes[0] ? (
                <div className="bg-white rounded-xl overflow-hidden custom-shadow">
                  <div className="relative h-40">
                    <ProductImage
                      src={recipes[0].image_url}
                      alt={recipes[0].title}
                      className="w-full h-full object-cover"
                      placeholderClassName="w-full h-full bg-surface-container-low flex items-center justify-center"
                      iconSize="text-4xl"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded mb-1 inline-block">
                        RECETTE DU JOUR
                      </span>
                      <h3 className="text-white font-bold">{recipes[0].title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4 text-neutral-500 text-sm">
                      {recipes[0].prep_time_min && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">schedule</span>
                          {recipes[0].prep_time_min} min
                        </span>
                      )}
                      {recipes[0].calories_kcal && (
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">local_fire_department</span>
                          {recipes[0].calories_kcal} kcal
                        </span>
                      )}
                    </div>
                    <Link href="/recipes" className="block w-full py-3 bg-[#004f54] text-white rounded-lg font-bold text-sm text-center">
                      Voir la recette
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl custom-shadow p-8 text-center text-outline">
                  <span className="material-symbols-outlined text-4xl mb-2 block text-outline-variant">restaurant_menu</span>
                  <p className="text-sm">Aucune recette disponible.</p>
                </div>
              )}

              <div className="bg-[#01696f] text-[#97e6ec] p-6 rounded-xl custom-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-teal-100">lightbulb</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Conseil du jour</h4>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {healthProfile?.health_conditions?.includes("diabetic")
                        ? "Privilégiez les aliments à IG bas (< 55) pour stabiliser votre glycémie tout au long de la journée."
                        : "Visez 5 portions de légumes et fruits par jour pour un apport optimal en micronutriments."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commerces proches */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-xl overflow-hidden custom-shadow h-70 relative">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 border border-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#004f54]" />
                <span className="text-xs font-bold">Commerces partenaires</span>
              </div>
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                <div className="text-center text-outline">
                  <span className="material-symbols-outlined text-5xl mb-2 block text-outline-variant">map</span>
                  <Link href="/map" className="text-sm text-[#004f54] hover:underline font-semibold">
                    Ouvrir la carte →
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl custom-shadow p-6">
              <h3 className="font-bold text-2xl mb-6">Commerces proches</h3>
              {partners.length === 0 ? (
                <p className="text-sm text-outline text-center py-4">Aucun commerce partenaire.</p>
              ) : (
                <div className="space-y-4">
                  {partners.slice(0, 3).map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                          <span className="material-symbols-outlined text-neutral-600">storefront</span>
                        </div>
                        <div>
                          <p className="font-bold text-sm">{partner.name}</p>
                          <p className="text-xs font-semibold text-neutral-500">{partner.city ?? "—"}</p>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-neutral-400">chevron_right</span>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/map" className="block w-full mt-6 py-3 border border-neutral-200 text-[#181c1d] rounded-lg font-bold text-sm text-center hover:bg-neutral-50 transition-colors">
                Explorer la carte
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
