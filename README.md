# mfuchs.dev - Personal Website

Personal website for Michael Fuchs, Software Security Engineer.

Built with Next.js 16 (App Router), TypeScript (strict), TailwindCSS 4, and pnpm.

---

## Setup

### Prerequisites

- **Node.js** ≥ 22.0.0
- **pnpm** ≥ 10.0.0 - install with `npm i -g pnpm`

### Install & run

```bash
pnpm install
pnpm dev          # http://localhost:3000 (Turbopack)
pnpm build        # Production build
pnpm typecheck    # TypeScript check (no emit)
pnpm lint         # ESLint
pnpm format       # Prettier
```

---

## Project Structure

```
app/              Next.js App Router - pages, layout, sitemap, robots
components/       Reusable UI (Button, Badge, ExternalLink, Navbar, Footer)
features/         Page sections: Hero, About, Skills, Projects, Talks, Contact
content/blog/     MDX blog posts (frontmatter: title, date, description, tags)
lib/              Shared utilities: metadata config, MDX loader
styles/           Global CSS (Tailwind base + custom properties)
```

---

## Writing Blog Posts

Add `.mdx` files to `content/blog/` with this frontmatter:

```mdx
---
title: 'Post Title'
date: 'YYYY-MM-DD'
description: 'One-sentence summary'
tags: ['Tag1', 'Tag2']
---

Your content here...
```

The post will be statically generated at `/blog/[slug]` and appear in the sitemap automatically.

---

## Deployment (Vercel)

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual steps

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (auto-detected)
4. No environment variables required for the static site
5. Deploy - Vercel handles build, CDN, and edge caching

### Environment variables (if extended)

If you add API routes or contact forms later:

```env
# .env.local - never commit this
CONTACT_FORM_TOKEN=...
```

---

## Security Decisions

### HTTP Security Headers

Configured in `next.config.ts` via the `headers()` function, applied to all routes:

| Header                                    | Value                                                                          | Why                                                                                                                                                                        |
| ----------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Content-Security-Policy`                 | `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; ...` | Prevents XSS by restricting resource origins. `unsafe-inline` for styles is required by Tailwind's runtime class injection. Scripts are `'self'`-only - no third-party JS. |
| `X-Frame-Options: DENY`                   | `DENY`                                                                         | Prevents clickjacking by blocking the site from being embedded in any `<iframe>`.                                                                                          |
| `X-Content-Type-Options: nosniff`         | `nosniff`                                                                      | Stops browsers from MIME-sniffing responses, preventing content-type confusion attacks.                                                                                    |
| `Referrer-Policy`                         | `strict-origin-when-cross-origin`                                              | Sends full referrer for same-origin, only origin for cross-origin HTTPS. Prevents leaking URL paths to third parties.                                                      |
| `Permissions-Policy`                      | Restricts camera, mic, geolocation, payment, USB                               | Disables browser features the site doesn't use, minimizing attack surface if JS is ever compromised.                                                                       |
| `Strict-Transport-Security`               | `max-age=63072000; includeSubDomains; preload`                                 | Forces HTTPS for 2 years on the domain and all subdomains. Preload-eligible.                                                                                               |
| `X-DNS-Prefetch-Control: on`              | `on`                                                                           | Enables DNS prefetching for performance without leaking navigation intent.                                                                                                 |
| `X-Permitted-Cross-Domain-Policies: none` | `none`                                                                         | Blocks Adobe Flash/PDF cross-domain policy files (defense-in-depth).                                                                                                       |
| `poweredByHeader: false`                  | -                                                                              | Removes `X-Powered-By: Next.js` to avoid fingerprinting the server stack.                                                                                                  |

### Email Obfuscation

The contact section assembles the email address from parts in client-side JavaScript, so the plaintext address is never in the HTML source. This prevents naive email harvesting scrapers from collecting it from crawled HTML.

### External Links

All links to external domains use a typed `<ExternalLink>` component that enforces `rel="noopener noreferrer"` and `target="_blank"`. This prevents:

- **Tab-napping** (`window.opener` attacks via `noopener`)
- **Referrer leakage** via `noreferrer`

### No Third-Party Scripts

No analytics, ad networks, or tracking pixels are included. The CSP `script-src 'self'` policy enforces this at the browser level.

### TypeScript Strict Mode

`tsconfig.json` enables `strict`, `noUncheckedIndexedAccess`, and `exactOptionalPropertyTypes` - catching a class of runtime errors (null dereference, off-by-one on arrays) at compile time.

---

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`)
- `aria-label` on interactive elements without visible text
- `:focus-visible` outline using the terminal green brand color
- Color contrast ≥ 4.5:1 for all text
- `lang="en"` on `<html>`
- Motion: animations are CSS-based and respect `prefers-reduced-motion` via Tailwind

---

## Performance

- **Static generation (SSG)** for all pages - no server rendering at request time
- **Geist font** via `next/font/google` with `display: swap` - no layout shift
- **Next.js Image** with AVIF/WebP formats for future image assets
- **Turbopack** in development (`next dev --turbopack`)
- No unnecessary client components - `'use client'` only for interactive sections (Navbar scroll, Hero typewriter, Contact email reveal)
