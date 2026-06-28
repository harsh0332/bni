"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "children"> {
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

/**
 * Button is a reusable button component that can render as a next/link or an interactive HTML button.
 * It features primary, outline, and ghost variants, size options, and a subtle spring-based hover lift
 * that respects prefers-reduced-motion.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  // Baseline styling common to all button variants
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-semibold tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-full";

  // Variant-specific styling mapping our brand colors
  const variantClasses = {
    primary:
      "bg-brand-red text-white hover:bg-brand-red-dark active:bg-brand-maroon shadow-lift hover:shadow-xl border border-transparent",
    outline:
      "bg-transparent text-ink border-2 border-brand-red hover:bg-brand-red hover:text-white hover:border-brand-red",
    ghost:
      "bg-transparent text-slate hover:text-brand-red hover:bg-brand-red/5 border border-transparent",
  };

  // Size-specific padding and font sizes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Framer Motion Hover/Tap animations
  const hoverAnimation = shouldReduceMotion ? {} : { y: -2 };
  const tapAnimation = shouldReduceMotion ? {} : { y: 0 };

  if (href) {
    return (
      <motion.div
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
        className="inline-block"
      >
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      transition={{ type: "spring", stiffness: 450, damping: 20 }}
      className={combinedClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
}
