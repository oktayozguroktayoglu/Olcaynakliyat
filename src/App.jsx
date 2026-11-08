import React, { useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone, MessageCircle, ShieldCheck, Truck, Package, Building2, Clock3, Star, CheckCircle2, MapPin, ChevronRight, BadgeCheck } from 'lucide-react'
import { PHONE, PHONE_LINK, WHATSAPP, EMAIL, ADDRESS, MAPS, REVIEW_URL, services, serviceExtras, neighborhoods, slugify } from './data.js'
import { applyMeta } from './seo.js'
import { areaInfo } from './areas.js'
import { generalFaq, serviceFaq } from './faq.js'
import { posts, formatDate } from './blog.js'
import './styles.css'

// Logo: Olcay Nakliyat'ın mevcut sitesindeki logo (Font Awesome "truck-moving" ikonu + yazı).
// Font Awesome Free ikonu, CC BY 4.0 lisansı: https://fontawesome.com/license/free
function Logo({ light = false }) {
  return <span className={'logo' + (light ? ' logo-light' : '')}>
    <svg className="logo-icon" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96L0 304l0 80 0 16c0 44.2 35.8 80 80 80c26.2 0 49.4-12.6 64-32c14.6 19.4 37.8 32 64 32c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16L416 384l33.6 0c-1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16l1.6 0c17.7 0 32-14.3 32-32l0-64 0-16 0-10.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5L480 144l0-48c0-35.3-28.7-64-64-64L64 32zM585 256l-105 0 0-64 48.8 0c2.4 0 4.7 1.1 6.2 2.9L585 256zM528 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
    <span className="logo-text">OLCAY<span>NAKLİYAT</span></span>
  </span>
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  React.useEffect(() => { setOpen(false) }, [location.pathname])
  return <>
    <div className="topbar">
      <div className="container topbar-inner">
        <a href={MAPS} target="_blank" rel="noreferrer" className="topbar-address"><MapPin size={14}/> {ADDRESS}</a>
        <a href={PHONE_LINK}><Phone size={14}/> {PHONE}</a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp’tan teklif alın</a>
      </div>
    </div>
    <header className="header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Olcay Nakliyat ana sayfa"><Logo/>
        </Link>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menüyü aç/kapat">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'nav open' : 'nav'}>
          <NavLink to="/" end>Ana Sayfa</NavLink>
          <NavLink to="/hizmetler">Hizmetlerimiz</NavLink>
          <NavLink to="/semtler">Hizmet Bölgeleri</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/hakkimizda">Hakkımızda</NavLink>
          <NavLink to="/iletisim">İletişim</NavLink>
          <a className="nav-cta" href={WHATSAPP} target="_blank" rel="noreferrer">Fiyat Teklifi Al <ArrowRight size={16}/></a>
        </nav>
      </div>
    </header>
  </>
}

function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-about">
        <Link to="/" className="brand" aria-label="Olcay Nakliyat ana sayfa"><Logo light/></Link>
        <p>Kadıköy ve İstanbul genelinde evden eve nakliyat, asansörlü taşıma ve ofis taşımacılığı için bizimle iletişime geçin.</p>
        <a className="footer-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp’tan yazın</a>
      </div>
      <div><h4>Hızlı Menü</h4><Link to="/">Ana Sayfa</Link><Link to="/hizmetler">Hizmetlerimiz</Link><Link to="/semtler">Hizmet Bölgeleri</Link><Link to="/blog">Blog</Link><Link to="/hakkimizda">Hakkımızda</Link><Link to="/iletisim">İletişim</Link></div>
      <div><h4>Hizmetler</h4>{services.slice(0,5).map(s => <Link key={s.slug} to={'/hizmetler/'+s.slug}>{s.title}</Link>)}</div>
      <div><h4>İletişim</h4><p><Phone size={15}/> <a href={PHONE_LINK}>{PHONE}</a></p><p><MapPin size={15}/> <a href={MAPS} target="_blank" rel="noreferrer">{ADDRESS}</a></p><p><MessageCircle size={15}/> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div>
    </div>
    <div className="footer-bottom"><div className="container"><span>© 2026 Olcay Nakliyat. Tüm hakları saklıdır.</span><span>Kadıköy Nakliyat · İstanbul Nakliye Hizmetleri</span></div></div>
  </footer>
}

