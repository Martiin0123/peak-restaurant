"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned Menu CTA Section
 *
 * DESIGN RATIONALE:
 * - BACKGROUND: Switched to #AA998A (taupe) as the dominant surface to introduce warmth and break the dark mode monotony.
 * - LAYOUT: Asymmetric grid moves away from the generic centered alignment. Typography acts as a visual anchor.
 * - BUTTON: Custom "pill" shape with inverted colors (Dark on Taupe) creates strong contrast.
 *   The magnetic-style hover and inner shadow make it feel tactile and premium.
 * - TYPOGRAPHY: Large scale, tight letter-spacing, and high contrast (Dark text on Light bg) gives an editorial feel.
 */
export function Menus() {
  const { t } = useLanguage();

  const handleMenuClick = () => {
    const pdfPath = "/Speisekarte.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <section
      id="menus"
      className="relative py-24 md:py-32 overflow-hidden bg-taupe text-dark"
    >
      {/* 
        BACKGROUND TREATMENT - Optimized for mobile performance
        - Solid taupe base (#AA998A)
        - Simple gradient overlay instead of heavy SVG filters
      */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-br from-dark/5 via-transparent to-white/5" />

      {/* Large decorative gradient orb for subtle variation */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* 
            TYPOGRAPHY COLUMN (Left-aligned, span 7)
            - Uses negative space and scale
          */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Decorative label */}
              <span className="block text-dark/60 text-sm font-mono uppercase tracking-widest mb-6 pl-1 border-l-2 border-dark/30">
                03 / {t.menus.title}
              </span>

              {/* Headline - Big, Bold, Editorial */}
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8 text-dark">
                {t.menus.headline.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </h2>

              {/* Subline - High legibility, distinct from headline */}
              <p className="text-xl md:text-2xl text-dark/80 max-w-lg leading-relaxed font-light">
                {t.menus.subline}
              </p>
            </motion.div>
          </div>

          {/* 
            CTA COLUMN (Offset, span 5)
            - Pushes button to a distinct zone
          */}
          <div className="lg:col-span-5 flex lg:justify-end pb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* 
                BUTTON REDESIGN
                - Pill shape (rounded-full)
                - Dark background (#202020) on Taupe (#AA998A) -> High Contrast
                - Hover: Scale + Shadow increase
              */}
              <motion.button
                onClick={handleMenuClick}
                className="group relative flex items-center justify-between gap-6 bg-dark text-taupe pl-8 pr-4 py-5 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="flex flex-col items-start z-10">
                  <span className="text-lg font-bold tracking-wide text-white">
                    {t.menus.ctaButton}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-widest mt-0.5">
                    PDF / 2.4 MB
                  </span>
                </div>

                {/* Icon Circle */}
                <div className="relative w-12 h-12 bg-white/10 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-white/20 transition-colors">
                  <Utensils size={20} className="text-white relative z-10" />

                  {/* Ripple effect on hover */}
                  <div className="absolute inset-0 bg-taupe/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
