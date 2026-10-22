# Occusmart website

React 19 + Vite 8 + React Router. Brand assets live in `src/assets`, content in `src/data`.

## Run

```bash
npm install
npm run dev        # local development
npm run build      # production build in dist/
npm run preview    # serve the build locally
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, email, address, tagline | `src/data/site.js` |
| Services, descriptions, icons | `src/data/services.js` |
| Page titles and search/social descriptions | `src/data/seo.js` |
| Page copy | `src/pages/*.jsx` |
| Colours and type | top of `src/index.css` (design tokens) |
| Contact form delivery | `.env` (see below) |

## Contact form

Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a Formspree, Getform or Web3Forms URL.
With no endpoint the form opens the visitor's email app with a pre-filled message, which works
but is not as reliable as a form service.

## Deploying

The production build prerenders each route into `dist/` with its own page content and SEO metadata.
Keep the host's SPA fallback for unknown paths; `dist/404.html` provides the not-found page.
`public/_redirects` covers Netlify and Cloudflare Pages, `vercel.json` covers Vercel, and
`.github/workflows/deploy.yml` deploys to GitHub Pages.
