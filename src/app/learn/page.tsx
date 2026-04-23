import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

const articles = [
  { icon: "nutrition", title: "Indice Glycémique : Le Guide", time: "8 min", level: "Débutant", read: true, active: true },
  { icon: "label", title: "Lire les étiquettes sans stress", time: "12 min", level: "Intermédiaire", read: false, active: false },
  { icon: "heart_plus", title: "Les Bonnes vs Mauvaises Graisses", time: "10 min", level: "Débutant", read: false, active: false },
  { icon: "bakery_dining", title: "Le secret des céréales complètes", time: "6 min", level: "Débutant", read: false, active: false },
];

export default function LearnPage() {
  return (
    <div className="bg-[#f7fafa] min-h-screen text-[#181c1d]">
      <Sidebar />
      <TopBar />

      <main className="ml-60 pt-[60px] min-h-screen">
        <div className="max-w-[1200px] mx-auto p-6">
          {/* Progress Banner */}
          <section className="mb-6">
            <div className="bg-[#01696f] rounded-xl p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2 text-[#a1f0f6]">Votre parcours nutritionnel</h2>
                <p className="text-base opacity-90 max-w-md text-[#97e6ec]">
                  Continuez à apprendre pour maîtriser les bases d&apos;une alimentation saine pour votre cœur.
                </p>
              </div>
              <div className="relative z-10 flex flex-col items-end gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-[#a1f0f6]">3 articles sur 10</span>
                  <div className="w-48 h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[30%] h-full bg-[#a1f0f6]" />
                  </div>
                </div>
                <p className="text-xs font-semibold italic text-[#a1f0f6]/80">
                  Prochaine étape : Comprendre les étiquettes
                </p>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
            </div>
          </section>

          {/* Grid */}
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Left: Article List */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
              {/* Category Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {["Tout", "Indice Glycémique", "Labels", "Fibres"].map((cat, i) => (
                  <button
                    key={cat}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                      i === 0
                        ? "bg-[#004f54] text-white"
                        : "bg-[#ebeeee] text-[#3f4949] hover:bg-[#e6e9e9]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Articles */}
              <div className="space-y-3">
                {articles.map((article) => (
                  <div
                    key={article.title}
                    className={`group bg-white rounded-xl p-4 shadow-sm cursor-pointer transition-all border-2 ${
                      article.active ? "border-[#004f54]" : "border-transparent border hover:bg-[#ebeeee] border-[#bec8c9]"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div
                        className={`w-16 h-16 rounded-lg flex items-center justify-center shrink-0 ${
                          article.active
                            ? "bg-[#a1f0f6]/30 text-[#004f54]"
                            : "bg-[#e6e9e9] text-[#3f4949] group-hover:bg-[#a1f0f6]/20 group-hover:text-[#004f54]"
                        } transition-colors`}
                      >
                        <span className="material-symbols-outlined text-3xl">{article.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`text-sm font-semibold ${article.active ? "text-[#004f54]" : ""}`}>
                            {article.title}
                          </h4>
                          {article.read && (
                            <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                              LU
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-[#6f797a]">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            {article.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">bar_chart</span>
                            {article.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Article Detail */}
            <div className="col-span-12 lg:col-span-7">
              <article className="bg-white rounded-2xl shadow-sm border border-[#bec8c9] overflow-hidden">
                {/* Hero */}
                <div className="h-64 relative">
                  <img
                    alt="Article Hero"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgIAg2n245NmoiNXa0EQ4Rp7LGoqoWqD6FhmnRE2hoedzfsQW2TaV1JxnioN1x88ocmRtxo-99TEQdj9HJ4LnjyRnPqtfPuBplWN38jhlRXp0vmyD0Qb_7zQscCaD5kXsZ7gRwmx6sgn20UUCnm16_GPepEqMia169i5ECyn-B9ekTd4HFykjiFFJHfM7gCPhnrF_oD29J5ZJ7LZmJte7mTvIenzoOoAorCMXu3AGqoMx2ENVJHMfs9stQoAfBh7aYtjDQL-0YHCTx"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div>
                      <span className="px-3 py-1 bg-[#004f54] text-white rounded-full text-xs font-semibold mb-3 inline-block uppercase tracking-wider">
                        Nutrition de Base
                      </span>
                      <h1 className="text-white text-3xl font-bold">Comprendre l&apos;Indice Glycémique (IG)</h1>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-lg text-[#3f4949] mb-6 leading-relaxed">
                    L&apos;indice glycémique (IG) est un critère de classement des aliments contenant des glucides, basé sur leur
                    effet sur le taux de glucose dans le sang (glycémie) durant les deux heures suivant leur ingestion.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-[#f1f4f4] p-5 rounded-xl border-l-4 border-[#004f54]">
                      <div className="flex items-center gap-2 mb-2 text-[#004f54]">
                        <span className="material-symbols-outlined">lightbulb</span>
                        <span className="text-sm font-semibold">À retenir</span>
                      </div>
                      <p className="text-sm text-[#3f4949]">
                        Plus l&apos;IG est élevé, plus le pic de glycémie est important, provoquant une sécrétion massive d&apos;insuline.
                      </p>
                    </div>
                    <div className="bg-[#6e3815]/5 p-5 rounded-xl border-l-4 border-[#6e3815]">
                      <div className="flex items-center gap-2 mb-2 text-[#6e3815]">
                        <span className="material-symbols-outlined">warning</span>
                        <span className="text-sm font-semibold">Le Saviez-vous ?</span>
                      </div>
                      <p className="text-sm text-[#3f4949]">
                        La cuisson augmente généralement l&apos;IG des aliments (ex: pâtes al dente vs bien cuites).
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-[#004f54]">Comment utiliser l&apos;IG au quotidien ?</h3>
                  <p className="text-base text-[#3f4949] mb-4">
                    Pour une santé cardiaque optimale et une gestion stable du poids, il est recommandé de privilégier
                    les aliments à IG bas ou moyen :
                  </p>

                  <ul className="space-y-3 mb-8">
                    {[
                      { icon: "check_circle", color: "text-[#004f54]", text: "Légumineuses : Lentilles, pois chiches, haricots rouges (IG bas).", bold: "Légumineuses :" },
                      { icon: "check_circle", color: "text-[#004f54]", text: "Fruits entiers : Pommes, baies, agrumes (IG bas à modéré).", bold: "Fruits entiers :" },
                      { icon: "cancel", color: "text-[#ae2f34]", text: "Produits raffinés : Pain blanc, riz instantané, sodas (IG élevé - à limiter).", bold: "Produits raffinés :" },
                    ].map((item) => (
                      <li key={item.bold} className="flex items-start gap-3 text-[#3f4949]">
                        <span className={`material-symbols-outlined ${item.color} mt-1`}>{item.icon}</span>
                        <span>
                          <strong>{item.bold}</strong>{" "}
                          {item.text.replace(item.bold, "").trim()}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Quiz CTA */}
                  <div className="p-6 bg-[#e0e3e3] rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#004f54] flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">quiz</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">Prêt pour un quiz ?</h4>
                        <p className="text-xs text-[#6f797a]">Testez vos connaissances sur l&apos;IG</p>
                      </div>
                    </div>
                    <button className="bg-[#004f54] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                      Commencer
                    </button>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-8 py-6 bg-[#ebeeee] border-t border-[#bec8c9] flex justify-between items-center">
                  <button className="flex items-center gap-2 text-[#004f54] text-sm font-semibold">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Article précédent
                  </button>
                  <div className="flex items-center gap-4">
                    <button className="p-2 text-[#6f797a] hover:text-[#004f54] transition-colors">
                      <span className="material-symbols-outlined">share</span>
                    </button>
                    <button className="p-2 text-[#6f797a] hover:text-[#004f54] transition-colors">
                      <span className="material-symbols-outlined">bookmark</span>
                    </button>
                    <button className="bg-[#01696f] text-[#97e6ec] px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      Suivant <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#ff6b6b] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50">
        <span className="material-symbols-outlined text-3xl">question_answer</span>
      </button>
    </div>
  );
}
