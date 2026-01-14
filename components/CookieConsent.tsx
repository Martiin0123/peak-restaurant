'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export function CookieConsent() {
  const { t } = useLanguage()
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      const saved = JSON.parse(consent)
      setPreferences(saved)
    }

    // Listen for open cookie settings event from footer
    const handleOpenSettings = () => {
      setShowSettings(true)
      setShowBanner(false)
    }
    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettings(false)
    // Dispatch event to notify Google Analytics of consent change
    window.dispatchEvent(new Event('cookieConsentChanged'))
  }

  const handleAccept = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  const handleDecline = () => {
    savePreferences(defaultPreferences)
  }

  const handleSaveSettings = () => {
    savePreferences(preferences)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return // Necessary cookies can't be disabled
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[400px] z-50 bg-[#F5F5F5]/95 backdrop-blur-md border border-dark/5 shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">{t.cookies.title}</h3>
                  <p className="text-dark/70 text-sm leading-relaxed mb-3">
                    {t.cookies.description}
                  </p>
                  <button
                    onClick={() => {
                      setShowBanner(false)
                      setShowSettings(true)
                    }}
                    className="text-taupe hover:text-dark transition-colors text-xs font-medium uppercase tracking-wider border-b border-taupe/30 hover:border-dark pb-0.5"
                  >
                    {t.cookies.settings}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2.5 text-sm font-medium text-dark/60 bg-dark/5 hover:bg-dark/10 rounded-lg transition-colors"
                  >
                    {t.cookies.decline}
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-4 py-2.5 text-sm font-medium bg-dark text-white hover:bg-taupe rounded-lg transition-colors shadow-lg"
                  >
                    {t.cookies.accept}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-dark">
                  {t.cookies.title}
                </h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-dark/5 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={24} className="text-dark" />
                </button>
              </div>

              <p className="text-dark/70 mb-6">{t.cookies.description}</p>

              <div className="space-y-4 mb-6">
                {/* Necessary */}
                <div className="flex items-start justify-between p-4 bg-dark/5 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-dark">
                        {t.cookies.necessary}
                      </h3>
                      <span className="text-xs bg-taupe/20 text-taupe px-2 py-1 rounded">
                        {t.cookies.necessaryDesc.split('.')[0]}
                      </span>
                    </div>
                    <p className="text-sm text-dark/60">
                      {t.cookies.necessaryDesc}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-taupe rounded-full flex items-center justify-start px-1">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between p-4 bg-dark/5 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark mb-2">
                      {t.cookies.analytics}
                    </h3>
                    <p className="text-sm text-dark/60">
                      {t.cookies.analyticsDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('analytics')}
                    className="ml-4"
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.analytics ? 'bg-taupe justify-end' : 'bg-dark/20 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </button>
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between p-4 bg-dark/5 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-dark mb-2">
                      {t.cookies.marketing}
                    </h3>
                    <p className="text-sm text-dark/60">
                      {t.cookies.marketingDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference('marketing')}
                    className="ml-4"
                    aria-label="Toggle marketing cookies"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                        preferences.marketing ? 'bg-taupe justify-end' : 'bg-dark/20 justify-start'
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </button>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 px-4 py-2 text-dark border border-dark/20 rounded-lg hover:bg-dark/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 px-4 py-2 bg-dark text-white rounded-lg hover:bg-taupe transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
