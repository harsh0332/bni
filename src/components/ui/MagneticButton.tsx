"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
}

export function MagneticButton({
  children,
  href,
  className = "",
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(false);

  // Springs for smooth movement
  const springConfig = { stiffness: 150, damping: 15, mass: 0.6 };
  const x = useSpring(useMotionValue(0), springConfig);
  const y = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || isTouch || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Pull strength factor (0.3 = 30% attraction offset)
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const buttonClasses = `inline-flex items-center justify-center font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 sm:px-8 sm:py-4 rounded-pill transition-all duration-300 relative select-none shadow-soft ${
    variant === "primary"
      ? "bg-brand-red text-white hover:bg-brand-red-dark hover:shadow-glow-red"
      : variant === "outline"
      ? "border border-brand-red/30 bg-transparent text-brand-red hover:border-brand-red hover:bg-brand-red/5"
      : "bg-transparent text-slate hover:bg-black/5"
  } ${className}`;

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block relative z-10"
    >
      {href ? (
        <Link href={href} className={buttonClasses} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button className={buttonClasses} onClick={onClick}>
          {children}
        </button>
      )}
    </motion.div>
  );
}
