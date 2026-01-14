"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned About Section
 */
export function About() {
  const { t, language } = useLanguage();

  // Core features that define PEAK Restaurant
  const features =
    language === "de"
      ? [
          {
            title: "Green Egg Holzkohlegrill",
            description:
              "Exzellente Steaks vom legendären Keramikgrill - perfekte Röstaromen und zartes Fleisch",
          },
          {
            title: "Beeindruckender Weinkeller",
            description:
              "Erlesene Weinauswahl aus unserem spektakulären Keller - perfekt kuratiert für jedes Gericht",
          },
          {
            title: "Frische Produkte",
            description:
              "Tägliche Auswahl bester regionaler und saisonaler Zutaten - Qualität, die man schmeckt",
          },
          {
            title: "Familiengeführt",
            description:
              "Mit Herz und Leidenschaft - persönlicher Service und familiäre Atmosphäre",
          },
        ]
      : [
          {
            title: "Green Egg Charcoal Grill",
            description:
              "Excellent steaks from our legendary ceramic grill - perfect roasted flavors and tender meat",
          },
          {
            title: "Stunning Wine Cellar",
            description:
              "Exquisite wine selection from our spectacular cellar - perfectly curated for every dish",
          },
          {
            title: "Fresh Products",
            description:
              "Daily selection of the finest regional and seasonal ingredients - quality you can taste",
          },
          {
            title: "Family-Run",
            description:
              "With heart and passion - personal service and family atmosphere",
          },
        ];

  return (
    <section id="about" className="relative py-32 bg-[#1A1A1A] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-dark/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="mb-20 flex items-end justify-between border-b border-white/10 pb-6">
          <span className="text-sm font-mono uppercase tracking-widest text-taupe">
            01 / {t.about.title}
          </span>
          <span className="hidden md:block text-white/40 text-xs max-w-xs text-right">
            Ischgl, Austria
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* LEFT: Typography & Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl text-white mb-8 leading-[1.1]"
            >
              {t.about.story.title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <p className="text-xl text-white/80 font-light leading-relaxed">
                {t.about.story.content}
              </p>

              {/* Integrated Pull Quote */}
              <div className="border-l-2 border-taupe pl-6 py-2 my-8">
                <p className="text-2xl text-white italic leading-snug mb-4">
                  {language === "de"
                    ? "Exzellenz beginnt mit Leidenschaft und den besten Produkten."
                    : "Excellence begins with passion and the finest products."}
                </p>
                <p className="text-lg text-white/60 font-light">
                  {language === "de"
                    ? "Familiengeführt. Authentisch. Unvergesslich."
                    : "Family-Run. Authentic. Unforgettable."}
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visuals & Features List */}
          <div className="lg:col-span-6 relative">
            {/* Family Photo - Redesigned */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 overflow-hidden rounded-lg bg-dark/30"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/Familie-Peak.avif"
                  alt={
                    language === "de"
                      ? "Familie Zangerl - Drei Generationen Gastfreundschaft"
                      : "Zangerl Family - Three Generations of Hospitality"
                  }
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark via-dark/80 to-transparent p-8">
                <h4 className="text-xl font-semibold text-white mb-3">
                  {t.about.family.title}
                </h4>
                <p className="text-sm text-white/90 leading-relaxed">
                  {t.about.family.description}
                </p>
              </div>
            </motion.div>

            {/* Features List - Minimalist */}
            <div className="space-y-6">
              {features.map((feature, i) => {
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="group flex items-start justify-between border-b border-white/10 pb-4 hover:border-taupe/50 transition-colors"
                  >
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1 group-hover:text-taupe transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-white/50 max-w-xs">
                        {feature.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="text-white/20 group-hover:text-taupe transition-colors"
                      size={18}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
