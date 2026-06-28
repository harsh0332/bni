"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import SplitType from "split-type";

interface SplitRevealProps {
  children: string;
  className?: string;
  type?: "words" | "lines";
  delay?: number;
}

export function SplitReveal({
  children,
  className = "",
  type = "words",
  delay = 0,
}: SplitRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    // Initialize SplitType on client
    const split = new SplitType(containerRef.current, { types: type });
    const targets = type === "words" ? split.words : split.lines;

    if (targets && targets.length > 0) {
      // Setup initial hidden states and parent clip containers
      targets.forEach((el) => {
        el.style.display = "inline-block";
        el.style.transform = "translateY(110%)";
        el.style.opacity = "0";
        el.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out";
        
        // Wrap in dynamic overflow-hidden container if not already wrapped
        const parent = el.parentElement;
        if (parent) {
          parent.style.overflow = "hidden";
          parent.style.display = "inline-block";
          parent.style.verticalAlign = "bottom";
        }
      });

      // Reveal stagger elements when in view
      if (isInView) {
        targets.forEach((el, index) => {
          setTimeout(() => {
            el.style.transform = "translateY(0%)";
            el.style.opacity = "1";
          }, (delay + index * 0.04) * 1000);
        });
      }
    }

    return () => {
      split.revert();
    };
  }, [children, type, delay, isInView, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <span
      ref={containerRef}
      className={`inline-block w-full ${className}`}
      style={{ opacity: isInView ? 1 : 0 }}
    >
      {children}
    </span>
  );
}
