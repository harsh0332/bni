import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BNI Dreamers Indore",
  description:
    "Learn about the Givers Gain® philosophy, our weekly structured timeline meetings, and BNI core values in Indore, Madhya Pradesh.",
  openGraph: {
    title: "About Us | BNI Dreamers Indore",
    description:
      "Learn about the Givers Gain® philosophy and our weekly meetings in Indore.",
  },
};

/* ─── Data ─────────────────────────────────────────────────────────── */

const meetingSteps = [
  {
    step: "01",
    title: "Weekly Structured Meeting",
    text: "A highly structured 90-minute agenda designed to build trust, report chapter performance, and focus strictly on business generation.",
  },
  {
    step: "02",
    title: "Member Feature Presentations",
    text: "Each week, select members get dedicated time to present their businesses, outline target markets, and train others on finding referrals.",
  },
  {
    step: "03",
    title: "Education Slots",
    text: "A brief skill-building segment led by our Education Coordinator to sharpen presentation, sales pitch, and referral generation skills.",
  },
  {
    step: "04",
    title: "Open Referral Exchange",
    text: "The main segment of the meeting where members actively pass warm referrals and report generated revenue. Visitors come prepared with one referral and one ask.",
  },
];

const coreValues = [
  {
    title: "Givers Gain®",
    text: "The core BNI philosophy: give business referrals to others to gain referrals in return.",
  },
  {
    title: "Building Relationships",
    text: "Business networking is about building solid, long-term relationships based on mutual trust.",
  },
  {
    title: "Lifelong Learning",
    text: "Continual professional development and skill-building sharpen your competitive edge.",
  },
  {
    title: "Traditions + Innovation",
    text: "Honoring the structural framework of BNI while innovating in digital tools and strategies.",
  },
  {
    title: "Positive Attitude",
    text: "Encouraging a positive and supportive mindset to drive growth and successful referrals.",
  },
  {
    title: "Accountability",
    text: "Structures that keep members accountable to quality referrals, attendance, and ethics.",
  },
  {
    title: "Recognition",
    text: "Rewarding and acknowledging members who actively contribute to chapter growth.",
  },
];

const benefits = [
  {
    label: "Warm, Qualified Referrals",
    text: "Exchange direct recommendations with 40+ members actively seeking leads for you.",
  },
  {
    label: "Exclusivity Clause",
    text: "Lock out competitors. Only one member is admitted per industry classification.",
  },
  {
    label: "Built-In Accountability",
    text: "Maintain high standards and consistent weekly networking structures.",
  },
  {
    label: "Professional Skill Growth",
    text: "Opportunities for feature presentations, leadership roles, and training.",
  },
];

/* ─── Noise texture (inlined SVG) ─────────────────────────────────── */

const noiseStyle: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
};

