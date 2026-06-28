import React from "react";
import { Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Intro section: Highlights what BNI Dreamers is, BNI's core values (Givers Gain®),
 * and showcases the chapter's key tagline.
 */
export function Intro() {
  return (
    <Section bg="white" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <Reveal duration={0.5}>
              <SectionHeading
                eyebrow="Introduction"
                title="Networking is the foundation for business growth."
                align="left"
                className="mb-6 sm:mb-8"
              />
            </Reveal>
            
            <Reveal delay={0.1} duration={0.5}>
              <div className="flex flex-col gap-6 text-slate font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  BNI Dreamers is a premier local chapter of BNI (Business Network International) in Indore, Madhya Pradesh. Here, 40+ top entrepreneurs, business owners, and professionals meet weekly in structured environments to pass qualified, warm referrals and create strategic partnerships.
                </p>
                <p>
                  Built on the core BNI philosophy of <strong className="text-ink font-semibold">Givers Gain®</strong> — the belief that by giving business to others, you will naturally receive business in return — our members work together within a structured, accountable, and trusted circle to systematically grow their market presence.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Tagline pull-quote styling */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} duration={0.6}>
              <div className="relative bg-cream rounded-card p-8 sm:p-10 shadow-card border-l-4 border-brand-red flex flex-col justify-between overflow-hidden group">
                {/* Decorative gold background node */}
                <div className="absolute top-[-20%] right-[-20%] w-[150px] h-[150px] rounded-full bg-gold/5 blur-2xl" />
                
                <div className="relative z-10">
                  <Quote className="h-10 w-10 text-brand-red opacity-20 mb-4" />
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-ink leading-tight tracking-tight italic">
                    &ldquo;Referrals Grow, Where Trust Grows.&rdquo;
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-slate-500">
                  <span>BNI Dreamers Indore</span>
                  <span className="text-gold">Chapter Tagline</span>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </Section>
  );
}
