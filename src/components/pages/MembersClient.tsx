"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, HelpCircle, Info, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { PLACEHOLDER } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function MembersClient() {
  const shouldReduceMotion = useReducedMotion();

  const members = [
    { name: "Manish Bagdi", classification: "Home Theatre" },
    { name: "Vinod Verma", classification: "Commercial Realtor", photo: "/images/team/vinod-verma.jpg" },
    { name: "Ravi Navlani", classification: "Veneer & Teak Wood (Wood House)" },
    { name: "Poonam Patidar", classification: "Modular Furniture", photo: "/images/team/poonam-patidar.jpg" },
    { name: "Priyanka Bhatia", classification: "Insurance", photo: "/images/team/priyanka-bhatia.jpg" },
    { name: "Keshav Rathi", classification: "Financial Advisory", photo: "/images/team/keshav-rathi.jpg" },
    { name: "Santosh Prasad", classification: "Software Solutions", photo: "/images/team/santosh-prasad.jpg" },
    { name: "Rohan Verma", classification: "Interior Design", photo: "/images/team/rohan-verma.jpg" },
    { name: "Rohit Dinkar", classification: "Architecture", photo: "/images/team/rohit-dinkar.jpg" },
    { name: "Abhishek Singh Rajawat", classification: "Logistics Services", photo: "/images/team/abhishek-singh-rajawat.jpg" },
    { name: "Shruti Maheshwari", classification: "Graphic Design", photo: "/images/team/shruti-maheshwari.jpg" },
    { name: "Smriti Singhai", classification: "Charter Member", photo: "/images/team/smriti-singhai.jpg" },
    { name: "Gavish Jaiswal", classification: "Charter Member", photo: "/images/team/gavish-jaiswal.jpg" },
  ];

  const openCategories = [
    "Civil Contractor",
    "Nutritionist",
    "Home Automation",
    "Event Planner",
  ];

  const hoverCardAnimation = shouldReduceMotion ? {} : { y: -6 };
  const hoverPillAnimation = shouldReduceMotion ? {} : { scale: 1.05, y: -1 };

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
              Member Directory
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 max-w-3xl leading-tight text-white">
              40+ businesses. <br />
              One per profession.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              We secure industry exclusivity for our members. Review our current chapter roster of elite professionals in Indore.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. Directory Section */}
      <Section bg="white">
        <Container>
          {/* Note Banner stating directory expansion */}
          <Reveal>
            <div className="max-w-7xl mx-auto mb-10 bg-cloud border border-black/5 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 text-left">
              <Info className="h-5 w-5 text-brand-red shrink-0" />
              <p className="text-xs sm:text-sm text-slate font-sans leading-normal">
                <strong className="text-ink font-semibold">Under Expansion:</strong> This directory is currently being expanded. A full interactive member list is coming soon.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <SectionHeading
              eyebrow="Chapter Roster"
              title="Featured Members"
              subtext="Connect with our highly-referred industry classification specialists."
              align="center"
            />
          </Reveal>

          {/* Directory Grid */}
          <Reveal delay={0.15} duration={0.6} stagger staggerChildren={0.05}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={hoverCardAnimation}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="bg-cloud rounded-card overflow-hidden shadow-card border border-black/5 flex flex-col group cursor-default"
                >
                  {/* Portrait photo */}
                  <div className="relative h-[240px] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={member.photo || PLACEHOLDER(member.name.replace(/\s+/g, ""), 300, 240, member.name)}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-maroon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Body Content */}
                  <div className="p-5 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading font-extrabold text-base text-ink mb-1">
                        {member.name}
                      </h3>
                      <span className="inline-block bg-brand-red/10 text-brand-red text-[10px] font-heading font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {member.classification}
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-4 block">
                      BNI Dreamers Indore
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Open Classifications Section */}
      <Section bg="cloud">
        <Container>
          <Reveal>
            <div className="max-w-4xl mx-auto bg-white border border-brand-red/10 rounded-card p-8 sm:p-10 shadow-card text-center relative overflow-hidden">
              <div className="absolute top-[-25%] right-[-15%] w-[200px] h-[200px] rounded-full bg-brand-red/5 blur-3xl" />
              
              <div className="relative z-10 flex flex-col items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/15 text-brand-red font-heading font-extrabold text-xs tracking-widest uppercase mb-4">
                  <Sparkles className="h-3 w-3" />
                  Open Classifications
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-ink tracking-tight mb-4">
                  These seats are open right now:
                </h2>
                
                <p className="text-sm font-sans text-slate leading-relaxed mb-6 max-w-xl mx-auto">
                  We hold just one seat per profession. Once a category is taken, it is gone. Check if your classification is open and lock in your seat today:
                </p>

                {/* Pills */}
                <div className="flex flex-wrap justify-center gap-2.5 mb-8 max-w-md mx-auto">
                  {openCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      whileHover={hoverPillAnimation}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="bg-cream text-brand-maroon border border-gold/45 rounded-full px-5 py-2.5 text-xs font-heading font-extrabold tracking-wide shadow-sm flex items-center gap-1.5 select-none hover:bg-brand-red hover:text-white hover:border-transparent transition-all duration-300"
                    >
                      <HelpCircle className="h-3.5 w-3.5 shrink-0 opacity-70" />
                      {category}
                    </motion.div>
                  ))}
                </div>

                {/* Claim CTA */}
                <Button href="/join" variant="primary" size="lg" className="group">
                  Apply for your category
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
