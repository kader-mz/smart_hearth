"use client";

import { useState } from "react";

interface ProductImageProps {
  src: string | null;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  iconSize?: string;
}

export function ProductImage({
  src,
  alt,
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

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
