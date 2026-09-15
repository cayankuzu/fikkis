export type Document = {
  slug: string;
  title: string;
  subtitle: string;
  file: string;
  kind: "pdf" | "office";
  downloadName: string;
};

// The Office web viewer needs a real, internet-reachable URL to fetch the
// file from — it can't read from a visitor's own localhost during dev.
const SITE_ORIGIN = "https://fikkis.vercel.app";

export const documents: Document[] = [
  {
    slug: "kuantum-dolaniklik",
    title: "Kuantum Dolanıklık",
    subtitle: "PDF · Fizik araştırma yazısı",
    file: "/documents/kuantum-dolaniklik.pdf",
    kind: "pdf",
    downloadName: "kuantum-dolaniklik.pdf",
  },
  {
    slug: "genel-gorelilik",
    title: "Genel Görelilik",
    subtitle: "PowerPoint · Fizik sunumu",
    file: "/documents/genel-gorelilik.pptx",
    kind: "office",
    downloadName: "genel-gorelilik.pptx",
  },
  {
    slug: "dyson-ring",
    title: "Dyson Ring",
    subtitle: "Word · TÜBİTAK 2209-A araştırma önerisi",
    file: "/documents/dyson-ring-tubitak.docx",
    kind: "office",
    downloadName: "dyson-ring-tubitak.docx",
  },
];

export function getDocument(slug: string) {
  return documents.find((document) => document.slug === slug);
}

export function officeViewerUrl(file: string) {
  const absoluteUrl = `${SITE_ORIGIN}${file}`;
  return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
}
