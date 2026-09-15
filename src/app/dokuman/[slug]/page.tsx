import { notFound } from "next/navigation";
import Link from "next/link";
import { documents, getDocument, officeViewerUrl } from "../../documents";

export function generateStaticParams() {
  return documents.map((document) => ({ slug: document.slug }));
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = getDocument(slug);

  if (!document) notFound();

  const viewerSrc =
    document.kind === "pdf" ? document.file : officeViewerUrl(document.file);

  return (
    <main className="documentViewerPage">
      <header className="documentViewerHeader">
        <Link className="documentViewerBack" href="/">
          ← Fikkis&apos;e dön
        </Link>
        <div>
          <h1>{document.title}</h1>
          <p>{document.subtitle}</p>
        </div>
        <a
          className="documentViewerDownload"
          href={document.file}
          download={document.downloadName}
        >
          İndir
        </a>
      </header>
      <div className="documentViewerFrame">
        <iframe
          src={viewerSrc}
          title={document.title}
          allowFullScreen
        />
      </div>
    </main>
  );
}
