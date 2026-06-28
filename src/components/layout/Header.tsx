"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Meetings", href: "/meetings" },
  { label: "Members", href: "/members" },
  { label: "Join Us", href: "/join" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Scroll detection to morph header background styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Autoclose menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Stagger variants for mobile links
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: 35, rotate: 1 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-[#FAF8F5]/80 backdrop-blur-md border-b border-black/5 shadow-soft py-3"
            : "bg-transparent py-6"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Refined logo lockup */}
          <Link
            href="/"
            className="flex flex-col group leading-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded p-0.5 relative z-50"
            aria-label="BNI Dreamers Indore Home"
          >
            <div className="flex items-end gap-1">
              <span className="font-display font-extrabold text-2xl tracking-tight text-brand-red group-hover:scale-[1.02] transition-transform duration-300">
                BNI
              </span>
              <span className="font-mono text-[8px] font-extrabold tracking-widest text-gold pb-1 select-none">
                INDORE
              </span>
            </div>
            <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-ink mt-0.5 uppercase opacity-85">
              DREAMERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative z-50">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-sans text-[13px] font-medium tracking-wide uppercase relative py-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded transition-colors duration-300 ${
                    isActive ? "text-brand-red" : "text-slate hover:text-brand-red"
                  }`}
                >
                  <span>{item.label}</span>
                  
                  {/* Animated hover line underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  )}
                  
                  {/* Active route underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeHeaderUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block relative z-50">
            <MagneticButton href="/join" variant="primary">
              Get Invited
            </MagneticButton>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-ink hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-full relative z-50"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </Container>
      </header>

      {/* Full-Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "circle(0% at 92% 5%)" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { clipPath: "circle(150% at 92% 5%)" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ink text-white md:hidden flex flex-col justify-between p-8 pt-28 shadow-2xl"
          >
            {/* Film grain noise overlay on mobile menu background */}
            <div className="noise-overlay opacity-[0.04]" aria-hidden="true" />

            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-5 text-left"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.label} variants={linkVariants}>
                    <Link
                      href={item.href}
                      className={`font-display font-extrabold text-4xl sm:text-5xl transition-colors block py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded ${
                        isActive ? "text-brand-red" : "text-white hover:text-brand-red"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Mobile Footer Lockup info */}
            <div className="flex flex-col gap-6 mt-8">
              <hr className="divider-gold w-full opacity-30" />
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
                <div className="text-left font-sans">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold block mb-1">
                    Weekly Meeting
                  </span>
                  <span className="text-sm font-semibold text-slate-300 block">
                    Every Wednesday · 7:30 AM · Hotel Sayaji
                  </span>
                </div>
                
                <div className="w-full sm:w-auto">
                  <MagneticButton href="/join" variant="primary" className="w-full sm:w-auto text-center">
                    Get Invited
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
