"use client";

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * FinalCTA component: A full-width call-to-action band with a gradient background
 * from brand-red to brand-maroon.
 */
export function FinalCTA() {
  return (
    <Section bg="dark" className="!bg-gradient-to-br from-brand-red via-brand-red-dark to-brand-maroon py-16 md:py-24 relative overflow-hidden text-center">
      {/* Abstract vector circle highlights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-50%] left-[-20%] w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-black/20 blur-3xl" />
      </div>

      <Container className="relative z-10 max-w-4xl">
        <div className="flex flex-col items-center">
          
          {/* Main Title */}
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white leading-tight tracking-tight mb-4">
              Visit a meeting this Wednesday.
            </h2>
          </Reveal>

          {/* Subheading text */}
          <Reveal delay={0.15}>
            <p className="text-sm sm:text-base md:text-lg text-cream/90 font-sans leading-relaxed max-w-2xl mb-10">
              See BNI Dreamers Indore in action at Hotel Sayaji, Vijay Nagar, at 7:30 AM. No long-term commitment required — just bring a stack of business cards, one referral, and one clear business ask.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <Button
                href="/join"
                className="!bg-white !text-brand-red hover:!bg-cream hover:!text-brand-red-dark font-heading font-bold text-sm shadow-xl shrink-0 py-3.5 px-8 uppercase tracking-wider group"
              >
                Get Invited
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                href="/contact"
                className="!bg-transparent !text-white !border-white hover:!bg-white hover:!text-brand-red font-heading font-bold text-sm shrink-0 py-3.5 px-8 uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </div>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
