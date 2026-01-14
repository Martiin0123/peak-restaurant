"use client";

import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

/**
 * Breadcrumbs Component
 * 
 * Helps users navigate and improves SEO by showing page hierarchy.
 * Especially helpful for AI understanding site structure.
 */

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { language } = useLanguage();

  // Add home as first item if not already present
  const allItems: BreadcrumbItem[] = [
    { 
      label: language === "de" ? "Startseite" : "Home", 
      href: "/" 
    },
    ...items
  ];

  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://peak-restaurant.at${item.href}`
    }))
  };

  return (
    <>
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* Visual Breadcrumbs */}
      <nav
        aria-label={language === "de" ? "Brotkrümel-Navigation" : "Breadcrumb navigation"}
        className="py-4 border-b border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm">
            {allItems.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight 
                    size={16} 
                    className="text-white/40" 
                    aria-hidden="true" 
                  />
                )}
                {index === 0 ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-white/60 hover:text-white transition-colors"
                    aria-label={item.label}
                  >
                    <Home size={16} aria-hidden="true" />
                    <span>{item.label}</span>
                  </a>
                ) : index === allItems.length - 1 ? (
                  <span className="text-white font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
