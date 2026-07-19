# Avishkar Choundkar — Portfolio

Next.js App Router + TypeScript + Tailwind CSS + Framer Motion.

Design system: floating pill navbar, oversized uppercase display type
(Archivo), alternating dark/light sections, a hand-drawn-style curve accent
in the hero and footer, a numbered accordion for services, and a big
closing CTA — inspired by the layout language you shared screenshots of,
rebuilt with your own name, content, and an original abstract graphic
treatment (no illustrated avatar was copied).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — routes (Home, About, Projects/Work, Experience, Contact)
- `components/` — reusable UI, organized by page/section
- `lib/data.ts` — all real content (projects, links, experience, achievements)

## Design tokens

- Ink (dark sections) `#0B0B0C`
- Paper (light background) `#FAFAF7`
- Card `#F2F1EC`
- Accent `#E08D4B`
- Display font: Archivo (extrabold, uppercase, tight tracking)
- Body font: Inter

## Before you ship this

1. **About page copy** — Introduction, Childhood, Engineering Journey,
   Today, Outside Coding are placeholders. Replace with your own words.
2. **Memory Lane images** — 8 empty hover-zoom tiles in
   `components/about/MemoryLane.tsx`, ready for real photos.
3. **Project screenshots** — every card uses a gradient plaque instead of a
   real screenshot. Drop images into `public/images/` and swap them in.
4. **Project descriptions** in `lib/data.ts` — short neutral descriptions
   were written for projects where none were given (BookMyTurf,
   ScholarsHub, NoteVault, and the GitHub repos). Edit for accuracy.
5. **Tech stack chips** on the home page are pulled directly from each
   project's tech list in `lib/data.ts` — add to a project's `tech` array
   to have it show up there automatically.

## Deploying

Standard Next.js app — deploys cleanly to Vercel with zero config.
