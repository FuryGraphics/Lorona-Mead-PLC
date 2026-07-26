# Lorona Mead, PLC — Design Brainstorm

## Reference
Replicating the layout DNA of https://www.12pointconstructionllc.com/ — a clean, modern, trust-driven local-business site — re-themed for a high-end criminal defense attorney.

## Three Approaches

### 1. Dark Premium Legal
**Very Brief Intro:** Deep charcoal/near-black backgrounds with gold accents, serif headlines, and cinematic photography. Conveys authority, gravitas, and exclusivity.
**Probability:** 0.07

### 2. Light Editorial Justice
**Very Brief Intro:** Crisp white backgrounds with navy and bronze accents, magazine-style layouts, and generous whitespace. Conveys transparency and approachability.
**Probability:** 0.04

### 3. Warm Traditional Firm
**Very Brief Intro:** Warm cream and deep mahogany tones with classic serif typography and textured backgrounds. Conveys heritage and trustworthiness.
**Probability:** 0.03

---

## Chosen Approach: Dark Premium Legal

**Design Movement:** Dark luxury editorial — inspired by high-end law firm branding and premium service websites.

**Core Principles:**
1. Dark backgrounds (#0a0a0a, dark navy variants) with gold (#C9A84C) as the sole accent
2. Serif headlines (Playfair Display) paired with clean sans-serif body (Inter)
3. Generous whitespace within dark sections — let content breathe
4. Scroll-triggered fade-up animations for section-by-section reveal

**Color Philosophy:**
- Background: #0a0a0a (near-black) with #111418 and #0d1117 section variants
- Primary accent: #C9A84C (gold) — used for buttons, underlines, stat numbers, hover states
- Text: #f5f5f5 (primary), #a0a0a0 (secondary/muted)
- Gold gradient: linear-gradient(135deg, #C9A84C, #B8973E) for buttons

**Layout Paradigm:**
- Full-width dark sections with centered max-width content containers
- Asymmetric hero with large H1 left-aligned, reviews badge, dual CTA
- Grid-based practice area cards with image tops
- Split CTA band with contrasting background
- Stat overlay on photo for story section
- Numbered process steps in horizontal layout

**Signature Elements:**
1. Gold underline accent beneath every H1
2. Star-rating + Google reviews badge in hero
3. Floating gold "Call Now" button on mobile

**Interaction Philosophy:**
- Sticky nav: transparent over hero → solid dark on scroll
- Mega-dropdown for Practice Areas with grouped sub-links
- Smooth scroll-triggered fade-up reveals via Framer Motion
- Hover states: gold underline reveals, card lift effects

**Animation:**
- Framer Motion fade-up reveals on scroll (y: 24 → 0, opacity: 0 → 1, duration: 0.5s)
- Staggered card entrances (60ms delay between items)
- Nav background transition on scroll (200ms ease-out)
- Button hover: subtle gold glow + scale(1.02)

**Typography System:**
- H1/H2: Playfair Display, 700 weight, serif
- H3/H4: Playfair Display, 600 weight
- Body: Inter, 400/500 weight
- Small/labels: Inter, 500 weight, uppercase, letter-spacing

**Brand Essence:** Phoenix's premier criminal defense firm — for those who demand aggressive, experienced representation. Authoritative. Relentless. Trusted.

**Brand Voice:**
- Headlines: Direct, confident, no hedging. "Phoenix Criminal Defense Attorney"
- CTAs: Action-oriented. "Get Your Free Consultation"
- Microcopy: Reassuring but firm. "Available 24/7 when you need us most."
- Example lines: "Charged with a crime? Get a free, confidential case review." / "Decades of courtroom experience. Every case. Every charge."

**Wordmark & Logo:** "LM" monogram in gold with serif styling, or "LORONA MEAD" in Playfair Display with "PLC" in smaller Inter beneath.

**Signature Brand Color:** #C9A84C — a warm, authoritative gold.
