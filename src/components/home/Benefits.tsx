"use client";

import React from "react";
import { TrendingUp, Users, Handshake } from "lucide-react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Benefits() {
  const benefits = [
    {
      title: "Scale Your Business",
      icon: <TrendingUp className="h-5 w-5 text-brand-red" />,
      description: "Tap a network of 40+ local business owners who actively pass you warm, qualified, ready-to-buy referrals.",
      image: ASSETS.benefitScale,
    },
    {
      title: "Build Real Relationships",
      icon: <Users className="h-5 w-5 text-brand-red" />,
      description: "Lock out your competitors. One exclusive seat per business category ensures collaborative, long-term partnerships.",
      image: ASSETS.benefitRelationships,
    },
    {
      title: "Become a Master Connector",
      icon: <Handshake className="h-5 w-5 text-brand-red" />,
      description: "Weekly education modules, leadership roles, and presentation opportunities polish your networking and sales skills.",
      image: ASSETS.benefitMasterConnector,
    },
  ];

  return (
    <Section bg="cloud" id="benefits" className="border-t border-black/5 relative overflow-hidden">
      {/* Film grain noise texture */}
      <div className="noise-grain absolute inset-0 opacity-[0.02] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">
            03 / THE ADVANTAGE
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
            The referral engine for your business.
          </h2>
          <p className="text-sm sm:text-base text-slate font-sans mt-4 max-w-2xl leading-relaxed">
            Stop relying on accidental leads. Build a consistent stream of word-of-mouth business within Indore&apos;s premier networking chapter.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Card 1: Scale Your Business (Col Span 2) */}
          <Reveal className="md:col-span-2" variant="fade-up" delay={0.05}>
            <TiltCard className="h-full">
              <div className="bg-white p-8 sm:p-10 rounded-card border border-black/5 shadow-soft flex flex-col sm:flex-row gap-8 items-start h-full relative overflow-hidden group">
                <div className="flex flex-col text-left justify-between h-full relative z-10">
                  <div>
                    <div className="bg-brand-red/10 p-3 rounded-xl mb-6 w-fit text-brand-red">
                      {benefits[0].icon}
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-ink mb-3">
                      {benefits[0].title}
                    </h3>
                    <p className="text-slate font-sans text-sm leading-relaxed max-w-sm">
                      {benefits[0].description}
                    </p>
                  </div>
                  
                  <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-wider mt-8 block">
                    EXCLUSIVE SEAT ADVANTAGE
                  </span>
                </div>
                
                <div className="relative w-full sm:w-[50%] h-48 sm:h-full min-h-[180px] overflow-hidden rounded-xl bg-slate-50 shrink-0">
                  <Image
                    src={benefits[0].image}
                    alt={benefits[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Card 2: Build Real Relationships (Col Span 1) */}
          <Reveal className="md:col-span-1" variant="fade-up" delay={0.15}>
            <TiltCard className="h-full">
              <div className="bg-white p-8 rounded-card border border-black/5 shadow-soft flex flex-col justify-between h-full relative overflow-hidden group">
                <div>
                  <div className="relative w-full h-44 mb-6 overflow-hidden rounded-xl bg-slate-50 shrink-0">
                    <Image
                      src={benefits[1].image}
                      alt={benefits[1].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-brand-red/10 p-3 rounded-xl mb-5 w-fit text-brand-red">
                    {benefits[1].icon}
                  </div>
                  <h3 className="font-display font-extrabold text-xl text-ink mb-3 text-left">
                    {benefits[1].title}
                  </h3>
                  <p className="text-slate font-sans text-sm leading-relaxed text-left">
                    {benefits[1].description}
                  </p>
                </div>
                
                <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-wider mt-8 block text-left">
                  SYSTEMATIC TRUST
                </span>
              </div>
            </TiltCard>
          </Reveal>

          {/* Card 3: Become a Master Connector (Col Span 3 - Horizontal Bento) */}
          <Reveal className="md:col-span-3" variant="fade-up" delay={0.25}>
            <TiltCard>
              <div className="bg-white p-8 sm:p-10 rounded-card border border-black/5 shadow-soft flex flex-col md:flex-row gap-8 items-stretch relative overflow-hidden group">
                <div className="relative w-full md:w-[40%] h-48 md:h-auto min-h-[200px] overflow-hidden rounded-xl bg-slate-50 shrink-0">
                  <Image
                    src={benefits[2].image}
                    alt={benefits[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
                </div>
                
                <div className="flex flex-col text-left justify-between py-2 relative z-10 w-full">
                  <div>
                    <div className="bg-brand-red/10 p-3 rounded-xl mb-6 w-fit text-brand-red">
                      {benefits[2].icon}
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-ink mb-3">
                      {benefits[2].title}
                    </h3>
                    <p className="text-slate font-sans text-sm leading-relaxed max-w-xl">
                      {benefits[2].description}
                    </p>
                  </div>
                  
                  <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-wider mt-8 block">
                    PUBLIC SPEAKING & SYSTEMATIC GROWTH
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>

        </div>
      </Container>
    </Section>
  );
}
