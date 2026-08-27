"use client";

import { useState } from "react";

type FallbackImageProps = {
  src: string;
  alt: string;
  gradient: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders an image that fades in over a brand gradient fallback.
 *
 * Key design decisions:
 * - Gradient is applied as a CSS background-image on the wrapper div itself
 *   (not a child element), so it always fills the box regardless of
 *   whether the wrapper is position:absolute or position:static.
 * - The <img> uses width/height 100% + object-fit cover so it fills the
 *   wrapper without needing position:absolute on the img, which avoids the
 *   Tailwind class-ordering conflict between `relative` and `absolute`
 *   that was causing the entire component to render at zero height.
 * - The wrapper has NO hardcoded position class — className controls that
 *   entirely, so absolute-fill and sized-block use cases both work.
 */
export default function FallbackImage({
  src,
  alt,
  gradient,
  className = "",
  priority = false,
}: FallbackImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`overflow-hidden bg-gradient-to-br ${gradient} ${className}`}>
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onError={() => setErrored(true)}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}
