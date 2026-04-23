export default function ProfileSetupStep1Page() {
  return (
    <body className="bg-[#f7fafa] text-[#181c1d]">
      {/* Progress Header */}
      <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#f7fafa]/80 backdrop-blur-md z-50 flex items-center justify-center px-6">
        <div className="w-full max-w-[560px] flex flex-col gap-2">
          <div className="flex justify-between items-end mb-1">
            <span className="text-xs font-semibold text-[#004f54] uppercase tracking-widest">Étape 1 sur 3</span>
            <span className="text-xs font-semibold text-[#3f4949]">33% complété</span>
          </div>
          <div className="h-1.5 w-full bg-[#e0e3e3] rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-[#004f54] rounded-full transition-all duration-500" />
          </div>
        </div>
      </header>

      <main className="pt-[100px] pb-8 px-6 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-[560px]">
          {/* Hero Title */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-4xl font-bold text-[#181c1d] mb-2">Créez votre profil santé</h1>
            <p className="text-lg text-[#3f4949]">
              Personnalisez votre expérience SmartHeart pour des recommandations nutritionnelles précises.
            </p>
          </div>

          {/* Form Section */}
          <section className="bg-white p-6 rounded-xl custom-shadow border border-[#bec8c9]/30">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[#004f54]">person_pin</span>
              <h2 className="text-2xl font-semibold text-[#181c1d]">Vos informations de base</h2>
            </div>
            <form className="space-y-6">
              {/* Age */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#181c1d]" htmlFor="age">
                  Âge
                </label>
                <div className="relative group">
                  <input
                    className="w-full bg-[#f1f4f4] border border-[#bec8c9] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004f54]/20 focus:border-[#004f54] transition-all outline-none text-base"
                    id="age"
                    placeholder="Ex: 34"
                    type="number"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3f4949] text-xs font-semibold">
                    ans
                  </span>
                </div>
              </div>

              {/* Weight & Height */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#181c1d]" htmlFor="weight">
                    Poids
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-[#f1f4f4] border border-[#bec8c9] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004f54]/20 focus:border-[#004f54] transition-all outline-none text-base"
                      id="weight"
                      placeholder="75"
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3f4949] text-xs font-semibold">
                      kg
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#181c1d]" htmlFor="height">
                    Taille
                  </label>
                  <div className="relative">
                    <input
                      className="w-full bg-[#f1f4f4] border border-[#bec8c9] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#004f54]/20 focus:border-[#004f54] transition-all outline-none text-base"
                      id="height"
                      placeholder="180"
                      type="number"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3f4949] text-xs font-semibold">
                      cm
                    </span>
                  </div>
                </div>
              </div>

              {/* Activity Level */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-[#181c1d]">Niveau d&apos;activité</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    {
                      value: "sedentary",
                      label: "Sédentaire",
                      desc: "Peu ou pas d'exercice régulier",
                      icon: "airline_seat_recline_normal",
                      checked: false,
                    },
                    {
                      value: "moderate",
                      label: "Modéré",
                      desc: "Activité physique 3 à 5 fois par semaine",
                      icon: "directions_walk",
                      checked: true,
                    },
                    {
                      value: "active",
                      label: "Actif",
                      desc: "Sport intensif ou travail physique quotidien",
                      icon: "fitness_center",
                      checked: false,
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        option.checked
                          ? "border-[#004f54] bg-[#a1f0f6]/10"
                          : "border-[#bec8c9] hover:bg-[#f1f4f4]"
                      }`}
                    >
                      <input
                        className="w-5 h-5 text-[#004f54] border-[#bec8c9]"
                        defaultChecked={option.checked}
                        name="activity"
                        type="radio"
                        value={option.value}
                      />
                      <div className="ml-4">
                        <span className="block text-sm font-semibold text-[#181c1d]">{option.label}</span>
                        <span className="block text-xs text-[#3f4949]">{option.desc}</span>
                      </div>
                      <span
                        className={`material-symbols-outlined ml-auto ${
                          option.checked ? "text-[#004f54]" : "text-[#3f4949]"
                        }`}
                      >
                        {option.icon}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          </section>

          {/* Navigation */}
          <div className="mt-8 flex justify-between items-center">
            <button className="flex items-center gap-2 text-[#3f4949] hover:text-[#181c1d] text-sm font-semibold transition-colors px-4 py-2">
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Précédent
            </button>
            <button className="bg-[#004f54] text-white px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-sm">
              Suivant
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>

          {/* Info Card */}
          <div className="mt-6 bg-[#01696f] text-[#97e6ec] p-6 rounded-xl flex gap-4 items-start">
            <div className="bg-[#97e6ec]/20 p-2 rounded-lg">
              <span className="material-symbols-outlined">info</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">Pourquoi ces informations ?</h4>
              <p className="text-sm opacity-90">
                Ces données nous permettent de calculer votre métabolisme de base (TMB) et d&apos;ajuster vos besoins
                caloriques journaliers avec précision.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative blobs */}
      <div className="fixed bottom-0 right-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-[#004f54] rounded-full blur-[100px] -mr-48 -mb-48" />
      </div>
      <div className="fixed top-1/4 left-0 -z-10 opacity-5 pointer-events-none">
        <div className="w-64 h-64 bg-[#ae2f34] rounded-full blur-[80px] -ml-32" />
      </div>
    </body>
  );
}
