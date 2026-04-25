# Fluo Landing — Roadmap & Status

**Última actualización:** Pre-deploy a Vercel. Self-hosting de fuentes en curso.
**Estado:** Roadmap pre-launch CERRADO post-self-hosting. Web lista para deploy.
**Stack:** Astro + Vercel, repo `lingualoop-web`.

---

## Métricas finales

| Métrica | Mobile | Desktop |
|---|---|---|
| Performance | 98 | 100 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | 2.1–2.4s | 0.6s |
| CLS | 0 | 0 |
| TBT | 0ms | 0ms |

---

## Sprints completados

| Sprint | Scope | Commit |
|---|---|---|
| 1 | Hero reformulation: densidad, orbs, phone vestido, badge, balance | — |
| 1.5 | Tuning del hero: orbs envolventes, CEFR clusterizado, avatares legibles | — |
| 1.6 | Inversión de orden mobile (texto antes que phone) | — |
| 1.7 | Tipografía: audit + preload DM Sans + alineación de App Store screenshots | — |
| 2 | Gradient cleanup: gradient único en "flows." | `4ca64c3` |
| 3 | Features zigzag + pills con identidad cromática (blue/violet/cyan) | `8a6cf30` |
| 4 | How It Works: mockups del producto + línea conectora gradient | `b4c9c0d` |
| 5A | Pulidos: FAQ accordion, CTA final, Why Fluo bullet diferenciador, A11y, trust pill | `58643e7` |
| 5A.5 | LCP fix vía font preload + remoción de badge "DIFFERENTIATOR" | `5282350` |
| 5B | Reveal animations calibradas + documentación Quicksand wordmark exception | `adc8b6e` |
| Legal | Port de Privacy / Terms / Support desde `/fluo/*` legacy + redirects | `e579a13` |
| Pre-deploy fixes | Badge "Conversation flow" + FAQ pricing + phone size + mobile order Features | (pendiente commit) |
| Self-hosting fonts | DM Sans + Quicksand vía @fontsource, eliminación de Google Fonts | (pendiente commit) |

---

## Decisiones cerradas

Items donde tomamos decisión deliberada y NO debe reabrirse sin razón nueva:

- **Tipografía:** DM Sans única para todo el sitio (self-hosted vía @fontsource desde pre-deploy). Quicksand 600 EXCLUSIVO para wordmark "Fluo" en Nav y Footer (excepción intencional, documentada en `CLAUDE.md`).
- **Brand color:** `#1D49F4` (electric blue). NO `#007AFF` (system blue) — confusión histórica recurrente.
- **Gradient blue→violet:** uso único en "flows." del hero. NO replicar en otros headlines.
- **Light mode:** removido por completo. La app y la web son dark-only. La excepción es el botón de Apple Sign-In en la app por requerimiento de Apple guidelines.
- **Hero NO se anima** en scroll reveal (renderiza estático para evitar FOUC percibido).
- **Páginas legales NO se animan** (textos largos + opacity:0 inicial = latencia percibida horrible).
- **Section title style:** Testimonials usa dual-weight 500/800 como excepción intencional. El resto de H2 son single-weight 700. NO normalizar.
- **Support content model:** accordion por categoría (5 categorías colapsables con preguntas internas como h3 + p). NO accordion individual por pregunta.
- **Slugs URL:** `/privacy-policy/`, `/terms-of-use/`, `/support/`. Mantener.
- **Email contact split:** `contact@linguatech.app` para Account Security (Terms §6); `support@linguatech.app` para todo lo demás. Ambos funcionales.
- **Datos personales en Contact sections (teléfono AR, dirección Buenos Aires):** ocultos hasta que alguien los solicite formalmente.
- **Hero badge copy:** "Real-time feedback · Conversation flow" (NO "Pronunciation: 94%" — promesa que el producto no entrega hoy).
- **FAQ pricing copy:** comunica freemium permanente con metering, NO trial limitado en tiempo.
- **Hover states:** validados en pre-deploy, todos los elementos interactivos (Nav, Footer, FAQ, Features pills, store badges, testimoniales) responden correctamente. NO revisitar sin razón nueva.

---

## Items DESCARTADOS del backlog

Items que evaluamos y decidimos no atacar (con razón explícita para que no vuelvan):

- **SAR process operativo (GDPR/AR):** descartado por decisión del founder. Re-evaluar si llega volumen real de requests post-launch.
- **Hover states sistemático:** validados manualmente, no requieren intervención.

---

## Post-launch: items diferidos

