# fikkis + MeMoDe

İki yüzü olan kişisel proje vitrini:

- `fikkis`: Etkileşimli web deneyimlerini ve mobil ürünleri doğrudan açılan listelerle sunan deneysel site.
- `MeMoDe/`: Aynı işleri amaçları ve kısa özetleriyle anlatan resmî portföy sitesi.

İki uygulama birbirine animasyonlu portal bağlantılarıyla bağlıdır ve Vercel'de ayrı projeler olarak yayınlanır.

## Yerel geliştirme

Fikkis:

```bash
npm install
npm run dev
```

MeMoDe:

```bash
cd MeMoDe
npm install
npm run dev -- -p 3001
```

Portal hedefleri için `.env.example` dosyalarını `.env.local` olarak kopyalayıp canlı veya yerel adresleri kullanın.

## Kontroller

Her iki uygulama klasöründe:

```bash
npm run lint
npm run build
npm audit --omit=dev
```
