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

## Embedding in Wix — doctype & height (read this)

**Keep the `<!DOCTYPE html>`.** Wix's "Embed HTML" renders your code as a
standalone document inside a sandboxed iframe. The doctype forces standards
("no-quirks") mode so the modern CSS (flex/grid/`clamp`/`aspect-ratio`) renders
correctly — without it the iframe can fall into quirks mode and break the
layout. The file already includes the doctype, `<meta charset>`, and
`<meta viewport>`, and every asset URL is HTTPS (Wix blocks HTTP). No change
needed there.

**The real constraint is height, not the doctype.** A Wix *Embed HTML* iframe
has a **fixed height** set in the editor and **can't auto-grow** to its content,
so a long page like this clips or shows an inner scrollbar. Two ways to handle it:

### Option A — Custom Element (recommended for a full page)
Renders in the page's real DOM (no iframe) so it flows naturally, resizes to
content, loads faster, and is indexable. **Built and ready:**

- `ijm-pools-landing.js` — the custom element (Shadow DOM, self-contained, real photos).
- `custom-element-preview.html` — open this locally (with the JS in the same
  folder) to preview exactly what Wix will render.

**Wix steps (Dev Mode / Velo ON):**
1. **Code Files → Public →** upload `ijm-pools-landing.js` (or host it on any HTTPS URL).
2. Editor: **Add → Embed Code → Custom Element.**
3. **Choose Element** → the uploaded file; set **Tag Name** to exactly
   `ijm-pools-landing`.
4. Stretch it full-width. It auto-sizes to its content — no fixed height, no scrollbar.

**The form (single conversion):** the element renders the styled "Get Your Free
Pool Design" card with a dashed slot. Shadow DOM can't host a native Wix form
*inside* it, so add a **native Wix Form** element and drag it over that dashed
area (the element flows in the page, so it overlaps cleanly). Want a variant that
**ends right before the form** so you can drop the Wix Form natively beneath it?
Say the word and I'll output it.

### Option B — Embed HTML iframe (quick)
**Add → Embed Code → Embed HTML → Code**, paste all of `index.html`, stretch it
full-width, and set the height. Since this Wix page is *only* the landing page,
there's nothing below it to push. The page reports its own height, so you can
auto-size the iframe with a few lines of Velo on the page:

```js
$w.onReady(() => {
  $w('#html1').onMessage((e) => {
    if (e.data && e.data.ijmHeight) $w('#html1').height = e.data.ijmHeight;
  });
});
```

(Setting `.height` on the HTML component is inconsistent across Wix versions; if
it won't size, use Option A.)

### Then, for either option
1. Drop your Wix form into the `#wix-form-embed` box — the single conversion.
2. Make sure the form fires a conversion (see the campaign tracking checklist) so
   the ad traffic is measurable.

Sources: [Wix HTML iframe element (Velo)](https://dev.wix.com/docs/develop-websites/articles/wix-editor-elements/other-elements/html-i-frame-element/working-with-the-html-iframe-element),
[HtmlComponent messaging (Velo)](https://dev.wix.com/docs/velo/velo-only-apis/$w/html-component/messaging-between-a-site-page-and-an-html-element),
[Wix Studio forum: dynamic iframe height](https://forum.wixstudio.com/t/dynamic-height-for-embed-html-or-custom-element-to-resize-with-iframe-content/65727).

> Once the landing page is live, update the Custom Pools campaign's Final URLs
> (`campaigns/custom-pools-2026-06/`) from the homepage placeholder to this page.
