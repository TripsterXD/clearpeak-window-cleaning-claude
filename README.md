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

The Contact page quote form posts to a server-side route handler at `app/api/quote/route.ts`, which validates the submission and saves it to the Supabase `quote_submissions` table. Validation rules live in `lib/quote.ts` and are shared by the form and the route.

The Supabase connection is configured with environment variables (see `.env.example`):

```bash
cp .env.example .env.local
```

| Variable                    | Description                                   |
| --------------------------- | --------------------------------------------- |
| `SUPABASE_URL`              | Your Supabase project URL                     |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key, used **only** on the server |

The service-role key is read only in `lib/supabase-server.ts`, which is imported only by the API route. Never prefix these variables with `NEXT_PUBLIC_`, as that would expose them to the browser. Set the same variables in your hosting provider's environment settings when deploying.
