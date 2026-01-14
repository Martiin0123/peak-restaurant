# 🚀 Deployment-Checkliste PEAK Restaurant

**Stand:** 14. Januar 2026  
**Status:** Bereit für Produktion

---

## ✅ **VOR dem Deployment**

### 1. Code-Qualität

- [x] Build erfolgreich (`npm run build`) ✅
- [x] Keine Linter-Fehler ✅
- [x] Alle Korrekturen eingepflegt ✅
  - [x] Vienna → Ischgl
  - [x] Öffnungszeiten 18:00-21:00
  - [x] Familie Zangerl

### 2. Inhalte überprüfen

- [x] Öffnungszeiten korrekt ✅
- [x] Adresse korrekt ✅
- [x] Telefonnummer vorhanden ✅
- [x] E-Mail korrekt ✅
- [ ] **Speisekarte PDF** aktuell?
  - 📁 Datei: `public/Speisekarte.pdf`
  - Prüfen: Ist das die aktuelle Version?

### 3. Bilder

- [ ] Alle Bilder vorhanden?
  - `public/Gallery1.jpg` bis `Gallery10.jpg`
  - `public/Familie-Peak.avif` → **Umbenennen zu `Familie-Zangerl.avif`?**
  - `public/Fondue.jpg`
  - `public/logo.png`
- [ ] Bilder optimiert? (nicht zu groß)

---

## 🚀 **DEPLOYMENT**

### Option A: Vercel (Empfohlen)

```bash
# 1. Vercel Account erstellen (kostenlos)
#    → https://vercel.com/signup

# 2. Vercel CLI installieren
npm i -g vercel

# 3. Im Projekt-Ordner:
cd /Users/martin/Documents/peak
vercel

# 4. Folge den Anweisungen
#    - Link GitHub Repository? (Optional)
#    - Projekt-Name: peak-restaurant
#    - Deploy!
```

### Option B: Andere Hosting-Dienste

- **Netlify:** https://netlify.com
- **AWS Amplify:** https://aws.amazon.com/amplify/
- **Eigener Server:** `npm run build` + `npm start`

---

## ⚙️ **NACH dem Deployment**

### 1. Domain einrichten

- [ ] Domain kaufen/konfigurieren: `peak-restaurant.at`
- [ ] DNS-Einstellungen bei Hosting-Provider
- [ ] SSL-Zertifikat aktiviert (HTTPS)
- [ ] www → non-www Redirect (oder umgekehrt)

### 2. Google Verification Code

- [ ] **Google Search Console** öffnen: https://search.google.com/search-console
- [ ] Website hinzufügen
- [ ] Verification Code kopieren
- [ ] In `app/layout.tsx` einfügen (Zeile 72):
  ```typescript
  verification: {
    google: "HIER_DEN_CODE_EINFÜGEN",
  },
  ```
- [ ] Erneut deployen
- [ ] Verifizierung bestätigen

### 3. Google Search Console Setup

- [ ] **Sitemap einreichen**
  - URL: `https://peak-restaurant.at/sitemap.xml`
  - In GSC: Sitemaps → Neue Sitemap hinzufügen
- [ ] **URL-Inspektion** testen
  - Homepage prüfen
  - Wichtige Seiten einzeln prüfen
- [ ] **Coverage Report** überwachen
  - Warten bis Google indexiert (1-3 Tage)

### 4. Rich Results Test

- [ ] Öffnen: https://search.google.com/test/rich-results
- [ ] URL eingeben: `https://peak-restaurant.at`
- [ ] Prüfen:
  - ✓ Restaurant Schema erkannt?
  - ✓ FAQPage Schema erkannt?
  - ✓ Event Schema erkannt?
  - ✓ LocalBusiness Schema erkannt?
- [ ] Fehler beheben (falls vorhanden)

### 5. Schema Markup Validator

- [ ] Öffnen: https://validator.schema.org/
- [ ] URL eingeben oder Code-Snippet testen
- [ ] Alle Schemas validieren

---

## 📊 **MARKETING & SICHTBARKEIT**

### 6. Google Business Profile

- [ ] Öffnen: https://business.google.com
- [ ] Eintrag erstellen/beanspruchen
- [ ] Informationen aktualisieren:
  - [x] Adresse: Dorfstraße 22, 6561 Ischgl
  - [x] Öffnungszeiten: 18:00-21:00 (Mo-So)
  - [x] Telefon: +43 5444 5255
  - [x] Website: https://peak-restaurant.at
  - [ ] Kategorie: Restaurant, Steakhouse
  - [ ] Attribute:
    - Familiengeführt
    - Reservierung empfohlen
    - Green Egg Grill
    - Weinkeller
  - [ ] Beschreibung (mit Keywords):
    ```
    Familiengeführtes Restaurant im Herzen von Ischgl.
    Spezialist für exzellente Steaks vom Green Egg
    Holzkohlegrill und beeindruckender Weinkeller.
    Jeden Donnerstag: Fondue-Abend. Im Hotel Alpina
    Ischgl, 1. Untergeschoss. Reservierung empfohlen.
    ```
  - [ ] Fotos hochladen (mind. 10)
  - [ ] Fondue-Donnerstag als Event hinzufügen

### 7. Social Media (Optional)

- [ ] Instagram: `@peak.ischgl` erstellen?
- [ ] Facebook Seite
- [ ] TikTok? (Food-Content)

### 8. Review-Plattformen

- [ ] **Google Reviews:**
  - Erste 5-10 Reviews sammeln
  - QR-Code für Gäste erstellen
  - Review-Link: `https://g.page/r/XXXXXXXXXX/review`
