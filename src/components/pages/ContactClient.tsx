"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Instagram,
  User,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SplitReveal } from "@/components/ui/SplitReveal";

const GRAIN_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

export function ContactClient() {
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contactInfo?: string; message?: string }>({});

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!contactInfo.trim()) newErrors.contactInfo = "Email or Phone number is required";
    if (!message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // console.log contact details
    console.log("Contact Form Submission:", {
      name,
      contactInfo,
      message,
    });

    // TODO: wire to email/WhatsApp/CRM
  };

  const contactItems = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Meeting Schedule",
      value: "Every Wednesday, 7:30 AM (IST)",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Meeting Venue",
      value: "Hotel Sayaji, Vijay Nagar, Indore",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone / WhatsApp",
      value: "+91 XXXXX XXXXX",
      subtext: "WhatsApp support available",
      // TODO: client phone/WhatsApp number
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email Address",
      value: "info@bnidreamers.in",
    },
  ];

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
              CONTACT
            </p>
          </Reveal>
          <SplitReveal className="font-display text-display-xl text-ink" type="words" delay={0.1}>
            Let&apos;s connect.
          </SplitReveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-lg text-slate max-w-2xl mt-6 leading-relaxed">
              Have inquiries about visiting, membership structures, or securing open category classifications? Send us a line below.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="w-16 h-px bg-gold mt-8" />
          </Reveal>
        </Container>
      </section>

      {/* ── Contact Grid ── */}
      <section className="bg-paper py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Contact Info + Map */}
            <div className="lg:col-span-5 text-left flex flex-col gap-8">
              <Reveal>
                <div className="flex flex-col gap-6">
                  <h3 className="font-display font-bold text-xl text-ink mb-2">
                    Chapter Contacts
                  </h3>

                  <div className="flex flex-col gap-5">
                    {contactItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="bg-cloud p-3 rounded-xl border border-line shrink-0 text-gold">
                          {item.icon}
                        </div>
                        <div className="leading-snug">
                          <span className="block font-mono text-[10px] uppercase tracking-wider text-slate/50 mb-0.5">
                            {item.label}
                          </span>
                          <span className="font-sans font-semibold text-ink text-sm">
                            {item.value}
                          </span>
                          {item.subtext && (
                            <span className="block text-xs text-slate/40 mt-0.5 font-sans">
                              {item.subtext}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Instagram */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cloud p-3 rounded-xl border border-line shrink-0 text-gold">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div className="leading-snug">
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-slate/50 mb-0.5">
                          Social Media
                        </span>
                        <a
                          href="https://www.instagram.com/bnidreamers/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans font-semibold text-brand-red hover:text-brand-red-dark transition-colors text-sm"
                        >
                          @bnidreamers
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Map embed */}
              <Reveal delay={0.2}>
                <div className="w-full h-[240px] relative rounded-card overflow-hidden border border-line shadow-soft">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5645366472473!2d75.89436407584164!3d22.744439126620573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4423b49911%3A0xe54d249d95cf1d8a!2sHotel%20Sayaji%20Indore!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Hotel Sayaji Location"
                    className="grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-500"
                  ></iframe>
                </div>
              </Reveal>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 w-full text-left">
              <Reveal>
                <div className="bg-cloud p-8 sm:p-10 rounded-card border border-line shadow-card">
                  <h3 className="font-display font-bold text-2xl text-ink mb-2">
                    Send a Message
                  </h3>
                  <p className="text-sm text-slate font-sans mb-8">
                    We usually respond within a day. Provide your contact details and query below.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-paper border border-line p-8 rounded-card flex flex-col items-center text-center">
                      <CheckCircle className="h-12 w-12 text-gold mb-4" />
                      <h4 className="font-display font-bold text-lg text-ink mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-sm text-slate font-sans leading-relaxed mb-6 max-w-sm">
                        Thank you, {name}. We have received your query. A chapter coordinator will review your message and contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName("");
                          setContactInfo("");
                          setMessage("");
                        }}
                        className="font-mono text-[11px] text-gold uppercase tracking-[0.2em] hover:text-brand-red transition-colors"
                        type="button"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
                          Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate/40" />
                          <input
                            id="contact-name"
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

                      {/* Email/Phone */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contact-info" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
                          Email or Phone Number
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate/40" />
                          <input
                            id="contact-info"
                            type="text"
                            placeholder="aditya@example.com or +91 98765 43210"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            className={inputClasses(!!errors.contactInfo)}
                            required
                            aria-required="true"
                          />
                        </div>
                        {errors.contactInfo && (
                          <span className="text-xs text-brand-red font-sans pl-1">{errors.contactInfo}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="contact-message" className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate">
                          Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 h-4.5 w-4.5 text-slate/40" />
                          <textarea
                            id="contact-message"
                            rows={5}
                            placeholder="Type your question or request here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`w-full bg-paper border ${
                              errors.message ? "border-brand-red" : "border-line"
                            } rounded-xl py-3.5 pl-12 pr-6 text-sm text-ink font-sans focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none`}
                            required
                            aria-required="true"
                          />
                        </div>
                        {errors.message && (
                          <span className="text-xs text-brand-red font-sans pl-1">{errors.message}</span>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-brand-red text-white hover:bg-brand-red-dark active:bg-brand-maroon font-display font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lift hover:shadow-glow-red transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
                        >
                          Send Message
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
