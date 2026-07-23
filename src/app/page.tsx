import { ExploreHub } from "./_components/ExploreHub";
import { PortalLink } from "./_components/PortalLink";

const officialSiteUrl = process.env.NEXT_PUBLIC_MEMODE_URL ?? "http://localhost:3001";

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Fikkis ana sayfa">
          <span>fik</span><i>k</i><span>is</span><b>.</b>
        </a>
        <p className="headerNote">bağımsız dijital şeyler<br />ve küçük internet evrenleri</p>
        <PortalLink href={officialSiteUrl} />
      </header>

      <section className="hero" id="top">
        <div className="heroSticker heroStickerOne" aria-hidden="true">✦</div>
        <div className="heroSticker heroStickerTwo" aria-hidden="true">:)</div>
        <p className="heroOverline">Oyunlar · araçlar · sosyal ürünler</p>
        <h1>
          İnternette <em>oynanacak,</em><br />
          denenecek ve hissedilecek<br />
          şeyler yapıyorum.
        </h1>
        <div className="heroBottom">
          <p>Kaydırmaya gerek yok.<br />Bir liste seç ve doğrudan içeri gir.</p>
          <a href="#kesfet" className="scrollCue">
            keşfet <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <div id="kesfet">
        <ExploreHub />
      </div>

      <section className="aboutRibbon" aria-label="Fikkis hakkında">
        <p className="eyebrow">fikkis nedir?</p>
        <p>Bir portföyden biraz daha dağınık, bir laboratuvardan biraz daha renkli.</p>
        <span aria-hidden="true">∞</span>
      </section>

      <footer className="siteFooter">
        <p>fikkis / 2026</p>
        <p>Bir MeMoDe seçkisi.</p>
        <a href="mailto:memodee333@gmail.com">merhaba de ↗</a>
      </footer>
    </main>
  );
}