- [ ] **TripAdvisor:**
  - Profil erstellen
  - Restaurant beanspruchen
- [ ] **Falstaff** (österreichischer Gourmet-Guide)

---

## 🧪 **TESTS DURCHFÜHREN**

### 9. Website-Funktionalität

- [ ] Homepage lädt
- [ ] Navigation funktioniert
- [ ] Reservierungs-Link funktioniert
- [ ] Speisekarte-PDF downloadbar
- [ ] Google Maps öffnet
- [ ] Cookie-Banner funktioniert
- [ ] Sprachumschaltung DE/EN
- [ ] Mobile Ansicht korrekt
- [ ] Impressum, Datenschutz, AGB lesbar

### 10. Performance-Test

- [ ] **PageSpeed Insights**
  - URL: https://pagespeed.web.dev/
  - Eingabe: `https://peak-restaurant.at`
  - Ziel: >90 (Mobile & Desktop)
- [ ] **Lighthouse** (in Chrome DevTools)
  - Performance >85
  - Accessibility >95
  - Best Practices >90
  - SEO >95

### 11. AI-Chatbot Test (nach 2-4 Wochen)

- [ ] **ChatGPT** fragen:
  ```
  "Beste Restaurants in Ischgl"
  "Wo kann ich in Ischgl Fondue essen?"
  "Green Egg Steaks in Ischgl"
  "Familienrestaurant Ischgl mit Weinkeller"
  ```
- [ ] **Claude** fragen (gleiche Fragen)
- [ ] **Perplexity** fragen (gleiche Fragen)
- [ ] Erwähnt AI euer Restaurant? ✓

---

## 📧 **KOMMUNIKATION**

### 12. Kunden informieren

- [ ] E-Mail-Newsletter (falls vorhanden)
  - "Neue Website online!"
  - Reservierungs-Link prominent
- [ ] Social Media Posts
- [ ] Im Restaurant:
  - QR-Code auf Tischen
  - "Jetzt online reservieren!"

### 13. Mitarbeiter schulen

- [ ] Team informieren über:
  - Neue Website
  - Online-Reservierungen
  - Green Egg Steaks als Highlight
  - Fondue-Donnerstag promotieren

---

## 📅 **WARTUNG & MONITORING**

### Wöchentlich (erste 4 Wochen)

- [ ] **Google Search Console** prüfen
  - Indexierung-Status
  - Fehler beheben
  - Performance überwachen
- [ ] **Google Analytics** (falls installiert)
  - Besucherzahlen
  - Beliebte Seiten
  - Conversion-Rate

### Monatlich

- [ ] **SEO-Rankings** prüfen
  - "Restaurant Ischgl"
  - "Green Egg Ischgl"
  - "Fondue Ischgl"
- [ ] **Reviews** sammeln & beantworten
- [ ] **Inhalte aktualisieren**
  - Saisonale Menüs
  - Events
  - Fotos

### Bei Änderungen

- [ ] **Öffnungszeiten** ändern:
  - `lib/translations.ts` (Zeile 32-34 & 441-442)
  - `components/StructuredData.tsx` (Zeile 78-92 & 196-210)
  - Google Business Profile
- [ ] **Speisekarte** aktualisieren:
  - PDF ersetzen: `public/Speisekarte.pdf`
- [ ] **Events** hinzufügen/ändern:
  - `components/Events.tsx`
  - `components/StructuredData.tsx` (FoodEvent Schema)

---

## ✅ **ERFOLGS-KRITERIEN**

### Nach 1 Monat:

- [ ] Google hat alle Seiten indexiert (9/9)
- [ ] Rich Snippets werden angezeigt
- [ ] Mindestens 5 Google Reviews
- [ ] Website-Besucher: 200+/Monat
- [ ] Online-Reservierungen: 10+/Monat

### Nach 3 Monaten:

- [ ] Top 3 Rankings für "Restaurant Ischgl"
- [ ] AI-Chatbots empfehlen euch
- [ ] Website-Besucher: 500+/Monat
- [ ] Online-Reservierungen: 30+/Monat
- [ ] 10+ Google Reviews (Durchschnitt 4.5+)

### Nach 6 Monaten:

- [ ] 1.000+ Website-Besucher/Monat
- [ ] 60+ Online-Reservierungen/Monat
- [ ] Featured in Reiseführern
- [ ] TripAdvisor Top 10 Ischgl

---

## 📞 **SUPPORT**

### Bei Problemen mit:

- **Code/Website:** `README.md` lesen
- **SEO:** `SEO_GUIDE.md` konsultieren
- **Korrekturen:** `KORREKTUREN_2026-01-14.md`
- **Übersicht:** `PROJEKT_ANALYSE_FINAL.md`

### Wichtige Links:

- Google Search Console: https://search.google.com/search-console
- Google Business: https://business.google.com
- Rich Results Test: https://search.google.com/test/rich-results
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Validator: https://validator.schema.org/

---

## 🎉 **FERTIG!**

Nach Abschluss aller Punkte haben Sie:

- ✅ Professionelle, SEO-optimierte Website
- ✅ AI-ready für ChatGPT & Co.
- ✅ Google-optimiert für Local Search
- ✅ Perfekte Online-Präsenz für PEAK Restaurant

**Viel Erfolg! 🍽️**

---

**Hermann, Martin & Christopher Zangerl**  
PEAK Restaurant | Dorfstraße 22 | 6561 Ischgl  
Tel: +43 5444 5255 | info@peak-restaurant.at

_Exzellenz beginnt mit Leidenschaft und den besten Produkten._
