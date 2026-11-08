// Build sonrası: her sayfa için içeriği ve SEO etiketleri hazır statik HTML üretir,
// ayrıca 404.html, sitemap.xml ve robots.txt dosyalarını yazar.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const { render, allRoutes, extraRoutes, getMeta, headHtml, SITE_URL } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const page = (head, body) => template.replace('<!--app-head-->', head).replace('<!--app-html-->', body)

const routes = allRoutes()
for (const url of [...routes, ...extraRoutes]) {
  const html = page(headHtml(getMeta(url)), render(url))
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
}

// Bilinmeyen adresler: boş kök, uygulama tarayıcıda 404 sayfasını çizer
fs.writeFileSync(path.join(dist, '404.html'), page(headHtml(getMeta('/__404')), ''))

// lastmod yalnızca gerçekten bilinen değişiklik tarihi olan sayfalara (blog yazıları) yazılır.
// Her build'de tüm sayfalara bugünün tarihini yazmak Google'ın bu alana güvenmemesine yol açar.
const lastmod = m => m.post ? `<lastmod>${m.post.updated || m.post.date}</lastmod>` : ''
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(u => { const m = getMeta(u); return `  <url><loc>${m.url}</loc>${lastmod(m)}</url>` }).join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerender: ${routes.length} sayfa, 404.html, sitemap.xml, robots.txt yazıldı`)
