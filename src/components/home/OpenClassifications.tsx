"use client";

import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * OpenClassifications component: Displays available membership positions (categories)
 * in BNI Dreamers Indore with pills and CTA action buttons.
 */
export function OpenClassifications() {
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    "Civil Contractor",
    "Nutritionist",
    "Home Automation",
    "Event Planner",
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { scale: 1.05, y: -2 };

  return (
    <Section bg="white" id="join">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Header */}
          <Reveal>
            <SectionHeading
              eyebrow="Exclusive Membership"
              title="Is your category still open?"
              subtext="To ensure collaboration instead of competition, BNI members secure exclusive representation for their professional classification. Check if your seat is available:"
              align="center"
            />
          </Reveal>

          {/* Category Pills */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3.5 mb-10 max-w-2xl mx-auto">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverAnimation}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="bg-cream text-brand-maroon border border-gold/45 rounded-full px-6 py-3 text-sm font-heading font-extrabold tracking-wide shadow-sm select-none cursor-default flex items-center gap-2 hover:bg-brand-red hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <HelpCircle className="h-4 w-4 shrink-0 opacity-70" />
                  {category}
                </motion.div>
              ))}
            </div>
          </Reveal>

          {/* Body Text Disclaimer */}
          <Reveal delay={0.25}>
            <p className="text-sm font-sans text-slate leading-relaxed mb-8 max-w-md mx-auto">
              If your profession is already taken in our chapter, we can recommend other growing BNI chapters in Indore to help you lock in a seat.
            </p>
          </Reveal>

          {/* Claim Your Category CTA */}
          <Reveal delay={0.35} className="flex justify-center">
            <Button href="/join" variant="primary" size="lg" className="group">
              Claim Your Category
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
