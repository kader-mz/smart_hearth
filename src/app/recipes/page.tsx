import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const recipes = [
  {
    id: 1,
    tags: ["Faible IG", "Premium"],
    name: "Bol Méditerranéen au Poulet & Quinoa",
    desc: "Un mélange nutritif riche en protéines et en fibres, idéal pour stabiliser la glycémie tout en restant gourmand.",
    time: "25 min",
    kcal: "420 kcal",
    price: "12.50€",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKc3pzQXegYnMQrHvEkP60Bs12h_9wDUJgtIrs0nS9LbQmKxDFYvFlmQnqb7JIuohuzJRQem6wKgwzcmUpAWU_t_3VaV__LGcvd-YSc91G2sbl3KlpNtkWT9k0_ZBsFsz7mSRpMA3ddKemgeK9k4LomieFjnxuOqQxz8HHJMQvy40s4DcRXDgR6MZqo3hh1s5sWXu81rW1zDeHjXTcj8g9BCkfTJkKG9bERt-MtPG0tXD3BZCvuuytLMqcLtuTKLsj653C53GFI-GZ",
  },
  {
    id: 2,
    tags: ["Sans Gluten", "Éco"],
    name: "Pavé de Saumon aux Asperges & Avocat",
    desc: "Une recette riche en Oméga-3 et minéraux essentiels pour la santé cardiovasculaire.",
    time: "15 min",
    kcal: "380 kcal",
    price: "9.80€",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY5EXeHAHyOVo2Z7gQNb7tk5BbGbd_a9RDWxvJMTU4a3q8sPh0cUQ08Vrq4oMaSSEisSfRPBuI6XNmEhK2p682F_Vk3eDZdCT4WwV0vGVb5SwHIbII49B11Fa8zi7EAGK2BVWSwf3_JGU0MVXMS83bl7kC8glLNVok_HNFed2X2ugqFbAGquGubqjXArAONjm9EA7aeCCCs4VD6NchR1IjIDFrRXNzfI1WfjJSUIbNLvnA90U82cx7goPPSSXrc3SySPB3NcgfYupf",
  },
  {
    id: 3,
    tags: ["Végétalien", "Eco"],
    name: "Tofu Mariné & Légumes d'Hiver",
    desc: "Une alternative végétale pleine de saveurs avec une sauce au miso et gingembre.",
    time: "35 min",
    kcal: "310 kcal",
    price: "7.20€",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6Kb56Ym0SaYecxseyvB1So13244jH0OhfnFZxjZiX41jP2R9riDk8V3rmJBmFizYWwWXrCtaUsYDCGo7te4cjgSQlAS7OqH9Te4yGrpKji6P0BbtlbbpbQu5tjsJ93AndjXIUM5qh-tC6jeoXjT0mmeCAcWj3pwN5JGBe5ZY1VWWHFbVpuYl8stnsaXqmLgFjZOGovdxPNYT8azXe8Go-R5MGNkgkgd97DSstw8ofAZINogjdpTVEkOZnBppTCpIRpgC6PSUJPlqg",
  },
  {
    id: 4,
    tags: ["Kéto", "Premium"],
    name: "Velouté de Chou-Fleur Truffé",
    desc: "Une soupe onctueuse et réconfortante, pauvre en glucides mais riche en plaisirs olfactifs.",
    time: "20 min",
    kcal: "245 kcal",
    price: "14.00€",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJB3vUuuqkT6SLNm4e4zUb6puIpJUWG_fqf99-hpi3VEaB4qQK-mLi6MBOAIKFiOZ-j5bQq-YojBqSXkM3ZRhcL2N9GgD-IX1jmWDep--n27vl_36-xninm3vzqs0EKzIPziPUd1trGnZZSkI0ZTGtzGQxdoTGLu26efcAistR6O9v33MJJl-eVMw_L1pLUu8inevsm_2MOe2FvhEXecqfxI2FjMCr3X-sTdu_cjyELeSwnIDzfSh-DL6pbpu52Jm85LHP-zxTtIk_",
  },
];

const drawerIngredients = [
  { name: "Blanc de poulet grillé", qty: "150g" },
  { name: "Quinoa cuit", qty: "100g" },
  { name: "Avocat mûr", qty: "1/2" },
  { name: "Pois chiches rôtis", qty: "50g" },
  { name: "Sauce Tahini & Citron", qty: "2 c.s." },
];

const drawerSteps = [
  "Rincer le quinoa à l'eau froide et le faire cuire dans deux fois son volume d'eau bouillante salée pendant 12 minutes.",
  "Assaisonner le poulet avec du romarin et de l'ail, puis le griller à la poêle avec un filet d'huile d'olive jusqu'à ce qu'il soit doré.",
  "Couper l'avocat en tranches et préparer les crudités (concombre, tomates cerises).",
  "Dresser le bol en commençant par le quinoa, puis ajouter les autres ingrédients harmonieusement. Napper de sauce Tahini.",
];

