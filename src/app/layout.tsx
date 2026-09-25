import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import { projects } from "./projects";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const description = `Çayan Kuzu'nun ${projects.length} projelik arşivi: mobil uygulamalar, oyunlar, web deneyimleri, bilim çalışmaları ve bağımsız yayınlar.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://fikkis.vercel.app"),
  title: {
    default: "fikkis — bir şeyler deniyorum",
    template: "%s · fikkis",
  },
  description,
  authors: [{ name: "Çayan Kuzu" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "fikkis",
    title: "fikkis — bir şeyler deniyorum",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "fikkis — bir şeyler deniyorum",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
