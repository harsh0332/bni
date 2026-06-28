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
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ContactClient() {
  // Form States
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState(""); // Email or Phone
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
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight mb-4 max-w-3xl leading-tight text-white">
              Let&apos;s connect.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-xl leading-relaxed">
              Have inquiries about visiting, membership structures, or securing open category classifications? Send us a line below.
            </p>
          </Reveal>
        </Container>
      </div>

      {/* 2. Contact Details & Query Form Grid */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Contact details & Map */}
            <div className="lg:col-span-5 text-left flex flex-col gap-8">
              <Reveal>
                <div className="flex flex-col gap-6">
                  <h3 className="font-heading font-extrabold text-xl text-ink mb-2">
                    Chapter Contacts
                  </h3>

                  <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-slate">
                    {/* Meeting Schedule */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cloud p-3 rounded-xl border border-black/5 shrink-0 text-brand-red">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div className="leading-snug">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Meeting Schedule</span>
                        <span className="font-semibold text-ink text-sm sm:text-base">Every Wednesday, 7:30 AM (IST)</span>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cloud p-3 rounded-xl border border-black/5 shrink-0 text-brand-red">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="leading-snug">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Meeting Venue</span>
                        <span className="font-semibold text-ink text-sm sm:text-base">Hotel Sayaji, Vijay Nagar, Indore</span>
                      </div>
                    </div>

                    {/* Phone/WhatsApp */}
                    {/* TODO: client phone/WhatsApp number */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cloud p-3 rounded-xl border border-black/5 shrink-0 text-brand-red">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="leading-snug">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Phone Call / WhatsApp</span>
                        <span className="font-semibold text-ink text-sm sm:text-base">+91 XXXXX XXXXX</span>
                        <span className="block text-xs text-slate-400 mt-0.5">WhatsApp support available</span>
                      </div>
                    </div>

                    {/* Email */}
                    {/* TODO: client email address */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cloud p-3 rounded-xl border border-black/5 shrink-0 text-brand-red">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="leading-snug">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Email Address</span>
                        <span className="font-semibold text-ink text-sm sm:text-base">info@bnidreamers.in</span>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-start gap-4">
                      <div className="bg-cloud p-3 rounded-xl border border-black/5 shrink-0 text-brand-red">
                        <Instagram className="h-5 w-5" />
                      </div>
                      <div className="leading-snug">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Social Media</span>
                        <a
                          href="https://www.instagram.com/bnidreamers/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-brand-red hover:underline text-sm sm:text-base inline-block"
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
                <div className="w-full h-[240px] relative rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5645366472473!2d75.89436407584164!3d22.744439126620573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4423b49911%3A0xe54d249d95cf1d8a!2sHotel%20Sayaji%20Indore!5e0!3m2!1sen!2sin!4v1719600000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Hotel Sayaji Location"
                    className="grayscale opacity-90 hover:opacity-100 transition-opacity duration-300"
                  ></iframe>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7 w-full text-left">
              <Reveal>
                <div className="bg-cloud p-8 sm:p-10 rounded-card border border-black/5 shadow-card">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-ink mb-2">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate font-sans mb-8">
                    We usually respond within a day. Provide your contact details and query below.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-white border border-black/5 p-8 rounded-2xl flex flex-col items-center text-center font-sans">
                      <CheckCircle className="h-12 w-12 text-brand-red mb-4" />
                      <h4 className="font-heading font-bold text-lg text-ink mb-2">
                        Message Sent!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate leading-relaxed mb-6 max-w-sm">
                        Thank you, {name}. We have received your query. A chapter coordinator will review your message and contact you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setName("");
                          setContactInfo("");
                          setMessage("");
                        }}
                        className="text-xs text-brand-red font-bold uppercase tracking-wider hover:underline"
                        type="button"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5 font-sans">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                          <input
                            id="name"
                            type="text"
                            placeholder="Aditya Vardhan"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full bg-white border ${
                              errors.name ? "border-brand-red" : "border-black/5"
                            } rounded-full py-3 pl-12 pr-6 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/50`}
                          />
                        </div>
                        {errors.name && <span className="text-xs text-brand-red font-medium pl-4">{errors.name}</span>}
                      </div>

                      {/* Email/Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="contactInfo" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Email or Phone Number
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-3.5 h-4.5 w-4.5 text-slate-400" />
                          <input
                            id="contactInfo"
                            type="text"
                            placeholder="aditya@example.com or +91 98765 43210"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            className={`w-full bg-white border ${
                              errors.contactInfo ? "border-brand-red" : "border-black/5"
                            } rounded-full py-3 pl-12 pr-6 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/50`}
                          />
                        </div>
                        {errors.contactInfo && (
                          <span className="text-xs text-brand-red font-medium pl-4">{errors.contactInfo}</span>
                        )}
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Message
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-4 h-4.5 w-4.5 text-slate-400" />
                          <textarea
                            id="message"
                            rows={5}
                            placeholder="Type your question or request here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className={`w-full bg-white border ${
                              errors.message ? "border-brand-red" : "border-black/5"
                            } rounded-2xl py-3.5 pl-12 pr-6 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand-red/50 resize-none`}
                          />
                        </div>
                        {errors.message && (
                          <span className="text-xs text-brand-red font-medium pl-4">{errors.message}</span>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="w-full bg-brand-red text-white hover:bg-brand-red-dark active:bg-brand-maroon font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-full shadow-lift hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
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
      </Section>
    </div>
  );
}
