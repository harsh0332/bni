"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    time: "07:15 AM",
    num: "01",
    title: "Arrive & Open Networking",
    desc: "Start the morning with unstructured conversations and warm greetings. This is where strategic bonds are built and introductions begin.",
  },
  {
    time: "07:30 AM",
    num: "02",
    title: "Structured Meeting Begins",
    desc: "The President calls the meeting to order, introducing officers, education coordinators, and visiting guests.",
  },
  {
    time: "07:45 AM",
    num: "03",
    title: "60-Second Member Intros",
    desc: "Every member delivers their elevator pitch, highlighting their core classification, weekly achievements, and precise referral targets.",
  },
  {
    time: "08:15 AM",
    num: "04",
    title: "Feature Showcase Presentation",
    desc: "A designated member delivers an in-depth 10-minute presentation covering their scale, operations, and strategic capabilities.",
  },
  {
    time: "08:30 AM",
    num: "05",
    title: "Education Slot",
    desc: "The education coordinator leads a brief skill-building segment to sharpen pitching, networking, and lead conversion tools.",
  },
  {
    time: "08:45 AM",
    num: "06",
    title: "Referral & Testimonial Round",
    desc: "The core of the meeting where members actively exchange warm referrals and read written testimonials of completed business.",
  },
  {
    time: "09:00 AM",
    num: "07",
    title: "Meeting Closes & Breakfast",
    desc: "The structured segment concludes, leading directly into visitor hosting, feedback sessions, and open networking over breakfast.",
  },
];

export function MeetingProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  // Scroll tracking for sticky desktop timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update active step based on scroll progress (desktop only)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    const index = Math.min(Math.floor(latest * 7), 6);
    setActiveStep(index);
  });

  return (
    <div ref={containerRef} className="relative z-20">
      {/* DESKTOP PINNED VIEW */}
      {!isMobile && (
        <div className="hidden md:block">
          {/* Scroll wrapper to give scroll height */}
          <div className="h-[250vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center bg-paper overflow-hidden">
              {/* Subtle mesh background grid */}
              <div className="absolute inset-0 z-0 opacity-15 pointer-events-none noise-grain" />

              <Container className="grid grid-cols-12 gap-8 items-center h-full max-h-[85vh] relative z-10">
                {/* Left Side: Editorial Timeline rail (5 columns) */}
                <div className="col-span-5 flex flex-col justify-center h-full border-r border-black/5 relative py-12">
                  <span className="font-mono text-[10px] font-bold text-gold uppercase tracking-[0.25em] mb-6">
                    02 / THE SCHEDULE
                  </span>
                  
                  {/* Vertical progress rail */}
                  <div className="relative pl-8 flex flex-col gap-6">
                    {/* Background line */}
                    <div className="absolute left-10 top-2 bottom-2 w-[1.5px] bg-black/5" />
                    
                    {/* Active filling progress line */}
                    <motion.div
                      style={{
                        scaleY: scrollYProgress,
                        originY: 0,
                      }}
                      className="absolute left-10 top-2 bottom-2 w-[1.5px] bg-brand-red"
                    />

                    {STEPS.map((step, idx) => {
                      const isActive = idx === activeStep;
                      const isPast = idx < activeStep;
                      return (
                        <div
                          key={step.num}
                          className="flex items-center gap-6 relative cursor-pointer"
                          onClick={() => {
                            if (containerRef.current) {
                              const rect = containerRef.current.getBoundingClientRect();
                              const scrollTop = window.scrollY + rect.top;
                              const scrollHeight = rect.height;
                              const targetScroll = scrollTop + (idx / 6) * (scrollHeight - window.innerHeight);
                              window.scrollTo({ top: targetScroll, behavior: "smooth" });
                            }
                          }}
                        >
                          {/* Circle indicator */}
                          <div className="relative z-10 w-4 h-4 flex items-center justify-center">
                            <motion.div
                              animate={{
                                scale: isActive ? 1.3 : 1,
                                backgroundColor: isActive ? "var(--brand-red)" : isPast ? "var(--brand-red)" : "#D1D5DB",
                              }}
                              transition={{ duration: 0.3 }}
                              className="w-2.5 h-2.5 rounded-full border border-white"
                            />
                            {isActive && (
                              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-brand-red opacity-40"></span>
                            )}
                          </div>

                          <div className="flex flex-col text-left">
                            <span className={`font-mono text-[10px] font-bold transition-colors duration-300 ${isActive ? "text-brand-red" : "text-slate-400"}`}>
                              {step.time}
                            </span>
                            <span className={`font-display font-extrabold text-base transition-colors duration-300 ${isActive ? "text-ink" : "text-slate-400"}`}>
                              {step.title}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Active Step detailed cards (7 columns) */}
                <div className="col-span-7 pl-12 flex flex-col justify-center h-full text-left relative">
                  <div className="relative min-h-[300px]">
                    {STEPS.map((step, idx) => {
                      const isActive = idx === activeStep;
                      return (
                        <motion.div
                          key={step.num}
                          initial={{ opacity: 0, y: 30 }}
                          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          style={{ pointerEvents: isActive ? "auto" : "none", position: isActive ? "relative" : "absolute" }}
                          className="w-full inset-0 flex flex-col gap-6"
                        >
                          <span className="font-mono text-display-xl font-black text-brand-red/10 leading-none">
                            {step.num}
                          </span>
                          
                          <div>
                            <span className="font-mono text-xs font-bold text-gold tracking-widest uppercase block mb-1">
                              {step.time}
                            </span>
                            <h3 className="font-display font-extrabold text-4xl text-ink tracking-tight">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="text-base text-slate leading-relaxed font-sans max-w-xl">
                            {step.desc}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SCROLL VIEW (No pin, standard vertical reveals) */}
      {isMobile && (
        <div className="block md:hidden bg-paper py-16 border-t border-black/5">
          <Container>
            <Reveal>
              <div className="text-left mb-12">
                <span className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase block mb-2">
                  02 / THE SCHEDULE
                </span>
                <h2 className="font-display font-black text-3xl text-ink leading-tight">
                  How a BNI meeting works.
                </h2>
                <p className="text-sm text-slate font-sans mt-3">
                  Our weekly Indore meetings follow a designed, structured agenda to maximize referral networking efficiency.
                </p>
              </div>
            </Reveal>

            {/* Stepper grid */}
            <div className="relative pl-6 border-l border-gold/20 flex flex-col gap-10 text-left">
              {STEPS.map((step) => (
                <Reveal key={step.num} variant="fade-up" duration={0.6}>
                  <div className="relative">
                    {/* Circle Node */}
                    <div className="absolute left-[-30px] top-1.5 w-2 h-2 rounded-full bg-brand-red border border-white ring-4 ring-brand-red/15" />
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold text-gold tracking-widest uppercase">
                          {step.time}
                        </span>
                        <span className="font-mono text-xs font-extrabold text-slate-300">
                          {step.num}
                        </span>
                      </div>
                      
                      <h3 className="font-display font-extrabold text-lg text-ink">
                        {step.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
