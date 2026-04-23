import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

export default function DashboardPage() {
  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar />

      <main className="ml-60 pt-[60px] p-6 min-h-screen">
        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "bookmark", bg: "bg-teal-50", color: "text-[#004f54]", label: "Produits sauvegardés", value: "24" },
              { icon: "restaurant", bg: "bg-orange-50", color: "text-[#6e3815]", label: "Recettes essayées", value: "12" },
              { icon: "menu_book", bg: "bg-blue-50", color: "text-blue-600", label: "Articles lus", value: "8" },
              { icon: "inventory_2", bg: "bg-red-50", color: "text-[#ae2f34]", label: "Mise à jour stock", value: "Il y a 2h", accent: true },
            ].map((card) => (
              <div
                key={card.label}
                className={`bg-white p-6 rounded-xl custom-shadow flex items-center gap-4 ${card.accent ? "border-l-4 border-[#ae2f34]" : ""}`}
              >
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

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Recommended Products */}
            <div className="lg:col-span-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-3xl font-bold">Recommandé pour vous</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-[#004f54] text-white rounded-full text-xs font-semibold">Tout</button>
                  <button className="px-4 py-2 bg-[#e0e3e3] text-[#181c1d] rounded-full text-xs font-semibold">Nutri-Score A</button>
                  <button className="px-4 py-2 bg-[#e0e3e3] text-[#181c1d] rounded-full text-xs font-semibold">Bas IG</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Card 1 */}
                <div className="bg-white rounded-xl overflow-hidden custom-shadow group">
                  <div className="relative h-48">
                    <img
                      alt="Fresh Salad"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL6cyhwfjl1jS1GuygWTynzWxjdFYRBWviWG5OGc9U5ngtf3NwFcrx5NXBK1Nh8Gvdjbbp4jPzoIoqMO9Dsks_L4KJ5jrw7My86-DZWMHlXGHFE1bgiBV1-e4uNXMsBgYGHPCbAkI_9N0r8HxCq4_0pmNRMOdOFjKWPNLCbvdW65FFQ6hN4wIYJXor63B2BcmXDqiG5-DwetPqxDvabJkDTuwNBZzEc9Pvw-KeEEHbXb3KTyMPa9uSBV_3WiWQgmDv7runBrwiUscI"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">NUTRI-SCORE A</span>
                      <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded">IG 15</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-semibold text-[#3f4949] mb-1">Bio &amp; Frais</p>
                        <h4 className="font-bold">Mélange de Pousses Bio</h4>
                      </div>
                      <span className="text-2xl font-bold text-[#004f54]">3,49€</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-neutral-400">store</span>
                        <span className="text-xs font-semibold text-[#3f4949]">Naturalia</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-[10px] font-bold uppercase text-neutral-500">En stock</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Card 2 */}
                <div className="bg-white rounded-xl overflow-hidden custom-shadow group">
                  <div className="relative h-48">
                    <img
                      alt="Almond Milk"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlfuA9VWVGwmWOLpHY27tT76Xx2HohEe2KkAEWhSv8WM4DzyOAIwd2Kf988678N66-VNLEwM6Dkz1fge-23BJGobnmKhZK-w0WoDtrJ27d_6f47nBIfGgfkXNsn7xMGM5wUJtWcQFtLogxPvCnm5mw_NAGzQOQ88n77azdzAOCFWbS1zOQnf0ZME02LpaiWJrFmDXLDPHFBQlcRhHEYjit_13Vsqccb5xSl_z2TEH47bQR8nhGFBAazZdTJUDjgNFwhrf6lQIjxMNU"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">NUTRI-SCORE A</span>
                      <span className="bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded">IG 30</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-semibold text-[#3f4949] mb-1">Lait Végétal</p>
                        <h4 className="font-bold">Lait d&apos;Amande Non Sucré</h4>
                      </div>
                      <span className="text-2xl font-bold text-[#004f54]">2,85€</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-neutral-400">store</span>
                        <span className="text-xs font-semibold text-[#3f4949]">Carrefour City</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-orange-400" />
                        <span className="text-[10px] font-bold uppercase text-neutral-500">Stock faible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Recipe & Tips */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-white rounded-xl overflow-hidden custom-shadow">
                <div className="relative h-40">
                  <img
                    alt="Healthy Plate"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM7CnZ6EzuBDyMlkStGlfoLEN7VmtITm9eQOacEfdQC-dOIe_VL4hPK6PrmxljP2YV7EuGx6wM9sUcUZb811R9mnA3odgB5vlb1agjkWfsrPYp2U2J3OdeJ0CFfAk7nY_WaTv1LMQZ4NN-Ncd20VqJT2Pnn4IF4RCkabfNuyBotxGDTTQOCZR-FBmm29tzQkE0vtMQkHg77zsYicndOOAnDG58obgEXnKOYpfQf8u7QjVdfbN943T20fpYkMWNacAmIzQob3BP6L__"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#ae2f34] text-white text-[10px] font-bold px-2 py-1 rounded mb-1 inline-block">
                      RECETTE DU JOUR
                    </span>
                    <h3 className="text-white font-bold text-lg">Bowl de Quinoa aux Légumes Rôtis</h3>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-neutral-500 text-sm">
                      <span className="material-symbols-outlined">schedule</span>
                      <span>25 min</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm">
                      <span className="material-symbols-outlined">fitness_center</span>
                      <span>Moyen</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-[#004f54] text-white rounded-lg font-bold text-sm">
                    Voir la recette
                  </button>
                </div>
              </div>

              {/* Tip Card */}
              <div className="bg-[#01696f] text-[#97e6ec] p-6 rounded-xl custom-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-teal-100">lightbulb</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Conseil nutritionnel</h4>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Privilégiez les céréales complètes pour stabiliser votre glycémie tout au long de la matinée. Le
                      quinoa est un excellent choix riche en protéines !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Store List */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 bg-white rounded-xl overflow-hidden custom-shadow h-[400px] relative">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 border border-neutral-200">
                <span className="w-2 h-2 rounded-full bg-[#004f54]" />
                <span className="text-xs font-bold">Commerces partenaires à proximité</span>
              </div>
              <div className="w-full h-full bg-slate-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/2.3412,48.8566,13,0/1200x800?access_token=none')] bg-cover opacity-60" />
                <div className="absolute top-[40%] left-[45%]">
                  <span
                    className="material-symbols-outlined text-[#004f54] text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
                <div className="absolute top-[60%] left-[30%]">
                  <span
                    className="material-symbols-outlined text-[#ae2f34] text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
                <div className="absolute top-[25%] left-[70%]">
                  <span
                    className="material-symbols-outlined text-[#004f54] text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-xl custom-shadow p-6">
              <h3 className="font-bold text-2xl mb-6">Les plus proches</h3>
              <div className="space-y-6">
                {[
                  { name: "Naturalia Marais", dist: "350m", open: true },
                  { name: "Carrefour City", dist: "800m", open: true },
                  { name: "Bio C' Bon", dist: "1.2km", open: false },
                ].map((store) => (
                  <div key={store.name} className="flex items-center justify-between pb-4 border-b border-neutral-100 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-neutral-600">storefront</span>
                      </div>
                      <div>
                        <p className="font-bold">{store.name}</p>
                        <p className="text-xs font-semibold text-neutral-500">
                          {store.dist} • {store.open ? "Ouvert" : "Ferme à 20h"}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-neutral-400">chevron_right</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border border-neutral-200 text-[#181c1d] rounded-lg font-bold text-sm hover:bg-neutral-50 transition-colors">
                Explorer la carte
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
