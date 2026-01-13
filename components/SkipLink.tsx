"use client";

import { useLanguage } from "./LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-taupe focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2"
      onClick={(e) => {
        e.preventDefault();
        const mainContent = document.getElementById("main-content");
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {t.legal.skipToContent}
    </a>
  );
}