Items conscientemente deferidos. Atacar cuando datos reales (analytics, conversión, feedback) los prioricen, no antes.

### Tier A — Mayor potencial de impacto

- **Video/GIF del producto en hero.** El "money shot" que demuestre la promesa de "AI that feels human" en lugar de solo declararla en copy. Depende de grabar/generar el asset. Cuando esté: micro-sprint para integrarlo dentro del phone mockup del hero.
- **Botón decorativo "Report Issue" en Support Troubleshooting** — actualmente neutralizado a `<strong>` sin handler. Decisión: implementar flujo real (form → mailto / backend) o sacar la referencia del content. Tenerlo como label sin función es ruido para el lector.
- **i18n ES/PT-BR** — diferido hasta tener señal clara de filtro lingüístico en analytics (bounce rate alto en LATAM/BR específicamente con session <15s). Dado que el target son hispano y luso-hablantes, es palanca grande pero requiere copywriting bilingüe nativo, no traducción literal. Mantener 3 versiones triplica el costo de cada cambio futuro — solo iniciar cuando datos lo justifiquen.

### Tier B — Mejoras de marca / detalle

- **Visual de transición HowItWorks → WhyFluo** (asimetría detectada en Sprint 4). Hoy HowItWorks tiene bg-secondary + borders que la separan de Features, pero WhyFluo NO tiene tratamiento equivalente — se siente como continuación de Features. Posibles soluciones: thin gradient line entre secciones, alternancia tonal zebreada, o quitar el bg-secondary de HowItWorks. Decisión deferida — no es problema confirmado por usuarios, es observación visual.
- **Testimonials cards con identidad editorial.** Hover state sutil (lift + glow azul al 10%), o ícono de comillas grande atrás del texto con opacidad baja.
- **Trust pill rating en Testimonials.** Subordinada en Sprint 5A. Re-evaluar visualmente con ojo fresco después del launch.
- **Phone de "AI Tutor Chat" en Why Fluo:** podría aprovecharse más con un floating element saliendo del phone (ej: badge "AI explains in Spanish when needed").

### Tier C — Sistema / infraestructura

- **TOC sticky en páginas legales** (Privacy 13 secciones, Terms 26 secciones). Implementar solo si vemos signal de usuarios perdidos en la longitud (heatmaps, scroll depth analytics).
- **Subdomain `fluo.linguatech.app` setup.** Infra. Decidir cuando estés listo para separar Fluo del paraguas LinguaTech (probablemente al lanzar Android o un segundo producto).

### Tier D — Internacionalización + content marketing (Phase 2/3 declaradas)

- **SEO blog** — Phase 3 declarada.

### Tier E — Edge cases monitorables

- **Animaciones scroll en fling extremo:** validado en Sprint 5B que 450ms está OK. Si en algún momento se detecta "ondas de movimiento", bajar a 380-400ms.

---

## Notas operativas

### Convenciones de prompts CC para esta web

- **Repo:** `lingualoop-web`
- **Stack:** Astro + Vercel + DM Sans (self-hosted vía @fontsource) + Quicksand 600 (wordmark only, también self-hosted)
- **Modelo default:** Sonnet para cambios acotados; Opus para decisiones estructurales o de marca; Haiku para audits read-only o fixes one-line.
- **Plan-first:** obligatorio para cambios multi-archivo o con decisiones de diseño. Ejecución directa para fixes con scope claro.
- **Validación post-ejecución:** screenshots Playwright en al menos 1440 / 1024 / 375 + Lighthouse 3-5 runs según criticidad. Reportar antes/después.

### Memoria del estado de marca (para futuros sprints)

- Acentos cromáticos por feature consolidados:
  - Speaking → blue `#1D49F4`
  - Listening → violet `#7B2FE0`
  - Learning Path → cyan `#06B6D4`
- Mismos 3 colores aplicados a los 3 pasos de How It Works (sin asociación 1:1 a features — solo refuerzo del sistema).
- Avatar stack del trust pill: V·C·A·L (iniciales de testimonios reales + 1 letra elegida por contraste visual). NO inventar testimonios para justificar otras letras.

---

## Cierre

Post self-hosting de fuentes, la web está launch-ready.

**Próximo paso concreto:** deploy a Vercel.

**Recomendado post-deploy:**

1. Confirmar que los redirects de `/lingualoop/*` y `/fluo/*` funcionan en producción.
2. Trackear primer mes: scroll depth por sección, click-through al App Store, bounce por país.
3. Esos datos deciden qué Tier atacar primero post-launch.

Iterar a ciegas (sin datos) más allá de este punto tiene retornos decrecientes.
