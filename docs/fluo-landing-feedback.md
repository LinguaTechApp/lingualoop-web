# Fluo Landing — Feedback & Action Items

**Contexto:** Review de `localhost:4321` basado en screenshots desktop + mobile.
Referencias de premium tier: Loora, Learna AI.
Estado actual: ~70% del camino a premium. Estructura y copy sólidos; gap en densidad visual, ejecución de detalle y elementos "wow".

---

## TL;DR — Top 3 palancas

Si solo tocamos tres cosas, estas mueven la aguja más:

1. **Reformular el hero** (mayor impacto, ver §1).
2. **Reducir el gradiente azul→violeta a 1-2 usos máximo** en toda la página (ver §8).
3. **Reformular "How it works" + alternar features en zigzag** para darle ritmo al scroll (ver §3, §4).

---

## 1. Hero 🔴 Alta prioridad

El hero es el problema más grande. Es lo primero que ve el usuario y lo que define la percepción premium/no-premium.

### 1.1 Falta densidad visual en la primera pantalla
- **Problema:** Mucho aire negro a los lados del contenido. El bloque de texto a la izquierda queda tímido, el phone a la derecha solitario.
- **Acción:** Aumentar densidad con background layers (orbs grandes desenfocados, mesh gradient), elementos flotantes alrededor del phone, y ajustar el balance horizontal de contenido vs. aire.

### 1.2 Glow de fondo demasiado tímido
- **Problema:** Existe un glow morado abajo a la derecha pero es casi invisible. Loora tiene orbs grandes y desenfocados ocupando un cuarto de pantalla, con varias capas superpuestas (azul + violeta + cyan).
- **Acción:** Subir intensidad y tamaño de los orbs. Considerar 2-3 capas superpuestas con colores diferentes.

### 1.3 Grid de fondo genérico
- **Problema:** El grid actual es plano y no suma personalidad. Se ve "Tailwind default".
- **Acción:** Opción A — reemplazarlo por un mesh gradient animado sutil. Opción B — subir intensidad y agregar fade radial desde el centro. Opción C — removerlo y confiar en los orbs.

### 1.4 Badge de rating enterrado
- **Problema:** "4.8 ★ · 2,000+ learners" arriba del título queda casi invisible.
- **Acción:** Darle más peso visual — pill marcada con borde/fondo sutil, o agregar avatares de 3-4 usuarios solapados al lado del rating (patrón típico de landings premium).

### 1.5 Phone mockup aislado y estático
- **Problema:** El phone está "suelto" en el espacio. Loora viste el phone con elementos flotantes alrededor (badges salidos del marco, waveform animado, indicador de "AI listening") que demuestran el producto en acción.
- **Acción:** Agregar 2-3 elementos flotantes alrededor del phone (floating cards con features clave, waveform, badge "Real-time feedback", etc.). Idealmente con micro-animación sutil.

### 1.6 Desbalance de los botones de store
- **Problema:** "Download on App Store" al 100% y "Coming soon Google Play" al 50% rompe la simetría sin aportar info útil.
- **Acción:** Dos opciones:
  - A) Igualar visualmente ambos botones (mismo peso), con el texto "Coming soon" adentro del botón de Google Play.
  - B) Dejar solo App Store en el hero y mover la mención de Google Play más abajo en la página.

### 1.7 Falta el "money shot" del producto en acción
- **Problema:** Todo el hero muestra mockup estático. Loora tiene video/loop corto de la app en uso. Sin esto, la promesa de "AI that feels human" queda en el copy, no se demuestra.
- **Acción:** Embed de video corto (5-10s) en loop mostrando la app en uso real (alguien hablando, waveform reaccionando, AI respondiendo, feedback apareciendo). Alternativa: GIF optimizado. Ubicación: dentro del phone mockup del hero.

---

## 2. Social Proof (Real stories) 🟢 Baja prioridad

Esta sección está bien ejecutada. Testimonios con país + CEFR (B1→B2) es exactamente el detalle que separa una landing pensada.

### 2.1 (Opcional) Dar identidad a los cards
- **Problema:** Los cards de testimonios son correctos pero planos.
- **Acción:** Considerar hover state sutil (lift + glow azul al 10%), o un ícono de comillas grande atrás del texto con opacidad baja para darle identidad editorial.

---

## 3. Features (Three ways to master English) 🔴 Alta prioridad

### 3.1 Formato "tres cards iguales" mata el ritmo
- **Problema:** Tres cards apiladas con phone arriba + título + texto + tags = formato bootstrap. Se siente "template".
- **Acción:** Alternar las features en zigzag:
  - Speaking: phone a la izquierda, contenido a la derecha.
  - Listening: phone a la derecha, contenido a la izquierda.
  - Learning Path: phone a la izquierda, contenido a la derecha.
- Cada phone más grande, con su propio "stage" (glow propio, color de acento propio).
- Esto le da ritmo al scroll.

### 3.2 Pills de tags se sienten como tags de blog
- **Problema:** "AI Role-play", "Real-time Feedback", "CEFR Calibrated" etc. son todos iguales → genéricos.
- **Acción:** Darles más identidad visual:
  - Ícono adelante (Lucide, Phosphor, etc.).
  - Fondo con el azul de marca al 8-10% en lugar de gris.
  - Border sutil con el color de acento de la feature.
  - Mantener misma altura pero diferenciar por categoría.

---

## 4. How it works (Simple. Effective. Daily.) 🔴 Alta prioridad

