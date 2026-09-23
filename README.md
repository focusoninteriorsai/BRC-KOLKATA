# BRC Group × FocusOn Interiors — Case Study

Premium single-project presentation site for the **4,200 sq.ft interior & civil fit-out** delivered to **BRC Group** by **FocusOn Interior Decorators Pvt. Ltd.** (PMC: Node Urban Lab).

Programme: **1 May 2026 → 18 August 2026** (109 days / **16 weeks**), completed on time.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL. Production build:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host. `base` is set to `./` so relative asset paths work anywhere.

## Swap-in assets

Search the repo for `ADD ` to find every placeholder.

| Slot | Where | File to drop |
| --- | --- | --- |
| CEO photo (Azim Khan) | `src/data/project.js` → `team.ceo.photo` | `public/images/team/azim-khan.jpg` |
| Project Manager photo (Raj Mishra) | `team.pm.photo` | `public/images/team/raj-mishra.jpg` |
| Client photo (Arun Kumar Rai) | `testimonial.photo` | `public/images/team/arun-kumar-rai.jpg` |
| Completion certificate | `certificates[].src` | `public/images/certificates/completion.jpg` |
| Project video | `film.videoSrc` | `public/videos/project-film.mp4` |
| Extra gallery frames | `gallery[]` | `public/images/gallery/` |

Drive source folder (photos & videos):  
https://drive.google.com/drive/folders/1UfAWR25g7xIDHZkekZg3PpZoS4sNc75F

Until a video file is provided, the gallery player runs a cinematic Ken-Burns sequence of the handover stills, with custom play / seek / fullscreen controls.

## Duration note

Elapsed days from 1 May 2026 to 18 August 2026 = **109 days** ≈ 15 weeks 4 days, presented as **completed in 16 weeks**.
