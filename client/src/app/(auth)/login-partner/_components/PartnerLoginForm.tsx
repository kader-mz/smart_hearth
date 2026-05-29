"use client";

import { useTransition, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { partnerLoginAction } from "../_actions/partner-login.action";

export function PartnerLoginForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await partnerLoginAction({
        store_name: fd.get("store_name"),
        email: fd.get("email"),
        password: fd.get("password"),
      });
      if (result?.error) setError(result.error);
    });
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label className="block text-xs font-semibold text-[#6f797a] mb-2" htmlFor="store_name">
          Nom de votre magasin
        </label>
        <input
          id="store_name"
          name="store_name"
          type="text"
          required
          autoComplete="organization"
          className="w-full px-4 py-3 bg-[#f7fafa] border border-[#bec8c9] rounded-lg focus:ring-2 focus:ring-[#6e3815]/30 focus:border-[#6e3815] outline-none transition-all text-sm"
          placeholder="Ex: UNO Hypermarché"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-[#6f797a] mb-2" htmlFor="email">
          Email professionnel
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-[#f7fafa] border border-[#bec8c9] rounded-lg focus:ring-2 focus:ring-[#6e3815]/30 focus:border-[#6e3815] outline-none transition-all text-sm"
          placeholder="contact@votremagasin.com"
        />
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-xs font-semibold text-[#6f797a]" htmlFor="password">
            Mot de passe
          </label>
          <a className="text-xs font-semibold text-[#6e3815] hover:underline" href="#">
            Mot de passe oublié ?
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            className="w-full px-4 py-3 bg-[#f7fafa] border border-[#bec8c9] rounded-lg focus:ring-2 focus:ring-[#6e3815]/30 focus:border-[#6e3815] outline-none transition-all text-sm pr-10"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6f797a] hover:text-[#181c1d]"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {error && (
        <p role="alert" className="text-sm text-[#ae2f34] bg-[#ae2f34]/5 border border-[#ae2f34]/20 rounded-lg px-4 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#6e3815] text-white py-3 px-6 rounded-lg text-sm font-semibold hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60"
      >
        {isPending ? "Connexion…" : "Se connecter en tant que partenaire"}
      </button>
    </form>
  );
}
