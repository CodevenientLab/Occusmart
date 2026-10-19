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
    const url = `${SITE.url}${path === '/' ? '/' : path}`
    document.title = fullTitle
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('link[rel="canonical"]', 'link', 'canonical', url)
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, follow' : 'index, follow')
  }, [title, description, path, noindex])

  return null
}
