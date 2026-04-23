const healthProfiles = [
  { value: "diabetic", icon: "stethoscope", label: "Diabétique", selected: true },
  { value: "celiac", icon: "grass", label: "Cœliaque", selected: false },
  { value: "healthy", icon: "nutrition", label: "Mode Sain", selected: true },
  { value: "vegetarian", icon: "eco", label: "Végétarien", selected: false },
];

const goals = [
  { label: "Gérer le diabète", active: true },
  { label: "Perdre du poids", active: false },
  { label: "Éviter les allergènes", active: false },
  { label: "Maintenir mon poids", active: false },
];

export default function ProfileSetupStep2Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#f7fafa]">
      <div className="w-full max-w-4xl">
        {/* Header Progress */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-1 w-12 rounded-full bg-[#01696f]" />
            <div className="h-1 w-12 rounded-full bg-[#01696f]" />
            <div className="h-1 w-12 rounded-full bg-[#e0e3e3]" />
          </div>
          <h1 className="text-4xl font-bold text-[#004f54] mb-2">Votre condition de santé</h1>
          <p className="text-lg text-[#3f4949]">
            Personnalisez votre expérience selon vos besoins médicaux et vos choix de vie.
          </p>
        </header>

        <main className="space-y-12">
          {/* Health Profile Section */}
          <section>
            <h2 className="text-2xl font-semibold text-[#181c1d] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#004f54]">medical_information</span>
              Profil nutritionnel
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {healthProfiles.map((profile) => (
                <div
                  key={profile.value}
                  className={`relative bg-white custom-shadow rounded-xl p-6 flex flex-col items-center justify-center gap-3 text-center cursor-pointer border-2 transition-all ${
                    profile.selected
                      ? "border-[#004f54] bg-[#004f54]/5"
                      : "border-transparent hover:border-[#bec8c9]"
                  }`}
                  style={{ minHeight: 120 }}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${
                      profile.selected ? "text-[#004f54]" : "text-[#6f797a]"
                    }`}
                  >
                    {profile.icon}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      profile.selected ? "text-[#004f54]" : "text-[#181c1d]"
                    }`}
                  >
                    {profile.label}
                  </span>
                  {profile.selected && (
                    <div className="absolute top-2 right-2 bg-[#004f54] text-white rounded-full p-1 flex items-center justify-center w-5 h-5">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'wght' 700", fontSize: 12 }}
                      >
                        check
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Goals Section */}
          <section>
            <h2 className="text-2xl font-semibold text-[#181c1d] mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#004f54]">target</span>
              Vos objectifs prioritaires
            </h2>
            <div className="flex flex-wrap gap-3">
              {goals.map((goal) => (
                <button
                  key={goal.label}
                  className={`px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 ${
                    goal.active
                      ? "bg-[#004f54] text-white shadow-sm"
                      : "bg-[#e6e9e9] text-[#3f4949] hover:bg-[#bec8c9] hover:text-[#181c1d]"
                  }`}
                >
                  {goal.label}
                  {goal.active && (
                    <span className="material-symbols-outlined text-sm">close</span>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <section className="mt-16 flex items-center justify-between pt-8 border-t border-[#bec8c9]">
            <button className="flex items-center gap-2 px-6 py-3 text-[#3f4949] text-sm font-semibold hover:text-[#181c1d] transition-colors group">
              <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Retour
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-[#004f54] text-white rounded-xl text-sm font-semibold shadow-lg hover:bg-[#01696f] transition-all active:scale-[0.98]">
              Suivant
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </section>
        </main>

        {/* Assistant aside */}
        <aside className="mt-12 flex justify-center">
          <div className="bg-white custom-shadow max-w-sm p-4 rounded-xl flex items-center gap-4 border border-[#bec8c9]/30">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                alt="Assistant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL8aqKi2qgAu_0ZHGHVFpUJEg5EtkSH-RV-1hpglGTHdRFploNQ0p3zoxT4-9RTCx0g1naPP7WqGfpLhLTnMMWs727KcbtOxPkdWEGru1nWsWGJrZ-NB87k8kF_TpQr46U038U6r3AwJgmix0wDhJu_xtqG75Z92wbgppRikbB7Xj9BjRy6LVnC_3Tgro87bd5PAFc1keXqhJj_VXZtFlyKkAQtrcxZLXVnyWqkpM-8zuN0vhk2YR3hT83otl0ByuZZ981xJ5FiBzt"
              />
            </div>
            <p className="text-sm text-[#3f4949]">
              &ldquo;En choisissant &apos;Mode Sain&apos;, nous privilégierons les aliments à faible index glycémique.&rdquo;
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
