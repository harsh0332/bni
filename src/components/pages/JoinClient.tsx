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
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

export function JoinClient() {
  // Lead Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("Indore");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; profession?: string }>({});

  // FAQ Accordion States
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do I have to join immediately?",
      answer: "No, absolutely not. You can visit BNI Dreamers Indore up to two times as a guest/visitor to experience the meeting dynamics, meet our members, and see if it aligns with your business goals before making any decision.",
    },
    {
      question: "What does it cost to visit?",
      answer: "A typical breakfast and venue fee of ₹800–₹900 is payable at the Hotel Sayaji counter on Wednesday morning to cover hotel logistics. BNI is a non-profit referral system, and this fee goes directly to the venue.",
    },
    {
      question: "What if my category is already taken?",
      answer: "We only allow one professional classification per seat. If your exact category (e.g., Modular Furniture) is secured, you cannot join BNI Dreamers, but our officers can happily recommend you to other Indore BNI chapters where the seat is open.",
    },
    {
      question: "How long is a meeting?",
      answer: "Meetings run for exactly 90 minutes. We begin sharp at 7:30 AM and adjourn at 9:00 AM. Many members arrive by 7:15 AM for informal pre-meeting networking, and stay briefly afterwards to lock in referral connections.",
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
              Get Invited
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 max-w-3xl leading-tight text-white">
              Visit a meeting. <br />See it for yourself.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              No pressure. Come as a guest this Wednesday, experience our structured referral system in action, and decide if we are the right fit for your business.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. Three Steps to Join */}
      <Section bg="white" className="border-b border-black/5">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Process"
              title="How to join in 3 steps"
              subtext="Getting started with BNI Indore Dreamers is straightforward. We value structure and ensure mutual fit."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.15} duration={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-cloud p-8 rounded-card border border-black/5 flex flex-col justify-between text-left h-full">
                <div>
                  <span className="font-heading font-extrabold text-3xl text-brand-red/40 block mb-4">01</span>
                  <h3 className="font-heading font-bold text-lg text-ink mb-2">Register as a Visitor</h3>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                    Fill out our seat reservation form. An coordinator will connect with you to register your guest pass for Wednesday.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-cloud p-8 rounded-card border border-black/5 flex flex-col justify-between text-left h-full">
                <div>
                  <span className="font-heading font-extrabold text-3xl text-brand-red/40 block mb-4">02</span>
                  <h3 className="font-heading font-bold text-lg text-ink mb-2">Attend a Wednesday Meeting</h3>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                    Join us at Hotel Sayaji at 7:30 AM. Network, introduce your business, and observe the referral cycles first-hand.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-cloud p-8 rounded-card border border-black/5 flex flex-col justify-between text-left h-full">
                <div>
                  <span className="font-heading font-extrabold text-3xl text-brand-red/40 block mb-4">03</span>
                  <h3 className="font-heading font-bold text-lg text-ink mb-2">Apply for Your Category</h3>
                  <p className="text-xs sm:text-sm text-slate leading-relaxed font-sans">
                    If your classification is open, submit an application. Our Membership Committee reviews and confirms references.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 3. Lead Form & Prefer to Talk Grid */}
      <Section bg="cloud">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Lead Form */}
            <div className="lg:col-span-7 w-full text-left">
              <Reveal>
                <div className="bg-white p-8 sm:p-10 rounded-card shadow-card border border-black/5">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink mb-6">
                    Reserve My Seat
                  </h3>

                  {isSubmitted ? (
                    <div className="bg-cream border border-gold/40 p-6 rounded-2xl flex flex-col items-center text-center font-sans">
                      <CheckCircle className="h-12 w-12 text-brand-red mb-4" />
                      <h4 className="font-heading font-bold text-lg text-ink mb-2">
                        Invitation Requested!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate leading-relaxed mb-6 max-w-sm">
                        Thank you, {name}. We have received your guest seat request. A chapter coordinator will contact you shortly to register your name at Hotel Sayaji for this Wednesday.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName("");
                          setPhone("");
                          setProfession("");
                        }}
                        className="text-xs text-brand-red font-bold uppercase tracking-wider hover:underline"
                        type="button"
                      >
                        Submit another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5 font-sans">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                          <input
                            id="name"
                            type="text"
                            placeholder="Aditya Vardhan"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full bg-cloud border ${
                              errors.name ? "border-brand-red" : "border-black/5"
                            } rounded-full py-3 pl-12 pr-6 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/50`}
                          />
                        </div>
                        {errors.name && <span className="text-xs text-brand-red font-medium pl-4">{errors.name}</span>}
                      </div>

                      {/* Phone/WhatsApp */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Phone / WhatsApp *
                        </label>
                        <div className="relative">
                          <PhoneCall className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                          <input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={`w-full bg-cloud border ${
                              errors.phone ? "border-brand-red" : "border-black/5"
                            } rounded-full py-3 pl-12 pr-6 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/50`}
                          />
                        </div>
                        {errors.phone && <span className="text-xs text-brand-red font-medium pl-4">{errors.phone}</span>}
                      </div>

                      {/* Profession */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="profession" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Profession / Industry *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                          <input
                            id="profession"
                            type="text"
                            placeholder="e.g., Home Automation Specialist"
                            value={profession}
                            onChange={(e) => setProfession(e.target.value)}
                            className={`w-full bg-cloud border ${
                              errors.profession ? "border-brand-red" : "border-black/5"
                            } rounded-full py-3 pl-12 pr-6 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/50`}
                          />
                        </div>
                        {errors.profession && (
                          <span className="text-xs text-brand-red font-medium pl-4">{errors.profession}</span>
                        )}
                      </div>

                      {/* City (Indore locked) */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="city" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          City
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                          <input
                            id="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full bg-cloud/50 border border-black/5 rounded-full py-3 pl-12 pr-6 text-sm text-slate-400 focus:outline-none cursor-not-allowed"
                            disabled
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-brand-red text-white hover:bg-brand-red-dark active:bg-brand-maroon font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-full shadow-lift hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
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

            {/* Right: Prefer to Talk */}
            <div className="lg:col-span-5 text-left flex flex-col gap-6">
              <Reveal delay={0.2}>
                <div className="bg-white p-8 rounded-card border border-black/5 shadow-card flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl text-ink mb-4">
                      Prefer to just talk?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed mb-6">
                      Have questions before reserving a seat? Reach out directly via WhatsApp or Phone call, and a coordinator will assist you with details.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 font-sans">
                    {/* WhatsApp wa.me link */}
                    {/* TODO: client WhatsApp number */}
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-6 rounded-full font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                    
                    {/* Call us link */}
                    {/* TODO: client phone number */}
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="w-full bg-transparent hover:bg-black/5 text-ink border-2 border-black/10 py-3.5 px-6 rounded-full font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                    >
                      <Phone className="h-4.5 w-4.5" />
                      Call Coordinator
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Secure category pill card */}
              <Reveal delay={0.35}>
                <div className="bg-cream border border-gold/30 rounded-card p-6 flex flex-col justify-between">
                  <span className="text-[10px] font-heading font-extrabold text-gold uppercase tracking-widest mb-1.5 block">
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
      </Section>

      {/* 4. FAQ Accordion Section */}
      <Section bg="white" id="faq">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              align="center"
              className="mb-8"
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-4 font-sans text-left">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-black/5 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full bg-cloud hover:bg-cream/40 px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                      type="button"
                    >
                      <span className="font-heading font-extrabold text-sm sm:text-base text-ink group-hover:text-brand-red transition-colors">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-brand-red shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="bg-white px-6 py-5 border-t border-black/5">
                        <p className="text-xs sm:text-sm text-slate leading-relaxed">
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
      </Section>
    </div>
  );
}
