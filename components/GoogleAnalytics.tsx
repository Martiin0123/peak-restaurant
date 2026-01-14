'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

// Replace with your actual Google Analytics Measurement ID
// Get this from: https://analytics.google.com/
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false
  const consent = localStorage.getItem('cookieConsent')
  if (consent) {
    try {
      const preferences = JSON.parse(consent)
      return preferences.analytics === true
    } catch {
      return false
    }
  }
  return false
}

export function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check initial consent
    setHasConsent(hasAnalyticsConsent())

    // Initialize dataLayer
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      
      // Initialize gtag function
      window.gtag = window.gtag || function() {
        window.dataLayer.push(arguments)
      }
    }

    // Listen for consent changes
    const handleConsentChange = () => {
      const consent = hasAnalyticsConsent()
      setHasConsent(consent)
      
      if (typeof window.gtag === 'function') {
        if (consent) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
          })
          window.gtag('config', GA_MEASUREMENT_ID, {
            anonymize_ip: true,
            page_path: window.location.pathname,
          })
        } else {
          window.gtag('consent', 'update', {
            analytics_storage: 'denied',
          })
        }
      }
    }

    window.addEventListener('cookieConsentChanged', handleConsentChange)
    
    // Also check periodically in case localStorage was changed directly
    const interval = setInterval(() => {
      const currentConsent = hasAnalyticsConsent()
      if (currentConsent !== hasConsent) {
        handleConsentChange()
      }
    }, 1000)

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange)
      clearInterval(interval)
    }
  }, [hasConsent])

  // Only load scripts if consent is given
  if (!hasConsent || !GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />
    </>
  )
}
