"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  src: string | null;
  alt: string;
  /**
   * "card"   → fill mode, adapté aux grilles (parent doit avoir position:relative + hauteur fixe)
   * "detail" → width/height explicites, adapté aux pages détail (pas besoin de relative sur le parent)
   */
  size?: "card" | "detail";
  className?: string;
  placeholderClassName?: string;
  iconSize?: string;
}

export function ProductImage({
  src,
  alt,
  size = "card",
  className = "w-full h-full object-cover",
  placeholderClassName = "w-full h-full flex items-center justify-center bg-surface-container-low",
  iconSize = "text-5xl",
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={placeholderClassName}>
        <div className="flex flex-col items-center gap-2 text-outline-variant">
          <span className={`material-symbols-outlined ${iconSize}`}>nutrition</span>
          <span className="text-xs font-semibold text-outline uppercase tracking-wider">
            {alt.slice(0, 2)}
          </span>
        </div>
      </div>
    );
  }

  if (size === "detail") {
    return (
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  // size === "card" — fill mode pour les grilles de cartes
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setFailed(true)}
    />
  );
}
