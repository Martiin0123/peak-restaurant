"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowRight, Clock, Phone, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/**
 * Redesigned Find Us Section
 *
 * CRITIQUE:
 * - Boring "Split Left/Right".
 * - Map was a dead gray box.
 *
 * REDESIGN:
 * - "Floating Card" aesthetic.
 * - Background is a dark, abstract map texture.
 * - Contact info is prominent and typographical.
 */
export function FindUs() {
  const { t } = useLanguage();

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=47.01477184708951,10.294093581762276`;

  return (
    <section
      id="find-us"
      className="relative py-0 bg-dark min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* 1. Background "Map" Texture */}
      <div className="absolute inset-0 bg-[#121212]">
        {/* Google Maps Embed - Grayscale / Dark Mode Filter */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.857644265147!2d10.294093581762276!3d47.01477184708951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzUzLjIiTiAxMMKwMTcnMzguNyJF!5e0!3m2!1sen!2sat!4v1652345678901!5m2!1sen!2sat"
          style={{
            border: 0,
            filter: "grayscale(100%) invert(90%) contrast(80%)",
          }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-100 w-[150%] h-full absolute top-0 left-0"
        ></iframe>

        {/* Radial gradient to focus center / Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#111_100%)] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark/80 backdrop-blur-md border border-white/10 p-8 md:p-12 lg:p-16 max-w-2xl shadow-2xl"
          >
            <span className="text-sm font-mono uppercase tracking-widest text-taupe mb-8 block">
              05 / {t.findUs.title}
            </span>

            <div className="space-y-12">
              {/* Address Block */}
              <div>
                <h3 className="text-white/40 text-sm uppercase tracking-wider mb-4">
                  {t.info.address}
                </h3>
                <p className="text-3xl md:text-5xl text-white leading-tight">
                  {t.info.addressValue.split(",")[0]}, <br />
                  {t.info.addressValue.split(",")[1]}
                </p>
                <p className="text-lg text-white/70 mt-4 leading-relaxed">
                  im Hotel Alpina Ischgl, im ersten Untergeschoss
                </p>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 mt-6 text-taupe hover:text-white transition-colors border-b border-taupe/30 hover:border-white pb-1"
                >
                  <MapPin size={18} />
                  <span className="uppercase tracking-widest text-sm">
                    {t.cta.getDirections}
                  </span>
                </a>
              </div>

              {/* Grid Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h4 className="flex items-center gap-2 text-white font-medium mb-4">
                    <Clock size={16} className="text-taupe" /> {t.info.hours}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {t.info.hoursValue}
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-white font-medium mb-4">
                    <Phone size={16} className="text-taupe" /> Contact
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {t.info.phoneValue} <br />
                    <a
                      href="mailto:info@peak-restaurant.at"
                      className="hover:text-taupe transition-colors"
                    >
                      info@peak-restaurant.at
                    </a>
                  </p>
                </div>
              </div>

              {/* Transport */}
              <div>
                <h4 className="text-white font-medium mb-4">
                  {t.findUs.transport.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 uppercase tracking-wide">
                    {t.findUs.transport.subway}
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 uppercase tracking-wide">
                    {t.findUs.transport.bus}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center pointer-events-none relative z-20">
            {/* Map Marker Highlight */}
            <div className="relative">
              <div className="w-8 h-8 bg-taupe rounded-full animate-ping absolute top-0 left-0 opacity-75" />
              <div className="w-8 h-8 bg-taupe rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(170,153,138,0.6)] relative z-10">
                <MapPin size={20} className="text-white fill-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
