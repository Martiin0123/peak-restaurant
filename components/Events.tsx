"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned Events Section
 * Updated to feature the Fondue Evening specifically
 */
export function Events() {
  const { t, language } = useLanguage();

  return (
    <section id="events" className="py-32 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-sm font-mono uppercase tracking-widest text-taupe mb-4 block">
              02 / {t.events.title}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              {t.events.title}
            </h2>
          </div>
        </div>

        {/* Featured Recurring Event: Fondue Night */}
        <div className="border-t border-white/20 border-b">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative py-12 md:py-16 cursor-pointer overflow-hidden"
            role="article"
            aria-labelledby="fondue-title"
          >
            <a
              href="/Fondue.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark"
              aria-label={
                language === "de"
                  ? "Fondue Menü öffnen - Öffnet in neuem Fenster"
                  : "Open Fondue Menu - Opens in new window"
              }
            />
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-taupe/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-bottom" />

            {/* Large Background Image Reveal - Optional polish */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="lg:px-20 md:px-20    relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Date / Recurrence - Styled like a calendar leaf */}
              <div className="lg:col-span-3">
                <div className="inline-block border border-white/20 p-6 group-hover:border-taupe/50 transition-colors backdrop-blur-sm bg-white/5">
                  <span className="block text-4xl font-light text-white mb-2">
                    {language === "de" ? "DO" : "THU"}
                  </span>
                  <span className="text-sm font-mono uppercase tracking-widest text-taupe">
                    {language === "de" ? "Jeden Woche" : "Every Week"}
                  </span>
                </div>
                <div className="mt-4 text-white/40 text-xs uppercase tracking-wider pl-1">
                  {language === "de" ? "Bis 19.04.2026" : "Until Apr 19, 2026"}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-6">
                  <h3
                    id="fondue-title"
                    className="text-4xl md:text-5xl font-bold group-hover:text-taupe transition-colors duration-300"
                  >
                    {language === "de" ? "Fondue Abend" : "Fondue Night"}
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl border-l-2 border-white/10 pl-6 group-hover:border-taupe transition-colors">
                  {language === "de"
                    ? "Zartes Fleisch, fein aromatisierte Bouillon und ausgewählte Beilagen. Genussvolle Geselligkeit garantiert."
                    : "Tender meat, delicately flavored broth and selected side dishes. Enjoyable conviviality guaranteed."}
                </p>
              </div>

              {/* Action - Large Floating Arrow */}
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <div className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 bg-white/5 group-hover:bg-taupe group-hover:border-taupe group-hover:shadow-[0_0_30px_0_rgba(193,168,125,0.6)]">
                  <ArrowRight
                    size={32}
                    className="text-white -rotate-45 group-hover:rotate-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
