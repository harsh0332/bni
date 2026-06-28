import React from "react";
import Image from "next/image";
import {
  Heart,
  Users,
  BookOpen,
  Sparkles,
  Smile,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Monitor,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { ASSETS } from "@/lib/assets";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BNI Dreamers Indore",
  description: "Learn about the Givers Gain® philosophy, our weekly structured timeline meetings, and BNI core values in Indore, Madhya Pradesh.",
  openGraph: {
    title: "About Us | BNI Dreamers Indore",
    description: "Learn about the Givers Gain® philosophy and our weekly meetings in Indore.",
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Givers Gain®",
      icon: <Heart className="h-6 w-6 text-brand-red" />,
      text: "The core BNI philosophy: give business referrals to others to gain referrals in return.",
    },
    {
      title: "Building Relationships",
      icon: <Users className="h-6 w-6 text-brand-red" />,
      text: "Business networking is about building solid, long-term relationships based on mutual trust.",
    },
    {
      title: "Lifelong Learning",
      icon: <BookOpen className="h-6 w-6 text-brand-red" />,
      text: "Continual professional development and skill-building sharpen your competitive edge.",
    },
    {
      title: "Traditions + Innovation",
      icon: <Sparkles className="h-6 w-6 text-brand-red" />,
      text: "Honoring the structural framework of BNI while innovating in digital tools and strategies.",
    },
    {
      title: "Positive Attitude",
      icon: <Smile className="h-6 w-6 text-brand-red" />,
      text: "Encouraging a positive and supportive mindset to drive growth and successful referrals.",
    },
    {
      title: "Accountability",
      icon: <ShieldCheck className="h-6 w-6 text-brand-red" />,
      text: "Structures that keep members accountable to quality referrals, attendance, and ethics.",
    },
    {
      title: "Recognition",
      icon: <Award className="h-6 w-6 text-brand-red" />,
      text: "Rewarding and acknowledging members who actively contribute to chapter growth.",
    },
  ];

  const meetingSteps = [
    {
      step: "01",
      title: "Weekly Structured Meeting",
      icon: <Calendar className="h-5 w-5 text-brand-red" />,
      text: "A highly structured 90-minute agenda designed to build trust, report chapter performance, and focus strictly on business generation.",
    },
    {
      step: "02",
      title: "Member Feature Presentations",
      icon: <Monitor className="h-5 w-5 text-brand-red" />,
      text: "Each week, select members get dedicated time to present their businesses, outline target markets, and train others on finding referrals.",
    },
    {
      step: "03",
      title: "Education Slots",
      icon: <UserCheck className="h-5 w-5 text-brand-red" />,
      text: "A brief skill-building segment led by our Education Coordinator to sharpen presentation, sales pitch, and referral generation skills.",
    },
    {
      step: "04",
      title: "Open Referral Exchange",
      icon: <TrendingUp className="h-5 w-5 text-brand-red" />,
      text: "The main segment of the meeting where members actively pass warm referrals and report generated revenue. Visitors come prepared with one referral and one ask.",
    },
  ];

  const benefits = [
    "Warm, Qualified Referrals: Exchange direct recommendations with 40+ members actively seeking leads for you.",
    "Exclusivity Clause: Lock out competitors. Only one member is admitted per industry classification.",
    "Built-In Accountability: Maintain high standards and consistent weekly networking structures.",
    "Professional Skill Growth: Opportunities for feature presentations, leadership roles, and training.",
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero banner with darkened backdrop */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-brand-maroon via-black to-[#2A0508] text-white">
        <Image
          src={ASSETS.bannerGeneric}
          alt="About BNI Dreamers Indore"
          fill
          className="object-cover opacity-20 pointer-events-none z-0"
          priority
        />
        <Container className="relative z-10">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red font-heading font-extrabold text-xs tracking-widest uppercase mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 max-w-3xl leading-tight text-white">
              A trusted circle of Indore&apos;s business owners.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              We are a dedicated chapter of BNI India in Indore, M.P., focused on collaborative growth and high-performance referral networks.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. Who We Are */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="Who We Are"
                  title="Indore's Premier Referral Network"
                  align="left"
                  className="!mb-4"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="font-sans text-slate text-sm sm:text-base leading-relaxed flex flex-col gap-6 text-left">
                  <p>
                    BNI Dreamers is a high-performance, member-focused chapter of BNI (Business Network International) based in Indore, Madhya Pradesh. Comprising 40+ top entrepreneurs, directors, and executives, we gather weekly to systematic and collaborative business development.
                  </p>
                  <p>
                    Unlike standard business networking mixers, BNI Dreamers runs a structured referral system that acts as an active sales force for our members. By joining, members gain access to an exclusive network of strategic alliances, each dedicated to advocating for and feeding qualified leads to one another.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. How a Meeting Works Timeline */}
      <Section bg="cloud" id="how-it-works">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Agenda"
              title="How a meeting works."
              subtext="We believe in maximizing efficiency. Our weekly meetings follow a structured, timed agenda focused entirely on relationship-building and lead conversion."
              align="center"
            />
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.15} className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-brand-red/30 pl-6 sm:pl-10 space-y-12 text-left">
              {meetingSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Stepper badge */}
                  <span className="absolute left-[-38px] sm:left-[-54px] top-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-brand-red text-white font-heading font-extrabold text-xs sm:text-sm border-4 border-cloud group-hover:scale-105 transition-transform">
                    {step.step}
                  </span>
                  
                  {/* Timeline content */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col sm:flex-row gap-4 items-start">
                    <div className="bg-brand-red/10 p-3 rounded-xl text-brand-red shrink-0">
                      {step.icon}
                    </div>
                    <div className="font-sans">
                      <h3 className="font-heading font-bold text-lg text-ink mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Core Values Grid */}
      <Section bg="white" id="core-values">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="Our Core Values"
              subtext="The founding principles that guide our chapter's interactions, strategic alignments, and daily business practices."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.15} stagger staggerChildren={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-cloud p-6 rounded-card border border-black/5 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="bg-white p-3 rounded-xl mb-4 border border-black/5 shadow-inner">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base text-ink mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Why Join BNI Dreamers Bullets */}
      <Section bg="cream" id="why-join">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 text-left">
              <Reveal>
                <SectionHeading
                  eyebrow="Membership Perks"
                  title="Why join BNI Dreamers?"
                  align="left"
                  className="!mb-6"
                />
                <p className="text-sm sm:text-base text-slate font-sans leading-relaxed mb-6">
                  Securing a seat in BNI Dreamers provides your company with a persistent sales funnel and local networking backing.
                </p>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <div className="flex flex-col gap-4 text-left font-sans">
                  {benefits.map((bullet, index) => (
                    <div
                      key={index}
                      className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm flex items-start gap-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                      <div className="text-sm sm:text-base text-slate leading-relaxed">
                        <strong className="text-ink font-bold block mb-0.5">
                          {bullet.split(":")[0]}
                        </strong>
                        {bullet.split(":")[1]}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Closing CTA band */}
      <Section bg="dark" className="!bg-[#7A0D14] py-16 text-center border-t border-gold/20">
        <Container>
          <Reveal>
            <h2 className="text-3xl font-heading font-extrabold text-white mb-4">
              Ready to locked-in your exclusive category?
            </h2>
            <p className="text-sm sm:text-base text-cream/90 font-sans max-w-xl mx-auto mb-8">
              Securing a classification blocks your competitors from joining the chapter. Take the first step and visit a meeting.
            </p>
            <Button
              href="/join"
              className="!bg-white !text-brand-red hover:!bg-cream hover:!text-brand-red-dark font-heading font-bold text-sm py-3.5 px-8 uppercase tracking-wider group"
            >
              Get Invited
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}
