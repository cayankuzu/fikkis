import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconDownload } from "../../_components/icons";
import { documents, getDocument, officeViewerUrl } from "../../documents";

type DocumentPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return documents.map((document) => ({ slug: document.slug }));
}

export async function generateMetadata({
  params,
}: DocumentPageProps): Promise<Metadata> {
  const document = getDocument((await params).slug);
  if (!document) return {};

  return { title: document.title, description: document.subtitle };
}

export default async function DocumentPage({ params }: DocumentPageProps) {
  const { slug } = await params;
  const document = getDocument(slug);

  if (!document) notFound();


  return (
    <main className="docPage">
      <header className="docHeader">
        <Link className="docBack" href="/#projeler">
          <IconArrowLeft size={16} />
          <span>fikkis&apos;e dön</span>
        </Link>
        <div className="docTitle">
          <h1>{document.title}</h1>
          <p>{document.subtitle}</p>
        </div>
        <a
          className="button button-primary button-small"
          href={document.file}
          download={document.downloadName}
        >
          <IconDownload size={15} />
          İndir
        </a>
      </header>
      <div className="docFrame">
        {document.kind === "pdf" ? (
          // Masaüstünde tarayıcının PDF görüntüleyicisi açılır; desteklemeyen
          // mobil tarayıcılarda <object> içindeki yedek içerik gösterilir.
          <object data={document.file} type="application/pdf" aria-label={document.title}>
            <div className="docFallback">
              {document.preview ? (
                // eslint-disable-next-line @next/next/no-img-element -- yakınlaştırılabilir tam çözünürlüklü önizleme
                <img src={document.preview} alt={`${document.title} önizlemesi`} />
              ) : null}
              <p>Bu tarayıcı PDF&apos;i sayfa içinde gösteremiyor.</p>
              <a
                className="button button-primary"
                href={document.file}
                target="_blank"
                rel="noreferrer"
              >
                PDF&apos;i aç
              </a>
            </div>
          </object>
        ) : (
          <iframe src={officeViewerUrl(document.file)} title={document.title} allowFullScreen />
        )}
      </div>
    </main>
  );
}
