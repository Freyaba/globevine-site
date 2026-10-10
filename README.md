
www.globevineapp.com

User-agent: *
Allow: /
Sitemap: https://www.globevineapp.com/sitemap.xml

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://www.globevineapp.com/</loc></url>
<url><loc>https://www.globevineapp.com/support.html</loc></url>
<url><loc>https://www.globevineapp.com/privacy.html</loc></url>
</urlset>

(function(){
  var out=document.getElementById('bottle-out');
  var list=document.querySelectorAll('.bottle');
  if(!out||!list.length){return;}
  function pick(b){
    list.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
    var lv=b.getAttribute('data-lv'),n=b.getAttribute('data-name');
    out.textContent=(lv==='1'?'Level 1: ':'Level '+lv+': ')+n+(lv==='15'?'. The top of the cellar!':(lv==='1'?'. Everyone starts here.':''));
  }
  list.forEach(function(b){b.setAttribute('aria-pressed','false');b.addEventListener('click',function(){pick(b);});});
})();

<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Support – Globevine</title>
<meta name="description" content="Help with the Globevine app: contact us, restore progress, delete your data and report a mistake.">
<link rel="canonical" href="https://www.globevineapp.com/support.html">
<meta property="og:title" content="Support – Globevine">
<meta property="og:description" content="Help with the Globevine app: contact us, restore progress, delete your data and report a mistake.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.globevineapp.com/support.html">
<meta name="theme-color" content="#3A0C24">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header class="site"><div class="wrap nav">
<a class="brand" href="index.html"><svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#A31550"/><path d="M32 6c9 8 9 16 0 26-9 10-9 18 0 26" stroke="#C9A24B" stroke-width="3" fill="none"/><path d="M4 26c14-4 42-4 56 0M4 40c14 4 42 4 56 0" stroke="#C9A24B" stroke-width="2" fill="none" opacity=".6"/></svg>Globevine</a>
<nav class="navlinks" aria-label="Main">
<a class="hide-sm" href="index.html#features">Features</a><a class="hide-sm" href="index.html#how">How it works</a><a class="hide-sm" href="index.html#faq">FAQ</a><a href="support.html">Support</a>
</nav></div></header>
<main class="wrap prose">
<h1>Support</h1>
<p class="updated">We usually reply within a few working days.</p>
<p>Email us at <a href="mailto:info@globevineapp.com">info@globevineapp.com</a>. Please say which iPhone and iOS version you have, and what happened. Please do not send your date of birth or other personal details unless we ask.</p>

<h2>Common questions</h2>
<p><strong>How do I delete my data?</strong> Everything Globevine stores is on your device. Deleting the app deletes your profile, progress, journal and photos. We hold no copy.</p>
<p><strong>Can I move my progress to a new phone?</strong> Not at the moment. Globevine keeps data only on the device and has no sync. If you restore a new iPhone from an iPhone backup, the app&rsquo;s data may come across with it.</p>
<p><strong>I entered my date of birth wrongly.</strong> Delete the app and reinstall it to set up a new profile, as the app does not keep your date of birth. If you were refused because you are under the age limit, the app has not saved anything.</p>
<p><strong>I think a fact in the app is wrong.</strong> Please tell us which question, region, grape or producer, and what you think is correct. Wine facts change, and we want to get them right.</p>
<p><strong>Does Globevine collect my information?</strong> No. See the <a href="privacy.html">privacy policy</a>.</p>

<h2>Drinking responsibly</h2>
<p>Globevine is a learning game for adults. If you drink, please do so responsibly. Advice and support are available from <a href="https://www.drinkaware.co.uk" rel="noopener">Drinkaware</a>.</p>
</main>
<footer><div class="wrap">
<div class="foot-row"><a class="brand" href="index.html" style="font-size:1.1rem">Globevine</a>
<div class="foot-links"><a href="support.html">Support</a><a href="privacy.html">Privacy policy</a><a href="mailto:info@globevineapp.com">info@globevineapp.com</a></div></div>
<p class="foot-copy">&copy; <span id="year">2026</span> Globevine. Globevine is for adults aged 18 and over. It is a learning game and does not sell alcohol. Please enjoy wine responsibly &mdash; see <a href="https://www.drinkaware.co.uk" rel="noopener">Drinkaware</a>.</p>
</div></footer>
<script>document.getElementById('year').textContent=new Date().getFullYear();</script>
</body></html>

<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Privacy policy – Globevine</title>
<meta name="description" content="How the Globevine app and website handle your information. The app keeps everything on your device.">
<link rel="canonical" href="https://www.globevineapp.com/privacy.html">
<meta property="og:title" content="Privacy policy – Globevine">
<meta property="og:description" content="How the Globevine app and website handle your information. The app keeps everything on your device.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.globevineapp.com/privacy.html">
<meta name="theme-color" content="#3A0C24">
<link rel="stylesheet" href="style.css">
</head>
<body>
<header class="site"><div class="wrap nav">
<a class="brand" href="index.html"><svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#A31550"/><path d="M32 6c9 8 9 16 0 26-9 10-9 18 0 26" stroke="#C9A24B" stroke-width="3" fill="none"/><path d="M4 26c14-4 42-4 56 0M4 40c14 4 42 4 56 0" stroke="#C9A24B" stroke-width="2" fill="none" opacity=".6"/></svg>Globevine</a>
<nav class="navlinks" aria-label="Main">
<a class="hide-sm" href="index.html#features">Features</a><a class="hide-sm" href="index.html#how">How it works</a><a class="hide-sm" href="index.html#faq">FAQ</a><a href="support.html">Support</a>
</nav></div></header>
<main class="wrap prose">
<h1>Privacy policy</h1>
<p class="updated">Last updated: 6 October 2026</p>

