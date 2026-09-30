# fikkis

fikkis, Çayan Kuzu'nun kişisel proje arşividir: mobil uygulamalar, oyunlar, web deneyimleri, bilim çalışmaları, tasarım işleri ve bağımsız yayınlar tek bir sayfada.

## Nasıl çalışır

- **Kartlar** kısa ve taranabilir: kapak görseli, alan, durum, tek cümlelik vaat ve platform. Üzerine gelince oynanış videosu oynar ya da görseller döner; mobil uygulamalar yan yana ekranlarla gösterilir.
- **Detay paneli** bir karta tıklayınca açılır: açıklamalı görsel galerisi, proje özeti, öne çıkanlar, rol/durum/platform/araçlar ve bağlantılar. Her projenin paylaşılabilir bir adresi vardır (`/#proje-<id>`); tarayıcının geri tuşu paneli kapatır.
- **Masaüstü deneyimleri** dar ekranlı ya da dokunmatik cihazlarda engellenmez; bağlantıyı kopyalama ve "yine de aç" seçenekleri sunulur.
- **"Tümü" görünümü** iki gruptan oluşur: `featured: true` işaretli öne çıkan çalışmalar ve arşiv (oyunlar, deneyler, bilim, tasarım). Sıralama `src/app/_lib/project-meta.ts` içindeki `arrangeProjects` fonksiyonundadır.
- **Filtreler** masaüstünde tek satır, 560 px altındaki ekranlarda kaydırma gerektirmeyen iki satırlık ızgaradır. Hero istatistikleri (proje, oyun, mağaza uygulaması) `src/app/projects.ts` verisinden otomatik hesaplanır.
- **Telefon ve masaüstü aynı yapıyı kullanır:** gezinme menüsü, kartlardaki hızlı bağlantı ve bölüm düzeni her ekranda bulunur; yalnızca yerleşim ekrana göre yeniden kurulur.
- **Dokümanlar** (`/dokuman/<slug>`) masaüstünde tarayıcının PDF görüntüleyicisiyle açılır; PDF'i sayfa içinde gösteremeyen mobil tarayıcılarda önizleme görseli ve "PDF'i aç" düğmesi görünür.
- Açık/koyu tema, azaltılmış hareket tercihi, klavye erişimi ve ekran okuyucu etiketleri desteklenir.

## Yeni proje eklemek

`src/app/projects.ts` içindeki diziye bir nesne ekle. İlk görsel kart kapağıdır; her görselin bir açıklaması (`caption`) olmalıdır.

```ts
{
  id: "yeni-proje",
  category: "web", // web | mobile | game | science | design | content
  featured: true, // isteğe bağlı: "Öne çıkan çalışmalar" grubunda gösterilir
  title: "Yeni Proje",
  hook: "Kartta görünen tek cümle.",
  description: "Detay panelindeki özet.",
  platform: "Responsive web",
  status: "Canlı", // "Canlı", "yayında", "Satışta" → yeşil; "Geliştiriliyor" → turuncu
  role: "Ürün tasarımı · Frontend",
  tools: ["Next.js", "TypeScript"],
  highlights: ["Birinci öne çıkan", "İkinci öne çıkan"],
  href: "https://…",
  images: [{ src: "/project-previews/yeni-proje.png", caption: "Ana ekran" }],
  video: "/project-previews/videos/yeni-proje.mp4", // isteğe bağlı
  tone: "blue",
}
```

## Yerel geliştirme

```bash
npm install
npm run dev
```

## Kontroller

```bash
npm run lint
npm run build
npm audit --omit=dev
```
