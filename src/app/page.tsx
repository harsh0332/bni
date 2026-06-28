import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Intro } from "@/components/home/Intro";
import { Benefits } from "@/components/home/Benefits";
import { Experience } from "@/components/home/Experience";
import { StatsStrip } from "@/components/home/StatsStrip";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { OpenClassifications } from "@/components/home/OpenClassifications";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Full-Width Premium Hero banner */}
      <Hero />

      {/* 2. Thin highlight metrics & location strip */}
      <TrustStrip />

      {/* 3. Chapter overview and core values introduction */}
      <Intro />

      {/* 4. Three main benefits cards */}
      <Benefits />

      {/* 5. Three BNI styles and meeting format experience cards */}
      <Experience />

      {/* 6. Social statistics & Indian currency proof band */}
      <StatsStrip />

      {/* 7. Executive leadership officer teaser preview */}
      <LeadershipPreview />

      {/* 8. Headshots and member referral testimonies */}
      <Testimonials />

      {/* 9. SECURE/CLAIM available category position pills */}
      <OpenClassifications />

      {/* 10. Large final invite & Wednesday contact CTA */}
      <FinalCTA />
    </>
  );
}
