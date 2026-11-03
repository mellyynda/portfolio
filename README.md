# Melinda Sava – portfolio

Static personal site in English (`/`) and Swedish (`/sv/`), built with [Astro](https://astro.build) and hosted on GitHub Pages at https://mellyynda.github.io/portfolio/ (deployed by `.github/workflows/deploy.yml` on every push to `main`).

The previous version (React, 2021) lives on the `legacy-2021` branch and is still online at https://mellyynda-portfolio.surge.sh.

- All content lives in `src/data/content.ts` (one block per language).
- SEO: per-language title/description, canonical + hreflang, Open Graph image, JSON-LD (`Person`, `ProfilePage`), `sitemap.xml`, `robots.txt`.
- GEO (AI answer engines): `public/llms.txt` summary, structured `Person` data, and AI crawlers allowed in `robots.txt`.

```sh
npm install
npm run dev      # local dev server
npm run build    # outputs dist/
```

When content changes, update `public/llms.txt` and the `lastmod` dates in `public/sitemap.xml` too.
