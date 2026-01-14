import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { SkipLink } from "@/components/SkipLink";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "PEAK Restaurant",
  description: "Premium dining experience in Vienna",
  icons: {
    icon: "/logo.png",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical hero image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/Gallery1.jpg"
          fetchPriority="high"
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Afacad Flux', system-ui, sans-serif" }}
      >
        <LanguageProvider>
          <GoogleAnalytics />
          <SkipLink />
          <div id="main-content" tabIndex={-1}>
            {children}
            <SpeedInsights />
          </div>
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
