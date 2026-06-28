"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const officers = [
  {
    name: "Shreyas Bhokardankar",
    role: "President",
    email: "president@bnidreamers.in",
    phone: "+91 90960 29339",
    photo: "/images/team/shreyas-bhokardankar.jpg",
  },
  {
    name: "Priyanka Bhatia",
    role: "Vice President",
    email: "vp@bnidreamers.in",
    phone: "+91 99260 00013",
    photo: "/images/team/priyanka-bhatia.jpg",
  },
  {
    name: "Dushyant Mangal",
    role: "Secretary / Treasurer",
    email: "treasurer@bnidreamers.in",
    phone: "+91 87705 33410",
    photo: "/images/team/dushyant-mangal.jpg",
  },
  {
    name: "Sumit Bohare",
    role: "Membership / Registration",
    email: "membership@bnidreamers.in",
    phone: "+91 95898 93590",
    photo: "/images/team/sumit-bohare.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function LeadershipClient() {
  return (
    <main>
      {/* ============================================================ */}
      {/* 1 · Editorial Page Header                                    */}
      {/* ============================================================ */}
      <section className="relative bg-paper py-28 md:py-36 overflow-hidden">
        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <Container className="relative z-10 text-center">
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-widest text-gold mb-6">
              Leadership Team
            </p>
          </Reveal>

          <SplitReveal>
            The team that keeps the chapter running.
          </SplitReveal>

          <Reveal>
            <p className="font-sans text-lg md:text-xl text-slate max-w-2xl mx-auto mt-8 leading-relaxed">
              Our officers keep the chapter accountable, guide structure, and
              help members achieve peak performance.
            </p>
          </Reveal>

          {/* Gold rule */}
          <Reveal>
            <div className="mx-auto mt-12 h-px w-24 bg-gold" />
          </Reveal>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 2 · Officers Grid Header                                     */}
      {/* ============================================================ */}
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <Reveal>
              <span className="font-mono text-[6rem] md:text-[8rem] leading-none font-bold text-gold/20 select-none block">
                01
              </span>
            </Reveal>

            <Reveal>
              <p className="font-mono text-eyebrow uppercase tracking-widest text-gold mt-4 mb-3">
                Executive Officers
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-display-md text-ink">
                Chapter Officers
              </h2>
            </Reveal>

            <Reveal>
              <p className="font-sans text-lg text-slate max-w-xl mt-4 leading-relaxed">
                Meeting every week, managing chapter standards, and assisting
                new members in locking in categories.
              </p>
            </Reveal>
          </div>

          {/* ======================================================== */}
          {/* 3 · Officer Cards                                        */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {officers.map((officer, i) => (
              <Reveal key={officer.email} delay={i * 0.1}>
                <TiltCard>
                  <div className="group bg-cloud rounded-card shadow-card border border-cloud/60 overflow-hidden">
                    {/* Photo */}
                    <div className="relative h-[300px] overflow-hidden">
                      <Image
                        src={officer.photo}
                        alt={officer.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    {/* Body */}
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-ink">
                        {officer.name}
                      </h3>

                      <p className="font-mono text-eyebrow uppercase tracking-wider text-gold mt-1">
                        {officer.role}
                      </p>

                      <div className="mt-4 space-y-2 text-sm text-slate">
                        <a
                          href={`mailto:${officer.email}`}
                          className="flex items-center gap-2 hover:text-gold transition-colors"
                        >
                          <Mail className="w-4 h-4 shrink-0" />
                          <span className="truncate">{officer.email}</span>
                        </a>

                        <a
                          href={`tel:${officer.phone.replace(/\s/g, "")}`}
                          className="flex items-center gap-2 hover:text-gold transition-colors"
                        >
                          <Phone className="w-4 h-4 shrink-0" />
                          <span>{officer.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 4 · CTA Strip                                                */}
      {/* ============================================================ */}
      <section className="bg-cream py-20 md:py-28">
        <Container className="text-center">
          <Reveal>
            <h2 className="font-display text-display-md text-ink mb-8">
              Want to be a part of this team?
            </h2>
          </Reveal>

          <Reveal>
            <MagneticButton href="/join">
              Join the Chapter
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </MagneticButton>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
