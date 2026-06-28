"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, ArrowRight, Shield } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function LeadershipClient() {
  const shouldReduceMotion = useReducedMotion();

  const officers = [
    {
      name: "Shreyas Bhokardankar",
      role: "President",
      email: "president@bnidreamers.in",
      // TODO: Client to confirm before public display
      phone: "+91 99999 99999",
      photo: "/images/team/shreyas-bhokardankar.jpg",
    },
    {
      name: "Priyanka Bhatia",
      role: "Vice President",
      email: "vp@bnidreamers.in",
      // TODO: Client to confirm before public display
      phone: "+91 99999 99999",
      photo: "/images/team/priyanka-bhatia.jpg",
    },
    {
      name: "Dushyant Mangal",
      role: "Secretary / Treasurer",
      email: "treasurer@bnidreamers.in",
      // TODO: Client to confirm before public display
      phone: "+91 99999 99999",
      photo: "/images/team/dushyant-mangal.jpg",
    },
    {
      name: "Sumit Bohare",
      role: "Membership Coordinator",
      email: "membership@bnidreamers.in",
      // TODO: Client to confirm before public display
      phone: "+91 99999 99999",
      photo: "/images/team/sumit-bohare.jpg",
    },
  ];

  const hoverAnimation = shouldReduceMotion ? {} : { y: -6 };

  return (
    <div className="bg-white">
      {/* 1. Page Hero */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-brand-maroon via-black to-[#2A0508] text-white">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-red/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />
        </div>
        
        <Container className="relative z-10">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red font-heading font-extrabold text-xs tracking-widest uppercase mb-4">
              Leadership Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 max-w-3xl leading-tight text-white">
              The team that keeps the chapter running.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              Our officers keep the chapter accountable, guide structure, and help members achieve peak performance.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. Officers Grid */}
      <Section bg="white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Executive Officers"
              title="Chapter Officers"
              subtext="Meeting every week, managing chapter standards, and assisting new members in locking in categories."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.15} duration={0.6} stagger staggerChildren={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {officers.map((officer, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverAnimation}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="bg-cloud rounded-card overflow-hidden shadow-card border border-black/5 flex flex-col group cursor-default"
                >
                  {/* Portrait photo using REAL TEAM IMAGE */}
                  <div className="relative h-[300px] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={officer.photo}
                      alt={officer.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-ink mb-1">
                        {officer.name}
                      </h3>
                      <p className="text-xs text-brand-red font-heading font-bold uppercase tracking-wider mb-4">
                        {officer.role}
                      </p>
                    </div>

                    {/* Contact Affordances with client TODO markers */}
                    <div className="flex flex-col gap-2.5 pt-4 border-t border-black/5 font-sans text-xs sm:text-sm text-slate">
                      <a
                        href={`mailto:${officer.email}`}
                        className="flex items-center gap-2 hover:text-brand-red transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red rounded px-0.5"
                        aria-label={`Email ${officer.name}`}
                      >
                        <Mail className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-brand-red transition-colors" />
                        <span className="truncate max-w-[190px]">{officer.email}</span>
                      </a>
                      
                      <a
                        href={`tel:${officer.phone}`}
                        className="flex items-center gap-2 hover:text-brand-red transition-colors w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red rounded px-0.5"
                        aria-label={`Call ${officer.name}`}
                      >
                        <Phone className="h-4.5 w-4.5 shrink-0 text-slate-400 group-hover:text-brand-red transition-colors" />
                        <span>{officer.phone}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. CTA Strip */}
      <Section bg="cream" className="py-12 border-t border-black/5">
        <Container>
          <Reveal className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <span className="bg-brand-red/10 p-3 rounded-full text-brand-red shrink-0 hidden sm:inline-block">
                <Shield className="h-6 w-6" />
              </span>
              <div className="font-sans">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-ink">
                  Want to be a part of this team?
                </h3>
                <p className="text-sm text-slate mt-0.5">
                  Secure your professional classification and contribute to our chapter growth.
                </p>
              </div>
            </div>
            
            <Button href="/join" variant="primary" className="group shrink-0 w-full sm:w-auto">
              Get Invited
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
