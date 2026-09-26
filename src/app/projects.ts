export type ProjectCategory =
  | "web"
  | "mobile"
  | "game"
  | "science"
  | "design"
  | "content";

export type ProjectTone =
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

/** Detay galerisindeki her görsel kısa bir açıklamayla birlikte gösterilir. */
export type ProjectImage = { src: string; caption: string };

export type Project = {
  id: string;
  category: ProjectCategory;
  tags?: string[];
  title: string;
  /** Kartta görünen tek cümlelik vaat. */
  hook: string;
  /** Detay panelindeki ürün özeti. */
  description: string;
  platform: string;
  status: string;
  role: string;
  tools: string[];
  highlights: string[];
  /** Ana hedef bağlantı (canlı sürüm, doküman, mağaza vb.). */
  href?: string;
  /** Ana bağlantının buton metni; boşsa kategoriye göre seçilir. */
  ctaLabel?: string;
  websiteUrl?: string;
  storeLinks?: { label: string; href: string }[];
  downloadStatus?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Klavye, fare ve geniş ekran gerektiren deneyimler. */
  desktopOnly?: boolean;
  /** İlk görsel kart kapağıdır. */
  images: ProjectImage[];
  /** Kartta üzerine gelince oynayan sessiz önizleme videosu. */
  video?: string;
  /** Detay panelinde sesli oynatılan tam video. */
  fullVideo?: string;
  /** Kart kapağının yerleşimi: tam kadraj, ortalanmış ya da yan yana ekranlar. */
  cardLayout?: "cover" | "contain" | "stack";
  coverPosition?: string;
  tone: ProjectTone;
};

