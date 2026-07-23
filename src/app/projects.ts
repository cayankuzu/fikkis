export type ProjectKind = "web" | "mobile";

export type Project = {
  id: "remember" | "desain" | "audioroom" | "universe" | "sorita" | "wmatch";
  title: string;
  kicker: string;
  description: string;
  href: string;
  hrefLabel: string;
  github: string;
  kind: ProjectKind;
};

export const projects: Project[] = [
  {
    id: "remember",
    title: "Remember You Must Die",
    kicker: "3B web deneyimi",
    description: "Zaman, ölüm ve müziğin etrafında kurulan karanlık bir memento mori evreni.",
    href: "https://remember-you-must-die-web.vercel.app/",
    hrefLabel: "Deneyime gir",
    github: "https://github.com/cayankuzu/remember_you_must_die_web",
    kind: "web",
  },
  {
    id: "desain",
    title: "desAIn",
    kicker: "3B tasarım aracı",
    description: "Mekân fikirlerini tarayıcıda düzenlenebilir üç boyutlu planlara dönüştüren masaüstü editörü.",
    href: "https://des-ai-n.vercel.app/",
    hrefLabel: "Editörü aç",
    github: "https://github.com/cayankuzu/desAIn",
    kind: "web",
  },
  {
    id: "audioroom",
    title: "AudioRoom",
    kicker: "Sinematik albüm evreni",
    description: "Albüm kapaklarını gezilebilir dünyalara, plakları da keşfedilebilir anlara çeviren müzik deneyimi.",
    href: "https://audio-room-ecru.vercel.app/",
    hrefLabel: "Dünyaya gir",
    github: "https://github.com/cayankuzu/AudioRoom",
    kind: "web",
  },
  {
    id: "universe",
    title: "UniVerse",
    kicker: "Öğrenci sosyal ağı",
    description: "Öğrencileri, kulüpleri, etkinlikleri ve kampüs anılarını güvenli bir dijital kampüste buluşturur.",
    href: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?t=cbNifD4dZ23MK9QJ-1&preview-route=%2Fwelcome",
    hrefLabel: "Prototipi gör",
    github: "https://github.com/cayankuzu/UniVerse",
    kind: "mobile",
  },
  {
    id: "sorita",
    title: "SoRita",
    kicker: "Sosyal mekân keşfi",
    description: "Mekânları, kişisel listeleri ve topluluk önerilerini harita üzerinde bir araya getirir.",
    href: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?t=HfSuWJdD0yi1kJcW-1",
    hrefLabel: "Prototipi gör",
    github: "https://github.com/cayankuzu/SoRita",
    kind: "mobile",
  },
  {
    id: "wmatch",
    title: "WMatch",
    kicker: "Film odaklı eşleşme",
    description: "İnsanların film ve dizi zevklerinden yola çıkarak daha anlamlı eşleşmeler kurmasını sağlar.",
    href: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?t=XDorh8gcStuSfQ3j-1",
    hrefLabel: "Prototipi gör",
    github: "https://github.com/cayankuzu/WMatch",
    kind: "mobile",
  },
];
