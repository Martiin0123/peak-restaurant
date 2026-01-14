import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { SkipLink } from "@/components/SkipLink";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://peak-restaurant.at'),
  title: "PEAK Restaurant Ischgl | Green Egg Steaks | Stunning Wine Cellar | Family-Run",
  description: "Family-run restaurant in Ischgl specializing in premium steaks from our Green Egg charcoal grill, fresh products, and stunning wine cellar. In Hotel Alpina Ischgl. Heartful service. Dorfstraße 22, 6561 Ischgl.",
  keywords: "PEAK Restaurant, Ischgl restaurant, Green Egg steaks Ischgl, charcoal grill Ischgl, wine cellar Ischgl, family restaurant Ischgl, Austrian steakhouse, fine dining Ischgl, Hotel Alpina Ischgl, ski resort dining, Tyrol restaurant",
  authors: [{ name: "PEAK Restaurant" }],
  creator: "PEAK Restaurant",
  publisher: "PEAK Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    alternateLocale: ["en_US"],
    url: "https://peak-restaurant.at",
    siteName: "PEAK Restaurant",
    title: "PEAK Restaurant Ischgl | Green Egg Steaks & Wine Cellar",
    description: "Family-run restaurant in Ischgl, Austria. Premium steaks from our Green Egg charcoal grill, fresh products, stunning wine cellar. In Hotel Alpina Ischgl. Heartful service.",
    images: [
      {
        url: "/Gallery1.jpg",
        width: 1200,
        height: 630,
        alt: "PEAK Restaurant Ischgl - Elegant dining atmosphere",
      },
      {
        url: "/Fondue.jpg",
        width: 1200,
        height: 630,
        alt: "PEAK Restaurant - Traditional Swiss Fondue",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PEAK Restaurant Ischgl | Green Egg Steaks & Wine Cellar",
    description: "Family-run restaurant in Ischgl ski resort. Premium steaks from our Green Egg grill, fresh products, stunning wine cellar.",
    images: ["/Gallery7.jpg"],
  },
  alternates: {
    canonical: "https://peak-restaurant.at",
    languages: {
      'de-AT': 'https://peak-restaurant.at',
      'en-US': 'https://peak-restaurant.at',
    },
  },
  verification: {
    // Add your verification codes here later
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preload critical hero image for LCP - highest priority */}
        <link
          rel="preload"
          as="image"
          href="/Gallery1.jpg"
          fetchPriority="high"
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* Optimized font loading with font-display: swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Afacad Flux', system-ui, sans-serif" }}
      >
        <LanguageProvider>
          <SkipLink />
          <StructuredData />
          <div id="main-content" tabIndex={-1}>
            {children}
            <SpeedInsights />
            <Analytics />
          </div>
          <CookieConsent />
          <GoogleAnalytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