export const projects: Project[] = [
  {
    id: "trai",
    category: "web",
    tags: ["Yapay zekâ"],
    title: "trAI",
    hook: "Bir ürünü satın almadan önce kendi fotoğrafında ve farklı bedenlerde gör.",
    description:
      "Kontrollü katalogdan seçilen kıyafeti kullanıcının ön/arka fotoğraflarında yapay zekâyla görselleştiren mobile-first sanal prova MVP'si. Beden önerisi karar desteği sunar; sonuçlar isimli ve gruplu kombinlere kaydedilebilir.",
    platform: "Mobil öncelikli responsive web",
    status: "Kontrollü MVP · Canlı demo",
    role: "Ürün ve UI/UX tasarımı · Full-stack geliştirme · AI entegrasyonu",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "fal.ai",
      "Zod",
      "Vercel",
    ],
    highlights: [
      "Kontrollü katalog, ön/arka referanslar ve private Storage'a imzalı yükleme",
      "Ürün sadakati modu, çoklu beden Beta ve deterministik beden önerisi",
    ],
    href: "https://trai-theta.vercel.app/",
    ctaLabel: "Demoyu dene",
    images: [
      {
        src: "/project-previews/trai.png",
        caption: "Açılış ekranı: ürünü kendi fotoğrafında dene",
      },
    ],
    tone: "red",
  },
  {
    id: "mrap",
    category: "web",
    tags: ["Harita"],
    title: "MRAP",
    hook: "Şehrin sokaklarında rota çiz; kapattığın alanlar haritada sana ait olsun.",
    description:
      "Gerçek dünya haritasında rota kapatma, benzersiz alan sahipliği ve sosyal harita akışını birleştiren responsive web MVP'si. Demo modunda sanal konumla alan boyama, keşif akışı, sıralama ve profil deneyimleri denenebilir.",
    platform: "Responsive web · Harita tabanlı sosyal oyun",
    status: "MVP · Canlı demo",
    role: "Ürün ve oyun tasarımı · Full-stack geliştirme · Harita/konum sistemi",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "MapLibre GL",
      "Turf.js",
      "SQLite",
      "Playwright",
      "Vercel",
    ],
    highlights: [
      "Rota segmentleriyle alan kapatma, tekil sahiplik skoru ve tekrar boyamayı ayıran oyun kuralı",
      "Demo sanal konum sağlayıcısı, sosyal keşif akışı ve Supabase/PostGIS üretim mimarisi hazırlığı",
    ],
    href: "https://mrap-eta.vercel.app/",
    ctaLabel: "Demoyu dene",
    images: [
      {
        src: "/project-previews/mrap.png",
        caption: "Keşfet akışı: toplulukta boyanan alan kartları",
      },
    ],
    coverPosition: "center top",
    tone: "green",
  },
  {
    id: "bibish",
    category: "game",
    desktopOnly: true,
    title: "Bibish",
    hook: "İki ordudan birine katıl; kaleleri ele geçir, araziyi boya ve açık alan savaşına yön ver.",
    description:
      "Kırmızı ve mavi takımların Bibish Adası'ndaki 10 karakol için savaştığı çevrimiçi WebGL FPS. Oyuncular ateşli ve yakın dövüş silahlarıyla çatışırken araziyi doğrudan takım renklerine boyar.",
    platform: "Web · Masaüstü",
    status: "Canlı",
    role: "Bağımsız oyun tasarımı · 3B istemci · Gerçek zamanlı backend",
    tools: [
      "JavaScript",
      "Three.js/WebGL",
      "Vite",
      "WebSocket",
      "Cloudflare Workers/Durable Objects",
      "Playwright",
      "Vercel",
    ],
    highlights: [
      "Tek global odada 10 ele geçirilebilir karakol ve takım rengine boyanan arazi",
      "Mekânsal ilgi yönetimi ve 2.000 bağlantı senaryosu için yük testi altyapısı",
    ],
    href: "https://bibish-iota.vercel.app/",
    images: [
      {
        src: "/project-previews/bibish.png",
        caption: "Karakol çatışması ve canlı liderlik tablosu",
      },
    ],
    video: "/project-previews/videos/bibish-gameplay.mp4",
    tone: "lime",
  },
  {
    id: "merbut",
    category: "game",
    desktopOnly: true,
    title: "Merbut",
    hook: "İki kahraman, on diyar ve Aku’ya uzanan tek bir kader.",
    description:
      "Hz. Ali ve Samuray Jack'in aynı klavyede ya da iki gamepad ile yönetildiği yerel iki oyunculu 2.5D aksiyon oyunu. Her biri kendi mekaniğine sahip on diyar, Aku'nun Gölgesi ve üç evreli Aku; albüm kapağı estetiğinde özgün tablolar ve dövüşe göre değişen özgün müzikle.",
    platform: "Web · Masaüstü · Yerel iki oyunculu",
    status: "Canlı · v3.1.0",
    role: "Bağımsız oyun tasarımı · Savaş, ilerleme ve boss sistemleri",
    tools: [
      "React",
      "TypeScript",
      "Vite",
      "React Three Fiber",
      "Three.js",
      "Zustand",
      "Playwright",
      "Vercel",
    ],
    highlights: [
      "On diyar, on mekanik; dört zorluk, 19 başarım ve kayıttan devam",
      "Üçlü saldırı zinciri, Çifte Hamle ve mermi savuşturma; zaman portalıyla biten final",
    ],
    href: "https://merbut.vercel.app/",
    images: [
      {
        src: "/project-previews/merbut-menu.png",
        caption: "Ana menü: kahraman ve Aku lejyonu karşı karşıya",
      },
      {
        src: "/project-previews/merbut-titlecard.png",
        caption: "Her diyar bir albüm parçası gibi açılır",
      },
      {
        src: "/project-previews/merbut-combat.png",
        caption: "Aku Metropolü'nde dövüş ve Jack'in kalkanı",
      },
    ],
    video: "/project-previews/videos/merbut-gameplay.mp4",
    tone: "red",
  },
  {
    id: "remember",
    category: "web",
    desktopOnly: true,
    title: "Remember You Must Die",
    hook: "Ölümü hatırlatan bir dünyanın içinde yürümeye cesaret et.",
    description:
      "SUICIDE SILENCE – You Must Die parçasını memento mori temalı tek bir etkileşimli 3B sahneye dönüştüren deneysel web çalışması. Ouroboros, kurukafa, DNA, kum saati ve galaksi müzik ve ışıkla keşfedilir.",
    platform: "Web · Masaüstü öncelikli",
    status: "Canlı · Deneysel",
    role: "Bağımsız konsept · 3B deneyim/UI tasarımı · Frontend",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "GSAP",
      "GLTF/OrbitControls",
      "Canvas",
      "Vercel",
    ],
    highlights: [
      "Sinematik kamera, OrbitControls ve nesne/genel ışık ayarları",
      "TR/EN içerik, müzik ve şarkı sözü arayüzü; sürüklenebilir pencereler",
    ],
    href: "https://remember-you-must-die-web.vercel.app/",
    ctaLabel: "Deneyime gir",
    images: [
      {
        src: "/project-previews/remember-ouroboros.png",
        caption: "Ouroboros ve kurukafa sahnesi, ışık kontrolleri",
      },
    ],
    video: "/project-previews/videos/remember-gameplay.mp4",
    tone: "amber",
  },
  {
    id: "desain",
    category: "web",
    desktopOnly: true,
    title: "desAIn",
    hook: "Odanın ölçülerini gir; birkaç dokunuşla üç boyutlu bir tasarıma dönüştür.",
    description:
      "Kullanıcının oda biçimini ve gerçek ölçülerini tanımlayıp parametrik mobilyaları sürükleyerek yerleştirdiği masaüstü odaklı low-poly 3B iç mekân editörü.",
    platform: "Web · Masaüstü",
    status: "Canlı MVP",
    role: "Bağımsız ürün/UI-UX · Full-stack · 3B editör geliştirme",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "React Three Fiber/Drei",
      "Three.js",
      "Zustand",
      "Tailwind CSS",
      "sql.js/SQLite",
      "Vercel Blob",
    ],
    highlights: [
      "Dikdörtgen, kare, L ve özel oda biçimleri; parametrik mobilya envanteri",
      "Çakışma/geçiş doğrulaması, rastgele düzenler ve hesap bazlı proje kaydı",
    ],
    href: "https://des-ai-n.vercel.app/",
    ctaLabel: "Editörü aç",
    images: [
      {
        src: "/project-previews/desain.png",
        caption: "3B editör ve oda ayarları paneli",
      },
      { src: "/project-previews/desain-salon.jpg", caption: "Salon düzeni" },
      {
        src: "/project-previews/desain-yatak-odasi.jpg",
        caption: "Yatak odası düzeni",
      },
      { src: "/project-previews/desain-l-tipi.jpg", caption: "L tipi oda biçimi" },
    ],
    coverPosition: "35% center",
    tone: "blue",
  },
  {
    id: "audioroom",
    category: "web",
    title: "AudioRoom",
    hook: "Bir albümü yalnızca dinleme; onun dünyasının içinde dolaş.",
    description:
      "Albüm ve single'ları gezilebilir, oynanabilir 3B dünyalara dönüştüren müzik deneyimleri kütüphanesi. Dört dünya yayında; iki yeni albüm dünyası katalogda yakında olarak yer alıyor.",
    platform: "Responsive web hub · 3B dünyalar",
    status: "Canlı · Gelişiyor · 4 yayında / 2 yakında",
    role: "Konsept ve deneyim tasarımı · Ürün/UI-UX · Yaratıcı frontend geliştirme",
    tools: [
      "TypeScript",
      "Vite",
      "Three.js/WebGL",
      "troika-three-text",
      "YouTube IFrame API",
      "Vercel",
    ],
    highlights: [
      "Hayko Cepkin, Henry the Lee ve Redd için dört oynanabilir müzik dünyası",
      "Redd 21 ve Pink Floyd / The Dark Side of the Moon dünyaları yakında",
    ],
    href: "https://audio-room-ecru.vercel.app/",
    ctaLabel: "Dünyaları keşfet",
    images: [
      {
        src: "/project-previews/audioroom-mukemmel-bosluk.png",
        caption: "Redd — Mükemmel Boşluk dünyası",
      },
      {
        src: "/project-previews/audioroom-hayko-cepkin.png",
        caption: "Hayko Cepkin — Beni Büyüten Şarkılar dünyası",
      },
      {
        src: "/project-previews/audioroom-klostrofobik-kaplumbaga.png",
        caption: "Klostrofobik Kaplumbağa dünyası",
      },
      {
        src: "/project-previews/audioroom-kuantum-dolaniklik.png",
        caption: "Kuantum Dolanıklık dünyası",
      },
    ],
    tone: "red",
  },
  {
    id: "cayan-kuzu-cv",
    category: "web",
    tags: ["CV"],
    title: "Çayan Kuzu CV",
    hook: "Ürün tasarımı, UI/UX, oyun tasarımı ve fizik; tek bir etkileşimli CV'de.",
    description:
      "Çayan Kuzu'nun ürün/UI-UX, oyun ve etkileşimli web çalışmalarını tek sayfalı editorial CV'de birleştiren iki dilli kişisel portfolyo. Responsive web deneyimi ve bağlantıları çalışan TR/EN PDF sürümleri sunar.",
    platform: "Responsive web · Print/PDF",
    status: "Canlı · Güncel tutuluyor",
    role: "Bilgi mimarisi · İçerik · UI/UX · Frontend geliştirme",
    tools: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Lucide",
      "CSS print styles",
      "Vercel",
    ],
    highlights: [
      "TR/EN içerik, kompakt mobil sidebar ve erişilebilir accordion sistemi",
      "Editorial A4 görünüm ile yazdırmada eksiksiz açılan indirilebilir PDF'ler",
    ],
    href: "https://cayankuzucv.vercel.app/",
    ctaLabel: "CV'yi görüntüle",
    images: [
      {
        src: "/project-previews/cayankuzu-cv.png",
        caption: "Profil bölümü ve iletişim kenar çubuğu",
      },
      {
        src: "/project-previews/cayankuzu-cv-projects.png",
        caption: "Projeler bölümü",
      },
    ],
    coverPosition: "center top",
    tone: "ink",
  },
  {
    id: "etkinlink",
    category: "mobile",
    title: "EtkinLink",
    hook: "Bir etkinlik keşfet; aynı heyecanı paylaşacağın insanlarla tanış.",
    description:
      "Gerçek etkinlikleri keşfetme, filtreleme ve kaydetme akışlarını; etkinliğe özel sohbet odaları ve yalnız aynı etkinliğe katılan kullanıcılar arasındaki eşleşme deneyimiyle birleştiren sosyal etkinlik uygulaması.",
    platform: "iOS · Android",
    status: "Geliştiriliyor · Mağaza öncesi",
    role: "Ürün ve UI/UX tasarımı · Mobil ve backend geliştirme",
    tools: [
      "Figma",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "Sentry",
    ],
    highlights: [
      "etkinlik.io verisiyle şehir, arama ve filtre odaklı etkinlik keşfi",
      "Etkinlik odaları, katılım temelli eşleşme ve karşılıklı beğeni sonrası sohbet",
    ],
    href: "https://www.figma.com/proto/RLPPToWydcFxLtnlvTr0mi/EtkinLink?node-id=32-1772&viewport=-607%2C-758%2C0.69&t=BmlrdaiaacIsarlK-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=97%3A386&show-proto-sidebar=1&page-id=12%3A8",
    websiteUrl: "https://cayankuzu.github.io/EtkinLink_web/",
    downloadStatus: "İndirme bağlantısı çok yakında",
    images: [
      {
        src: "/project-previews/etkinlink-1.png",
        caption: "Keşfet: yaklaşan etkinlikler",
      },
      { src: "/project-previews/etkinlink-2.png", caption: "Etkinlik odaları" },
      {
        src: "/project-previews/etkinlink-3.png",
        caption: "Aynı etkinliğe katılanlarla eşleşme",
      },
      {
        src: "/project-previews/etkinlink-4.png",
        caption: "Eşleşme sonrası sohbet",
      },
    ],
    tone: "blue",
  },
  {
    id: "universe",
    category: "mobile",
    title: "UniVerse",
    hook: "Üniversite hayatının tamamı tek bir dijital evrende.",
    description:
      "Öğrenci ve üniversite kulübü hesaplarını aynı sosyal kampüs akışında buluşturan mobil ürün. Öğrenciler kulüpleri ve etkinlikleri keşfedip takip eder; kulüpler etkinlik yayınlar ve katılımcılar albümlerde deneyimi sürdürür.",
    platform: "iOS · Android",
    status: "iOS ve Android'de yayında",
    role: "Ürün ve UI/UX tasarımı · Mobil ve Supabase geliştirme",
    tools: [
      "Figma Make",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "Sentry",
    ],
    highlights: [
      "Öğrenci ve kulüpler için ayrı hesap, profil, arama ve takip akışları",
      "Etkinlik oluşturma; fotoğraf/video albümleri, beğeni ve yorum sistemi",
    ],
    href: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?fullscreen=1&t=z4tqXaqRw3iPsSzE-1&code-node-id=0-9",
    websiteUrl: "https://cayankuzu.github.io/uniVerse_web/",
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/universe-app/id6761912452",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ogrencisosyalagi.app",
      },
    ],
    images: [
      {
        src: "/project-previews/universe-1.png",
        caption: "Ana akış: kulüp etkinlikleri",
      },
      {
        src: "/project-previews/universe-2.png",
        caption: "Arama: etkinlikler ve kulüpler",
      },
      {
        src: "/project-previews/universe-3.png",
        caption: "Öğrenci profili ve albümler",
      },
    ],
    tone: "green",
  },
  {
    id: "sorita",
    category: "mobile",
    title: "SoRita",
    hook: "Şehir artık yalnızca bir harita değil, birlikte yazılan sosyal bir hikâye.",
    description:
      "Kullanıcıların harita üzerinde fotoğraf, video ve kişisel not içeren mekân kartları oluşturduğu; bu kartları tematik listelerde toplayıp sosyal akışta paylaşabildiği sosyal harita ürünü.",
    platform: "iOS · Android",
    status: "iOS ve Android'de yayında",
    role: "Ürün ve UI/UX tasarımı · Mobil ve backend geliştirme",
    tools: [
      "Figma Make",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "React Native Maps",
      "Sentry",
    ],
    highlights: [
      "Mekân kartlarında fotoğraf, video, başlık ve kişisel deneyim notu",
      "Herkese açık/özel listeler; takip, beğeni, yorum, engelleme ve raporlama",
    ],
    href: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?fullscreen=1&t=a9Aa6ncfv0vyOC9N-1&code-node-id=0-9",
    websiteUrl: "https://cayankuzu.github.io/SoRita_web/",
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/sorita-app/id6762198781",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.cayan.sorita.socialmap",
      },
    ],
    images: [
      {
        src: "/project-previews/sorita-1.png",
        caption: "Akış: haritada paylaşılan mekân listeleri",
      },
      {
        src: "/project-previews/sorita-2.png",
        caption: "Keşfet: listeler ve mekânlar",
      },
      { src: "/project-previews/sorita-3.png", caption: "Profil ve listeler" },
    ],
    tone: "violet",
  },
  {
    id: "wmatch",
    category: "mobile",
    title: "WMatch",
    hook: "Ne izlediğin, kiminle eşleşeceğini söylesin.",
    description:
      "Film ve dizi zevkini sosyal eşleşmeye dönüştüren 18+ mobil ürün. Kullanıcılar TMDB kataloğunda içerik keşfeder, favori ve izleme geçmişi oluşturur, uyum puanıyla profilleri inceler, eşleşir ve sohbet eder.",
    platform: "iOS · Android",
    status: "iOS'ta yayında · Android hazırlanıyor",
    role: "Ürün ve UI/UX tasarımı · Mobil ve backend geliştirme",
    tools: [
      "Figma Make",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "TMDB API",
      "Hono",
      "Sentry",
    ],
    highlights: [
      "Ortak favoriler ve izlenenlerden hesaplanan uyum puanı; karşılıklı beğeni sonrası eşleşme",
      "Gerçek zamanlı sohbet, çevrim içi/yazıyor durumu, okundu bilgisi ve push bildirimleri",
    ],
    href: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?fullscreen=1&t=O3uk8ynWSDA7YVm7-1&code-node-id=0-9",
    websiteUrl: "https://cayankuzu.github.io/WMatch_web/",
    storeLinks: [
      {
        label: "App Store",
        href: "https://apps.apple.com/tr/app/wmatch/id6779453259",
      },
    ],
    images: [
      {
        src: "/project-previews/wmatch-1.png",
        caption: "Keşfet: şu anda izlenenler ve popüler filmler",
      },
      { src: "/project-previews/wmatch-2.png", caption: "Uyum puanı ekranı" },
      { src: "/project-previews/wmatch-3.png", caption: "Mesajlar" },
      {
        src: "/project-previews/wmatch-4.png",
        caption: "Profil ve izleme zevki",
      },
    ],
    tone: "ink",
  },
  {
    id: "card-race",
    category: "game",
    title: "Card Race Game",
    hook: "Dört as, dört şerit ve her kart çekiminde değişen bir yarış.",
    description:
      "Dört asın sekiz adımlı sembol şeritlerinde yarıştığı iskambil oyunu. Çekilen kart ilgili ası ilerletir; tüm aslar eşiği geçtiğinde açılan ceza kartı kendi sembolünü geri iter.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Oyun mekaniği · Python prototipi · Tarayıcı uyarlaması",
    tools: ["Python", "Jupyter/Colab", "HTML", "CSS", "JavaScript", "Vercel"],
    highlights: [
      "Dört bağımsız şerit ve sekiz ceza kartına dayalı olasılık döngüsü",
      "Deste bittiğinde en öndeki asın kazandığı responsive ve dokunmatik oyun",
    ],
    href: "https://card-race-game.vercel.app/",
    images: [
      {
        src: "/project-previews/card-race.png",
        caption: "Asların Yarışı: şeritler ve kart destesi",
      },
    ],
    tone: "lime",
  },
  {
    id: "battleship",
    category: "game",
    title: "Battleship",
    hook: "Klasik deniz savaşını müzik, ses ve sürükle-bırak kontrolüyle yeniden oyna.",
    description:
      "Yedi gemili 10×10 Deniz Savaşı oyunu. Oyuncu gemilerini sürükleyip döndürür veya rastgele yerleştirir; ardından bilgisayar rakibiyle dönüşümlü atış yapar.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Oyun geliştirme · UI ve etkileşim tasarımı · Web uyarlaması",
    tools: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS", "Vercel"],
    highlights: [
      "Dokunmada basılı tutma ve çift dokunmayla gemi döndürme",
      "İsabet istatistikleri ile birbirinden bağımsız müzik ve SFX kontrolleri",
    ],
    href: "https://battleship-pygame.vercel.app/",
    images: [
      {
        src: "/project-previews/battleship.png",
        caption: "Gemi yerleşimi ve radar tahtası",
      },
    ],
    video: "/project-previews/videos/battleship-gameplay.mp4",
    tone: "navy",
  },
  {
    id: "old-maid",
    category: "game",
    title: "Papaz Kaçtı",
    hook: "Sağındaki elden kapalı bir kart seç; eşsiz papaz sende kalmasın.",
    description:
      "Bir insan ve üç bilgisayar oyuncusuyla oynanan dört kişilik kart oyunu. Aynı değerdeki çiftler elenir; elinde eşsiz papazla kalan son oyuncu kaybeder.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Oyun mantığı · Nesne yönelimli Python · Web uyarlaması",
    tools: ["Python", "HTML", "CSS", "JavaScript", "Vercel"],
    highlights: [
      "Her elde yeniden karıştırılan deste ve masa üzerinde izlenen açılmış çiftler",
      "Seçilen kartı iki saniye gösteren, mobilde de oynanabilen etkileşim",
    ],
    href: "https://old-maid-card-game.vercel.app/",
    images: [
      {
        src: "/project-previews/old-maid.png",
        caption: "Dört oyunculu kart masası",
      },
    ],
    video: "/project-previews/videos/old-maid-gameplay.mp4",
    tone: "cream",
  },
  {
    id: "tictactoe",
    category: "game",
    title: "Tic Tac Toe",
    hook: "Tahtanı seç; üçlüden beşli çizgiye uzanan rekabeti kazan.",
    description:
      "Aynı cihazdaki iki oyuncunun 3×3, 4×4, 5×5 veya 6×6 tahtalarda yarıştığı genişletilmiş Tic Tac Toe oyunu.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Oyun mantığı · Python/NumPy prototipi · Web arayüzü",
    tools: [
      "Python",
      "NumPy",
      "Jupyter/Colab",
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
    ],
    highlights: [
      "Tahta boyutuna göre üçlü, dörtlü veya beşli kazanma koşulu",
      "Kazanan hücre vurgusu ve oturumluk X/O/beraberlik skoru",
    ],
    href: "https://tic-tac-toe-game-delta-jade.vercel.app/",
    images: [
      {
        src: "/project-previews/tictactoe.png",
        caption: "Tahta seçimi ve oyun alanı",
      },
    ],
    video: "/project-previews/videos/tictactoe-gameplay.mp4",
    tone: "coral",
  },
  {
    id: "son-40-saniye",
    category: "game",
    title: "Son 40 Saniye",
    hook: "Öleceğin kesin; 33 kaydı ayıklayıp itibarını korumak için 40 saniyen var.",
    description:
      "Trafik kazasının ardından 40 saniyede 33 arama kaydını yönetmeye dayanan kara mizah ve itibar oyunu. Masum kayıtları koruma, riskli olanları silme kararları 0–1000 arası sonucu belirler.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Konsept ve oyun tasarımı · Ürün/UI-UX · Frontend ve API geliştirme",
    tools: [
      "React",
      "TypeScript",
      "Vite",
      "Framer Motion",
      "Vercel Functions",
      "Vercel Blob",
    ],
    highlights: [
      "Kullanıcı katkılı ortak arama havuzu, liderlik tablosu ve 20 itibar unvanı",
      "İçerik/skor yönetimi, IP-cihaz engelleme ve audit kayıtları",
    ],
    href: "https://google-history-clear-game.vercel.app/",
    images: [
      {
        src: "/project-previews/son-40-saniye.png",
        caption: "Açılış ekranı ve arama kayıtları",
      },
    ],
    video: "/project-previews/videos/son-40-saniye-gameplay.mp4",
    tone: "red",
  },
  {
    id: "asmaca",
    category: "game",
    title: "Asmaca",
    hook: "Bilgi kaderi belirler; verdiğin her cevap sahnedeki hükmü değiştirir.",
    description:
      "Kaynaklı bilgi sorularını sinematik bir 3B adam asmaca sahnesiyle birleştiren, Türkçe ve İngilizce oynanabilen web oyunu.",
    platform: "Responsive web · Masaüstü ve mobil",
    status: "Canlı",
    role: "Oyun ve deneyim tasarımı · 3B frontend · UI/UX ve içerik sistemi",
    tools: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "React Three Fiber/Drei",
      "Zustand",
      "Framer Motion",
      "Web Audio API",
      "Playwright",
    ],
    highlights: [
      "Klasik, AS ve KURTAR modları ile üç zorluk düzeyi",
      "Altı karakter; her zorluk düzeyinde 99'ar soru ve tıklanabilir kaynaklar",
    ],
    href: "https://hangman.vercel.app/",
    images: [
      {
        src: "/project-previews/asmaca-idle.png",
        caption: "Sinematik 3B darağacı sahnesi",
      },
    ],
    video: "/project-previews/videos/asmaca-gameplay.mp4",
    tone: "amber",
  },
  {
    id: "monster-wrangler",
    category: "game",
    title: "Monster Wrangler",
    hook: "Hedefteki rengi yakala; yanlış canavar bir canına mal olsun.",
    description:
      "Ekrandaki hedef renkle eşleşen hareketli canavarları yakaladığın arcade oyunu. Doğru hedef skor kazandırır, yanlış hedef bir can götürür.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Pygame geliştirme · Web uyarlaması · Responsive kontrol tasarımı",
    tools: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS", "Vercel"],
    highlights: [
      "Beş can, başlangıçta iki ışınlanma ve her turda bir ek hak",
      "Tur ilerledikçe büyüyen canavar kalabalığı ve dokunmatik kontrol",
    ],
    href: "https://monster-wrangler.vercel.app/",
    images: [
      {
        src: "/project-previews/monster-wrangler.png",
        caption: "Hedef renk ve hareketli canavarlar",
      },
    ],
    video: "/project-previews/videos/monster-wrangler-gameplay.mp4",
    tone: "violet",
  },
  {
    id: "catch-the-clown",
    category: "game",
    title: "Catch the Clown",
    hook: "Palyaçoyu yakaladıkça hız artar; her ıskada bir can gider.",
    description:
      "Hareket eden palyaçoya her isabette skorun ve hızın arttığı refleks oyunu. Her ıska beş candan birini götürür.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Pygame geliştirme · Tarayıcı uyarlaması · Dokunmatik etkileşim",
    tools: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS", "Vercel"],
    highlights: [
      "Her isabette değişen yön ve yükselen hareket hızı",
      "Pointer/touch kontrolü ile özgün ses ve müzik",
    ],
    href: "https://catch-the-clown.vercel.app/",
    images: [
      {
        src: "/project-previews/catch-the-clown-gameplay.png",
        caption: "Oyun ekranı: skor ve kalan canlar",
      },
    ],
    video: "/project-previews/videos/catch-the-clown-gameplay.mp4",
    tone: "blue",
  },
  {
    id: "snake",
    category: "game",
    title: "Snake",
    hook: "Her elma seni büyütür; kendi gövden bir sonraki dönüşünü zorlaştırır.",
    description:
      "Elmalarla uzayan yılanı duvarlara ve kendi gövdesine çarpmadan yönettiğin klasik arcade oyununun web uyarlaması.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Pygame geliştirme · Web uyarlaması · Mobil kontrol tasarımı",
    tools: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS", "Vercel"],
    highlights: [
      "Klavye, ekran yön tuşları ve kaydırma hareketleriyle kontrol",
      "Boş hücreye güvenli elma üretimi ve bağımsız ses kontrolü",
    ],
    href: "https://snake-game-seven-gray.vercel.app/",
    images: [
      {
        src: "/project-previews/snake-gameplay.png",
        caption: "Oyun ekranı ve skor",
      },
    ],
    video: "/project-previews/videos/snake-gameplay.mp4",
    cardLayout: "contain",
    tone: "green",
  },
  {
    id: "burger-dog",
    category: "game",
    title: "Burger Dog",
    hook: "Burger hızlanıyor, köpek acıkıyor; kaçırdığın her lokma bir can götürüyor.",
    description:
      "Köpeği yönlendirerek düşen burgerleri yakaladığın refleks oyunu. Her yakalama burgerin düşüş hızını ve skoru artırır; kaçan burger bir can götürür.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Pygame geliştirme · Responsive web uyarlaması · Kontrol tasarımı",
    tools: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS", "Vercel"],
    highlights: [
      "Üç can ve harcandıkça yeniden dolan hız desteği",
      "Hız ile yakalama mesafesine göre hesaplanan dinamik puan",
    ],
    href: "https://burger-dog.vercel.app/",
    images: [
      {
        src: "/project-previews/burger-dog-gameplay.png",
        caption: "Oyun ekranı: skor, can ve hız desteği",
      },
    ],
    video: "/project-previews/videos/burger-dog-gameplay.mp4",
    tone: "orange",
  },
  {
    id: "feed-the-dragon",
    category: "game",
    title: "Feed the Dragon",
    hook: "Her altın ejderhayı besler, oyunu hızlandırır ve bir sonraki hamleyi zorlaştırır.",
    description:
      "Ejderhayı dikey eksende yönlendirip sağdan gelen altınları yakaladığın arcade oyunu. Her altın skoru ve akış hızını artırır; kaçırılan altın bir can götürür.",
    platform: "Responsive web · Masaüstü ve mobil tarayıcı",
    status: "Canlı",
    role: "Pygame geliştirme · Web uyarlaması · Mobil etkileşim tasarımı",
    tools: ["Python", "Pygame", "HTML5 Canvas", "JavaScript", "CSS", "Vercel"],
    highlights: [
      "Beş can ve giderek hızlanan kesintisiz oyun döngüsü",
      "Klavye, ekran tuşları ve sürükleme kontrolü",
    ],
    href: "https://feed-the-dragon.vercel.app/",
    images: [
      {
        src: "/project-previews/feed-the-dragon-gameplay.png",
        caption: "Oyun ekranı: ejderha ve altın",
      },
    ],
    video: "/project-previews/videos/feed-the-dragon-gameplay.mp4",
    coverPosition: "left center",
    tone: "green",
  },
  {
    id: "atkafasi",
    category: "content",
    title: "AtKafası Fanzin",
    hook: "Düşüncelerin birbirine çarptığı bağımsız bir fanzin alanı.",
    description:
      "Yazı, görsel dil ve ortak üretimi bir araya getiren bağımsız fanzin. Yayımlanan iki sayı Shopier ve Gumroad üzerinden erişilebilir; proje görsel kimlik, yayınlama ve dijital satış/destek akışını da kapsar.",
    platform: "Bağımsız yayın · Dijital dağıtım/satış",
    status: "2 sayı yayımlandı · Satışta",
    role: "İçerik · Editoryal/görsel kimlik · Yayınlama · Satış akışı",
    tools: ["Shopier", "Gumroad"],
    highlights: [
      "İki yayımlanmış sayı ve bağımsız yazı/görsel üretim",
      "Shopier mağazası ile Gumroad'da dijital ürün ve destek akışı",
    ],
    href: "https://www.shopier.com/atkafasifanzin",
    ctaLabel: "Shopier'den satın al",
    secondaryHref: "https://atkafasifanzin.gumroad.com/",
    secondaryLabel: "Gumroad'da incele",
    images: [
      { src: "/atkafasi-sayi-1.webp", caption: "1. sayı kapağı" },
      { src: "/atkafasi-sayi-2.png", caption: "2. sayı kapağı" },
      {
        src: "/project-previews/atkafasi.png",
        caption: "Gumroad dijital mağazası",
      },
    ],
    cardLayout: "stack",
    tone: "orange",
  },
  {
    id: "quantum-entanglement",
    category: "science",
    tags: ["Fizik"],
    title: "Kuantum Dolanıklık",
    hook: "Einstein'ın “ürkütücü” dediği etki: dolanık parçacıklar birbirini gerçekten anında mı etkiler?",
    description:
      "2022 Nobel Fizik Ödülü'nü kazanan deneylerden yola çıkarak kuantum dolanıklığı, Bell eşitsizliği ve gizli değişkenler tartışmasını ele alan bir fizik araştırma yazısı. EPR paradoksundan Alain Aspect'in deneylerine uzanan çizgiyi özetler.",
    platform: "PDF · Kişisel araştırma yazısı",
    status: "Tamamlandı",
    role: "Araştırma · Yazım",
    tools: ["Fizik araştırması", "Akademik yazım"],
    highlights: [
      "Bell eşitsizliği ve gizli değişken teorilerinin deneysel çürütülmesi",
      "EPR paradoksundan 2022 Nobel Fizik Ödülü deneylerine kronolojik anlatım",
    ],
    href: "/dokuman/kuantum-dolaniklik",
    images: [
      {
        src: "/project-previews/quantum-nobel-2022.jpg",
        caption: "2022 Nobel Fizik Ödülü: Aspect, Clauser ve Zeilinger",
      },
      {
        src: "/project-previews/quantum-schrodingers-cat.jpg",
        caption: "Schrödinger'in kedisi düşünce deneyi",
      },
      {
        src: "/project-previews/quantum-einstein-bohr.jpg",
        caption: "Einstein ile Bohr arasındaki tartışma",
      },
    ],
    cardLayout: "contain",
    tone: "violet",
  },
  {
    id: "general-relativity",
    category: "science",
    tags: ["Fizik"],
    title: "Genel Görelilik",
    hook: "Kütleçekimi ışığı nasıl büker? Merkür'ün yörüngesinden ikiz kuasara uzanan kanıtlar.",
    description:
      "Genel görelilik teorisinin temel fikrini, kütleçekimi ile ivmenin denkliğini ve ışığın büküldüğünü gösteren gerçek gözlemleri (Merkür'ün yörünge sapması, ikiz kuasar) bir araya getiren fizik sunumu.",
    platform: "PowerPoint sunumu",
    status: "Tamamlandı",
    role: "Araştırma · Sunum tasarımı",
    tools: ["PowerPoint", "Fizik araştırması"],
    highlights: [
      "Kütleçekimi-ivme denkliğinden ışığın bükülmesine uzanan mantık kurgusu",
      "Merkür yörünge sapması ve ikiz kuasar gibi gözlemsel kanıtlar",
    ],
    href: "/dokuman/genel-gorelilik",
    images: [
      {
        src: "/project-previews/general-relativity-light-bending.jpg",
        caption: "Güneş'in yakınından geçerken bükülen yıldız ışığı",
      },
      {
        src: "/project-previews/general-relativity-spacetime-grid.jpg",
        caption: "Kütlenin büktüğü uzay-zaman",
      },
      {
        src: "/project-previews/general-relativity-gravitational-lensing.jpg",
        caption: "Kütleçekimsel merceklenme ve ikiz kuasar",
      },
    ],
    cardLayout: "contain",
    tone: "navy",
  },
  {
    id: "dyson-ring",
    category: "science",
    tags: ["Astrofizik"],
    title: "Dyson Ring",
    hook: "Bir yıldızın çevresine dev bir enerji halkası kurmak mümkün mü? TÜBİTAK'a sunulan araştırma önerisi.",
    description:
      "TÜBİTAK 2209-A Üniversite Öğrencileri Araştırma Projeleri Destek Programı kapsamında Marmara Üniversitesi'nde hazırlanan, Dyson halkası kavramının teknik ve ekonomik fizibilitesini literatür taraması, simülasyon ve prototip çalışmasıyla değerlendiren resmi araştırma önerisi.",
    platform: "Word belgesi · Resmi araştırma önerisi",
    status: "TÜBİTAK 2209-A başvurusu",
    role: "Araştırmacı · Öneri yazarı",
    tools: ["Bilimsel yazım", "Proje yönetimi", "Fizibilite analizi"],
    highlights: [
      "Literatür taraması, simülasyon modeli ve prototip üretimini kapsayan dört iş paketi",
      "Danışman: Caner Değer · Marmara Üniversitesi",
    ],
    href: "/dokuman/dyson-ring",
    images: [
      {
        src: "/project-previews/dyson-ring-cover.jpg",
        caption: "TÜBİTAK 2209-A başvuru formu kapağı",
      },
      {
        src: "/project-previews/dyson-ring-aims.jpg",
        caption: "Amaç ve hedefler",
      },
      {
        src: "/project-previews/dyson-ring-risk-table.jpg",
        caption: "Risk yönetimi ve araştırma olanakları tabloları",
      },
    ],
    cardLayout: "contain",
    tone: "amber",
  },
  {
    id: "jump-analysis",
    category: "science",
    tags: ["Makine öğrenmesi"],
    title: "Sıçrama Yüksekliği Analizi",
    hook: "Bir veri setinden sıçrama yüksekliğini tahmin eden uçtan uca makine öğrenmesi çalışması.",
    description:
      "Veri setinin oluşturulmasından korelasyon ısı haritasına, öznitelik mühendisliğinden Gradient Boosting/Random Forest/KNN modellerinin karşılaştırılmasına uzanan uçtan uca bir veri analizi ve makine öğrenmesi sunumu.",
    platform: "Canva sunumu",
    status: "Tamamlandı",
    role: "Veri analizi · Sunum tasarımı",
    tools: ["Canva", "Makine öğrenmesi", "Veri analizi"],
    highlights: [
      "Korelasyon ısı haritası ve öznitelik mühendisliğiyle veri keşfi",
      "Gradient Boosting, Random Forest ve KNN modellerinin karşılaştırmalı değerlendirmesi",
    ],
    href: "https://canva.link/9uou0pjp4wumn1g",
    ctaLabel: "Sunumu Canva'da aç",
    images: [
      {
        src: "/project-previews/jump-height-ml-presentation.jpg",
        caption: "Sunum akışı",
      },
      {
        src: "/project-previews/jump-height-correlation-heatmap.jpg",
        caption: "Korelasyon ısı haritası",
      },
      {
        src: "/project-previews/jump-height-feature-engineering.jpg",
        caption: "Öznitelik mühendisliği",
      },
    ],
    tone: "lime",
  },
  {
    id: "kepce-operatoru",
    category: "science",
    tags: ["Elektronik"],
    title: "Kepçe Operatörü Maketi",
    hook: "Dondurma çubuklarından bir kepçe kolu: dört servo, dört potansiyometre, dört bağımsız eksen.",
    description:
      "Lise son sınıf fizik projesi kapsamında Arduino Uno ile geliştirilen, gerçek bir kepçenin (ekskavatör) hareket eksenlerini küçük ölçekte simüle eden bir maket. Kol ve şasi dondurma çubuklarından inşa edildi; her biri bir potansiyometreye bağlı 4 servo motor kolun dönüş, kol, kepçe kolu ve kova eksenlerini ayrı ayrı sürüyor, Nokia 5110 LCD ekran ise anlık durumu gösteriyor.",
    platform: "Arduino Uno · Fiziksel maket",
    status: "Tamamlandı",
    role: "Elektronik tasarım · Arduino programlama · Maket yapımı",
    tools: [
      "Arduino Uno",
      "Servo motor (SG90)",
      "Potansiyometre",
      "Nokia 5110 LCD",
      "Dondurma çubuğu",
    ],
    highlights: [
      "4 servo motor ve 4 potansiyometreyle bağımsız kontrol edilen 4 eksenli kepçe kolu",
      "Dondurma çubuklarından inşa edilen şasi ve Nokia 5110 ekranla anlık geri bildirim",
    ],
    images: [
      {
        src: "/project-previews/kepce-operatoru.jpg",
        caption: "Maket, LCD ekran ve potansiyometre kontrol paneli",
      },
    ],
    video: "/project-previews/videos/kepce-operatoru-demo.mp4",
    fullVideo: "/project-previews/videos/kepce-operatoru-full.mp4",
    tone: "coral",
  },
  {
    id: "uniforumhub-flyer",
    category: "design",
    tags: ["Canva"],
    title: "UniForumHub Broşürü",
    hook: "Ders notundan ikinci el eşyaya, üniversitelilerin her şeyi paylaştığı bir forumun broşürü.",
    description:
      "UniForumHub adlı üniversite forumu konseptini tanıtan bir Canva broşür tasarımı. Forum; ders notu paylaşımı, etkinlik fikirleri, kitap/film/müzik sohbetleri, ev/iş arkadaşı bulma ve ikinci el eşya ilanı gibi başlıkları bir araya getiriyor; öne çıkan içerikler AtKafası Fanzin'de de yer alabiliyor.",
    platform: "Canva broşür tasarımı",
    status: "Tasarım tamamlandı",
    role: "Görsel tasarım · Konsept",
    tools: ["Canva"],
    highlights: [
      "Ders notu, etkinlik, ikinci el eşya ve sohbet başlıklarını bir araya getiren forum konsepti",
      "AtKafası Fanzin ile çapraz içerik tanıtımı",
    ],
    href: "https://canva.link/qx0tf07ri8ul5t1",
    images: [
      {
        src: "/project-previews/uniforumhub-flyer.jpg",
        caption: "Kapak görseli",
      },
      {
        src: "/project-previews/uniforumhub-flyer-page2.jpg",
        caption: "QR kodlar ve forum açıklaması",
      },
      {
        src: "/project-previews/uniforumhub-flyer-page3.jpg",
        caption: "AtKafası Fanzin çapraz tanıtımı",
      },
    ],
    tone: "orange",
  },
  {
    id: "sorita-promo",
    category: "design",
    tags: ["Canva", "SoRita"],
    title: "SoRita Tanıtım Videosu",
    hook: "SoRita'nın “arkadaşlarını takip et, kaydettikleri mekânları gör” vaadini anlatan tanıtım tasarımı.",
    description:
      "SoRita mobil uygulamasının sosyal harita deneyimini duyurmak için Canva'da hazırlanmış kısa tanıtım videosu tasarımı.",
    platform: "Canva video şablonu",
    status: "Tamamlandı",
    role: "Görsel tasarım",
    tools: ["Canva"],
    highlights: [
      "SoRita'nın mekân kaydetme ve arkadaş takibi özelliklerini öne çıkaran tanıtım kurgusu",
      "Gerçek SoRita uygulama ekranlarıyla desteklenen tanıtım görselleri",
    ],
    href: "https://canva.link/57hgko0vw2x3g0r",
    images: [
      {
        src: "/project-previews/sorita-promo.jpg",
        caption: "Tanıtım videosunun ana karesi",
      },
    ],
    cardLayout: "contain",
    tone: "blue",
  },
  {
    id: "universe-poster",
    category: "design",
    tags: ["Canva", "UniVerse"],
    title: "UniVerse Yatırımcı Sunumu",
    hook: "UniVerse için 28 sayfalık girişim sunumu: problem, çözüm, rakip analizi ve iş modeli.",
    description:
      "“Mobile Apps by MeMoDe” markasıyla hazırlanan, UniVerse'ün öğrenci/kulüp problemini, çözümünü, gerçek uygulama ekranlarını, rakip analizini (UniClubs, Kampüslü) ve iş modelini kapsayan 28 sayfalık bir Canva girişim sunumu; SoRita ve WMatch ile birlikte sunulan bir mobil uygulama portföyünün parçası.",
    platform: "Canva sunumu · 28 sayfa",
    status: "Tamamlandı",
    role: "Görsel tasarım · Sunum içeriği",
    tools: ["Canva"],
    highlights: [
      "Kulüpler, etkinlikler ve takip akışını gösteren gerçek uygulama ekran görüntüleri",
      "Rakip analizi (UniClubs, Kampüslü) ve iş modeli sayfalarını içeren tam kapsamlı deste",
    ],
    href: "https://canva.link/2v5p2m45n4c8nda",
    ctaLabel: "Sunumu Canva'da aç",
    images: [
      {
        src: "/project-previews/universe-app-promo.jpg",
        caption: "Kapak: Mobile Apps by MeMoDe",
      },
      {
        src: "/project-previews/universe-app-promo-problems.jpg",
        caption: "Öğrenci ve kulüp problemleri",
      },
      {
        src: "/project-previews/universe-app-promo-competitors.jpg",
        caption: "Rakip analizi",
      },
    ],
    tone: "ink",
  },
  {
    id: "audio-room-poster",
    category: "design",
    tags: ["Canva", "AudioRoom"],
    title: "AudioRoom Tanıtım Görseli",
    hook: "AudioRoom'un “Mükemmel Boşluk” dünyasını kontrol şeması ve QR kodlarla anlatan poster.",
    description:
      "AudioRoom'un Redd'in “Mükemmel Boşluk” albüm dünyasını kontrol tuşları, harita ve oynatıcı arayüzüyle tanıtan; yayındaki ve yakında gelecek dünyaları (Hayko Cepkin, Pink Floyd, Kuantum Dolanıklık) listeleyen Canva tasarımı.",
    platform: "Canva tanıtım posteri",
    status: "Tamamlandı",
    role: "Görsel tasarım",
    tools: ["Canva"],
    highlights: [
      "Klavye kontrolleri, harita ve oynatıcı arayüzünü tek karede özetleyen düzen",
      "Yayındaki ve yakında gelecek AudioRoom dünyalarının tanıtımı",
    ],
    href: "https://canva.link/vvz204q9oy7b53y",
    images: [
      {
        src: "/project-previews/audioroom-info-poster.jpg",
        caption: "Kontroller ve QR kodlu poster",
      },
      {
        src: "/project-previews/audioroom-info-poster-page2.jpg",
        caption: "Yayındaki ve yakında gelecek dünyalar",
      },
    ],
    tone: "green",
  },
];
