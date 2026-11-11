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

## AI theme generator (optional)

Visitors can describe a look ("a calm ocean at dusk") and Claude picks a theme for the page. The Theme menu gets a **Generate a theme…** option and a fourth **Custom (AI)** theme.

- The Anthropic call runs in a Cloudflare Worker (`worker/`), never in the browser. The API key is a Worker secret.
- Claude returns design tokens only (colours, fonts from an allowlist, radius, shadow, background pattern), never CSS or HTML. The tokens are validated by `src/lib/themeTokens.ts` in the Worker and again in the browser, which also enforces WCAG AA contrast (adjusting or rejecting colours).
- The Worker limits CORS to `https://mellyynda.github.io` and localhost, caps prompt length and `max_tokens`, rate-limits per IP (burst limit plus an hourly limit) and has a global daily cap.
- The feature only appears when `PUBLIC_THEME_API_URL` is set at build time, so the site never shows a broken button.

### Run locally

```sh
cd worker && npm install
npm run dev:mock                                   # sample themes, no API key needed (http://localhost:8787/theme)
# or: cp .dev.vars.example .dev.vars, add your key, then npm run dev

# in the repo root, in another terminal
PUBLIC_THEME_API_URL=http://localhost:8787/theme npm run dev
```

In mock mode, a prompt containing `mock:incomplete` returns a theme with missing fields, so you can check that the Worker rejects it and the dialog shows an error. `npm test` in the repo root runs the token validation tests.

### Deploy the Worker

Needs a free Cloudflare account and an Anthropic API key.

```sh
cd worker
npx wrangler login
npx wrangler secret put ANTHROPIC_API_KEY          # paste the key when asked; it is never stored in the repo
npx wrangler deploy                                 # prints https://portfolio-theme.<subdomain>.workers.dev
```

The first deploy also creates the `RATE_KV` namespace for the rate limits. Limits, model and allowed origins are in `worker/wrangler.toml`.

Then enable it on the site: in GitHub, go to **Settings → Secrets and variables → Actions → Variables** and add `PUBLIC_THEME_API_URL` = `https://portfolio-theme.<subdomain>.workers.dev/theme`. The next deploy of `main` shows the feature. Delete the variable to hide it again.

**Set a spend limit:** in the [Anthropic Console](https://console.anthropic.com/settings/limits), set a low monthly spend limit for the workspace that owns the key (a few dollars is plenty for Claude Haiku), and consider a dedicated key for this Worker so you can revoke it on its own.
