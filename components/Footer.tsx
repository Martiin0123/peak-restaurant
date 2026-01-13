"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt="PEAK Logo"
                width={120}
                height={120}
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="space-y-4 text-white/50 text-sm leading-relaxed">
              <p>
                {t.footer.company} <br />
                {t.footer.legalAddress}
              </p>
              <p>
                <a
                  href={`mailto:${t.footer.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {t.footer.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Sitemap */}
            <div>
              <h4 className="text-white font-medium mb-6">Explore</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-4 text-white/60">
                  {["Events", "About", "Menus", "Gallery", "Find Us"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(" ", "-")}`}
                          className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded px-1"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-medium mb-6">Legal</h4>
              <nav aria-label="Legal links">
                <ul className="space-y-4 text-white/60">
                  <li>
                    <a
                      href="/impressum"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded px-1"
                    >
                      {t.footer.links.imprint}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/datenschutz"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded px-1"
                    >
                      {t.footer.links.privacy}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/agb"
                      className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded px-1"
                    >
                      {t.footer.links.agb}
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("openCookieSettings")
                        )
                      }
                      className="hover:text-white transition-colors text-left focus:outline-none focus:ring-2 focus:ring-taupe focus:ring-offset-2 focus:ring-offset-dark rounded px-1"
                      aria-label={t.footer.links.cookieSettings}
                    >
                      {t.footer.links.cookieSettings}
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-medium mb-6">Connect</h4>
              <ul className="space-y-4 text-white/60">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    Instagram <ArrowUp size={12} className="rotate-45" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    Facebook <ArrowUp size={12} className="rotate-45" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-white/30 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.company}. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <span className="uppercase tracking-widest text-xs flex items-center gap-2">
              <MapPin size={12} />
              Ischgl, Austria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
