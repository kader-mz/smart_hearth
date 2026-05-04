import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },

  // Turbopack (activé par défaut dans Next.js 16)
  // root : pointe explicitement vers le projet pour ignorer le package-lock.json
  // parasite détecté à C:\Users\kader\ qui détournait la résolution des modules.
  turbopack: {
    root: __dirname,
  },

  // Conservé pour la compatibilité avec le mode --webpack
  webpack(config) {
    config.resolve.modules = [
      path.join(__dirname, "node_modules"),
      "node_modules",
    ];
    return config;
  },
};

export default nextConfig;
