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
    kicker: "3B memento mori deneyimi",
    description: "Kafatası, kum saati, DNA ve müziği etkileşimli bir ölüm ve zaman anlatısında buluşturur.",
    href: "https://remember-you-must-die-web.vercel.app/",
    hrefLabel: "Deneyime gir",
    github: "https://github.com/cayankuzu/remember_you_must_die_web",
    kind: "web",
  },
  {
    id: "desain",
    title: "desAIn",
    kicker: "3B tasarım aracı",
    description: "Oda ölçülerini, mobilyaları ve yerleşim kurallarını tarayıcıda düzenlenebilir 3B projelere dönüştürür.",
    href: "https://des-ai-n.vercel.app/",
    hrefLabel: "Editörü aç",
    github: "https://github.com/cayankuzu/desAIn",
    kind: "web",
  },
  {
    id: "audioroom",
    title: "AudioRoom",
    kicker: "Etkileşimli albüm kütüphanesi",
    description: "Albüm seçkisini arama ve filtrelerle düzenler; her albümü kendine ait gezilebilir bir dijital dünyaya açar.",
    href: "https://audio-room-ecru.vercel.app/",
    hrefLabel: "Dünyaya gir",
    github: "https://github.com/cayankuzu/AudioRoom",
    kind: "web",
  },
  {
    id: "universe",
    title: "UniVerse",
    kicker: "Öğrenci sosyal ağı",
    description: "Öğrenci profillerini, kampüs akışını, etkinlikleri, aramayı ve bildirimleri tek bir mobil ağda buluşturur.",
    href: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?t=cbNifD4dZ23MK9QJ-1&preview-route=%2Fwelcome",
    hrefLabel: "Prototipi gör",
    github: "https://github.com/cayankuzu/UniVerse",
    kind: "mobile",
  },
  {
    id: "sorita",
    title: "SoRita",
    kicker: "Sosyal mekân keşfi",
    description: "Mekânları haritada keşfetmeyi, kişisel listelerde toplamayı ve arkadaş önerileriyle paylaşmayı kolaylaştırır.",
    href: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?t=HfSuWJdD0yi1kJcW-1",
    hrefLabel: "Prototipi gör",
    github: "https://github.com/cayankuzu/SoRita",
    kind: "mobile",
  },
  {
    id: "wmatch",
    title: "WMatch",
    kicker: "Film odaklı eşleşme",
    description: "Film ve dizi zevklerinden uyum üretir; keşif, beğeni, eşleşme ve sohbet akışlarını bir araya getirir.",
    href: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?t=XDorh8gcStuSfQ3j-1",
    hrefLabel: "Prototipi gör",
    github: "https://github.com/cayankuzu/WMatch",
    kind: "mobile",
  },
];