function FloatingActions() {
  return <div className="floating-actions">
    <a href={PHONE_LINK} className="float-phone" aria-label="Telefonla ara"><Phone size={21}/></a>
    <a href={WHATSAPP} target="_blank" rel="noreferrer" className="float-wa" aria-label="WhatsApp ile yaz"><MessageCircle size={22}/></a>
  </div>
}

function SectionHeading({ eyebrow, title, text, light=false }) {
  return <div className={'section-heading'+(light?' light':'')}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}

function ServiceCard({ service }) {
  const Icon = service.icon
  return <article className="service-card">
    <div className="service-icon"><Icon size={25}/></div>
    <h3>{service.title}</h3><p>{service.short}</p>
    <Link className="text-link" to={'/hizmetler/'+service.slug}>Detayları incele <ArrowRight size={16}/></Link>
  </article>
}

function FaqList({ items }) {
  return <div className="faq-list">{items.map(([q, a], i) => <details key={q} className="faq-item" open={i === 0}>
    <summary>{q}<span className="faq-icon" aria-hidden="true">+</span></summary>
    <p>{a}</p>
  </details>)}</div>
}

function FaqSection({ items, eyebrow = 'SIK SORULAN SORULAR', title = 'Merak edilenler' }) {
  return <section className="section faq-section"><div className="container faq-layout">
    <div><SectionHeading eyebrow={eyebrow} title={title} text="Aklınıza takılan başka bir soru varsa bize telefonla veya WhatsApp’tan ulaşabilirsiniz."/>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={17}/> Soru sorun</a></div>
    <FaqList items={items}/>
  </div></section>
}

function PostCard({ post }) {
  return <article className="post-card">
    <Link to={'/blog/' + post.slug} className="post-card-img"><img src={post.photo} alt={post.photoAlt} loading="lazy"/></Link>
    <div className="post-card-body">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <h3><Link to={'/blog/' + post.slug}>{post.title}</Link></h3>
      <p>{post.description}</p>
      <Link className="text-link" to={'/blog/' + post.slug}>Yazıyı oku <ArrowRight size={16}/></Link>
    </div>
  </article>
}

