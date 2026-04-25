# Fluo — Brief de diseño para landing

> **Nota:** La mayoría de los documentos internos del proyecto todavía dicen "LinguaLoop" (rebrand completo en iOS, pendiente en web/deep links). Para la landing usá **Fluo** consistentemente. Donde no tenga literales exactos en los docs lo aclaro explícitamente.

---

## 1. Pantallas principales

### 1.1 Home / Dashboard

Tab inicial tras resolver auth. Es un dashboard de entrada rápida a todas las actividades con feed personalizado. Estructura de arriba hacia abajo:

- **Header**: nombre de usuario + nivel CEFR actual + indicador de streak (llama + número de días). Si es guest, CTA de login.
- **Continue learning** (Learning Path section): scroll horizontal de cards de lecciones de la unidad actual. Auto-scroll a la primera lección incompleta, con borde animado pulsante (1.5s cycle, 3 repeats).
- **Recommended Practice**: hasta 3 cards apiladas verticalmente — 1 Speaking + 1 Dictation + 1 Quiz. Cada card: thumbnail 80x80 + skill label ("Speaking" / "Listening · Fill In" / "Listening · Quiz") + título + metadata (dificultad/tópico o nivel/acento). Cada card tiene un status pill en la esquina sup. derecha ("Available", "In 2d 4h", "Completed ✓", "Sign in to practice" según estado).
- **CTA "View All"** al lado del header de cada sección → lleva al tab correspondiente.
- Rotación diaria determinista por `userId + fecha + salt` (djb2 hash) — cada día ve cards distintas sin backend state.

**Guest ve el orden invertido**: Dictation → Quiz → Speaking (porque Listening es accesible sin login; Speaking queda como teaser).

### 1.2 Speaking — Lista de escenarios

Lista vertical de cards, fondo oscuro. Cada card:

- Imagen del escenario (ratio horizontal) con overlay oscuro 0.7 + badge del personaje.
- Badge de nivel CEFR (color bronce/plata/oro) + badge de tipo de escenario (Task/Scenario/Discussion/Free Talk).
- Título localizado + descripción corta + metadata: emoji del topic, ⏱ duración estimada, 👤 nombre del personaje.
- Lock overlay si es guest o cooldown countdown si es free en espera.

**Floating Filter Button** flotante (esquina inferior derecha) → sheet con filtros: topic (27 categorías), difficulty (A1–C2), duration (short ≤5m / medium 6-10m / long >10m).

Al tocar una card → `SpeakingScenarioInfoModal` (sheet con detalles + botón "Start Activity").

### 1.3 Speaking — Conversación activa (Role Play)

La vista más inmersiva de la app. Fondo: imagen del escenario con blur + overlay oscuro 0.7 (fallback `#0F1115` / `speakingBackground`).

- **Header dinámico** (varía por tipo de escenario):
  - Task → `ObjectivesBannerView` (píldora colapsable "🎯 2/4" expandible a lista de objetivos).
  - Scenario → `ScenarioContextBar` (icono burbujas + contador turnos "3/12").
  - Discussion / Free Talk → `DiscussionHeaderView` (emoji del topic + título).
  - A la izquierda: botón cerrar (con confirmación de salida). A la derecha: botón settings (gear).

- **Chat central** (ScrollViewReader):
  - Burbujas de **usuario** (derecha, glass morphism oscuro + `buttonPrimary`): emoji 🔥 si feedback perfecto; badge ámbar `#FFB340` si hay corrección (expande al tap).
  - Burbujas de **asistente** (izquierda, gradiente azul + avatar): incluye una "Learning Tools Row" con 4 botones — traducción, replay 1.0x, playback lento 0.75x, "ojo" (listening mode revela texto blurreado). Texto con streaming progresivo (cursor parpadeante mientras recibe).
  - Indicador typing (3 dots animados) mientras el LLM procesa.
  - **Passive Scaffolding** (línea gris con borde punteado abajo del chat): "Try saying: [sugerencia]".
  - **Suggestion Chips** flotantes: scroll horizontal de pills oscuros con texto blanco, 3 sugerencias calibradas por CEFR.

