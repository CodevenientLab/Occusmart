import { useEffect } from 'react'
import { SITE } from '../data/site.js'

function setMeta(selector, attr, key, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(attr === 'link' ? 'link' : 'meta')
    if (attr === 'link') el.setAttribute('rel', key)
    else el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute(attr === 'link' ? 'href' : 'content', value)
}

// Keeps title, description, canonical and social tags in step with the route.
export default function Seo({ title, description, path = '/', noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | Occupational health services in Centurion`
    const canonicalPath = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`
    const url = `${SITE.url}${canonicalPath}`
    document.title = fullTitle
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('link[rel="canonical"]', 'link', 'canonical', url)
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="og:image"]', 'property', 'og:image', `${SITE.url}/og-image.png`)
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'Occusmart Employee Health & Wellness')
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200')
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630')
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${SITE.url}/og-image.png`)
    setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', 'Occusmart Employee Health & Wellness')
  }, [title, description, path, noindex])

  return null
}
