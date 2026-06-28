"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  ChevronDown,
  ChevronUp,
  User,
  PhoneCall,
  Briefcase,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";

const GRAIN_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

interface FAQItem {
  question: string;
  answer: string;
}

export function JoinClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("Indore");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; profession?: string }>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do I have to join immediately?",
      answer:
        "No, absolutely not. You can visit BNI Dreamers Indore up to two times as a guest/visitor to experience the meeting dynamics, meet our members, and see if it aligns with your business goals before making any decision.",
    },
    {
      question: "What does it cost to visit?",
      answer:
        "A typical breakfast and venue fee of ₹800–₹900 is payable at the Hotel Sayaji counter on Wednesday morning to cover hotel logistics. BNI is a non-profit referral system, and this fee goes directly to the venue.",
    },
    {
      question: "What if my category is already taken?",
      answer:
        "We only allow one professional classification per seat. If your exact category (e.g., Modular Furniture) is secured, you cannot join BNI Dreamers, but our officers can happily recommend you to other Indore BNI chapters where the seat is open.",
    },
    {
      question: "How long is a meeting?",
      answer:
        "Meetings run for exactly 90 minutes. We begin sharp at 7:30 AM and adjourn at 9:00 AM. Many members arrive by 7:15 AM for informal pre-meeting networking, and stay briefly afterwards to lock in referral connections.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Register as a Visitor",
      text: "Fill out our seat reservation form. A coordinator will connect with you to register your guest pass for Wednesday.",
    },
    {
      num: "02",
      title: "Attend a Wednesday Meeting",
      text: "Join us at Hotel Sayaji at 7:30 AM. Network, introduce your business, and observe the referral cycles first-hand.",
    },
    {
      num: "03",
      title: "Apply for Your Category",
      text: "If your classification is open, submit an application. Our Membership Committee reviews and confirms references.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone/WhatsApp is required";
    if (!profession.trim()) newErrors.profession = "Profession/Industry is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // console.log form data
    console.log("Lead Capture - Reserve My Seat Submission:", {
      name,
      phone,
      profession,
      city,
    });

    // TODO: wire to email/WhatsApp/CRM
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const inputClasses = (hasError: boolean) =>
    `w-full bg-paper border ${
      hasError ? "border-brand-red" : "border-line"
    } rounded-xl py-3.5 pl-12 pr-6 text-sm text-ink font-sans focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all`;

  return (
    <div className="bg-paper">
      {/* ── Editorial Page Header ── */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: GRAIN_BG, backgroundRepeat: "repeat" }}
        />
        <Container>
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-6">
              GET INVITED
            </p>
          </Reveal>
          <SplitReveal className="font-display text-display-xl text-ink" type="words" delay={0.1}>
            Visit a meeting. See it for yourself.
          </SplitReveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-lg text-slate max-w-2xl mt-6 leading-relaxed">
              No pressure. Come as a guest this Wednesday, experience our structured referral system in action, and decide if we are the right fit for your business.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="w-16 h-px bg-gold mt-8" />
          </Reveal>
        </Container>
      </section>

      {/* ── Three Steps ── */}
      <section className="bg-paper pb-20 border-b border-line">
        <Container>
          <Reveal>
            <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-4">
              THE PROCESS
            </p>
            <h2 className="font-display text-display-md text-ink mb-10">
              How to join in 3 steps
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-cloud p-8 rounded-card border border-line flex flex-col text-left"
                >
                  <span className="font-mono text-3xl font-light text-gold/40 block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-lg text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate font-sans leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Lead Form + Sidebar ── */}
      <section className="bg-cloud py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left: Lead Form */}
            <div className="lg:col-span-7 w-full text-left">
              <Reveal>
                <div className="bg-paper p-8 sm:p-10 rounded-card shadow-card border border-line">
                  <h3 className="font-display font-bold text-2xl text-ink mb-8">
                    Reserve My Seat
                  </h3>

                  {isSubmitted ? (
                    <div className="bg-cream border border-gold/40 p-8 rounded-card flex flex-col items-center text-center">
                      <CheckCircle className="h-12 w-12 text-gold mb-4" />
                      <h4 className="font-display font-bold text-lg text-ink mb-2">
                        Invitation Requested!
                      </h4>
                      <p className="text-sm text-slate font-sans leading-relaxed mb-6 max-w-sm">
                        Thank you, {name}. We have received your guest seat request. A chapter coordinator will contact you shortly to register your name at Hotel Sayaji for this Wednesday.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName("");
                          setPhone("");
                          setProfession("");
                        }}
                        className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] hover:text-brand-red transition-colors"
                        type="button"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="join-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate/40" />
                          <input
                            id="join-name"
                            type="text"
                            placeholder="Aditya Vardhan"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={inputClasses(!!errors.name)}
                            required
                            aria-required="true"
                          />
                        </div>
                        {errors.name && (
                          <span className="text-xs text-brand-red font-sans pl-1">{errors.name}</span>
                        )}
                      </div>

                      {/* Phone/WhatsApp */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="join-phone" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <PhoneCall className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate/40" />
                          <input
                            id="join-phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={inputClasses(!!errors.phone)}
                            required
                            aria-required="true"
                          />
                        </div>
                        {errors.phone && (
                          <span className="text-xs text-brand-red font-sans pl-1">{errors.phone}</span>
                        )}
                      </div>

                      {/* Profession */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="join-profession" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
                          Profession / Industry *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate/40" />
                          <input
                            id="join-profession"
                            type="text"
                            placeholder="e.g., Home Automation Specialist"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            className={inputClasses(!!errors.profession)}
                            required
                            aria-required="true"
                          />
                        </div>
                        {errors.profession && (
                          <span className="text-xs text-brand-red font-sans pl-1">{errors.profession}</span>
                        )}
                      </div>

                      {/* City (locked) */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="join-city" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate/50">
                          City
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate/30" />
                          <input
                            id="join-city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full bg-cloud border border-line rounded-xl py-3.5 pl-12 pr-6 text-sm text-slate/40 font-sans cursor-not-allowed"
                            disabled
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-brand-red text-white hover:bg-brand-red-dark active:bg-brand-maroon font-display font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lift hover:shadow-glow-red transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
                        >
                          Reserve My Seat
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-5 text-left flex flex-col gap-6">
              <Reveal delay={0.2}>
                <div className="bg-paper p-8 rounded-card border border-line shadow-card flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-ink mb-4">
                      Prefer to just talk?
                    </h3>
                    <p className="text-sm text-slate font-sans leading-relaxed mb-6">
                      Have questions before reserving a seat? Reach out directly via WhatsApp or Phone call, and a coordinator will assist you with details.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {/* WhatsApp */}
                    {/* TODO: client WhatsApp number */}
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-soft transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>

                    {/* Call */}
                    {/* TODO: client phone number */}
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="w-full bg-transparent hover:bg-cloud text-ink border border-line py-3.5 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors"
                    >
                      <Phone className="h-4.5 w-4.5" />
                      Call Coordinator
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Classification Rule */}
              <Reveal delay={0.35}>
                <div className="bg-cream border border-gold/30 rounded-card p-6">
                  <span className="font-mono text-[10px] text-gold uppercase tracking-[0.25em] mb-2 block">
                    Classification Rule
                  </span>
                  <p className="text-xs text-brand-maroon leading-relaxed font-sans">
                    Remember: BNI holds only <strong>one seat per profession</strong> in a chapter. Once a seat is secured, all other competitors are locked out. Reserve early.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-paper py-20 md:py-28" id="faq">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <p className="font-mono text-eyebrow uppercase tracking-[0.25em] text-gold mb-4">
                FAQ
              </p>
              <h2 className="font-display text-display-md text-ink">
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-px bg-gold mx-auto mt-6" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className={`border rounded-card overflow-hidden transition-all duration-200 ${
                      isOpen ? "border-gold/40 bg-cloud" : "border-line bg-cloud"
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                      type="button"
                    >
                      <span className="font-display font-bold text-base text-ink group-hover:text-brand-red transition-colors pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gold shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate/40 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 border-t border-line pt-4">
                        <p className="text-sm text-slate leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
