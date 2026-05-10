import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "pplx-res.cloudinary.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
