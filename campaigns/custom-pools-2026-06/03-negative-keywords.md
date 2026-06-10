# Negative Keywords — Custom Pools Campaign

Two layers keep this campaign clean:

1. **The master noise list** — jobs, DIY, cheap, above-ground, repair/cleaning,
   other-trade, and junk terms. This is the same list used by the broader build
   (`campaigns/google-ads-2026-06/import/negative-keywords.csv`). If you've
   already created the shared list `IJM - Outdoor Living Master`, just apply it to
   this campaign too.
2. **Cross-service exclusions** — so the pools campaign never shows on pergola,
   kitchen, hardscape, concrete-service, landscaping, or lighting searches, and
   never competes with a future service campaign.

For convenience, `import/negative-keywords.csv` is **self-contained** — it
includes both layers under this campaign's name, so you can import it directly.

## Cross-service exclusions (Phrase match)

pergola · pergolas · patio cover · patio covers · outdoor kitchen · bbq island ·
hardscape · retaining wall · stamped concrete · concrete driveway · concrete patio ·
decorative concrete · concrete contractor · driveway · landscaping ·
landscape design · landscaper · landscape lighting · outdoor lighting ·
artificial turf · turf · sod · putting green · sprinkler system · hot tub · swim spa

> **Deliberately NOT excluded:** bare `concrete` (a "concrete pool" = gunite pool,
> which is relevant), `waterfall` / `water feature` (common pool add-ons), and
> `spa` (pool + spa combos). `free` and `affordable` stay open too — IJM offers
> free estimates and pool financing.

## Ongoing
Review the **search-terms report weekly** for the first 6–8 weeks. Add any junk
as negatives; promote strong converting queries to their own exact-match keyword.
If you later run separate campaigns for other services, this cross-service list
keeps them from bidding against each other.
