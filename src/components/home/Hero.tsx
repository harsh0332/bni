"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Premium Hero component with structured typographic lockups and an interactive
 * constellation network canvas that showcases BNI Indore Dreamers' network theme.
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Floating nodes configuration for the network visualizer
  const nodes = [
    { id: 1, cx: "20%", cy: "30%", r: "8", delay: 0 },
    { id: 2, cx: "50%", cy: "20%", r: "12", delay: 1.5 },
    { id: 3, cx: "80%", cy: "40%", r: "10", delay: 0.5 },
    { id: 4, cx: "30%", cy: "70%", r: "14", delay: 2 },
    { id: 5, cx: "70%", cy: "75%", r: "9", delay: 1 },
    { id: 6, cx: "60%", cy: "45%", r: "16", delay: 2.5 },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-cloud/50 to-white pt-28 pb-16 md:pt-36 md:pb-24 border-b border-black/5">
      {/* Background soft mesh gradients */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-red/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-maroon/5 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <Reveal duration={0.6}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/15 text-brand-red font-heading font-extrabold text-xs tracking-widest uppercase mb-6 w-fit">
                <Star className="h-3 w-3 fill-brand-red" />
                BNI Dreamers · Indore, M.P.
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-ink leading-[1.1] tracking-tight mb-6">
                Grow Your Business <br className="hidden sm:inline" />
                Through <span className="text-brand-red underline decoration-gold decoration-wavy decoration-2 underline-offset-8">Trusted</span> Referrals.
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate font-sans leading-relaxed mb-8 max-w-xl">
                Indore&apos;s member-focused networking chapter — 40+ business owners meeting every week to pass real referrals, share qualified leads, and grow together.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.2} duration={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <Button href="/join" variant="primary" size="lg" className="group">
                  Get Invited
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button href="#experience" variant="outline" size="lg">
                  Visit a Meeting
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Premium Visual Motif */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] flex items-center justify-center group">
            
            {/* Soft backdrop blur card backing for constellation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-maroon/5 via-brand-red/5 to-gold/5 rounded-3xl border border-black/5 backdrop-blur-sm z-0" />
            
            {/* Supporting Real Image Card */}
            <div className="absolute inset-4 sm:inset-6 rounded-2xl overflow-hidden border border-black/5 shadow-lg z-10">
              <Image
                src="/images/team/chapter-group-photo.jpg"
                alt="BNI Dreamers Indore Chapter Group Photo"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent mix-blend-overlay" />
            </div>

            {/* Network Vector Graphics - layered over the image */}
            <svg className="absolute inset-0 w-full h-full z-20 opacity-90" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              {/* Constellation lines */}
              <line x1="20%" y1="30%" x2="50%" y2="20%" stroke="#CF2030" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
              <line x1="50%" y1="20%" x2="80%" y2="40%" stroke="#CF2030" strokeWidth="1.5" opacity="0.4" />
              <line x1="20%" y1="30%" x2="30%" y2="70%" stroke="#CF2030" strokeWidth="1" opacity="0.3" />
              <line x1="30%" y1="70%" x2="60%" y2="45%" stroke="#7A0D14" strokeWidth="2" opacity="0.5" />
              <line x1="50%" y1="20%" x2="60%" y2="45%" stroke="#CF2030" strokeWidth="1.5" opacity="0.45" />
              <line x1="60%" y1="45%" x2="80%" y2="40%" stroke="#C9A24B" strokeWidth="1" opacity="0.6" />
              <line x1="30%" y1="70%" x2="70%" y2="75%" stroke="#CF2030" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.4" />
              <line x1="60%" y1="45%" x2="70%" y2="75%" stroke="#7A0D14" strokeWidth="2.5" opacity="0.5" />
              <line x1="70%" y1="75%" x2="80%" y2="40%" stroke="#C9A24B" strokeWidth="1.5" opacity="0.45" />

              {/* Glowing circles */}
              {nodes.map((node) => (
                <g key={node.id}>
                  {/* Outer pulsing layer */}
                  {!shouldReduceMotion && (
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r={parseFloat(node.r) * 1.6}
                      fill={node.id % 2 === 0 ? "#C9A24B" : "#CF2030"}
                      opacity="0.15"
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                    />
                  )}
                  {/* Central Node */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill={node.id % 2 === 0 ? "url(#gold-grad)" : "url(#red-grad)"}
                    className="shadow-sm"
                  />
                </g>
              ))}

              {/* Definitions */}
              <defs>
                <linearGradient id="red-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CF2030" />
                  <stop offset="100%" stopColor="#7A0D14" />
                </linearGradient>
                <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A24B" />
                  <stop offset="100%" stopColor="#7A0D14" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating Trust Badge - layered on top of SVG */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-30 flex items-center gap-3.5 bg-white/90 backdrop-blur-md border border-gold/30 rounded-2xl px-5 py-4 shadow-card max-w-[280px]"
            >
              <div className="bg-gold/15 p-2 rounded-xl text-gold shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex flex-col text-left font-sans">
                <span className="text-xs text-slate font-medium">Chapter Profile</span>
                <span className="text-sm font-bold text-ink leading-tight">40+ Members</span>
                <span className="text-[11px] text-slate-500 font-medium">Hotel Sayaji · Wed 7:30 AM</span>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
