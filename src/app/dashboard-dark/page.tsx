import Image from "next/image";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";

export default function DashboardDarkPage() {
  return (
    <div className="bg-neutral-950 min-h-screen text-[#e0e3e3]">
      <Sidebar dark />
      <TopBar dark userName="Dr. Claire" userRole="Nutritionniste" />

      <main className="ml-60 mt-[60px] p-6 min-h-screen">
        <div className="max-w-[1440px] mx-auto space-y-8">
          {/* Welcome */}
          <section className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-4xl font-extrabold text-teal-100">Bonjour, Dr. Claire</h2>
              <p className="text-lg text-neutral-400 mt-2">Voici l&apos;état de santé de votre communauté aujourd&apos;hui.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-200 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-neutral-800 transition-colors">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                Aujourd&apos;hui
              </button>
              <button className="px-6 py-2 bg-[#01696f] text-teal-100 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-lg">add</span>
                Nouvelle Analyse
              </button>
            </div>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Hero Metric */}
            <div className="md:col-span-8 glass-card rounded-xl p-8 relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="px-3 py-1 bg-teal-900/30 text-teal-400 rounded-full text-xs font-semibold border border-teal-800/30 uppercase tracking-wider">
                    Métrique Critique
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4">Stabilité Cardiovasculaire</h3>
                  <p className="text-neutral-400 max-w-md mt-2">
                    La moyenne de la cohorte est en hausse de 4% ce mois-ci grâce à l&apos;adoption du régime méditerranéen.
                  </p>
                </div>
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="text-6xl font-extrabold text-teal-400">92.4</span>
                  <div className="flex flex-col">
                    <span className="text-[#ff6b6b] flex items-center font-bold">
                      <span className="material-symbols-outlined text-lg">arrow_upward</span>
                      1.2%
                    </span>
                    <span className="text-neutral-500 text-sm">vs mois dernier</span>
                  </div>
                </div>
              </div>
              {/* Decorative Chart */}
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <path d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,40" fill="none" stroke="#01696F" strokeWidth="4" />
                  <path d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,40 L400,200 L0,200 Z" fill="url(#grad1)" />
                  <defs>
                    <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#01696F", stopOpacity: 0.5 }} />
                      <stop offset="100%" style={{ stopColor: "#01696F", stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="md:col-span-4 bg-neutral-900 rounded-xl p-8 border border-neutral-800 flex flex-col items-center justify-center text-center">
              <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-6">Objectif Nutriments</h4>
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90">
                  <circle className="text-neutral-800" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12" />
                  <circle className="text-[#ff6b6b]" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="110" strokeWidth="12" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-white">75%</span>
                  <span className="text-[10px] text-neutral-500">PROTÉINES</span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="p-3 bg-neutral-800/50 rounded-lg">
                  <p className="text-[10px] text-neutral-500 uppercase">Lipides</p>
                  <p className="text-lg font-bold text-white">12g <span className="text-xs text-[#ff6b6b]">↑</span></p>
                </div>
                <div className="p-3 bg-neutral-800/50 rounded-lg">
                  <p className="text-[10px] text-neutral-500 uppercase">Sodium</p>
                  <p className="text-lg font-bold text-white">2.1g <span className="text-xs text-teal-400">↓</span></p>
                </div>
              </div>
            </div>

            {/* Patient Alerts */}
            <div className="md:col-span-5 glass-card rounded-xl overflow-hidden border border-neutral-800">
              <div className="p-6 border-b border-neutral-800 flex justify-between items-center">
                <h4 className="text-lg font-bold text-white">Alertes Patients</h4>
                <span className="px-2 py-1 bg-[#ff6b6b]/10 text-[#ff6b6b] text-[10px] font-black rounded">3 ACTIFS</span>
              </div>
              <div className="divide-y divide-neutral-800">
                {[
                  { name: "Jean Dupont", msg: "Pic de sodium détecté (4.2g)", time: "Il y a 5m", icon: "warning", iconColor: "text-[#ff6b6b]", bg: "bg-red-900/20" },
                  { name: "Marie Lefebvre", msg: "Objectif fibres atteint (30g)", time: "Il y a 1h", icon: "check_circle", iconColor: "text-teal-400", bg: "bg-teal-900/20" },
                  { name: "Marc Antoine", msg: "Nouvelle analyse sang téléchargée", time: "Il y a 3h", icon: "person", iconColor: "text-neutral-400", bg: "bg-neutral-800" },
                ].map((alert) => (
                  <div key={alert.name} className="p-4 flex items-center gap-4 hover:bg-neutral-800/30 transition-colors cursor-pointer">
                    <div className={`w-10 h-10 rounded-full ${alert.bg} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${alert.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                        {alert.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-neutral-200">{alert.name}</p>
                      <p className="text-xs text-neutral-500">{alert.msg}</p>
                    </div>
                    <span className="text-[10px] text-neutral-600">{alert.time}</span>
                  </div>
                ))}
              </div>
              <button className="w-full p-4 text-center text-sm font-semibold text-teal-400 hover:bg-teal-900/10 transition-colors">
                Voir tous les patients
              </button>
            </div>

            {/* Recipe Cards */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              {[
                {
                  tag: "PROTÉINE MAIGRE",
                  tagColor: "text-teal-400",
                  name: "Salade de Quinoa & Saumon",
                  time: "15 min",
                  kcal: "420 kcal",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv8CR7PZofxNwUB05sZwKwWwsSH6so0h_EshLx9eTghOkQQ-_m13DfpJf3mE9MQLuR9NZrEZL2xABgaE9oGZE6f1HRCuVK82472NgTil2U9PT3HdkzYNOid1HjVgvKlnHSVNmSxwWsupnVLviPSWeAbSMcTJvIOf8kcZgIaJ4ejw147BiMWiXCfWs0vovt9aCahY4Zae-OdG2HNdHjjDRQINUZf8M62DD9V0LLo9n42IgEQ97U6_PjgPE9JyYMtaOMeFVOJRSihp9p",
                },
                {
                  tag: "BAS SODIUM",
                  tagColor: "text-[#ff6b6b]",
                  name: "Soupe de Tomates Rôties",
                  time: "30 min",
                  kcal: "210 kcal",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNm2ZI46WLUe4RyL2xUbCBUrK5abcijcMvaznA49tP1c4e9kvRRdWAy_bcqsQKcUW9zYk7EcKs6Sc_PqgnIAlgY6fsQd0J7bxU6qjJ5OuVFwwHXCP3nDghQxT1l_oDkD4OjY6xE-Q2AM6YxQyMQcWfJ2rBhOj-BkXggh7lK3hkRFrJXsoVGxDOc1MMq-RUgE2FlXDs-dyP2SjEQRvI8r7pmNe3jlDNh9PWFf5elAKn4P3foMXYRRhWa7DBLKieRDelNT2LZKg7FLmB",
                },
              ].map((recipe) => (
                <div key={recipe.name} className="col-span-1 glass-card rounded-xl overflow-hidden group">
                  <div className="h-40 bg-neutral-800 overflow-hidden relative">
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      src={recipe.img}
                      alt={recipe.name}
                    />
                  </div>
                  <div className="p-4">
                    <p className={`text-[10px] font-semibold ${recipe.tagColor} mb-1`}>{recipe.tag}</p>
                    <h5 className="font-bold text-neutral-200">{recipe.name}</h5>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[10px] text-neutral-500">
                        <span className="material-symbols-outlined text-xs">timer</span> {recipe.time}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-neutral-500">
                        <span className="material-symbols-outlined text-xs">local_fire_department</span> {recipe.kcal}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Banner */}
            <div className="md:col-span-12 bg-teal-900/10 border border-teal-900/30 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-teal-900/40 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl text-teal-400">school</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-teal-100">
                  Nouvelle étude : L&apos;impact de l&apos;Omega-3 sur l&apos;arythmie
                </h4>
                <p className="text-sm text-neutral-400 mt-1">
                  Découvrez comment les ajustements nutritionnels récents transforment le suivi post-opératoire.
                </p>
              </div>
              <button className="px-6 py-2 border border-teal-500/30 text-teal-400 rounded-lg text-sm font-semibold hover:bg-teal-900/20 transition-colors shrink-0">
                Lire l&apos;article
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