function Home() {
  return <>
    <main>
      <section className="hero">
        <div className="hero-image" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="pulse-dot"/> KADIKÖY VE İSTANBUL GENELİNDE</div>
            <h1>Yeni başlangıçlara<br/><em>güvenle</em> taşının.</h1>
            <p>Evden eve nakliyat, asansörlü taşıma ve ofis taşımacılığında taşınma sürecinizi daha kolay hale getirmek için yanınızdayız.</p>
            <div className="hero-buttons"><a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">Ücretsiz Fiyat Teklifi <ArrowRight size={18}/></a><a className="btn btn-outline" href={PHONE_LINK}><Phone size={17}/> Hemen Arayın</a></div>
            <div className="hero-proof"><div className="proof-stars"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div><strong>5.0</strong><span>Google müşteri puanı</span><span className="proof-divider"/> <ShieldCheck size={19}/> Güven odaklı hizmet
            </div>
          </div>
          <div className="hero-badge"><span className="badge-icon"><BadgeCheck size={22}/></span><span><strong>Taşınma planınız</strong><small>İhtiyacınıza göre şekillensin</small></span></div>
        </div>
        <div className="hero-bottom"><div className="container hero-stats">
          <div><span className="stat-icon"><Truck/></span><span><strong>Planlı Taşıma</strong><small>İhtiyaca uygun çözüm</small></span></div>
          <div><span className="stat-icon"><ShieldCheck/></span><span><strong>Koruma Odaklı</strong><small>Eşyalarınıza özen</small></span></div>
          <div><span className="stat-icon"><Clock3/></span><span><strong>Esnek İletişim</strong><small>İhtiyacınız olduğunda</small></span></div>
          <div><span className="stat-icon"><MapPin/></span><span><strong>Kadıköy ve İstanbul</strong><small>Yerel hizmet alanı</small></span></div>
        </div></div>
      </section>

      <section className="section services-section">
        <div className="container">
          <SectionHeading eyebrow="HİZMETLERİMİZ" title="Taşınmanın her adımında yanınızdayız" text="İhtiyacınıza uygun taşıma hizmetini seçin, detayları birlikte planlayalım."/>
          <div className="service-grid">{services.map(s => <ServiceCard key={s.slug} service={s}/>)}</div>
          <div className="center-action"><Link className="btn btn-dark" to="/hizmetler">Tüm hizmetleri görüntüle <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-photo" role="img" aria-label="Nakliye kamyonu ve taşınma hazırlığı"/>
        <div className="split-copy">
          <span className="eyebrow">OLCAY NAKLİYAT</span>
          <h2>Taşınmak bir yük değil, yeni bir başlangıç olsun.</h2>
          <p>Her taşınmanın kendine özgü ihtiyaçları vardır. Eşya miktarı, kat durumu, bina erişimi ve taşınma tarihi gibi detayları birlikte değerlendirerek size uygun bir plan oluşturmayı amaçlıyoruz.</p>
          <ul className="check-list"><li><CheckCircle2/> İhtiyaca göre taşıma planı</li><li><CheckCircle2/> Eşyalara uygun paketleme seçenekleri</li><li><CheckCircle2/> Kadıköy ve İstanbul genelinde hizmet</li><li><CheckCircle2/> Telefonla kolay iletişim</li></ul>
          <Link className="btn btn-primary" to="/hakkimizda">Olcay Nakliyat hakkında <ArrowRight size={17}/></Link>
        </div>
      </section>

      <section className="section areas-section">
        <div className="container">
          <SectionHeading eyebrow="HİZMET BÖLGELERİ" title="Kadıköy’ün birçok semtindeyiz" text="Kadıköy genelindeki hizmet bölgelerimizi inceleyin."/>
          <div className="area-chips">{neighborhoods.map(n => <Link key={n} to={'/semtler/'+slugify(n)}>{n}<ChevronRight size={15}/></Link>)}</div>
          <div className="center-action"><Link className="btn btn-dark" to="/semtler">Tüm bölgeleri görüntüle <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <section className="section blog-teaser">
        <div className="container">
          <SectionHeading eyebrow="BLOG" title="Taşınmadan önce okuyun" text="Taşınma sürecini kolaylaştıran rehberler ve pratik ipuçları."/>
          <div className="post-grid">{posts.slice(0, 3).map(p => <PostCard key={p.slug} post={p}/>)}</div>
          <div className="center-action"><Link className="btn btn-dark" to="/blog">Tüm yazılar <ArrowRight size={17}/></Link></div>
        </div>
      </section>

      <FaqSection items={generalFaq}/>

      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">TAŞINMAYA HAZIR MISINIZ?</span><h2>İhtiyacınızı anlatın, birlikte planlayalım.</h2><p>Taşınma tarihi, adresler ve eşya bilgileriyle bize ulaşın.</p></div><div className="cta-actions"><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-white"><MessageCircle size={18}/> WhatsApp’tan teklif alın</a><a href={PHONE_LINK} className="cta-phone"><Phone size={17}/> {PHONE}</a></div></div></section>
    </main>
  </>
}


function PageHero({ title, subtitle, crumb }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link to="/">Ana Sayfa</Link><ChevronRight size={14}/><span>{crumb || title}</span></div><span className="eyebrow">OLCAY NAKLİYAT · KADIKÖY</span><h1>{title}</h1><p>{subtitle}</p></div></section>
}

