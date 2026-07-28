# Lorona Mead, PLC — Phoenix Criminal Defense Attorney Website

A multi-page criminal defense law firm website built with React 19, Vite, and Tailwind CSS 4.

## Tech Stack

- **React 19** + **Vite 7** — frontend framework and build tool
- **Tailwind CSS 4** — styling
- **Wouter** — lightweight client-side routing
- **Playfair Display + Inter** — typography (Google Fonts)

## Local Development

```bash
pnpm install
pnpm dev
```

The site runs on `http://localhost:3000`.

## Build

```bash
pnpm build
```

Output is written to `dist/public/`.

## Deploy to Vercel

1. Import this repository into [Vercel](https://vercel.com/new)
2. Framework preset: **Vite**
3. Build command: `npx vite build`
4. Output directory: `dist/public`
5. Deploy — no environment variables required for the static build

The `vercel.json` file in the root handles SPA routing rewrites automatically.

## Project Structure

```
client/
  public/
    manus-storage/    ← All images (served statically)
    robots.txt
  src/
    components/       ← Navbar, Footer, Layout, ContactForm, SEO, etc.
    pages/            ← Home, Attorney, PracticeAreas, Blog, Contact, etc.
    lib/
      siteData.ts     ← Central data file (practice areas, locations, reviews, blog posts)
    App.tsx           ← Routes
    main.tsx          ← Entry point
    index.css         ← Global styles and design tokens
vercel.json            ← Vercel deployment config
```

## Features

- 15+ pages including homepage, attorney bio, 6 practice area pages, 4 location pages, blog, testimonials, contact
- SEO meta tags and JSON-LD schema markup on every page
- Caseclimb form embed on contact page
- LeadConnector chat widget site-wide
- Dark theme with gold accent (#C9A84C)
- Fully responsive