- **Área de control inferior** (cambia por estado):
  - Idle/Listening → `VoiceFirstCockpit` (botón grande circular de mic + glow animado).
  - Processing → spinner deshabilitado.
  - Speaking (IA hablando) → botón stop naranja.
  - Text mode → `KeyboardInputBar` con input + send.

### 1.4 Listening — Lista de videos (Dictation o Quiz)

Lista vertical con paginación infinita. Cada card:

- Thumbnail del video (YouTube).
- Título del ejercicio (ej. "Learning from mistakes").
- Metadata: duración (ej. "2:00"), nivel (easy/medium/hard → A1-A2 / B1-B2 / C1-C2), acento (🇺🇸/🇬🇧/🇪🇸), categoría.
- Badge "Free" si está liberado para guest / "PRO" si requiere suscripción.

Toggle superior para cambiar entre **Dictation** y **Quiz** (`FilterActivitiesView`). Floating Filter Button para filtros de level/category/accent/sort (latest / random).

### 1.5 Listening — Dictation activa

- **Reproductor de YouTube** arriba (embebido) con el video cargado en el timestamp del fragmento.
- **Controles bajo el video**: Previous | Loop | Replay | Speed (0.8x/1.0x/1.2x) | Next (azul con glow cuando hay próximo fragmento).
- **Área de dictado**: pool de palabras shuffleadas (pills seleccionables). El usuario tapea en orden para construir la oración. Palabras regaladas pre-seleccionadas en un color atenuado. Al equivocarse, posición marcada en rojo; al 2º error consecutivo aparece hint.
- Botones inferiores: "Show answer", "Translate", "Next".
- Progress indicator: fragment actual / total arriba.

### 1.6 Learning Path — Hub principal

Tab Learning. De arriba hacia abajo:

- **Header**: nivel actual ("A2 — Elementary") + código CEFR con color de tier (bronce/plata/oro).
- **Progress Box**: "Units completed 3/6" + barra horizontal segmentada (un segmento por unidad, verde si completada).
- **Lista de unidades** con expansión. Cada unidad (`LearningUnitCardView`):
  - Header: número unidad + título ("Unit 2: Daily Routines") + circle progress (ej. 4/7).
  - Si la unidad está completa, medalla dorada animada.
  - Lecciones expandidas debajo (`LessonRowView`): icono (📖 book.fill para grammar / 📰 newspaper.fill para vocabulary) + título + checkmark badge si completa. La primera incompleta pulsa.
- **Floating Filter Button** → cambiar nivel CEFR o idioma de contenido.

### 1.7 Learning Path — Lección individual

Navegación lineal entre items del bloque. Toolbar superior: botón back + `XPProgressBar` (capsule que muestra "item 3 / 7").

**Item de teoría**:

- Título del concepto + `referenceSummary` (resumen tappeable que abre `ReferenceSheetView`).
- **Concept Board**:
  - Grammar → fórmula con tokens coloreados: keywords azules, variables cyan, operadores grises (+, -, =, →). Ej. `Subject + have/has + past participle`.
  - Vocabulary → imagen temática + lista de VocabItem (word + phonetic + translation + SF Symbol + context sentence).
- **Tags coloreados** (pills con SF Symbol):
  - Key (azul + book.fill)
  - Affirmative (verde + checkmark.circle.fill)
  - Negative (rojo + minus.circle.fill)
  - Question (violeta + questionmark.circle.fill)
  - Mistake (rojo + xmark.octagon.fill)
  - Tip (ámbar + lightbulb.fill)
  - Exception (teal + signpost.right.and.left.fill)
- **Narración automática** (TTS): el audio se reproduce y resalta elementos en la UI con scale 1.02x + opacidad 0.1 background, auto-scroll al elemento. Tap en la pantalla = play/pause.

**Item de ejercicio** (Single Select o Fill Blanks son los activos actualmente):

