"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/**
 * FAQ Component with Structured Data
 *
 * This component is CRITICAL for AI/LLM SEO!
 * AI chatbots (ChatGPT, Perplexity, Claude, etc.) love FAQ format
 * because it's easy to parse and provides direct answers.
 */

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] =
    language === "de"
      ? [
          {
            question: "Wo befindet sich das PEAK Restaurant?",
            answer:
              "Wir befinden uns in der Dorfstraße 22, 6561 Ischgl, Österreich - im Hotel Alpina Ischgl, erstes Untergeschoss. Perfekt gelegen im Herzen des Skigebiets Ischgl.",
          },
          {
            question: "Was sind Ihre Spezialitäten?",
            answer:
              "Wir sind bekannt für unsere exzellenten Steaks vom Green Egg Holzkohlegrill! Dieser legendäre Keramikgrill sorgt für perfekte Röstaromen und zartes Fleisch. Dazu bieten wir frische, saisonal wechselnde Produkte und eine beeindruckende Weinauswahl aus unserem Keller.",
          },
          {
            question: "Was ist besonders an Ihrem Weinkeller?",
            answer:
              "Unser Weinkeller ist etwas ganz Besonderes! Wir verfügen über eine sorgfältig kuratierte Auswahl erlesener Weine, die perfekt zu unseren Gerichten passen. Gerne beraten wir Sie bei der Auswahl des passenden Weins zu Ihrem Steak oder anderen Gerichten.",
          },
          {
            question: "Welche Art von Küche bieten Sie an?",
            answer:
              "Wir sind ein familiengeführtes Restaurant mit Fokus auf Premium-Steaks vom Green Egg Grill, österreichische und europäische Küche. Unser Schwerpunkt liegt auf frischen, qualitativ hochwertigen Produkten und perfekter Zubereitung.",
          },
          {
            question: "Was sind Ihre Öffnungszeiten?",
            answer:
              "Wir sind täglich ab 17:00 Uhr geöffnet. Spezielle Öffnungszeiten können an Feiertagen variieren. Wir empfehlen eine Reservierung, besonders für unseren beliebten Fondue-Donnerstag.",
          },
          {
            question: "Muss ich reservieren?",
            answer:
              "Ja, Reservierungen werden dringend empfohlen, um Ihnen den bestmöglichen Service zu garantieren. Sie können online über unsere Website oder telefonisch reservieren.",
          },
          {
            question: "In welcher Preisklasse bewegt sich das Restaurant?",
            answer:
              "Wir liegen in der mittleren bis gehobenen Preisklasse (€€-€€€).",
          },
          {
            question: "Warum ist das PEAK familiengeführt besonders?",
            answer:
              "Als familiengeführtes Restaurant legen wir besonderen Wert auf persönlichen Service mit Herz und Leidenschaft. Wir kennen unsere Gäste, beraten individuell und schaffen eine warme, familiäre Atmosphäre.",
          },
          {
            question: "Kann ich die Speisekarte online einsehen?",
            answer:
              "Ja, unsere aktuelle Speisekarte können Sie auf unserer Website als PDF herunterladen oder im Bereich 'Speisekarte' durchstöbern.",
          },
          {
            question:
              "Ist das Restaurant für private Veranstaltungen verfügbar?",
            answer:
              "Ja, wir bieten Platz für private Veranstaltungen und Firmenfeiern. Kontaktieren Sie uns für weitere Informationen zu Gruppenbuchungen und speziellen Arrangements.",
          },
        ]
      : [
          {
            question: "Where is PEAK Restaurant located?",
            answer:
              "We are located at Dorfstraße 22, 6561 Ischgl, Austria - in Hotel Alpina Ischgl, first basement level. Perfectly located in the heart of the Ischgl ski resort.",
          },
          {
            question: "What are your specialties?",
            answer:
              "We're famous for our excellent steaks from our Green Egg charcoal grill! This legendary ceramic grill creates perfect roasted flavors and tender meat. We also offer fresh, seasonally changing products and an impressive wine selection from our cellar.",
          },
          {
            question: "What's special about your wine cellar?",
            answer:
              "Our wine cellar is something truly special! We have a carefully curated selection of exquisite wines that pair perfectly with our dishes. We're happy to advise you on choosing the perfect wine for your steak or other dishes.",
          },
          {
            question: "What type of cuisine do you offer?",
            answer:
              "We're a family-run restaurant focusing on premium steaks from our Green Egg grill, Austrian and European cuisine. Our emphasis is on fresh, high-quality products and perfect preparation.",
          },
          {
            question: "What are your opening hours?",
            answer:
              "We are open daily from 5:00 PM. Special hours may apply on holidays. We recommend making a reservation, especially for our popular Thursday Fondue Night.",
          },
          {
            question: "Do I need a reservation?",
            answer:
              "Yes, reservations are strongly recommended to ensure we can provide you with the best possible service. You can book online through our website or by phone.",
          },
          {
            question: "What is the price range?",
            answer: "We are in the medium to upscale price range (€€-€€€).",
          },
          {
            question: "What makes PEAK special as a family-run restaurant?",
            answer:
              "As a family-run restaurant, we place special emphasis on personal service with heart and passion. We know our guests, provide individual advice, and create a warm, family atmosphere.",
          },
          {
            question: "Can I view the menu online?",
            answer:
              "Yes, you can download our current menu as a PDF from our website or browse it in the 'Menu' section.",
          },
          {
            question: "Is the restaurant available for private events?",
            answer:
              "Yes, we offer space for private events and corporate celebrations. Contact us for more information about group bookings and special arrangements.",
          },
        ];

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-32 bg-white text-dark">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-mono uppercase tracking-widest text-taupe mb-4 block">
            {language === "de"
              ? "Häufig gestellte Fragen"
              : "Frequently Asked Questions"}
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {language === "de" ? "Haben Sie Fragen?" : "Got Questions?"}
          </h2>
          <p className="text-xl text-dark/60">
            {language === "de"
              ? "Hier finden Sie Antworten auf die häufigsten Fragen zu unserem Restaurant."
              : "Find answers to the most common questions about our restaurant."}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-dark/10 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-xl font-semibold pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 flex items-center justify-center text-taupe">
                  {openIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-dark/70 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-lg text-dark/60 mb-6">
            {language === "de"
              ? "Weitere Fragen? Wir helfen Ihnen gerne weiter!"
              : "More questions? We're happy to help!"}
          </p>
          <a
            href="https://app.gastronomiq.at/reservations/48b1ba9b36a7e1142817491a4848883b83ba964f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-taupe text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-dark hover:shadow-lg"
          >
            {language === "de" ? "Jetzt Reservieren" : "Reserve Now"}
          </a>
        </div>
      </div>
    </section>
  );
}
