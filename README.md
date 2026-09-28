# Vidyalaya OS — website

Marketing site for **Vidyalaya OS**, school management software for Indian
schools: home, features, pricing, help centre (docs), blog, book a demo, and
the legal pages. Built with Next.js 16 (App Router), Tailwind CSS 4 and MDX.
Every page is prerendered as static HTML.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:3001
pnpm build    # production build
pnpm lint
```

This version of Next.js differs from older ones — read `AGENTS.md` and the
docs in `node_modules/next/dist/docs/` before changing framework code.

## Where things are

| Path | What |
|---|---|
| `src/app/` | Pages, plus `sitemap.ts`, `robots.ts`, `manifest.ts`, icons and share images |
| `src/content/docs/*.mdx`, `docs.ts` | Help centre articles and their menu |
| `src/content/blog/*.mdx`, `blog.ts` | Blog posts (newest first) |
| `src/content/legal/*.mdx` | Privacy, terms, refunds, security |
| `src/content/features.ts`, `pricing.ts` | Feature list and the pricing plan |
| `src/lib/site.ts` | Company details and URLs |
| `src/styles/tokens.css` | Design tokens, shared with the app |
| `public/screenshots/` | Product screenshots (demo data) |

To add a doc or blog post: add an entry to `docs.ts` / `blog.ts` and a
matching `.mdx` file with the same slug. The sitemap updates itself.

## Before launch

- Fill in every `[TODO: …]` value in `src/lib/site.ts` (company name,
  address, contact, grievance officer, hosting) and the jurisdiction city in
  `src/content/legal/terms.mdx`.
- Have a lawyer review the privacy policy, terms and refund policy — they are
  templates.
- Set a price in `src/content/pricing.ts` (until then the page says "Get a quote").

## Deploying on Vercel

Framework preset: Next.js (detected automatically). Set these environment
variables (see `.env.example`):

| Variable | Example | Used for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://vidyalaya-os.vercel.app` | Canonical links, sitemap, share images |
| `NEXT_PUBLIC_APP_URL` | `https://app.example.in` | The "Log in" links |
| `API_URL` | `https://api.example.in/api` | "Book a demo" posts here (server-side) |

The "Book a demo" form needs `API_URL` to reach the Vidyalaya OS backend; until
the backend is deployed, submitting it shows "We couldn’t send your request".
