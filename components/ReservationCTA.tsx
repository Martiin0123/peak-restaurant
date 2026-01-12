'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

/**
 * Redesigned Reservation CTA
 * 
 * CRITIQUE:
 * - A centered text block with 2 buttons is boring.
 * 
 * REDESIGN:
 * - "Grand Finale".
 * - Massive Type Link.
 * - Fills the screen width.
 */
export function ReservationCTA() {
  const { t } = useLanguage()

  return (
    <section
      id="reservation"
      className="bg-taupe py-32 md:py-48 text-center overflow-hidden relative"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterRes">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterRes)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-dark/60 text-lg md:text-xl uppercase tracking-[0.2em] mb-8 font-medium">
            Are you ready?
          </p>
          
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); alert('Booking modal') }}
            className="group block relative"
          >
            <h2 className="text-[12vw] leading-[0.8] font-bold text-dark tracking-tighter transition-transform duration-500 group-hover:scale-105">
              BOOK
              <br/>
              A TABLE
            </h2>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <div className="bg-dark text-white rounded-full px-6 py-3 text-lg font-medium flex items-center gap-2 whitespace-nowrap shadow-2xl">
                 <Calendar size={20} />
                 <span>Reserve Now</span>
               </div>
            </div>
          </a>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-dark/70 font-medium">
             <span>+43 5444 5255</span>
             <span className="hidden md:inline w-1 h-1 bg-dark/40 rounded-full" />
             <span>info@peak-restaurant.at</span>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
