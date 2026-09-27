# ClearPeak Window Cleaning

Marketing website for ClearPeak Window Cleaning, a residential and light commercial window cleaning company serving Calgary, Alberta and surrounding communities. The site's main goal is to generate free quote requests.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Demo website for LearnVibeCode.io.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts (Manrope + Inter), header, footer, metadata
  globals.css         Tailwind import and brand theme tokens
  page.tsx            Home
  about/page.tsx      About
  services/page.tsx   Services
  faq/page.tsx        FAQ
  contact/page.tsx    Contact + quote form
  not-found.tsx       404 page
  icon.svg            Favicon
components/
  header.tsx          Sticky header with mobile menu (client component)
  footer.tsx          Site footer
  quote-cta.tsx       Reusable "Get a Free Quote" call-to-action band
  quote-form.tsx      Quote request form UI with validation (client component)
  service-icon.tsx    Maps a service to its icon
  icons.tsx           Inline SVG icons (no icon library)
  ui.tsx              Container, ButtonLink, SectionHeading, PageHero, CheckList
lib/
  site.ts             Contact details, navigation, services content, form options
public/
  images/             Website photography
  logos/              ClearPeak logos (standard and white)
```

Business details (phone, email, hours) and all service copy live in `lib/site.ts`, so most content updates only touch that one file.

## Brand

| Token     | Hex       | Tailwind class |
| --------- | --------- | -------------- |
| Navy      | `#0D1B2A` | `navy`         |
| Teal      | `#33C3A2` | `teal`         |
| Off White | `#F7F9F8` | `offwhite`     |
| Dark Text | `#1D252C` | `ink`          |
| Soft Grey | `#E9EEEC` | `mist`         |

Headings use Manrope (`font-heading`); body text uses Inter.

## Quote form

The quote form is **interface only** in this version. It validates input and shows a confirmation message, but the request is not sent anywhere yet. Before launch, connect `handleSubmit` in `components/quote-form.tsx` to an API route or form service.
