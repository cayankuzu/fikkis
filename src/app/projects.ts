export type Project = {
  id: "remember" | "desain" | "audioroom" | "universe" | "sorita" | "wmatch";
  title: string;
  category: string;
  description: string;
  href: string;
  github: string;
  preview: string;
  previewPosition?: string;
  tone: "amber" | "blue" | "red" | "green" | "violet" | "ink";
};

export const projects: Project[] = [
  {
    id: "remember",
    title: "Remember You Must Die",
    category: "Canlı 3B web deneyimi",
    description: "Zaman, ölüm ve hafıza üzerine etkileşimli bir memento mori evreni.",
    href: "https://remember-you-must-die-web.vercel.app/",
    github: "https://github.com/cayankuzu/remember_you_must_die_web",
    preview: "/project-previews/remember.png",
    tone: "amber",
  },
  {
    id: "desain",
    title: "desAIn",
    category: "Canlı 3B tasarım aracı",
    description: "Odaları ölç, düzenle ve tarayıcıda yaşayan 3B projelere dönüştür.",
    href: "https://des-ai-n.vercel.app/",
    github: "https://github.com/cayankuzu/desAIn",
    preview: "/project-previews/desain.png",
    previewPosition: "35% center",
    tone: "blue",
  },
  {
    id: "audioroom",
    title: "AudioRoom",
    category: "Canlı müzik deneyimi",
    description: "Albüm arşivinden kendine özgü görsel dünyalara açılan dijital bir oda.",
    href: "https://audio-room-ecru.vercel.app/",
    github: "https://github.com/cayankuzu/AudioRoom",
    preview: "/project-previews/audioroom.png",
    tone: "red",
  },
  {
    id: "universe",
    title: "UniVerse",
    category: "Figma · mobil ürün",
    description: "Kampüs akışı, etkinlikler ve öğrenci profilleri için sosyal ağ prototipi.",
    href: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?t=cbNifD4dZ23MK9QJ-1&preview-route=%2Fwelcome",
    github: "https://github.com/cayankuzu/UniVerse",
    preview: "/project-previews/universe.png",
    previewPosition: "78% center",
    tone: "green",
  },
  {
    id: "sorita",
    title: "SoRita",
    category: "Figma · mobil ürün",
    description: "Mekânları keşfetmek, listelerde toplamak ve arkadaşlarla paylaşmak için.",
    href: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?t=HfSuWJdD0yi1kJcW-1",
    github: "https://github.com/cayankuzu/SoRita",
    preview: "/project-previews/sorita.png",
    previewPosition: "76% center",
    tone: "violet",
  },
  {
    id: "wmatch",
    title: "WMatch",
    category: "Figma · mobil ürün",
    description: "Film ve dizi zevklerinden ortaklık kuran sosyal eşleşme ürünü.",
    href: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?t=XDorh8gcStuSfQ3j-1",
    github: "https://github.com/cayankuzu/WMatch",
    preview: "/project-previews/wmatch.png",
    tone: "ink",
  },
];
