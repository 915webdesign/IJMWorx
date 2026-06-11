/* =============================================================================
   IJM WORX — Custom Pools Landing Page as a Wix Custom Element
   -----------------------------------------------------------------------------
   Why this exists: a Wix "Embed HTML" iframe has a FIXED height and can't grow
   to its content. A Custom Element renders in the page's real DOM (no iframe),
   so it flows naturally, auto-sizes, loads faster, and is indexable.

   HOW TO USE IN WIX (Dev Mode / Velo must be ON):
   1. Add this file to your site: Code Files > Public > upload `ijm-pools-landing.js`
      (or host it anywhere and use that HTTPS URL).
   2. Editor: Add > Embed Code > Custom Element.
   3. Set "Choose Element" to the file above, and set the Tag Name to EXACTLY:
        ijm-pools-landing
   4. Stretch the element full-width. It sizes to its own content.
   5. The single conversion is the form: add a NATIVE Wix Form element and place
      it over the gold-dashed "Get Your Free Pool Design" box (shadow DOM can't
      host a native Wix form, but the element flows in the page so it overlaps
      cleanly). See README for details.
   ============================================================================= */
(function () {
  "use strict";

  var FONTS = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap";

  var CSS = "\
  :host{\
    --bg:#0e0e10; --bg2:#15151a; --panel:#1b1b21; --line:#2c2c34;\
    --gold:#c9a24b; --gold-bright:#f0dca0; --gold-deep:#8f7129;\
    --paper:#ece9e1; --muted:#a8a294;\
    --grad-gold:linear-gradient(135deg,#f3e0a6,#c9a24b 55%,#a9842f);\
    --radius:16px; --shadow:0 24px 60px -28px rgba(0,0,0,.85);\
    display:block; background:#0e0e10; scroll-behavior:smooth;\
  }\
  *{margin:0;padding:0;box-sizing:border-box}\
  .ijm-root{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--paper);line-height:1.65;-webkit-font-smoothing:antialiased;overflow-x:hidden}\
  h1,h2,h3{font-family:'Fraunces',Georgia,serif;line-height:1.12;font-weight:600;letter-spacing:-.01em}\
  img{max-width:100%;display:block}\
  a{color:inherit;text-decoration:none}\
  .wrap{max-width:1120px;margin:0 auto;padding:0 24px}\
  .eyebrow{font-family:'Inter';font-weight:700;text-transform:uppercase;letter-spacing:.18em;font-size:.74rem;color:var(--gold)}\
  .section{padding:84px 0}\
  .center{text-align:center}\
  .btn{display:inline-flex;align-items:center;gap:10px;font-weight:700;font-size:1.02rem;padding:16px 30px;border-radius:999px;cursor:pointer;border:0;transition:.18s;background:var(--grad-gold);color:#1c1606;box-shadow:0 14px 30px -12px rgba(201,162,75,.6)}\
  .btn:hover{transform:translateY(-2px);filter:brightness(1.05)}\
  .btn-lg{font-size:1.12rem;padding:18px 40px}\
  .topbar{border-bottom:1px solid var(--line);background:rgba(14,14,16,.9);position:sticky;top:0;z-index:40}\
  .topbar .wrap{display:flex;align-items:center;justify-content:space-between;padding:13px 24px;gap:16px}\
  .topbar img.logo{height:46px;width:auto}\
  .topbar .meta{font-size:.86rem;color:var(--muted);font-weight:600;text-align:right}\
  .topbar .meta b{color:var(--paper)}\
  @media(max-width:600px){.topbar .meta .hide{display:none}}\
  .hero{position:relative;overflow:hidden}\
  .hero .hero-bg{position:absolute;inset:0;background-image:url('https://static.wixstatic.com/media/9c39dd_1f5046e56c344ef68f56b806bd529cb9~mv2.jpg/v1/fill/w_1800,h_1150,al_c,q_85,enc_auto/ijm-pool-night.jpg');background-size:cover;background-position:center}\
  .hero .hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,12,.7),rgba(10,10,12,.82)),radial-gradient(70% 80% at 75% 30%,rgba(201,162,75,.18),transparent 60%)}\
  .hero .wrap{position:relative;text-align:center;padding:96px 24px 104px;max-width:880px}\
  .offer-pill{display:inline-flex;align-items:center;gap:9px;background:rgba(201,162,75,.14);border:1px solid var(--gold);color:var(--gold-bright);font-weight:700;font-size:.82rem;letter-spacing:.06em;text-transform:uppercase;padding:9px 17px;border-radius:999px;margin-bottom:24px}\
  .hero h1{font-size:clamp(2.5rem,5.4vw,4rem);color:#fff;font-weight:700}\
  .hero h1 em{font-style:normal;color:var(--gold-bright)}\
  .hero p.sub{font-size:1.2rem;color:#e6e1d4;margin:18px auto 0;max-width:36em}\
  .hero .cta-row{margin-top:30px}\
  .chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:28px;justify-content:center}\
  .chip{display:inline-flex;align-items:center;gap:8px;background:rgba(20,20,24,.6);border:1px solid rgba(201,162,75,.3);padding:8px 14px;border-radius:999px;font-size:.84rem;font-weight:600;color:#e6e1d4}\
  .chip .g{color:var(--gold)}\
  .offer-strip{background:var(--grad-gold);color:#1c1606}\
  .offer-strip .wrap{display:flex;align-items:center;justify-content:center;gap:12px;text-align:center;padding:18px 24px;flex-wrap:wrap}\
  .offer-strip b{font-family:'Fraunces';font-size:1.28rem;font-weight:700}\
  .head{max-width:680px;margin:0 auto 46px}\
  .head h2{font-size:clamp(1.9rem,3.4vw,2.6rem);color:var(--paper)}\
  .head p{margin-top:14px;font-size:1.08rem;color:var(--muted)}\
  .render{background:var(--bg2)}\
  .render .wrap{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}\
  .render h2{font-size:clamp(1.9rem,3.4vw,2.6rem);color:var(--paper)}\
  .render h2 em{font-style:normal;color:var(--gold-bright)}\
  .render p{color:#cfcabd;margin-top:14px;font-size:1.06rem}\
  .render ul{list-style:none;margin-top:22px;display:grid;gap:12px}\
  .render li{display:flex;gap:12px;align-items:flex-start;color:#ddd8cb}\
  .render li svg{width:22px;height:22px;color:var(--gold);flex-shrink:0;margin-top:2px}\
  .render-img{position:relative;border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);border:1px solid var(--line)}\
  .render-img img{width:100%;height:100%;object-fit:cover;min-height:340px}\
  .render-img .cap{position:absolute;left:0;right:0;bottom:0;padding:16px 18px;background:linear-gradient(transparent,rgba(10,10,12,.85));color:#fff;font-size:.9rem;font-weight:600}\
  @media(max-width:860px){.render .wrap{grid-template-columns:1fr;gap:28px}}\
  .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}\
  .vcard{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:24px}\
  .vcard .ic{width:48px;height:48px;border-radius:12px;background:rgba(201,162,75,.12);border:1px solid rgba(201,162,75,.35);display:flex;align-items:center;justify-content:center;margin-bottom:14px;color:var(--gold)}\
  .vcard .ic svg{width:25px;height:25px}\
  .vcard h3{font-size:1.15rem;color:var(--paper);margin-bottom:6px}\
  .vcard p{font-size:.92rem;color:var(--muted)}\
  @media(max-width:860px){.grid4{grid-template-columns:1fr 1fr}}\
  @media(max-width:520px){.grid4{grid-template-columns:1fr}}\
  .gallery{background:var(--bg2)}\
  .gal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}\
  .gal{position:relative;border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);aspect-ratio:4/3;background:#000}\
  .gal img{width:100%;height:100%;object-fit:cover;transition:.35s}\
  .gal:hover img{transform:scale(1.05)}\
  .gal .cap{position:absolute;left:0;right:0;bottom:0;padding:22px 16px 12px;background:linear-gradient(transparent,rgba(10,10,12,.9));color:#fff;font-size:.86rem;font-weight:600}\
  @media(max-width:860px){.gal-grid{grid-template-columns:1fr 1fr}}\
  @media(max-width:520px){.gal-grid{grid-template-columns:1fr}}\
  .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}\
  .rev{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:26px;display:flex;flex-direction:column}\
  .rev .stars{color:var(--gold);letter-spacing:2px;margin-bottom:12px}\
  .rev p{font-size:.96rem;color:#d8d3c6;flex:1}\
  .rev .who{display:flex;align-items:center;gap:12px;margin-top:18px}\
  .rev .av{width:42px;height:42px;border-radius:50%;background:var(--grad-gold);color:#1c1606;display:flex;align-items:center;justify-content:center;font-weight:700;font-family:'Fraunces'}\
  .rev .who b{font-size:.93rem;color:var(--paper)}\
  .rev .who span{display:block;font-size:.78rem;color:var(--muted)}\
  @media(max-width:860px){.rev-grid{grid-template-columns:1fr}}\
  .fin{background:var(--bg2);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}\
  .fin .wrap{display:flex;align-items:center;justify-content:space-between;gap:28px;flex-wrap:wrap}\
  .fin h2{font-size:clamp(1.6rem,3vw,2.2rem);color:var(--paper)}\
  .fin h2 em{font-style:normal;color:var(--gold-bright)}\
  .fin p{color:var(--muted);margin-top:8px;max-width:34em}\
  .form-sec{background:radial-gradient(70% 100% at 50% 0%,rgba(201,162,75,.12),transparent 60%),var(--bg)}\
  .form-card{max-width:680px;margin:0 auto;background:var(--panel);border:1px solid var(--gold-deep);border-radius:22px;padding:40px 34px;box-shadow:var(--shadow);text-align:center}\
  .form-card .eyebrow{margin-bottom:10px}\
  .form-card h2{font-size:clamp(1.7rem,3.2vw,2.3rem);color:var(--paper)}\
  .form-card p.intro{color:#cfcabd;margin:12px auto 26px;max-width:38em}\
  .form-slot{min-height:220px;border:2px dashed var(--gold-deep);border-radius:14px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.95rem;background:rgba(255,255,255,.02);padding:20px}\
  .form-card .reassure{margin-top:18px;font-size:.85rem;color:var(--muted)}\
  .ijm-foot{background:#0a0a0c;border-top:1px solid var(--line);text-align:center;padding:34px 24px;color:var(--muted);font-size:.86rem}\
  .ijm-foot img{height:40px;margin:0 auto 14px;opacity:.9}\
  .ijm-foot .nap b{color:var(--paper)}\
  .ijm-foot .legal{margin-top:10px;font-size:.78rem;color:#6f6a5e}\
  ";

  var HTML = "\
  <div class='ijm-root'>\
    <div class='topbar'><div class='wrap'>\
      <img class='logo' src='https://static.wixstatic.com/media/9c39dd_6642b5f70ab1406d9b41691f07f7adba~mv2.png' alt='IJM Worx — Specializing in Outdoor Living'>\
      <div class='meta'><b>&#9733; 4.9</b> &middot; 36 Reviews <span class='hide'>&middot; Licensed Since 2007 &middot; (915) 922-9618</span></div>\
    </div></div>\
    <section class='hero'><div class='hero-bg'></div><div class='wrap'>\
      <span class='offer-pill'>&#9733; Free 3D Render With Every Proposal</span>\
      <h1>Your Dream Pool, <em>Designed in 3D</em> Before We Build It</h1>\
      <p class='sub'>El Paso's trusted custom pool builder since 2007. One team designs, permits, and builds your pool start to finish &mdash; and hands you a 3D render of your own backyard with every proposal.</p>\
      <div class='cta-row'><a class='btn btn-lg' href='#design-form'>Get My Free Pool Design &rarr;</a></div>\
      <div class='chips'>\
        <span class='chip'><span class='g'>&#9733;</span> 4.9 &middot; 36 reviews</span>\
        <span class='chip'><span class='g'>&#9679;</span> Licensed &amp; Insured</span>\
        <span class='chip'><span class='g'>&#9679;</span> Permits Handled</span>\
        <span class='chip'><span class='g'>&#9679;</span> Financing $149/mo</span>\
      </div>\
    </div></section>\
    <div class='offer-strip'><div class='wrap'><b>Free 3D Render With Every Proposal</b><span>&mdash; see your finished pool before you spend a dollar building it.</span></div></div>\
    <section class='section render'><div class='wrap'>\
      <div>\
        <span class='eyebrow'>The IJM Difference</span>\
        <h2>See your pool in 3D, <em>before we break ground</em></h2>\
        <p>Spending tens of thousands on a pool you can only imagine is nerve-racking. So we don't ask you to. With every proposal, we hand you a 3D render of your own backyard &mdash; pool, decking, water features and all.</p>\
        <ul>\
          <li><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2'><path d='M5 12l4 4 10-10'/></svg> A real 3D render of <b>your</b> yard &mdash; not a generic template</li>\
          <li><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2'><path d='M5 12l4 4 10-10'/></svg> Free with every proposal &mdash; no deposit, no pressure</li>\
          <li><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2'><path d='M5 12l4 4 10-10'/></svg> Change the design until it's exactly what you want</li>\
          <li><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.2'><path d='M5 12l4 4 10-10'/></svg> We handle the city permits and inspections</li>\
        </ul>\
      </div>\
      <div class='render-img'>\
        <img src='https://static.wixstatic.com/media/9c39dd_3a2b00a01ba244b8ab7ee671fd334a4a~mv2.jpg/v1/fill/w_1100,h_840,al_c,q_85,enc_auto/ijm-pool-day.jpg' alt='Custom freeform pool with rock waterfall built by IJM Worx in El Paso'>\
        <div class='cap'>A real IJM build &mdash; yours starts with a free 3D render.</div>\
      </div>\
    </div></section>\
    <section class='section'><div class='wrap'>\
      <div class='head center'><span class='eyebrow'>Why IJM Worx</span><h2>Pool builders El Paso actually trusts</h2><p>You've heard the horror stories &mdash; the crew that ghosts you, the job that never finishes. That's not us, and our reviews prove it.</p></div>\
      <div class='grid4'>\
        <div class='vcard'><div class='ic'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z'/></svg></div><h3>Craftsmanship since 2007</h3><p>Premium tile, plaster and equipment, with a 4.9&#9733; track record to back it.</p></div>\
        <div class='vcard'><div class='ic'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/></svg></div><h3>Crews that show up</h3><p>On time, clean job sites, clear communication from first dig to first swim.</p></div>\
        <div class='vcard'><div class='ic'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M4 7h16v12H4z'/><path d='M8 7V5a4 4 0 018 0v2'/></svg></div><h3>We handle the permits</h3><p>City permits and inspections are on us &mdash; we take the headache off your plate.</p></div>\
        <div class='vcard'><div class='ic'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M3 21V8l9-5 9 5v13'/><path d='M9 21v-6h6v6'/></svg></div><h3>Local &amp; family-owned</h3><p>Built right here for the El Paso climate &mdash; heat, sun and all.</p></div>\
      </div>\
    </div></section>\
    <section class='section gallery'><div class='wrap'>\
      <div class='head center'><span class='eyebrow'>Recent El Paso Pools</span><h2>Real backyards, really transformed</h2><p>A few of the custom pools and outdoor spaces we've built across El Paso and the Borderland.</p></div>\
      <div class='gal-grid'>\
        <div class='gal'><img loading='lazy' src='https://static.wixstatic.com/media/9c39dd_1f5046e56c344ef68f56b806bd529cb9~mv2.jpg/v1/fill/w_820,h_620,al_c,q_82,enc_auto/ijm-1.jpg' alt='Night-lit custom pool with spa and fire feature, El Paso'><div class='cap'>Night-lit pool, spa &amp; fire feature</div></div>\
        <div class='gal'><img loading='lazy' src='https://static.wixstatic.com/media/9c39dd_3a2b00a01ba244b8ab7ee671fd334a4a~mv2.jpg/v1/fill/w_820,h_620,al_c,q_82,enc_auto/ijm-2.jpg' alt='Freeform pool with rock waterfall, El Paso'><div class='cap'>Freeform pool with rock waterfall</div></div>\
        <div class='gal'><img loading='lazy' src='https://static.wixstatic.com/media/9c39dd_a2b2e4684ec24a39a57443ecd76c9ac3~mv2.jpg/v1/fill/w_820,h_620,al_c,q_82,enc_auto/ijm-3.jpg' alt='Pool with sunken fire-pit lounge and turf, El Paso'><div class='cap'>Pool with sunken fire-pit lounge</div></div>\
        <div class='gal'><img loading='lazy' src='https://static.wixstatic.com/media/9c39dd_9d05508684b545578fafe7bc71b78abb~mv2.jpg/v1/fill/w_820,h_620,al_c,q_82,enc_auto/ijm-4.jpg' alt='Full backyard pool and outdoor living space, El Paso'><div class='cap'>Full backyard pool &amp; living space</div></div>\
        <div class='gal'><img loading='lazy' src='https://static.wixstatic.com/media/9c39dd_21d8ff312dbd4e2d937d11d32a15d5b4~mv2.jpg/v1/fill/w_820,h_620,al_c,q_82,enc_auto/ijm-5.jpg' alt='Custom rock water feature with cascading waterfall, El Paso'><div class='cap'>Custom rock water feature</div></div>\
        <div class='gal'><img loading='lazy' src='https://static.wixstatic.com/media/9c39dd_af18dd118ac6498f97d3f22f7fd61952~mv2.jpg/v1/fill/w_820,h_620,al_c,q_82,enc_auto/ijm-6.jpg' alt='Outdoor living area with stacked-stone fire feature, El Paso'><div class='cap'>Outdoor living &amp; fire feature</div></div>\
      </div>\
    </div></section>\
    <section class='section'><div class='wrap'>\
      <div class='head center'><span class='eyebrow'>What El Paso Says</span><h2>4.9 stars across 36 reviews</h2></div>\
      <div class='rev-grid'>\
        <div class='rev'><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>\"They completely transformed my backyard into a relaxing getaway right at home. The crew was professional, on time, and the quality really shows &mdash; better than I imagined.\"</p><div class='who'><div class='av'>R</div><div><b>Rick Chacon</b><span>Custom pool &middot; El Paso</span></div></div></div>\
        <div class='rev'><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>\"From our first consultation to the final splash, the process was seamless. The 3D walkthrough let us see everything before we broke ground. They didn't just build a pool &mdash; they built a relationship.\"</p><div class='who'><div class='av'>A</div><div><b>Angel De La Rosa</b><span>Custom pool &middot; El Paso</span></div></div></div>\
        <div class='rev'><div class='stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>\"From the initial consultation to completion, Isaac was always available. The final product is spectacular &mdash; our new pool is a hub for family fun. If you're considering a pool, look no further.\"</p><div class='who'><div class='av'>G</div><div><b>Armando Gomez</b><span>Custom pool &middot; El Paso</span></div></div></div>\
      </div>\
    </div></section>\
    <section class='section fin'><div class='wrap'>\
      <div><span class='eyebrow'>Financing Available</span><h2>Your dream pool, from <em>$149/mo</em></h2><p>Don't put it off another summer. Flexible financing turns your pool into an easy monthly payment &mdash; quick, easy approval.</p></div>\
      <a class='btn' href='#design-form'>Get My Free Pool Design &rarr;</a>\
    </div></section>\
    <section class='section form-sec' id='design-form'><div class='wrap'>\
      <div class='form-card'>\
        <span class='eyebrow'>Free 3D Render With Every Proposal</span>\
        <h2>Get Your Free Pool Design</h2>\
        <p class='intro'>Tell us about your backyard and we'll put together your custom pool proposal &mdash; with a free 3D render of your space. No pressure, ever.</p>\
        <div class='form-slot'><slot>Place your native Wix Form here (see README)</slot></div>\
        <p class='reassure'>&#9733; 4.9 from 36 reviews &middot; Licensed &amp; insured since 2007 &middot; We handle the permits</p>\
      </div>\
    </div></section>\
    <div class='ijm-foot'>\
      <img src='https://static.wixstatic.com/media/9c39dd_6642b5f70ab1406d9b41691f07f7adba~mv2.png' alt='IJM Worx'>\
      <div class='nap'><b>IJM Worx</b> &middot; Custom Pools &amp; Outdoor Living &middot; 8811 Alameda Ave, El Paso, TX 79907 &middot; (915) 922-9618</div>\
      <div class='legal'>Licensed &amp; Insured &middot; BBB A+ &middot; Serving El Paso &amp; the Borderland since 2007</div>\
    </div>\
  </div>";

  function loadFonts() {
    if (!document.querySelector("link[data-ijm-fonts]")) {
      var l = document.createElement("link");
      l.rel = "stylesheet"; l.href = FONTS; l.setAttribute("data-ijm-fonts", "");
      document.head.appendChild(l);
    }
  }

  function IjmPoolsLanding() {
    return Reflect.construct(HTMLElement, [], IjmPoolsLanding);
  }
  IjmPoolsLanding.prototype = Object.create(HTMLElement.prototype);
  IjmPoolsLanding.prototype.constructor = IjmPoolsLanding;

  IjmPoolsLanding.prototype.connectedCallback = function () {
    if (this._mounted) return;
    this._mounted = true;
    loadFonts();
    var root = this.attachShadow({ mode: "open" });
    root.innerHTML = "<style>" + CSS + "</style>" + HTML;

    // In-page CTA scroll (fragment nav doesn't reach into shadow DOM)
    root.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("a[href^='#']");
      if (!a) return;
      var href = a.getAttribute("href");
      if (href.length < 2) return;
      var el = root.querySelector(href);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });

    // Optional: report height to the Wix parent (harmless if not framed)
    var host = this;
    function send() {
      try { window.parent.postMessage({ ijmHeight: Math.ceil(host.getBoundingClientRect().height) }, "*"); } catch (e2) {}
    }
    window.addEventListener("load", send);
    window.addEventListener("resize", send);
    if (window.ResizeObserver) new ResizeObserver(send).observe(this);
    setTimeout(send, 600);
  };

  if (!customElements.get("ijm-pools-landing")) {
    customElements.define("ijm-pools-landing", IjmPoolsLanding);
  }
})();
