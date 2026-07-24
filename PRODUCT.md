# Product

## Register

brand

## Users

People curious about green tea's actual health effects, but skeptical of wellness-industry hype: knowledge workers looking for a calmer alternative to coffee, and health-conscious readers who want claims backed by research rather than testimonials. They arrive from search or social, read in a quiet moment (morning, a work break), and are deciding whether to trust this brand enough to hand over their email. There is no cart yet; the entire relationship is content and a weekly newsletter.

## Product Purpose

An editorial brand site for green tea that teaches (benefits, ritual, brew craft) and converts readers into "The Slow Letter" weekly email subscribers. Success is signups, not purchases; there is no commerce layer yet. The site itself has to embody the thing it's selling: unhurried, evidence-led, quiet confidence.

## Brand Personality

Calm, evidence-led, unhurried. The voice cites research instead of making miracle claims ("no miracle claims — just what decades of research keep finding"), and paces itself: "steeped, never rushed." Confidence comes from restraint, not volume.

## Anti-references

Generic SaaS landing page patterns: hero-metric templates (big number + label + gradient accent), gradient text, glassmorphism-as-decoration, identical icon-heading-text card grids, modal-first interaction, side-stripe accent borders. Nothing here should read as templated AI-generated marketing.

## Design Principles

- **Evidence over hype.** Every benefit claim is scoped and sourced-feeling ("in order of evidence," "the strongest signal in the research"). No superlatives without a reason attached.
- **Quiet is the flex.** Confidence is expressed through restraint: sparing accent color, no urgency CTAs, no countdown timers or FOMO copy.
- **Motion drifts, never bounces.** Organic, slow easing (blob morphs, canvas particles, scroll reveals) is the brand's physical voice — never spring/elastic, never abrupt.
- **One accent, used like ink.** The green accent and gold kicker are structural signals (links, emphasis, CTAs), not decoration; they stay rare enough to keep meaning.
- **The site practices its own ritual.** Pacing, copy rhythm, and interaction (the steep timer, the day-in-five-cups scroll) should feel as unhurried as the brand claims tea itself is.

## Accessibility & Inclusion

WCAG 2.1 AA, with a strict reduced-motion doctrine on top: because so much of the brand voice is carried by motion (blob morphing, canvas tea-leaf field, grain animation, scroll reveals), every motion-driven brand moment must ship a static fallback that is equally complete, not a degraded stub, under `prefers-reduced-motion: reduce`. Existing baseline already includes skip-link, `aria-live` regions on the timer and form, `:focus-visible` rings, and semantic landmarks — maintain and extend this bar on all new work.