- Instrucción arriba + pregunta.
- 4-5 opciones (pills grandes). Tap para seleccionar + "Check" para validar.
- Feedback visual: verde (correcto) con success message / rojo (incorrecto) con failure message + explicación.
- Swipe left = siguiente, swipe right = anterior.

### 1.8 AI Tutor Chat (sobre la lección)

**Entry point**: FAB flotante (`TutorFABView`) en la esquina inferior derecha de la pantalla de lección. Icono sparkles/lightbulb con badge de mensajes restantes.

Tap → sheet (`.presentationDetents([.medium, .large])`):

- Header: "AI Tutor" + contexto ("Present Perfect · Lesson 3") + botón cerrar.
- Chat con burbujas user (derecha) y tutor (izquierda). Las respuestas del tutor llegan token a token (SSE streaming, cursor parpadeante).
- Input en la parte inferior con contador "7 messages left" (free: 10/lección, guest: 3, premium: ilimitado).

---

## 2. Sistema visual

### 2.1 Colores (dark mode únicamente — la app fuerza `UIUserInterfaceStyle = Dark`)

**Brand color principal**: `#1D49F4` (electric blue). ⚠️ Importante: **no es** `#007AFF` (system blue iOS). Es ligeramente más saturado y eléctrico.

| Rol | Hex |
|---|---|
| Brand / tab selected | `#1D49F4` |
| Button primary (CTA) | `#2748F5` |
| Main background | `#090D18` (dark navy casi negro) |
| Card background | `#1A1C25` |
| Card contrast / separator | `#222531` |
| Button secondary | `#4D4D4D` |
| Text primary | `#E7E8EA` |
| Text secondary | `#B1B2B6` |
| Tab inactive | `#8F9BB3` |
| Speaking dark base | `#0F1115` |

**Colores semánticos**:

| Rol | Hex |
|---|---|
| Success / feedback correct | `#5EBE97` (también `#34C759`) |
| Error / feedback wrong | `#FF4D4F` |
| Warning / tutor hint | `#FFB340` |
| Star rating / highlight | `#FFD60A` |
| Play symbol | `#F7CC6E` |

**Niveles CEFR (medallas)**:

| Tier | Hex | Niveles |
|---|---|---|
| Bronze | `#E67E22` | A1, A2 |
| Silver | `#94A3B8` | B1, B2 |
| Gold | `#F1C40F` | C1, C2 |

### 2.2 Tipografía

**Familia**: SF Pro (sistema iOS). Para web usar **SF Pro** si Apple lo permite o el equivalente más cercano: **Inter** o **Geist Sans**.

Jerarquía que usa la app:

| Estilo | Tamaño | Peso |
|---|---|---|
| Large Title | 34pt | regular |
| Title | 28pt | bold |
| Title 2 | 22pt | bold |
| Title 3 | 20pt | regular |
| Headline | 17pt | semibold |
| Body | 17pt | regular |
| Callout | 16pt | regular |
| Subheadline | 15pt | regular |
| Footnote | 13pt | regular |
| Caption | 12pt | regular |

Fuentes custom definidas en el código: **heading 24pt bold**, **body 16pt regular**, **caption 12pt light**.

### 2.3 Border radius & espaciado

- **Cards**: 12–16pt
- **Botones**: 12–14pt (capsule o rounded rect)
- **Sheets**: 12pt con drag indicator visible
- **Padding botones**: 12–16pt vertical / 20–50pt horizontal
- **Sombras**: opacity 0.05–0.15, radius 2–10pt, borders 1pt
- **Spacing tokens**: small 8 / medium 16 / large 32 (valores adicionales 4, 12, 14, 20, 24, 40, 50)

### 2.4 Iconografía

**SF Symbols exclusivamente**. Cero iconos custom. Para web el equivalente más cercano visualmente: **Lucide** o **SF Symbols exportadas a SVG** (Apple lo permite para "marketing referente a la plataforma"). Recomiendo **Lucide** por practicidad.

