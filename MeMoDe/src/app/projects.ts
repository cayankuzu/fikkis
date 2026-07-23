export type PortfolioProject = {
  id: string;
  number: string;
  name: string;
  type: string;
  status: string;
  purpose: string;
  summary: string;
  tags: string[];
  primaryUrl: string;
  primaryLabel: string;
  githubUrl: string;
  accent: "orange" | "violet" | "blue" | "green" | "red" | "pink";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "remember-you-must-die",
    number: "01",
    name: "Remember You Must Die",
    type: "Etkileşimli web deneyimi",
    status: "Canlı",
    purpose: "Memento mori düşüncesini bakılan bir sayfa olmaktan çıkarıp içinde dolaşılan bir deneyime dönüştürmek.",
    summary: "Üç boyutlu semboller, zaman metaforları ve müzik üzerinden ölümün kaçınılmazlığını anlatan karanlık bir dijital çalışma.",
    tags: ["Three.js", "Deneysel web", "Müzik"],
    primaryUrl: "https://remember-you-must-die-web.vercel.app/",
    primaryLabel: "Canlı deneyim",
    githubUrl: "https://github.com/cayankuzu/remember_you_must_die_web",
    accent: "orange",
  },
  {
    id: "desain",
    number: "02",
    name: "desAIn",
    type: "3B mekân planlama aracı",
    status: "Canlı",
    purpose: "Bir oda fikrini teknik uzmanlık gerektirmeden hızlıca görünür ve düzenlenebilir hâle getirmek.",
    summary: "Masaüstü tarayıcı için geliştirilen, projeleri yerel öncelikli saklayan üç boyutlu oda ve yerleşim editörü.",
    tags: ["Next.js", "3B editör", "Local-first"],
    primaryUrl: "https://des-ai-n.vercel.app/",
    primaryLabel: "Canlı editör",
    githubUrl: "https://github.com/cayankuzu/desAIn",
    accent: "violet",
  },
  {
    id: "audioroom",
    number: "03",
    name: "AudioRoom",
    type: "Sinematik müzik deneyimi",
    status: "Canlı",
    purpose: "Bir albümü yalnızca dinlenen içerik değil, keşfedilen bir dünya olarak yeniden yorumlamak.",
    summary: "Albüm kapaklarını gezilebilir evrenlere dönüştüren; plak toplama ve gramofonda çalma etkileşimleri sunan tarayıcı deneyimi.",
    tags: ["TypeScript", "Three.js", "YouTube API"],
    primaryUrl: "https://audio-room-ecru.vercel.app/",
    primaryLabel: "Canlı deneyim",
    githubUrl: "https://github.com/cayankuzu/AudioRoom",
    accent: "blue",
  },
  {
    id: "universe",
    number: "04",
    name: "UniVerse",
    type: "Üniversite sosyal ağı",
    status: "Geliştiriliyor",
    purpose: "Öğrencilerin ve kulüplerin kampüs yaşamını tek, güvenli ve anlaşılır bir sosyal alanda buluşturmak.",
    summary: "Öğrenci ve kulüp profilleri, etkinlikler, etkinlik albümleri ve sosyal etkileşimleri mobil bir dijital kampüste bir araya getirir.",
    tags: ["React Native", "Expo", "Supabase"],
    primaryUrl: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?t=cbNifD4dZ23MK9QJ-1&preview-route=%2Fwelcome",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/UniVerse",
    accent: "green",
  },
  {
    id: "sorita",
    number: "05",
    name: "SoRita",
    type: "Sosyal mekân keşfi",
    status: "Geliştiriliyor",
    purpose: "İnsanların sevdikleri yerleri kaydetmesini ve güvendikleri kişilerin önerileriyle yeni mekânlar bulmasını kolaylaştırmak.",
    summary: "Harita, kişisel listeler, fotoğraflar ve sosyal takip akışlarını birleştiren mobil mekân keşif ürünü.",
    tags: ["React Native", "Haritalar", "Supabase"],
    primaryUrl: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?t=HfSuWJdD0yi1kJcW-1",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/SoRita",
    accent: "red",
  },
  {
    id: "wmatch",
    number: "06",
    name: "WMatch",
    type: "Film odaklı sosyal eşleşme",
    status: "Geliştiriliyor",
    purpose: "İnsanlar arasındaki ilk ortak noktayı film ve dizi zevkleri üzerinden daha doğal biçimde kurmak.",
    summary: "İzlenen içerikleri, ortak zevkleri, uyum skorlarını, eşleşmeleri ve mesajlaşmayı bir araya getiren mobil uygulama.",
    tags: ["React Native", "Eşleşme", "Sosyal ürün"],
    primaryUrl: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?t=XDorh8gcStuSfQ3j-1",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/WMatch",
    accent: "pink",
  },
];
