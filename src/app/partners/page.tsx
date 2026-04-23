const partnerNavItems = [
  { href: "#", icon: "dashboard", label: "Tableau de bord", active: true },
  { href: "#", icon: "inventory_2", label: "Inventaire", active: false },
  { href: "#", icon: "analytics", label: "Analytics", active: false },
  { href: "#", icon: "settings", label: "Paramètres", active: false },
];

const products = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCeE9b6Gq0R7k31UQvCgYXXPjBFY9tdy8nn0yz1oj5SBR2T5JydLaShOugPlx_kyGnL92cN8HVZQ0K5ypU4rAa5iMtbHfJEEDSu5Dgq1GdYf_ypWBSIuBNZ88gozv3Mkh6GEUYwEFYIIhBXjXTY6fBshC1Lq9_Pir7k4pce5yy423dbo_WBtQGpsrjG0e7fxD9r2H5_wqvriGAkOSbDJwYyDL53crjq5rz7VpZwpzOyRGOvn-wLtAOjiqh7Q4CQBaBX9OVuAoMbsD7",
    name: "Pain Artisanal S.G.",
    category: "Boulangerie",
    price: "4.50",
    qty: "24",
    enabled: true,
    qtyColor: "",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdWvAFGYAqNABmrWDMzinAVkqhX4KUM8xIGlNoAi8yke-wDa-zfXxtMiroVOsoTdWA-UoKDSOv4FdbLEZ62RKBLi2X5hylth1yvJTDFu31xqs6d2P_UwKWbR6H8TZ47-b4XDmb61HElKnupfLvHKoewHHNVzUpkTpso8xSPhUqFJ3awmSU34iGaxy0Bk2m2ZGRp0Tux8hh9LcHc_g-9e0cuh5UOil4sStdt7GCshYN2G2d0I_gK8qRSkN8FO3KV52W4My9RTF-khby",
    name: "Lait Amande Bio 1L",
    category: "Boissons",
    price: "3.20",
    qty: "3",
    enabled: true,
    qtyColor: "text-[#ae2f34]",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANy0-7dTeY4WSRLcC_xjeF6208oRQc_g3hSdTBK_DM0WWJn3vvzgu1WsSiN_j1knYFR36LSGh1XciOGBXbO5p_gIWqIVXZfMmlJ40eZSzDva1aaHCD8F3e2XWDF4F4dolbOLPClevOAHSbUFp6nyvdIGZwf05GwSKvbVLBRLAhh-INA-uiRtcBgO9I_uJ0kgO3w4YKktPfJI4CQLJiqn__WyKuahexKf5j2vn1iIdPCGJY6z17HIL9GUPHfGHKGA7lLM2tEj83Dz3Z",
    name: "Chocolat Noir 85%",
    category: "Épicerie",
    price: "2.95",
    qty: "48",
    enabled: false,
    qtyColor: "",
  },
];

const topSearched = [
  { name: "Pain sans gluten", pts: 850, pct: 85 },
  { name: "Lait d'Amande Bio", pts: 620, pct: 62 },
  { name: "Huile d'Olive Extra", pts: 510, pct: 51 },
  { name: "Muesli Keto", pts: 480, pct: 48 },
  { name: "Tofu Soyeux", pts: 390, pct: 39 },
];

