'use client'

import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Events } from '@/components/Events'
import { About } from '@/components/About'
import { Menus } from '@/components/Menus'
import { Gallery } from '@/components/Gallery'
import { FindUs } from '@/components/FindUs'
import { ReservationCTA } from '@/components/ReservationCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Check if we need to scroll to a section after navigation
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      sessionStorage.removeItem('scrollTo');
      // Wait for page to fully load, then scroll
      setTimeout(() => {
        const element = document.querySelector(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen" role="main" aria-label="PEAK Restaurant main content">
      <Header />
      <Hero />
      <About />
      <Events />
      <Menus />
      <Gallery />
      <FindUs />
      <ReservationCTA />
      <Footer />
    </main>
  )
}
