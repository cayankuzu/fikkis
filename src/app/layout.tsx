import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "fikkis — bir şeyler deniyorum",
  description:
    "Çayan Kuzu'nun 23 mobil ürün, oyun, web deneyimi ve bağımsız yayından oluşan; platform, rol, araçlar ve doğrulanmış bağlantılarla düzenlenmiş proje arşivi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
