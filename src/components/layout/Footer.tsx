import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Linkedin, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Meetings", href: "/meetings" },
  { label: "Members", href: "/members" },
  { label: "Join Us", href: "/join" },
];

/**
 * Dark styled Footer component using the brand-maroon and ink background themes.
 * Organizes contact, meetup schedule, navigation, and social redirection.
 */
export function Footer() {
  return (
    <footer className="bg-[#120809] text-cloud pt-16 pb-8 border-t border-brand-maroon/20">
      <Container className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col leading-none w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-lg p-1">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-2xl tracking-tighter text-brand-red">BNI</span>
                <span className="bg-gold/20 text-gold text-[9px] font-extrabold px-1.5 py-0.5 rounded-full tracking-wider">INDORE</span>
              </div>
              <span className="font-heading font-bold text-[10px] tracking-[0.22em] text-white mt-0.5 uppercase">DREAMERS</span>
            </Link>
            
            <div className="flex flex-col gap-3 font-sans">
              <p className="text-sm text-slate-300 leading-relaxed">
                Indore&apos;s trusted business referral network of elite professionals.
              </p>
              <div className="mt-2 pl-3 border-l-2 border-gold py-1">
                <p className="text-xs italic text-gold font-medium tracking-wide">
                  &ldquo;Referrals Grow, Where Trust Grows.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-white tracking-wider text-sm uppercase">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 font-sans text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-brand-red transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-md py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Meeting Information */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading font-semibold text-white tracking-wider text-sm uppercase">
              Meet Us
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <Calendar className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Every Wednesday</span>
                  <span className="text-xs opacity-90">7:30 AM (IST)</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Hotel Sayaji</span>
                  <span className="text-xs opacity-90">Vijay Nagar, Indore</span>
                </div>
              </div>
              <Link
                href="/join"
                className="mt-2 text-xs font-semibold text-gold hover:text-white transition-colors duration-200 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red rounded-sm inline-block w-fit"
              >
                Get Invited To Visit &rarr;
              </Link>
            </div>
          </div>

          {/* Column 4: Connect & Socials */}
          <div className="flex flex-col gap-4 font-sans">
            <h3 className="font-heading font-semibold text-white tracking-wider text-sm uppercase">
              Connect With Us
            </h3>
            <p className="text-xs text-slate-400 leading-normal">
              Stay updated with our members and recent chapter highlights.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/bnidreamers/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Follow BNI Dreamers Indore on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCR2AskbDBNSQ11JUu7w2uew"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Subscribe to BNI Dreamers Indore on YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Connect with BNI Dreamers Indore on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="bg-white/5 hover:bg-brand-red text-white p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label="Follow BNI Dreamers Indore on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/5 pt-8 font-sans text-xs text-slate-400">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold text-slate-300">
              &copy; {new Date().getFullYear()} BNI Dreamers, Indore. Member-focused business networking.
            </p>
            <p className="text-[10px] opacity-75">
              An independent chapter of BNI&reg; (Business Network International). BNI marks are registered trademarks of BNI Global, LLC.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span>Built by <a href="https://kliqcraft.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors duration-200 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red rounded">KliqCraft</a></span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
