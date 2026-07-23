export type Project = {
  id: "remember" | "desain" | "audioroom" | "universe" | "sorita" | "wmatch";
  title: string;
  category: string;
  description: string;
  liveUrl?: string;
  openUrl: string;
  preview: string;
  previewPosition?: string;
  kind: "web" | "mobile";
  tone: "amber" | "blue" | "red" | "green" | "violet" | "ink";
};

const wmatchUrl =
  "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?fullscreen=1&t=O3uk8ynWSDA7YVm7-1&code-node-id=0-9";
const soritaUrl =
  "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?fullscreen=1&t=a9Aa6ncfv0vyOC9N-1&code-node-id=0-9";
const universeUrl =
  "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?fullscreen=1&t=z4tqXaqRw3iPsSzE-1&code-node-id=0-9";

export const projects: Project[] = [
  {
    id: "remember",
    title: "Remember You Must Die",
    category: "Canlı 3B web deneyimi",
    description: "Zaman, ölüm ve hafıza üzerine etkileşimli bir memento mori evreni.",
    liveUrl: "https://remember-you-must-die-web.vercel.app/",
    openUrl: "https://remember-you-must-die-web.vercel.app/",
    preview: "/project-previews/remember.png",
    kind: "web",
    tone: "amber",
  },
  {
    id: "desain",
    title: "desAIn",
    category: "Canlı 3B tasarım aracı",
    description: "Odaları ölç, düzenle ve tarayıcıda yaşayan 3B projelere dönüştür.",
    liveUrl: "https://des-ai-n.vercel.app/",
    openUrl: "https://des-ai-n.vercel.app/",
    preview: "/project-previews/desain.png",
    previewPosition: "35% center",
    kind: "web",
    tone: "blue",
  },
  {
    id: "audioroom",
    title: "AudioRoom",
    category: "Canlı müzik deneyimi",
    description: "Redd'in Mükemmel Boşluk dünyasında dolaşabildiğin dijital bir albüm odası.",
    liveUrl: "https://audio-room-ecru.vercel.app/depo/redd/mukemmel_bosluk/",
    openUrl: "https://audio-room-ecru.vercel.app/depo/redd/mukemmel_bosluk/",
    preview: "/project-previews/audioroom.png",
    kind: "web",
    tone: "red",
  },
  {
    id: "universe",
    title: "UniVerse",
    category: "Figma · mobil ürün",
    description: "Kampüs akışı, etkinlikler ve öğrenci profilleri için sosyal ağ prototipi.",
    openUrl: universeUrl,
    preview: "/project-previews/universe.png",
    previewPosition: "78% center",
    kind: "mobile",
    tone: "green",
  },
  {
    id: "sorita",
    title: "SoRita",
    category: "Figma · mobil ürün",
    description: "Mekânları keşfetmek, listelerde toplamak ve arkadaşlarla paylaşmak için.",
    openUrl: soritaUrl,
    preview: "/project-previews/sorita.png",
    previewPosition: "76% center",
    kind: "mobile",
    tone: "violet",
  },
  {
    id: "wmatch",
    title: "WMatch",
    category: "Figma · mobil ürün",
    description: "Film ve dizi zevklerinden ortaklık kuran sosyal eşleşme ürünü.",
    openUrl: wmatchUrl,
    preview: "/project-previews/wmatch.png",
    kind: "mobile",
    tone: "ink",
  },
];
