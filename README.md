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
| Page copy | `src/pages/*.jsx` |
| Colours and type | top of `src/index.css` (design tokens) |
| Contact form delivery | `.env` (see below) |

## Contact form

Copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT` to a Formspree, Getform or Web3Forms URL.
With no endpoint the form opens the visitor's email app with a pre-filled message, which works
but is not as reliable as a form service.

## Deploying

The site is a single page app, so the host must serve `index.html` for every route.
`public/_redirects` covers Netlify and Cloudflare Pages, `vercel.json` covers Vercel.
After the domain is confirmed, check the URLs in `index.html`, `public/sitemap.xml`,
`public/robots.txt` and `src/data/site.js`.