function ServicesPage() {
  return <>
    <PageHero title="Nakliyat Hizmetlerimiz" subtitle="Taşınma ihtiyacınıza uygun çözümü birlikte belirleyelim."/>
    <section className="section">
      <div className="container">
        <nav className="svc-jump" aria-label="Hizmetler">{services.map(s => <a key={s.slug} href={'#'+s.slug} onClick={e => { e.preventDefault(); document.getElementById(s.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>{s.title}</a>)}</nav>
        <div className="svc-list">
          {services.map((s, i) => {
            const x = serviceExtras[s.slug]
            const Icon = s.icon
            return <article key={s.slug} id={s.slug} className={'svc-row' + (i % 2 ? ' reverse' : '')}>
              <figure className="svc-photo">
                <img src={x.photo} alt={x.alt} loading={i < 2 ? 'eager' : 'lazy'}/>
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <figcaption>Fotoğraf: {x.credit} / Pexels</figcaption>
              </figure>
              <div className="svc-copy">
                <div className="service-icon"><Icon size={25}/></div>
                <h2>{s.title}</h2>
                <p className="svc-lead">{s.short}</p>
                <p>{x.about}</p>
                <ul className="svc-points">{x.points.map(p => <li key={p}><CheckCircle2 size={18}/> {p}</li>)}</ul>
                <div className="svc-actions">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Teklif alın <ArrowRight size={17}/></a>
                  <Link to={'/hizmetler/' + s.slug} className="btn btn-ghost">Detaylar</Link>
                </div>
              </div>
            </article>
          })}
        </div>
      </div>
    </section>
    <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">HANGİ HİZMET SİZE UYGUN?</span><h2>Kararsız mısınız? Birlikte belirleyelim.</h2><p>Adresleri, kat bilgisini ve eşya miktarını paylaşın, size en uygun çözümü önerelim.</p></div><div className="cta-actions"><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-white"><MessageCircle size={18}/> WhatsApp’tan yazın</a><a href={PHONE_LINK} className="cta-phone"><Phone size={17}/> {PHONE}</a></div></div></section>
  </>
}

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s=>s.slug===slug)
  if (!service) return <NotFound/>
  const Icon = service.icon
  return <><PageHero title={service.title} subtitle={service.short} crumb={service.title}/><section className="section"><div className="container detail-layout"><div className="detail-main"><div className="detail-icon"><Icon size={34}/></div><span className="eyebrow">HİZMET DETAYI</span><h2>{service.title} için doğru planlama</h2><p>{service.detail}</p><p>Fiyat ve uygunluk; taşınma tarihi, adresler, kat bilgisi, eşya miktarı ve kullanılacak ekipmana göre değişebilir. En doğru değerlendirme için detaylarınızı telefonla veya WhatsApp üzerinden paylaşın.</p><h3>Teklif alırken paylaşabileceğiniz bilgiler</h3><ul className="check-list"><li><CheckCircle2/> Taşınma tarihi ve saat aralığı</li><li><CheckCircle2/> Alınacak ve teslim edilecek adresler</li><li><CheckCircle2/> Kat bilgisi ve asansör durumu</li><li><CheckCircle2/> Büyük veya hassas eşyalar</li></ul><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Bu hizmet için teklif alın <ArrowRight size={17}/></a></div><aside className="detail-aside"><h3>Hızlı iletişim</h3><p>Hizmetin kapsamını ve uygunluğu doğrudan görüşün.</p><a href={PHONE_LINK} className="aside-link"><Phone/> {PHONE}</a><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={17}/> WhatsApp</a><div className="aside-note"><ShieldCheck size={20}/><span><strong>Önce detayları konuşalım</strong><small>Taşıma koşullarını birlikte netleştirelim.</small></span></div></aside></div></section><FaqSection items={serviceFaq[slug] || []} title={`${service.title} hakkında sorular`}/>{posts.some(p => p.related.includes(slug)) && <section className="section blog-teaser"><div className="container"><SectionHeading eyebrow="İLGİLİ YAZILAR" title="Bu konuda faydalı bilgiler"/><div className="post-grid">{posts.filter(p => p.related.includes(slug)).slice(0, 3).map(p => <PostCard key={p.slug} post={p}/>)}</div></div></section>}<section className="section related-section"><div className="container"><SectionHeading eyebrow="DİĞER HİZMETLER" title="Diğer taşıma çözümlerimiz"/><div className="service-grid">{services.filter(s=>s.slug!==slug).slice(0,3).map(s=><ServiceCard key={s.slug} service={s}/>)}</div></div></section></>
}

function AreasPage() {
  return <><PageHero title="Hizmet Verdiğimiz Semtler" subtitle="Kadıköy’ün tüm semtlerinde güvenli ve profesyonel nakliye hizmeti."/><section className="section"><div className="container"><div className="area-page-grid">{neighborhoods.map(n=><Link key={n} className="area-card" to={'/semtler/'+slugify(n)}><span className="area-pin"><MapPin size={20}/></span><span><strong>{n} Nakliyat</strong><small>Kadıköy / İstanbul</small></span><ArrowRight size={18}/></Link>)}</div></div></section></>
}

function AreaDetail() {
  const { slug } = useParams()
  const name = neighborhoods.find(n=>slugify(n)===slug)
  if (!name) return <NotFound/>
  const info = areaInfo[slug]
  return <><PageHero title={`${name} Nakliyat`} subtitle={`${name} ve çevresinde taşıma ihtiyacınız için Olcay Nakliyat ile iletişime geçin.`} crumb={`${name} Nakliyat`}/><section className="section"><div className="container detail-layout"><div className="detail-main"><div className="detail-icon"><MapPin size={34}/></div><span className="eyebrow">HİZMET BÖLGESİ</span><h2>{name} bölgesinde taşınma</h2><p>{info.intro}</p><h3>{info.loc} taşınırken dikkat edilenler</h3><ul className="check-list">{info.tips.map(t => <li key={t}><CheckCircle2/> {t}</li>)}</ul><h3>Fiyat teklifi için hazır bulundurun</h3><p>Alınacak ve teslim edilecek adresleri, kat ve asansör durumunu, eşya miktarını ve tercih ettiğiniz tarihi paylaşmanız, size en doğru fiyatı ve planı sunmamızı kolaylaştırır.</p><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary"> {name} için fiyat teklifi al <ArrowRight size={17}/></a></div><aside className="detail-aside"><h3>{name} Nakliyat</h3><p>Planınızı paylaşın, hizmet koşullarını birlikte netleştirelim.</p><a href={PHONE_LINK} className="aside-link"><Phone/> {PHONE}</a><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={17}/> WhatsApp’tan yazın</a><Link className="text-link" to="/semtler">Tüm semtler <ArrowRight size={16}/></Link></aside></div></section><section className="section related-section"><div className="container"><SectionHeading eyebrow={`${name.toLocaleUpperCase('tr-TR')} İÇİN ÖNERİLEN`} title={`${info.loc} en çok tercih edilen hizmetler`}/><div className="service-grid">{info.services.map(sl => services.find(x => x.slug === sl)).map(x => <ServiceCard key={x.slug} service={x}/>)}</div><div className="center-action"><Link className="btn btn-dark" to="/semtler">Diğer semtler <ArrowRight size={17}/></Link></div></div></section></>
}

function About() {
  return <><PageHero title="Hakkımızda" subtitle="Taşınma sürecini daha anlaşılır ve yönetilebilir hale getirmek için yanınızdayız."/><section className="section"><div className="container about-layout"><div className="about-visual"><div className="about-visual-inner"><Truck size={62}/><span>OLCAY NAKLİYAT</span><small>KADIKÖY · İSTANBUL</small></div></div><div className="about-copy"><span className="eyebrow">BİZ KİMİZ?</span><h2>Güvenli taşınma için doğru iletişim, doğru planlama.</h2><p>Olcay Nakliyat, Kadıköy ve İstanbul genelinde evden eve nakliyat, asansörlü taşıma, ofis ve iş yeri taşıma, paketleme ve acil nakliye hizmetleri için iletişim kurabileceğiniz bir nakliye hizmetidir.</p><p>Her taşınmanın farklı ihtiyaçları olabileceğini biliyoruz. Eşya miktarı, bina koşulları ve taşınma tarihi gibi ayrıntıları önceden konuşarak sürecin planlanmasına önem veriyoruz.</p><ul className="check-list"><li><CheckCircle2/> İhtiyaca uygun taşıma planı</li><li><CheckCircle2/> Eşya ve bina koşullarına göre değerlendirme</li><li><CheckCircle2/> Telefon ve WhatsApp üzerinden iletişim</li></ul><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Bizimle iletişime geçin <ArrowRight size={17}/></a></div></div></section></>
}

function Contact() {
  const [form, setForm] = useState({name:'', phone:'', from:'', to:'', home:'', floor:'', date:'', details:''})
  const update = e => setForm({...form, [e.target.name]:e.target.value})
  const submit = e => {
    e.preventDefault()
    const lines = [
      'Merhaba, nakliyat fiyat teklifi almak istiyorum.',
      ['Ad Soyad', form.name], ['Telefon', form.phone], ['Nereden', form.from], ['Nereye', form.to],
      ['Ev / iş yeri', form.home], ['Kat ve asansör', form.floor], ['Tarih', form.date], ['Detaylar', form.details],
    ].map(x => Array.isArray(x) ? (x[1] ? `${x[0]}: ${x[1]}` : null) : x).filter(Boolean)
    if (typeof window.gtag === 'function') window.gtag('event', 'quote_form_submit', { home_type: form.home || 'belirtilmedi' })
    window.open('https://wa.me/905397845480?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }
  return <><PageHero title="İletişim" subtitle="Taşınma detaylarınızı paylaşın, size uygun hizmeti birlikte değerlendirelim."/><section className="section"><div className="container contact-layout"><div className="contact-info"><span className="eyebrow">BİZE ULAŞIN</span><h2>Taşınma planınız için ilk adımı atın.</h2><p>Taşınma tarihi, adresler ve eşya bilgilerini paylaşarak fiyat teklifi isteyin.</p><a className="contact-item" href={PHONE_LINK}><span><Phone/></span><div><small>Telefon</small><strong>{PHONE}</strong></div><ArrowRight/></a><a className="contact-item" href={WHATSAPP} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WhatsApp</small><strong>Mesaj gönderin</strong></div><ArrowRight/></a><a className="contact-item" href={MAPS} target="_blank" rel="noreferrer"><span><MapPin/></span><div><small>Adres · Haritada aç</small><strong>{ADDRESS}</strong></div><ArrowRight/></a></div><form className="contact-form" onSubmit={submit}><h3>Fiyat teklifi isteyin</h3><p>Form gönderildiğinde bilgileriniz WhatsApp mesajı olarak açılır.</p><label>Ad Soyad<input name="name" value={form.name} onChange={update} required placeholder="Adınız ve soyadınız"/></label><label>Telefon<input name="phone" value={form.phone} onChange={update} required placeholder="05xx xxx xx xx"/></label><div className="form-row"><label>Nereden<input name="from" value={form.from} onChange={update} required placeholder="Semt / ilçe (ör. Göztepe)"/></label><label>Nereye<input name="to" value={form.to} onChange={update} required placeholder="Semt / ilçe (ör. Ataşehir)"/></label></div><div className="form-row"><label>Ev / iş yeri<select name="home" value={form.home} onChange={update} required><option value="">Seçin</option>{['1+0 / Stüdyo','1+1','2+1','3+1','4+1 ve üzeri','Ofis / iş yeri','Birkaç parça eşya'].map(o => <option key={o}>{o}</option>)}</select></label><label>Kat ve asansör<select name="floor" value={form.floor} onChange={update}><option value="">Seçin</option>{['Giriş / bahçe katı','1–3. kat, asansör var','1–3. kat, asansör yok','4. kat ve üzeri, asansör var','4. kat ve üzeri, asansör yok'].map(o => <option key={o}>{o}</option>)}</select></label></div><label>Taşınma tarihi<input name="date" value={form.date} onChange={update} type="date"/></label><label>Ek detaylar<textarea name="details" value={form.details} onChange={update} rows="3" placeholder="Büyük veya hassas eşyalar, paketleme ihtiyacı, söküm-kurulum..."/></label><button className="btn btn-primary form-submit" type="submit">WhatsApp ile gönder <ArrowRight size={17}/></button></form></div></section></>
}

function BlogList() {
  return <><PageHero title="Blog" subtitle="Taşınma sürecinizi kolaylaştıracak rehberler, kontrol listeleri ve pratik ipuçları." crumb="Blog"/>
    <section className="section"><div className="container"><div className="post-grid">{posts.map(p => <PostCard key={p.slug} post={p}/>)}</div></div></section></>
}

function PostBody({ blocks }) {
  return blocks.map(([type, content], i) => {
    if (type === 'h2') return <h2 key={i}>{content}</h2>
    if (type === 'ul') return <ul key={i}>{content.map(x => <li key={x}>{x}</li>)}</ul>
    if (type === 'ol') return <ol key={i}>{content.map(x => <li key={x}>{x}</li>)}</ol>
    if (type === 'tip') return <aside key={i} className="post-tip"><strong>İpucu</strong><p>{content}</p></aside>
    return <p key={i}>{content}</p>
  })
}

function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <NotFound/>
  return <>
    <section className="page-hero post-hero"><div className="container"><div className="breadcrumbs"><Link to="/">Ana Sayfa</Link><ChevronRight size={14}/><Link to="/blog">Blog</Link><ChevronRight size={14}/><span>Yazı</span></div><span className="eyebrow">OLCAY NAKLİYAT · BLOG</span><h1>{post.title}</h1><p><time dateTime={post.date}>{formatDate(post.date)}</time></p></div></section>
    <section className="section"><div className="container post-layout">
      <article className="post-content">
        <figure className="post-photo"><img src={post.photo} alt={post.photoAlt}/><figcaption>Fotoğraf: {post.credit} / Pexels</figcaption></figure>
        <PostBody blocks={post.body}/>
        <div className="post-cta"><div><strong>Taşınmanızı birlikte planlayalım</strong><span>Detaylarınızı paylaşın, ücretsiz fiyat teklifi alın.</span></div><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">WhatsApp’tan teklif alın <ArrowRight size={17}/></a></div>
      </article>
      <aside className="detail-aside post-aside"><h3>İlgili hizmetler</h3>{post.related.map(sl => services.find(x => x.slug === sl)).map(x => <Link key={x.slug} className="aside-service" to={'/hizmetler/' + x.slug}>{x.title}<ArrowRight size={16}/></Link>)}<a href={PHONE_LINK} className="aside-link"><Phone/> {PHONE}</a><Link className="text-link" to="/blog">Tüm yazılar <ArrowRight size={16}/></Link></aside>
    </div></section>
    <section className="section related-section"><div className="container"><SectionHeading eyebrow="DİĞER YAZILAR" title="Bunlar da ilginizi çekebilir"/><div className="post-grid">{posts.filter(p => p.slug !== slug).slice(0, 3).map(p => <PostCard key={p.slug} post={p}/>)}</div></div></section>
  </>
}

function NotFound() {
  return <section className="section not-found"><div className="container"><span className="eyebrow">404 · SAYFA BULUNAMADI</span><h1>Aradığınız sayfayı bulamadık.</h1><p>İçeriğe ana sayfadan devam edebilirsiniz.</p><Link to="/" className="btn btn-primary">Ana sayfaya dön <ArrowRight size={17}/></Link></div></section>
}

// olcaynakliyat.tr/yorum: müşteriyi Google yorum ekranına yönlendirir (QR kart ve WhatsApp mesajı için kısa link)
function Review() {
  React.useEffect(() => { const t = setTimeout(() => { window.location.href = REVIEW_URL }, 2000); return () => clearTimeout(t) }, [])
  return <section className="section review-page"><div className="container review-inner">
    <div className="proof-stars review-stars">{[0,1,2,3,4].map(i => <Star key={i} fill="currentColor" size={30}/>)}</div>
    <h1>Taşınmanız nasıl geçti?</h1>
    <p>Bizi tercih ettiğiniz için teşekkür ederiz. Deneyiminizi Google’da birkaç cümleyle paylaşırsanız, sonraki müşterilerimize çok yardımcı olur.</p>
    <a className="btn btn-primary review-btn" href={REVIEW_URL}>Google’da yorum yazın <ArrowRight size={18}/></a>
    <ol className="review-steps"><li>Yıldız sayısını seçin</li><li>Taşınmanızı birkaç cümleyle anlatın</li><li>“Yayınla”ya dokunun</li></ol>
    <small>Birkaç saniye içinde Google yorum sayfasına yönlendirileceksiniz.</small>
  </div></section>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function SeoUpdater() {
  const { pathname } = useLocation()
  React.useEffect(() => { applyMeta(pathname) }, [pathname])
  return null
}

export default function App() {
  return <><ScrollToTop/><SeoUpdater/><Header/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hizmetler" element={<ServicesPage/>}/>
    <Route path="/hizmetler/:slug" element={<ServiceDetail/>}/>
    <Route path="/semtler" element={<AreasPage/>}/>
    <Route path="/semtler/:slug" element={<AreaDetail/>}/>
    <Route path="/blog" element={<BlogList/>}/>
    <Route path="/blog/:slug" element={<BlogPost/>}/>
    <Route path="/hakkimizda" element={<About/>}/>
    <Route path="/iletisim" element={<Contact/>}/>
    <Route path="/yorum" element={<Review/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes><Footer/><FloatingActions/></>
}
