# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 single-page podcast website using the App Router with Tailwind CSS 4.

**Key files:**
- `src/app/page.tsx` - Main page component (client-side) displaying episode cards
- `src/app/layout.tsx` - Root layout with SEO metadata and font configuration
- `src/app/globals.css` - Tailwind imports and CSS custom properties

**Episode data:** Episodes are defined as a typed array in `page.tsx` with status "published" (with external RSS links) or "coming-soon".

**Styling:** Uses Tailwind utility classes with custom Google Fonts (VT323, Great_Vibes, Geist). Dark theme with navy blue gradients.

**Path alias:** `@/*` maps to `./src/*`
