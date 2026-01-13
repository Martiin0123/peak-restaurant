"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Clock, Utensils } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned Hero Section
 *
 * CRITIQUE OF PREVIOUS VERSION:
 * - "Centered text" pattern is lazy and overused.
 * - Info chips were clutter.
 * - Lacked atmosphere and "sense of place".
 *
 * DESIGN RATIONALE:
 * - CINEMATIC TYPOGRAPHY: Massive scale title, creating a graphical element.
 * - ASYMMETRY: Content pushed to corners/edges to frame the negative space.
 * - BACKGROUND: Layered depth (Video/Image placeholder + Grain + Gradient).
 * - MICRO-INTERACTIONS: Magnetic scroll indicator.
 */
export function Hero() {
  const { t, language } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-dark flex flex-col justify-between pt-32 pb-12"
      aria-labelledby="hero-headline"
    >
      {/* 1. BACKGROUND LAYERS */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-linear scale-110"
            style={{ backgroundImage: 'url("/Gallery1.jpeg")' }}
          />
        </div>

        {/* Dynamic Gradient Orb */}
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-taupe/5 rounded-full blur-[120px] animate-pulse-slow" />

        {/* Grain Overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/90" />
      </div>

      {/* 2. MAIN CONTENT - Asymmetric Grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Spacer for header */}
        <div className="flex-1" />

        {/* Hero Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          {/* Headline - Occupies main visual weight */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              id="hero-headline"
              className="text-[15vw] lg:text-[12rem] font-bold text-white leading-[0.8] tracking-tighter mix-blend-difference select-none"
            >
              {t.hero.headline}
            </h1>
            <div className="h-2 w-32 bg-taupe mt-4 hidden lg:block" />
          </motion.div>

          {/* Editorial Info Column - Offset to right */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right space-y-8 drop-shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Subline */}
            <p className="text-xl md:text-2xl text-white font-light max-w-xs leading-relaxed">
              {t.hero.subline}
              <span className="inline-block mt-3 px-4 py-1.5 bg-taupe/10 border border-taupe/30 rounded-full text-taupe text-sm font-medium backdrop-blur-sm">
                Est. 2021
              </span>
            </p>

            {/* Concise Info - Replaces "Chips" */}
            <div className="space-y-4 text-white text-sm uppercase tracking-wider">
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <Clock size={16} className="text-taupe" />
                <span>{t.info.hoursValue}</span>
              </div>
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <Utensils size={16} className="text-taupe" />
                <span className="text-white">
                  {language === "de"
                    ? "Jeden Donnerstag: Fondue Abend"
                    : "Every Thursday: Fondue Night"}
                </span>
              </div>
              <div className="flex items-center gap-3 lg:flex-row-reverse">
                <MapPin size={16} className="text-taupe" />
                <span>{t.info.addressValue}</span>
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href="https://app.gastronomiq.at/reservations/48b1ba9b36a7e1142817491a4848883b83ba964f"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-dark font-bold tracking-wide transition-all duration-300 hover:scale-105 hover:bg-taupe hover:text-white hover:shadow-[0_0_20px_rgba(193,168,125,0.4)] focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark"
              aria-label={t.cta.reserve + " - Opens in new window"}
            >
              <span>{t.cta.reserve}</span>
              <div
                className="w-2 h-2 bg-taupe rounded-full group-hover:bg-white transition-colors duration-300"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* 3. SCROLL INDICATOR - Anchored bottom left */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-4 sm:left-8 z-20 flex items-center gap-4"
      >
        <span
          className="text-white/40 text-xs uppercase tracking-[0.2em] rotate-180 py-2"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="h-16 w-[1px] bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </motion.div>
    </section>
  );
}
