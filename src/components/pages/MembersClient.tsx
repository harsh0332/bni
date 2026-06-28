"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Info, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const GRAIN_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

interface Member {
  name: string;
  classification: string;
  photo?: string;
}

export function MembersClient() {
  const members: Member[] = [
    { name: "Manish Bagdi", classification: "Home Theatre" },
    { name: "Vinod Verma", classification: "Commercial Realtor", photo: "/images/team/vinod-verma.jpg" },
    { name: "Ravi Navlani", classification: "Veneer & Teak Wood (Wood House)" },
    { name: "Poonam Patidar", classification: "Modular Furniture", photo: "/images/team/poonam-patidar.jpg" },
    { name: "Priyanka Bhatia", classification: "General Insurance", photo: "/images/team/priyanka-bhatia.jpg" },
    { name: "Keshav Rathi", classification: "Tours & Travels", photo: "/images/team/keshav-rathi.jpg" },
    { name: "Santosh Prasad", classification: "Property Management (Residential)", photo: "/images/team/santosh-prasad.jpg" },
    { name: "Rohan Verma", classification: "Acoustic Ceiling", photo: "/images/team/rohan-verma.jpg" },
    { name: "Rohit Dinkar", classification: "Commercial Architect", photo: "/images/team/rohit-dinkar.jpg" },
    { name: "Abhishek Singh Rajawat", classification: "Member", photo: "/images/team/abhishek-singh-rajawat.jpg" },
    { name: "Shruti Maheshwari", classification: "Member", photo: "/images/team/shruti-maheshwari.jpg" },
    { name: "Smriti Singhai", classification: "Finance / Consumer Loan", photo: "/images/team/smriti-singhai.jpg" },
    { name: "Gavish Jaiswal", classification: "Solar", photo: "/images/team/gavish-jaiswal.jpg" },
  ];

  const openCategories = [
    "Civil Contractor",
    "Nutritionist",
    "Home Automation",
    "Event Planner",
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="bg-paper">
      {/* ── Editorial Page Header ── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: GRAIN_BG, backgroundRepeat: "repeat" }}
        />
        <Container>
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-6">
              MEMBER DIRECTORY
            </p>
          </Reveal>
          <SplitReveal className="font-display text-display-xl text-ink" type="words" delay={0.1}>
            One per profession. Zero competition.
          </SplitReveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-lg text-slate max-w-2xl mt-6 leading-relaxed">
              We secure industry exclusivity for our members. Review our current chapter roster of elite professionals in Indore.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="w-16 h-px bg-gold mt-8" />
          </Reveal>
        </Container>
      </section>

      {/* ── Info Banner ── */}
      <section className="bg-paper pb-8">
        <Container>
          <Reveal>
            <div className="bg-cloud border border-line rounded-card p-5 flex items-center gap-4">
              <Info className="h-5 w-5 text-gold shrink-0" />
              <p className="text-sm text-slate font-sans leading-relaxed">
                <strong className="text-ink font-semibold">Under Expansion:</strong>{" "}
                This directory is currently being expanded. A full interactive member list is coming soon.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Member Grid ── */}
      <section className="bg-paper py-20 md:py-28">
        <Container>
          {/* Section header */}
          <Reveal>
            <div className="mb-16">
              <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-light text-gold/20 leading-none block">
                01
              </span>
              <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mt-4 mb-4">
                CHAPTER ROSTER
              </p>
              <h2 className="font-display text-display-lg text-ink mb-4">
                Featured Members
              </h2>
              <p className="font-sans text-base text-slate max-w-xl leading-relaxed">
                Connect with our highly-referred industry classification specialists.
              </p>
              <div className="w-12 h-px bg-gold mt-6" />
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <TiltCard className="h-full">
                  <div className="bg-cloud rounded-card overflow-hidden shadow-card border border-line flex flex-col group cursor-default h-full text-center pb-6 items-center">
                    {/* Centered Circular Avatar */}
                    <div className="relative w-32 h-32 rounded-full border-2 border-gold/20 mx-auto mt-8 overflow-hidden bg-white shadow-inner group-hover:border-brand-red/40 transition-colors duration-300">
                      {member.photo ? (
                        <>
                          <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            sizes="128px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-brand-maroon to-brand-red flex items-center justify-center">
                          <span className="font-display text-4xl font-bold text-white/90 select-none">
                            {getInitials(member.name)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Body */}
                    <div className="px-5 pt-6 text-center flex-grow flex flex-col justify-between items-center w-full">
                      <div className="flex flex-col items-center">
                        <h3 className="font-display font-bold text-lg text-ink mb-2">
                          {member.name}
                        </h3>
                        <span className="inline-block bg-gold/10 text-gold font-mono text-[10px] font-medium px-3 py-1 rounded-pill uppercase tracking-wider">
                          {member.classification}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-slate/40 tracking-wider uppercase mt-5 block">
                        BNI Dreamers Indore
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Open Classifications ── */}
      <section className="bg-cloud py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-light text-gold/20 leading-none block">
                02
              </span>
              <div className="inline-flex items-center gap-2 mt-4 mb-6">
                <Sparkles className="h-4 w-4 text-gold" />
                <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold">
                  OPEN CLASSIFICATIONS
                </p>
              </div>
              <h2 className="font-display text-display-md text-ink mb-4">
                These seats are open right now:
              </h2>
              <p className="font-sans text-base text-slate leading-relaxed mb-10 max-w-xl mx-auto">
                We hold just one seat per profession. Once a category is taken, it is gone. Check if your classification is open and lock in your seat today:
              </p>

              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {openCategories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-cream text-brand-maroon border border-gold/40 rounded-pill px-6 py-3 font-mono text-xs font-medium tracking-wider uppercase cursor-default select-none hover:bg-brand-red hover:text-white hover:border-transparent transition-all duration-300"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <MagneticButton href="/join" variant="primary">
                Apply for your category
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
