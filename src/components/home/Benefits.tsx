"use client";

import React from "react";
import { TrendingUp, Users, Handshake } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Benefits component: Highlights the three major value propositions of joining
 * the BNI Dreamers Indore chapter in a 3-card grid layout with hover animations.
 */
export function Benefits() {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: "Scale Your Business",
      icon: <TrendingUp className="h-6 w-6 text-brand-red" />,
      description: "Tap a network of 40+ local business owners who actively pass you warm, qualified, ready-to-buy referrals.",
      image: ASSETS.benefitScale,
    },
    {
      title: "Build Real Relationships",
      icon: <Users className="h-6 w-6 text-brand-red" />,
      description: "Lock out your competitors. One exclusive seat per business category ensures collaborative, long-term partnerships.",
      image: ASSETS.benefitRelationships,
    },
    {
      title: "Become a Master Connector",
      icon: <Handshake className="h-6 w-6 text-brand-red" />,
      description: "Weekly education modules, leadership roles, and presentation opportunities polish your networking and sales skills.",
      image: ASSETS.benefitMasterConnector,
    },
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { y: -8, shadow: "0 20px 40px -15px rgba(0, 0, 0, 0.08)" };

  return (
    <Section bg="cloud">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Join BNI?"
            title="The referral engine for your business."
            subtext="Stop relying on accidental leads. Build a consistent stream of word-of-mouth business within Indore's premier networking chapter."
          />
        </Reveal>

        {/* Staggered container for card grids */}
        <Reveal stagger staggerChildren={0.12} delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={hoverAnimation}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="bg-white p-8 rounded-card border border-black/5 shadow-card flex flex-col items-start text-left relative overflow-hidden group cursor-default"
              >
                {/* Accent red corner highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-[100px] pointer-events-none transition-transform duration-300 group-hover:scale-110" />

                {/* Top Image */}
                <div className="relative w-full h-44 mb-6 overflow-hidden rounded-xl bg-slate-50 shrink-0">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Icon wrapper */}
                <div className="bg-brand-red/10 p-3.5 rounded-xl mb-5 relative z-10 shrink-0">
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="font-heading font-extrabold text-xl text-ink mb-3 relative z-10">
                  {benefit.title}
                </h3>
                <p className="text-slate font-sans text-sm leading-relaxed relative z-10">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
