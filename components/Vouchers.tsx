"use client";

import { motion } from "framer-motion";
import { Gift, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const VOUCHER_URL =
  "https://app.gastronomiq.at/vouchers/purchase/48b1ba9b36a7e1142817491a4848883b83ba964f";

export function Vouchers() {
  const { t } = useLanguage();

  return (
    <section
      id="vouchers"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
      aria-labelledby="vouchers-title"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-dark/10 bg-[#F5F5F5] mb-8">
            <Gift size={24} className="text-taupe" strokeWidth={1.5} />
          </div>

          <p className="text-xs uppercase tracking-[0.22em] text-taupe font-medium mb-4">
            {t.vouchers.eyebrow}
          </p>

          <h2
            id="vouchers-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-5"
          >
            {t.vouchers.title}
          </h2>

          <p className="text-dark/65 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            {t.vouchers.description}
          </p>

          <a
            href={VOUCHER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-dark text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-taupe transition-colors duration-300 shadow-lg"
          >
            {t.vouchers.cta}
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
