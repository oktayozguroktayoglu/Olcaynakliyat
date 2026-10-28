import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone, MessageCircle, ShieldCheck, Truck, Package, Building2, Clock3, Star, CheckCircle2, MapPin, ChevronRight, BadgeCheck, Sparkles } from 'lucide-react'
import './styles.css'

const PHONE = '0539 784 54 80'
const PHONE_LINK = 'tel:+905397845480'
const WHATSAPP = 'https://wa.me/905397845480?text=' + encodeURIComponent('Merhaba, nakliyat hizmetiniz için fiyat teklifi almak istiyorum.')
const EMAIL = 'olcaynakliyat@gmail.com'

const services = [
  { slug: 'evden-eve-nakliyat', title: 'Evden Eve Nakliyat', short: 'Kadıköy ve Fikirtepe’de sigortalı, profesyonel ev taşımacılığı.', detail: 'Taşınma sürecinizi planlı ve kontrollü yürütmeyi hedefliyoruz. Eşyalarınızın taşınma öncesi hazırlanmasından yeni adresinize ulaştırılmasına kadar ihtiyaçlarınıza uygun bir taşıma planı oluşturun.', icon: Truck },
  { slug: 'asansorlu-tasima', title: 'Asansörlü Taşıma', short: 'Yüksek katlı binalarda modern asansör sistemleri ile güvenli ve hızlı taşıma.', detail: 'Bina koşulları ve erişim imkânları uygun olduğunda dış cephe taşıma asansörüyle taşıma süreci kolaylaştırılabilir. Keşif sırasında bina ve eşya koşulları değerlendirilir.', icon: Package },
  { slug: 'ofis-is-yeri-tasima', title: 'Ofis & İş Yeri Taşıma', short: 'İşletmenizi Kadıköy içinde veya İstanbul genelinde profesyonelce taşıyoruz.', detail: 'Ofis taşımalarında masa, dolap, ekipman ve kutuların planlı biçimde taşınmasına odaklanılır. İş akışınıza uygun bir zamanlama için önceden iletişime geçin.', icon: Building2 },
  { slug: 'paketleme-korumali-tasima', title: 'Paketleme & Korumalı Taşıma', short: 'Narin eşyalarınız için özel paketleme ve korumalı taşıma hizmeti.', detail: 'Eşyaların türüne göre paketleme malzemesi ve koruma yöntemi belirlenir. Hassas parçalar ve kırılabilir ürünler için taşıma öncesinde özel ihtiyaçlarınızı paylaşın.', icon: ShieldCheck },
  { slug: 'merdivenli-tasima', title: 'Merdivenli Taşıma', short: 'Kadıköy’de merdivenli binalar için özel ekipman ve deneyimli personel.', detail: 'Asansör kullanımının mümkün olmadığı yapılarda merdiven genişliği, kat durumu ve eşya ölçüleri değerlendirilerek uygun taşıma yöntemi belirlenir.', icon: Truck },
  { slug: '7-24-acil-nakliye', title: '7/24 Acil Nakliye', short: 'Acil taşıma ihtiyaçlarınız için 7 gün 24 saat iletişim.', detail: 'Acil nakliye ihtiyacınız olduğunda telefonla ulaşarak tarih, adres ve eşya bilgilerini paylaşabilirsiniz. Uygunluk ve hizmet koşulları görüşme sırasında teyit edilir.', icon: Clock3 },
]

