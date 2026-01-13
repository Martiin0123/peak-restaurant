"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

// Placeholder gradient classes
const placeholderClasses = [
  "bg-[#2A2A2A]",
  "bg-[#333333]",
  "bg-[#252525]",
  "bg-[#1F1F1F]",
];

const galleryImages = [
  {
    id: 1,
    src: "/Gallery1.jpg",
    alt: "Atmospheric dining room with warm lighting",
    aspect: "aspect-video",
    placeholderClass: "bg-[#2A2A2A]",
  },
  {
    id: 2,
    src: "/Gallery2.jpg",
    alt: "Elegant table setting with view",
    aspect: "aspect-[3/4]",
    placeholderClass: "bg-[#333333]",
  },
  {
    id: 3,
    src: "/Gallery4.jpg",
    alt: "Burrata salad with heirloom tomatoes",
    aspect: "aspect-square",
    placeholderClass: "bg-[#1F1F1F]",
  },
  {
    id: 4,
    src: "/Gallery5.jpg",
    alt: "Grilled fish fillet with fresh vegetables",
    aspect: "aspect-video",
    placeholderClass: "bg-[#2A2A2A]",
  },
  {
    id: 5,
    src: "/Gallery6.jpg",
    alt: "Plated burrata appetizer",
    aspect: "aspect-[3/4]",
    placeholderClass: "bg-[#333333]",
  },
  {
    id: 6,
    src: "/Gallery7.jpg",
    alt: "Premium steak grilling with smoke",
    aspect: "aspect-[3/4]",
    placeholderClass: "bg-[#252525]",
  },
  {
    id: 7,
    src: "/Gallery8.jpg",
    alt: "Beef tartare presentation",
    aspect: "aspect-square",
    placeholderClass: "bg-[#1F1F1F]",
  },
  {
    id: 8,
    src: "/Gallery9.jpg",
    alt: "Fresh seafood cocktail",
    aspect: "aspect-[3/4]",
    placeholderClass: "bg-[#2A2A2A]",
  },
  {
    id: 9,
    src: "/Gallery10.jpg",
    alt: "Restaurant interior detail",
    aspect: "aspect-video",
    placeholderClass: "bg-[#333333]",
  },
];

/**
 * Redesigned Gallery Section
 *
 * CRITIQUE:
 * - Masonry is overused.
 * - Vertical scrolling fatigue.
 *
 * REDESIGN:
 * - Horizontal scrolling "Film Strip".
 * - Feels like an exhibition.
 * - Images have different aspect ratios for rhythm.
 */
export function Gallery() {
  const { t } = useLanguage();
  const scrollRef = useRef(null);

  return (
    <section
      id="gallery"
      className="py-32 bg-dark overflow-hidden border-t border-white/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-end justify-between">
        <div>
          <span className="text-sm font-mono uppercase tracking-widest text-taupe mb-4 block">
            04 / {t.gallery.title}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white">Moments</h2>
        </div>

        {/* Scroll Hint */}
        <div className="hidden md:flex items-center gap-4 text-white/40 text-sm">
          <span>Drag to explore</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar cursor-grab active:cursor-grabbing pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2))]">
        <div className="flex gap-4 md:gap-8 w-max pr-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative ${image.aspect} w-[70vw] md:w-[400px] flex-shrink-0 group overflow-hidden bg-white/5`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "20%" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Image with Next.js Image component */}
              <div
                className={`w-full h-full ${image.placeholderClass} relative transition-all duration-700 group-hover:scale-105`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 70vw, 400px"
                  className="object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </div>

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-mono text-xs uppercase tracking-widest border border-white/30 px-2 py-1 rounded-full backdrop-blur-sm">
                  Image {index + 1}
                </span>
              </div>
            </motion.div>
          ))}

          {/* End Card */}
          <div className="w-[300px] aspect-square flex items-center justify-center border border-white/10 text-white/30">
            <div className="text-center">
              <Camera className="mx-auto mb-4 w-8 h-8 opacity-50" />
              <p className="uppercase tracking-widest text-xs">
                Follow on Instagram
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
