# Dr. Mahaboob Shaik — Website

Static Next.js site for educational and career counselling. Content is loaded from Sanity at build time.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

The site is published to:

https://counsellorprenuer.github.io/Mahaboob_Shaik/

Pushes to `main` build the site and publish it to the `gh-pages` branch.

In **Settings → Pages → Build and deployment**, set:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages` / `/ (root)`

## Environment variables

Copy `.env.example` to `.env.local` for local builds. For private Sanity datasets, add `SANITY_API_READ_TOKEN` as a GitHub Actions secret.