const neighborhoods = [
  'Fikirtepe', 'Moda', 'Suadiye', 'Erenköy', 'Göztepe', 'Bostancı',
  'Koşuyolu', 'Acıbadem', 'Caferağa', 'Yeldeğirmeni', 'Hasanpaşa', 'Merdivenköy'
]

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  React.useEffect(() => setOpen(false), [location.pathname])
  return <>
    <div className="topbar">
      <div className="container topbar-inner">
        <span><MapPin size={14}/> Kadıköy / İstanbul</span>
        <a href={PHONE_LINK}><Phone size={14}/> {PHONE}</a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp’tan teklif alın</a>
      </div>
    </div>
    <header className="header">
      <div className="container nav-wrap">
        <Link to="/" className="brand" aria-label="Olcay Nakliyat ana sayfa">
          <span className="brand-mark"><Truck size={25}/></span>
          <span><strong>OLCAY<span>NAKLİYAT</span></strong><small>GÜVENLİ TAŞIMACILIK</small></span>
        </Link>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menüyü aç/kapat">{open ? <X/> : <Menu/>}</button>
        <nav className={open ? 'nav open' : 'nav'}>
          <NavLink to="/" end>Ana Sayfa</NavLink>
          <NavLink to="/hizmetler">Hizmetlerimiz</NavLink>
          <NavLink to="/semtler">Hizmet Bölgeleri</NavLink>
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
        <Link to="/" className="brand brand-light"><span className="brand-mark"><Truck size={24}/></span><span><strong>OLCAY<span>NAKLİYAT</span></strong><small>GÜVENLİ TAŞIMACILIK</small></span></Link>
        <p>Kadıköy ve İstanbul genelinde evden eve nakliyat, asansörlü taşıma ve ofis taşımacılığı için bizimle iletişime geçin.</p>
        <a className="footer-whatsapp" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp’tan yazın</a>
      </div>
      <div><h4>Hızlı Menü</h4><Link to="/">Ana Sayfa</Link><Link to="/hizmetler">Hizmetlerimiz</Link><Link to="/semtler">Hizmet Bölgeleri</Link><Link to="/hakkimizda">Hakkımızda</Link><Link to="/iletisim">İletişim</Link></div>
      <div><h4>Hizmetler</h4>{services.slice(0,5).map(s => <Link key={s.slug} to={'/hizmetler/'+s.slug}>{s.title}</Link>)}</div>
      <div><h4>İletişim</h4><p><Phone size={15}/> <a href={PHONE_LINK}>{PHONE}</a></p><p><MapPin size={15}/> Fikirtepe Mahallesi, Kadıköy / İstanbul</p><p><MessageCircle size={15}/> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p><small className="footer-note">Çalışma ve hizmet uygunluğunu telefonla teyit edin.</small></div>
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
            <div className="hero-proof"><div className="proof-stars"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div><strong>5.0</strong><span>Google müşteri puanı*</span><span className="proof-divider"/> <ShieldCheck size={19}/> Güven odaklı hizmet
            </div>
            <small className="fineprint">*Kaynak web sitesinde belirtilen puan.</small>
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

      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">TAŞINMAYA HAZIR MISINIZ?</span><h2>İhtiyacınızı anlatın, birlikte planlayalım.</h2><p>Taşınma tarihi, adresler ve eşya bilgileriyle bize ulaşın.</p></div><div className="cta-actions"><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-white"><MessageCircle size={18}/> WhatsApp’tan teklif alın</a><a href={PHONE_LINK} className="cta-phone"><Phone size={17}/> {PHONE}</a></div></div></section>
    </main>
  </>
}

function slugify(s) {
  return s.toLocaleLowerCase('tr-TR').replaceAll('ı','i').replaceAll('ğ','g').replaceAll('ü','u').replaceAll('ş','s').replaceAll('ö','o').replaceAll('ç','c').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}

function PageHero({ title, subtitle, crumb }) {
  return <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link to="/">Ana Sayfa</Link><ChevronRight size={14}/><span>{crumb || title}</span></div><span className="eyebrow">OLCAY NAKLİYAT · KADIKÖY</span><h1>{title}</h1><p>{subtitle}</p></div></section>
}

function ServicesPage() {
  return <><PageHero title="Nakliyat Hizmetlerimiz" subtitle="Taşınma ihtiyacınıza uygun çözümü birlikte belirleyelim."/><section className="section"><div className="container"><div className="service-grid">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></div></section></>
}

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s=>s.slug===slug)
  if (!service) return <NotFound/>
  const Icon = service.icon
  return <><PageHero title={service.title} subtitle={service.short} crumb={service.title}/><section className="section"><div className="container detail-layout"><div className="detail-main"><div className="detail-icon"><Icon size={34}/></div><span className="eyebrow">HİZMET DETAYI</span><h2>{service.title} için doğru planlama</h2><p>{service.detail}</p><p>Fiyat ve uygunluk; taşınma tarihi, adresler, kat bilgisi, eşya miktarı ve kullanılacak ekipmana göre değişebilir. En doğru değerlendirme için detaylarınızı telefonla veya WhatsApp üzerinden paylaşın.</p><h3>Teklif alırken paylaşabileceğiniz bilgiler</h3><ul className="check-list"><li><CheckCircle2/> Taşınma tarihi ve saat aralığı</li><li><CheckCircle2/> Alınacak ve teslim edilecek adresler</li><li><CheckCircle2/> Kat bilgisi ve asansör durumu</li><li><CheckCircle2/> Büyük veya hassas eşyalar</li></ul><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Bu hizmet için teklif alın <ArrowRight size={17}/></a></div><aside className="detail-aside"><h3>Hızlı iletişim</h3><p>Hizmetin kapsamını ve uygunluğu doğrudan görüşün.</p><a href={PHONE_LINK} className="aside-link"><Phone/> {PHONE}</a><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={17}/> WhatsApp</a><div className="aside-note"><ShieldCheck size={20}/><span><strong>Önce detayları konuşalım</strong><small>Taşıma koşullarını birlikte netleştirelim.</small></span></div></aside></div></section><section className="section related-section"><div className="container"><SectionHeading eyebrow="DİĞER HİZMETLER" title="Diğer taşıma çözümlerimiz"/><div className="service-grid">{services.filter(s=>s.slug!==slug).slice(0,3).map(s=><ServiceCard key={s.slug} service={s}/>)}</div></div></section></>
}

