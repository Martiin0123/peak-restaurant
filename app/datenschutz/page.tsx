"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageProvider";

export default function DatenschutzPage() {
  const { t } = useLanguage();

  return (
    <main
      className="min-h-screen bg-[#FAFAFA] text-dark"
      role="main"
      aria-label={t.legal.privacy.title}
    >
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-16 bg-dark text-white"
        aria-labelledby="privacy-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1
              id="privacy-heading"
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              {t.legal.privacy.title}
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              {t.legal.privacy.subtitle}
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-12 pb-8 border-b border-dark/10">
            <h2 className="text-3xl font-bold mb-4">{t.legal.privacy.title}</h2>
            <p className="text-xl font-semibold">
              {t.legal.privacy.responsible.restaurant}
            </p>
          </div>

          <p className="mb-8">{t.legal.privacy.intro1}</p>
          <p className="mb-8">{t.legal.privacy.intro2}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.responsible.title}
          </h2>
          <p className="mb-8">
            {t.legal.privacy.responsible.restaurant}
            <br />
            {t.legal.privacy.responsible.address}
            <br />
            {t.legal.privacy.responsible.city}
            <br />
            {t.legal.privacy.responsible.country}
            <br />
            <br />
            {t.legal.privacy.responsible.phone}
            <br />
            {t.legal.privacy.responsible.email}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.contact.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.contact.content1}</p>
          <p className="mb-4">{t.legal.privacy.contact.content2}</p>
          <p className="mb-8">
            <strong>{t.legal.privacy.contact.legalBasis}</strong>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.cookies.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.cookies.content1}</p>
          <p className="mb-4">{t.legal.privacy.cookies.content2}</p>
          <p className="mb-4">{t.legal.privacy.cookies.content3}</p>
          <p className="mb-8">
            <strong>{t.legal.privacy.cookies.legalBasis}</strong>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.analytics.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.analytics.content1}</p>
          <p className="mb-4">{t.legal.privacy.analytics.content2}</p>
          <p className="mb-4">{t.legal.privacy.analytics.content3}</p>
          <p className="mb-4">
            <strong>{t.legal.privacy.analytics.legalBasis}</strong>
          </p>
          <p className="mb-4">
            {t.legal.privacy.analytics.optOut}
            <br />
            <a
              href={t.legal.privacy.analytics.optOutLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:underline"
            >
              {t.legal.privacy.analytics.optOutLink}
            </a>
          </p>
          <p className="mb-8">
            <strong>{t.legal.privacy.analytics.moreInfo}</strong>
            <br />
            <a
              href={t.legal.privacy.analytics.moreInfoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:underline"
            >
              {t.legal.privacy.analytics.moreInfoLink}
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.thirdParty.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.thirdParty.content1}</p>
          <p className="mb-8">{t.legal.privacy.thirdParty.content2}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.maps.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.maps.content1}</p>
          <p className="mb-8">
            <strong>{t.legal.privacy.maps.moreInfo}</strong>
            <br />
            <a
              href={t.legal.privacy.maps.moreInfoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-taupe hover:underline"
            >
              {t.legal.privacy.maps.moreInfoLink}
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.purpose.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.purpose.intro}</p>
          <ul className="list-disc pl-6 mb-8">
            {t.legal.privacy.purpose.purposes.map((purpose, i) => (
              <li key={i}>{purpose}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.sharing.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.sharing.intro}</p>
          <ul className="list-disc pl-6 mb-4">
            {t.legal.privacy.sharing.conditions.map((condition, i) => (
              <li key={i}>{condition}</li>
            ))}
          </ul>
          <p className="mb-8">{t.legal.privacy.sharing.noMarketing}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.rights.title}
          </h2>
          <p className="mb-4">{t.legal.privacy.rights.intro}</p>
          <ul className="list-disc pl-6 mb-4">
            {t.legal.privacy.rights.rightsList.map((right, i) => (
              <li key={i}>{right}</li>
            ))}
          </ul>
          <p className="mb-8">
            {t.legal.privacy.rights.complaint}
            <br />
            <br />
            <strong>{t.legal.privacy.rights.authority}</strong>
            <br />
            {t.legal.privacy.rights.authorityName}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            {t.legal.privacy.contactInfo.title}
          </h2>
          <p className="mb-8">
            {t.legal.privacy.contactInfo.intro}
            <br />
            <br />
            <strong>{t.legal.privacy.responsible.restaurant}</strong>
            <br />
            {t.legal.privacy.responsible.address}
            <br />
            {t.legal.privacy.responsible.city}
            <br />
            {t.legal.privacy.responsible.country}
            <br />
            <br />
            {t.legal.privacy.responsible.phone}
            <br />
            {t.legal.privacy.responsible.email}
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
