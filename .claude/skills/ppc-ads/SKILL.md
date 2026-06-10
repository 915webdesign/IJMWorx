---
name: ppc-ads
description: >-
  Generate on-brand PPC / paid-search assets for IJM Worx — Google Ads search
  campaigns, responsive search ads (RSAs), keyword sets, negative-keyword lists,
  ad extensions/assets, and landing-page briefs. Use when building, refreshing,
  or expanding paid search ads. Reads the brand-intelligence files so every
  output matches IJM's audience, positioning, voice, and buyer journey, and
  respects Google Ads character limits and policy.
---

# PPC Ads — IJM Worx

Generate paid-search assets that sound like IJM, speak to the right buyer at the
right stage, and import cleanly into Google Ads.

## Step 1 — Read the brand brain first (required)

Before writing a single headline, read all four files in `brand-intelligence/`:

- `audience-delight.md` — WHO you're talking to, their words, their fears.
- `market-positioning.md` — WHAT IJM claims and how it's different.
- `creator-style.md` — HOW IJM sounds (the voice rules below come from here).
- `customer-journey.md` — WHERE the buyer is and what closes them.

Every asset must be defensible against these files. If a headline could belong
to any pool company, it's wrong — rewrite it (see `creator-style.md`).

## Step 2 — IJM Worx fast facts (single source of truth)

- **Business:** IJM Worx — full-service outdoor living builder, El Paso, TX. Licensed since 2007.
- **Owner / team:** Izaak Medina (owner/PM), Dorian (design lead).
- **Phone:** 915-922-9618 · **Site:** https://www.ijmworx.com · **Address:** 8811 Alameda Ave, El Paso, TX 79907
- **Proof:** 4.9 stars, 36 Google reviews, BBB A+, licensed & insured.
- **Offers:** Free estimate, **free 3D design consultation**, permits/inspections handled, financing **from $149/mo**.
- **The 8 services (= the 8 ad groups):**
  1. Custom Pools
  2. Pergolas / Patio Covers
  3. Outdoor Kitchens
  4. Hardscape / Pavers / Retaining Walls
  5. Landscape Lighting
  6. Waterfalls / Water Features
  7. Concrete / Flatwork / Stamped Concrete
  8. Landscape Design / Full Backyard
- **Service area (location targeting):** El Paso (incl. Upper Valley, Westside, Northeast), Horizon City, Socorro, San Elizario, Canutillo, Vinton (TX), and Sunland Park (NM).

## Step 3 — Google Ads rules & limits (never violate)

**Responsive Search Ad (RSA):**
- Headlines: up to **15**, **≤30 characters** each. Provide 10–15.
- Descriptions: up to **4**, **≤90 characters** each. Provide all 4.
- Display paths: 2 fields, **≤15 characters** each.
- Make headlines work in any order. Vary angles: service, location, offer, proof, outcome.
- Pin sparingly. If pinning, pin one brand/credential headline to position 1 OR 3 max, and keep the rest unpinned so Google can optimize.

**Assets / extensions:**
- Sitelink text **≤25 chars**; two description lines **≤35 chars** each.
- Callouts **≤25 chars**. Structured snippet values **≤25 chars**.
- Promotion/price assets have their own short fields — keep them tight.

**Match-type & structure strategy:**
- One Search campaign, **8 ad groups by service** (tight themes, ~8–15 keywords each).
- Lead with **exact** and **phrase** match on high-intent "[service] + [city]" terms. Use **broad** only alongside a conversion-based bid strategy and tight negatives.
- Maintain **one shared negative-keyword list** for the campaign (don't duplicate per ad group).
- Bidding: start **Maximize Clicks** for the learning phase, then switch to **Maximize Conversions / Target CPA** once conversion tracking is solid and ~15–30 conversions have accrued.

**Policy:** no unverifiable superlatives ("the best"), no fake urgency, no trademark misuse. "4.9 stars / 36 reviews," "licensed since 2007," and "free 3D design" are all factual and allowed.

## Step 4 — Voice rules (from creator-style.md)

- Warm, local, transformational. Lead with the homeowner's outcome ("From dirt to a desert oasis"), then prove it.
- Reassure on the #1 fear — flaky contractors — by showing reliability (on time, clean, finishes, permits handled, since 2007).
- **Banned voice:** gatekeeping or aggressive copy ("Serious Homeowners Only," "Not shopping. Not dreaming."). It tested Poor and is off-brand.
- Name financing where money is the barrier. Talk about the *whole* backyard, not just one product.

## Step 5 — Match the message to the buyer stage (from customer-journey.md)

- **Discovery / high-intent search:** service + city, free estimate, 3D design.
- **Evaluation:** proof (reviews, since 2007, licensed), one-team full-service, "we handle permits."
- **Objection-aware:** financing for price, reviews/"crews that show up" for the ghosting fear, 3D design for "I can't picture it."

## Step 6 — Output format

Write deliverables into `campaigns/google-ads-YYYY-MM/`:

- `README.md` — what it is, what audit gaps it fixes, how to import, what to confirm.
- `01-campaign-build.md` — settings, budget/bidding, and all 8 ad groups (keywords + RSAs) in human-readable form.
- `02-negative-keywords.md` — the shared negative list, grouped with rationale.
- `03-extensions-and-assets.md` — sitelinks, callouts, structured snippets, call, location, price (financing), promotion, image/lead-form guidance.
- `04-landing-page-briefs.md` — a brief per service so ads stop pointing at one generic page.
- `05-tracking-and-launch-checklist.md` — conversion-tracking fixes and a pre-launch QA list.
- `import/keywords.csv`, `import/responsive-search-ads.csv`, `import/negative-keywords.csv` — Google Ads Editor–ready.

## Step 7 — Quality checklist before you finish

- [ ] Every headline ≤30 chars; every description ≤90 chars (count them).
- [ ] No banned/gatekeeping voice; nothing that reads as generic-pool-company.
- [ ] All 8 services covered (the current account's biggest gap is pool-only coverage).
- [ ] Negatives block jobs/DIY/cheap/above-ground/repair/"pool table" style noise.
- [ ] Final URLs point to the most relevant page (flag where service landing pages still need to be built).
- [ ] Extensions present: sitelinks, callouts, structured snippets, call, location, financing/price.
- [ ] CSVs are valid and column headers match Google Ads Editor.

## Reference: how this connects to the account audit

The April 2026 Google Ads audit found the account running **one ad group, pool
keywords only** (7 of 8 services invisible), Maximize Clicks bidding, blocked
call asset, half-broken conversion tracking, and no service-specific landing
pages. This skill exists to produce the build that fixes those gaps. When the
account is managed by a third party, output is a **build-ready handoff pack** —
coordinate account access before importing.
