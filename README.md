# IJM Worx — Marketing Content System

A brand-intelligence + skills system that lets Claude Code produce on-brand
marketing content for **IJM Worx**, El Paso's full-service outdoor living builder
(custom pools, pergolas, outdoor kitchens, hardscape, lighting, water features,
concrete, and landscape design — licensed since 2007, 4.9★ / 36 reviews).

Maintained by **915 Web Design** (David Negrete · david@915webdesign.com).

## How it works

```
brand-intelligence/        ← the "brand brain" — four files that define IJM
  audience-delight.md         WHO we're talking to (their words, fears, triggers)
  market-positioning.md       WHERE IJM stands vs. competitors, and the white space
  creator-style.md            HOW IJM sounds (warm, local, transformational)
  customer-journey.md         the buyer's PATH (discover → evaluate → close → refer)

.claude/skills/
  ppc-ads/SKILL.md          ← reads the four files and generates paid-search assets

campaigns/
  google-ads-2026-06/       ← first deliverable: full 8-service Google Ads build
```

The four brand-intelligence files are the single source of truth. Any skill that
writes audience-facing content reads them first, so the output sounds like IJM —
not a generic contractor. Update the brand files and every future asset improves.

## What's here now

- **Brand intelligence** — all four files, authored from IJM's real reviews, SOWs,
  audits, and website (not placeholder content).
- **`ppc-ads` skill** — generates Google Ads search campaigns, RSAs, keywords,
  negatives, extensions, and landing-page briefs within Google's character limits.
- **June 2026 Google Ads build** (`campaigns/google-ads-2026-06/`) — a build-ready,
  Editor-importable campaign that fixes the gaps from the April 2026 Google Ads
  audit (pool-only coverage, broken tracking, missing assets, no service pages).

## Using the PPC skill

In a Claude Code session in this repo, invoke the skill (e.g. ask to "build/refresh
the IJM Google Ads campaign with the ppc-ads skill"). It will read
`brand-intelligence/`, then write a dated build under `campaigns/`. Start with that
campaign's `README.md`, then the numbered files, then import the CSVs in `import/`.

## Roadmap (same brand brain, more skills)

The system is built to extend. Natural next skills that reuse these four files:
- GBP / Google Business Profile posts
- Service landing-page copy (the briefs in the June build are the starting point)
- Email & follow-up sequences (speed-to-lead matters — see `customer-journey.md`)
- Social / review-response content

## Key facts (quick reference)

- **Phone:** 915-922-9618 · **Site:** https://www.ijmworx.com · **Email:** ijmworx@gmail.com
- **Address:** 8811 Alameda Ave, El Paso, TX 79907
- **Service area:** El Paso (Upper Valley, Westside, Northeast), Horizon City, Socorro, San Elizario, Canutillo, Vinton (TX), Sunland Park (NM)
- **Offers:** free estimate, free 3D design, permits handled, financing from $149/mo
