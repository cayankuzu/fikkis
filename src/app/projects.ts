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
    | "son-40-saniye"
    | "asmaca"
    | "monster-wrangler"
    | "catch-the-clown"
    | "snake"
    | "burger-dog"
    | "feed-the-dragon"
    | "atkafasi";
  title: string;
  hook: string;
  description: string;
  href?: string;
  downloadUrl?: string;
  downloadStatus?: string;
  secondaryHref?: string;
  category: "web" | "game" | "mobile" | "content";
  desktopOnly?: boolean;
  preview: string;
  videoPreview?: string;
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
    category: "web",
    desktopOnly: true,
    title: "Remember You Must Die",
    hook: "Ölümü hatırlatan bir dünyanın içinde yürümeye cesaret et.",
    description:
      "Müzik, ışık ve mekânı bir araya getiren etkileşimli bir memento mori deneyimi. Her oda zamanı, hafızayı ve faniliği başka bir atmosferle yeniden kurar.",
    href: "https://remember-you-must-die-web.vercel.app/",
    preview: "/project-previews/remember-ouroboros.png",
    videoPreview: "/project-videos/remember.webm",
    tone: "amber",
  },
  {
    id: "desain",
    category: "web",
    desktopOnly: true,
    title: "desAIn",
    hook: "Bir odayı ölç; birkaç dokunuşla üç boyutlu bir tasarıma dönüştür.",
    description:
      "İç mekânları tarayıcıda planlamayı ve görselleştirmeyi kolaylaştıran yaratıcı bir 3B araç. Ölçüler, yerleşim ve sahne önizlemesi aynı çalışma alanında buluşur.",
    href: "https://des-ai-n.vercel.app/",
    preview: "/project-previews/desain.png",
    videoPreview: "/project-videos/desain.webm",
    previewPosition: "35% center",
    tone: "blue",
  },
  {
    id: "audioroom",
    category: "web",
    desktopOnly: true,
    title: "AudioRoom",
    hook: "Bir albümü yalnızca dinleme; onun dünyasının içinde dolaş.",
    description:
      "Albüm arşivini keşfedilebilir dijital odalara dönüştüren bir müzik deneyimi. Redd'in Mükemmel Boşluk evreni, ses ile görsel hikâye anlatımını aynı sahnede birleştirir.",
    href: "https://audio-room-ecru.vercel.app/",
    preview: "/project-previews/audioroom-mukemmel-bosluk.png",
    videoPreview: "/project-videos/audioroom.webm",
    tone: "red",
  },
  {
    id: "universe",
    category: "mobile",
    title: "UniVerse",
    hook: "Üniversite hayatının tamamı tek bir dijital evrende.",
    description:
      "Ürün fikrinin mobil UI/UX mockup ve etkileşimli prototipi. Öğrencileri kampüs akışı, topluluklar, etkinlikler ve ortak ilgi alanları çevresinde buluşturarak üniversite deneyimini daha görünür ve bağlantılı hâle getirir.",
    href: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?fullscreen=1&t=z4tqXaqRw3iPsSzE-1&code-node-id=0-9",
    downloadUrl: "https://cayankuzu.github.io/uniVerse_web/download/",
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
    category: "mobile",
    title: "SoRita",
    hook: "Şehir artık yalnızca bir harita değil, birlikte yazılan sosyal bir hikâye.",
    description:
      "Ürün fikrinin mobil UI/UX mockup ve etkileşimli prototipi. Mekânları, anıları ve insanları aynı haritada buluşturur; kullanıcılar rotalar oluşturur, yerleri listeler ve şehir deneyimlerini arkadaşlarıyla paylaşır.",
    href: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?fullscreen=1&t=a9Aa6ncfv0vyOC9N-1&code-node-id=0-9",
    downloadUrl: "https://cayankuzu.github.io/SoRita_web/download/",
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
    category: "mobile",
    title: "WMatch",
    hook: "Ne izlediğin, kiminle eşleşeceğini söylesin.",
    description:
      "Ürün fikrinin mobil UI/UX mockup ve etkileşimli prototipi. İzlediğin film ve dizilerden bir zevk profili çıkarır; ortak yapımlar, türler ve izleme alışkanlıkları yeni sohbetlerin başlangıç noktasına dönüşür.",
    href: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?fullscreen=1&t=O3uk8ynWSDA7YVm7-1&code-node-id=0-9",
    downloadStatus: "İndirme bağlantısı çok yakında",
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
    category: "game",
    title: "Card Race Game",
    hook: "Dört as, dört şerit ve her kart çekiminde değişen bir yarış.",
    description:
      "İskambil destesini olasılık tabanlı bir yarış pistine dönüştüren Python oyunu. Aslar kendi sembollerinde ilerler; açılan ceza kartları dengeleri bozar ve son çekiliş kazananı belirler.",
    href: "https://card-race-game.vercel.app/",
    preview: "/project-previews/card-race.png",
    videoPreview: "/project-videos/card-race.webm",
    tone: "lime",
  },
  {
    id: "battleship",
    category: "game",
    title: "Battleship",
    hook: "Klasik deniz savaşını müzik, ses ve sürükle-bırak kontrolüyle yeniden oyna.",
    description:
      "Pygame ile geliştirilen 10×10 deniz savaşı; gemi yerleşimi, bilgisayar rakibi, isabet animasyonları, skor takibi ve bağımsız müzik/SFX kontrolleri içerir.",
    href: "https://battleship-pygame.vercel.app/",
    preview: "/project-previews/battleship.png",
    videoPreview: "/project-videos/battleship.webm",
    previewFit: "contain",
    tone: "navy",
  },
  {
    id: "old-maid",
    category: "game",
    title: "Papaz Kaçtı",
    hook: "Sağındaki elden kapalı bir kart seç; eşsiz papaz sende kalmasın.",
    description:
      "Gerçek masa düzeninde üç bilgisayar rakibine karşı oynanan dört kişilik kart oyunu. Her elde deste yeniden karıştırılır; çiftler ortaya açılır, senin seçtiğin kart iki saniye gösterilir ve rakiplerin senden aldığı kart gizli kalır.",
    href: "https://old-maid-card-game.vercel.app/",
    preview: "/project-previews/old-maid.png",
    videoPreview: "/project-videos/old-maid.webm",
    tone: "cream",
  },
  {
    id: "tictactoe",
    category: "game",
    title: "Tic Tac Toe",
    hook: "Tahtanı seç; üçlüden beşli çizgiye uzanan rekabeti kazan.",
    description:
      "NumPy ile yazılan satır, sütun ve çapraz kontrol mantığının iki oyunculu web sürümü. 3×3, 4×4, 5×5 veya 6×6 tahtayı seç; moda göre üç, dört ya da beş işareti hizala ve seri skorunu koru.",
    href: "https://tic-tac-toe-game-delta-jade.vercel.app/",
    preview: "/project-previews/tictactoe.png",
    videoPreview: "/project-videos/tictactoe.webm",
    tone: "coral",
  },
  {
    id: "son-40-saniye",
    category: "game",
    title: "Son 40 Saniye",
    hook: "Öleceğin kesin; 33 kaydı ayıklayıp itibarını korumak için 40 saniyen var.",
    description:
      "Tek ortak havuzdan rastgele seçilen 33 arama kaydını incele: masum olanları koru, riskli olanları sola sürükleyip sil. Kullanıcıların eklediği aramalar kategoriye ayrılmadan havuza katılır; kararların 0–1000 arası itibar puanını, unvanını ve liderlik sıralamanı belirler.",
    href: "https://google-history-clear-game.vercel.app/",
    preview: "/project-previews/son-40-saniye.png",
    videoPreview: "/project-videos/son-40-saniye.webm",
    tone: "red",
  },
  {
    id: "asmaca",
    category: "game",
    title: "Asmaca",
    hook: "Bilgi kaderi belirler; verdiğin her cevap sahnedeki hükmü değiştirir.",
    description:
      "Kaynaklı bilgi sorularını sinematik bir 3B adam asmaca düzeniyle birleştiren web oyunu. Klasik, AS ve KURTAR modlarında altı karakterin üç zorluk seviyesindeki soru havuzlarını çöz; cevapların beden, ipler, kapak ve sonucu gerçek zamanlı olarak değiştirsin.",
    href: "https://hangman.vercel.app/",
    preview: "/project-previews/asmaca.png",
    videoPreview: "/project-videos/asmaca.webm",
    tone: "amber",
  },
  {
    id: "monster-wrangler",
    category: "game",
    title: "Monster Wrangler",
    hook: "Hedefteki rengi yakala; yanlış canavar bir canına mal olsun.",
    description:
      "Hareketli canavarlar arasından ekranda gösterilen hedefi bulduğun hızlı bir yakalama oyunu. Turlar ilerledikçe kalabalık büyür; skor, süre, can ve sınırlı ışınlanma hakkı her kararı önemli hâle getirir.",
    href: "https://monster-wrangler.vercel.app/",
    preview: "/project-previews/monster-wrangler.png",
    videoPreview: "/project-videos/monster-wrangler.webm",
    tone: "violet",
  },
  {
    id: "catch-the-clown",
    category: "game",
    title: "Catch the Clown",
    hook: "Palyaçoyu yakaladıkça hız artar; her ıskada bir can gider.",
    description:
      "Orijinal Pygame mekaniğini tarayıcıya taşıyan hızlı bir hedef yakalama oyunu. Hareket eden palyaçoya tıkla veya dokun, seri yaptıkça yükselen tempoya ayak uydur ve beş canın bitmeden en yüksek skora ulaş.",
    href: "https://catch-the-clown.vercel.app/",
    preview: "/project-previews/catch-the-clown-gameplay.png",
    videoPreview: "/project-videos/catch-the-clown.webm",
    tone: "blue",
  },
  {
    id: "snake",
    category: "game",
    title: "Snake",
    hook: "Her elma seni büyütür; daralan alan bir sonraki dönüşünü belirler.",
    description:
      "Klasik yılan oyununu klavye, dokunmatik yön tuşları ve kaydırma hareketleriyle yeniden kuran web sürümü. Elmalarla uzarken duvarlara ve kendi gövdene çarpmadan ritmini koru.",
    href: "https://snake-game-seven-gray.vercel.app/",
    preview: "/project-previews/snake-gameplay.png",
    videoPreview: "/project-videos/snake.webm",
    tone: "green",
  },
  {
    id: "burger-dog",
    category: "game",
    title: "Burger Dog",
    hook: "Burger hızlanıyor, köpek acıkıyor; kaçırdığın her lokma bir can götürüyor.",
    description:
      "Düşen burgerleri yere değmeden yakalamaya dayanan refleks oyunu. Her başarılı yakalayış skoru ve düşüş hızını artırır; yenilenen hız desteğini doğru anda kullanmak daha uzun serilerin anahtarıdır.",
    href: "https://burger-dog.vercel.app/",
    preview: "/project-previews/burger-dog-gameplay.png",
    videoPreview: "/project-videos/burger-dog.webm",
    tone: "orange",
  },
  {
    id: "feed-the-dragon",
    category: "game",
    title: "Feed the Dragon",
    hook: "Her altın ejderhayı besler, oyunu hızlandırır ve bir sonraki hamleyi zorlaştırır.",
    description:
      "Ejderhayı yukarı ve aşağı yönlendirerek yaklaşan altınları yakaladığın tempolu bir arcade oyunu. Kaçırılan altınlar can eksiltir; artan hız, ritim ve konumlamayı giderek daha önemli hâle getirir.",
    href: "https://feed-the-dragon.vercel.app/",
    preview: "/project-previews/feed-the-dragon-gameplay.png",
    videoPreview: "/project-videos/feed-the-dragon.webm",
    previewPosition: "left center",
    tone: "green",
  },
  {
    id: "atkafasi",
    category: "content",
    title: "AtKafası Fanzin",
    hook: "Düşüncelerin birbirine çarptığı bağımsız bir fanzin alanı.",
    description:
      "Yazı, görsel ve ortak üretimi bir araya getiren bağımsız yayın denemesi. Dergiyi daha az komisyon kesildiği için öncelikle Shopier'den alabilir; dilersen Gumroad üzerinden de satın alıp yorum bırakabilirsin.",
    href: "https://www.shopier.com/atkafasifanzin",
    secondaryHref: "https://atkafasifanzin.gumroad.com/",
    preview: "/project-previews/atkafasi.png",
    videoPreview: "/project-videos/atkafasi.webm",
    tone: "orange",
  },
];