/* ─── Page ─────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-paper">
      {/* ────────────────────────────────────────────────────────────
          1. Editorial Page Header
      ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={noiseStyle}
        />
        <Container>
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-6">
              ABOUT THE CHAPTER
            </p>
          </Reveal>
          <SplitReveal
            className="font-display text-display-xl text-ink"
            type="words"
            delay={0.1}
          >
            A trusted circle of Indore&apos;s business owners.
          </SplitReveal>
          <Reveal delay={0.4}>
            <div className="w-16 h-px bg-gold mt-8" />
          </Reveal>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────
          2. Who We Are
      ──────────────────────────────────────────────────────────── */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left – Label */}
            <div className="lg:col-span-4">
              <Reveal>
                <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-light text-gold/20 leading-none block">
                  01
                </span>
                <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mt-4 mb-4">
                  WHO WE ARE
                </p>
                <h2 className="font-display text-display-md text-ink">
                  Indore&apos;s Premier Referral Network
                </h2>
              </Reveal>
            </div>

            {/* Right – Two‑column body text */}
            <div className="lg:col-span-8">
              <Reveal delay={0.15}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <p className="font-sans text-base text-slate leading-relaxed">
                    BNI Dreamers is a high-performance, member-focused chapter
                    of BNI (Business Network International) based in Indore,
                    Madhya Pradesh. Comprising 40+ top entrepreneurs, directors,
                    and executives, we gather weekly to systematic and
                    collaborative business development.
                  </p>
                  <p className="font-sans text-base text-slate leading-relaxed">
                    Unlike standard business networking mixers, BNI Dreamers
                    runs a structured referral system that acts as an active
                    sales force for our members. By joining, members gain access
                    to an exclusive network of strategic alliances, each
                    dedicated to advocating for and feeding qualified leads to
                    one another.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          3. Group Photo — Wide Masked Image
      ──────────────────────────────────────────────────────────── */}
      <div className="pb-20 bg-paper">
        <Container>
          <Reveal>
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[540px] rounded-card overflow-hidden shadow-card border border-black/5">
              <Image
                src="/images/team/chapter-group-photo.jpg"
                alt="BNI Dreamers — Indore Chapter Group Photo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-start p-8 sm:p-12">
                <p className="font-display text-lg sm:text-2xl text-white drop-shadow-md">
                  BNI Dreamers — Indore Chapter
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* ────────────────────────────────────────────────────────────
          4. How a Meeting Works (Timeline)
      ──────────────────────────────────────────────────────────── */}
      <Section bg="cloud" id="how-it-works">
        <Container>
          {/* Section header */}
          <div className="mb-16">
            <Reveal>
              <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-light text-gold/20 leading-none block">
                02
              </span>
              <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mt-4 mb-4">
                THE AGENDA
              </p>
            </Reveal>
            <SplitReveal
              className="font-display text-display-lg text-ink"
              type="words"
              delay={0.1}
            >
              How a meeting works.
            </SplitReveal>
          </div>

          {/* Timeline */}
          <Reveal delay={0.2}>
            <div className="relative max-w-3xl mx-auto border-l-2 border-gold/30 pl-8 sm:pl-12 space-y-14">
              {meetingSteps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Numbered circle on the timeline */}
                  <span className="absolute left-[-42px] sm:left-[-54px] top-0 flex items-center justify-center h-10 w-10 rounded-full bg-gold text-white font-mono text-xs font-bold border-4 border-cloud group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>

                  {/* Content card */}
                  <div className="bg-paper p-6 rounded-card shadow-soft border border-black/5">
                    <h3 className="font-display font-semibold text-lg text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-slate leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          5. Core Values Grid
      ──────────────────────────────────────────────────────────── */}
      <Section bg="white" id="core-values">
        <Container>
          {/* Section header */}
          <div className="mb-16 max-w-2xl">
            <Reveal>
              <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-light text-gold/20 leading-none block">
                03
              </span>
              <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mt-4 mb-4">
                CORE VALUES
              </p>
            </Reveal>
            <SplitReveal
              className="font-display text-display-lg text-ink"
              type="words"
              delay={0.1}
            >
              Our Core Values
            </SplitReveal>
          </div>

          {/* Grid */}
          <Reveal delay={0.15} stagger staggerChildren={0.06}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-cloud p-6 rounded-card border border-black/5 flex flex-col items-start text-left shadow-soft hover:shadow-float transition-shadow duration-300"
                >
                  <span className="font-mono text-sm text-gold/50 mb-3">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-sm text-slate leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          6. Why Join (Asymmetric Layout)
      ──────────────────────────────────────────────────────────── */}
      <Section bg="cream" id="why-join">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — Label & intro */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="font-mono text-[clamp(3rem,8vw,6rem)] font-light text-gold/20 leading-none block">
                  04
                </span>
                <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mt-4 mb-4">
                  MEMBERSHIP PERKS
                </p>
                <h2 className="font-display text-display-md text-ink mb-6">
                  Why join BNI&nbsp;Dreamers?
                </h2>
                <p className="font-sans text-base text-slate leading-relaxed">
                  Securing a seat in BNI Dreamers provides your company with a
                  persistent sales funnel and local networking backing.
                </p>
              </Reveal>
            </div>

            {/* Right — Benefits cards */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="flex flex-col gap-5">
                  {benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="bg-paper p-6 rounded-card border border-black/5 shadow-soft flex items-start gap-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <div className="font-sans">
                        <strong className="text-ink font-semibold block mb-0.5">
                          {b.label}
                        </strong>
                        <span className="text-sm text-slate leading-relaxed">
                          {b.text}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ────────────────────────────────────────────────────────────
          7. Closing CTA
      ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-ink py-24 md:py-32 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={noiseStyle}
        />
        <Container className="relative z-10">
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold/60 mb-6">
              NEXT STEP
            </p>
            <h2 className="font-display text-display-lg text-paper max-w-3xl mx-auto mb-4">
              Ready to lock in your exclusive category?
            </h2>
            <p className="font-sans text-base text-paper/60 max-w-xl mx-auto mb-10">
              Securing a classification blocks your competitors from joining the
              chapter. Take the first step and visit a meeting.
            </p>
            <MagneticButton href="/join" variant="primary" className="group">
              Get Invited
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
