import React from "react";
import {
  Calendar,
  Clock,
  Hourglass,
  MapPin,
  ArrowRight,
  Info,
  CheckCircle,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Meetings | Hotel Sayaji, Indore | BNI Dreamers",
  description: "Join BNI Dreamers Indore weekly meetings every Wednesday at 7:30 AM at Hotel Sayaji, Vijay Nagar. Learn about guest entry registration and refer business.",
  openGraph: {
    title: "Weekly Meetings | Hotel Sayaji, Indore | BNI Dreamers",
    description: "Join BNI Dreamers Indore weekly meetings every Wednesday at 7:30 AM at Hotel Sayaji, Vijay Nagar.",
  },
};

export default function MeetingsPage() {
  const atAGlance = [
    {
      label: "Day",
      value: "Every Wednesday",
      icon: <Calendar className="h-6 w-6 text-brand-red" />,
    },
    {
      label: "Time",
      value: "7:30 AM Onwards",
      icon: <Clock className="h-6 w-6 text-brand-red" />,
    },
    {
      label: "Duration",
      value: "90 Minutes",
      icon: <Hourglass className="h-6 w-6 text-brand-red" />,
    },
    {
      label: "Venue",
      value: "Hotel Sayaji, Indore",
      icon: <MapPin className="h-6 w-6 text-brand-red" />,
    },
  ];

  const visitorTimeline = [
    {
      title: "Arrive at 7:15 AM",
      text: "Plan to arrive early. Meeting registration and open networking begin immediately. Don't forget your business cards.",
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

  return (
    <div className="bg-white">
      {/* 1. Page Hero */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-brand-maroon via-black to-[#2A0508] text-white">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-red/10 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gold/5 blur-[120px]" />
        </div>
        <Container className="relative z-10">
          <Reveal>
            <span className="inline-block px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red font-heading font-extrabold text-xs tracking-widest uppercase mb-4">
              Weekly Meetings
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 max-w-3xl leading-tight text-white">
              Every Wednesday. <br />
              7:30 AM. Hotel Sayaji.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              This is where referrals happen. Secure your category, connect with Indore&apos;s leading network, and grow.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. At a Glance Info Cards */}
      <Section bg="white" className="!py-10 md:!py-14 border-b border-black/5">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {atAGlance.map((card, index) => (
                <div
                  key={index}
                  className="bg-cloud p-6 rounded-card border border-black/5 flex items-center gap-4 text-left hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="bg-white p-3 rounded-xl border border-black/5 shadow-inner shrink-0">
                    {card.icon}
                  </div>
                  <div className="font-sans leading-snug">
                    <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
                      {card.label}
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-ink">
                      {card.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. What to Expect Timeline */}
      <Section bg="cloud">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="First Time Visiting?"
              title="What to expect as a visitor."
              subtext="We run a tight ship. Here is a friendly walkthrough of how the Wednesday meeting unfolds from the moment you walk through Sayaji's doors."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.15} className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-brand-red/20 pl-6 sm:pl-8 space-y-8 text-left">
              {visitorTimeline.map((item, index) => (
                <div key={index} className="relative group font-sans">
                  {/* Circle count */}
                  <span className="absolute left-[-34px] sm:left-[-42px] top-0.5 flex items-center justify-center h-6 w-6 rounded-full bg-white text-brand-red font-heading font-extrabold text-xs border border-brand-red/30 shadow-sm">
                    {index + 1}
                  </span>
                  
                  <div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-ink mb-1 group-hover:text-brand-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 4. Visitor / Guest Day registration card */}
      <Section bg="white">
        <Container>
          <Reveal>
            <div className="max-w-4xl mx-auto bg-cream border border-gold/30 rounded-card p-8 sm:p-10 shadow-card flex flex-col md:flex-row gap-8 items-center text-left">
              <div className="bg-gold/10 p-4 rounded-full text-gold shrink-0 hidden md:block">
                <Info className="h-8 w-8" />
              </div>
              <div className="font-sans flex-grow">
                <span className="inline-block px-2.5 py-1 rounded bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wider mb-3">
                  Visitor Registration Info
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink leading-tight mb-3">
                  indicative Meeting Fees
                </h3>
                <p className="text-xs sm:text-sm text-slate leading-relaxed mb-4">
                  A typical meeting space and breakfast registration fee of <strong className="text-ink font-semibold">₹800–₹900</strong> applies for guests to cover Sayaji Hotel venue costs. This is indicative and will be confirmed when you register your invite.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  <CheckCircle className="h-4 w-4 text-brand-red" />
                  <span>Includes full buffet breakfast & networking tea/coffee</span>
                </div>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                <Button href="/join" variant="primary" size="lg" className="w-full justify-center group">
                  Reserve My Seat
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 5. Maps Section */}
      <Section bg="cloud" className="!py-0">
        <div className="w-full h-[400px] relative border-t border-black/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5645366472473!2d75.89436407584164!3d22.744439126620573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4423b49911%3A0xe54d249d95cf1d8a!2sHotel%20Sayaji%20Indore!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Sayaji Indore Location Map"
            className="grayscale filter opacity-90 hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>
      </Section>
    </div>
  );
}
