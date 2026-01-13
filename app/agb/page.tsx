"use client";

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { useLanguage } from '@/components/LanguageProvider'

export default function AgbPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-dark" role="main" aria-label={t.legal.agb.title}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-dark text-white" aria-labelledby="agb-heading">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 id="agb-heading" className="text-5xl md:text-7xl font-bold tracking-tight">{t.legal.agb.title}</h1>
            <p className="text-white/60 mt-4 text-lg">{t.legal.agb.subtitle}</p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-12 pb-8 border-b border-dark/10">
            <h2 className="text-3xl font-bold mb-4">{t.legal.agb.header.title}</h2>
            <p className="text-xl font-semibold mb-2">{t.legal.agb.header.restaurant}</p>
            <p className="text-dark/70">
              {t.legal.agb.header.address}<br />
              {t.legal.agb.header.phone}<br />
              {t.legal.agb.header.email}
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section1.title}</h2>
          <p className="mb-2">
            <strong>1.1</strong> {t.legal.agb.section1.p1}
          </p>
          <p className="mb-2">
            <strong>1.2</strong> {t.legal.agb.section1.p2}
          </p>
          <p>
            <strong>1.3</strong> {t.legal.agb.section1.p3}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section2.title}</h2>
          <p className="mb-2">
            <strong>{t.legal.agb.section2.definitions.restaurant.term}</strong> {t.legal.agb.section2.definitions.restaurant.def}
          </p>
          <p className="mb-2">
            <strong>{t.legal.agb.section2.definitions.guest.term}</strong> {t.legal.agb.section2.definitions.guest.def}
          </p>
          <p className="mb-2">
            <strong>{t.legal.agb.section2.definitions.partner.term}</strong> {t.legal.agb.section2.definitions.partner.def}
          </p>
          <p className="mb-2">
            <strong>{t.legal.agb.section2.definitions.consumer.term}</strong> {t.legal.agb.section2.definitions.consumer.def}
          </p>
          <p className="mb-2">
            <strong>{t.legal.agb.section2.definitions.contract.term}</strong> {t.legal.agb.section2.definitions.contract.def}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section3.title}</h2>
          <p className="mb-2">
            <strong>3.1</strong> {t.legal.agb.section3.p1}
          </p>
          <p className="mb-2">
            <strong>3.2</strong> {t.legal.agb.section3.p2}
          </p>
          <p className="mb-2">
            <strong>3.3</strong> {t.legal.agb.section3.p3}
          </p>
          <p>
            <strong>3.4</strong> {t.legal.agb.section3.p4}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section4.title}</h2>
          <p className="mb-2">
            <strong>4.1</strong> {t.legal.agb.section4.p1}
          </p>
          <p className="mb-2">
            <strong>4.2</strong> {t.legal.agb.section4.p2}
          </p>
          <p className="mb-2">
            <strong>4.3</strong> {t.legal.agb.section4.p3}
          </p>
          <ul className="list-disc pl-6 mb-2">
            {t.legal.agb.section4.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section5.title}</h2>
          <h3 className="text-xl font-semibold mt-4 mb-2">{t.legal.agb.section5.restaurant.title}</h3>
          <p className="mb-2">
            <strong>5.1</strong> {t.legal.agb.section5.restaurant.p1}
          </p>
          <p className="mb-4">
            <strong>5.2</strong> {t.legal.agb.section5.restaurant.p2}
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">{t.legal.agb.section5.partner.title}</h3>
          <p className="mb-2">
            <strong>5.3</strong> {t.legal.agb.section5.partner.p1}
          </p>
          <p className="mb-2">
            <strong>5.4</strong> {t.legal.agb.section5.partner.p2}
          </p>
          <ul className="list-disc pl-6 mb-4">
            {t.legal.agb.section5.partner.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section5a.title}</h2>
          <p className="mb-2">
            <strong>5a.1</strong> {t.legal.agb.section5a.p1}
          </p>
          <p className="mb-2">
            <strong>5a.2</strong> {t.legal.agb.section5a.p2}
          </p>
          <p>
            <strong>5a.3</strong> {t.legal.agb.section5a.p3}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section6.title}</h2>
          <p>
            <strong>6.1</strong> {t.legal.agb.section6.p1}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section7.title}</h2>
          <p className="mb-2">
            <strong>7.1</strong> {t.legal.agb.section7.p1}
          </p>
          <p>
            <strong>7.2</strong> {t.legal.agb.section7.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section8.title}</h2>
          <p className="mb-2">
            <strong>8.1</strong> {t.legal.agb.section8.p1}
          </p>
          <p>
            <strong>8.2</strong> {t.legal.agb.section8.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section9.title}</h2>
          <p className="mb-2">
            <strong>9.1</strong> {t.legal.agb.section9.p1}
          </p>
          <p>
            <strong>9.2</strong> {t.legal.agb.section9.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section10.title}</h2>
          <p className="mb-2">
            <strong>10.1</strong> {t.legal.agb.section10.p1}
          </p>
          <p>
            <strong>10.2</strong> {t.legal.agb.section10.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section11.title}</h2>
          <p className="mb-2">
            <strong>11.1</strong> {t.legal.agb.section11.p1}
          </p>
          <p>
            <strong>11.2</strong> {t.legal.agb.section11.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section11a.title}</h2>
          <p className="mb-2">
            <strong>11a.1</strong> {t.legal.agb.section11a.p1}
          </p>
          <p className="mb-2">
            <strong>11a.2</strong> {t.legal.agb.section11a.p2}
          </p>
          <p className="mb-2">
            <strong>11a.3</strong> {t.legal.agb.section11a.p3}
          </p>
          <p>
            <strong>11a.4</strong> {t.legal.agb.section11a.p4}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section12.title}</h2>
          <p className="mb-2">
            <strong>12.1</strong> {t.legal.agb.section12.p1}
          </p>
          <p>
            <strong>12.2</strong> {t.legal.agb.section12.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section13.title}</h2>
          <p className="mb-2">
            <strong>13.1</strong> {t.legal.agb.section13.p1}
          </p>
          <p>
            <strong>13.2</strong> {t.legal.agb.section13.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section14.title}</h2>
          <p className="mb-2">
            <strong>14.1</strong> {t.legal.agb.section14.p1}
          </p>
          <p>
            <strong>14.2</strong> {t.legal.agb.section14.p2}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section15.title}</h2>
          <p>
            <strong>15.1</strong> {t.legal.agb.section15.p1}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section16.title}</h2>
          <p>
            <strong>16.1</strong> {t.legal.agb.section16.p1}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section17.title}</h2>
          <p className="mb-2">
            <strong>17.1</strong> {t.legal.agb.section17.p1}
          </p>
          <p className="mb-2">
            <strong>17.2</strong> {t.legal.agb.section17.p2}
          </p>
          <p>
            <strong>17.3</strong> {t.legal.agb.section17.p3}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">{t.legal.agb.section18.title}</h2>
          <p className="mb-2">
            <strong>18.1</strong> {t.legal.agb.section18.p1}
          </p>
          <p>
            <strong>18.2</strong> {t.legal.agb.section18.p2}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
