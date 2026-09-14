<div align="center">

<img src=".github/readme/banner.svg" alt="Nikita Uday — Product Portfolio" width="100%">

[![React](https://img.shields.io/badge/React-18-173c4a?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-2aa298?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13-c91f6e?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-173c4a?style=flat-square&logo=github&logoColor=white)](https://nikitauday.github.io)

**Live at [nikitauday.github.io](https://nikitauday.github.io)**

</div>

---

## What's in it

A four-page static site:

- **Home** (`index.html`) — intro, work experience timeline, a filterable
  grid of case studies, credentials (education, resume download), and a
  contact section.
- **Projects** (`projects.html`) — deep-dive case studies (Smart Schedule
  App / Aurora, GUARDIAN, COVID Monitoring System, Shoulder Season), each
  broken into Problem / Approach / Outcome / Methods.
- **Research** (`research.html`) — market and industry research write-ups.
- **About** (`about.html`) — background, photos, and personal notes.

## How it was built

The site is a plain **React + Vite** multi-page app (no router — each
page above is its own HTML entry point that mounts its own React root).
Styling is hand-written CSS using custom properties for a shared design
system (color, spacing, type scale), and **Framer Motion** drives the
scroll fades, staggered reveals, and hover transitions throughout.

Visual design started as mockups in Claude Design (a canvas-based design
tool), then Claude Code implemented and iterated on those designs as the
actual React components you see here — keeping the two in sync as the
copy and layout evolved. GA4 (`gtag.js`) is wired in for basic analytics.

The site deploys automatically: a GitHub Actions workflow
(`.github/workflows/deploy.yml`) builds the app with `npm run build` and
publishes `dist/` to GitHub Pages on every push to `main`.

## Local development

```bash
npm install
npm run dev       # start the Vite dev server
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  components/   shared UI (Nav, Footer, Reveal, StatSilhouette, ...)
  pages/        AboutPage, ProjectsPage, ResearchPage
  data/         content.js — work cards, experience, education, skills
  hooks/        useHashScroll, useCopyEmail
  assets/       images, logos, resume PDF, diagrams
*.html          per-page entry points (index, about, projects, research)
```

## Brand palette

| | Hex | Used for |
|---|---|---|
| ![#173c4a](https://img.shields.io/badge/-%20-173c4a?style=flat-square) | `#173c4a` | Ink — body text, headings |
| ![#5f7a82](https://img.shields.io/badge/-%20-5f7a82?style=flat-square) | `#5f7a82` | Muted ink — secondary text |
| ![#c91f6e](https://img.shields.io/badge/-%20-c91f6e?style=flat-square) | `#c91f6e` | Terracotta — primary accent |
| ![#2aa298](https://img.shields.io/badge/-%20-2aa298?style=flat-square) | `#2aa298` | Sage — secondary accent |
| ![#f7ecc9](https://img.shields.io/badge/-%20-f7ecc9?style=flat-square) | `#f7ecc9` | Cream — page background |

Heading font: **DM Serif Display**. Body font: **Instrument Sans**.