Ejemplos de símbolos usados: `book.fill`, `newspaper.fill`, `checkmark.circle.fill`, `xmark.octagon.fill`, `lightbulb.fill`, `signpost.right.and.left.fill`, `sparkles`, `flame.fill` (streak), `mic.fill`, `headphones`, `play.fill`.

---

## 3. Copy real del app

### 3.1 Escenarios de Speaking

> **Atención:** no tengo los títulos literales de escenarios de DB en el project knowledge. Sí tengo los tipos, topics y un archetype confirmado ("Friendly Barista"). Lo siguiente son reconstrucciones plausibles basadas en esos datos — verificá contra `speaking.scenarios` en Supabase antes de publicar.

- **Ordering at a Café** (Task, A2, 5 min) — personaje: Friendly Barista. Objetivos: saludar, pedir una bebida, preguntar por tamaño, pagar.
- **Job Interview for a Marketing Role** (Scenario, B2, 12 min).
- **Small Talk with a New Neighbor** (Scenario, A2, 6 min).
- **Checking In at a Hotel** (Task, B1, 8 min). Objetivos: dar nombre, mostrar reserva, pedir wifi.
- **Should Remote Work Be the Default?** (Discussion, C1, 10 min).
- **Weekend Plans** (Free Talk, B1, libre).

**27 topics disponibles** (con emoji): Travel, Food & Dining, Shopping, Work & Business, Health, Education, Technology, Entertainment, Sports, Family, Weather, Housing, Transportation, Culture, Nature, Finance, Social, Hobbies, etc.

### 3.2 Videos de Listening

> Tampoco tengo títulos literales. Estas son las **categorías reales** y cómo se rotulan en la UI.

- **Dictation English**: Movies, TV Shows, Interviews, Documentary, Talk Shows, Song, News, Business, Animation.
- **Quiz English**: Movies, Documentary, News, Business, Talk Shows, Interviews.

Ejemplos plausibles de títulos de video (tipo "lesson_title" que se muestra en la card):

- "Steve Jobs on failure" (Interviews, medium, 🇺🇸)
- "How the James Webb Telescope works" (Documentary, hard, 🇺🇸)
- "Emma Stone accepts the Oscar" (Movies, easy, 🇺🇸)
- "Why sleep matters | TED" (Documentary, medium, 🇺🇸)
- "BBC News briefing" (News, hard, 🇬🇧)

### 3.3 Lecciones del Learning Path

**Estructura confirmada**: Level → Unit → Lesson. Tipos: `grammar` o `vocabulary`. Ejemplos reconstruidos:

**A1 — Beginner**:

- Unit 1: "Greetings and Introductions" → Lessons: "Hello and Goodbye" (vocab), "I am / You are" (grammar), "Asking Someone's Name" (grammar).
- Unit 2: "Daily Routines" → Lessons: "Telling the Time" (vocab), "Present Simple: I work / She works" (grammar), "Always, Often, Sometimes, Never" (grammar).

**B1 — Intermediate**:

- Unit 3: "Talking About Experiences" → Lessons: "Present Perfect: Have You Ever...?" (grammar), "Travel Vocabulary" (vocab), "Past Simple vs Present Perfect" (grammar).

**C1 — Advanced**:

- Unit 2: "Expressing Nuance" → Lessons: "Hedging and Softening Language" (grammar), "Idiomatic Expressions for Work" (vocab).

### 3.4 Tono del AI Tutor (Learning Path)

Hay reglas textuales del system prompt que definen el tono:

> Keep responses SHORT: max 80 words, max 3 bullet points. Prefer a brief explanation + 1-2 examples over long lists. Stay on topic. When the student got an exercise wrong, explain WHY their choice was incorrect and give additional examples. Be encouraging but honest. Don't over-praise.

**Adaptaciones regionales confirmadas**: para usuarios de AR/UY usa **voseo** ("¿Querés que te explique?"); MX usa tuteo amable; BR usa portugués brasileño coloquial acogedor.

**Ejemplo realista de respuesta del AI Tutor** (nivel A2, usuario de Argentina, pregunta "¿cuándo uso 'do' y cuándo uso 'does'?"):

