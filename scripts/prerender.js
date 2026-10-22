import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createServer } from 'vite'
import { SEO_PAGES } from '../src/data/seo.js'
import { SITE } from '../src/data/site.js'

const outputDir = path.resolve('dist')
const routes = Object.keys(SEO_PAGES).filter((route) => route !== '/404')

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function setTag(html, pattern, tag) {
  if (pattern.test(html)) return html.replace(pattern, (_, indent) => `${indent}${tag}`)
  return html.replace('</head>', `  ${tag}\n  </head>`)
}

function addPageMetadata(html, pathName, { title, description, noindex = false }) {
  const fullTitle = `${title} | ${SITE.name}`
  const canonicalPath = pathName === '/' ? '/' : `${pathName.replace(/\/+$/, '')}/`
  const url = `${SITE.url}${canonicalPath}`
  const image = `${SITE.url}/og-image.png`
  const tags = [
    [/^([ \t]*)<title>[\s\S]*?<\/title>/m, `<title>${escapeAttribute(fullTitle)}</title>`],
    [/^([ \t]*)<meta name="description"[^>]*\/?>/im, `<meta name="description" content="${escapeAttribute(description)}" />`],
    [/^([ \t]*)<meta name="robots"[^>]*\/?>/im, `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />`],
    [/^([ \t]*)<link rel="canonical"[^>]*\/?>/im, `<link rel="canonical" href="${escapeAttribute(url)}" />`],
    [/^([ \t]*)<meta property="og:title"[^>]*\/?>/im, `<meta property="og:title" content="${escapeAttribute(fullTitle)}" />`],
    [/^([ \t]*)<meta property="og:description"[^>]*\/?>/im, `<meta property="og:description" content="${escapeAttribute(description)}" />`],
    [/^([ \t]*)<meta property="og:url"[^>]*\/?>/im, `<meta property="og:url" content="${escapeAttribute(url)}" />`],
    [/^([ \t]*)<meta property="og:image"[^>]*\/?>/im, `<meta property="og:image" content="${escapeAttribute(image)}" />`],
    [/^([ \t]*)<meta name="twitter:title"[^>]*\/?>/im, `<meta name="twitter:title" content="${escapeAttribute(fullTitle)}" />`],
    [/^([ \t]*)<meta name="twitter:description"[^>]*\/?>/im, `<meta name="twitter:description" content="${escapeAttribute(description)}" />`],
    [/^([ \t]*)<meta name="twitter:image"[^>]*\/?>/im, `<meta name="twitter:image" content="${escapeAttribute(image)}" />`],
  ]

  let updatedHtml = tags.reduce((result, [pattern, tag]) => setTag(result, pattern, tag), html)
  updatedHtml = setTag(
    updatedHtml,
    /^([ \t]*)<meta property="og:image:alt"[^>]*\/?>/im,
    '<meta property="og:image:alt" content="Occusmart Employee Health &amp; Wellness" />',
  )
  updatedHtml = setTag(
    updatedHtml,
    /^([ \t]*)<meta name="twitter:image:alt"[^>]*\/?>/im,
    '<meta name="twitter:image:alt" content="Occusmart Employee Health &amp; Wellness" />',
  )
  return updatedHtml
}

const vite = await createServer({
  configFile: path.resolve('vite.config.js'),
  appType: 'custom',
  server: { middlewareMode: true },
})

try {
  const [{ default: App }, template, manifestFile] = await Promise.all([
    vite.ssrLoadModule('/src/App.jsx'),
    readFile(path.join(outputDir, 'index.html'), 'utf8'),
    readFile(path.join(outputDir, '.vite', 'manifest.json'), 'utf8'),
  ])
  const manifest = JSON.parse(manifestFile)
  const renderPage = (route) => {
    const markup = renderToString(
      React.createElement(StaticRouter, { location: route }, React.createElement(App)),
    )
    let html = template.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

    for (const [source, asset] of Object.entries(manifest)) {
      if (source.startsWith('src/assets/') && asset.file) {
        html = html.replaceAll(`/${source}`, `/${asset.file}`)
      }
    }

    return html
  }

  for (const route of routes) {
    const page = SEO_PAGES[route]
    const html = addPageMetadata(renderPage(route), route, page)
    const outputPath = route === '/'
      ? path.join(outputDir, 'index.html')
      : path.join(outputDir, route.slice(1), 'index.html')

    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, html)
  }

  const notFound = SEO_PAGES['/404']
  await writeFile(
    path.join(outputDir, '404.html'),
    addPageMetadata(renderPage('/missing-page'), '/404', notFound),
  )
} finally {
  await vite.close()
}
