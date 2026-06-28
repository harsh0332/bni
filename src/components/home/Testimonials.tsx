"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Your network is your net worth — and through BNI I gained more than a network: real experts in every field. BNI taught me that to be successful, you first have to be valuable.",
      name: "Atul Soni",
      role: "Launch Ambassador // BNI Indore",
      src: ASSETS.testimonialAtul,
    },
    {
      quote: "Business is part and parcel of BNI, but the most valuable things I gained were lifelong friends and continuous learning. BNI also taught me how to build a team and a system in my business.",
      name: "Pushpendra Singh Jadon",
      role: "Director Consultant // BNI Indore",
      src: ASSETS.testimonialPushpendra,
    },
  ];

  return (
    <Section bg="white" id="testimonials" className="border-t border-black/5 relative overflow-hidden">
      {/* Film grain noise texture */}
      <div className="noise-grain absolute inset-0 opacity-[0.015] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">
            08 / MEMBER VOICES
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink leading-tight tracking-tight">
            What our members say.
          </h2>
          <p className="text-sm sm:text-base text-slate font-sans mt-4 max-w-xl leading-relaxed">
            Hear directly from Indore&apos;s active business leaders who leverage the BNI referral ecosystem to scale operations and build long-term partnerships.
          </p>
        </div>

        {/* Two-up editorial columns */}
        <Reveal delay={0.1} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="flex flex-col text-left justify-between relative group border-t border-black/5 pt-10"
              >
                {/* Quote symbol */}
                <Quote className="h-10 w-10 text-brand-red opacity-10 mb-6 shrink-0" />

                {/* Big Fraunces quote text */}
                <blockquote className="font-display font-medium text-lg sm:text-2xl text-ink italic leading-relaxed tracking-tight mb-8">
                  &ldquo;{test.quote}&rdquo;
                </blockquote>

                {/* User Info Lockup */}
                <div className="flex items-center gap-4">
                  {/* Real headshot avatar */}
                  <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0 border border-black/5 shadow-soft">
                    <Image
                      src={test.src}
                      alt={test.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="font-sans">
                    <h4 className="font-heading font-extrabold text-base text-ink leading-tight">
                      {test.name}
                    </h4>
                    
                    {/* Mono attribution */}
                    <p className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-wider mt-1">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
