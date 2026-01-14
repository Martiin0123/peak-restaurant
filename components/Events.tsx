"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Calendar } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned Events Section
 * Showcasing restaurant specialties and weekly specials
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
              02 / {language === "de" ? "Spezialitäten" : "Specialties"}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
              {language === "de" ? "Unsere Küche" : "Our Cuisine"}
            </h2>
            <p className="text-white/60 text-xl mt-6 max-w-2xl">
              {language === "de"
                ? "Familiengeführt mit Leidenschaft für exzellente Steaks, frische Produkte und eine beeindruckende Weinauswahl."
                : "Family-run with passion for excellent steaks, fresh products, and an impressive wine selection."}
            </p>
          </div>
        </div>

        {/* Featured Specialty: Green Egg Steaks */}
        <div className="border-t border-white/20 border-b">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative py-12 md:py-16 cursor-pointer overflow-hidden"
            role="article"
            aria-labelledby="fondue-title"
          >
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-taupe/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-bottom" />

            <div className="lg:px-20 md:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Icon / Badge */}
              <div className="lg:col-span-3">
                <div className="inline-block border border-white/20 p-8 group-hover:border-taupe/50 transition-colors backdrop-blur-sm bg-white/5">
                  <Flame
                    size={64}
                    className="text-taupe group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="mt-4 text-white/60 text-sm uppercase tracking-wider pl-1">
                  {language === "de" ? "Unsere Spezialität" : "Our Specialty"}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-6">
                  <h3
                    id="steak-title"
                    className="text-4xl md:text-5xl font-bold group-hover:text-taupe transition-colors duration-300"
                  >
                    {language === "de"
                      ? "Green Egg Steaks"
                      : "Green Egg Steaks"}
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl border-l-2 border-white/10 pl-6 group-hover:border-taupe transition-colors mb-6">
                  {language === "de"
                    ? "Perfekt gegrillte Premium-Steaks auf unserem legendären Green Egg Holzkohlegrill. Zartes Fleisch, perfekte Röstaromen, frisch und auf den Punkt zubereitet."
                    : "Perfectly grilled premium steaks on our legendary Green Egg charcoal grill. Tender meat, perfect roasted flavors, fresh and cooked to perfection."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-white/80">
                    {language === "de" ? "Holzkohlegrill" : "Charcoal Grill"}
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-white/80">
                    {language === "de" ? "Frische Produkte" : "Fresh Products"}
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-white/80">
                    {language === "de" ? "Premium Qualität" : "Premium Quality"}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <a
                  href="/Speisekarte.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 bg-white/5 group-hover:bg-taupe group-hover:border-taupe group-hover:shadow-[0_0_30px_0_rgba(193,168,125,0.6)]"
                >
                  <ArrowRight
                    size={32}
                    className="text-white -rotate-45 group-hover:rotate-0 transition-all duration-500"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Weekly Special: Fondue Thursday */}
        <div className="border-t border-white/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative py-12 md:py-16 cursor-pointer overflow-hidden"
            role="article"
            aria-labelledby="fondue-title"
          >
            {/* Hover Background Reveal */}
            <div className="absolute inset-0 bg-taupe/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-bottom" />

            <div className="lg:px-20 md:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Icon / Badge */}
              <div className="lg:col-span-3">
                <div className="inline-block border border-white/20 p-8 group-hover:border-taupe/50 transition-colors backdrop-blur-sm bg-white/5">
                  <Calendar
                    size={64}
                    className="text-taupe group-hover:text-white transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="mt-4 text-white/60 text-sm uppercase tracking-wider pl-1">
                  {language === "de" ? "Jeden Donnerstag" : "Every Thursday"}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4 mb-6">
                  <h3
                    id="fondue-title"
                    className="text-4xl md:text-5xl font-bold group-hover:text-taupe transition-colors duration-300"
                  >
                    {language === "de" ? "Fondue-Abend" : "Fondue Night"}
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl border-l-2 border-white/10 pl-6 group-hover:border-taupe transition-colors mb-6">
                  {language === "de"
                    ? "Traditionelles Schweizer Fondue mit zartem Fleisch, fein aromatisierter Bouillon und ausgewählten Beilagen. Ein geselliger Genuss jeden Donnerstag."
                    : "Traditional Swiss fondue with tender meat, delicately flavored broth and selected side dishes. A convivial delight every Thursday."}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-white/80">
                    {language === "de"
                      ? "Schweizer Tradition"
                      : "Swiss Tradition"}
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-white/80">
                    {language === "de" ? "Frische Bouillon" : "Fresh Broth"}
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-white/80">
                    {language === "de" ? "Zartes Fleisch" : "Tender Meat"}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="lg:col-span-3 flex justify-start lg:justify-end">
                <a
                  href="/Speisekarte.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 bg-white/5 group-hover:bg-taupe group-hover:border-taupe group-hover:shadow-[0_0_30px_0_rgba(193,168,125,0.6)]"
                >
                  <ArrowRight
                    size={32}
                    className="text-white -rotate-45 group-hover:rotate-0 transition-all duration-500"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
