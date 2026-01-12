import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Impressum
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              Rechtliche Informationen
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>Angaben gemäß § 5 TMG</p>

          <h3 className="mt-8 mb-4 font-bold text-xl">Betreiber</h3>
          <p>
            Hotel Alpina Betriebs GmbH
            <br />
            Innrain 19
            <br />
            6020 Innsbruck
            <br />
            AUSTRIA
          </p>

          <h3 className="mt-8 mb-4 font-bold text-xl">Kontakt</h3>
          <p>
            Telefon: +43 5444 5255
            <br />
            E-Mail: info@peak-restaurant.at
          </p>

          <h3 className="mt-8 mb-4 font-bold text-xl">
            Vertretungsberechtigte Geschäftsführer
          </h3>
          <p>Max Mustermann (Platzhalter)</p>

          <h3 className="mt-8 mb-4 font-bold text-xl">Registereintrag</h3>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: Landesgericht Innsbruck
            <br />
            Registernummer: FN 123456 x
          </p>

          <h3 className="mt-8 mb-4 font-bold text-xl">Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            ATU12345678
          </p>

          <h3 className="mt-8 mb-4 font-bold text-xl">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h3>
          <p>
            Max Mustermann
            <br />
            Dorfstraße 22
            <br />
            6561 Ischgl
          </p>

          <h3 className="mt-8 mb-4 font-bold text-xl">Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr.
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
