export type Project = {
  id:
    | "remember"
    | "desain"
    | "audioroom"
    | "universe"
    | "sorita"
    | "wmatch"
    | "card-race"
    | "battleship"
    | "old-maid"
    | "tictactoe"
    | "atkafasi";
  title: string;
  hook: string;
  description: string;
  href?: string;
  preview: string;
  previews?: string[];
  previewFit?: "cover" | "contain";
  previewPosition?: string;
  tone:
    | "amber"
    | "blue"
    | "red"
    | "green"
    | "violet"
    | "ink"
    | "lime"
    | "navy"
    | "cream"
    | "coral"
    | "orange";
};

export const projects: Project[] = [
  {
    id: "remember",
    title: "Remember You Must Die",
    hook: "Ölümü hatırlatan bir dünyanın içinde yürümeye cesaret et.",
    description:
      "Müzik, ışık ve mekânı bir araya getiren etkileşimli bir memento mori deneyimi. Her oda zamanı, hafızayı ve faniliği başka bir atmosferle yeniden kurar.",
    href: "https://remember-you-must-die-web.vercel.app/",
    preview: "/project-previews/remember-ouroboros.png",
    tone: "amber",
  },
  {
    id: "desain",
    title: "desAIn",
    hook: "Bir odayı ölç; birkaç dokunuşla üç boyutlu bir tasarıma dönüştür.",
    description:
      "İç mekânları tarayıcıda planlamayı ve görselleştirmeyi kolaylaştıran yaratıcı bir 3B araç. Ölçüler, yerleşim ve sahne önizlemesi aynı çalışma alanında buluşur.",
    href: "https://des-ai-n.vercel.app/",
    preview: "/project-previews/desain.png",
    previewPosition: "35% center",
    tone: "blue",
  },
  {
    id: "audioroom",
    title: "AudioRoom",
    hook: "Bir albümü yalnızca dinleme; onun dünyasının içinde dolaş.",
    description:
      "Albüm arşivini keşfedilebilir dijital odalara dönüştüren bir müzik deneyimi. Redd'in Mükemmel Boşluk evreni, ses ile görsel hikâye anlatımını aynı sahnede birleştirir.",
    href: "https://audio-room-ecru.vercel.app/",
    preview: "/project-previews/audioroom-mukemmel-bosluk.png",
    tone: "red",
  },
  {
    id: "universe",
    title: "UniVerse",
    hook: "Üniversite hayatının tamamı tek bir dijital evrende.",
    description:
      "Öğrencileri kampüs akışı, topluluklar, etkinlikler ve ortak ilgi alanları çevresinde buluşturan bir sosyal ağ. Üniversite deneyimini daha görünür ve bağlantılı hâle getirir.",
    href: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?fullscreen=1&t=z4tqXaqRw3iPsSzE-1&code-node-id=0-9",
    preview: "/project-previews/universe-1.png",
    previews: [
      "/project-previews/universe-1.png",
      "/project-previews/universe-2.png",
      "/project-previews/universe-3.png",
    ],
    previewFit: "contain",
    tone: "green",
  },
  {
    id: "sorita",
    title: "SoRita",
    hook: "Şehir artık yalnızca bir harita değil, birlikte yazılan sosyal bir hikâye.",
    description:
      "Mekânları, anıları ve insanları aynı haritada buluşturan sosyal keşif uygulaması. Kullanıcılar rotalar oluşturur, yerleri listeler ve şehir deneyimlerini arkadaşlarıyla paylaşır.",
    href: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?fullscreen=1&t=a9Aa6ncfv0vyOC9N-1&code-node-id=0-9",
    preview: "/project-previews/sorita-1.png",
    previews: [
      "/project-previews/sorita-1.png",
      "/project-previews/sorita-2.png",
      "/project-previews/sorita-3.png",
    ],
    previewFit: "contain",
    tone: "violet",
  },
  {
    id: "wmatch",
    title: "WMatch",
    hook: "Ne izlediğin, kiminle eşleşeceğini söylesin.",
    description:
      "İzlediğin film ve dizilerden bir zevk profili çıkaran sosyal eşleşme fikri. Ortak yapımlar, türler ve izleme alışkanlıkları yeni sohbetlerin başlangıç noktasına dönüşür.",
    href: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?fullscreen=1&t=O3uk8ynWSDA7YVm7-1&code-node-id=0-9",
    preview: "/project-previews/wmatch-1.png",
    previews: [
      "/project-previews/wmatch-1.png",
      "/project-previews/wmatch-2.png",
      "/project-previews/wmatch-3.png",
      "/project-previews/wmatch-4.png",
    ],
    previewFit: "contain",
    tone: "ink",
  },
  {
    id: "card-race",
    title: "Card Race Game",
    hook: "Dört as, dört şerit ve her kart çekiminde değişen bir yarış.",
    description:
      "İskambil destesini olasılık tabanlı bir yarış pistine dönüştüren Python oyunu. Aslar kendi sembollerinde ilerler; açılan ceza kartları dengeleri bozar ve son çekiliş kazananı belirler.",
    href: "https://card-race-game.vercel.app/",
    preview: "/project-previews/card-race.png",
    tone: "lime",
  },
  {
    id: "battleship",
    title: "Battleship",
    hook: "Klasik deniz savaşını müzik, ses ve sürükle-bırak kontrolüyle yeniden oyna.",
    description:
      "Pygame ile geliştirilen 10×10 deniz savaşı; gemi yerleşimi, bilgisayar rakibi, isabet animasyonları, skor takibi ve bağımsız müzik/SFX kontrolleri içerir.",
    href: "https://battleship-pygame.vercel.app/",
    preview: "/project-previews/battleship.png",
    previewFit: "contain",
    tone: "navy",
  },
  {
    id: "old-maid",
    title: "Papaz Kaçtı",
    hook: "Çiftler kaybolurken son papazın kimin elinde kalacağını izle.",
    description:
      "Özgün Python mantığını tarayıcıya taşıyan dört kişilik kart oyunu. Kapalı kartlardan seçimini yap; çiftler otomatik elensin, üç bilgisayar rakibi sırasını oynasın ve son papaz sende kalmasın.",
    href: "https://old-maid-card-game.vercel.app/",
    preview: "/project-previews/old-maid.png",
    tone: "cream",
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    hook: "Üç hamlede bir çizgi; dokuz karede bitmeyen bir rekabet.",
    description:
      "NumPy ile yazılan satır, sütun ve çapraz kontrol mantığının iki oyunculu web sürümü. Aynı ekranda sırayla X ve O yerleştir, tur skorunu tut ve yeni raunda tek dokunuşla geç.",
    href: "https://tic-tac-toe-game-delta-jade.vercel.app/",
    preview: "/project-previews/tictactoe.png",
    tone: "coral",
  },
  {
    id: "atkafasi",
    title: "AtKafası Fanzin",
    hook: "Düşüncelerin birbirine çarptığı bağımsız bir fanzin alanı.",
    description:
      "Yazı, görsel ve ortak üretimi bir araya getiren bağımsız yayın denemesi. AtKafası'nın yayımlanan sayılarına Gumroad üzerinden ücretsiz ya da destek olarak belirlediğin bir ücretle ulaşabilirsin.",
    href: "https://atkafasifanzin.gumroad.com/",
    preview: "/project-previews/atkafasi.png",
    tone: "orange",
  },
];
