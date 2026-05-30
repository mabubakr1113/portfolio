"use client";

import { useEffect, useRef, useState } from "react";

const PORTRAITS = [
  "/portrait.jpeg",
  "/portrait.jpg",
  "/portrait.png",
  "/portrait.webp",
  "/avatar.svg",
];

function Portrait() {
  const [index, setIndex] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const src = PORTRAITS[index];
  const isFallback = src === "/avatar.svg";

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth === 0 && index < PORTRAITS.length - 1) {
      setIndex(index + 1);
    }
  }, [index]);

  return (
    <img
      ref={imgRef}
      key={src}
      src={src}
      alt="Mohammad Abubakr"
      className="absolute inset-0 w-full h-full object-cover"
      style={{
        filter: isFallback ? "none" : "grayscale(0.5) contrast(1.05) sepia(0.06)",
        padding: isFallback ? "20%" : 0,
      }}
      onError={() => index < PORTRAITS.length - 1 && setIndex(index + 1)}
    />
  );
}

export default function PortraitFrame() {
  return (
    <figure className="col-span-12 md:col-span-3 w-full max-w-[14rem] md:max-w-[15rem] lg:max-w-[16rem] mx-auto md:ml-auto md:mr-0">
      <div className="relative">
        <div className="frame-ink p-2 bg-paper">
          <div className="relative w-full aspect-[3/4] overflow-hidden bg-paper-2">
            <Portrait />
            <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-accent" />
            <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-accent" />
            <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-accent" />
            <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-accent" />
          </div>
        </div>
        <div className="absolute -top-3 -left-3 chip">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Fig. A
        </div>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
        <span>The author — Turku, 2026.</span>
        <span className="text-accent">SHOT ON 35MM</span>
      </figcaption>
    </figure>
  );
}
