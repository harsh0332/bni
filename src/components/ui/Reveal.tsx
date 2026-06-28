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
  variant?: "fade-up" | "clip-up" | "blur-in";
}

/**
 * Upgraded Reveal component supporting:
 * - 'fade-up' (standard easeUp movement)
 * - 'clip-up' (inset wipe reveal)
 * - 'blur-in' (luxury reveal with scaling and blur effects)
 */
export function Reveal({
  children,
  width = "full",
  delay = 0,
  duration = 0.6,
  yOffset = 16,
  staggerChildren = 0.08,
  stagger = false,
  className = "",
  variant = "fade-up",
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

  // Get selected variant configurations
  const getVariants = (type: "fade-up" | "clip-up" | "blur-in"): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: duration },
        },
      };
    }

    switch (type) {
      case "clip-up":
        return {
          hidden: {
            opacity: 0,
            y: yOffset || 30,
            clipPath: "inset(100% 0% 0% 0%)",
          },
          visible: {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
              duration: duration,
              ease: [0.16, 1, 0.3, 1], // easeOutExpo
            },
          },
        };
      case "blur-in":
        return {
          hidden: {
            opacity: 0,
            scale: 0.97,
            filter: "blur(8px)",
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
              duration: duration,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case "fade-up":
      default:
        return {
          hidden: {
            opacity: 0,
            y: yOffset,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
    }
  };

  const itemVariants = getVariants(variant);

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
              <motion.div variants={itemVariants} className={width === "full" ? "w-full" : "w-fit"}>
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