<p>This policy explains what information the Globevine app and the website at www.globevineapp.com handle, and your rights. In short: <strong>the app keeps everything on your device and does not send it to us.</strong></p>

<h2>Who we are</h2>
<p>Globevine is run by Freya Bakko, trading as Globevine, based in the United Kingdom. We are the &ldquo;controller&rdquo; for the limited information described in the &ldquo;Emails you send us&rdquo; section below. You can contact us at <a href="mailto:info@globevineapp.com">info@globevineapp.com</a>.</p>

<h2>The Globevine app</h2>
<p>When you first open the app you create a profile. The app stores the following on your device:</p>
<ul>
<li>your name (this can be a nickname);</li>
<li>a confirmation that you are of legal drinking age. You enter your date of birth once so the app can check this, but the app does <strong>not</strong> keep the date itself, only the result of the check;</li>
<li>your country, which sets the legal drinking age that applies to you;</li>
<li>your progress: quiz answers, XP and level, streaks, badges, passport stamps and missions;</li>
<li>anything you add to your tasting journal and cellar, including notes and photos.</li>
</ul>
<p><strong>This information is stored only on your device.</strong> The app has no account system and no server. We do not receive, see, copy or sell it, and we cannot recover it for you. The app does not use advertising, tracking or third-party analytics tools, and does not contact other services to look up your information. Some screens have links that open other websites (for example wine search or review sites) in your browser when you tap them. Those sites have their own privacy policies, and we do not receive anything from them.</p>
<p>Because the information stays on your device, deleting the app deletes it. It also means your progress does not move to a new phone by itself.</p>
<p><strong>Device backups.</strong> If you back up your iPhone (for example to iCloud), Apple may include the app&rsquo;s data in that backup. That backup is handled by Apple under Apple&rsquo;s own privacy policy, not by us.</p>
<p><strong>Apple analytics and crash reports.</strong> If you choose to share analytics with app developers in your iPhone settings (Settings &rarr; Privacy &amp; Security &rarr; Analytics &amp; Improvements), Apple may give us aggregated, anonymised usage and crash information. This is optional and controlled by you. We use it only to fix bugs and improve the app, and it does not identify you.</p>

<h2>Age limit</h2>
<p>Globevine is for adults aged 18 and over (or the legal drinking age in your country, if higher). You enter your date of birth once, and the app works out whether you meet the age limit for your country and then discards the date. If you are under the limit, the app will not let you in and saves nothing. The check relies on the date you enter. It is not verified against any identity document.</p>

<h2>This website</h2>
<p>The website does not use cookies, advertising or analytics, and has no sign-up form. It loads no fonts, scripts or images from other companies. The site is hosted on GitHub Pages, so GitHub, as the host, may process technical data such as your IP address when you visit, under <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">GitHub&rsquo;s privacy statement</a>. We do not receive that data.</p>

<h2>Emails you send us</h2>
<p>If you email <a href="mailto:info@globevineapp.com">info@globevineapp.com</a>, we receive your email address, your name if you give it, and what you write. We use this only to reply to you and to deal with your question or problem. Our lawful basis is legitimate interests (answering people who contact us). We do not use it for marketing and do not share it with anyone, except our email provider, which stores and delivers our email on our behalf. We keep emails for up to 12 months after the conversation ends, then delete them.</p>

<h2>Your rights</h2>
<p>Under UK data protection law you can ask us for a copy of the information we hold about you, and to correct or delete it. You can also object to or restrict our use of it. For information in the app, you are in control of it already: you can edit or delete it in the app or by deleting the app. For emails, contact us at the address above and we will reply within one month.</p>
<p>If you are unhappy with how we handle your information, you can complain to the Information Commissioner&rsquo;s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="noopener">ico.org.uk/make-a-complaint</a> or on 0303 123 1113. We would appreciate the chance to put things right first.</p>

<h2>Children</h2>
<p>Globevine is not intended for anyone under 18 and we do not knowingly collect information from under-18s.</p>

<h2>International transfers</h2>
<p>We do not transfer information from the app anywhere. Emails may be processed by our email provider, which may use servers outside the UK under appropriate safeguards.</p>

<h2>Changes to this policy</h2>
<p>If the app or website changes how it handles information, we will update this policy and the date at the top before the change takes effect.</p>
</main>
<footer><div class="wrap">
<div class="foot-row"><a class="brand" href="index.html" style="font-size:1.1rem">Globevine</a>
<div class="foot-links"><a href="support.html">Support</a><a href="privacy.html">Privacy policy</a><a href="mailto:info@globevineapp.com">info@globevineapp.com</a></div></div>
<p class="foot-copy">&copy; <span id="year">2026</span> Globevine. Globevine is for adults aged 18 and over. It is a learning game and does not sell alcohol. Please enjoy wine responsibly &mdash; see <a href="https://www.drinkaware.co.uk" rel="noopener">Drinkaware</a>.</p>
</div></footer>
<script>document.getElementById('year').textContent=new Date().getFullYear();</script>
</body></html>

