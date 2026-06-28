"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { Container } from "@/components/ui/Container";

const CLASSIFICATIONS = [
  "Commercial Realtor",
  "Modular Furniture",
  "General Insurance",
  "Travel Agent",
  "Solar Energy Specialist",
  "Architect",
  "Logistics Executive",
  "Consumer Loan Specialist",
  "Chartered Accountant",
  "Corporate Lawyer",
  "Graphic Designer",
  "Civil Contractor",
];

export function MembersStrip() {
  return (
    <section className="bg-paper border-t border-b border-black/5 py-12 relative overflow-hidden">
      <div className="noise-grain absolute inset-0 opacity-[0.015] pointer-events-none" aria-hidden="true" />
      
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 text-center md:text-left relative z-10">
        <div>
          <span className="font-mono text-[9px] font-bold text-gold uppercase tracking-[0.25em] block mb-1">
            06 / EXCLUSIVE DIRECTORY
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            40+ businesses. One seat per profession.
          </h3>
        </div>
        
        <Link
          href="/members"
          className="inline-flex items-center gap-2 font-heading font-extrabold text-xs tracking-wider uppercase text-brand-red hover:text-brand-maroon transition-colors shrink-0 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded py-0.5"
        >
          View Chapter Directory
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Container>
      
      {/* Infinite scrolling marquee of active categories */}
      <div className="w-full py-2 bg-cloud border-t border-b border-black/5 relative z-10">
        <Marquee items={CLASSIFICATIONS} speed={25} />
      </div>
    </section>
  );
}
