import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const stores = [
  {
    name: "Naturalia Bio Santé",
    address: "142 Rue de Rivoli, 75001 Paris",
    status: "Ouvert",
    statusColor: "bg-green-100 text-green-700",
    distance: "1.2 km",
    time: "12 min",
    stock: "85% dispos",
    stockColor: "text-[#004f54]",
    disabled: false,
  },
  {
    name: "Biocoop Marais",
    address: "45 Rue de Turenne, 75003 Paris",
    status: "Ferme bientôt",
    statusColor: "bg-[#ff6b6b]/20 text-[#ae2f34]",
    distance: "2.8 km",
    time: "22 min",
    stock: "42% dispos",
    stockColor: "text-[#ae2f34]",
    disabled: false,
  },
  {
    name: "Franprix Bio",
    address: "12 Avenue des Champs-Élysées",
    status: "Fermé",
    statusColor: "bg-neutral-200 text-neutral-600",
    distance: "4.1 km",
    time: "35 min",
    stock: "Inconnu",
    stockColor: "text-neutral-500",
    disabled: true,
  },
];

const availableProducts = [
  {
    name: "Carottes Sablées Bio",
    price: "1.99€ / kg",
    status: "En stock",
    statusColor: "text-green-600",
    statusIcon: "check_circle",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkwYs7EWQmBnZLxPZVM8xRs_oN2khUk7dcOq7MbNGKyQufQEa_VbIT2M-Bz6YhMkKpHFq978G7ZdMuoygR7Ploz8xMoxkgZpMEbiAJda_lGGQOT4VME75cvppoSCuJqDE2W_HVpz8s4p4mPWQaytLj2xd7xZtQgxgPfQCtdY_Ag2sroPmnqNu1PU3MrkWuVVNrKfuVrhYYtEsgrNVz7Vu5QprUbpVQulYbjyKOz5QvcSkEbjH0jMp_SVUTaHnxGrTeFXeyX40RO8WZ",
  },
  {
    name: "Avocat Hass (Espagne)",
    price: "2.50€ / pièce",
    status: "En stock",
    statusColor: "text-green-600",
    statusIcon: "check_circle",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUx7H0VRjhqOyEw3ZJ3E5N4FSMhl7gdX3fII505w_KffHCA00JI2vBfnYgRO0eba05n7x0NkVmLQarYKt9WHgaBeScjYikuTwtOml6ErHHYDpeoGDYROoCyOP5o5Nd01oQsQ_PXVX0pAooCIaXKy-8sGPyWObwrvd-YFZ80mq_7YLBx2pJ2W4XOpc5v3HfLcKEOsviHGYAZV6GxROs8tb1gNUskbmU--301OQFfFqpHUw2I-aJBnZzooPGlJe03n6zl6d6QsLmsdX",
  },
  {
    name: "Mix de Poivrons Bio",
    price: "4.10€ / pack",
    status: "Stock faible",
    statusColor: "text-amber-600",
    statusIcon: "warning",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3XK9nvyuAmbDunU06WWEqCq9HUo1HNW7UAztJs2L2MV-mf7eB30awAQHZYhak35ek8DeLK-qEFfZSqrzjLHqMPow86Yax5wowZA_J2cd_ql50UPb7RYjtsdjy4cgfv6xfkq7PGYhd3WHIbrxlUjvVWCVUVTjXNdfDUpvCT0CCDZpqhusxzjwk2NKHWMvpFuFEUeFnCSmr1hDi5-ik6MpteV-nJ6zroJUwyxlFxmoJQFec1PWcBJqnvIc7JXI7cJpp_q_ooUHRRdpT",
  },
  {
    name: "Pommes Gala Bio",
    price: "2.80€ / kg",
    status: "En stock",
    statusColor: "text-green-600",
    statusIcon: "check_circle",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiiSA0r3e_rdGWVPr5KBQ9uxJ4SqpRsc9uUHsTUQAu6yrWdCcuVDePqb4kz4FBmZeYnjFJYuwl1FGKxKOqPV25qLjd5FCuJBl2Pgy90gntVhxGzp7X7byI4-jObqE_m8ItvfFHCDxCB4PdwjoVrxvkLXKE6ToWq53y0pfAmnQuIdwdSCfQkiOcImhrSsVF0PFcH7BfhnvyCEYE5JygrlDV1CELy7VfcaHRlsoKihoxDc215ulelCmPbF4yyByuadRNCxM5vQR2A-Jq",
  },
];

