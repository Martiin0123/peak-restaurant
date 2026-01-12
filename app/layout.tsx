import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import { CookieConsent } from '@/components/CookieConsent'

// Using Inter as a premium modern fallback since Afacad Flux may not be available
// To use Afacad Flux, load it manually via CSS or use a font service
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PEAK Restaurant',
  description: 'Premium dining experience in Vienna',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  )
}
