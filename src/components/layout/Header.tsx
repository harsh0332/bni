"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Meetings", href: "/meetings" },
  { label: "Members", href: "/members" },
  { label: "Join", href: "/join" },
];

/**
 * Sticky Header component that transitions from transparent to solid white upon scrolling.
 * Features a custom wordmark lockup, responsive desktop/mobile navigation, and accessibility support.
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll handler for background state transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll locking when mobile menu is active
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

  // Close mobile menu on navigate
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Typographic Logo Lockup */}
          <Link
            href="/"
            className="flex flex-col group leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg p-1"
            aria-label="BNI Dreamers Indore Home"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-extrabold text-2xl tracking-tighter text-brand-red transition-colors duration-200">
                BNI
              </span>
              <span className="bg-gold/10 text-gold text-[9px] font-extrabold px-1.5 py-0.5 rounded-full tracking-wider">
                INDORE
              </span>
            </div>
            <span className="font-heading font-bold text-[10px] tracking-[0.22em] text-ink mt-0.5 uppercase transition-colors duration-200">
              DREAMERS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-sans font-medium text-sm text-slate hover:text-brand-red transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:block">
            <Button href="/join" variant="primary" size="sm">
              Get Invited
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-ink hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            type="button"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-[320px] bg-white p-6 shadow-2xl flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Header within Mobile Menu Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-black/5">
                  <div className="flex flex-col leading-none">
                    <div className="flex items-center gap-1.5">
                      <span className="font-heading font-extrabold text-xl tracking-tighter text-brand-red">
                        BNI
                      </span>
                      <span className="bg-gold/10 text-gold text-[8px] font-extrabold px-1.5 py-0.5 rounded-full tracking-wider">
                        INDORE
                      </span>
                    </div>
                    <span className="font-heading font-bold text-[9px] tracking-[0.2em] text-ink mt-0.5 uppercase">
                      DREAMERS
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-ink hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg"
                    aria-label="Close Menu"
                    type="button"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-6 py-8">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-sans font-semibold text-lg text-ink hover:text-brand-red transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-md"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-black/5">
                <Button href="/join" variant="primary" size="lg" className="w-full">
                  Get Invited
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
