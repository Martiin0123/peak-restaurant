"use client";

import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

// Lazy load below-the-fold components to improve initial load
const About = dynamic(
  () => import("@/components/About").then((mod) => ({ default: mod.About })),
  {
    ssr: true,
  }
);
const Events = dynamic(
  () => import("@/components/Events").then((mod) => ({ default: mod.Events })),
  {
    ssr: true,
  }
);
const Menus = dynamic(
  () => import("@/components/Menus").then((mod) => ({ default: mod.Menus })),
  {
    ssr: true,
  }
);
const Gallery = dynamic(
  () =>
    import("@/components/Gallery").then((mod) => ({ default: mod.Gallery })),
  {
    ssr: false, // Gallery has heavy animations, defer on mobile
  }
);
const FAQ = dynamic(
  () => import("@/components/FAQ").then((mod) => ({ default: mod.FAQ })),
  {
    ssr: true, // FAQ is important for SEO, so SSR it
  }
);
const FindUs = dynamic(
  () => import("@/components/FindUs").then((mod) => ({ default: mod.FindUs })),
  {
    ssr: true,
  }
);
const ReservationCTA = dynamic(
  () =>
    import("@/components/ReservationCTA").then((mod) => ({
      default: mod.ReservationCTA,
    })),
  {
    ssr: true,
  }
);
const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => ({ default: mod.Footer })),
  {
    ssr: true,
  }
);

export default function Home() {
  useEffect(() => {
    // Check if we need to scroll to a section after navigation
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      sessionStorage.removeItem("scrollTo");
      // Wait for page to fully load, then scroll
      const scrollFn = () => {
        const element = document.querySelector(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      if ("requestIdleCallback" in window) {
        requestIdleCallback(scrollFn, { timeout: 1000 });
      } else {
        setTimeout(scrollFn, 100);
      }
    }
  }, []);

  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="PEAK Restaurant main content"
    >
      <Header />
      <Hero />
      <Suspense fallback={<div className="min-h-screen" />}>
        <About />
        <Events />
        <Menus />
        <Gallery />
        <FAQ />
        <FindUs />
        <ReservationCTA />
        <Footer />
      </Suspense>
    </main>
  );
}
