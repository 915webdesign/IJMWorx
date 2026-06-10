# Tracking & Launch Checklist — Custom Pools Campaign

Ads optimize toward whatever they can measure, so fix tracking **before** you
launch. The April 2026 audit found conversion tracking partially broken.

## A. Fix conversion tracking (first)
- [ ] **Repair "WEBSITE CLICK CALLS."** Phone-number taps on ijmworx.com are
      currently invisible. Re-implement the click-to-call event and confirm it fires.
- [ ] **Track the pool/estimate forms.** Only ~5 of 23+ submissions reached
      Google Ads. Add conversion tracking to every form that this campaign's
      traffic can reach, and verify with a test submission.
- [ ] **Primary conversions** = form submit + qualified call. Mark page views and
      other micro-actions as secondary.
- [ ] **Qualified-call filter** — count calls ≥ 30–60 seconds so ad taps don't
      inflate "conversions."
- [ ] **Import GA4 conversions** as a redundant check.

## B. Account setup
- [ ] **Accept "Call and Messaging Ads Terms"** — unblocks the call asset.
- [ ] Create the campaign `IJM Worx - Custom Pools Search` (don't reuse a paused
      shell; build clean).
- [ ] **Apply negatives:** master shared list + the cross-service list
      (`import/negative-keywords.csv` has both).
- [ ] **Link** Google Business Profile (location asset) and GA4.

## C. Launch settings
- [ ] Locations = the service-area list, set to **Presence**.
- [ ] Networks: Search only (Partners/Display off).
- [ ] Bidding: **Maximize Clicks** to learn → **Maximize Conversions / Target CPA
      ~$120–$150** after tracking is solid and ~15–30 conversions accrue.
- [ ] Budget set ($40–$70/day suggested to start); ad schedule reviewed.
- [ ] All 5 RSAs show **Good/Excellent** Ad Strength; nothing over-pinned.
- [ ] Assets attached (call, location, sitelinks, callouts, snippets, price, images).

## D. Pre-launch QA
- [ ] Headlines ≤30 chars, descriptions ≤90 chars (CSVs are built to spec — verify after import).
- [ ] No disapprovals; Final URLs load; the pool form works.
- [ ] Fire a **test lead** (form + call); confirm it lands in Google Ads **and** `ijmworx@gmail.com`.
- [ ] Monitor the first 48–72 hours: serving, no disapprovals, tracking firing.

## E. Ongoing
- [ ] Weekly search-terms review for 6–8 weeks (add negatives, promote winners to exact).
- [ ] Monthly snapshot to Izaak: spend, leads, CPA, booked pool jobs.

---

> **Coordinate access first.** Confirm who's building this in the account
> (`592-524-0050`) so changes don't collide. Treat the CSVs as a build-ready pack.
