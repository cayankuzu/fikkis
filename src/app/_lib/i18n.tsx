"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "tr" | "en";

export const siteCopy = {
  tr: {
    nav: {
      skip: "Projelere geç",
      projects: "Projeler",
      about: "Hakkında",
      fanzin: "Fanzin",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Çayan Kuzu · Ürün Tasarımı & Yaratıcı Geliştirme",
      motto1: "Bir şeyler",
      motto2: "deniyorum",
      mottoSubtitle: "",
      lead: "Aklıma düşen bir fikri sadece hayal etmekle yetinmiyorum; araştırıyor, arayüzünü çiziyor ve çalışan gerçek deneyimlere dönüştürüyorum. App Store ve Google Play'deki mobil uygulamalardan biyomekanik yapay zekâya, 3B web dünyalarından bağımsız yayına uzanan canlı bir üretim arşivi.",
      exploreBtn: "Projeleri keşfet",
      contactBtn: "İletişime geç",
      stats: {
        total: "Proje & Deneyim",
        mobile: "Mobil Ürün",
        game: "3B & WebGL Oyun",
      },
    },
    projectsSection: {
      index: "01 — Projeler & Deneyimler",
      title: "Fikirler, ekranlar ve yaşayan ürünler.",
      lead: "Her çalışmanın arkasında çözülen bir problem, bir merak ve çalışan bir prototip var. Detaylara, canlı demoya ve süreçlere kartlardan göz atabilirsin.",
      allFilter: "Tümü",
      categories: {
        web: "Web",
        mobile: "Mobil",
        game: "Oyun",
        science: "Bilim",
        design: "Tasarım",
        content: "Yayın",
      },
      categoryPlurals: {
        web: "Web ürünleri",
        mobile: "Mobil uygulamalar",
        game: "Oyunlar",
        science: "Bilim çalışmaları",
        design: "Tasarım işleri",
        content: "Bağımsız yayın",
      },
      groups: {
        featured: "Seçili ürünler & interaktif deneyimler",
        archive: "Laboratuvar: bilim, prototipler & mini oyunlar",
      },
      search: {
        btn: "Ara",
        label: "Projelerde ara",
        placeholder: "Proje, araç ya da alan ara",
        clear: "Aramayı temizle",
        summary: (query: string, count: number, category?: string) =>
          `“${query}” için ${count} proje${category ? ` · ${category}` : ""}`,
        announcement: (query: string, count: number) =>
          query.trim()
            ? `“${query}” için ${count} proje bulundu`
            : `${count} proje gösteriliyor`,
        emptyTitle: "Sonuç bulunamadı",
        emptyOther: (query: string, count: number) =>
          `Bu alanda “${query}” ile eşleşen proje yok, ama diğer alanlarda ${count} sonuç var.`,
        emptyNone: (query: string) =>
          `“${query}” ile eşleşen proje yok. Başka bir kelime dene: oyun, Figma, harita…`,
        showAllBtn: "Tüm alanlarda göster",
      },
    },
    aboutSection: {
      index: "02 — Hakkında",
      title: "Fizikten ürüne, meraktan gerçeğe.",
      lead: "Ben Çayan Kuzu. Marmara Üniversitesi Fizik Bölümü'nde okuyorum; fiziğin analitik modelleme ve sistem düşüncesini dijital ürün tasarımı ve modern web teknolojileriyle buluşturuyorum.",
      body: "Benim için bir şeyleri denemek; boşta duran fikirleri çalışan prototiplere, kullanıcıların telefonunda yaşayan uygulamalara veya tarayıcıda akıp giden üç boyutlu dünyalara dönüştürmek demek. Fikrin ilk karalamasından UI/UX tasarımına, teknik mimarisinden mağaza onayına kadar olan süreci uçtan uca yürütmeyi seviyorum.",
      viewCv: "CV'yi görüntüle",
      github: "GitHub profilim",
    },
    zineSection: {
      index: "03 — Bağımsız Yayın",
      title: "Ekranların ötesinde: AtKafası Fanzin.",
      body: "Sadece dijital ürünler değil; kağıdın, tipografinin ve bağımsız sözün gücünü de önemsiyorum. AtKafası; yazısından görsel diline, 18 parçalık sticker serisinden sayfa mizanpajına kadar bağımsız hazırladığım bir kültür fanzini. İki sayısı da yayında.",
      shopier: "Shopier'den edin",
      gumroad: "Gumroad'dan incele",
      note: "Fiziksel basılı kopyalar veya anında indirilebilir dijital PDF formatında inceleyebilirsin.",
    },
    footerSection: {
      index: "04 — İletişim",
      title: "Birlikte bir şeyler deneyelim.",
      lead: "Bir ürün fikrin mi var, portfolyodaki bir işle ilgili mi konuşmak istersin, yoksa ekibine dinamik bir Product Designer / UI-UX zihniyeti mi katmak istiyorsun? Çekinmeden yaz, konuşalım.",
      copyBtn: "Kopyala",
      copied: "Kopyalandı",
      byMeMoDe: "© 2026 Çayan Kuzu · MeMoDe tarafından",
      version: "Versiyon",
      backToTop: "Başa dön",
    },
    sheet: {
      aboutHeading: "Proje hakkında",
      highlightsHeading: "Öne çıkanlar",
      roleLabel: "Rol",
      platformLabel: "Platform",
      toolsLabel: "Araçlar",
      desktopOnly: "Masaüstü deneyimi",
      gateTitle: "Bu deneyim bilgisayar için tasarlandı",
      gateText:
        "Klavye, fare ve geniş ekran gerektiriyor. Bağlantıyı kopyalayıp bilgisayarından açman en iyi sonucu verir.",
      copyLink: "Bağlantıyı kopyala",
      copied: "Kopyalandı",
      openAnyway: "Yine de aç",
      sourceCode: "Kaynak kod",
      comingSoon: "Yakında",
      contactHint:
        "Bu çalışma hakkında fikir alışverişi yapmak ya da benzer bir ürün tasarlamak istersen bana her zaman",
      writeMe: "yazabilirsin",
      prevProject: "Önceki",
      nextProject: "Sonraki",
      copyProjectLink: "Bu projenin bağlantısını kopyala",
      close: "Kapat",
      videoGameplay: "Oynanış videosu",
      videoScience: "Çalışma videosu",
      videoDefault: "Deneyim videosu",
      videoFull: "Tam video · sesli",
      actions: {
        tryDemo: "Demoyu dene",
        readDoc: "Dokümanı oku",
        playGame: "Oyunu oyna",
        playWeb: "Web'de oyna",
        openFigma: "Figma prototipini aç",
        openSite: "Siteyi aç",
        viewCv: "CV'yi görüntüle",
        downloadApk: "APK indir",
        promoSite: "Tanıtım sitesi",
        purchase: "Satın al",
        canva: "Canva'da incele",
        downloadDoc: (ext: string) => `İndir (${ext})`,
      },
      statuses: {
        inStore: "Mağazada",
        onSale: "Satışta",
        live: "Canlı",
        inDev: "Geliştiriliyor",
      },
    },
  },
  en: {
    nav: {
      skip: "Skip to projects",
      projects: "Projects",
      about: "About",
      fanzin: "Zine",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Çayan Kuzu · Product Design & Creative Engineering",
      motto1: "Bir şeyler",
      motto2: "deniyorum",
      mottoSubtitle: "Always trying things out.",
      lead: "I don't just imagine ideas; I research them, design the interfaces, and build them into living, functional products. A hands-on archive ranging from published mobile apps on the App Store & Google Play to biomechanical AI, 3D web worlds, and an independent zine.",
      exploreBtn: "Explore projects",
      contactBtn: "Get in touch",
      stats: {
        total: "Projects & Work",
        mobile: "Mobile Products",
        game: "3D & WebGL Games",
      },
    },
    projectsSection: {
      index: "01 — Projects & Work",
      title: "Ideas, screens, and living products.",
      lead: "Behind every project is a solved problem, an itch of curiosity, and a working prototype. Explore details, live demos, and workflows through the cards.",
      allFilter: "All",
      categories: {
        web: "Web",
        mobile: "Mobile",
        game: "Games",
        science: "Science",
        design: "Design",
        content: "Zine",
      },
      categoryPlurals: {
        web: "Web products",
        mobile: "Mobile applications",
        game: "Games",
        science: "Scientific research",
        design: "Design work",
        content: "Independent publishing",
      },
      groups: {
        featured: "Selected products & interactive experiences",
        archive: "Lab: science, prototypes & mini games",
      },
      search: {
        btn: "Search",
        label: "Search projects",
        placeholder: "Search projects, tools, or domains",
        clear: "Clear search",
        summary: (query: string, count: number, category?: string) =>
          `Found ${count} projects for “${query}”${category ? ` · ${category}` : ""}`,
        announcement: (query: string, count: number) =>
          query.trim()
            ? `Found ${count} projects for “${query}”`
            : `Showing ${count} projects`,
        emptyTitle: "No results found",
        emptyOther: (query: string, count: number) =>
          `No projects matching “${query}” in this category, but ${count} results found in other areas.`,
        emptyNone: (query: string) =>
          `No projects matching “${query}”. Try another keyword: game, Figma, map…`,
        showAllBtn: "Show across all categories",
      },
    },
    aboutSection: {
      index: "02 — About",
      title: "From physics to product, curiosity to reality.",
      lead: "I'm Çayan Kuzu. Studying Physics at Marmara University; combining the analytical modeling and systems thinking of physics with digital product design and modern web technologies.",
      body: "For me, trying things out means turning idle ideas into working prototypes, apps living in users' pockets, or 3D interactive worlds running in the browser. I love driving the entire lifecycle end-to-end: from initial sketch and UI/UX design to technical architecture and store release.",
      viewCv: "View CV",
      github: "GitHub profile",
    },
    zineSection: {
      index: "03 — Independent Publication",
      title: "Beyond screens: AtKafası Zine.",
      body: "Beyond digital interfaces, I care deeply about the tactile power of paper, typography, and independent expression. AtKafası is a self-published cultural zine I created independently—from writing and visual identity to an 18-piece sticker set and editorial layout. Both issues are published.",
      shopier: "Order on Shopier",
      gumroad: "Explore on Gumroad",
      note: "Available as physical printed editions or instant downloadable digital PDFs.",
    },
    footerSection: {
      index: "04 — Contact",
      title: "Let's try things out together.",
      lead: "Have a product idea, want to discuss a project in the portfolio, or looking to add a dynamic Product Design & UI/UX mindset to your team? Feel free to reach out, let's talk.",
      copyBtn: "Copy",
      copied: "Copied",
      byMeMoDe: "© 2026 Çayan Kuzu · by MeMoDe",
      version: "Version",
      backToTop: "Back to top",
    },
    sheet: {
      aboutHeading: "About the project",
      highlightsHeading: "Highlights",
      roleLabel: "Role",
      platformLabel: "Platform",
      toolsLabel: "Tools",
      desktopOnly: "Desktop experience",
      gateTitle: "Designed for desktop experience",
      gateText:
        "Requires a keyboard, mouse, and large display. Copying the link to open on your computer gives the best result.",
      copyLink: "Copy link",
      copied: "Copied",
      openAnyway: "Open anyway",
      sourceCode: "Source code",
      comingSoon: "Coming soon",
      contactHint:
        "If you'd like to exchange ideas on this work or design a similar product, feel free to",
      writeMe: "reach out",
      prevProject: "Previous",
      nextProject: "Next",
      copyProjectLink: "Copy project link",
      close: "Close",
      videoGameplay: "Gameplay video",
      videoScience: "Demo video",
      videoDefault: "Experience video",
      videoFull: "Full video · with sound",
      actions: {
        tryDemo: "Try demo",
        readDoc: "Read document",
        playGame: "Play game",
        playWeb: "Play in browser",
        openFigma: "Open Figma prototype",
        openSite: "Open site",
        viewCv: "View CV",
        downloadApk: "Download APK",
        promoSite: "Landing page",
        purchase: "Purchase",
        canva: "Explore on Canva",
        downloadDoc: (ext: string) => `Download (${ext})`,
      },
      statuses: {
        inStore: "In Store",
        onSale: "On Sale",
        live: "Live",
        inDev: "In Development",
      },
    },
  },
};

type I18nContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof siteCopy)["tr"];
};

const I18nContext = createContext<I18nContextType>({
  locale: "tr",
  setLocale: () => {},
  t: siteCopy.tr,
});

const STORAGE_KEY = "fikkis_lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "tr" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // localStorage may be unavailable in incognito/iframe
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors
    }
  };

  const t = siteCopy[locale] ?? siteCopy.tr;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
