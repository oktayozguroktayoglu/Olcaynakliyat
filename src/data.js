import { ShieldCheck, Truck, Package, Building2, Clock3 } from 'lucide-react'

export const PHONE = '0539 784 54 80'
export const PHONE_LINK = 'tel:+905397845480'
export const WHATSAPP = 'https://wa.me/905397845480?text=' + encodeURIComponent('Merhaba, nakliyat hizmetiniz için fiyat teklifi almak istiyorum.')
export const EMAIL = 'olcaynakliyat@gmail.com'
export const ADDRESS = 'Mandıra Caddesi, Kızım Sk. No:10, 34744 Kadıköy/İstanbul'
export const MAPS = 'https://maps.app.goo.gl/C8EnS3GvocRpssSZ9'

export const services = [
  { slug: 'evden-eve-nakliyat', title: 'Evden Eve Nakliyat', short: 'Kadıköy ve Fikirtepe’de sigortalı, profesyonel ev taşımacılığı.', detail: 'Taşınma sürecinizi planlı ve kontrollü yürütmeyi hedefliyoruz. Eşyalarınızın taşınma öncesi hazırlanmasından yeni adresinize ulaştırılmasına kadar ihtiyaçlarınıza uygun bir taşıma planı oluşturun.', icon: Truck },
  { slug: 'asansorlu-tasima', title: 'Asansörlü Taşıma', short: 'Yüksek katlı binalarda modern asansör sistemleri ile güvenli ve hızlı taşıma.', detail: 'Bina koşulları ve erişim imkânları uygun olduğunda dış cephe taşıma asansörüyle taşıma süreci kolaylaştırılabilir. Keşif sırasında bina ve eşya koşulları değerlendirilir.', icon: Package },
  { slug: 'ofis-is-yeri-tasima', title: 'Ofis & İş Yeri Taşıma', short: 'İşletmenizi Kadıköy içinde veya İstanbul genelinde profesyonelce taşıyoruz.', detail: 'Ofis taşımalarında masa, dolap, ekipman ve kutuların planlı biçimde taşınmasına odaklanılır. İş akışınıza uygun bir zamanlama için önceden iletişime geçin.', icon: Building2 },
  { slug: 'paketleme-korumali-tasima', title: 'Paketleme & Korumalı Taşıma', short: 'Narin eşyalarınız için özel paketleme ve korumalı taşıma hizmeti.', detail: 'Eşyaların türüne göre paketleme malzemesi ve koruma yöntemi belirlenir. Hassas parçalar ve kırılabilir ürünler için taşıma öncesinde özel ihtiyaçlarınızı paylaşın.', icon: ShieldCheck },
  { slug: 'merdivenli-tasima', title: 'Merdivenli Taşıma', short: 'Kadıköy’de merdivenli binalar için özel ekipman ve deneyimli personel.', detail: 'Asansör kullanımının mümkün olmadığı yapılarda merdiven genişliği, kat durumu ve eşya ölçüleri değerlendirilerek uygun taşıma yöntemi belirlenir.', icon: Truck },
  { slug: '7-24-acil-nakliye', title: '7/24 Acil Nakliye', short: 'Acil taşıma ihtiyaçlarınız için 7 gün 24 saat iletişim.', detail: 'Acil nakliye ihtiyacınız olduğunda telefonla ulaşarak tarih, adres ve eşya bilgilerini paylaşabilirsiniz. Uygunluk ve hizmet koşulları görüşme sırasında teyit edilir.', icon: Clock3 },
]

