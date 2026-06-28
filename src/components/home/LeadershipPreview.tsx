"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function LeadershipPreview() {
  const shouldReduceMotion = useReducedMotion();

  const officers = [
    {
      name: "Shreyas Bhokardankar",
      role: "President",
      label: "OFFICE // 01",
      photo: "/images/team/shreyas-bhokardankar.jpg",
    },
    {
      name: "Priyanka Bhatia",
      role: "Vice President",
      label: "OFFICE // 02",
      photo: "/images/team/priyanka-bhatia.jpg",
    },
    {
      name: "Dushyant Mangal",
      role: "Secretary / Treasurer",
      label: "OFFICE // 03",
      photo: "/images/team/dushyant-mangal.jpg",
    },
    {
      name: "Sumit Bohare",
      role: "Membership Committee",
      label: "OFFICE // 04",
      photo: "/images/team/sumit-bohare.jpg",
    },
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { y: -8 };

  return (
    <Section bg="cloud" id="leadership" className="border-t border-b border-black/5 relative overflow-hidden">
      {/* Film grain noise texture */}
      <div className="noise-grain absolute inset-0 opacity-[0.015] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 text-left">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">
              07 / LEADERSHIP TEAM
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
              Led by people who show up.
            </h2>
            <p className="text-sm sm:text-base text-slate font-sans mt-4 max-w-xl leading-relaxed">
              Meet the executive team committed to maintaining BNI Dreamers Indore&apos;s high performance standards, structural accountability, and referral growth.
            </p>
          </div>
          
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 font-heading font-extrabold text-xs tracking-wider uppercase text-brand-red hover:text-brand-maroon transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded py-0.5"
          >
            Meet the Full Team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Officers Grid */}
        <Reveal delay={0.15} duration={0.6} stagger staggerChildren={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {officers.map((officer, index) => (
              <motion.div
                key={index}
                whileHover={hoverAnimation}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="bg-white rounded-card overflow-hidden shadow-soft border border-black/5 flex flex-col group cursor-default text-left relative"
              >
                {/* Photo container */}
                <div className="relative h-[300px] w-full bg-cloud overflow-hidden border-b border-black/5">
                  <Image
                    src={officer.photo}
                    alt={officer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Mono Label */}
                    <span className="font-mono text-[9px] font-bold text-gold tracking-widest block mb-2">
                      {officer.label}
                    </span>
                    
                    <h3 className="font-display font-extrabold text-lg text-ink leading-tight mb-1">
                      {officer.name}
                    </h3>
                    
                    <p className="text-xs text-slate font-sans font-medium tracking-wide uppercase">
                      {officer.role}
                    </p>
                  </div>
                  
                  <span className="text-[9px] text-slate-400 font-semibold tracking-widest uppercase mt-6 block border-t border-black/5 pt-4">
                    BNI Dreamers Indore
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
