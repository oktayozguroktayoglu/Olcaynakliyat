// Semt sayfalarına özel içerik. Anahtar: slugify(semt adı)
// intro: semtin taşınma açısından özellikleri, tips: o semtte dikkat edilenler, services: öne çıkan hizmet slug'ları
export const areaInfo = {
  fikirtepe: {
    loc: 'Fikirtepe’de',
    intro: 'Fikirtepe, kentsel dönüşümle en hızlı değişen Kadıköy semtlerinden biri. Eski az katlı binaların yerini yüksek bloklar ve yeni siteler alırken, bölgede hem yıkım öncesi tahliyeler hem de yeni dairelere taşınmalar sürekli gündemde. Olcay Nakliyat’ın da bulunduğu bu semtte, dönüşüm sürecindeki ailelerin geçici adrese, ardından yeni evlerine taşınmasına sıkça eşlik ediyoruz.',
    tips: [
      'Yeni sitelerde yük asansörü ve taşıma saatleri için yönetimden önceden izin alınması gerekir.',
      'İnşaat alanlarına yakın sokaklarda araç yanaşma noktası taşınma gününden önce belirlenmelidir.',
      'Dönüşüm sürecinde iki aşamalı taşıma (eski ev → geçici adres → yeni ev) planlanabilir.',
    ],
    services: ['evden-eve-nakliyat', 'asansorlu-tasima', 'paketleme-korumali-tasima'],
  },
  moda: {
    loc: 'Moda’da',
    intro: 'Moda, Kadıköy’ün tarihi dokusunu en iyi koruyan semtlerinden. Yüksek tavanlı eski apartmanlar, dar ve eğimli sokaklar, sınırlı park alanı burada taşınmayı şehrin geri kalanından farklı kılıyor. Birçok binada asansör bulunmuyor ya da mevcut asansör büyük mobilyalar için yetersiz kalıyor; bu yüzden Moda’daki taşımalarda merdiven ve cephe koşulları önceden mutlaka değerlendiriliyor.',
    tips: [
      'Dar sokaklarda kamyonun yanaşabileceği nokta ve park durumu önceden kontrol edilir.',
      'Asansörsüz eski binalarda merdiven genişliği ve dönüşler ölçülerek söküm planı yapılır.',
      'Cephe uygunsa dış cephe asansörü, ağır eşyalar için en hızlı ve güvenli çözümdür.',
    ],
    services: ['merdivenli-tasima', 'asansorlu-tasima', 'paketleme-korumali-tasima'],
  },
  suadiye: {
    loc: 'Suadiye’de',
    intro: 'Suadiye, Bağdat Caddesi çevresinde yenilenmiş apartmanları ve yüksek katlı konutlarıyla öne çıkıyor. Kentsel dönüşümle yükselen binalarda geniş daireler ve büyük mobilyalar, taşınma planlamasında asansör kullanımını ön plana çıkarıyor. Cadde üzerindeki yoğun trafik ve park kuralları nedeniyle taşınma saatinin iyi seçilmesi de önem taşıyor.',
    tips: [
      'Bağdat Caddesi ve ara sokaklarda yoğun saatler dışında taşıma yapmak süreci hızlandırır.',
      'Yüksek katlı binalarda dış cephe asansörü için cephe ve kaldırım uygunluğu değerlendirilir.',
      'Değerli mobilya, tablo ve aydınlatmalar için özel koruma ve paketleme önerilir.',
    ],
    services: ['asansorlu-tasima', 'paketleme-korumali-tasima', 'evden-eve-nakliyat'],
  },
  erenkoy: {
    loc: 'Erenköy’de',
    intro: 'Erenköy, eski köşklerin yerini yeni apartmanlara bıraktığı, sakin sokaklarıyla bilinen bir semt. Bağdat Caddesi’ne ve Marmaray hattına yakınlığı nedeniyle ailelerin sıkça tercih ettiği bölgede, hem yenilenen binalara taşınma hem de dönüşüm öncesi tahliyeler yaygın. Bahçeli ve geniş dairelerde eşya miktarı genellikle fazla olduğundan, planlı paketleme süreci kolaylaştırıyor.',
    tips: [
      'Bahçeli ve geniş dairelerde eşya miktarı fazla olduğundan paketlemeye erken başlanmalıdır.',
      'Site içi taşımalarda yönetimin belirlediği saat ve asansör kurallarına uyulur.',
      'Dönüşüm sürecindeki binalarda tahliye tarihi kesinleşince taşınma günü ayarlanır.',
    ],
    services: ['evden-eve-nakliyat', 'paketleme-korumali-tasima', 'asansorlu-tasima'],
  },
  goztepe: {
    loc: 'Göztepe’de',
    intro: 'Göztepe, Bağdat Caddesi’nden E-5’e uzanan geniş bir alanda eski ve yeni yapıların bir arada bulunduğu bir semt. Göztepe Parkı çevresindeki yerleşik apartmanlarla dönüşümle yükselen yeni binalar, taşınma koşullarını sokaktan sokağa değiştiriyor. Bu yüzden Göztepe’de her taşıma için bina erişimi, kat durumu ve araç yanaşma noktası ayrı ayrı değerlendiriliyor.',
    tips: [
      'Eski apartmanlarda asansör ölçüsü küçük olabilir; büyük eşyalar için alternatif planlanır.',
      'Cadde üzerindeki binalarda yük indirme için uygun saat aralığı seçilir.',
      'Yeni binalarda yük asansörü kullanımı için yönetime önceden haber verilir.',
    ],
    services: ['evden-eve-nakliyat', 'asansorlu-tasima', 'merdivenli-tasima'],
  },
  bostanci: {
    loc: 'Bostancı’da',
    intro: 'Bostancı, sahil şeridi, iskelesi ve Marmaray bağlantısıyla Kadıköy’ün doğu ucundaki hareketli semtlerinden. Yüksek katlı konutlar ve rezidanslar bölgede yaygın; Ataşehir ve Maltepe’ye komşu olması nedeniyle ilçe dışına yapılan taşımalar da sık görülüyor. Yüksek katlarda dış cephe asansörü, taşınma süresini önemli ölçüde kısaltıyor.',
    tips: [
      'Rezidans ve sitelerde güvenlik ve yönetim onayı taşınma gününden önce alınır.',
      'Yüksek katlarda dış cephe asansörü, bina asansörünü meşgul etmeden hızlı taşıma sağlar.',
      'Sahil yolu ve iskele çevresinde trafik yoğunluğu dikkate alınarak saat planlanır.',
    ],
    services: ['asansorlu-tasima', 'evden-eve-nakliyat', 'ofis-is-yeri-tasima'],
  },
  kosuyolu: {
    loc: 'Koşuyolu’nda',
    intro: 'Koşuyolu, az katlı ve bahçeli evleri, sakin sokaklarıyla Kadıköy’ün en yeşil semtlerinden. Müstakil ve bahçeli yapılarda eşyalar genellikle geniş alanlara yayılmış oluyor; bahçe mobilyası, saksılar ve depo eşyaları da taşınma listesine ekleniyor. Dar yan sokaklarda araç yanaşma noktası önceden belirlendiğinde taşıma çok daha hızlı ilerliyor.',
    tips: [
      'Bahçe mobilyası, saksı ve depo eşyaları taşınma listesine önceden eklenmelidir.',
      'Müstakil evlerde iç merdivenler ve kapı genişlikleri söküm ihtiyacı için ölçülür.',
      'Dar yan sokaklarda kamyonun duracağı nokta taşınma gününden önce netleştirilir.',
    ],
    services: ['evden-eve-nakliyat', 'merdivenli-tasima', 'paketleme-korumali-tasima'],
  },
  acibadem: {
    loc: 'Acıbadem’de',
    intro: 'Acıbadem, metro bağlantısı ve hastane, iş merkezi gibi yoğun noktalarıyla hem konut hem iş yeri taşımalarının sık yapıldığı bir semt. Bölgede yeni siteler ile eski apartmanlar iç içe; ana caddelerdeki trafik yoğunluğu nedeniyle taşınma saati ve araç park yeri planı önem kazanıyor. Ofis ve muayenehane taşımalarında iş akışını aksatmamak için hafta sonu ya da mesai dışı saatler tercih edilebiliyor.',
    tips: [
      'Acıbadem Caddesi gibi yoğun güzergâhlarda trafik dışı saatler tercih edilir.',
      'Ofis ve muayenehane taşımalarında mesai dışı zamanlama iş kaybını azaltır.',
      'Site içi taşımalarda otopark ve yük asansörü kullanımı yönetimle koordine edilir.',
    ],
    services: ['ofis-is-yeri-tasima', 'evden-eve-nakliyat', 'asansorlu-tasima'],
  },
  caferaga: {
    loc: 'Caferağa’da',
    intro: 'Caferağa, Kadıköy çarşısı ve Moda’nın bir kısmını kapsayan, ilçenin en yoğun ve en canlı mahallesi. Yaya ağırlıklı sokaklar, tek yönlü yollar ve sınırlı park alanı, buradaki taşımaları ciddi bir planlama gerektiren işlere dönüştürüyor. Asansörsüz tarihi binalar ve dar merdivenler de bölgede sık karşılaşılan durumlar arasında.',
    tips: [
      'Çarşı ve yaya bölgelerinde aracın yanaşabileceği en yakın nokta önceden tespit edilir.',
      'Yoğunluk nedeniyle sabah erken saatlerde taşıma yapmak genellikle en verimli seçenektir.',
      'Asansörsüz binalarda büyük mobilyalar için söküm ve korumalı taşıma planlanır.',
    ],
    services: ['merdivenli-tasima', 'evden-eve-nakliyat', 'ofis-is-yeri-tasima'],
  },
  yeldegirmeni: {
    loc: 'Yeldeğirmeni’nde',
    intro: 'Yeldeğirmeni, Haydarpaşa’ya komşu, tarihi apartmanları ve dar sokaklarıyla Kadıköy’ün en karakteristik semtlerinden. Yüzyıllık binaların birçoğunda asansör bulunmuyor; dik ve dar merdivenler, büyük eşyaların söküm yapılmadan geçemeyeceği anlamına geliyor. Bölgedeki kafe, atölye ve küçük iş yerleri nedeniyle iş yeri taşımaları da sık yapılıyor.',
    tips: [
      'Dar ve dik merdivenlerde büyük mobilyalar söküm yapılarak taşınır.',
      'Tarihi binalarda duvar, kapı ve tırabzanlar taşıma sırasında korunur.',
      'Dar sokaklarda küçük araç ya da aktarma ile taşıma gerekebilir; keşifte belirlenir.',
    ],
    services: ['merdivenli-tasima', 'paketleme-korumali-tasima', 'ofis-is-yeri-tasima'],
  },
  hasanpasa: {
    loc: 'Hasanpaşa’da',
    intro: 'Hasanpaşa, Kurbağalıdere ve Müze Gazhane çevresinde, Kadıköy merkeze ve Fikirtepe’ye yakın konumuyla hareketli bir semt. Bölgede orta yaşlı apartmanlar yaygın; birçok binada asansör var ancak kabin ölçüleri büyük eşyalar için yetersiz kalabiliyor. Merkeze yakınlığı nedeniyle trafik ve park durumu, taşınma gününün akışını doğrudan etkiliyor.',
    tips: [
      'Bina asansörünün ölçüleri, büyük eşyaların sığıp sığmayacağı için önceden kontrol edilir.',
      'Ana yollara yakın sokaklarda yükleme için uygun saat aralığı seçilir.',
      'Kırılacak eşyalar için özel paketleme, kısa mesafeli taşımalarda bile önemlidir.',
    ],
    services: ['evden-eve-nakliyat', 'paketleme-korumali-tasima', 'merdivenli-tasima'],
  },
  merdivenkoy: {
    loc: 'Merdivenköy’de',
    intro: 'Merdivenköy, E-5’e yakın konumu ve kentsel dönüşümle yükselen yeni binalarıyla değişen bir semt. Eski bahçeli evlerin yerini çok katlı konutların aldığı bölgede, yüksek katlara taşınmalar ve dönüşüm öncesi tahliyeler sık yapılıyor. E-5 bağlantısı sayesinde İstanbul’un farklı ilçelerine yapılan taşımalar da kolayca planlanabiliyor.',
    tips: [
      'Yeni yüksek binalarda dış cephe asansörü veya yük asansörü kullanımı önceden planlanır.',
      'Dönüşüm öncesi tahliyelerde eşyaların bir kısmı için geçici depolama ihtiyacı konuşulur.',
      'Şehir içi uzun mesafeli taşımalarda trafik saatleri dikkate alınır.',
    ],
    services: ['asansorlu-tasima', 'evden-eve-nakliyat', 'paketleme-korumali-tasima'],
  },
}
