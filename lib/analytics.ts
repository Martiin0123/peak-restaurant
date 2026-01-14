/**
 * Google Analytics utility functions
 * Only tracks if analytics consent is given
 */

/**
 * Track a page view
 */
export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag) return
  
  const hasConsent = () => {
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

  if (hasConsent()) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_path: url,
      anonymize_ip: true,
    })
  }
}

/**
 * Track a custom event
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window === 'undefined' || !window.gtag) return

  const hasConsent = () => {
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

  if (hasConsent()) {
    window.gtag('event', eventName, {
      ...eventParams,
      anonymize_ip: true,
    })
  }
}
