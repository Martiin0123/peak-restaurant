'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, translations } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)[Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('de')
  const [mounted, setMounted] = useState(false)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'de' || saved === 'en')) {
      setLanguageState(saved)
    } else {
      const browserLang = navigator.language.split('-')[0]
      setLanguageState(browserLang === 'en' ? 'en' : 'de')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    if (lang === language) return
    
    setLoading(true)
    // Simulate loading delay for the animation
    setTimeout(() => {
      setLanguageState(lang)
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang)
        document.documentElement.lang = lang
      }
      setLoading(false)
    }, 600)
  }

  // Always provide the context, even during SSR
  // Use default 'de' language until mounted
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {/* Page Reload Transition Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-all duration-500 pointer-events-none ${
          loading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Circular Spinner */}
        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>

      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