function AreasPage() {
  return <><PageHero title="Hizmet Verdiğimiz Semtler" subtitle="Kadıköy’ün tüm semtlerinde güvenli ve profesyonel nakliye hizmeti."/><section className="section"><div className="container"><div className="area-page-grid">{neighborhoods.map(n=><Link key={n} className="area-card" to={'/semtler/'+slugify(n)}><span className="area-pin"><MapPin size={20}/></span><span><strong>{n} Nakliyat</strong><small>Kadıköy / İstanbul</small></span><ArrowRight size={18}/></Link>)}</div><div className="note-box"><Sparkles size={20}/><p>Kaynak sitede belirtilen semt listesi korunmuştur. Belirli bir mahalle için hizmet uygunluğunu ve fiyatı telefonla teyit edin.</p></div></div></section></>
}

function AreaDetail() {
  const { slug } = useParams()
  const name = neighborhoods.find(n=>slugify(n)===slug)
  if (!name) return <NotFound/>
  return <><PageHero title={`${name} Nakliyat`} subtitle={`${name} ve çevresinde taşıma ihtiyacınız için Olcay Nakliyat ile iletişime geçin.`} crumb={`${name} Nakliyat`}/><section className="section"><div className="container detail-layout"><div className="detail-main"><div className="detail-icon"><MapPin size={34}/></div><span className="eyebrow">HİZMET BÖLGESİ</span><h2>{name} bölgesinde taşınma planınızı oluşturun</h2><p>Olcay Nakliyat, kaynak web sitesinde Kadıköy genelindeki hizmet bölgeleri arasında {name} semtini de belirtmektedir. Evden eve nakliyat, asansörlü taşıma, ofis taşımacılığı ve paketleme ihtiyaçlarınızı görüşmek için bize ulaşabilirsiniz.</p><p>Hizmet uygunluğu; taşınma tarihi, adres, bina erişimi ve eşya miktarı gibi detaylara göre teyit edilmelidir.</p><h3>Fiyat teklifi için hazır bulundurun</h3><ul className="check-list"><li><CheckCircle2/> Alınacak ve teslim edilecek açık adres</li><li><CheckCircle2/> Kat ve bina asansörü bilgisi</li><li><CheckCircle2/> Eşya miktarı ve özel eşyalar</li><li><CheckCircle2/> Tercih ettiğiniz taşınma tarihi</li></ul><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary"> {name} için fiyat teklifi al <ArrowRight size={17}/></a></div><aside className="detail-aside"><h3>{name} Nakliyat</h3><p>Planınızı paylaşın, hizmet koşullarını birlikte netleştirelim.</p><a href={PHONE_LINK} className="aside-link"><Phone/> {PHONE}</a><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-dark"><MessageCircle size={17}/> WhatsApp’tan yazın</a><Link className="text-link" to="/semtler">Tüm semtler <ArrowRight size={16}/></Link></aside></div></section></>
}

function About() {
  return <><PageHero title="Hakkımızda" subtitle="Taşınma sürecini daha anlaşılır ve yönetilebilir hale getirmek için yanınızdayız."/><section className="section"><div className="container about-layout"><div className="about-visual"><div className="about-visual-inner"><Truck size={62}/><span>OLCAY NAKLİYAT</span><small>KADIKÖY · İSTANBUL</small></div></div><div className="about-copy"><span className="eyebrow">BİZ KİMİZ?</span><h2>Güvenli taşınma için doğru iletişim, doğru planlama.</h2><p>Olcay Nakliyat, Kadıköy ve İstanbul genelinde evden eve nakliyat, asansörlü taşıma, ofis ve iş yeri taşıma, paketleme ve acil nakliye hizmetleri için iletişim kurabileceğiniz bir nakliye hizmetidir.</p><p>Her taşınmanın farklı ihtiyaçları olabileceğini biliyoruz. Eşya miktarı, bina koşulları ve taşınma tarihi gibi ayrıntıları önceden konuşarak sürecin planlanmasına önem veriyoruz.</p><ul className="check-list"><li><CheckCircle2/> İhtiyaca uygun taşıma planı</li><li><CheckCircle2/> Eşya ve bina koşullarına göre değerlendirme</li><li><CheckCircle2/> Telefon ve WhatsApp üzerinden iletişim</li></ul><a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-primary">Bizimle iletişime geçin <ArrowRight size={17}/></a></div></div></section></>
}

