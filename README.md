# cimar.dev — Personal Portfolio

One-page bilingual portfolio for Cimar Rodrigo Morales, backend developer. Terminal/backend visual identity: dark theme by default, chartreuse accent, a hero that simulates a `curl` request against a personal API, and sticky-scroll storytelling for the two featured projects.

## Stack

- **[Astro 5](https://astro.build)** — static-first, zero JS by default. The only client-side code is a small vanilla TypeScript module (theme/language toggles, hero typing effect, IntersectionObservers). No UI framework.
- **[Tailwind CSS 4](https://tailwindcss.com)** via `@tailwindcss/vite`, with all design tokens as CSS custom properties bridged into Tailwind through `@theme inline`.
- **Astro View Transitions** (`ClientRouter`) for navigation.
- **TypeScript strict.**
- **@fontsource** — Geist Sans (400/500/600/700) for text, JetBrains Mono (400/500/700) for code accents. Self-hosted, no external font requests.
- **Native Astro i18n routing** — English at `/`, Spanish at `/es/`. Dictionaries live in `src/i18n/ui.ts`.

## Architecture & decisions

- **Design tokens** (`src/styles/global.css`): colors, radii and motion are CSS custom properties switched via `[data-theme]` on `<html>`. Terminal panels keep a fixed dark palette in both themes by design.
- **Theming**: first visit follows `prefers-color-scheme`; the choice is persisted in `localStorage` (`theme` key). An inline script in `<head>` (marked `data-astro-rerun` so it survives view transitions) applies the theme before first paint — no flash.
- **Light theme** uses a darkened accent (`#4d7c0f`) for text and borders to keep AA contrast; fills keep the bright accent (`--accent-raw`).
- **i18n**: the language switch preserves the current section hash (`/#projects` → `/es/#projects`) and swaps the CV link per locale.
- **Scroll behavior**: reveal-on-scroll, nav section highlighting and the featured-project panel crossfades are three small IntersectionObservers in `src/scripts/site.ts`. Everything respects `prefers-reduced-motion` (typing renders instantly, animations and transitions are disabled).
- **SEO / a11y**: single `h1`, semantic landmarks, `hreflang` alternates, Open Graph + Twitter cards, JSON-LD `Person`, sitemap (`@astrojs/sitemap`) and `robots.txt`. Focus-visible outlines use the accent token.

## Project structure

```
src/
  components/     Nav, Hero, Experience, Projects, About, Stack, Education, Contact, Footer
  i18n/ui.ts      EN/ES dictionaries (single source of truth for copy)
  layouts/        BaseLayout.astro (head, SEO, theme bootstrap)
  pages/          index.astro (EN), es/index.astro (ES), 404.astro
  scripts/site.ts Client-side behavior (vanilla TS)
  styles/         global.css (tokens + all component styles)
public/           CVs, favicon, og image, robots.txt
scripts/          generate-og.mjs (renders public/og.png with sharp)
```

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |
| `npm run og`      | Regenerate the Open Graph image             |

## Deploy

Built for **Cloudflare Pages**: standard static build (`npm run build`, output `dist/`). The 404 page is served automatically from `dist/404.html`.
