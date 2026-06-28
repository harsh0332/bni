"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

const ScrollContext = createContext<Lenis | null>(null);

export const useScroll = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // If user prefers reduced motion, disable smooth scrolling
    if (shouldReduceMotion) {
      document.documentElement.classList.remove("lenis");
      return;
    }

    document.documentElement.classList.add("lenis");

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.1,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      lenisRef.current = null;
      document.documentElement.classList.remove("lenis");
    };
  }, [shouldReduceMotion]);

  return (
    <ScrollContext.Provider value={lenisRef.current}>
      {children}
    </ScrollContext.Provider>
  );
}
