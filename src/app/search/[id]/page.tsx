import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import Link from "next/link";

export default function ProductDetailPage() {
  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar />

      <main className="ml-60 pt-[60px] min-h-screen">
        <div className="max-w-6xl mx-auto px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#3f4949] mb-6">
            <Link className="hover:text-[#004f54]" href="/search">Produits</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link className="hover:text-[#004f54]" href="/search">Céréales</Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-[#181c1d] font-bold">Flocons d&apos;Avoine Bio</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column */}
            <div className="lg:w-[55%] flex flex-col gap-6">
              <div className="bg-[#f7fafa] p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)] flex flex-col items-center">
                <div className="w-full h-[400px] rounded-lg overflow-hidden mb-6 bg-white flex items-center justify-center">
                  <img
                    alt="Product"
                    className="w-full h-full object-contain p-8"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCriwq-7Tbr2Tq3S8E2JAUpUciqgyBdKefciawUMibBccQND4poiFclbZiDwzvvd6Qzb0UvjJPPXQ38vjsBy_UBZICjzOhBdU0ml4RTWSfnMEmC2Pc88Gpx49y4-BiKu4L5IyNPzNK-YbuI_szhCDAmlf-ICveDTtyCQVJh7qWBwSjRGxG3ivzyr9eQtec6LbQnUNrPaTls5CbYviXc9-eH8NVzmVV4JKTa1gPkYF57yJWo0Nc0W7gjynJfmTtZiptLv0tfhgNzFsRB"
                  />
                </div>
                <div className="grid grid-cols-2 w-full gap-4">
                  <div className="bg-[#f1f4f4] p-4 rounded-lg">
                    <span className="text-xs font-semibold text-[#6f797a] block mb-1">Marque</span>
                    <span className="font-bold text-[#004f54]">NaturaBio France</span>
                  </div>
                  <div className="bg-[#f1f4f4] p-4 rounded-lg">
                    <span className="text-xs font-semibold text-[#6f797a] block mb-1">Labels</span>
                    <div className="flex gap-2">
                      <span className="bg-[#004f54]/10 text-[#004f54] text-[10px] font-bold px-2 py-0.5 rounded uppercase">BIO</span>
                      <span className="bg-[#ae2f34]/10 text-[#ae2f34] text-[10px] font-bold px-2 py-0.5 rounded uppercase">VEGAN</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 w-full p-4 border-2 border-dashed border-[#bec8c9] rounded-lg flex flex-col items-center gap-2 opacity-60">
                  <span className="material-symbols-outlined text-4xl">barcode</span>
                  <span className="text-xs font-mono">3 560070 139622</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-[45%] flex flex-col gap-6">
              <div>
                <h1 className="text-4xl font-bold text-[#181c1d] mb-2">Flocons d&apos;Avoine Entiers Bio</h1>
                <span className="bg-[#e7f5e9] text-[#2e7d32] font-bold px-3 py-1 rounded-full text-xs flex items-center gap-1 w-fit">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Compatible diabétique
                </span>
              </div>

              {/* Nutri-Score */}
              <div className="bg-[#f7fafa] p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)]">
                <span className="text-sm font-semibold text-[#3f4949] block mb-4">Profil Nutritionnel Global</span>
                <div className="flex items-center h-14 w-full rounded-lg overflow-hidden">
                  {[
                    { letter: "A", bg: "#038141", active: true },
                    { letter: "B", bg: "#85bb2f", active: false },
                    { letter: "C", bg: "#fecb02", active: false },
                    { letter: "D", bg: "#ee8100", active: false },
                    { letter: "E", bg: "#e63e11", active: false },
                  ].map((s) => (
                    <div
                      key={s.letter}
                      className={`flex-1 h-full flex items-center justify-center ${!s.active ? "opacity-30" : "border-4 border-white"}`}
                      style={{ backgroundColor: s.bg }}
                    >
                      <span className={`font-black text-white ${s.active ? "text-2xl" : "text-lg"}`}>{s.letter}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GI Gauge */}
              <div className="bg-[#f7fafa] p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)]">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-sm font-semibold text-[#3f4949]">Indice Glycémique (IG)</span>
                  <span className="text-2xl font-bold text-[#2e7d32]">40</span>
                </div>
                <div className="relative h-4 bg-[#e0e3e3] rounded-full overflow-hidden flex">
                  <div className="h-full w-[35%] bg-green-500" />
                  <div className="h-full w-[35%] bg-orange-400" />
                  <div className="h-full w-[30%] bg-red-500" />
                  <div className="absolute top-0 left-[40%] h-full w-1 bg-white shadow-lg border-x-2 border-[#004f54] z-10" />
                </div>
                <div className="flex justify-between text-[10px] font-bold mt-2 text-[#6f797a]">
                  <span>BAS (0-55)</span>
                  <span>MOYEN (56-69)</span>
                  <span>ÉLEVÉ (70+)</span>
                </div>
              </div>

              {/* Nutrition Table */}
              <div className="bg-[#f7fafa] p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)]">
                <span className="text-sm font-semibold text-[#3f4949] block mb-4">Tableau Nutritionnel (pour 100g)</span>
                <div className="space-y-3">
                  {[
                    { label: "Énergie", value: "375 kcal", color: "" },
                    { label: "Glucides (dont sucres)", value: "59g", sub: "(0.7g sucres)", subColor: "text-[#ae2f34]", color: "" },
                    { label: "Fibres alimentaires", value: "10.2g", color: "text-[#2e7d32]" },
                    { label: "Protéines", value: "13g", color: "" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-[#bec8c9]/30 last:border-0">
                      <span className="text-sm text-[#3f4949]">{row.label}</span>
                      <div className="text-right">
                        <span className={`font-bold ${row.color || "text-[#181c1d]"}`}>{row.value}</span>
                        {row.sub && <span className={`text-xs block ${row.subColor}`}>{row.sub}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className="bg-[#004f54]/5 p-5 rounded-xl border border-[#004f54]/20">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#004f54]">lightbulb</span>
                  <div>
                    <h4 className="font-bold text-[#004f54] text-sm mb-1">Le conseil du nutritionniste</h4>
                    <p className="text-sm text-[#3f4949] mb-2">
                      Les flocons d&apos;avoine entiers contiennent des bêta-glucanes qui aident à réguler la glycémie post-prandiale...
                    </p>
                    <button className="text-[#004f54] font-bold text-xs hover:underline flex items-center">
                      Lire la suite
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Store Table */}
          <section className="mt-12 bg-[#f7fafa] rounded-2xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)] overflow-hidden">
            <div className="p-6 border-b border-[#bec8c9]">
              <h2 className="text-2xl font-semibold text-[#181c1d] flex items-center gap-3">
                <span className="material-symbols-outlined text-[#004f54]">shopping_cart</span>
                Où acheter ce produit à Annaba
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#f1f4f4] text-xs font-semibold text-[#6f797a] uppercase tracking-wider">
                    <th className="px-6 py-4">Commerce</th>
                    <th className="px-6 py-4">Quartier</th>
                    <th className="px-6 py-4">Distance</th>
                    <th className="px-6 py-4">Prix</th>
                    <th className="px-6 py-4">Stock</th>
                    <th className="px-6 py-4">Horaires</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#bec8c9]/30">
                  {[
                    { store: "Cevital Hypermarket", type: "Supermarché", quartier: "Sidi Brahim", dist: "1.2 km", price: "450 DZD", stock: "EN STOCK", stockColor: "text-[#2e7d32] bg-[#e7f5e9]", hours: "08:00 - 22:00" },
                    { store: "Épicerie Bio-Santé", type: "Spécialisé", quartier: "Cours de la Révolution", dist: "0.5 km", price: "490 DZD", stock: "3 RESTANTS", stockColor: "text-[#ae2f34] bg-[#ae2f34]/10", hours: "09:00 - 19:30" },
                    { store: "Supérette Le Printemps", type: "Proximité", quartier: "Les Plaines", dist: "2.8 km", price: "460 DZD", stock: "EN STOCK", stockColor: "text-[#2e7d32] bg-[#e7f5e9]", hours: "07:00 - 23:00" },
                  ].map((row) => (
                    <tr key={row.store} className="hover:bg-[#004f54]/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-[#181c1d]">{row.store}</span>
                          <span className="text-xs text-[#6f797a]">{row.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">{row.quartier}</td>
                      <td className="px-6 py-4 text-sm">{row.dist}</td>
                      <td className="px-6 py-4 font-bold text-[#004f54]">{row.price}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${row.stockColor}`}>{row.stock}</span>
                      </td>
                      <td className="px-6 py-4 text-sm">{row.hours}</td>
                      <td className="px-6 py-4">
                        <button className="bg-[#004f54] text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:opacity-90 transition-opacity">
                          Y aller
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
