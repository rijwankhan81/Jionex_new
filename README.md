# Jionex Digital Experience Foundation

A clean Next.js App Router foundation for the Jionex website rebuild.

## Brand

- Primary: `#57007b`
- Secondary: `#de4396`

## Locales

- `/en` — English
- `/bn` — বাংলা
- `/ar` — العربية (RTL)
- `/es` — Español

The existing content and supplied assets are the source of truth. Do not rewrite or replace content while implementing the new visual experience.

## Stack

- Next.js 15
- React 19
- TypeScript
- Sass / CSS Modules
- GSAP + ScrollTrigger
- Lenis
- Motion
- Three.js + React Three Fiber + Drei

## Install

Use Git Bash on Windows:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Then open `http://localhost:3000/en`.

Do not use `--force` or `--legacy-peer-deps` for normal installation. The foundation intentionally does not use `next-i18next`, `react-i18next`, or `i18next`; locale content is read from the existing JSON assets through the Next.js App Router.

## Structure

- `src/app/[locale]` — localized App Router pages
- `src/components` — new implementation components
- `src/constants` — existing Jionex content/data
- `public/locales` — existing localized content
- `public` — existing supplied images/assets
- `src/legacy-*` — preserved previous implementation for reference only