> ¡Buena pregunta! Depende del sujeto:
>
> - Usás **does** con: he, she, it (tercera persona singular)
> - Usás **do** con: I, you, we, they
>
> Ejemplos:
>
> - *Does she like coffee?* → ella, entonces does
> - *Do you live here?* → you, entonces do
>
> ¿Querés que veamos cómo se arma la pregunta negativa?

**Ejemplo del personaje en Speaking** (escenario café, nivel A2, personaje: Friendly Barista):

> "Hi there! Welcome to Blue Bean Café ☕ — what can I get started for you today?"

> Los escenarios usan recasting explícito en A1-A2 — el personaje repite la forma correcta de manera obvia si el usuario comete un error. En B1-B2 el recasting es implícito. En C1-C2 no hay recasting; el feedback va por el canal de análisis separado.

---

## 4. Personajes AI y personalidades

### 4.1 AI Tutor (Learning Path)

**No tiene nombre propio**. Se presenta en la UI simplemente como "AI Tutor" o "Tu tutor de inglés". Identity interna del prompt:

> You are Fluo's AI English tutor. You help students understand English lessons by answering their questions in {language}.

Es un solo "personaje" funcional, no hay variantes. Usa `gpt-5.4-nano` con temperature 0.7, max 600 tokens. Sin voz (no TTS en el AI Tutor).

### 4.2 Personajes de Speaking

**Cada escenario tiene un personaje asignado** (tabla `speaking.characters`). Los personajes tienen:

- `name` (nombre propio)
- `voice_id` (una de 6 voces OpenAI: alloy, echo, fable, onyx, nova, shimmer)
- `base_archetype` (etiqueta corta, ej. "Friendly Barista")
- `base_system_prompt` (personalidad base)

> No tengo la lista completa en el knowledge. El archetype confirmado es "Friendly Barista". Podés asumir una lista similar para la landing (verificá contra DB antes de usar nombres literales):

- **Maya** — Friendly Barista (voice: nova) — café scenarios
- **James** — HR Manager (voice: onyx) — job interview scenarios
- **Sofia** — Travel Guide (voice: shimmer) — tourism scenarios
- **David** — Business Partner (voice: echo) — work/negotiation scenarios
- **Emma** — Conversation Partner (voice: fable) — free talk, discussions

---

## 5. Niveles soportados

**CEFR A1–C2**, rotulados exactamente así en la app (código CEFR es visible para el usuario):

| Código | Nombre mostrado | Tier de color |
|---|---|---|
| A1 | Beginner | Bronze `#E67E22` |
| A2 | Elementary | Bronze `#E67E22` |
| B1 | Intermediate | Silver `#94A3B8` |
| B2 | Upper-Intermediate | Silver `#94A3B8` |
| C1 | Advanced | Gold `#F1C40F` |
| C2 | Proficient | Gold `#F1C40F` |

El usuario puede elegir nivel manualmente en onboarding o hacer un **Level Test** (búsqueda binaria adaptativa, 5 preguntas, ~1-2 min) que arranca en B1 y recomienda un nivel.

---

## 6. Info adicional útil para la landing

- **Tiers**: Guest (limitado, sin login) / Free (metering diario: 1 lección/día Learning, 1 actividad/día Listening, Speaking 1 sesión cada 3 días — durante primeros 7 días post-signup "Welcome Burst" con 3/día y cooldown 1d) / Premium (ilimitado).
- **Pricing**: mensual $6.99 (trial 3 días) / anual $39.99 (trial 7 días). Subscription Group "Membership".
- **Target markets**: LatAm (especialmente MX, AR, CO, CL), Brasil, España, US Hispanic, Canadá Hispanic.
- **Idiomas de interfaz**: Español (es), Portugués BR (pt), Inglés (en). **Contenido aprendido**: solo inglés (por ahora).
- **Immersion mode**: opción de mantener UI en inglés aunque el idioma nativo sea es/pt.
- **Dominio actual**: `fluo.linguatech.app` (subdomain — setup pendiente post-launch). Legacy `/lingualoop/` redirigido.
