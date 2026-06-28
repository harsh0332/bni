"use client";

import React from "react";
import { Users, Calendar, Award, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";

/**
 * TrustStrip component: A clean, horizontal bar placed right beneath the hero section.
 * Contains key stats and metadata divided by thin gold lines, with dynamic counters.
 */
export function TrustStrip() {
  const items = [
    {
      icon: <Users className="h-5 w-5 text-brand-red shrink-0" />,
      text: (
        <span>
          <span className="font-heading font-extrabold text-ink text-base">
            <Counter value={40} suffix="+" />
          </span>{" "}
          Active Members
        </span>
      ),
    },
    {
      icon: <Calendar className="h-5 w-5 text-brand-red shrink-0" />,
      text: <span className="font-sans font-medium text-slate text-sm">Every Wed, 7:30 AM</span>,
    },
    {
      icon: <Award className="h-5 w-5 text-brand-red shrink-0" />,
      text: (
        <span>
          <span className="font-heading font-extrabold text-ink text-base">1</span> Seat / Profession
        </span>
      ),
    },
    {
      icon: <MapPin className="h-5 w-5 text-brand-red shrink-0" />,
      text: <span className="font-sans font-medium text-slate text-sm">Hotel Sayaji, Indore</span>,
    },
  ];

  return (
    <div className="bg-white border-b border-black/5 py-6 relative z-20 shadow-sm">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gold/30">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3.5 px-4 text-center sm:text-left"
            >
              <div className="bg-cloud p-2.5 rounded-full border border-black/5 shrink-0">
                {item.icon}
              </div>
              <div className="font-sans text-sm text-slate font-medium text-left leading-tight">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
