"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * LeadershipPreview component: Introduces the 4 core chapter officers.
 * Leverages the dynamic PLACEHOLDER SVG generator for avatar cards, and
 * links to the secondary leadership team route.
 */
export function LeadershipPreview() {
  const shouldReduceMotion = useReducedMotion();

  const officers = [
    {
      name: "Shreyas Bhokardankar",
      role: "President",
      photo: "/images/team/shreyas-bhokardankar.jpg",
    },
    {
      name: "Priyanka Bhatia",
      role: "Vice President",
      photo: "/images/team/priyanka-bhatia.jpg",
    },
    {
      name: "Dushyant Mangal",
      role: "Secretary / Treasurer",
      photo: "/images/team/dushyant-mangal.jpg",
    },
    {
      name: "Sumit Bohare",
      role: "Membership Committee",
      photo: "/images/team/sumit-bohare.jpg",
    },
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { y: -6 };

  return (
    <Section bg="cloud" id="leadership">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Chapter Leadership"
            title="Led by people who show up."
            subtext="Meet the executive team committed to maintaining BNI Dreamers' high performance standards, structural accountability, and referral growth."
            align="center"
          />
        </Reveal>

        {/* Officers Grid */}
        <Reveal delay={0.15} duration={0.6} stagger staggerChildren={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {officers.map((officer, index) => (
              <motion.div
                key={index}
                whileHover={hoverAnimation}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="bg-white rounded-card overflow-hidden shadow-card border border-black/5 flex flex-col group cursor-default"
              >
                {/* Avatar Display utilizing REAL TEAM IMAGE */}
                <div className="relative h-[280px] w-full bg-cloud overflow-hidden">
                  <Image
                    src={officer.photo}
                    alt={officer.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gold overlay on card image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-ink mb-1">
                      {officer.name}
                    </h3>
                    <p className="text-xs text-slate font-sans font-medium tracking-wide uppercase">
                      {officer.role}
                    </p>
                  </div>
                  
                  {/* Indore Madhya Pradesh chapter tag */}
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-4 block">
                    BNI Dreamers Indore
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* Bottom CTA Redirect */}
        <Reveal delay={0.3} className="flex justify-center">
          <Button href="/leadership" variant="outline" className="group">
            Meet the Full Team
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
