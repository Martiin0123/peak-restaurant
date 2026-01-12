# PEAK Restaurant Website

A modern, premium one-page website for the PEAK restaurant built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimal design with premium aesthetics
- 🌍 Bilingual support (German/English) with language switching
- 🍪 Cookie consent banner with customizable preferences
- 📱 Fully responsive design (mobile-first)
- ✨ Smooth animations with Framer Motion
- ♿ Accessible with keyboard navigation and ARIA labels
- 🎯 Performance-optimized with Next.js App Router

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Afacad Flux (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
peak/
├── app/
│   ├── layout.tsx          # Root layout with font and providers
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── Events.tsx          # Events section with cards
│   ├── About.tsx           # About section with story
│   ├── Menus.tsx           # Menu section with tabs
│   ├── Gallery.tsx         # Gallery with masonry layout
│   ├── FindUs.tsx          # Location and map section
│   ├── ReservationCTA.tsx  # Reservation call-to-action
│   ├── Footer.tsx          # Footer with links and newsletter
│   ├── CookieConsent.tsx   # Cookie consent banner
│   └── LanguageProvider.tsx # i18n context provider
├── lib/
│   └── translations.ts     # Translation dictionary (DE/EN)
└── public/                 # Static assets (if any)
```

## Customization

### Colors

The brand colors are defined in `tailwind.config.ts`:
- Primary/Taupe: `#AA998A`
- Dark: `#202020`

You can modify these in the Tailwind config file.

### Content

All content is managed through the translation system in `lib/translations.ts`. To update text:
1. Edit the `translations` object in `lib/translations.ts`
2. Add new keys as needed
3. Ensure both `de` and `en` translations are provided

### Images

The gallery currently uses placeholder gradients. To add real images:
1. Place images in the `public/` directory
2. Update the `galleryImages` array in `components/Gallery.tsx`
3. Use Next.js `Image` component for optimization

### Map Integration

The map in the "Find Us" section currently shows a placeholder. To integrate Google Maps:
1. Get a Google Maps API key
2. Update the iframe `src` in `components/FindUs.tsx`
3. Replace `YOUR_API_KEY` with your actual API key

## Features in Detail

### Bilingual Support

- Language preference is saved in localStorage
- Automatically detects browser language on first visit
- All content switches seamlessly between German and English

### Cookie Consent

- GDPR-compliant cookie consent banner
- Settings modal with granular controls
- Preferences saved in localStorage
- Can be reopened from footer link

### Animations

- Respects `prefers-reduced-motion` for accessibility
- Smooth scroll animations
- Hover and interaction micro-animations
- Section reveal animations on scroll

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for PEAK Restaurant.

## Notes

- Address and contact information are placeholders (marked as such in code)
- Map integration requires a Google Maps API key
- Reservation system currently shows an alert (integrate with your booking system)
- Newsletter form currently shows a success message (integrate with your email service)
