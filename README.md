# BRC Group × FocusOn Interiors — Case Study

Complete static frontend for the **4,200 sq.ft interior & civil fit-out** delivered to **BRC Group** by **FocusOn Interior Decorators Pvt. Ltd.** (PMC: Node Urban Lab).

**Homepage:** `index.html`

Open `index.html` in a browser, or enable GitHub Pages on this repository (source: root / `index.html`).

Programme: **1 May 2026 → 18 August 2026** (109 days / **16 weeks**), completed on time.

## Files

```
index.html          ← main homepage
css/styles.css
js/main.js
images/gallery/     handover stills + thumbs
images/logos/       FocusOn + BRC marks
images/team/        drop portraits here
images/certificates drop scans here
videos/             project film (streamed from Google Drive)
favicon.png
```

No build step. No npm. No server.

## Swap-in assets

Search the site for `ADD ` to find every placeholder.

| Slot | Drop file at |
| --- | --- |
| CEO photo (Azim Khan) | `images/team/azim-khan.jpg` then update the portrait in `index.html` |
| Project Manager (Raj Mishra) | `images/team/raj-mishra.jpg` |
| Client photo (Arun Kumar Rai) | `images/team/arun-kumar-rai.jpg` |
| Completion certificate | `images/certificates/completion.jpg` |
| Project video | Already embedded — plays in the gallery player via Google Drive (`drive.google.com/file/d/1OKRYQh_SsAHSd5LOtB4rT_0f4VkJlP8Y/preview`). To swap the id, change `VIDEO_FILE_ID` in `js/main.js` and the two links in the film meta strip in `index.html`. |

Drive source folder:
https://drive.google.com/drive/folders/1UfAWR25g7xIDHZkekZg3PpZoS4sNc75F

The gallery film player now embeds the real project film — "FOCUSON 4K WITH INTRO" —
straight from Google Drive. On load it shows a cinematic poster; pressing play mounts
the Drive player (lazy) so the 1.5 GB 4K film is only fetched on demand. Until the
frame is ready a gold spinner shows, and Watch on Drive / Download 4K links sit under
the player for the full-quality original.

