# Olcay Nakliyat — React + Vite

## Gereksinimler
- Node.js 18 veya üzeri
- npm

## Yerel çalıştırma
```bash
npm install
npm run dev
```

## GitHub Pages üzerinde yayınlama

1. ZIP içeriğini `Olcaynakliyat` adlı GitHub deposuna yükleyin.
2. `vite.config.js` dosyasındaki `base: '/Olcaynakliyat/'` değeri depo adıyla aynı olmalı.
3. GitHub deposunda **Settings → Pages** bölümünü açın.
4. **Build and deployment → Source** alanında **GitHub Actions** seçin.
5. Aşağıdaki workflow dosyası otomatik olarak build edip yayınlar. İlk kurulumdan sonra `main` dalına push yapmanız yeterlidir.

Alternatif olarak terminalden:
```bash
npm run build
npm run deploy
```
Bu alternatif için GitHub Pages kaynağını `gh-pages` dalına ayarlayın.

## İçerik notu
Kaynak bağlantıda erişilebilen sayfa tek sayfalık bir tanıtım sayfasıdır. Bu projede mevcut bilgiler korunmuş; hizmet, semt, hakkımızda ve iletişim için ayrı React Router sayfaları oluşturulmuştur. Kaynakta bulunmayan adres/şirket iddiaları eklenmemiştir.

## Yayın öncesi kontrol
- WhatsApp numarasını ve telefon numarasını doğrulayın.
- `olcaynakliyat@gmail.com` adresinin doğru olduğunu teyit edin.
- Google puanı/yorum sayısı ve sigortalı taşıma gibi iddiaları işletme kayıtlarıyla doğrulayın.
- İletişim formu şu anda e-posta göndermez; kullanıcıyı WhatsApp teklif akışına yönlendirir. Gerçek form gönderimi için bir backend veya form servisi bağlanmalıdır.
