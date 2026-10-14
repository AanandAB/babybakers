# Baby Bakers — Website

**"Tempting Experience. Since 1976."**
A fully responsive, scroll-animated marketing website for Baby Bakers, a Kerala bakery.

---

## Quick start (view it locally)

From this folder, run a tiny web server and open the URL:

```bash
python -m http.server 8753
```

Then open **http://localhost:8753** in your browser.

> You can also just double-click `index.html`, but running the little server
> above is recommended (some browsers block the menu data on `file://`).

---

## What's on the page (single-page scroll story)

1. **Hero** – logo reveal, tagline, parallax background, Explore Menu / Find a Store buttons
2. **Our Story** – 1976 heritage, a 4-step timeline, and animated count-up stats
3. **Categories** – a horizontal "counter shelf" you scroll through (tap a shelf → jumps to that menu category)
4. **Custom Cakes** – spotlight with a cake gallery and a WhatsApp custom-order button
5. **Menu** – filterable by category (Sweets, Cakes, Savouries, Bakery, Biscuits & Toffees), 50 items with English + Malayalam names, veg/egg markers, prices, and one-tap "Order on WhatsApp"
6. **Locations** – Google map + all 6 points (4 outlets + 2 hypermarket stockists) with Directions links
7. **Contact / Bulk Orders** + footer with the floating WhatsApp button

Responsive down to phones, and it respects "reduce motion" accessibility settings.

---

## How to edit the content (no coding needed)

Everything you'll want to change lives in **`js/data.js`**. Open it in Notepad/VS Code.

| To change… | Edit in `js/data.js` |
|---|---|
| **Phone / WhatsApp / email** | the `CONFIG` block at the top |
| **Menu items, prices, veg/egg, Malayalam names** | the `MENU` list |
| **Category shelves** | the `CATEGORIES` list |
| **Stats numbers** (years, outlets…) | the `STATS` list |
| **Shop names, areas, hours, map pins** | the `LOCATIONS` list |
| **The 1976 timeline** | the `TIMELINE` list |

### ⚠️ Before going live — replace these placeholders
- **Phone / WhatsApp number & email** in `CONFIG` (currently `910000000000` and
  `hello@babybakers.in` — dummy values). Put the real WhatsApp number in
  international format, digits only, e.g. `9198XXXXXXXX`.
- **Location names, areas, and opening hours** in `LOCATIONS` (currently generic
  placeholders — the map *pins* use your real coordinates, but confirm the
  names/addresses/timings).

---

## Adding / changing product photos

- Photos live in **`assets/images/<category>/<name>.jpg`**.
- To swap a photo, just replace the file with your own (keep the same filename),
  or point the `img:` field in `js/data.js` to a new file.
- Recommended: square-ish, ~800–1000px wide, saved as JPG/WebP, under ~250 KB.
- If an image is ever missing, the site automatically shows a branded wheat-icon
  tile instead of a broken image — so nothing ever looks broken.

### About the current images
The photos shipped here are **placeholders sourced from Wikimedia Commons**
(free / Creative-Commons licensed) purely to show the design with real food.
**For the live commercial site, replace them with Baby Bakers' own product
photography** — it will look far stronger, and avoids any attribution
requirements. Real shop imagery of your laddu, halwa, cakes and bread is the
single biggest visual upgrade you can make.

---

## Deploying to GitHub Pages

**Live now: https://aanandab.github.io/babybakers/**

The repo (`AanandAB/babybakers`) publishes straight from the `main` branch:

- **Pages setting:** Settings → Pages → Source = **Deploy from a branch**, `main`, `/ (root)`
- **`.nojekyll`** in the repo root stops GitHub from running the site through Jekyll,
  so every file is served exactly as committed.
- **No build step.** Just commit and push to `main` — GitHub redeploys automatically
  in about a minute (watch it under the repo's **Actions** tab).

> The site is served from a subpath (`/babybakers/`), so all links and asset paths
> are **relative** (`css/style.css`, `assets/images/…`). Keep them relative — a path
> starting with `/` would break on the project-site URL but work locally.

It's a static site (HTML/CSS/JS), so GitHub Pages, Netlify, Cloudflare Pages, or
any static host works with zero configuration.

---

## Tech
Plain HTML + CSS + vanilla JS, with **GSAP + ScrollTrigger** (loaded from CDN)
for the scroll animations and pinned horizontal showcase. No build step, no
dependencies to install.

## File map
```
index.html          – page structure
css/style.css        – all styling + responsive + reduced-motion
js/data.js           – ← ALL editable content (menu, prices, locations…)
js/main.js           – rendering + animations (no need to touch)
logobaby.png         – your logo (used in nav, hero, footer, favicon)
assets/images/…      – product & hero photography (53 images)
```