### 4.1 Sección demasiado desnuda
- **Problema:** Tres círculos con números y texto es "mínimo viable", no premium. Se siente rellenando espacio.
- **Acción:**
  - Agregar un visual concreto en cada paso: mini-mockup, ilustración custom, o ícono de marca (no solo número).
  - Línea conectora con gradient entre los 3 pasos.
  - Micro-animación al entrar al viewport (fade + slide up, íconos que animan).
  - Considerar layout horizontal con cards más grandes en lugar de columnas angostas.

---

## 5. Why Fluo (Built for the way you actually learn) 🟡 Media prioridad

Esta sección está OK pero puede subir.

### 5.1 Diferenciador "Made for Spanish & Portuguese speakers" no capitaliza
- **Problema:** Es el bullet #1 y es el mayor diferenciador del producto, pero está al mismo nivel visual que los demás.
- **Acción:** Darle tratamiento especial al primer bullet — ícono más grande con color de acento, o pequeña visualización de bandera/mapa de Spanish & Portuguese speaking countries, o un call-out visual que lo destaque.

### 5.2 Phone de "AI Tutor Chat" podría aprovecharse más
- **Problema:** El mockup es bueno pero está "solo" a la derecha. La conversación mostrada (explicación de "used to") es muy buena pero se pierde.
- **Acción:** Agregar al menos un floating element salido del phone resaltando el feedback contextual (ej: badge "AI explains in Spanish when needed" o similar).

---

## 6. FAQ 🟡 Media prioridad

### 6.1 Accordion estilo Bootstrap
- **Problema:** El "+" plano, borders grises planos, no transmiten cuidado. Se siente "default component".
- **Acción:**
  - Border con gradient sutil o glow azul al hover.
  - Animación de expand más suave (ease-out, ~300ms).
  - Ícono que rota o cambia (ej: + que rota a ×, o + que morfea a −).
  - Fondo del item activo con un tinte azul muy sutil.
- **Esfuerzo estimado:** ~30 min. ROI alto en "feel premium".

---

## 7. Final CTA (Ready to speak with confidence?) 🟡 Media prioridad

### 7.1 Última oportunidad desperdiciada
- **Problema:** "Ready to speak with confidence?" + botones es correcto pero plano. Es la última oportunidad de impacto.
- **Acción:**
  - Visual final fuerte: phone + glow grande + texto display más grande.
  - Recap de social proof: "Join 2,000+ learners speaking English daily".
  - Microcopy más aspiracional en lugar de transaccional.
  - Considerar un patrón de "Before/After" o similar que cierre emocionalmente.

---

## 8. Global / Sistema 🔴 Alta prioridad

### 8.1 Gradiente azul→violeta sobre-usado
- **Problema:** El gradient aparece en "flows" (hero), "real stories", y probablemente más títulos. Cuando un treatment se repite 4-5 veces pierde impacto.
- **Acción:** Regla premium: máximo 1-2 usos del gradient en toda la página, idealmente solo en el headline del hero. El resto en blanco puro o con peso tipográfico diferente (light vs bold).

### 8.2 (Opcional) Auditoría de microanimaciones
- **Problema:** La página se siente estática al scrollear.
- **Acción:** Agregar fade-in + slide-up sutil a secciones al entrar al viewport (Intersection Observer). Mantener sutil (200-400ms, easing suave), sin exagerar.

### 8.3 (Opcional) Cursor/hover states
- **Problema:** No evalué hover states en detalle con screenshots.
- **Acción:** Revisar que todos los elementos interactivos (botones, cards, tags, FAQ) tengan hover/focus states consistentes y premium.

---

## Lo que está bien (NO tocar)

Para no perder de vista lo que ya funciona:

- **Estructura narrativa:** hook → social proof → features → how → why → FAQ → CTA. Secuencia correcta.
- **Copy diferenciado:** "fluency, not test scores", "designed for Spanish and Portuguese speakers", testimonios con país + CEFR. Específico y con alma.
- **Paleta dark consistente.**
- **Footer:** "Designed in Buenos Aires · Built with care" tiene alma. Mantener.
- **Mobile version** está más lograda que desktop (el formato vertical perdona más).
- **FAQ content:** las preguntas cubren los objection points correctos (free?, level?, offline?, Android?, cancel?).

---

## Propuesta de orden de ataque

Sugerencia de secuencia para prompts de CC, de mayor ROI a menor:

1. **Sprint 1 — Hero reformulation** (§1.1–1.7). Es el 40% del impacto total.
2. **Sprint 2 — Gradient cleanup** (§8.1). Cambio quirúrgico, bajo esfuerzo, alto impacto en "feel".
3. **Sprint 3 — Features zigzag + pills con identidad** (§3.1, §3.2).
4. **Sprint 4 — How it works upgrade** (§4.1).
5. **Sprint 5 — Pulidos** (FAQ §6.1, CTA final §7.1, Why Fluo §5.1, microanimaciones §8.2).

Cada sprint probablemente requiere **plan-first** en CC (toca múltiples archivos del Astro y decisiones de diseño).

---

## Notas para prompts de CC

- Repo: `lingualoop-web`
- Stack: Astro + Vercel
- No especificar archivos/líneas/snippets en los prompts — describir el estado final deseado.
- Incluir siempre: modelo recomendado, effort, plan-first vs. ejecución directa.
- Cada sprint probablemente Opus con effort medio-alto por involucrar decisiones de diseño.
