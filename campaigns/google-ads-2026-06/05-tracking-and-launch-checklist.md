# Tracking & Launch Checklist

The April 2026 audit found conversion tracking **partially broken** — only ~5 of
23+ real leads were captured, and "WEBSITE CLICK CALLS" shows "Needs attention."
Ads optimize toward whatever they can measure, so fixing tracking is the
highest-leverage step. Work this list top to bottom.

## A. Fix conversion tracking (do this first)
- [ ] **Repair "WEBSITE CLICK CALLS."** Every tap on the phone number at
      ijmworx.com is currently invisible. Re-implement the click-to-call event
      (Google tag / GA4) and confirm it fires.
- [ ] **Track every Wix form.** Only ~5 of 23+ submissions reached Google Ads.
      Add conversion tracking to **all four** forms (Contact, Contact–Estimate,
      Free Estimate Ad Form, Estimate page) via GA4 event import or a Wix→Google
      tag, and verify with a test submission.
- [ ] **Confirm primary conversions** = form submit + qualified call. Mark
      micro-actions (page views, etc.) as secondary so bidding optimizes to leads.
- [ ] **Add a qualified-call filter** — count calls ≥ 30–60 seconds so ad-tap
      events don't inflate "conversions."
- [ ] **Import GA4 conversions** as a redundant check on form events.
- [ ] (Later) **Offline conversion import** — feed closed deals back in so
      bidding learns which leads actually become customers.

## B. Account hygiene (from the audit)
- [ ] **Accept "Call and Messaging Ads Terms"** — unblocks the call asset.
- [ ] **Archive dead campaigns** `IJM WORX` and `IJM 3` (Poor strength, paused).
- [ ] **Consolidate** into this single Search campaign as the source of truth.
- [ ] **Apply the shared negative list** (`02-negative-keywords.md`); stop
      duplicating negatives per campaign.
- [ ] **Link** Google Business Profile (location asset) and GA4.

## C. Launch settings
- [ ] Location targeting = the service-area list, set to **Presence**.
- [ ] Networks: Search only to start (Partners/Display off).
- [ ] Bidding: **Maximize Clicks** for learning → **Maximize Conversions /
      Target CPA ~$120** once tracking is solid and ~15–30 conversions accrue.
- [ ] Budget set; ad schedule reviewed (business hours + early evening unless
      after-hours calls are handled).
- [ ] All RSAs show **Good/Excellent** Ad Strength; nothing pinned into a corner.
- [ ] All assets attached (call, location, sitelinks, callouts, snippets, price,
      images).

## D. Pre-launch QA
- [ ] Spot-check headlines ≤30 chars, descriptions ≤90 chars (the CSVs are built
      to spec, but verify after import).
- [ ] No disapprovals; Final URLs load and forms work.
- [ ] Fire a **test lead** (form + call) and confirm it lands in Google Ads
      **and** in `ijmworx@gmail.com`.
- [ ] Monitor the first 48–72 hours: serving, no disapprovals, tracking firing.

## E. Ongoing (light-touch)
- [ ] Weekly search-terms review for the first 6–8 weeks (add negatives, promote
      winners to exact match).
- [ ] Monthly snapshot to Izaak: spend, leads, CPA, and which services produce.

---

> **Account-access note:** as of the April 2026 audit the account
> (`592-524-0050`) was being managed by `maloneyantonio1@gmail.com`, not 915 Web
> Design. Treat this as a **build-ready handoff pack** and confirm who's
> importing it before making live changes, so edits don't collide.
