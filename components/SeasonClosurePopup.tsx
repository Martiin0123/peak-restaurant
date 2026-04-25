"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const STORAGE_KEY = "seasonClosurePopupDismissed-v1";

export function SeasonClosurePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = window.setTimeout(() => setIsOpen(true), 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-dark/45 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="relative w-full max-w-lg rounded-2xl border border-white/50 bg-[#F5F5F5]/95 shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="season-closure-title"
          >
            <button
              onClick={handleClose}
              className="absolute right-3 top-3 rounded-full p-2 text-dark/65 hover:text-dark hover:bg-dark/5 transition-colors"
              aria-label="Close seasonal notice"
            >
              <X size={18} />
            </button>

            <div className="px-6 pt-8 pb-6 sm:px-8">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe mb-3">
                Season Update
              </p>
              <h2
                id="season-closure-title"
                className="text-2xl sm:text-3xl font-semibold text-dark leading-tight"
              >
                Sommerpause
              </h2>

              <div className="mt-4 space-y-4 text-dark/80 leading-relaxed">
                <p>
                  Wir haben aktuell geschlossen und freuen uns, unsere Gäste ab
                  dem <span className="font-semibold text-dark">26.11.2026</span>{" "}
                  wieder willkommen zu heißen.
                </p>
                <p className="border-t border-dark/10 pt-4">
                  We are currently closed for the summer season and are happy to
                  welcome our guests again from{" "}
                  <span className="font-semibold text-dark">26.11.2026</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
