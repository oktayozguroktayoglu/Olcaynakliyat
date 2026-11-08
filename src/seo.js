// Sayfa bazlı SEO bilgileri: başlık, açıklama, canonical, Open Graph ve yapısal veri (JSON-LD).
// Hem prerender (build sırasında statik HTML üretimi) hem de tarayıcıdaki sayfa geçişleri bu dosyayı kullanır.
import { PHONE, EMAIL, MAPS, REVIEW_URL, GA_ID, GSC_VERIFICATION, services, neighborhoods, slugify, pexels } from './data.js'
import { posts } from './blog.js'
import { generalFaq, serviceFaq } from './faq.js'

export const SITE_URL = 'https://olcaynakliyat.tr'
const BRAND = 'Olcay Nakliyat'
const OG_IMAGE = pexels(7464687)
const PHONE_INTL = '+90 539 784 54 80'

const canonical = path => SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, '') + '/')

// Prerender edilecek ve site haritasına girecek tüm sayfalar
export function allRoutes() {
  return [
    '/',
    '/hizmetler',
    ...services.map(s => '/hizmetler/' + s.slug),
    '/semtler',
    ...neighborhoods.map(n => '/semtler/' + slugify(n)),
    '/blog',
    ...posts.map(p => '/blog/' + p.slug),
    '/hakkimizda',
    '/iletisim',
  ]
}

// Prerender edilen ama site haritasına girmeyen, arama motorlarına kapalı sayfalar
export const extraRoutes = ['/yorum']

export function getMeta(rawPath) {
  const path = rawPath.length > 1 ? rawPath.replace(/\/$/, '') : rawPath
  const parts = path.split('/').filter(Boolean)
  const base = { path, url: canonical(path), crumbs: [] }

  if (path === '/') return { ...base, faq: generalFaq,
    title: 'Olcay Nakliyat | Kadıköy Evden Eve Nakliyat ve Asansörlü Taşıma',
    description: 'Kadıköy ve İstanbul genelinde evden eve nakliyat, asansörlü taşıma, ofis taşıma ve paketleme. Olcay Nakliyat’tan ücretsiz fiyat teklifi alın: ' + PHONE + '.',
  }
  if (path === '/hizmetler') return { ...base,
    title: 'Nakliyat Hizmetlerimiz | Olcay Nakliyat Kadıköy',
    description: 'Evden eve nakliyat, asansörlü taşıma, ofis ve iş yeri taşıma, paketleme, merdivenli taşıma ve 7/24 acil nakliye. Kadıköy’de güvenli taşımacılık.',
    crumbs: [['Hizmetlerimiz', '/hizmetler']],
  }
  if (parts[0] === 'hizmetler' && parts[1]) {
    const s = services.find(x => x.slug === parts[1])
    if (s) return { ...base,
      title: `${s.title} Kadıköy | Olcay Nakliyat`,
      description: `${s.short} Kadıköy ve İstanbul genelinde ${s.title.toLocaleLowerCase('tr-TR')} için ücretsiz teklif alın: ${PHONE}.`,
      crumbs: [['Hizmetlerimiz', '/hizmetler'], [s.title, path]],
      service: s,
      faq: serviceFaq[s.slug],
    }
  }
  if (path === '/semtler') return { ...base,
    title: 'Hizmet Bölgeleri | Kadıköy Nakliyat | Olcay Nakliyat',
    description: 'Fikirtepe, Moda, Göztepe, Erenköy, Suadiye, Bostancı ve Kadıköy’ün diğer semtlerinde evden eve nakliyat ve asansörlü taşıma hizmeti.',
    crumbs: [['Hizmet Bölgeleri', '/semtler']],
  }
  if (parts[0] === 'semtler' && parts[1]) {
    const n = neighborhoods.find(x => slugify(x) === parts[1])
    if (n) return { ...base,
      title: `${n} Nakliyat | Evden Eve ve Asansörlü Taşıma | ${BRAND}`,
      description: `${n} ve çevresinde evden eve nakliyat, asansörlü taşıma, ofis taşıma ve paketleme. ${n} nakliyat için ücretsiz fiyat teklifi: ${PHONE}.`,
      crumbs: [['Hizmet Bölgeleri', '/semtler'], [`${n} Nakliyat`, path]],
      area: n,
    }
  }
  if (path === '/blog') return { ...base,
    title: 'Blog: Taşınma Rehberleri ve İpuçları | Olcay Nakliyat',
    description: 'Nakliyat fiyatları, taşınma kontrol listesi, asansörlü taşıma ve paketleme hakkında rehberler. Taşınmadan önce bilmeniz gerekenler.',
    crumbs: [['Blog', '/blog']],
  }
  if (parts[0] === 'blog' && parts[1]) {
    const post = posts.find(x => x.slug === parts[1])
    if (post) return { ...base,
      title: post.title.length > 52 ? post.title : `${post.title} | ${BRAND}`,
      description: post.description,
      crumbs: [['Blog', '/blog'], [post.title, path]],
      post,
    }
  }
  if (path === '/hakkimizda') return { ...base,
    title: 'Hakkımızda | Olcay Nakliyat Kadıköy',
    description: 'Olcay Nakliyat, Kadıköy merkezli olarak evden eve nakliyat, asansörlü taşıma ve ofis taşımacılığı hizmeti verir. Planlı ve özenli taşıma.',
    crumbs: [['Hakkımızda', '/hakkimizda']],
  }
  if (path === '/yorum') return { ...base, noindex: true, redirect: REVIEW_URL,
    title: 'Olcay Nakliyat’ı Değerlendirin',
    description: 'Taşınmanız nasıl geçti? Deneyiminizi Google’da birkaç cümleyle paylaşın.',
  }
  if (path === '/iletisim') return { ...base,
    title: 'İletişim ve Fiyat Teklifi | Olcay Nakliyat',
    description: `Olcay Nakliyat iletişim: ${PHONE}, WhatsApp ve adres bilgileri. Taşınma detaylarınızı paylaşın, ücretsiz fiyat teklifi alın.`,
    crumbs: [['İletişim', '/iletisim']],
  }
  return { ...base, notFound: true,
    title: 'Sayfa Bulunamadı | Olcay Nakliyat',
    description: 'Aradığınız sayfa bulunamadı.',
  }
}

