"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit" | "full";
  delay?: number;
  duration?: number;
  yOffset?: number;
  staggerChildren?: number;
  stagger?: boolean;
  className?: string;
}

/**
 * Reveal is a reusable wrapper component that reveals its content as it scrolls into view.
 * It features a fade + 16px rise transition by default and automatically disables physical offset
 * motion when prefers-reduced-motion is enabled by the user.
 * 
 * Set `stagger={true}` to stagger the entry of direct children elements.
 */
export function Reveal({
  children,
  width = "full",
  delay = 0,
  duration = 0.5,
  yOffset = 16,
  staggerChildren = 0.08,
  stagger = false,
  className = "",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Root variants for the staggered container
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay,
      },
    },
  };

  // Variants for individual animated elements
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : yOffset,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo
      },
    },
  };

  if (stagger) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={`${width === "full" ? "w-full" : "w-fit"} ${className}`}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <motion.div variants={itemVariants}>
                {child}
              </motion.div>
            );
          }
          return child;
        })}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${width === "full" ? "w-full" : "w-fit"} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}
