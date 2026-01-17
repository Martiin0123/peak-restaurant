"use client";

import { useLanguage } from "./LanguageProvider";

/**
 * Structured Data (Schema.org) Component
 *
 * This component adds JSON-LD structured data to help search engines
 * and AI chatbots understand your restaurant better.
 *
 * Benefits:
 * - Better Google search results (rich snippets)
 * - AI chatbots can recommend your restaurant
 * - Local SEO improvements
 * - Voice search optimization
 */
export function StructuredData() {
  const { language } = useLanguage();

  // Restaurant structured data
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://peak-restaurant.at/#restaurant",
    name: "PEAK Restaurant",
    description:
      language === "de"
        ? "Familiengeführtes Restaurant mit exzellenten Steaks vom Green Egg Holzkohlegrill, frischen Produkten und beeindruckendem Weinkeller. Bekannt für herzlichen Service."
        : "Family-run restaurant specializing in excellent steaks from our Green Egg charcoal grill, fresh products, and stunning wine cellar. Known for heartful service.",
    image: [
      "https://peak-restaurant.at/Gallery1.jpg",
      "https://peak-restaurant.at/Gallery7.jpg",
      "https://peak-restaurant.at/Gallery2.jpg",
    ],
    priceRange: "€€-€€€",
    servesCuisine: ["Steak House", "Austrian", "European", "Grill"],
    menuItem: [
      {
        "@type": "MenuItem",
        name: language === "de" ? "Green Egg Steaks" : "Green Egg Steaks",
        description:
          language === "de"
            ? "Premium Steaks vom Holzkohlegrill Green Egg"
            : "Premium steaks from our Green Egg charcoal grill",
      },
      {
        "@type": "MenuItem",
        name:
          language === "de" ? "Weinkeller-Auswahl" : "Wine Cellar Selection",
        description:
          language === "de"
            ? "Erlesene Weine aus unserem beeindruckenden Weinkeller"
            : "Exquisite wines from our stunning wine cellar",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dorfstraße 22",
      addressLocality: "Ischgl",
      addressRegion: "Tyrol",
      postalCode: "6561",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.01477184708951",
      longitude: "10.294093581762276",
    },
    url: "https://peak-restaurant.at",
    telephone: "+43 5444 5255",
    menu: "https://peak-restaurant.at/Peak-Speisekarte.pdf",
    acceptsReservations: "true",
    hasMenu: {
      "@type": "Menu",
      url: "https://peak-restaurant.at/Peak-Speisekarte.pdf",
      inLanguage: ["de", "en"],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "18:00",
        closes: "21:00",
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name:
          language === "de"
            ? "Green Egg Holzkohlegrill"
            : "Green Egg Charcoal Grill",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: language === "de" ? "Weinkeller" : "Wine Cellar",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: language === "de" ? "Familiengeführt" : "Family-Run",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name:
          language === "de"
            ? "Reservierung empfohlen"
            : "Reservations Recommended",
        value: true,
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MenuItem",
          name:
            language === "de"
              ? "Steaks vom Green Egg Grill"
              : "Green Egg Grilled Steaks",
        },
      },
    ],
  };

  // Recurring Event - Fondue Night (Every Thursday)
  const fondueEventSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEvent",
    name: language === "de" ? "Fondue-Abend" : "Fondue Night",
    description:
      language === "de"
        ? "Traditionelles Schweizer Fondue mit zartem Fleisch, fein aromatisierter Bouillon und ausgewählten Beilagen. Jeden Donnerstag ein geselliger Genuss."
        : "Traditional Swiss fondue with tender meat, delicately flavored broth and selected side dishes. A convivial delight every Thursday.",
    image: "https://peak-restaurant.at/Fondue.jpg",
    startDate: "2024-01-01",
    endDate: "2026-04-19",
    eventSchedule: {
      "@type": "Schedule",
      byDay: "Thursday",
      repeatFrequency: "P1W",
    },
    location: {
      "@type": "Restaurant",
      "@id": "https://peak-restaurant.at/#restaurant",
    },
    organizer: {
      "@type": "Restaurant",
      name: "PEAK Restaurant",
      url: "https://peak-restaurant.at",
    },
    offers: {
      "@type": "Offer",
      url: "https://app.gastronomiq.at/reservations/48b1ba9b36a7e1142817491a4848883b83ba964f",
      availability: "https://schema.org/InStock",
    },
  };

  // Local Business (for local SEO)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://peak-restaurant.at/#localbusiness",
    name: "PEAK Restaurant",
    alternateName: "PEAK Ischgl",
    description:
      language === "de"
        ? "Familiengeführtes Restaurant in Ischgl. Spezialist für exzellente Steaks vom Green Egg Holzkohlegrill, frische Produkte und beeindruckender Weinkeller. Im Hotel Alpina Ischgl, erstes Untergeschoss. Herzlicher Service."
        : "Family-run restaurant in Ischgl. Specializing in excellent steaks from our Green Egg charcoal grill, fresh products, and stunning wine cellar. Located in Hotel Alpina Ischgl, first basement level. Heartful service.",
    image: "https://peak-restaurant.at/Gallery1.jpg",
    url: "https://peak-restaurant.at",
    telephone: "+43 5444 5255",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dorfstraße 22",
      addressLocality: "Ischgl",
      addressRegion: "Tyrol",
      postalCode: "6561",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "47.01477184708951",
      longitude: "10.294093581762276",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "18:00",
        closes: "21:00",
      },
    ],
    priceRange: "€€-€€€",
    paymentAccepted: "Cash, Credit Card",
  };

  // Breadcrumb List for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://peak-restaurant.at",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: language === "de" ? "Veranstaltungen" : "Events",
        item: "https://peak-restaurant.at#events",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: language === "de" ? "Speisekarte" : "Menu",
        item: "https://peak-restaurant.at#menus",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: language === "de" ? "Galerie" : "Gallery",
        item: "https://peak-restaurant.at#gallery",
      },
    ],
  };

  return (
    <>
      {/* Restaurant Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantSchema),
        }}
      />

      {/* Fondue Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fondueEventSchema),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
