# Shikhar Pandey — Portfolio

A personal portfolio site for Shikhar Pandey, creative video editor and visual storyteller. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll and hover animations)
- Lenis (smooth scrolling)
- next/font (League Spartan, Plus Jakarta Sans, Space Grotesk)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Note: the first `npm run build` or `npm run dev` needs an internet connection once, since `next/font` fetches League Spartan, Plus Jakarta Sans, and Space Grotesk from Google Fonts at build time and self-hosts them afterward.

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata
    page.tsx           Assembles all sections
    globals.css        Design tokens, marquee, grain, utilities
  components/
    sections/           One component per portfolio section
    Navbar.tsx
    Footer.tsx
    Marquee.tsx         Looping wordmark band
    SpinDisc.tsx        Signature spinning badge
    Lightbox.tsx         Fullscreen preview modal
    SmoothScrollProvider.tsx
    CursorFollower.tsx
  data/
    content.ts          All copy, resume data, and asset paths in one place
public/
  videos/               Compressed video assets + poster frames
  images/                Cutout photos, social posts, Enactus case study images
  resume-shikhar-pandey.pdf
```

To update any text, stat, project, or link, edit `src/data/content.ts` — the components read from it directly.

## Content notes

- The two profile photos have had their backgrounds removed and are saved as transparent PNGs in `public/images/photos/`.
- Videos were re-encoded for web delivery (H.264, capped resolution) so file sizes stay reasonable. `long-dubuddy-fullcut.mp4` is still the largest file at roughly 70 MB; consider moving it to a video host (Vercel Blob, Mux, Cloudinary, or an unlisted YouTube/Vimeo embed) if you hit Git or hosting size limits.
- The Enactus case study section uses the three council-branded posters as placeholders per your notes; swap in the actual campaign visuals whenever you have them.

## Deployment

The project deploys cleanly to Vercel:

1. Push this repo to GitHub as `shikhar-portfolio`.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected). No environment variables are required.
4. Deploy.

If your Git host rejects the repo for size (video assets), either use Git LFS for the `public/videos` folder or move the videos to external storage and update the `src` values in `src/data/content.ts` to point at the hosted URLs..
