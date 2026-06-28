"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Meetings", href: "/meetings" },
  { label: "Members", href: "/members" },
  { label: "Join Us", href: "/join" },
];

const PROFESSIONS = [
  "Commercial Realtor",
  "Property Management (Residential)",
  "Modular Furniture",
  "General Insurance",
  "Tours & Travels",
  "Acoustic Ceiling",
  "Commercial Architect",
  "Finance / Consumer Loan",
  "Solar",
  "Logistics Services",
  "Graphic Design",
  "Home Theatre",
  "Veneer & Teak Wood",
];

export function Footer() {
  return (
    <footer className="bg-ink text-cloud pt-20 pb-10 border-t border-brand-maroon/20 relative overflow-hidden">
      {/* Film grain noise texture overlay for background panel depth */}
      <div className="noise-grain absolute inset-0 opacity-[0.035] pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Large oversized editorial statement */}
        <div className="text-left max-w-5xl mb-12">
          <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">
            Our Core Belief
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight leading-[1.0] text-balance">
            Referrals grow, <br className="hidden sm:inline" />
            where trust grows.
          </h2>
        </div>

        {/* Infinite scrolling Marquee of professions above columns */}
        <div className="w-full py-4 border-t border-b border-white/5 my-12 overflow-hidden">
          <Marquee items={PROFESSIONS} speed={35} className="!py-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          {/* Column 1: Brand & Logo (span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <Link
              href="/"
              className="flex flex-col leading-none w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded p-0.5"
              aria-label="BNI Dreamers Indore Home"
            >
              <div className="flex items-end gap-1">
                <span className="font-display font-extrabold text-2xl tracking-tight text-brand-red">
                  BNI
                </span>
                <span className="font-mono text-[8px] font-extrabold tracking-widest text-gold pb-1 select-none">
                  INDORE
                </span>
              </div>
              <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-white mt-0.5 uppercase opacity-75">
                DREAMERS
              </span>
            </Link>
            
            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-sm">
              Indore&apos;s trusted business referral network of elite professionals. Helping local businesses build real, scalable systems.
            </p>
          </div>

          {/* Column 2: Quick Links (span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-5 text-left">
            <h3 className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-y-3.5 gap-x-4 font-sans text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-brand-red transition-colors duration-250 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded block w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Meeting Information (span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-5 text-left font-sans">
            <h3 className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase">
              Meet Us
            </h3>
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Calendar className="h-4.5 w-4.5 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col leading-snug">
                  <span className="font-semibold text-white">Every Wednesday</span>
                  <span className="text-xs text-slate-400 mt-0.5">7:30 AM onwards</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col leading-snug">
                  <span className="font-semibold text-white">Hotel Sayaji</span>
                  <span className="text-xs text-slate-400 mt-0.5">Vijay Nagar, Indore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Connect & Socials (span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-5 text-left">
            <h3 className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/bnidreamers/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-brand-red hover:shadow-glow-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Follow BNI Dreamers Indore on Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCR2AskbDBNSQ11JUu7w2uew"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-brand-red hover:shadow-glow-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Subscribe to BNI Dreamers Indore on YouTube"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-brand-red hover:shadow-glow-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Connect with BNI Dreamers Indore on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-brand-red hover:shadow-glow-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                aria-label="Follow BNI Dreamers Indore on LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar Details */}
      <div className="border-t border-white/5 pt-8 pb-4 relative z-10">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left font-sans text-xs text-slate-400">
          <div className="flex flex-col gap-2 max-w-2xl">
            <p className="font-semibold text-slate-300">
              &copy; {new Date().getFullYear()} BNI Dreamers, Indore. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-500 leading-normal">
              An independent chapter of BNI&reg; (Business Network International). BNI and related marks are registered trademarks of BNI Global, LLC.
            </p>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-500">Built by</span>
            <a
              href="https://kliqcraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors duration-200 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded px-1 py-0.5"
            >
              KliqCraft
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