export default function PartnersPage() {
  return (
    <div className="bg-[#f7fafa] min-h-screen text-[#181c1d]">
      {/* Partner Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-60 border-r border-neutral-200 bg-[#F9F8F5] flex flex-col gap-2 py-6 px-0 z-50">
        <div className="px-6 mb-8">
          <h1 className="text-xl font-bold tracking-tight text-[#01696F]">SmartHeart</h1>
          <p className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">Dietary Intelligence</p>
        </div>
        <nav className="flex-1">
          {partnerNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-all duration-200 ease-in-out hover:pl-7 ${
                item.active
                  ? "text-[#01696F] bg-teal-50 border-r-4 border-[#01696F] font-semibold"
                  : "text-neutral-500 hover:bg-neutral-100"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <div className="mt-8 px-6">
            <p className="text-[10px] font-bold text-neutral-400 uppercase mb-2">Partenaires</p>
            <a href="#" className="flex items-center gap-3 py-2 text-neutral-500 hover:text-[#01696F]">
              <span className="material-symbols-outlined">handshake</span>
              Partenaires
            </a>
          </div>
        </nav>
        <div className="px-6 mt-auto">
          <div className="flex items-center gap-3 p-2 bg-white rounded-xl shadow-sm border border-neutral-100">
            <img
              alt="Store"
              className="w-10 h-10 rounded-lg object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqYAgexZIf1edyxQxJt2U3RbXMA62i4vGeJ3o80LQ77rgIYSjgJ5pw_c1mSq_yg3qFP9nrM4ZV3KCt-e8AkdQjnxXnzKBpsulGneazudQGDp_5rK_3ZqJqBhdCbuTm9gffwGpLlz4nNqcoWWCwnTvIiId2SELJtZufE4jyumI0UOT0kIRjgnV6w-uyOT6zhZbpRfZ4GY1cE-jxwOTBK1UyIxYwvmwZV4MeEyBrYKhXRxqRq0hyR9LqWTn_kSgTCm1vGJCsNZhsHD2"
            />
            <div className="overflow-hidden">
              <p className="font-bold text-xs truncate">BioMarché Étoile</p>
              <p className="text-[10px] text-neutral-400">ID: 8829-SH</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Top Bar */}
      <header className="fixed top-0 right-0 left-60 h-[60px] bg-[#F9F8F5]/80 backdrop-blur-md border-b border-neutral-200 flex items-center justify-between px-6 gap-4 z-40">
        <div className="flex items-center bg-white border border-neutral-200 rounded-full px-4 py-1.5 w-full max-w-md focus-within:ring-2 focus-within:ring-teal-500/20">
          <span className="material-symbols-outlined text-neutral-400 text-lg">search</span>
          <input className="bg-transparent border-none text-sm w-full outline-none" placeholder="Rechercher dans l'inventaire..." type="text" />
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-neutral-200/50 rounded-full transition-colors relative">
            <span className="material-symbols-outlined text-neutral-600">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ae2f34] rounded-full border-2 border-white" />
          </button>
          <div className="h-8 w-[1px] bg-neutral-200 mx-1" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#01696F]">Admin</span>
            <img
              alt="Admin"
              className="w-8 h-8 rounded-full object-cover border border-neutral-200"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFpdMJ4qrdo1F9SUFiex20uhdKYXd02LNrRBHJ0BCOMg93Aq3dOYrnK7-9xvceCVMbfPdcDcqLz3eMYJPtF0-K0Qbe3oUedZ6jv2hwBmv3LK-Mq0dKHDsYm4f8GQW48PG7W1lKGfl13mvvlv2fF3iDYy7zD_844oJJ6MIOfQBm_vKWhv1GYMlZP_x8EUDwjqYXipHvApw7jperilaGvpJAPnwAkgI6s6vATEBAniENb74iUGw0pycPtFtIPr_N7Cio3XK6Oo3Md_z3"
            />
          </div>
        </div>
      </header>

      <main className="pl-60 pt-[60px]">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Alert Banner */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-center gap-4">
            <div className="bg-yellow-400 text-yellow-900 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-yellow-900 text-sm">Action requise : Rupture de stock imminente</h4>
              <p className="text-yellow-800 text-xs">
                3 produits de la catégorie &ldquo;Sans Gluten&rdquo; seront épuisés d&apos;ici 48 heures selon vos prévisions de vente.
              </p>
            </div>
            <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-900 px-4 py-2 rounded-lg text-xs font-bold transition-colors">
              Gérer le stock
            </button>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Ventes du jour", value: "1,284 €", trend: "+12%", trendColor: "text-teal-600" },
              { label: "Vues Total", value: "8.4k", trend: "+5.2%", trendColor: "text-teal-600" },
              { label: "Articles Actifs", value: "152", trend: "Stable", trendColor: "text-neutral-400" },
              { label: "Alertes Stock", value: "08", trend: "Important", trendColor: "text-[#ae2f34]", valueColor: "text-[#ae2f34]" },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-white p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)] border border-neutral-100">
                <p className="text-neutral-500 text-xs font-bold uppercase mb-1">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-3xl font-bold ${kpi.valueColor || "text-[#181c1d]"}`}>{kpi.value}</span>
                  <span className={`text-xs font-bold ${kpi.trendColor}`}>{kpi.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Line Chart */}
            <div className="bg-white p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)] border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-[#181c1d]">Vues des produits</h3>
                <select className="text-xs font-bold text-neutral-500 border-none bg-neutral-100 rounded-lg py-1 px-3">
                  <option>7 derniers jours</option>
                  <option>30 derniers jours</option>
                </select>
              </div>
              <div className="h-64 flex flex-col justify-end gap-2 px-2">
                <div className="flex items-end justify-between h-full gap-4 relative">
                  <div className="absolute inset-0 border-b border-neutral-100" />
                  <div className="absolute inset-0 bottom-1/4 border-b border-neutral-100" />
                  <div className="absolute inset-0 bottom-2/4 border-b border-neutral-100" />
                  <div className="absolute inset-0 bottom-3/4 border-b border-neutral-100" />
                  <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      points="0,150 50,130 100,160 150,80 200,90 250,40 300,70 350,110 400,60 450,50 500,20"
                      stroke="#01696F"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                    <path
                      d="M0,150 50,130 100,160 150,80 200,90 250,40 300,70 350,110 400,60 450,50 500,20 V250 H0 Z"
                      fill="url(#gradient-line)"
                      opacity="0.1"
                    />
                    <defs>
                      <linearGradient id="gradient-line" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#01696F", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#01696F", stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-neutral-400 mt-2">
                  {["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)] border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-[#181c1d]">Produits les plus recherchés</h3>
                <span className="material-symbols-outlined text-neutral-400">more_horiz</span>
              </div>
              <div className="space-y-4">
                {topSearched.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-[#181c1d] mb-1">
                      <span>{item.name}</span>
                      <span>{item.pts} pts</span>
                    </div>
                    <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#01696f] rounded-full" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white rounded-xl shadow-[0px_2px_4px_rgba(40,37,29,0.05)] border border-neutral-100 overflow-hidden">
            <div className="p-6 border-b border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#181c1d]">Gestion de l&apos;Inventaire</h2>
                <p className="text-sm text-neutral-500">Gérez vos produits et leur visibilité en temps réel.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">search</span>
                  <input
                    className="pl-10 pr-4 py-2 border border-neutral-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none"
                    placeholder="Filtrer..."
                    type="text"
                  />
                </div>
                <button className="bg-[#01696F] hover:bg-[#004f54] text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                  <span className="material-symbols-outlined text-lg">add</span>
                  Ajouter un produit
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider bg-neutral-50">
                    <th className="px-6 py-4">Produit</th>
                    <th className="px-6 py-4">Catégorie</th>
                    <th className="px-6 py-4">Prix (€)</th>
                    <th className="px-6 py-4">Quantité</th>
                    <th className="px-6 py-4">Disponibilité</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {products.map((product, i) => (
                    <tr key={product.name} className={`hover:bg-teal-50/30 transition-colors ${i % 2 === 1 ? "bg-[#f1f4f4]" : ""}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img alt={product.name} className="w-10 h-10 rounded-lg object-cover" src={product.img} />
                          <span className="font-bold text-sm">{product.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-neutral-100 text-neutral-600 text-[10px] font-bold px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <input className="w-16 bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none" defaultValue={product.price} type="text" />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          className={`w-16 bg-transparent border-none p-0 text-sm font-bold focus:ring-0 outline-none ${product.qtyColor}`}
                          defaultValue={product.qty}
                          type="number"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input defaultChecked={product.enabled} className="sr-only peer" type="checkbox" />
                          <div className="w-9 h-5 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-teal-600" />
                        </label>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-1 hover:bg-neutral-100 rounded text-neutral-400">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-neutral-100 flex items-center justify-between text-sm text-neutral-500">
              <span>Affichage de 1-3 sur 152 produits</span>
              <div className="flex gap-2">
                <button className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
