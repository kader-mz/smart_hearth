import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import Link from "next/link";

const products = [
  {
    id: "1",
    score: "A",
    scoreBg: "bg-emerald-600",
    ig: "IG 35",
    name: "Pâtes de Lentilles Corail Bio",
    price: "4,95€",
    desc: "Riches en protéines végétales et en fibres, parfait pour un index glycémique maîtrisé.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGYd8n8239yApjqTwzTdMII268R_RYo3B4fmZnwlfbyhGAS6gv9V9wDi3ZDMnba-qd0i8g1tQwM097NVf9bos1iQMyMXgKy24u3leOhrRPDSKi9pGAh3eNBzYTrRIitHQefTXHNZ_lBQ6lBApcVClYsPK0G6An_yWpSCwZSvPGr0O5ll4-I2LfvvEo0Rb0T6NlLHBfr386T2Qw5w1IIhWvLRV02yeFs6UZnU_jvD6kw_O0ZGUG9trhb6MlBKCBvAHYH4Lzsh6umPkp",
    favorited: true,
  },
  {
    id: "2",
    score: "B",
    scoreBg: "bg-yellow-500",
    ig: "IG 42",
    name: "Quinoa Royal des Andes",
    price: "6,20€",
    desc: "Le super-aliment complet, naturellement sans gluten et à faible impact glycémique.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-SSpIYt0Blk83H-spu2UDYAX_l8KNrADcuZuroLB9ayjN_4DnMXxSlw2CHObilXPhnF9ga_ui09zOdVxp6C0PZoKuBRtmFiE4636kfZtHyrAFP3RCakO49F-7SlfLXIsGnscEqezqf9O3dAQaKnNLlmu74HGyMJQE683GbULVf5j-HP8acQPOaj6LgGbqF5KAeKMWSaNIf9VB-waGNA5GLpi6ioR7yf-TPdVKtalO58MtEF9h9gmGtCaDWnUxUWgdIOK_b4rlgJbf",
    favorited: false,
  },
  {
    id: "3",
    score: "A",
    scoreBg: "bg-emerald-600",
    ig: "IG 15",
    name: "Yaourt Grec Nature 0%",
    price: "2,15€",
    desc: "Texture onctueuse, riche en probiotiques et idéal pour le petit-déjeuner équilibré.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl2ckdMngUm4_SGli_XCekJ5BFVkM3UH4C53mGrHV1jACCzMg3EV7ePB2Bknw4sWomvywAJf3WLiwMQ_jzPffjlS9GSlvOylSBtQfuGIzQBJkIfL38YV0sQvE4_3QIgkl-yRWrERQcRZihEzHI6v5LxiAMpmUyaV9QVtXodQVyxh_p4wcOgOssPC0tSlsXdUz_NyhQWkRJcgIBhhbq1Rkf2NQ4sTbK85DPaXNLQorAwi2T4CuS9DA8Jfu0Yk1b5UmZFk3-xXHtbt_T",
    favorited: false,
  },
  {
    id: "4",
    score: "C",
    scoreBg: "bg-orange-500",
    ig: "IG 25",
    name: "Chocolat Noir 85% Cacao",
    price: "3,50€",
    desc: "Plaisir gourmand à faible teneur en sucre, riche en antioxydants naturels.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb49ROCrcz8wMsWJUzFXmhoLZSJ9uLP_vJgcQZPhtwn-UQuxq1eKRbiFC1nN0DTbwMwfBz4QDXETKv725C-Ccfbws4SYk4yRk_CXWUL4qyJB1SHQOyoeqSqhPBSHRXgWDV2F-gPVuBqBx7AcS3X2R-_gvm7dBPFsbdiwrPbHbSPCCqcZujwa43vuUdRg3uAGxUrIGsijWURgVTJr4Ha7XcsbPI0w9QYL4Sb8GyEHn05_oNBBUQEG-myH4qXDGM3PdnImg5NP_DaKQf",
    favorited: true,
  },
  {
    id: "5",
    score: "A",
    scoreBg: "bg-emerald-600",
    ig: "IG 20",
    name: "Smoothie Green Detox",
    price: "5,40€",
    desc: "Mélange de chou kale, spiruline et pomme verte pour une énergie saine sans pic d'insuline.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq0_fBcFjLQVLkmBn_IKzk2SG32XUXdzU6iCnLgtXFSQp07OHsecewnqhl1Asf_M3Ypuv22wDacHxKm0X75r_LGXqVe2J8ZROygS0envzIkNBWY35Bg9ul2wyDGKYUUL9Gvlr9Qftdb6Vihz9SfiJZM5CRFnQg1IVLCOD2a8xdIqHcGDcqlsEFiMdHuWCLhfrY5qD6sMwh0LNFEUAgY0pBB0MD1yU9DwUr_7ywG_1UeHWcCAwWpCYsG2vK-RW3QyeeBieMkuXl7uPB",
    favorited: false,
  },
  {
    id: "6",
    score: "B",
    scoreBg: "bg-yellow-500",
    ig: "IG 48",
    name: "Muesli Épeautre & Noisettes",
    price: "7,10€",
    desc: "Céréales complètes sans sucres ajoutés pour une satiété durable toute la matinée.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDScE8vihpueZ2NvDGPrtDBlxFl_DvVneHlJD7dtE5GOksMNYOWLTswPbjjxVB9ncTaDhRYNr4uzdSfX1xakEGWiU3nMbOQqwLUZQ17U6bYyo3HjXup3K6pyqW6v_jJDYc6y4V1Jqdx4Z5fU7My5mE5aexpWv9z_uiKRbe3nj3CSymfU0E7HPpE_StQ_o8GzaVIMrgbMfJDnVRVmNgwkmZw9gqmXXNmYOwcQb6RoluAGz2Knkn2FKkR2fq6-4pz6NzHcNOXnX0WR5dB",
    favorited: false,
  },
];

