# Custom Pools — Landing Page (Wix embed)

A single-conversion swimming-pool landing page for the Custom Pools ad campaign,
built to paste into a **Wix HTML embed**. Open `index.html` to preview.

## Brand
Built in IJM's real brand: **metallic gold on near-black**, taken from your logo
("Specializing in Outdoor Living"). The logo is pulled live from your Wix media
(`static.wixstatic.com/...mv2.png`), so it always matches.

- Gold `#c9a24b` (bright `#f0dca0`, deep `#8f7129`) · Near-black `#0e0e10` / panels `#1b1b21` · Warm off-white text `#ece9e1`
- Headings: Fraunces (premium serif) · Body: Inter
- These are derived from the logo. I could **not** open your Phase 2A/2B Wix
  embeds (the Drive `download_file_content` permission was denied), so I matched
  the logo/brand instead. Approve that permission or drop those `.html` files in
  the repo and I'll fine-tune to match them exactly.

## Single conversion — the one thing to wire up
The page has **one** conversion point: the form section at `#design-form`. Drop
your Wix form into the placeholder:

```html
<div id="wix-form-embed">
  [ Your Wix form embeds here ]
</div>
```

Everything else obeys the single-conversion rule:
- **No external links, no nav, no footer links, no second form.**
- Every button (`Get My Free Pool Design →`) is an **in-page anchor** that scrolls
  to `#design-form`. Nothing leaves the page.
- The **phone number is plain text only** (not a tap-to-call), so it doesn't
  compete with the form. Say the word and I'll make it tap-to-call or remove it.

## The offer
*"Free 3D Render With Every Proposal"* — featured in the hero pill, a full-width
gold offer strip, and a dedicated "see your pool in 3D before we break ground"
section. It's the page's main hook.

## Photos — real IJM projects, already wired in
The page uses your **actual project photos**, served straight from your Wix CDN
(`static.wixstatic.com`) — public, fast, and already on your account, so nothing
new to upload. I identified each hash-named Wix image by matching file sizes to
your descriptively-named Drive photos, then viewed them to confirm.

- **Hero:** your night-lit pool with spa + fire feature (perfect on the dark theme).
- **3D section:** your daytime freeform pool with a rock waterfall.
- **Gallery (6):** night pool · waterfall pool · sunken fire-pit pool · full
  backyard pool · custom water feature · stacked-stone fire feature.

To swap any image, replace its `static.wixstatic.com/media/9c39dd_…` URL in
`index.html` with another from your Wix media. The `/v1/fill/w_,h_,q_,enc_auto/`
suffix just resizes/compresses on the fly — keep that pattern for speed.

> No "before/after dirt" shots existed in your photo set, so that section is a
> **Recent Pools gallery** of finished work instead. Send before/after pairs and
> I'll add them.

## How to publish in Wix
1. Add an **Embed → Custom Element / HTML iframe** (or Velo HTML component) to the page.
2. Paste the full contents of `index.html`.
3. Replace the `#wix-form-embed` placeholder with your Wix form (or position a
   native Wix form element over that area).
4. Confirm the form fires a conversion (see the campaign tracking checklist) so
   the ad traffic is measurable.

> Once the landing page is live, update the Custom Pools campaign's Final URLs
> (`campaigns/custom-pools-2026-06/`) from the homepage placeholder to this page.
