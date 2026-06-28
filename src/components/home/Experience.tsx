"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: "In-Person Meetings",
      label: "FORMAT 01 // PHYSICAL",
      photo: ASSETS.experienceInPersonPhoto,
      description: "A highly personal, face-to-face environment to form deep connections and close deals locally.",
    },
    {
      title: "Online Sessions",
      label: "FORMAT 02 // VIRTUAL",
      photo: ASSETS.experienceOnlinePhoto,
      description: "Convenient, high-speed virtual meetings to exchange referrals from anywhere in the world.",
    },
    {
      title: "Hybrid Strategy",
      label: "FORMAT 03 // INTEGRATED",
      photo: ASSETS.experienceHybridPhoto,
      description: "The absolute best of both worlds — alternate between virtual speed and physical trust-building.",
    },
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { y: -8 };

  return (
    <Section bg="white" id="experience" className="border-t border-black/5 relative overflow-hidden">
      {/* Film grain noise texture */}
      <div className="noise-grain absolute inset-0 opacity-[0.02] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">
            05 / THE FORMATS
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
            Three ways to experience BNI.
          </h2>
          <p className="text-sm sm:text-base text-slate font-sans mt-4 max-w-xl leading-relaxed">
            Whether in local conference rooms, digital portals, or combined formats, BNI chapters stay connected to exchange high-value referrals.
          </p>
        </div>

        {/* 3-Column Layout */}
        <Reveal delay={0.1} duration={0.6} stagger staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={hoverAnimation}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-cloud p-6 rounded-card border border-black/5 shadow-soft flex flex-col justify-between group cursor-default relative overflow-hidden h-full"
              >
                <div>
                  {/* Photo container with zoom on hover */}
                  <div className="relative w-full h-56 mb-6 overflow-hidden rounded-xl bg-white border border-black/5 shadow-inner">
                    <Image
                      src={card.photo}
                      alt={`${card.title} BNI format`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Kicker label */}
                  <span className="font-mono text-[9px] font-bold text-gold tracking-widest block mb-2 text-left">
                    {card.label}
                  </span>

                  {/* Title & Description */}
                  <h3 className="font-display font-extrabold text-xl text-ink mb-3 text-left">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate font-sans text-xs sm:text-sm leading-relaxed text-left">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
