"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  // Subtle pulsing motion for background circles
  const bgCircleAnimation = shouldReduceMotion 
    ? {} 
    : { scale: [1, 1.05, 1], rotate: [0, 5, 0] };

  return (
    <Section bg="dark" className="!bg-gradient-to-br from-brand-red via-brand-red/95 to-brand-maroon py-20 md:py-28 relative overflow-hidden text-center">
      {/* Film grain noise texture overlay */}
      <div className="noise-grain absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true" />

      {/* Abstract vector circle highlights with subtle motion */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={bgCircleAnimation}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
        />
        <motion.div
          animate={bgCircleAnimation}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-50%] right-[-20%] w-[700px] h-[700px] rounded-full bg-black/25 blur-3xl"
        />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <div className="flex flex-col items-center">
          
          {/* Eyebrow marker */}
          <Reveal>
            <span className="font-mono text-[9px] font-bold text-gold uppercase tracking-[0.3em] block mb-6">
              09 / VISIT OUR CHAPTER
            </span>
          </Reveal>

          {/* Main Title */}
          <Reveal delay={0.05}>
            <h2 className="text-display-md sm:text-display-lg font-display font-black text-white leading-[1.0] tracking-tight mb-6">
              Visit a meeting <br className="sm:hidden" /> this Wednesday.
            </h2>
          </Reveal>

          {/* Subheading text */}
          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base md:text-lg text-cream/90 font-sans leading-relaxed max-w-2xl mb-12">
              See BNI Dreamers Indore in action at Hotel Sayaji, Vijay Nagar, at 7:30 AM. No long-term commitment required — just bring a stack of business cards, one referral, and one clear business ask.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.25}>
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full sm:w-auto">
              {/* Primary CTA using MagneticButton with white styling */}
              <MagneticButton href="/join" variant="primary" className="!bg-white !text-brand-red hover:!bg-cream hover:!text-brand-red-dark hover:shadow-glow-red">
                Get Invited
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
              
              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-heading font-extrabold text-sm tracking-wider uppercase px-8 py-4 rounded-pill border border-white/20 hover:border-white hover:bg-white/5 text-white transition-all duration-300 select-none shadow-soft gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Link>
            </div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