function Contact() {
  const [form, setForm] = useState({name:'', phone:'', date:'', details:''})
  const update = e => setForm({...form, [e.target.name]:e.target.value})
  const submit = e => {
    e.preventDefault()
    const message = `Merhaba, nakliyat fiyat teklifi almak istiyorum.%0AAd Soyad: ${encodeURIComponent(form.name)}%0ATelefon: ${encodeURIComponent(form.phone)}%0ATarih: ${encodeURIComponent(form.date)}%0ADetaylar: ${encodeURIComponent(form.details)}`
    window.open(`https://wa.me/905397845480?text=${message}`, '_blank', 'noopener,noreferrer')
  }
  return <><PageHero title="İletişim" subtitle="Taşınma detaylarınızı paylaşın, size uygun hizmeti birlikte değerlendirelim."/><section className="section"><div className="container contact-layout"><div className="contact-info"><span className="eyebrow">BİZE ULAŞIN</span><h2>Taşınma planınız için ilk adımı atın.</h2><p>Taşınma tarihi, adresler ve eşya bilgilerini paylaşarak fiyat teklifi isteyin.</p><a className="contact-item" href={PHONE_LINK}><span><Phone/></span><div><small>Telefon</small><strong>{PHONE}</strong></div><ArrowRight/></a><a className="contact-item" href={WHATSAPP} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WhatsApp</small><strong>Mesaj gönderin</strong></div><ArrowRight/></a><a className="contact-item" href={`mailto:${EMAIL}`}><span><MapPin/></span><div><small>Adres</small><strong>Fikirtepe Mahallesi, Kadıköy / İstanbul</strong></div></a><div className="contact-caution">Kaynak web sitesinde yer alan iletişim bilgileri kullanılmıştır. Taşınma öncesinde telefon ve hizmet uygunluğunu teyit edin.</div></div><form className="contact-form" onSubmit={submit}><h3>Fiyat teklifi isteyin</h3><p>Form gönderildiğinde bilgileriniz WhatsApp mesajı olarak açılır.</p><label>Ad Soyad<input name="name" value={form.name} onChange={update} required placeholder="Adınız ve soyadınız"/></label><label>Telefon<input name="phone" value={form.phone} onChange={update} required placeholder="05xx xxx xx xx"/></label><label>Taşınma tarihi<input name="date" value={form.date} onChange={update} type="date"/></label><label>Taşınma detayları<textarea name="details" value={form.details} onChange={update} rows="4" placeholder="Nereden nereye, kat bilgisi, eşya miktarı..."/></label><button className="btn btn-primary form-submit" type="submit">WhatsApp ile gönder <ArrowRight size={17}/></button><small>Bu form doğrudan sunucuya veri kaydetmez; WhatsApp mesajı oluşturur.</small></form></div></section></>
}

function NotFound() {
  return <section className="section not-found"><div className="container"><span className="eyebrow">404 · SAYFA BULUNAMADI</span><h1>Aradığınız sayfayı bulamadık.</h1><p>İçeriğe ana sayfadan devam edebilirsiniz.</p><Link to="/" className="btn btn-primary">Ana sayfaya dön <ArrowRight size={17}/></Link></div></section>
}

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(()=>window.scrollTo(0,0),[pathname])
  return null
}

function App() {
  return <BrowserRouter basename="/Olcaynakliyat"><ScrollToTop/><Header/><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hizmetler" element={<ServicesPage/>}/>
    <Route path="/hizmetler/:slug" element={<ServiceDetail/>}/>
    <Route path="/semtler" element={<AreasPage/>}/>
    <Route path="/semtler/:slug" element={<AreaDetail/>}/>
    <Route path="/hakkimizda" element={<About/>}/>
    <Route path="/iletisim" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes><Footer/><FloatingActions/></BrowserRouter>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
