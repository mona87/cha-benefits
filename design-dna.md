# Design DNA — extracted from teabenefits.vercel.app

> Extracted with the `design-language` skill · 2026-07-23
> Tokens read verbatim from production CSS (`css/base.css`). The redesign in
> `index.html` reuses this language but none of the source copy, imagery, or layout.

## What makes the source feel the way it does

Three load-bearing decisions:

1. **Fraunces at weight 300 with the optical-size axis on.** Headlines are set
   *light*, not bold — presence comes from size (`clamp(3.1rem, 7.5vw, 6.4rem)`)
   and tight line-height (1.02), while `font-optical-sizing: auto` lets the
   variable font redraw itself sharper at display sizes. One word per headline
   flips to *italic* in the accent color — that single italic is the brand's voice.
2. **A warm oklch palette, never pure white or black.** The canvas is warm paper
   (`oklch(95.9% 0.008 79)`), ink is warm near-black, and dark sections use a
   deep pine "band" green with **gold** kickers instead of the green accent.
   Accent green is used like ink — sparingly.
3. **Organic motion everywhere, but quiet.** Morphing blob border-radii (16–24s
   loops), a fixed SVG-turbulence grain overlay at 0.07 opacity animated in 4
   steps, and scroll-reveals that rise 34px on `cubic-bezier(.22,.9,.28,1)` with
   .08s stagger. Nothing bounces; everything drifts.

## Tokens (verbatim)

| Token | Value |
|---|---|
| `--canvas` | `oklch(95.9% 0.008 79)` |
| `--canvas-card` | `oklch(99.5% 0.004 79)` |
| `--accent` | `oklch(52% 0.145 152)` |
| `--accent-deep` | `oklch(45% 0.122 152)` |
| `--band` | `oklch(26% 0.048 168)` |
| `--band-mid` | `oklch(34% 0.050 168)` |
| `--gold` | `oklch(72% 0.105 73)` |
| `--ink` | `oklch(24% 0.022 55)` |
| `--ink-soft` | `oklch(44% 0.027 58)` |
| `--on-dark` | `oklch(95.9% 0.008 79)` |
| `--on-dark-soft` | `oklch(95.9% 0.008 79 / 0.70)` |
| `--serif` | `"Fraunces", serif` |
| `--sans` | `"Karla", sans-serif` |
| `--ease-out` | `cubic-bezier(.22,.9,.28,1)` |
| `--ease-soft` | `cubic-bezier(.4,.05,.2,1)` |

## Recurring moves

- Kickers: Karla 600 · .75rem · `.30em` tracking · uppercase · 2rem × 1px rule
  before · accent-deep on light, gold on dark.
- Buttons: pill (99px), uppercase Karla 600 `.16em`, solid green / ghost outline,
  `translateY(-3px)` hover with a green-tinted soft shadow.
- Frames: `border-radius: 46% 54% 52% 48% / 55% 47% 53% 45%` morphing via
  `blobMorph` keyframes; an offset low-opacity accent blob behind.
- Section titles: centered, `text-wrap: balance`, em → italic accent.
- Max content width 1200px, gutter `clamp(1.25rem, 4vw, 3.5rem)`.

## How the redesign diverges (deliberately)

Same language, new register: the redesign opens **dark** — a full-viewport band-
green hero with a canvas flow-field of drifting tea-leaf particles (the "hero
video" element) — then alternates back to paper. Benefits become an editorial
numbered index instead of a card grid; the brew guide becomes a working steep
timer with a liquid that deepens in colour; a variety marquee and a giant 茶
footer wordmark close the loop. All tokens above are used verbatim.
