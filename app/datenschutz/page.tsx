import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-dark">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Datenschutzerklärung
            </h1>
            <p className="text-white/60 mt-4 text-lg">
              Ihre Privatsphäre ist uns wichtig
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-bold mt-8 mb-4">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            2. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
            <br />
            Hotel Alpina Betriebs GmbH
            <br />
            Innrain 19
            <br />
            6020 Innsbruck
            <br />
            E-Mail: info@peak-restaurant.at
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            3. Datenerfassung auf unserer Website
          </h2>
          <h3 className="text-xl font-bold mt-4 mb-2">Cookies</h3>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind
            kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
            Sie werden entweder vorübergehend für die Dauer einer Sitzung
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
            Endgerät gespeichert.
          </p>
          <p>
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
            Cookies informiert werden und Cookies nur im Einzelfall erlauben,
            die Annahme von Cookies für bestimmte Fälle oder generell
            ausschließen sowie das automatische Löschen der Cookies beim
            Schließen des Browsers aktivieren.
          </p>

          <h3 className="text-xl font-bold mt-4 mb-2">Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            4. Analyse-Tools und Werbung
          </h2>
          <p>
            Derzeit verwenden wir keine externen Analyse-Tools wie Google
            Analytics. Sollte sich dies ändern, werden wir Sie in dieser
            Datenschutzerklärung darüber informieren und Ihre Einwilligung über
            unser Cookie-Consent-Tool einholen.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
