# Fluo Landing — lingualoop-web

Landing page for **Fluo**, an AI-powered English learning app by LinguaTech.

Built with Astro (static output), vanilla CSS with design tokens, and minimal vanilla JS. Deployed to Vercel at [linguatech.app](https://linguatech.app).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build static site to `./dist/`              |
| `npm run preview` | Preview the build locally                   |

A [`Makefile`](./Makefile) exposes the same targets (`make dev`, `make build`, etc.).

## Project structure

```
src/
├── components/   # .astro components (scoped styles)
├── layouts/      # BaseLayout, LegalLayout
├── pages/        # index + legal pages
└── styles/
    └── global.css  # design tokens + reset
public/
├── assets/      # favicons, OG image
└── robots.txt
```

## Conventions & targets

See [`CLAUDE.md`](./CLAUDE.md) for the full set of conventions, stack decisions, and behavioral guidelines. Highlights:

- No CSS frameworks, no JS animation libraries.
- Dark theme only; mobile-first responsive.
- Quicksand for the "Fluo" brand name; DM Sans for body.
- Target: Lighthouse Performance ≥ 95, SEO ≥ 95.
