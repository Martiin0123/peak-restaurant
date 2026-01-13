"use client";

import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned Header
 *
 * CRITIQUE:
 * - Old header was a standard "Logo Left, Links Right" navbar.
 * - Boring. Invisible.
 *
 * REDESIGN:
 * - "Floating Island" or Minimalist approach.
 * - Unified branding.
 * - Cleaner mobile interaction.
 */
export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { key: "events", label: t.nav.events, href: "#events" },
    { key: "about", label: t.nav.about, href: "#about" },
    { key: "menus", label: t.nav.menus, href: "#menus" },
    { key: "gallery", label: t.nav.gallery, href: "#gallery" },
    { key: "findUs", label: t.nav.findUs, href: "#find-us" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? "py-4" : "py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`relative flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "bg-dark/80 backdrop-blur-xl border border-white/5 rounded-full px-6 py-3 shadow-2xl"
                : "bg-transparent px-0"
            }`}
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="relative z-50 flex items-center"
              aria-label={t.nav.about + " - " + t.hero.headline}
            >
              <Image
                src="/logo.png"
                alt="PEAK Restaurant Logo"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 object-contain"
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language */}
              <div className="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                {(["de", "en"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                      language === lang
                        ? "bg-white text-dark"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* CTA Button - Only visible when scrolled or if we want it always */}
              <a
                href="https://app.gastronomiq.at/reservations/48b1ba9b36a7e1142817491a4848883b83ba964f"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 bg-taupe text-white px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:bg-white hover:text-dark hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] ${
                  isScrolled ? "opacity-100" : "opacity-100"
                }`}
              >
                <span>{t.cta.reserve}</span>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-50 p-2 text-white focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark flex flex-col justify-center items-center"
          >
            {/* Background noise */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            <nav
              id="mobile-menu"
              className="relative z-10 flex flex-col items-center gap-8"
              aria-label="Mobile navigation"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                  className="text-5xl font-bold text-white/50 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded px-4 py-2"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 mt-12 flex items-center gap-6"
            >
              <button
                onClick={() => setLanguage("de")}
                className={`text-xl ${
                  language === "de" ? "text-taupe" : "text-white/40"
                }`}
              >
                DE
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xl ${
                  language === "en" ? "text-taupe" : "text-white/40"
                }`}
              >
                EN
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
