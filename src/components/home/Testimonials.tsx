"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Testimonials component: Highlights client quotes from Atul Soni and
 * Pushpendra Singh Jadon.
 */
export function Testimonials() {
  const testimonials = [
    {
      quote: "Your network is your net worth — and through BNI I gained more than a network: real experts in every field. BNI taught me that to be successful, you first have to be valuable.",
      name: "Atul Soni",
      role: "Launch Ambassador, BNI Indore",
      src: ASSETS.testimonialAtul,
    },
    {
      quote: "Business is part and parcel of BNI, but the most valuable things I gained were lifelong friends and continuous learning. BNI also taught me how to build a team and a system in my business.",
      name: "Pushpendra Singh Jadon",
      role: "Director Consultant, BNI Indore",
      src: ASSETS.testimonialPushpendra,
    },
  ];

  return (
    <Section bg="white" id="testimonials">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Success Stories"
            title="What our members say."
            subtext="Hear directly from active business leaders in Indore who use the BNI referral ecosystem to scale operations and build long-term partnerships."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15} duration={0.6}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="bg-cloud p-8 sm:p-10 rounded-card border border-black/5 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-left hover:shadow-md transition-shadow duration-300 relative cursor-default"
              >
                {/* Quote Icon Background element */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-brand-red opacity-5 shrink-0 pointer-events-none" />

                {/* Avatar container - circular with red ring */}
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden shrink-0 border-4 border-white ring-2 ring-brand-red shadow-md">
                  <Image
                    src={test.src}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between font-sans h-full">
                  <div>
                    <p className="text-slate italic text-sm sm:text-base leading-relaxed mb-6">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-ink leading-tight">
                      {test.name}
                    </h3>
                    <p className="text-xs text-brand-red font-semibold uppercase tracking-wider mt-1">
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
