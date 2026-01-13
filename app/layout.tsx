import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { SkipLink } from "@/components/SkipLink";

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
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "'Afacad Flux', system-ui, sans-serif" }}
      >
        <LanguageProvider>
          <SkipLink />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
