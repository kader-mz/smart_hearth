export default function LoginPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[480px] bg-white p-8 rounded-xl custom-shadow">
          {/* Brand */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="material-symbols-outlined text-[#004f54] text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
              <span
                className="material-symbols-outlined text-[#004f54] text-[28px] -ml-4 mt-2"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                eco
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#004f54] tracking-tight">SmartHeart</h1>
            <p className="text-sm text-[#6f797a]">Dietary Intelligence</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex bg-[#f1f4f4] p-1 rounded-lg mb-8">
            <button className="flex-1 py-2 text-sm font-semibold bg-white text-[#004f54] rounded-md shadow-sm transition-all">
              Se connecter
            </button>
            <button className="flex-1 py-2 text-sm font-semibold text-[#6f797a] hover:text-[#181c1d] transition-all">
              S&apos;inscrire
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#6f797a] mb-2">Email</label>
              <input
                className="w-full px-4 py-3 bg-[#f7fafa] border border-[#bec8c9] rounded-lg focus:ring-2 focus:ring-[#01696f]/30 focus:border-[#01696f] outline-none transition-all text-sm"
                placeholder="votre@email.com"
                type="email"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-[#6f797a]">Mot de passe</label>
                <a className="text-xs font-semibold text-[#004f54] hover:underline" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                className="w-full px-4 py-3 bg-[#f7fafa] border border-[#bec8c9] rounded-lg focus:ring-2 focus:ring-[#01696f]/30 focus:border-[#01696f] outline-none transition-all text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <button
              className="w-full bg-[#01696f] text-white py-3 px-6 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all"
              type="submit"
            >
              Connexion
            </button>
            <div className="relative flex items-center justify-center py-2">
              <div className="w-full border-t border-[#bec8c9]" />
              <span className="absolute px-4 bg-white text-xs font-semibold text-[#6f797a]">OU</span>
            </div>
            <button
              className="w-full flex items-center justify-center gap-3 border border-[#bec8c9] py-3 px-6 rounded-lg text-sm font-semibold text-[#181c1d] hover:bg-[#f1f4f4] transition-all"
              type="button"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continuer avec Google
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Illustrated Onboarding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#01696f]/10 p-8 flex-col justify-center relative overflow-hidden">
        <div className="relative z-10 max-w-lg mx-auto space-y-6">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#01696f]">Nutrition adaptée, vie simplifiée.</h2>
            <p className="text-lg text-[#3f4949]">
              Rejoignez une communauté qui prend soin de sa santé avec intelligence.
            </p>
          </div>
          {/* Profile Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-xl custom-shadow flex items-center gap-6 translate-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#ffdad8]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeIh-EwEd_U3EifzO_LtAQur-S-ZQZJt22-1ZmkCsGxVRsSVfPdEYiIyhb7E9-zhiYwTY_7gDMh1oN6Wjmdz_R0MDm7WsLXJFUooqqR3PSp7kbQcsw3melI1NRCNUcRl-O1FZQT2GT6bwhkfiYOqG0mXw2XQyAqpVNWasnCPPTSGWQ_NsTwx9Q_cvbLcJAalMHJuoxb14OjAz_ybB-xARIxKYcDFN9pqdL1fM6somdWXinb7LPmJ1giNAjK5OgdVjONnis6C_0csCx"
                  alt="Marie"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-[#181c1d]">Marie, 42 ans</h3>
                  <span className="px-2 py-1 bg-[#a1f0f6] text-[#002022] rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Diabétique
                  </span>
                </div>
                <p className="text-xs text-[#6f797a]">Suivi de l&apos;index glycémique et conseils personnalisés en temps réel.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl custom-shadow flex items-center gap-6 -translate-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#ffdbc9]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNWvxMq1JP82nyOLhL6nC5TtujHtU-ayS68UgEjyA0uxlqyPHbemJS11QhZpVKSXEGQNfYCZXo6olYhWzSZ0w6aN6CFjQ6SjBWiIc-4hriEMc5pcndXC7q1KMAaGWW0-19FQUnjg7JY3ebjmxjl6xP3KcopTSiSy6VNvBFdKVHqJPvIiM0scyOiESleIHbqLiQ3jaz_9rTJfc49NFw8GdzGjs684JXtwZxGAGqrSEMT00uHUdxt79AVjHtuYDeNWbqsF01hKBiWNL8"
                  alt="Thomas"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-[#181c1d]">Thomas, 28 ans</h3>
                  <span className="px-2 py-1 bg-[#ffdbc9] text-[#331200] rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Cœliaque
                  </span>
                </div>
                <p className="text-xs text-[#6f797a]">Scan de produits instantané pour détecter toute trace de gluten.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl custom-shadow flex items-center gap-6 translate-x-8">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#85d3da]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd1_z87vFvICOlN5R6jBkgzcKZ8q9KQ50E2RouSQIDbnUSiWFnXNcCgZvX2yP9AcOO7qBW_v-Ho_OWyYV-WzBWzdtZJ4wuteaFtNqcSxNAdRel3UEFLiTqCVFSp2QCiSO2oMuJmoRA1JuQhSfDVE36BqPR4nGS6s86GcS6nsC2oacQuQd-Ug_9AKX3pmYuQi9GzZl1bz9sfjhHHh-AuVWu_UGafUkaOJeyXc2A4o0AMt6ooD7IxXo1kkK2-dkX6-3Z7R7NxDNS7M-m"
                  alt="Sophie"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-sm font-semibold text-[#181c1d]">Sophie, 35 ans</h3>
                  <span className="px-2 py-1 bg-[#ff6b6b] text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Healthy
                  </span>
                </div>
                <p className="text-xs text-[#6f797a]">Optimisation des apports en micronutriments et recettes vitalité.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#01696f]/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6e3815]/5 rounded-full -ml-48 -mb-48" />
      </div>
    </main>
  );
}
