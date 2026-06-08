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

Pushes to `main` run the GitHub Actions workflow, which builds a static export and deploys it to GitHub Pages.

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Environment variables

Copy `.env.example` to `.env.local` for local builds. For private Sanity datasets, add `SANITY_API_READ_TOKEN` as a GitHub Actions secret.
