# Fluo Landing — lingualoop-web

Landing page para Fluo (app de aprendizaje de inglés por LinguaTech).

## Stack
- Astro (static output)
- CSS vanilla (design tokens en src/styles/global.css)
- JS vanilla (mínimo, solo interacciones esenciales)
- Deploy: Vercel (custom domain linguatech.app)

## Convenciones
- Componentes en src/components/ (.astro)
- Layouts en src/layouts/ (.astro)
- Páginas en src/pages/ (.astro)
- Estilos globales en src/styles/global.css (design tokens como CSS custom properties)
- Estilos de componentes: scoped dentro de cada .astro con <style>
- Tipografía de marca (Quicksand) solo para el nombre "Fluo"
- Dark theme es el diseño principal (no hay light mode)
- Mobile-first responsive

## Comandos
- `npm run dev` — dev server (localhost:4321)
- `npm run build` — build estático a dist/
- `npm run preview` — preview del build

## Dominio y redirects
- Dominio: linguatech.app
- Redirects legacy en vercel.json (rutas del sitio anterior)
- URLs legales: /privacy-policy/, /terms-of-use/, /support/

## Assets
- Favicons y OG image en public/assets/
- Google Fonts: Quicksand (brand) + DM Sans (body) — cargar con preconnect

## Notas
- NO usar frameworks de CSS (Tailwind, etc.)
- NO usar librerías de JS para animaciones
- Target: Lighthouse Performance ≥ 95, SEO ≥ 95
- Sin analytics en esta fase
