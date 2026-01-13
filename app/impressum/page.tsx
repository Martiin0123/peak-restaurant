"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function ImpressumPage() {
  const { t } = useLanguage();

  return (
    <main
      className="min-h-screen bg-[#FAFAFA] text-dark"
      role="main"
      aria-label={t.legal.imprint.title}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-16 bg-dark text-white"
        aria-labelledby="impressum-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1
              id="impressum-heading"
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              {t.legal.imprint.title}
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              {t.legal.imprint.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.imprint.responsible}
          </h2>
          <p className="mb-2">
            <strong>{t.legal.imprint.company}</strong>
            <br />
            {t.legal.imprint.companyFull}
            <br />
            {t.legal.imprint.address}
            <br />
            {t.legal.imprint.city}
            <br />
            {t.legal.imprint.country}
          </p>
          <p className="mb-8">
            {t.legal.imprint.phone}
            <br />
            {t.legal.imprint.email}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.imprint.ecg.title}
          </h2>
          <p className="mb-2">
            <strong>{t.legal.imprint.ecg.companyName}</strong>{" "}
            {t.legal.imprint.ecg.companyValue}
            <br />
            <strong>{t.legal.imprint.ecg.uid}</strong>{" "}
            {t.legal.imprint.ecg.uidValue}
            <br />
            <strong>{t.legal.imprint.ecg.seat}</strong>{" "}
            {t.legal.imprint.ecg.seatValue}
            <br />
            <strong>{t.legal.imprint.ecg.jurisdiction}</strong>{" "}
            {t.legal.imprint.ecg.jurisdictionValue}
            <br />
            <strong>{t.legal.imprint.ecg.legalForm}</strong>{" "}
            {t.legal.imprint.ecg.legalFormValue}
            <br />
            <strong>{t.legal.imprint.ecg.authority}</strong>{" "}
            {t.legal.imprint.ecg.authorityValue}
            <br />
            <strong>{t.legal.imprint.ecg.group}</strong>{" "}
            {t.legal.imprint.ecg.groupValue}
            <br />
            <strong>{t.legal.imprint.ecg.chamber}</strong>{" "}
            {t.legal.imprint.ecg.chamberValue}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.imprint.images.title}
          </h2>
          <p className="mb-2">
            {t.legal.imprint.images.credits.map((credit, i) => (
              <span key={i}>
                {credit}
                {i < t.legal.imprint.images.credits.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className="mb-8">{t.legal.imprint.images.icons}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.imprint.copyright.title}
          </h2>
          <p className="mb-4">{t.legal.imprint.copyright.intro}</p>
          <p className="mb-4">{t.legal.imprint.copyright.content1}</p>
          <p className="mb-4">{t.legal.imprint.copyright.content2}</p>
          <p className="mb-4">{t.legal.imprint.copyright.content3}</p>
          <p>{t.legal.imprint.copyright.content4}</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
