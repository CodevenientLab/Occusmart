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

GitHub Pages deploys automatically from the `main` branch using
`.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and
deployment → Source** to **GitHub Actions**. The project site is published at
`https://codevenientlab.github.io/Occusmart/`.

The Vite build uses the `/Occusmart/` base path in GitHub Actions, while local,
Vercel, and Netlify builds keep the root path. `public/_redirects` covers Netlify and
Cloudflare Pages; `vercel.json` covers Vercel.

## Contact form delivery

Without `VITE_FORM_ENDPOINT`, the contact form opens a pre-filled message in the
visitor's email app; the visitor must send it themselves. To enable web-based
delivery, configure an endpoint from a supported form provider as the
`VITE_FORM_ENDPOINT` Actions secret in the GitHub repository. The endpoint is
included in the static site build, so use a form provider intended for browser
submissions and configure its spam protections.

After confirming the production domain, review the canonical and social URLs in
`index.html` and `src/data/site.js`, plus `public/sitemap.xml` and `public/robots.txt`.
