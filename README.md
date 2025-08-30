# Personal Portfolio (React)

This repository contains the source code for my personal portfolio website built with React and Create React App (CRA). It includes a responsive layout, sections for projects, skills, education, and Google Analytics integration. The site is deployed to GitHub Pages with a custom domain.

Live site: https://rumanislam.me

## Tech Stack

- React 18 + CRA (`react-scripts`)
- Bootstrap 5 (utility classes)
- ECharts (where used)
- GitHub Pages (deployment)

## Prerequisites

- Node.js ≥ 16 (Node 18 LTS recommended)
- npm ≥ 8
- Git

## Quick Start

1) Install dependencies

```bash
npm install
```

2) Run locally (dev server)

```bash
npm start
```

Then open http://localhost:3000.

3) Build for production

```bash
npm run build
```

Outputs an optimized bundle in `build/`.

## Project Structure

- `src/components/` – Reusable UI blocks (e.g., `Header`, `Footer`, `Home`, `Projects`, `Skills`).
- `src/pages/` – Page-level composition (`MainPage.js`).
- `src/assets/` – Images (project thumbnails, profile images, etc.).
- `public/` – Static assets, HTML shell, manifest, icons.

Key files to edit content:

- Projects: `src/components/Projects.js`
- Skills: `src/components/Skills.js`
- Home/Intro: `src/components/Home.js`
- Styles: `src/components/*.css`, `src/App.css`, `src/index.css`

## Editing Content

- Projects: Each project is a card in `src/components/Projects.js`. Update titles, descriptions, links, and image imports from `src/assets/`.
- Images: Place new images in `src/assets/` and import them in components. Use optimized PNG/JPEG/WebP and aim for widths ~1200px or less.
- Branding: Update the `<title>` and meta tags in `public/index.html`.
- Analytics: Google Analytics is included via gtag in `public/index.html`. Replace the measurement ID (`G-WR3T5DT15Y`) if needed.

## Available Scripts

- `npm start`: Runs the development server.
- `npm run build`: Creates a production build in `build/`.
- `npm test`: Runs tests (if/when added).
- `npm run eject`: Ejects CRA configuration (not recommended).
- `npm run deploy`: Publishes `build/` to GitHub Pages using `gh-pages`.

## Deployment (GitHub Pages + Custom Domain)

This project uses the `gh-pages` package to deploy the build output to the `gh-pages` branch.

1) Ensure `homepage` is set in `package.json`:

```json
"homepage": "https://rumanislam.me"
```

2) Build and deploy

```bash
npm run build
npm run deploy
```

3) Custom domain (CNAME)

To keep the custom domain on each deploy, ensure a `CNAME` file with your domain is included in the deployed `build/`:

Options:
- Add `public/CNAME` with: `rumanislam.me` (CRA copies it into `build/`).
- Or update the deploy script to: `gh-pages -d build -c rumanislam.me`.

4) GitHub Pages settings

- Repository → Settings → Pages → Source: `Deploy from a branch`, Branch: `gh-pages` → `/ (root)`.
- DNS: Point your domain’s DNS to GitHub Pages per GitHub’s docs (A/AAAA and CNAME records).

## SEO & PWA Notes

- Update meta tags in `public/index.html` (description, social preview).
- `public/manifest.json` is present; customize app name, theme color, and icons.
- Optimize images and consider adding `alt` text for accessibility.

## Troubleshooting

- Blank page after deploy: Verify `homepage` in `package.json` and that you’re not using a `BrowserRouter` with incorrect basename.
- 404 on refresh: If using client-side routing, enable the `404.html` redirect workaround. CRA’s default static export usually suffices if no nested routes.
- Custom domain keeps reverting: Ensure the `CNAME` file is included in each deploy (see above).
- Analytics not recording: Confirm the GA Measurement ID in `public/index.html` and that the site loads over HTTPS.

## Updating Dependencies

```bash
npm outdated
npm update
```

When upgrading major versions (React, react-scripts), follow any migration notes and test locally before deploying.

---

Maintainer: Md Ruman Islam
Website: https://rumanislam.me
