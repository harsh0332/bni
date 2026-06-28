"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion, useTransform, MotionProps } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = "", maxTilt = 6 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Spring animations for rotation
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  // Glare animations
  const glareX = useSpring(useMotionValue(0), springConfig);
  const glareY = useSpring(useMotionValue(0), springConfig);
  const glareOpacity = useSpring(useMotionValue(0), springConfig);

  // Convert raw values to percentage strings using useTransform hook
  const glareXPercent = useTransform(glareX, (val) => `${val}%`);
  const glareYPercent = useTransform(glareY, (val) => `${val}%`);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Calculate rotation angles
    const rX = (0.5 - y) * maxTilt;
    const rY = (x - 0.5) * maxTilt;

    rotateX.set(rX);
    rotateY.set(rY);

    // Glare coordinates
    glareX.set(x * 100);
    glareY.set(y * 100);
    glareOpacity.set(0.12);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Dynamic light reflection glare */}
      {!shouldReduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle 220px at var(--glare-x) var(--glare-y), rgba(255, 255, 255, 0.35), transparent)`,
            // Custom CSS properties
            "--glare-x": glareXPercent,
            "--glare-y": glareYPercent,
            opacity: glareOpacity,
            pointerEvents: "none",
            zIndex: 10,
          } as MotionProps["style"] & Record<string, unknown>}
          className="rounded-card"
        />
      )}
      
      {/* 3D Content offset wrapper */}
      <div style={{ transform: "translateZ(8px)" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
