# QA Report: Jheyder W. Perez Aguinaga

**Date:** 2026-03-25
**URL:** https://cofoundy.github.io/portfolio-jheyder-perez/ (redirects to jheyderperez.com)
**Custom Domain:** jheyderperez.com
**Tier:** Pro (S/.120)
**Status:** FAIL

---

## Data Validation

- [x] Name matches source — "Jheyder W. Perez Aguinaga" matches CV/form
- [x] Email matches source — jheyder.perez@gmail.com matches client-meta.md
- [x] Title matches source — "Ingeniero Civil & Investigador" from CV
- [x] Companies are real — Tohoku University, PUCP, Toward Resilience Corp, USIL, Scientia Concrete — all from CV
- [x] Education institutions are real — PUC Chile, PUCP, USIL — all from CV
- [x] Publications match source — 4 publications listed, all from research-notes.md (6 total in CV, 4 shown)
- [x] Stats verified — "6+" publications (matches CV), "21" institutions (matches CV: 21 IE evaluated), "5+" years (matches 2020-present)
- [x] No hallucinated data detected

## Section Rendering

- [x] Hero — Name, title, tagline, photo, CTA button, social icons, stats
- [x] Services — "Evaluacion Estructural" and "Asesoria en Investigacion" with descriptions
- [x] About — Full professional bio paragraph + 12 skills/specialties chips
- [x] Experience — 5 positions with timeline (Tohoku, PUCP, Toward Resilience, USIL, Scientia)
- [x] Projects — 4 research projects (GTEM, LAdERA, 21 IE, RL Evacuation)
- [x] Publications — 4 publications with Journal/Conference badges, venue names, notes
- [x] Education — 3 entries (PUC Chile Doctorado, PUCP Maestria, USIL Ingenieria)
- [x] Contact — WhatsApp button + email button
- [x] Footer — Name, title, social icons, copyright 2026

## Social Links

- [x] Email — mailto:jheyder.perez@gmail.com
- [x] LinkedIn — https://www.linkedin.com/in/jheyderperez/ (present in hero)
- [x] ResearchGate — https://www.researchgate.net/profile/Jheyder-Perez-Aguinaga-2 (present in hero)
- [x] Google Scholar — https://scholar.google.com/citations?user=B-WX9P0AAAAJ&hl=es (hero + publications CTA)
- [x] WhatsApp — https://wa.me/51959066643 (hero + contact section)

## Clean Deploy

- [x] No "Powered by" / "Made with" / "Built with" watermarks
- [x] No "Lorem ipsum" / placeholder text
- [x] No template links (View source, Fork this, etc.)
- [x] No "undefined" or "null" in visible content
- [x] No broken link text ("#" or "javascript:void(0)")
- [x] Footer has only client branding (no Astro/Cofoundy logos)

## Visual / Design

- [x] Accent color is teal #0D7377 — matches spec
- [x] Highlight color #0891B2 used for CTAs and stat values
- [x] Professional photo renders correctly (suit, teal tie, proper crop)
- [x] Typography: Libre Baskerville (headings) + Source Sans 3 (body) — clean/academic
- [x] Desktop layout is polished — two-column hero, card-based sections
- [x] Mobile responsive — single column, proper stacking, readable text
- [x] Scroll reveal animations present (IntersectionObserver)

## Technical Health

- [x] Build succeeds — `astro build` completes without errors
- [x] CSS exists — /_astro/index.AUeIiJvV.css (HTTP 200 on gh-pages)
- [x] Profile image — /profile.png (HTTP 200 on gh-pages)
- [x] Favicon — /favicon.svg (HTTP 200 on gh-pages)
- [x] OG image — /og.jpg exists on gh-pages
- [x] Structured data (JSON-LD) present with correct schema.org Person markup
- [x] Meta tags (og:title, og:description, og:image, twitter:card) present

## CRITICAL Issues Found

### 1. DOMAIN NOT RESOLVING (BLOCKER)
- **jheyderperez.com** returns NXDOMAIN — domain does NOT exist in DNS
- The domain is NOT in the Cofoundy Namecheap account
- GitHub Pages status is "errored" because CNAME points to non-existent domain
- **The site is completely inaccessible to anyone**
- HTTPS is not enforced (http:// only configured)

### 2. Dirty gh-pages branch
- `node_modules/` directory is deployed to gh-pages (9+ entries)
- `dist/` directory present on gh-pages root
- `public/` directory present on gh-pages root
- These indicate the deploy script was not used or had issues

## Minor Notes

- LinkedIn URL (linkedin.com/in/jheyderperez/) returns 999 — LinkedIn blocks curl, but URL format is valid
- Only 4 of 6 publications shown (the 2 omitted are theses, reasonable editorial choice)
- ResearchGate and GitHub URLs in research-notes.md marked as "pendiente research" — ResearchGate URL was found and added to config

## Action Required

1. **Purchase jheyderperez.com** via `./scripts/namecheap.sh buy jheyderperez.com` (MUST ask user first)
2. **Configure DNS** via `./scripts/namecheap.sh dns jheyderperez.com`
3. **Enable HTTPS enforcement** on GitHub Pages after DNS propagates
4. **Clean redeploy** via `./scripts/deploy.sh jheyder-perez` to fix dirty gh-pages branch
5. After domain is live, re-run QA to confirm accessibility

## Evidence

- desktop-full.png — Full page desktop screenshot (1280px)
- desktop-hero.png — Hero section with photo, name, stats
- desktop-servicios.png — Services section (2 cards)
- desktop-publicaciones.png — Publications with badges
- desktop-contacto.png — Contact section with WhatsApp/email
- desktop-footer-8.png — Footer with branding
- mobile-full.png — Full page mobile screenshot (375px)
- mobile-hero.png — Mobile hero layout
