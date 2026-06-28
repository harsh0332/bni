import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";

/**
 * Editorial Intro section: Highlights BNI Dreamers Chapter, BNI's philosophy,
 * and features the chapter's signature tagline in an oversized pull-quote.
 */
export function Intro() {
  return (
    <Section bg="white" id="about">
      <Container>
        <div className="flex flex-col gap-16">
          
          {/* Eyebrow & Headline block */}
          <div className="text-left max-w-4xl">
            <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.3em] block mb-4">
              01 / THE CHAPTER
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.0] tracking-tight">
              <SplitReveal type="words" delay={0.05}>
                Networking is the foundation for business growth.
              </SplitReveal>
            </h2>
          </div>

          {/* Asymmetric 2-column description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-left">
            <Reveal delay={0.1}>
              <p className="font-sans text-slate text-sm sm:text-base leading-relaxed">
                BNI Dreamers is Indore&apos;s premier high-performance business networking chapter of BNI India. Comprising 40+ top entrepreneurs and corporate directors representing distinct industry segments, we assemble every week to exchange qualified opportunities and construct strategic alliances.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="font-sans text-slate text-sm sm:text-base leading-relaxed">
                Our structure operates on the core principle of <strong className="text-ink font-semibold">Givers Gain®</strong> — the proven philosophy that by feeding business to others, you naturally attract warm opportunities in return. Through strict categories lockouts and mutual accountability, members secure a dedicated sales force.
              </p>
            </Reveal>
          </div>

          {/* Tagline oversized dramatic pull-quote */}
          <div className="mt-8 pt-16 border-t border-black/5 text-center relative overflow-hidden">
            {/* Film grain noise texture inside tagline container */}
            <div className="noise-grain absolute inset-0 opacity-[0.02] pointer-events-none" />

            <Reveal variant="blur-in" duration={0.8}>
              <blockquote className="font-display font-black text-3xl sm:text-5xl lg:text-7xl text-brand-red tracking-tight leading-none italic max-w-4xl mx-auto py-2">
                &ldquo;Referrals Grow, Where Trust Grows.&rdquo;
              </blockquote>
            </Reveal>
            
            <Reveal delay={0.25}>
              <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.25em] block mt-6">
                BNI Dreamers Indore Chapter Tagline
              </span>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
