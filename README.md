# fikkis

fikkis, Çayan Kuzu'nun kişisel proje arşividir: mobil uygulamalar, oyunlar, web deneyimleri, bilim çalışmaları, tasarım işleri ve bağımsız yayınlar tek bir sayfada.

## Nasıl çalışır

- **Kartlar** kısa ve taranabilir: kapak görseli, alan, durum, tek cümlelik vaat ve ilk araçlar. Üzerine gelince oynanış videosu oynar ya da görseller döner; mobil uygulamalar yan yana ekranlarla gösterilir.
- **Detay paneli** bir karta tıklayınca açılır: açıklamalı görsel galerisi, proje özeti, öne çıkanlar, durum/platform/rol/araçlar ve bağlantılar. Her projenin paylaşılabilir bir adresi vardır (`/#proje-<id>`); tarayıcının geri tuşu paneli kapatır.
- **Masaüstü deneyimleri** dar ekranlı ya da dokunmatik cihazlarda engellenmez; bağlantıyı kopyalama ve "yine de aç" seçenekleri sunulur.
- **Filtreler**, hero istatistikleri, "Alanlar" sayıları ve "En sık kullandığım araçlar" listesi `src/app/projects.ts` verisinden otomatik hesaplanır.
- Açık/koyu tema, azaltılmış hareket tercihi, klavye erişimi ve ekran okuyucu etiketleri desteklenir.

## Yeni proje eklemek

`src/app/projects.ts` içindeki diziye bir nesne ekle. İlk görsel kart kapağıdır; her görselin bir açıklaması (`caption`) olmalıdır.

```ts
{
  id: "yeni-proje",
  category: "web", // web | mobile | game | science | design | content
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
