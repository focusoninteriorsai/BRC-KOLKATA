# BRC Group × FocusOn Interiors — Case Study

Complete static frontend for the **4,200 sq.ft interior & civil fit-out** delivered to **BRC Group** by **FocusOn Interior Decorators Pvt. Ltd.** (PMC: Node Urban Lab).

**Homepage:** `index.html`

Open `index.html` in a browser, or enable GitHub Pages on this repository (source: root / `index.html`).

Programme: **1 May 2026 → 18 August 2026** (109 days / **16 weeks**), completed on time.

Theme: **FocusOn bright** — cream/ivory paper, warm ink, FocusOn brand orange (#E7491C), gold hairlines.

## Files

```
index.html          ← main homepage
css/styles.css      ← bright FocusOn theme
js/main.js          ← 🔗 SITE_MEDIA (all media hyperlinks) + gallery/lightbox/video
images/gallery/     project stills + thumbs (client's photos)
images/logos/       FocusOn + BRC marks
images/clients/     drop client photos here
images/certificates drop scans here
videos/             film info
favicon.png
```

No build step. No npm. No server.

## 🔗 Replace photos / video (hyperlinks)

**Sab kuch ek hi jagah milega:** `js/main.js` ke **top** par `SITE_MEDIA` object.

| Cheez | Kahan replace karo |
| --- | --- |
| Project film (YouTube) | `SITE_MEDIA.video` — koi bhi YouTube format (youtu.be / watch / shorts) |
| 4K file buttons (Drive) | `SITE_MEDIA.video4kView`, `SITE_MEDIA.video4kDownload` |
| Client photo (CMD) | `SITE_MEDIA.clientPhoto` — local path ya direct URL |
| Hero photos | `SITE_MEDIA.hero` array |
| Gallery photos | `SITE_MEDIA.gallery` array (`thumb`, `full`, `cap`) |

Link badalte hi **hero, gallery, lightbox aur video player** sab apne aap update ho jate hain.

Current film: [PROJECT BRC GROUP BY FOCUSON INTERIORS PVT LTD](https://youtu.be/7DvNoR_8eFk)

## Features

- **YouTube film** in the gallery section (lazy-mounted, plays on click)
- **Every photo is expandable** — hero, gallery, film cover and client photo open in a lightbox (prev/next, keyboard arrows, Esc, mobile swipe, "Open full photo" hyperlink)
- **Bright FocusOn theme** (no dark mode)
- **Client photos only** — FocusOn team photo section removed