:root{
  --plum:#3A0C24;--claret:#A31550;--claret-bright:#C71F63;--gold:#C9A24B;--parchment:#F6F1E5;--paper:#FFFDF8;--ink:#241019;--ink-soft:#5B4550;--line:#E4D9C6;
  --bg:var(--paper);--bg-alt:var(--parchment);--bg-deep:var(--plum);--text:var(--ink);--text-soft:var(--ink-soft);
  --text-on-deep:var(--parchment);--text-on-deep-soft:#D9B9C6;--accent:var(--claret);--accent-bright:var(--claret-bright);
  --border:var(--line);--border-on-deep:rgba(246,241,229,.18);--card-bg:var(--paper);color-scheme:light;
  --serif:Georgia,'Times New Roman',serif;--sans:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
}
@media (prefers-color-scheme:dark){:root{
  --bg:#1B0B14;--bg-alt:#24101B;--bg-deep:#140309;--text:#F3E9EC;--text-soft:#C9A9B4;--text-on-deep:#F3E9EC;--text-on-deep-soft:#D9AEBE;
  --border:rgba(243,233,236,.14);--border-on-deep:rgba(243,233,236,.16);--card-bg:#24101B;--accent:#E0487F;color-scheme:dark}}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--text);font-family:var(--sans);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased}
img,svg{max-width:100%}
.wrap{max-width:1120px;margin:0 auto;padding-inline:24px}
h1,h2,h3{font-family:var(--serif);font-weight:600;text-wrap:balance;margin:0}
h2{font-size:clamp(1.7rem,3.2vw,2.4rem);letter-spacing:-.01em}
h3{font-size:1.15rem}
p{margin:0}
a{color:inherit}
.eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent)}
.eyebrow.on-deep{color:var(--gold)}
section{padding-block:88px}
@media (max-width:640px){section{padding-block:56px}.wrap{padding-inline:18px}}
header.site{position:sticky;top:0;z-index:40;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px);border-bottom:1px solid var(--border)}
.nav{display:flex;align-items:center;justify-content:space-between;padding-block:14px}
.brand{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-weight:600;font-size:1.28rem;text-decoration:none;color:var(--text)}
.navlinks{display:flex;align-items:center;gap:28px;font-size:.92rem;font-weight:600}
.navlinks a{text-decoration:none;color:var(--text-soft)}
.navlinks a:hover{color:var(--accent)}
@media (max-width:760px){.navlinks a.hide-sm{display:none}}
.btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:999px;font-weight:700;font-size:.92rem;text-decoration:none;border:1px solid transparent}
.btn-on-deep{background:var(--gold);color:var(--plum)}
.btn-on-deep:hover{background:#DDB968}
.btn:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.hero{background:radial-gradient(120% 140% at 85% -10%,rgba(201,162,75,.22),transparent 55%),linear-gradient(180deg,var(--bg-deep),#2B0819 65%,var(--bg-deep));color:var(--text-on-deep);padding-block:76px 96px;overflow:hidden}
.hero .wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
@media (max-width:900px){.hero .wrap{grid-template-columns:1fr}}
.hero h1{font-size:clamp(2.3rem,5vw,3.6rem);line-height:1.05;margin-top:14px}
.hero .lede{margin-top:18px;font-size:1.1rem;color:var(--text-on-deep-soft);max-width:46ch}
.hero .cta-row{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
.hero .microcopy{margin-top:16px;font-size:.85rem;color:var(--text-on-deep-soft)}
.stat-row{display:flex;gap:36px;margin-top:44px;flex-wrap:wrap}
.stat-row b{display:block;font-family:var(--serif);font-size:1.9rem;color:var(--gold);font-weight:600}
.stat-row span{font-size:.82rem;color:var(--text-on-deep-soft)}
.phone-stage{position:relative;display:flex;justify-content:center;align-items:center;min-height:420px}
.phone{width:240px;border-radius:34px;background:#150410;border:6px solid #0E0209;box-shadow:0 30px 60px -20px rgba(0,0,0,.6);padding:10px;position:relative;z-index:2}
.phone.tilt-right{transform:rotate(6deg)}
.phone.tilt-left{transform:rotate(-8deg) translate(-58px,34px);position:absolute;left:8px;bottom:-10px;z-index:1;opacity:.92}
@media (max-width:480px){.phone.tilt-left{display:none}}
.phone .screen{background:linear-gradient(160deg,#4A1230,#2B0819);border-radius:24px;aspect-ratio:9/19.5;overflow:hidden;padding:16px 14px;display:flex;flex-direction:column;gap:10px}
.mini-status{display:flex;justify-content:space-between;font-size:.6rem;color:var(--text-on-deep-soft);opacity:.7}
.mini-h{font-family:var(--serif);color:var(--parchment);font-size:.95rem;margin-top:4px}
.mini-sub{font-size:.62rem;color:var(--text-on-deep-soft)}
.map-dots{position:relative;flex:1;border-radius:14px;background:rgba(201,162,75,.08);border:1px solid rgba(201,162,75,.25);margin-top:4px}
.map-dots i{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--gold)}
.badge-row{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto}
.pill{font-size:.58rem;font-weight:700;padding:4px 8px;border-radius:999px;background:rgba(201,162,75,.16);color:var(--gold);border:1px solid rgba(201,162,75,.3)}
.passport-stamp{width:34px;height:34px;border-radius:50%;border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;font-size:.55rem;color:var(--gold);font-weight:800;transform:rotate(-8deg)}
.stamp-row{display:flex;gap:8px;margin-top:6px}
.bar{height:6px;border-radius:4px;background:rgba(201,162,75,.15);overflow:hidden;margin-top:6px}
.bar i{display:block;height:100%;background:linear-gradient(90deg,var(--gold),#E9C97A);width:64%}
.section-alt{background:var(--bg-alt)}
.intro{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:start}
@media (max-width:840px){.intro{grid-template-columns:1fr}}
.intro p{color:var(--text-soft);font-size:1.05rem;margin-top:16px;max-width:56ch}
.stat-tiles{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:16px;overflow:hidden}
@media (max-width:640px){.stat-tiles{grid-template-columns:1fr}}
.stat-tiles div{background:var(--card-bg);padding:24px 20px}
.stat-tiles b{display:block;font-family:var(--serif);font-size:2.1rem;font-weight:600;color:var(--accent)}
.stat-tiles span{font-size:.85rem;color:var(--text-soft)}
.feat-head{max-width:60ch}
.feat-head p{color:var(--text-soft);margin-top:14px;font-size:1.05rem}
.grid-feat{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px}
@media (max-width:920px){.grid-feat{grid-template-columns:repeat(2,1fr)}}
@media (max-width:600px){.grid-feat{grid-template-columns:1fr}}
.card{background:var(--card-bg);border:1px solid var(--border);border-radius:18px;padding:26px 24px;display:flex;flex-direction:column;gap:12px}
.card .icon{width:44px;height:44px;border-radius:12px;background:color-mix(in srgb,var(--accent) 12%,transparent);display:flex;align-items:center;justify-content:center;color:var(--accent)}
.card p{color:var(--text-soft);font-size:.95rem}
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:44px}
@media (max-width:920px){.steps{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.steps{grid-template-columns:1fr}}
.step{padding-top:8px;border-top:2px solid var(--accent)}
.step .num{font-family:var(--serif);font-size:1.6rem;color:var(--accent);font-weight:600;display:block;margin-bottom:8px}
.step p{color:var(--text-soft);font-size:.92rem;margin-top:6px}
.soon{background:linear-gradient(180deg,var(--bg-deep),#2B0819);color:var(--text-on-deep);border-radius:28px;padding:56px clamp(24px,5vw,64px);display:grid;grid-template-columns:1.1fr .9fr;gap:44px;align-items:center}
@media (max-width:840px){.soon{grid-template-columns:1fr}}
.soon p.lede{color:var(--text-on-deep-soft);margin-top:14px;max-width:50ch}
.store-badge{display:inline-flex;flex-direction:column;gap:2px;padding:11px 20px;border-radius:14px;border:1px solid var(--border-on-deep);background:rgba(255,255,255,.05);min-width:170px}
.store-badge .small{font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-on-deep-soft)}
.store-badge .big{font-family:var(--serif);font-size:1.05rem}
.store-badge .ribbon{font-size:.62rem;font-weight:700;color:var(--gold);margin-top:2px}
.faq{max-width:760px;margin-top:36px}
.faq details{border-bottom:1px solid var(--border);padding-block:18px}
.faq summary{cursor:pointer;font-weight:700;font-size:1.02rem;display:flex;justify-content:space-between;gap:16px;list-style:none}
.faq summary::-webkit-details-marker{display:none}
.faq summary .plus{color:var(--accent);font-size:1.2rem;font-weight:400;transition:transform .15s}
.faq details[open] summary .plus{transform:rotate(45deg)}
.faq .a{color:var(--text-soft);margin-top:10px;font-size:.95rem;max-width:64ch}
footer{border-top:1px solid var(--border);padding-block:40px}
.foot-row{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
.foot-links{display:flex;gap:22px;font-size:.85rem;color:var(--text-soft);flex-wrap:wrap}
.foot-links a{text-decoration:none}
.foot-links a:hover{color:var(--accent)}
.foot-copy{font-size:.8rem;color:var(--text-soft);margin-top:18px;max-width:70ch}
/* legal / support pages */
.prose{max-width:760px;padding-block:64px 88px}
.prose h1{font-size:clamp(2rem,4vw,2.8rem);margin-bottom:8px}
.prose .updated{color:var(--text-soft);font-size:.9rem;margin-bottom:32px}
.prose h2{font-size:1.4rem;margin:36px 0 10px}
.prose p,.prose li{color:var(--text);margin-top:12px}
.prose ul{padding-left:22px;margin:8px 0}
.prose a{color:var(--accent)}
.prose table{border-collapse:collapse;width:100%;margin-top:14px;font-size:.92rem}
.prose th,.prose td{border:1px solid var(--border);padding:10px 12px;text-align:left;vertical-align:top}
.prose th{background:var(--bg-alt)}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}

/* ===== Home page: the fun layer ===== */
:root{--rounded:ui-rounded,'SF Pro Rounded','Avenir Next Rounded','Nunito','Segoe UI',system-ui,sans-serif;--sun:#FFC857;--coral:#FF6F61;--mint:#46C2A0}
.fun h1,.fun h2,.fun h3,.fun .num,.fun .vibe b,.fun .store-badge .big{font-family:var(--rounded);font-weight:800;letter-spacing:-.02em}
.fun h1{font-size:clamp(2.6rem,6.4vw,4.4rem);line-height:1.02}
.fun .eyebrow{font-family:var(--rounded)}
.squig{position:relative;display:inline-block;color:var(--sun);white-space:nowrap}
.squig svg{position:absolute;left:0;bottom:-.18em;width:100%;height:.28em;overflow:visible}
.squig path{fill:none;stroke:var(--coral);stroke-width:3;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.chips{list-style:none;display:flex;flex-wrap:wrap;gap:10px;padding:0;margin:26px 0 0}
.chips li{font-family:var(--rounded);font-weight:800;font-size:.82rem;padding:7px 14px;border-radius:999px;background:rgba(255,200,87,.14);color:var(--sun);border:1.5px solid rgba(255,200,87,.45);transition:transform .15s}
.chips li:nth-child(odd){transform:rotate(-2deg)}.chips li:nth-child(even){transform:rotate(1.6deg)}
.chips li:hover{transform:rotate(0) scale(1.06)}
.btn-ghost-deep{background:transparent;border-color:var(--border-on-deep);color:var(--text-on-deep)}
.btn-ghost-deep:hover{background:rgba(255,255,255,.08)}
.store-badge.on-hero{background:#000;border-color:rgba(255,255,255,.5);color:#fff;padding:9px 20px;border-radius:14px}
.hero .cta-row{align-items:center}
.hero .phone.tilt-right{animation:floaty 5.5s ease-in-out infinite}
.hero .phone.tilt-left{animation:floaty2 6.5s ease-in-out infinite}
@keyframes floaty{0%,100%{transform:rotate(6deg) translateY(0)}50%{transform:rotate(4deg) translateY(-10px)}}
@keyframes floaty2{0%,100%{transform:rotate(-8deg) translate(-58px,34px)}50%{transform:rotate(-6deg) translate(-58px,24px)}}
.marquee{overflow:hidden;background:var(--sun);color:#3A0C24;border-block:2px solid #3A0C24;transform:rotate(-1deg);margin-block:-14px 0;position:relative;z-index:3}
.marquee .track{display:flex;gap:0;width:max-content;animation:scroll 38s linear infinite;font-family:var(--rounded);font-weight:800;font-size:1.05rem;padding-block:12px}
.marquee .track span{white-space:nowrap;padding-inline:26px;position:relative}
.marquee .track span::after{content:"";position:absolute;right:-5px;top:50%;width:10px;height:10px;margin-top:-5px;border-radius:50%;background:var(--coral)}
@keyframes scroll{to{transform:translateX(-50%)}}
.vibes{position:relative;display:grid;gap:16px}
.vibe{padding:22px 24px;border-radius:22px;border:2px solid var(--text);background:var(--card-bg);box-shadow:5px 5px 0 var(--text);transition:transform .15s,box-shadow .15s}
.vibe b{display:block;font-size:1.9rem;color:var(--accent)}.vibe span{color:var(--text-soft)}
.vibe.v1{transform:rotate(-1.5deg)}.vibe.v2{transform:rotate(1.2deg);margin-left:22px}.vibe.v3{transform:rotate(-.8deg)}
.vibe:hover{transform:rotate(0) translateY(-3px);box-shadow:8px 8px 0 var(--text)}
.fun .card{border:2px solid var(--text);box-shadow:5px 5px 0 var(--text);border-radius:22px;transition:transform .18s,box-shadow .18s}
.fun .card:nth-child(odd){transform:rotate(-.7deg)}.fun .card:nth-child(even){transform:rotate(.7deg)}
.fun .card:hover{transform:rotate(0) translateY(-5px);box-shadow:8px 10px 0 var(--text)}
.fun .card .icon{width:52px;height:52px;border-radius:16px;color:#fff;background:var(--accent)}
.fun .c2 .icon{background:var(--coral)}.fun .c3 .icon{background:#7B4FD1}.fun .c4 .icon{background:var(--mint);color:#06382b}.fun .c5 .icon{background:var(--sun);color:#3A0C24}.fun .c6 .icon{background:#2E6FD8}
.sub-lede{color:var(--text-soft);margin-top:10px;font-size:1.05rem}
.bottles{display:flex;align-items:flex-end;gap:6px;margin-top:34px;padding:22px 14px 12px;overflow-x:auto;border-bottom:4px solid var(--text);scrollbar-width:thin}
.bottle{all:unset;cursor:pointer;display:block;flex:none;padding:2px 3px;border-radius:10px;transition:transform .15s}
.bottle:hover,.bottle:focus-visible{transform:translateY(-8px) rotate(-3deg)}
.bottle:focus-visible{outline:3px solid var(--sun);outline-offset:2px}
.bottle svg{display:block}
.b-glass{fill:var(--accent)}.b-cap{fill:var(--gold)}.b-label{fill:var(--parchment)}.b-line{fill:none;stroke:#8a6c3c;stroke-width:1.6;stroke-linecap:round}.b-shine{fill:none;stroke:rgba(255,255,255,.35);stroke-width:2.4;stroke-linecap:round}
.bottle[aria-pressed="true"]{transform:translateY(-12px) scale(1.08)}
.bottle[aria-pressed="true"] .b-glass{fill:var(--coral)}
.bottle-out{margin-top:16px;font-family:var(--rounded);font-weight:800;font-size:1.25rem;min-height:1.6em}
.privband{display:flex;gap:28px;align-items:center;padding:clamp(28px,5vw,52px);border-radius:28px;background:var(--bg-deep);color:var(--text-on-deep);border:2px solid var(--gold);position:relative;overflow:hidden}
.privband .lock{flex:none;width:96px;height:96px;border-radius:50%;background:var(--sun);color:#3A0C24;display:flex;align-items:center;justify-content:center;transform:rotate(-6deg)}
.privband h2{color:var(--text-on-deep)}
.privtext{font-family:var(--rounded);font-weight:700;font-size:clamp(1.15rem,2.4vw,1.5rem);margin-top:10px;max-width:34ch}
.textlink{display:inline-block;margin-top:14px;color:var(--sun);font-weight:700}
@media (max-width:600px){.privband{flex-direction:column;align-items:flex-start}}
.fun .step{border-top:0;padding:22px 20px;border-radius:22px;border:2px solid var(--text);background:var(--card-bg);box-shadow:5px 5px 0 var(--text)}
.fun .steps{grid-template-columns:repeat(3,1fr)}
@media (max-width:760px){.fun .steps{grid-template-columns:1fr}}
.fun .step .num{display:inline-flex;width:42px;height:42px;border-radius:50%;align-items:center;justify-content:center;color:#fff;background:var(--accent);font-size:1.2rem;margin-bottom:12px}
.fun .s2 .num{background:var(--coral)}.fun .s3 .num{background:var(--mint);color:#06382b}
.fun .soon{border:2px solid var(--gold)}
.fun .faq summary{font-family:var(--rounded);font-weight:800}
@media (prefers-reduced-motion:reduce){.hero .phone,.marquee .track{animation:none!important}.marquee .track{flex-wrap:wrap;width:auto;justify-content:center}.hero .phone.tilt-right{transform:rotate(6deg)}.hero .phone.tilt-left{transform:rotate(-8deg) translate(-58px,34px)}}
@media (max-width:480px){.hero .phone.tilt-left{display:none}}
html,body{overflow-x:clip}main.fun{overflow-x:clip}
.fun h1{font-size:clamp(2.4rem,5.2vw,3.7rem)}
.hero .wrap>div:first-child{min-width:0}
@media (min-width:900px){.bottles{justify-content:space-between;overflow-x:visible}}
@media (prefers-reduced-motion:reduce){.marquee .track span:nth-child(n+9){display:none}.marquee .track{padding-block:10px;font-size:.95rem;row-gap:4px}}

<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Globevine – wine, but make it a game</title>
<meta name="description" content="Globevine is a free game that makes learning wine fun: spin the globe, taste blind, keep your streak and climb from Piccolo to Goliath. Coming soon to the App Store.">
<link rel="canonical" href="https://www.globevineapp.com/">
<meta property="og:title" content="Globevine – wine, but make it a game">
<meta property="og:description" content="Globevine is a free game that makes learning wine fun: spin the globe, taste blind, keep your streak and climb from Piccolo to Goliath. Coming soon to the App Store.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.globevineapp.com/">
<meta name="theme-color" content="#3A0C24">
<link rel="stylesheet" href="style.css">
<script type="application/ld+json">{"@context": "https://schema.org", "@type": "SoftwareApplication", "name": "Globevine", "applicationCategory": "GameApplication", "operatingSystem": "iOS", "description": "A game for learning wine: explore a world map of wine regions, take daily quizzes, taste blind, pair food and level up.", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "GBP"}, "url": "https://www.globevineapp.com/"}</script>
<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Is Globevine free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Globevine is a free app."}}, {"@type": "Question", "name": "Do I need to create an account?", "acceptedAnswer": {"@type": "Answer", "text": "No. There is no account, password or sign-in. You enter a name, your country and your date of birth once. The app keeps your name, country and an &ldquo;age confirmed&rdquo; result on your device, but not the date of birth itself."}}, {"@type": "Question", "name": "Where is my information stored?", "acceptedAnswer": {"@type": "Answer", "text": "On your device only. Globevine does not send your name, progress, notes or photos to us or to anyone else. See the privacy policy for details."}}, {"@type": "Question", "name": "Is there an age requirement?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Globevine includes wine tasting and serving content, so it is for adults aged 18 and over (or the legal drinking age where you live, if higher)."}}, {"@type": "Question", "name": "Which devices will it support?", "acceptedAnswer": {"@type": "Answer", "text": "Globevine is being built for iPhone and will be available from the App Store."}}, {"@type": "Question", "name": "When can I download it?", "acceptedAnswer": {"@type": "Answer", "text": "Globevine is in development now. This page will link to the App Store as soon as it is live."}}]}</script>
</head>
<body>
<header class="site"><div class="wrap nav">
<a class="brand" href="#top"><svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#A31550"/><path d="M32 6c9 8 9 16 0 26-9 10-9 18 0 26" stroke="#C9A24B" stroke-width="3" fill="none"/><path d="M4 26c14-4 42-4 56 0M4 40c14 4 42 4 56 0" stroke="#C9A24B" stroke-width="2" fill="none" opacity=".6"/></svg>Globevine</a>
<nav class="navlinks" aria-label="Main">
<a class="hide-sm" href="#play">The game</a><a class="hide-sm" href="#private">Privacy</a><a class="hide-sm" href="#faq">FAQ</a><a href="support.html">Support</a>
</nav></div></header>
<main id="top" class="fun">
<section class="hero"><div class="wrap"><div>
<span class="eyebrow on-deep">A game for wine lovers</span>
<h1>Wine, but make it <span class="squig">a game.<svg viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c12-10 24 10 36 0s24 10 36 0 24 10 36 0 24 10 36 0 24 10 36 0 12 6 16 2" /></svg></span></h1>
<p class="lede">Spin the globe. Taste blind. Chase a streak. Climb from a tiny Piccolo all the way to a Goliath. The free game that makes you annoyingly good at wine.</p>
<div class="cta-row"><span class="store-badge on-hero"><span class="small">Coming soon to the</span><span class="big">App Store</span></span><a class="btn btn-ghost-deep" href="#play">See how it plays</a></div>
<ul class="chips" aria-label="Quick facts"><li>Free</li><li>No account</li><li>Works offline</li><li>Adults 18+</li></ul>
</div>
<div class="phone-stage">
<div class="phone tilt-left" aria-hidden="true"><div class="screen"><div class="mini-status"><span>9:41</span><span>&bull;&bull;&bull;</span></div><div class="mini-h">Your Passport</div><div class="mini-sub">Collecting stamps</div><div class="stamp-row"><div class="passport-stamp">FR</div><div class="passport-stamp">IT</div><div class="passport-stamp">ZA</div></div><div class="mini-h" style="margin-top:10px;font-size:.85rem">Magnum</div><div class="bar"><i></i></div><div class="badge-row"><span class="pill">12-day streak</span></div></div></div>
<div class="phone tilt-right" aria-hidden="true"><div class="screen"><div class="mini-status"><span>9:41</span><span>&bull;&bull;&bull;</span></div><div class="mini-h">Where in the world?</div><div class="mini-sub">Drag to pan, pinch to zoom</div><div class="map-dots"><i style="left:30%;top:40%"></i><i style="left:62%;top:58%;opacity:.4"></i><i style="left:74%;top:30%;opacity:.4"></i></div><div class="badge-row"><span class="pill">+8 XP</span><span class="pill">Daily Five</span></div></div></div>
</div></div></section>

<div class="marquee" aria-hidden="true"><div class="track"><span>Spin the globe</span><span>Daily Five</span><span>Blind tasting</span><span>Passport stamps</span><span>Streaks</span><span>Food pairing</span><span>Bottle-size levels</span><span>Your cellar notebook</span><span>Spin the globe</span><span>Daily Five</span><span>Blind tasting</span><span>Passport stamps</span><span>Streaks</span><span>Food pairing</span><span>Bottle-size levels</span><span>Your cellar notebook</span></div></div>

<section id="play"><div class="wrap intro">
<div>
<span class="eyebrow">What is Globevine?</span>
<h2 style="margin-top:10px">A pocket-sized wine adventure.</h2>
<p>Wander a world map. Beat bite-sized challenges. Taste blind, match the food, collect passport stamps and watch your knowledge grow, one daily game at a time.</p>
<p>No cramming. No stuffiness. No wine snobs. Just a really good reason to open your phone for five minutes and come away knowing something brilliant.</p>
</div>
<div class="vibes">
<div class="vibe v1"><b>5 minutes</b><span>is all a day needs</span></div>
<div class="vibe v2"><b>0 snobbery</b><span>guaranteed</span></div>
<div class="vibe v3"><b>100% yours</b><span>private on your phone</span></div>
</div>
</div></section>

<section class="section-alt"><div class="wrap">
<div class="feat-head"><span class="eyebrow">How it plays</span><h2 style="margin-top:10px">Six ways to get hooked.</h2><p>Short, silly-satisfying and built to make you want just one more round.</p></div>
<div class="grid-feat">
<div class="card c1"><div class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/></svg></div><h3>Spin, zoom, drop the pin</h3><p>Pinch and pan a real world map, then drop your pin and see how close you got.</p></div>
<div class="card c2"><div class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg></div><h3>Your Daily Five</h3><p>Five quick questions a day. Keep your streak alive, and a cork has your back when life gets in the way.</p></div>
<div class="card c3"><div class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v6l-5 9a2 2 0 0 0 2 3h14a2 2 0 0 0 2-3l-5-9V3"/><path d="M6 3h12"/></svg></div><h3>Taste blind. Pair like a pro.</h3><p>Mystery flights, food pairings and label puzzles that train your senses, not just your memory.</p></div>
<div class="card c4"><div class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="12" r="3"/></svg></div><h3>Collect passport stamps</h3><p>Fill your passport page by page. Every inky stamp is a corner of the world you have conquered.</p></div>
<div class="card c5"><div class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2h4v5l2 3v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10l2-3z"/></svg></div><h3>Level up, bottle by bottle</h3><p>Start as a Piccolo. Become a Magnum. Aim for the mighty Goliath. Fifteen levels of bragging rights.</p></div>
<div class="card c6"><div class="icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16v16H4z"/><path d="M4 9h16M9 9v11"/></svg></div><h3>Your cellar notebook</h3><p>Keep notes and photos of wines you have tried, all tucked away privately on your phone.</p></div>
</div></div></section>

<section><div class="wrap">
<span class="eyebrow">Your climb</span><h2 style="margin-top:10px">Which bottle will you become?</h2>
<p class="sub-lede">Everyone starts small. Tap a bottle to meet the next level.</p>
<div class="bottles" role="group" aria-label="The 15 levels, from Piccolo to Goliath"><button class="bottle" type="button" data-lv="1" data-name="Piccolo" aria-label="Level 1: Piccolo"><svg viewBox="0 0 40 120" width="15" height="46" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="2" data-name="Demi" aria-label="Level 2: Demi"><svg viewBox="0 0 40 120" width="18" height="53" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="3" data-name="Standard" aria-label="Level 3: Standard"><svg viewBox="0 0 40 120" width="20" height="61" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="4" data-name="Magnum" aria-label="Level 4: Magnum"><svg viewBox="0 0 40 120" width="23" height="68" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="5" data-name="Double Magnum" aria-label="Level 5: Double Magnum"><svg viewBox="0 0 40 120" width="25" height="76" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="6" data-name="Jeroboam" aria-label="Level 6: Jeroboam"><svg viewBox="0 0 40 120" width="28" height="83" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="7" data-name="Imperial" aria-label="Level 7: Imperial"><svg viewBox="0 0 40 120" width="30" height="90" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="8" data-name="Methuselah" aria-label="Level 8: Methuselah"><svg viewBox="0 0 40 120" width="33" height="98" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="9" data-name="Salmanazar" aria-label="Level 9: Salmanazar"><svg viewBox="0 0 40 120" width="35" height="105" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="10" data-name="Balthazar" aria-label="Level 10: Balthazar"><svg viewBox="0 0 40 120" width="38" height="113" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="11" data-name="Nebuchadnezzar" aria-label="Level 11: Nebuchadnezzar"><svg viewBox="0 0 40 120" width="40" height="120" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="12" data-name="Melchior" aria-label="Level 12: Melchior"><svg viewBox="0 0 40 120" width="42" height="127" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="13" data-name="Solomon" aria-label="Level 13: Solomon"><svg viewBox="0 0 40 120" width="45" height="135" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="14" data-name="Sovereign" aria-label="Level 14: Sovereign"><svg viewBox="0 0 40 120" width="47" height="142" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button><button class="bottle" type="button" data-lv="15" data-name="Goliath" aria-label="Level 15: Goliath"><svg viewBox="0 0 40 120" width="50" height="150" aria-hidden="true"><rect x="16" y="2" width="8" height="11" rx="2" class="b-cap"/><path d="M16 12h8v26c0 6 12 12 12 30v46a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6V68c0-18 12-24 12-30z" class="b-glass"/><rect x="9" y="74" width="22" height="26" rx="3" class="b-label"/><path d="M12 80h16M12 86h16M12 92h10" class="b-line"/><path d="M10 70v38" class="b-shine"/></svg></button></div>
<p class="bottle-out" id="bottle-out" role="status" aria-live="polite">Tap a bottle to see its level.</p>
</div></section>

<section id="private" class="section-alt"><div class="wrap"><div class="privband">
<div class="lock" aria-hidden="true"><svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><circle cx="12" cy="15.5" r="1.3"/></svg></div>
<div><span class="eyebrow on-deep">Your business is your business</span>
<h2 style="margin-top:8px">Private by design</h2>
<p class="privtext">No account needed. Your details and progress stay on your iPhone.</p>
<a class="textlink" href="privacy.html">Read the privacy policy &rarr;</a></div>
</div></div></section>

<section id="how"><div class="wrap"><span class="eyebrow">How it works</span><h2 style="margin-top:10px">Playing in under a minute.</h2>
<div class="steps">
<div class="step s1"><span class="num">1</span><h3>Say hello</h3><p>Pick a name and your country, and enter your date of birth once so the app can check you are of legal drinking age. The date is not saved.</p></div>
<div class="step s2"><span class="num">2</span><h3>Play your Daily Five</h3><p>A quick round that fits in a coffee break. Easy to start, hard to stop.</p></div>
<div class="step s3"><span class="num">3</span><h3>Climb and collect</h3><p>Earn XP, protect your streak, grow your bottle and fill your passport.</p></div>
</div></div></section>

<section class="section-alt"><div class="wrap"><div class="soon">
<div><span class="eyebrow on-deep">Coming soon</span><h2 style="margin-top:10px">Get ready to play.</h2>
<p class="lede">Globevine is almost ready for your iPhone. This page will link straight to the App Store the moment it is live.</p></div>
<div><div class="store-badge"><span class="small">Coming soon to the</span><span class="big">App Store</span><span class="ribbon">Free to download</span></div></div>
</div></div></section>

<section id="faq"><div class="wrap"><span class="eyebrow">Questions</span><h2 style="margin-top:10px">Good to know</h2>
<div class="faq">
<details><summary>Is Globevine free? <span class="plus" aria-hidden="true">+</span></summary><p class="a">Yes. Globevine is a free app.</p></details>
<details><summary>Do I need to create an account? <span class="plus" aria-hidden="true">+</span></summary><p class="a">No. There is no account, password or sign-in. You enter a name, your country and your date of birth once. The app keeps your name, country and an &ldquo;age confirmed&rdquo; result on your device, but not the date of birth itself.</p></details>
<details><summary>Where is my information stored? <span class="plus" aria-hidden="true">+</span></summary><p class="a">On your device only. Globevine does not send your name, progress, notes or photos to us or to anyone else. See the <a href="privacy.html">privacy policy</a> for details.</p></details>
<details><summary>Is there an age requirement? <span class="plus" aria-hidden="true">+</span></summary><p class="a">Yes. Globevine includes wine tasting and serving content, so it is for adults aged 18 and over (or the legal drinking age where you live, if higher).</p></details>
<details><summary>Which devices will it support? <span class="plus" aria-hidden="true">+</span></summary><p class="a">Globevine is being built for iPhone and will be available from the App Store.</p></details>
<details><summary>When can I download it? <span class="plus" aria-hidden="true">+</span></summary><p class="a">Globevine is in development now. This page will link to the App Store as soon as it is live.</p></details>
</div></div></section>
</main>
<script src="fun.js" defer></script>
<footer><div class="wrap">
<div class="foot-row"><a class="brand" href="index.html" style="font-size:1.1rem">Globevine</a>
<div class="foot-links"><a href="support.html">Support</a><a href="privacy.html">Privacy policy</a><a href="mailto:info@globevineapp.com">info@globevineapp.com</a></div></div>
<p class="foot-copy">&copy; <span id="year">2026</span> Globevine. Globevine is for adults aged 18 and over. It is a learning game and does not sell alcohol. Please enjoy wine responsibly &mdash; see <a href="https://www.drinkaware.co.uk" rel="noopener">Drinkaware</a>.</p>
</div></footer>
<script>document.getElementById('year').textContent=new Date().getFullYear();</script>
</body></html>
