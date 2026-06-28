"use client";

import React from "react";
import { useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
  className?: string;
}

export function Marquee({ items, speed = 25, className = "" }: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`flex flex-wrap gap-3 items-center justify-center py-4 ${className}`}>
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-brand-red/5 border border-brand-red/10 rounded-pill text-[11px] font-mono font-medium text-brand-red tracking-wider uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  // Duplicate items to ensure seamless wrapping offset
  const repeatedItems = [...items, ...items];

  return (
    <div className={`relative overflow-hidden w-full select-none flex py-4 ${className}`}>
      {/* Soft gradient masks to fade the edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

      <div
        className="animate-marquee gap-6 flex shrink-0"
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-3 bg-brand-red/5 border border-brand-red/10 rounded-pill text-[11px] font-mono font-bold text-brand-red tracking-widest uppercase hover:bg-brand-red hover:text-white transition-colors duration-300 cursor-default shrink-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
