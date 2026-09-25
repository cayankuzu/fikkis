import Link from "next/link";
import { IconArrowLeft } from "./_components/icons";

export default function NotFound() {
  return (
    <main className="notFound">
      <p className="eyebrow">404 · Sayfa bulunamadı</p>
      <h1>Bu deneme henüz yok.</h1>
      <p>
        Aradığın sayfa taşınmış ya da hiç var olmamış olabilir. Arşivdeki
        projelere geri dönebilirsin.
      </p>
      <Link className="button button-primary" href="/">
        <IconArrowLeft size={16} />
        fikkis&apos;e dön
      </Link>
    </main>
  );
}