export default function RecipesPage() {
  return (
    <div className="bg-[#f7fafa] min-h-screen">
      <Sidebar />
      <TopBar />

      <main className="ml-60 mt-[60px] flex min-h-screen">
        {/* Left Filter Panel */}
        <aside className="w-[300px] border-r border-neutral-200 bg-white p-6 flex flex-col gap-6 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold text-[#004f54] mb-4">Générateur IA</h3>
            <p className="text-sm text-[#3f4949] mb-6">
              Personnalisez votre recommandation nutritionnelle intelligente.
            </p>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-semibold text-[#181c1d] block">Régimes &amp; Santé</label>
            <div className="flex flex-wrap gap-2">
              {["Sans gluten", "Faible IG", "Végétalien", "Kéto"].map((tag, i) => (
                <button
                  key={tag}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    i === 1
                      ? "border-2 border-[#01696f] bg-[#01696f]/5 text-[#004f54]"
                      : "border border-[#bec8c9] bg-[#f7fafa] text-[#3f4949] hover:border-[#01696f]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-sm font-semibold text-[#181c1d] block">Ingrédients disponibles</label>
            <div className="flex flex-wrap gap-2 p-3 bg-[#f1f4f4] rounded-xl border border-[#bec8c9]">
              {["Poulet", "Avocat"].map((ing) => (
                <span key={ing} className="flex items-center gap-1 px-2 py-1 bg-white rounded-lg text-sm border border-neutral-200 shadow-sm">
                  {ing} <span className="material-symbols-outlined text-xs cursor-pointer">close</span>
                </span>
              ))}
              <input className="bg-transparent border-none p-0 text-sm w-20 outline-none" placeholder="Ajouter..." type="text" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <label className="text-sm font-semibold text-[#181c1d] block">Budget par repas</label>
              <span className="text-sm font-semibold text-[#004f54]">15€</span>
            </div>
            <input className="w-full h-2 bg-[#e0e3e3] rounded-lg appearance-none cursor-pointer accent-[#01696f]" type="range" />
            <div className="flex justify-between text-[10px] text-[#3f4949] uppercase font-bold">
              <span>Éco</span>
              <span>Premium</span>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-neutral-100">
            <button className="w-full bg-[#004f54] text-white py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              Générer
            </button>
          </div>
        </aside>

        {/* Right Recipe Grid */}
        <section className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-[#181c1d]">Recommandations IA</h2>
              <div className="flex items-center gap-2 text-[#3f4949]">
                <span className="text-sm">Trié par pertinence</span>
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-[0px_2px_4px_rgba(40,37,29,0.05)] group cursor-pointer border border-neutral-100">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={recipe.img}
                      alt={recipe.name}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {recipe.tags.map((tag, i) => (
                        <span key={tag} className={`bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase ${i === 0 ? "text-[#004f54]" : "text-[#ae2f34]"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center text-[#004f54] shadow-sm">
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#181c1d] mb-2">{recipe.name}</h3>
                    <p className="text-sm text-[#3f4949] line-clamp-2 mb-4">{recipe.desc}</p>
                    <div className="flex items-center gap-4 text-[#3f4949] text-xs font-semibold">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {recipe.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">local_fire_department</span>
                        {recipe.kcal}
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">euro_symbol</span>
                        {recipe.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Recipe Detail Drawer (first recipe shown as example) */}
      <div className="fixed top-0 right-0 h-full w-[480px] bg-white z-[110] shadow-2xl flex flex-col translate-x-full pointer-events-none">
        <div className="relative h-[280px]">
          <img
            className="w-full h-full object-cover"
            src={recipes[0].img}
            alt={recipes[0].name}
          />
          <button className="absolute top-6 left-6 bg-white/90 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center text-[#181c1d]">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <h2 className="text-3xl font-bold mb-1">Bol Méditerranéen</h2>
            <div className="flex gap-4 text-xs font-semibold opacity-90">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">timer</span> 25 min</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">local_fire_department</span> 420 kcal</span>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <section>
            <h4 className="text-2xl font-semibold text-[#181c1d] mb-4">Ingrédients</h4>
            <ul className="space-y-3">
              {drawerIngredients.map((ing) => (
                <li key={ing.name} className="flex items-center justify-between py-2 border-b border-neutral-100">
                  <span className="text-base text-[#3f4949]">{ing.name}</span>
                  <span className="text-sm font-semibold">{ing.qty}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h4 className="text-2xl font-semibold text-[#181c1d] mb-4">Préparation</h4>
            <div className="space-y-6">
              {drawerSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#01696f]/10 text-[#004f54] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-base text-[#3f4949]">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="p-6 border-t border-neutral-100 bg-[#F9F8F5]">
          <button className="w-full bg-[#ff6b6b] text-white py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-95 transition-opacity shadow-sm">
            <span className="material-symbols-outlined">shopping_cart</span>
            Trouver les ingrédients
          </button>
        </div>
      </div>
    </div>
  );
}
