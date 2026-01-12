'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

/**
 * Redesigned About Section
 */
export function About() {
  const { t } = useLanguage()

  // Dynamic feature keys based on the updated translations
  const featureKeys = ['modern', 'wine', 'local', 'service', 'ambiance'] as const

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
              className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]"
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
                {/* <p className="text-2xl text-white italic font-serif leading-snug mb-4">
                  "{t.about.chefQuote.text}"
                </p>
                <cite className="text-sm text-taupe uppercase tracking-widest not-italic">
                  — {t.about.chefQuote.author}
                </cite> */}
                <p className="text-lg text-white/60 font-light">
                   Modern. Fein. Unvergesslich.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visuals & Features List */}
          <div className="lg:col-span-6 relative">
             {/* Features List - Minimalist */}
             <div className="space-y-6">
                {featureKeys.map((key, i) => {
                  // @ts-ignore - we know these keys exist in our updated types
                  const feature = t.about.features[key]
                  if (!feature) return null
                  
                  return (
                    <motion.div 
                      key={key}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
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
                      <ArrowUpRight className="text-white/20 group-hover:text-taupe transition-colors" size={18} />
                    </motion.div>
                  )
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}