const business = {
  '@type': 'MovingCompany',
  '@id': SITE_URL + '/#isletme',
  name: BRAND,
  url: SITE_URL + '/',
  logo: SITE_URL + '/favicon.svg',
  image: OG_IMAGE,
  telephone: PHONE_INTL,
  email: EMAIL,
  hasMap: MAPS,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mandıra Caddesi, Kızım Sk. No:10',
    postalCode: '34744',
    addressLocality: 'Kadıköy',
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
  },
  areaServed: [{ '@type': 'City', name: 'İstanbul' }, ...['Kadıköy', ...neighborhoods].map(name => ({ '@type': 'Place', name }))],
  makesOffer: services.map(s => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: canonical('/hizmetler/' + s.slug) } })),
}

export function getJsonLd(meta) {
  const graph = [
    { '@type': 'WebSite', '@id': SITE_URL + '/#site', url: SITE_URL + '/', name: BRAND, inLanguage: 'tr-TR', publisher: { '@id': business['@id'] } },
    business,
  ]
  if (meta.crumbs.length) graph.push({
    '@type': 'BreadcrumbList',
    itemListElement: [['Ana Sayfa', '/'], ...meta.crumbs].map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: canonical(p) })),
  })
  if (meta.service) graph.push({
    '@type': 'Service', name: meta.service.title, description: meta.service.short, url: meta.url,
    serviceType: meta.service.title, provider: { '@id': business['@id'] }, areaServed: { '@type': 'City', name: 'İstanbul' },
  })
  if (meta.faq?.length) graph.push({
    '@type': 'FAQPage',
    mainEntity: meta.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  })
  if (meta.post) graph.push({
    '@type': 'BlogPosting', headline: meta.post.title, description: meta.post.description, image: meta.post.photo,
    datePublished: meta.post.date, dateModified: meta.post.updated || meta.post.date, inLanguage: 'tr-TR', url: meta.url, mainEntityOfPage: meta.url,
    author: { '@id': business['@id'] }, publisher: { '@id': business['@id'] },
  })
  return { '@context': 'https://schema.org', '@graph': graph }
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Prerender sırasında <head> içine yazılan etiketler
export function headHtml(meta) {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.notFound || meta.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${meta.url}" />`,
    `<meta property="og:type" content="${meta.post ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${BRAND}" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${meta.url}" />`,
    `<meta property="og:image" content="${meta.post ? meta.post.photo : OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]
  if (!meta.notFound) tags.push(`<script type="application/ld+json">${JSON.stringify(getJsonLd(meta)).replace(/</g, '\\u003c')}</script>`)
  if (meta.redirect) tags.push(`<meta http-equiv="refresh" content="2;url=${esc(meta.redirect)}" />`)
  if (GSC_VERIFICATION) tags.push(`<meta name="google-site-verification" content="${esc(GSC_VERIFICATION)}" />`)
  if (GA_ID) tags.push(analyticsHtml(GA_ID))
  return tags.join('\n    ')
}

// GA4 + dönüşüm olayları: telefon (phone_call), WhatsApp (whatsapp_click) tıklamaları ve teklif formu (quote_form_submit).
// Sayfa geçişleri GA4'ün "geliştirilmiş ölçüm" özelliğiyle (tarayıcı geçmişi değişiklikleri) otomatik sayılır.
function analyticsHtml(id) {
  const safe = id.replace(/[^A-Za-z0-9-]/g, '')
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${safe}"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${safe}');
    document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href')||'';
    if(h.indexOf('tel:')===0)gtag('event','phone_call',{link_url:h,page_path:location.pathname});
    else if(h.indexOf('wa.me')>-1)gtag('event','whatsapp_click',{link_url:h,page_path:location.pathname});});</script>`
}

// Tarayıcıda sayfa değiştiğinde başlık ve meta etiketlerini günceller
function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}

export function applyMeta(pathname) {
  if (typeof document === 'undefined') return
  const meta = getMeta(pathname)
  document.title = meta.title
  const metaEl = (k, v) => () => { const m = document.createElement('meta'); m.setAttribute(k, v); return m }
  setTag('meta[name="description"]', metaEl('name', 'description'), 'content', meta.description)
  setTag('meta[property="og:title"]', metaEl('property', 'og:title'), 'content', meta.title)
  setTag('meta[property="og:description"]', metaEl('property', 'og:description'), 'content', meta.description)
  setTag('meta[property="og:url"]', metaEl('property', 'og:url'), 'content', meta.url)
  if (!meta.notFound) setTag('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l }, 'href', meta.url)
  const ld = document.head.querySelector('script[type="application/ld+json"]')
  if (ld && !meta.notFound) ld.textContent = JSON.stringify(getJsonLd(meta))
}
