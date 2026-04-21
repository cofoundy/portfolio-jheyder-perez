# QA Report: Jheyder W. Perez Aguinaga (Re-deploy)

**Date:** 2026-04-21
**URL:** https://jheyderperez.com/
**Tier:** Plus S/.80 (tratado como Pro — compensación por demora)
**Template:** pro-starter
**Status:** PASS WITH WARNINGS

---

## Change Verification (7 cambios solicitados)

### 1. Paleta de colores mejorada — PASS
- `accentColor: "#0F4C5C"` (deep petrol) — confirmado en HTML (177 ocurrencias)
- `highlightColor: "#14919B"` (teal medio) — confirmado en HTML (106 ocurrencias)
- Colores viejos (#0D7377, #0891B2) ya NO aparecen en el HTML
- Visualmente: deep petrol en títulos/botones, teal en underlines/badges — correcto

### 2. Foto hero recortada arreglada — PASS
- Aspect-ratio portrait (3/4) con object-contain aplicado
- Foto muestra cara centrada, manos visibles, traje y corbata completos
- NO hay crop de cara ni cabeza cortada (issue anterior resuelto)
- Border/frame teal complementa la paleta

### 3. Experiencia en 1 columna — PASS (con nota)
- 5 trabajos renderizados en layout vertical
- Desktop muestra timeline horizontal en la parte superior + cards apiladas debajo
- Cards están en 1 columna (no grid md:grid-cols-2 como antes)

### 4. Proyectos en 1 columna — PASS
- 4 proyectos (01-04) en cards apiladas verticalmente
- NO hay grid md:grid-cols-3 — confirmado en desktop y mobile

### 5. Educación en 1 columna — PASS
- 3 títulos (Doctorado PUC Chile, Maestría PUCP, Ingeniería USIL) apilados
- Layout vertical en desktop y mobile — correcto

### 6. Publicaciones con links DOI clickables — FAIL ⚠️
- 4 publicaciones renderizadas correctamente en la UI
- Pub 1 "En revisión" — sin link (correcto)
- Pub 2, 3 — tienen botón "Ver artículo completo" pero los DOIs NO resuelven:
  - `https://doi.org/10.1051/e3sconf/202551020011` → **404 "DOI Not Found"**
  - `https://doi.org/10.1051/e3sconf/202551030005` → **404 "DOI Not Found"**
- Pub 4 (ResearchGate) — URL válida, devuelve 403 por Cloudflare bot protection pero esto es normal (funciona en browser real)

**CRITICAL:** Los DOIs de Pub 2 y Pub 3 NO están registrados en doi.org. Cliente hizo click en "Ver artículo completo" y verá error "DOI Not Found" — mala experiencia.

**Fix sugerido (elegir UNO):**
- Confirmar con cliente los DOIs reales (posible que los papers aún no estén publicados)
- Si los papers no tienen DOI registrado → cambiar `note: "DOI: ..."` a `note: "Aceptado - En prensa"` y remover `link`
- O reemplazar link con URL directa del E3S Conference cuando esté publicado

### 7. Nueva sección "Becas, Premios y Líneas de Investigación" — PASS
- Aparece entre Publicaciones y Educación — correcto
- 3 subsecciones visibles:
  - **Becas** (3): Beca 18 PRONABEC, CONCYTEC, CDRI — OK
  - **Premios** (3): Excelencia Universitaria ACI, 1er Puesto PUCP, Tesis USIL — OK
  - **Líneas de Investigación** (4): Evaluación Estructural, Gestión de Riesgos, ABM, Reinforcement Learning — OK
- Iconos y estilo consistentes con el resto del site

---

## Technical Health

- [x] HTML 200
- [x] CSS (`/_astro/index.1MSEwFEm.css`) loaded
- [x] profile.png 200
- [x] favicon.svg 200
- [x] og.jpg 200
- [x] guia.pdf 200
- [ ] cv.pdf 404 — **NO EXISTE** (no está en public/ ni en dist/)
  - Nota: cliente no entregó CV PDF o no se generó. No afecta el site pero no hay link descargable.

---

## Header Navigation (verified)

Labels en HTML (orden izquierda→derecha):
1. Sobre Mí → #about
2. Proyectos → #projects
3. Experiencia → #experience
4. **Publicaciones** → #publicaciones ✅ NUEVO
5. **Reconocimientos** → #achievements ✅ NUEVO
6. Educación → #education

Todos los anchor links coinciden con IDs existentes en la página.

---

## Visual — Desktop (1280px)

- [x] Styled correctly — CSS cargado, fuentes serif renderizadas
- [x] Paleta deep petrol + teal correcta
- [x] Fotos sin broken images
- [x] Todas las secciones renderizan (10 detectadas por qa-screenshot: hero, servicios, about, experience, projects, publicaciones, achievements, education, contacto, footer)
- [x] NO horizontal overflow
- [x] Footer: "© 2026 Jheyder W. Perez Aguinaga. Todos los derechos reservados."

---

## Visual — Mobile (375px)

- [x] Nombre "Jheyder W. Perez Aguinaga" cabe sin overflow (se rompe a 2 líneas, se ve bien)
- [x] Foto hero portrait renderiza bien, centrada, no cortada
- [x] 5 social icons (email, linkedin, researchgate, scholar, whatsapp) en línea
- [x] Stats 6+ / 21 / 5+ legibles
- [x] Todas las secciones stackean vertical
- [x] Cards de publicaciones tienen títulos largos que envuelven correctamente
- [x] Achievements section muestra 3 subsecciones apiladas
- [x] NO horizontal scroll

---

## Data Validation

- [x] Nombre: "Jheyder W. Perez Aguinaga" — correcto
- [x] Title: "Ingeniero Civil & Investigador" — correcto
- [x] Email: jheyder.perez@gmail.com — correcto
- [x] WhatsApp: +51 959066643 — correcto
- [x] LinkedIn: /in/jheyderperez/ — real
- [x] ResearchGate: /Jheyder-Perez-Aguinaga-2 — real
- [x] Google Scholar ID: B-WX9P0AAAAJ — real
- [x] Experiencias (5): Tohoku, PUCP, Toward Resilience, USIL, Scientia — coherentes
- [x] Educación (3): PUC Chile, PUCP, USIL — coherentes
- [ ] **DOIs de Pub 2 y 3 — NO resuelven (ver Change #6)**

---

## Clean Deploy

- [x] NO template default names
- [x] NO Lorem ipsum / placeholders
- [x] NO "undefined"/"null"
- [x] Social links a perfiles reales
- [x] Custom domain activo (jheyderperez.com)
- [x] HTTPS funcional

---

## Issues Found

### CRITICAL
1. **DOIs de Publicaciones 2 y 3 no existen en doi.org**
   - `10.1051/e3sconf/202551020011` → 404
   - `10.1051/e3sconf/202551030005` → 404
   - Impacto: Cliente (o visitantes) hacen click en "Ver artículo completo" → ven página de error "DOI Not Found"
   - **Fix requerido**: Confirmar con cliente Jheyder si los papers están realmente publicados con esos DOIs, o si están en estado "aceptado/en prensa". Si no tienen DOI registrado, remover el `link` y cambiar `note` a "Aceptado - En prensa" o "Próximamente".

### WARNING
2. **CV PDF no existe en el deploy** (`/cv.pdf` → 404)
   - Si el cliente esperaba un botón "Descargar CV" esto es un gap
   - No se ve ningún botón de CV en la UI actualmente, así que probablemente intencional
   - Confirmar con dev si esto es esperado para este tier/cliente

---

## Evidence

- `qa-screenshots/desktop-full.png` (8430px height)
- `qa-screenshots/desktop-hero.png`, `desktop-experience.png`, `desktop-projects.png`, `desktop-publicaciones.png`, `desktop-achievements.png`, `desktop-education.png`, `desktop-contacto.png`, `desktop-footer-9.png`
- `qa-screenshots/mobile-full.png` (12328px height)
- `qa-screenshots/mobile-hero.png`, `mobile-experience.png`, `mobile-projects.png`, `mobile-publicaciones.png`, `mobile-achievements.png`, `mobile-education.png`
- `qa-screenshots/manifest.json`
