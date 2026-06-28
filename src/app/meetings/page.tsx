import React from "react";
import {
  Calendar,
  Clock,
  Hourglass,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Meetings | Hotel Sayaji, Indore | BNI Dreamers",
  description:
    "Join BNI Dreamers Indore weekly meetings every Wednesday at 7:30 AM at Hotel Sayaji, Vijay Nagar. Learn about guest entry registration and refer business.",
  openGraph: {
    title: "Weekly Meetings | Hotel Sayaji, Indore | BNI Dreamers",
    description:
      "Join BNI Dreamers Indore weekly meetings every Wednesday at 7:30 AM at Hotel Sayaji, Vijay Nagar.",
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const atAGlance = [
  { label: "Day", value: "Every Wednesday", Icon: Calendar },
  { label: "Time", value: "7:30 AM Onwards", Icon: Clock },
  { label: "Duration", value: "90 Minutes", Icon: Hourglass },
  { label: "Venue", value: "Hotel Sayaji, Indore", Icon: MapPin },
];

const visitorTimeline = [
  {
    title: "Arrive at 7:15 AM",
    text: "Plan to arrive early. Meeting registration and open networking begin immediately. Don\u0027t forget your business cards.",
  },
  {
    title: "Open Networking",
    text: "Connect informally with members and other visiting business owners over morning tea/coffee before the session.",
  },
  {
    title: "Structured Meeting Begins",
    text: "The chapter President rings the bell at 7:30 AM sharp to begin the highly optimized, 90-minute structured agenda.",
  },
  {
    title: "Member Intros & Presentations",
    text: "Members present their weekly 60-second introductions, followed by a deeper 10-minute feature presentation by a select member.",
  },
  {
    title: "Education Slot",
    text: "A brief skill segment led by the education coordinator to train members on how to actively generate referrals.",
  },
  {
    title: "Referral & Testimonial Round",
    text: "The climax of the meeting where members pass qualified leads and share verified testimonials about business collaborations.",
  },
  {
    title: "What to Bring",
    text: "As a visitor, come prepared with a 60-second intro of your business, a stack of business cards, one referral, and one clear business ask.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function MeetingsPage() {
  return (
    <div className="bg-paper">
      {/* ────────────────────────────────────────────────────────────── */}
      {/* 1 · Editorial Page Header                                     */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-paper pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Grain overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        <Container className="relative z-10">
          <Reveal>
            <span className="block font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-6">
              Weekly Meetings
            </span>
          </Reveal>

          <h1 className="text-display-lg md:text-display-xl font-display font-bold text-ink max-w-4xl mb-6">
            <SplitReveal className="text-display-lg md:text-display-xl font-display font-bold text-ink">
              Every Wednesday at Hotel Sayaji.
            </SplitReveal>
          </h1>

          <Reveal delay={0.2}>
            <p className="font-sans text-base sm:text-lg text-slate max-w-2xl leading-relaxed">
              This is where referrals happen. Secure your category, connect with
              Indore&apos;s leading network, and grow.
            </p>
          </Reveal>

          {/* Gold rule */}
          <Reveal delay={0.35}>
            <div className="mt-10 h-px w-24 bg-gold" />
          </Reveal>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 2 · At a Glance Cards                                         */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-paper border-b border-line py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {atAGlance.map((card) => (
                <div
                  key={card.label}
                  className="bg-cloud border-l-2 border-gold rounded-card p-6 flex items-start gap-4"
                >
                  <card.Icon className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate mb-1">
                      {card.label}
                    </span>
                    <span className="block font-display font-bold text-ink text-base sm:text-lg leading-tight">
                      {card.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 3 · Visitor Timeline                                          */}
      {/* ────────────────────────────────────────────────────────────── */}
      <Section bg="cloud">
        <Container>
          {/* Header */}
          <Reveal>
            <span className="block font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-2">
              01
            </span>
            <span className="block font-mono text-eyebrow uppercase tracking-[0.25em] text-slate/60 mb-4">
              First Time Visiting?
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-display-md font-display font-bold text-ink mb-4 max-w-2xl">
              What to expect as a visitor.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-sans text-sm sm:text-base text-slate max-w-2xl leading-relaxed mb-12">
              We run a tight ship. Here is a friendly walkthrough of how the
              Wednesday meeting unfolds from the moment you walk through
              Sayaji&apos;s doors.
            </p>
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.2} className="max-w-3xl">
            <div className="relative border-l-2 border-gold/30 pl-8 sm:pl-10 space-y-10">
              {visitorTimeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Numbered circle */}
                  <span className="absolute -left-[calc(1rem+1.25rem)] sm:-left-[calc(1.25rem+1.25rem)] top-0 flex items-center justify-center h-7 w-7 rounded-full bg-gold text-white font-mono text-xs font-bold border-2 border-paper shadow-sm">
                    {index + 1}
                  </span>

                  <h3 className="font-display font-bold text-base sm:text-lg text-ink mb-1 group-hover:text-gold transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 4 · Registration Info                                         */}
      {/* ────────────────────────────────────────────────────────────── */}
      <section className="bg-paper py-12 sm:py-20">
        <Container>
          <Reveal>
            <span className="block font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-8">
              02
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto bg-cream border border-gold/30 rounded-card p-8 sm:p-12">
              <h3 className="font-display font-bold text-display-md text-ink mb-4">
                Indicative Meeting Fees
              </h3>

              <p className="font-sans text-sm sm:text-base text-slate leading-relaxed mb-5">
                A typical meeting space and breakfast registration fee of{" "}
                <strong className="text-ink font-semibold">₹800–₹900</strong>{" "}
                applies for guests to cover Sayaji Hotel venue costs. This is
                indicative and will be confirmed when you register your invite.
              </p>

              <div className="flex items-center gap-2 text-sm text-slate/70 font-mono uppercase tracking-wider mb-8">
                <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                <span>
                  Includes full buffet breakfast &amp; networking tea/coffee
                </span>
              </div>

              <MagneticButton href="/join" variant="primary">
                Reserve My Seat
                <ArrowRight className="ml-2 h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 5 · Maps                                                      */}
      {/* ────────────────────────────────────────────────────────────── */}
      <Section bg="cloud" className="!py-0">
        <div className="w-full h-[400px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5645366472473!2d75.89436407584164!3d22.744439126620573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4423b49911%3A0xe54d249d95cf1d8a!2sHotel%20Sayaji%20Indore!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Sayaji Indore Location Map"
            className="grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100"
          />
        </div>
      </Section>
    </div>
  );
}