// Pexels fotoğrafları (ücretsiz lisans: https://www.pexels.com/license/)
export const pexels = id => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`

export const serviceExtras = {
  'evden-eve-nakliyat': {
    photo: pexels(7464687), alt: 'Üniformalı iki nakliye çalışanı koli taşıyor', credit: 'RDNE Stock project',
    about: 'Ev taşımak, bir hayatı bir adresten diğerine eksiksiz aktarmak demek. Taşınma gününden önce eşya listesini, kat ve bina durumunu, varsa özel parçaları birlikte konuşuyor; mobilyaların sökülmesinden kolilerin yerleştirilmesine kadar her adımı planlıyoruz. Eşyalarınız korunarak paketleniyor, araca düzenli biçimde yükleniyor ve yeni evinizde istediğiniz odaya bırakılıyor. Böylece taşınma günü sizin için bir koşuşturma değil, kontrollü bir süreç oluyor.',
    points: ['Taşınma öncesi planlama', 'Mobilya söküm ve kurulum', 'Odaya göre yerleştirme'],
  },
  'asansorlu-tasima': {
    photo: pexels(7464676), alt: 'İki nakliye çalışanı kanepe taşıyor', credit: 'RDNE Stock project',
    about: 'Yüksek katlı binalarda büyük mobilyaları dar merdiven ve asansörlerden geçirmek hem zaman alır hem de eşyaya ve binaya zarar verme riski taşır. Dış cephe taşıma asansörü ile eşyalar pencere veya balkondan doğrudan araca indirilir; bu da taşınma süresini kısaltır, bina ortak alanlarını korur ve ağır parçaların güvenle taşınmasını sağlar. Asansör kurulumu için cephe, sokak genişliği ve park imkânı önceden değerlendirilir.',
    points: ['Yüksek katlar için ideal', 'Daha kısa taşınma süresi', 'Bina ortak alanlarını korur'],
  },
  'ofis-is-yeri-tasima': {
    photo: pexels(7218678), alt: 'Üzerinde ofis yazan koliyi taşıyan kişi', credit: 'Blue Bird',
    about: 'Bir iş yerini taşırken asıl önemli olan, işinizin olabildiğince az aksamasıdır. Masa, dolap, arşiv ve elektronik ekipmanlar bölüm bölüm etiketlenerek paketlenir; taşıma, mesai saatlerinize uygun bir zamanlamayla yapılır. Yeni ofisinizde her şey önceden belirlenen düzene göre yerleştirilir, böylece ekibiniz kısa sürede çalışmaya devam edebilir.',
    points: ['Mesaiye uygun zamanlama', 'Etiketli ve düzenli paketleme', 'Hızlı yeniden kurulum'],
  },
  'paketleme-korumali-tasima': {
    photo: pexels(7464249), alt: 'Cam bardakların koruyucu malzemeyle kutuya yerleştirilmesi', credit: 'RDNE Stock project',
    about: 'Taşınmada hasarın büyük kısmı yetersiz paketlemeden kaynaklanır. Cam ve porselen eşyalar, elektronik cihazlar, tablolar ve aynalar gibi hassas parçalar; balonlu naylon, koruyucu köpük, kalın koliler ve mobilya örtüleriyle türüne uygun şekilde paketlenir. Her koli içeriğine göre işaretlenir, böylece hem taşıma sırasında dikkatle ele alınır hem de yeni adreste açması kolaylaşır.',
    points: ['Türüne uygun koruma malzemesi', 'Kırılacak eşyaya özel paketleme', 'İçeriğe göre işaretli koliler'],
  },
  'merdivenli-tasima': {
    photo: pexels(7464732), alt: 'Merdivenden koli taşıyan nakliye çalışanı', credit: 'RDNE Stock project',
    about: 'Kadıköy’ün eski ve asansörsüz binalarında dar merdivenler ve keskin dönüşler, taşınmanın en zorlu kısmıdır. Merdiven genişliği, kat sayısı ve eşya ölçüleri önceden değerlendirilerek gerekiyorsa mobilyalar sökülür, köşeler ve tırabzanlar korunur. Deneyimli ekip, ağır parçaları doğru taşıma teknikleriyle hem eşyaya hem binaya zarar vermeden indirir ve çıkarır.',
    points: ['Asansörsüz binalara uygun', 'Söküm ile dar alan geçişi', 'Duvar ve tırabzan koruması'],
  },
  '7-24-acil-nakliye': {
    photo: pexels(26443249), alt: 'Gece şehir sokağında ilerleyen kamyon', credit: 'Elina Volkova',
    about: 'Bazen taşınma planlandığı gibi gitmez: ani bir tahliye, son dakika değişen bir tarih ya da beklenmedik bir iş yeri taşıması. Böyle durumlarda bizi günün her saatinde arayabilir, adres ve eşya bilgilerini paylaşarak en hızlı uygun zamanı birlikte belirleyebilirsiniz. Acil işlerde de aynı özen ve düzenle çalışırız.',
    points: ['Günün her saatinde iletişim', 'Son dakika taşımaları', 'Hızlı planlama'],
  },
}

export const neighborhoods = [
  'Fikirtepe', 'Moda', 'Suadiye', 'Erenköy', 'Göztepe', 'Bostancı',
  'Koşuyolu', 'Acıbadem', 'Caferağa', 'Yeldeğirmeni', 'Hasanpaşa', 'Merdivenköy'
]

export function slugify(s) {
  return s.toLocaleLowerCase('tr-TR').replaceAll('ı','i').replaceAll('ğ','g').replaceAll('ü','u').replaceAll('ş','s').replaceAll('ö','o').replaceAll('ç','c').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
}