export default function MapPage() {
  return (
    <div className="bg-[#f7fafa] text-[#181c1d]">
      <Sidebar />
      <TopBar />

      <main className="ml-60 pt-[60px] h-screen flex flex-col">
        {/* Filter Header */}
        <section className="bg-white px-8 py-4 border-b border-neutral-100 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-[#181c1d]">Store Locator</h2>
            <div className="h-6 w-[1px] bg-neutral-200" />
            <div className="flex gap-2">
              {[
                { icon: "distance", label: "Moins de 5km", active: true },
                { icon: "eco", label: "Bio uniquement", active: false },
                { icon: "schedule", label: "Ouvert", active: false },
              ].map((f) => (
                <span
                  key={f.label}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 cursor-pointer transition-colors ${
                    f.active
                      ? "bg-[#004f54] text-white"
                      : "bg-[#ebeeee] text-[#3f4949] hover:bg-[#e6e9e9]"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">{f.icon}</span>
                  {f.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-neutral-500">12 commerces trouvés</span>
            <button className="flex items-center gap-2 px-4 py-2 border border-[#bec8c9] rounded-lg text-sm font-semibold hover:bg-neutral-50 transition-colors">
              <span className="material-symbols-outlined">tune</span>
              Filtrer
            </button>
          </div>
        </section>

        {/* Map + List Split */}
        <section className="flex-1 flex overflow-hidden">
          {/* Map */}
          <div className="w-[60%] relative bg-neutral-200 overflow-hidden">
            <img
              alt="Map"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(0.5)" }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHZK0PZeMQ04KxllEh4ry-37VA8apv3bDgGwOAFbGD9cVRXqKDskTd_jHiUh9ksSNc6eOviDpr1j6YMs3wvbMmYG_jq_J8L9L2hlesxNtwebh5Tgbm9vhfX8klSllX3zkSbkOLE7uvytEl5NPDz1HzeDb_WwJu68KoZ5_h-LYMyS-HE2A5ZjH-cYEYezR_Dkl0TTp3sOn3KbUgtFpQFA76KK7xNK_DGYYOJGzB5qWSUD8n2YeHowRJo9ct6xBnUujMjfrnZJBtksAS"
            />
            {/* Markers */}
            <div className="absolute top-[30%] left-[40%] group">
              <div className="bg-[#004f54] text-white p-2 rounded-full shadow-lg scale-110 cursor-pointer transform transition-transform group-hover:scale-125">
                <span className="material-symbols-outlined">storefront</span>
              </div>
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Naturalia - 1.2km
              </div>
            </div>
            <div className="absolute top-[50%] left-[60%] group">
              <div className="bg-[#ae2f34] text-white p-2 rounded-full shadow-lg cursor-pointer transform transition-transform group-hover:scale-125">
                <span className="material-symbols-outlined">shopping_basket</span>
              </div>
              <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-md text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Biocoop - 2.8km
              </div>
            </div>
            <div className="absolute top-[45%] left-[25%]">
              <div className="bg-[#6f797a] text-white p-2 rounded-full shadow-lg cursor-pointer">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
            </div>
            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2">
              {["add", "remove"].map((icon) => (
                <button key={icon} className="w-12 h-12 bg-white shadow-xl rounded-xl flex items-center justify-center hover:bg-neutral-50">
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
              <button className="w-12 h-12 bg-white shadow-xl rounded-xl flex items-center justify-center hover:bg-neutral-50 mt-4">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>
          </div>

          {/* Store List */}
          <div className="w-[40%] bg-[#f7fafa] overflow-y-auto custom-scrollbar border-l border-neutral-200">
            <div className="p-6 space-y-4">
              {stores.map((store) => (
                <div
                  key={store.name}
                  className={`bg-white p-5 rounded-xl shadow-sm border border-neutral-100 hover:border-[#004f54]/30 transition-all cursor-pointer ${store.disabled ? "opacity-70" : ""}`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#181c1d]">{store.name}</h3>
                      <p className="text-xs text-neutral-500 flex items-center gap-1 mt-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {store.address}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-[10px] font-bold rounded uppercase tracking-wider ${store.statusColor}`}>
                      {store.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 mb-4">
                    {[
                      { label: "Distance", value: store.distance, color: "" },
                      { label: "Temps", value: store.time, color: "" },
                      { label: "Stock", value: store.stock, color: store.stockColor },
                    ].map((stat) => (
                      <div key={stat.label} className="flex flex-col">
                        <span className="text-xs text-neutral-400">{stat.label}</span>
                        <span className={`text-sm font-bold ${stat.color || "text-[#181c1d]"}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      disabled={store.disabled}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                        store.disabled
                          ? "bg-neutral-200 text-neutral-500 cursor-not-allowed"
                          : "bg-[#004f54] text-white hover:bg-[#01696f]"
                      }`}
                    >
                      {store.disabled ? "Indisponible" : "Voir les produits"}
                    </button>
                    <button
                      className={`w-10 h-10 border border-[#bec8c9] flex items-center justify-center rounded-lg hover:bg-neutral-50 ${store.disabled ? "text-neutral-400" : "text-[#004f54]"}`}
                    >
                      <span className="material-symbols-outlined">directions</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Products Strip */}
        <section className="bg-white border-t border-neutral-200 shadow-2xl relative z-[55]">
          <div className="px-8 py-3 flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#004f54] rounded-full animate-pulse" />
              <h4 className="text-sm font-semibold text-[#181c1d]">
                Produits disponibles dans ce commerce (Naturalia)
              </h4>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-2">
                {availableProducts.slice(0, 3).map((p) => (
                  <img key={p.name} className="w-8 h-8 rounded-full border-2 border-white object-cover" src={p.img} alt={p.name} />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#ebeeee] flex items-center justify-center text-[10px] font-bold text-[#3f4949]">
                  +12
                </div>
              </div>
              <span className="material-symbols-outlined text-[#004f54]">keyboard_arrow_up</span>
            </div>
          </div>
          <div className="max-h-[120px] overflow-x-auto px-8 py-4 flex gap-6 custom-scrollbar">
            {availableProducts.map((product) => (
              <div
                key={product.name}
                className="flex-shrink-0 flex items-center gap-4 bg-[#f1f4f4] p-3 rounded-xl border border-neutral-100 min-w-[280px]"
              >
                <img alt={product.name} className="w-14 h-14 rounded-lg object-cover" src={product.img} />
                <div>
                  <p className="text-sm font-bold">{product.name}</p>
                  <p className="text-xs text-neutral-500">{product.price}</p>
                  <span className={`text-[10px] font-bold flex items-center gap-1 mt-1 ${product.statusColor}`}>
                    <span className="material-symbols-outlined text-xs">{product.statusIcon}</span>
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