export default function SearchPage() {
  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar />

      <main className="pl-60 pt-[60px] min-h-screen">
        <div className="p-8 max-w-7xl mx-auto flex gap-8">
          {/* Filter Panel */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 custom-shadow space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-[#181c1d] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#004f54] text-sm">filter_list</span>
                  Catégories
                </h4>
                <div className="space-y-2">
                  {["Épicerie salée", "Produits laitiers", "Boissons", "Boulangerie"].map((cat, i) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        defaultChecked={i === 0}
                        className="rounded border-[#bec8c9] text-[#004f54] focus:ring-[#004f54] h-4 w-4"
                        type="checkbox"
                      />
                      <span className="text-sm text-[#3f4949] group-hover:text-[#181c1d] transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#181c1d] mb-4">Indice Glycémique (IG)</h4>
                <input
                  className="w-full h-1.5 bg-[#e6e9e9] rounded-lg appearance-none cursor-pointer accent-[#004f54]"
                  type="range"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 mt-2">
                  <span>Bas (0-55)</span>
                  <span>Élevé (70+)</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#181c1d] mb-4">Distance</h4>
                <select className="w-full bg-[#f1f4f4] border-none rounded-lg py-2 px-3 text-sm focus:ring-1 focus:ring-[#004f54]">
                  <option>À moins de 5 km</option>
                  <option>À moins de 10 km</option>
                  <option>Toute la ville</option>
                </select>
              </div>

              <button className="w-full py-2 bg-[#004f54] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Réinitialiser
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-1 space-y-6">
            {/* Horizontal Filters */}
            <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl custom-shadow">
              {["Catégorie", "Labels", "IG", "Nutriscore", "Disponibilité"].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-1.5 bg-[#ebeeee] border border-[#bec8c9] rounded-full text-sm flex items-center gap-2 hover:bg-[#e6e9e9] transition-colors"
                >
                  {filter} <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              ))}
              <div className="h-6 w-[1px] bg-neutral-200 mx-2" />
              {["Bio", "IG Bas"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-[#004f54]/10 text-[#004f54] rounded-full text-xs font-semibold flex items-center gap-1">
                  {tag} <span className="material-symbols-outlined text-xs cursor-pointer">close</span>
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <article key={product.id} className="bg-white rounded-xl overflow-hidden custom-shadow group flex flex-col h-full">
                  <div className="relative h-48 bg-[#f1f4f4]">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={product.img}
                      alt={product.name}
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      <span className={`px-2 py-0.5 ${product.scoreBg} text-white font-bold text-lg rounded-md`}>
                        {product.score}
                      </span>
                      <span className="px-2 py-1 bg-[#004f54] text-white text-xs font-semibold rounded-md uppercase">
                        {product.ig}
                      </span>
                    </div>
                    <button
                      className={`absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors ${product.favorited ? "text-[#ae2f34]" : "text-neutral-400 hover:text-[#ae2f34]"}`}
                    >
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: product.favorited ? "'FILL' 1" : "'FILL' 0" }}>
                        favorite
                      </span>
                    </button>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold leading-tight text-[#181c1d]">{product.name}</h3>
                      <span className="font-bold text-[#004f54]">{product.price}</span>
                    </div>
                    <p className="text-sm text-[#3f4949] mb-6 line-clamp-2">{product.desc}</p>
                    <div className="mt-auto flex gap-2">
                      <button className="flex-1 bg-[#004f54] text-white text-sm font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        Ajouter
                      </button>
                      <Link
                        href={`/search/${product.id}`}
                        className="px-3 bg-[#e6e9e9] text-[#3f4949] rounded-lg hover:bg-[#e0e3e3] transition-colors flex items-center"
                      >
                        <span className="material-symbols-outlined">visibility</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl custom-shadow">
              <span className="text-sm text-[#3f4949]">Affichage de 1-12 sur 450 produits</span>
              <div className="flex items-center gap-1">
                <button disabled className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#ebeeee] transition-colors disabled:opacity-30">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold ${page === 1 ? "bg-[#004f54] text-white" : "hover:bg-[#ebeeee] text-[#3f4949]"}`}
                  >
                    {page}
                  </button>
                ))}
                <span className="px-1 text-neutral-400">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#ebeeee] text-xs font-semibold text-[#3f4949]">38</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#ebeeee] transition-colors">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 bg-[#ff6b6b] text-white px-6 py-4 rounded-full shadow-lg hover:opacity-90 transition-all flex items-center gap-3 font-bold z-50">
        <span className="material-symbols-outlined">list_alt</span>
        Voir ma liste
        <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
      </button>
    </div>
  );
}
