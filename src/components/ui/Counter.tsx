"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  locale?: string;
}

/**
 * Reusable Counter component that triggers a count-up animation when scrolled into view.
 * Features customizable prefix/suffix strings, fractional decimals, localized formatting (e.g. en-IN),
 * and dynamic ease-out decelerations for premium aesthetics.
 */
export function Counter({
  value,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  locale = "en-IN",
}: CounterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Immediately show final value for reduced-motion users
    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let startTimestamp: number | null = null;
    const end = value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function: easeOutQuad
      const easedProgress = progress * (2 - progress);
      const current = easedProgress * end;

      if (progress < 1) {
        setCount(current);
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, isInView, shouldReduceMotion]);

  const formattedCount = count.toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
