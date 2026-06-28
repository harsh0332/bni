"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitReveal } from "@/components/ui/SplitReveal";

// Roster classifications for designated nodes in the network
const INITIAL_NODES = [
  { id: 1, x: 80, y: 120, label: "Realtor", color: "gold", size: 8 },
  { id: 2, x: 180, y: 70, label: "Insurance", color: "red", size: 10 },
  { id: 3, x: 300, y: 110, label: "Solar", color: "maroon", size: 7 },
  { id: 4, x: 420, y: 150, label: "Furniture", color: "red", size: 9 },
  { id: 5, x: 120, y: 220, color: "maroon", size: 6 },
  { id: 6, x: 220, y: 180, label: "Architect", color: "gold", size: 12 },
  { id: 7, x: 340, y: 240, color: "red", size: 8 },
  { id: 8, x: 450, y: 260, label: "Finance", color: "gold", size: 10 },
  { id: 9, x: 70, y: 350, label: "Travels", color: "red", size: 8 },
  { id: 10, x: 170, y: 310, color: "maroon", size: 6 },
  { id: 11, x: 280, y: 340, label: "Logistics", color: "gold", size: 9 },
  { id: 12, x: 390, y: 380, label: "Designer", color: "maroon", size: 7 },
  { id: 13, x: 130, y: 440, label: "Theatre", color: "gold", size: 10 },
  { id: 14, x: 240, y: 420, color: "red", size: 8 },
  { id: 15, x: 350, y: 450, color: "gold", size: 6 },
  { id: 16, x: 430, y: 460, color: "maroon", size: 7 },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7],
  [4, 5], [5, 6], [6, 7], [4, 9], [5, 10], [6, 11], [7, 12],
  [8, 9], [9, 10], [10, 11], [11, 12], [8, 12], [9, 13], [10, 14], [11, 15],
  [12, 13], [13, 14], [14, 15]
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // References to directly manipulate SVG nodes (cx/cy/x1/y1/x2/y2) at 60fps
  const svgNodesRef = useRef<(SVGCircleElement | null)[]>([]);
  const svgLinesRef = useRef<(SVGLineElement | null)[]>([]);
  const svgTempLinesRef = useRef<(SVGLineElement | null)[]>([]);
  const svgLabelsRef = useRef<(SVGTextElement | null)[]>([]);

  // Physics animation states in refs to bypass React render cycles
  const nodesStateRef = useRef(
    INITIAL_NODES.map((n) => ({
      x: n.x,
      y: n.y,
      origX: n.x,
      origY: n.y,
      vx: 0,
      vy: 0,
    }))
  );
  
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  // Detect touch screens
  useEffect(() => {
    const handleTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  // Update mouse position inside ref for loop safety
  useEffect(() => {
    mouseRef.current = { x: mousePos.x, y: mousePos.y, active: isHovering && !isTouch };
  }, [mousePos, isHovering, isTouch]);

  // physics tracking layout interpolation
  useEffect(() => {
    if (isTouch || shouldReduceMotion) return;

    let rafId: number;

    const updatePhysics = () => {
      const { x: mx, y: my, active } = mouseRef.current;
      const nodes = nodesStateRef.current;

      // 1. Update node displacement physics
      nodes.forEach((node, idx) => {
        let targetX = node.origX;
        let targetY = node.origY;

        if (active) {
          const dx = mx - node.origX;
          const dy = my - node.origY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            // Repel nodes gently (parallax depth)
            const force = (180 - dist) / 180;
            targetX = node.origX - (dx / dist) * force * 24;
            targetY = node.origY - (dy / dist) * force * 24;
          }
        }

        // Spring stiffness and damping updates
        const ax = (targetX - node.x) * 0.08;
        const ay = (targetY - node.y) * 0.08;
        node.vx = (node.vx + ax) * 0.82;
        node.vy = (node.vy + ay) * 0.82;
        node.x += node.vx;
        node.y += node.vy;

        // Apply coordinates directly to SVG DOM nodes
        const circle = svgNodesRef.current[idx];
        if (circle) {
          circle.setAttribute("cx", node.x.toString());
          circle.setAttribute("cy", node.y.toString());

          // Stagger opacity/glow offsets close to cursor
          if (active) {
            const dx = mx - node.x;
            const dy = my - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              circle.setAttribute("opacity", "1");
              circle.setAttribute("stroke", "var(--gold)");
              circle.setAttribute("stroke-width", "2");
            } else {
              circle.setAttribute("opacity", "0.75");
              circle.setAttribute("stroke", "none");
              circle.setAttribute("stroke-width", "0");
            }
          } else {
            circle.setAttribute("opacity", "0.75");
            circle.setAttribute("stroke", "none");
            circle.setAttribute("stroke-width", "0");
          }
        }

        // Apply text labels coordinates
        const label = svgLabelsRef.current[idx];
        if (label) {
          label.setAttribute("x", node.x.toString());
          label.setAttribute("y", (node.y - 12).toString());
        }
      });

      // 2. Update node connection lines
      CONNECTIONS.forEach((conn, idx) => {
        const line = svgLinesRef.current[idx];
        if (line) {
          const n1 = nodes[conn[0]];
          const n2 = nodes[conn[1]];
          line.setAttribute("x1", n1.x.toString());
          line.setAttribute("y1", n1.y.toString());
          line.setAttribute("x2", n2.x.toString());
          line.setAttribute("y2", n2.y.toString());
        }
      });

      // 3. Update temporary cursor links
      if (active) {
        const dists = nodes.map((node, idx) => {
          const dx = mx - node.x;
          const dy = my - node.y;
          return { idx, dist: Math.sqrt(dx * dx + dy * dy), node };
        });

        dists.sort((a, b) => a.dist - b.dist);

        for (let i = 0; i < 3; i++) {
          const tempLine = svgTempLinesRef.current[i];
          if (tempLine) {
            const item = dists[i];
            if (item && item.dist < 160) {
              const opacity = ((160 - item.dist) / 160) * 0.35;
              tempLine.setAttribute("x1", mx.toString());
              tempLine.setAttribute("y1", my.toString());
              tempLine.setAttribute("x2", item.node.x.toString());
              tempLine.setAttribute("y2", item.node.y.toString());
              tempLine.setAttribute("opacity", opacity.toString());
            } else {
              tempLine.setAttribute("opacity", "0");
            }
          }
        }
      } else {
        for (let i = 0; i < 3; i++) {
          const tempLine = svgTempLinesRef.current[i];
          if (tempLine) tempLine.setAttribute("opacity", "0");
        }
      }

      rafId = requestAnimationFrame(updatePhysics);
    };

    rafId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(rafId);
  }, [isTouch, shouldReduceMotion]);

  // Track coordinates relative to the column element
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch || shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rx = ((e.clientX - rect.left) / rect.width) * 500;
    const ry = ((e.clientY - rect.top) / rect.height) * 500;
    setMousePos({ x: rx, y: ry });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePos({ x: -1000, y: -1000 });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-paper pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-15%] right-[-15%] w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[-15%] w-[700px] h-[700px] rounded-full bg-brand-maroon/5 blur-[160px]" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column: Premium Editorial Typography (7 columns) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow kicker with pulsing live indicator dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/15 w-fit mb-6">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              <span className="font-mono text-[10px] font-bold text-brand-red tracking-widest uppercase select-none">
                BNI DREAMERS — INDORE, M.P.
              </span>
            </div>

            {/* Editorial Title revealed line-by-line */}
            <h1 className="text-display-md sm:text-display-lg lg:text-display-xl font-display font-black text-ink tracking-tight mb-8 leading-[0.95]">
              <SplitReveal type="words" delay={0.05}>
                Grow your business through
              </SplitReveal>
              <span className="relative inline-block w-full">
                <SplitReveal type="words" delay={0.25}>
                  trusted referrals.
                </SplitReveal>
                {/* Subtle gold line accent under 'trusted' */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-1 left-0 w-full h-[3px] bg-gold origin-left rounded"
                />
              </span>
            </h1>

            {/* Subtext description */}
            <p className="text-base sm:text-lg text-slate font-sans leading-relaxed mb-10 max-w-xl">
              Indore&apos;s member-focused business network — 40+ leading owners meeting every week to pass warm referrals, share qualified leads, and grow operations systematically.
            </p>

            {/* Dual Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <MagneticButton href="/join" variant="primary">
                Get Invited
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
              <Link
                href="#experience"
                className="inline-flex items-center justify-center font-heading font-extrabold text-sm tracking-wider uppercase px-8 py-4 rounded-pill border border-slate/20 hover:border-brand-red hover:bg-brand-red/5 text-slate hover:text-brand-red transition-all duration-300 select-none shadow-soft"
              >
                Visit a Meeting
              </Link>
            </div>
          </div>

          {/* Right Column: Signature referral-network visual (5 columns) */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 relative w-full h-[360px] sm:h-[450px] lg:h-[500px] flex items-center justify-center cursor-crosshair rounded-card border border-black/5 bg-paper/30 backdrop-blur-sm overflow-hidden select-none"
          >
            {/* Authentic chapter group photo masked as a low-opacity backdrop */}
            <div className="absolute inset-0 z-0 opacity-[0.14] select-none pointer-events-none transition-opacity duration-500 hover:opacity-[0.25]">
              <Image
                src="/images/team/chapter-group-photo.jpg"
                alt="BNI Dreamers Indore Group Photo"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-paper" />
              <div className="absolute inset-0 bg-gradient-to-r from-paper via-transparent to-paper" />
            </div>

            {/* Interactive SVG Network Canvas */}
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full relative z-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
            >
              {/* 1. Base network connection lines */}
              {CONNECTIONS.map((conn, index) => {
                const n1 = INITIAL_NODES[conn[0]];
                const n2 = INITIAL_NODES[conn[1]];
                return (
                  <motion.line
                    key={`line-${index}`}
                    ref={(el) => {
                      svgLinesRef.current[index] = el;
                    }}
                    x1={n1.x}
                    y1={n1.y}
                    x2={n2.x}
                    y2={n2.y}
                    stroke="var(--gold)"
                    className="stroke-gold/20"
                    strokeWidth="1.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: index * 0.015, ease: "easeOut" }}
                  />
                );
              })}

              {/* 2. Temporary cursor drawing lines (3 lines max) */}
              {!isTouch && !shouldReduceMotion && [0, 1, 2].map((i) => (
                <line
                  key={`temp-line-${i}`}
                  ref={(el) => {
                    svgTempLinesRef.current[i] = el;
                  }}
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={0}
                  stroke="#CF2030"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  opacity="0"
                />
              ))}

              {/* 3. Constellation nodes */}
              {INITIAL_NODES.map((node, index) => {
                const colorClass =
                  node.color === "red"
                    ? "fill-brand-red stroke-white/80"
                    : node.color === "gold"
                    ? "fill-gold stroke-white/80"
                    : "fill-brand-maroon stroke-white/80";

                return (
                  <g key={`node-group-${index}`}>
                    <motion.circle
                      ref={(el) => {
                        svgNodesRef.current[index] = el;
                      }}
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      className={`${colorClass}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.75 }}
                      transition={{ type: "spring", stiffness: 220, damping: 15, delay: index * 0.025 }}
                    />
                    
                    {/* Render technical mono labels for designated classifications */}
                    {node.label && (
                      <text
                        ref={(el) => {
                          svgLabelsRef.current[index] = el;
                        }}
                        x={node.x}
                        y={node.y - 12}
                        textAnchor="middle"
                        className="font-mono text-[9px] font-bold fill-slate tracking-widest uppercase select-none pointer-events-none"
                      >
                        {node.label}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Floating Glassmorphic Chapter Profile card */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
              transition={shouldReduceMotion ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-3 bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl px-5 py-4 shadow-float max-w-[280px] pointer-events-none select-none"
            >
              <div className="bg-gold/15 p-2 rounded-xl text-gold shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-col text-left font-sans">
                <span className="text-[10px] text-slate font-bold uppercase tracking-wider">
                  Indore Chapter Profile
                </span>
                <span className="text-sm font-extrabold text-ink leading-tight">
                  40+ Members
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Hotel Sayaji · Wed 7:30 AM
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
