"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Experience component: Displays BNI meeting options (In-Person, Online, Hybrid)
 * utilizing vector illustration SVGs in a responsive 3-column grid layout.
 * Includes scroll target anchor ID 'experience'.
 */
export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: "In-Person",
      src: ASSETS.experienceInPerson,
      description: "A very personal way to meet, connect and grow.",
    },
    {
      title: "Online",
      src: ASSETS.experienceOnline,
      description: "Connect and grow conveniently from your home or office.",
    },
    {
      title: "Hybrid",
      src: ASSETS.experienceHybrid,
      description: "The best of both — meet in person and online.",
    },
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { y: -6, scale: 1.02 };

  return (
    <Section bg="white" id="experience">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Meeting Formats"
            title="Three Ways to Experience BNI"
            subtext="Whether in local conference rooms, digital portals, or combined formats, BNI chapters stay connected to exchange opportunities."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15} duration={0.6} stagger staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={hoverAnimation}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="bg-cloud p-8 rounded-card border border-black/5 shadow-sm text-center flex flex-col items-center justify-between group cursor-default"
              >
                {/* SVG Illustration Container */}
                <div className="relative h-32 w-32 mb-6 flex items-center justify-center bg-white rounded-full p-4 border border-black/5 shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={card.src}
                    alt={`${card.title} BNI format`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-ink mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate font-sans text-sm leading-relaxed max-w-xs mx-auto">
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
