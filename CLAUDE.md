# Fluo Landing — lingualoop-web

Landing page para Fluo (app de aprendizaje de inglés por LinguaTech).

## Documentos de referencia
- [docs/fluo-design-brief.md](docs/fluo-design-brief.md) — brief completo de la app (pantallas, flujos, branding, voz). Consultarlo antes de tomar decisiones de copy, jerarquía de features o tono de marca.

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

## Typography conventions
- DM Sans es la única tipografía del sistema en toda la landing (body, headings, UI). Pesos cargados: 400, 500, 600, 700, 800.
- Quicksand 600 es la única excepción: se usa exclusivamente para el wordmark "Fluo" en Nav y Footer. Es decisión intencional — el wordmark es el único uso legítimo de una segunda fuente, y su carácter redondeado refuerza la promesa de fluidez de la marca. NO usar Quicksand fuera de los selectores `.nav__logo` y `.footer__logo`.
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
- Logo de marca en public/assets/logo.png (1x) y logo-2x.png (2x), derivado del icono iOS
- Screenshots optimizados en public/assets/optimized/. Naming: `{nombre}.jpg` (660w) + opcional `{nombre}-1200.jpg` (1200w hi-res para phones grandes en desktop). Siempre referenciar estos en los componentes
- PNGs fuente de los screenshots (1320×2868) en docs/screens-source/ — solo referencia, NO se sirven
- Regenerar JPEG: `sips -Z` opera sobre la dimensión MAYOR. Para retrato 1320:2868 (ratio ~2.173:1), pasar la altura: `-Z 1434` produce 660w, `-Z 2607` produce 1200w. Comando: `sips -Z 1434 -s format jpeg -s formatOptions 82 INPUT --out OUTPUT.jpg`
- Cuando un componente renderiza un phone grande (≥320px CSS) usar `srcset` + `sizes` con ambas variantes para que mobile cargue 660w y desktop hi-DPR cargue 1200w
- Google Fonts: Quicksand (brand) + DM Sans (body) — cargar con preconnect

## Notas
- NO usar frameworks de CSS (Tailwind, etc.)
- NO usar librerías de JS para animaciones
- Target: Lighthouse Performance ≥ 95, SEO ≥ 95
- Sin analytics en esta fase
- Estilos globales se importan vía `<style is:global>` en SEOHead (sin `is:global` Astro los scopea y no aplican a otros componentes)
- Screenshots de verificación con Playwright MCP: guardarlos siempre en `.playwright-mcp/` (gitignored), nunca en la raíz del repo

## Comportamiento

### Pensar antes de codificar
- Explicitar supuestos. Si hay ambigüedad, preguntar antes de implementar.
- Si existen múltiples interpretaciones, presentarlas — no elegir en silencio.
- Si existe un approach más simple, proponerlo. Empujar de vuelta cuando sea necesario.

### Simplicidad ante todo
- Cero features que no se pidieron.
- Cero abstracciones para código de un solo uso.
- Cero "flexibilidad" o "configurabilidad" no solicitada.
- Si 200 líneas pueden ser 50, reescribir.

### Cambios quirúrgicos
- No "mejorar" código adyacente, comentarios o formato.
- No refactorizar lo que no está roto.
- Respetar el estilo existente, aunque se haría diferente.
- Si se nota dead code no relacionado, mencionarlo — no borrarlo.
- Cada línea cambiada debe trazarse directamente al pedido del usuario.

### Ejecución orientada a metas
- Antes de implementar, definir criterios de éxito verificables.
- En tareas multi-paso, declarar un plan breve con verificaciones.
- Verificar siempre: `npm run build` exitoso, Lighthouse Performance ≥ 95, SEO ≥ 95.
