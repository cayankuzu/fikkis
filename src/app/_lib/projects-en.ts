import type { Project, ProjectImage } from "../projects";

export type ProjectEnOverride = Partial<
  Omit<Project, "images"> & {
    images?: { caption: string }[];
  }
>;

export const projectsEn: Record<string, ProjectEnOverride> = {
  "cayan-kuzu-cv": {
    title: "Çayan Kuzu CV",
    hook: "Two-column bilingual live curriculum vitae system operating with identical fidelity on screen and print.",
    description:
      "Two-column A4 document layout fed from a single TypeScript source of truth. Web page, print layout, and clickable-link PDFs sync automatically; updated projects and new experiences immediately reflect across both web and downloadable PDFs.",
    platform: "Responsive web · Print/PDF",
    status: "Live · Actively maintained",
    role: "Information architecture · Content & copywriting · UI/UX · Frontend engineering",
    highlights: [
      "Dark sidebar & two-column A4 grid; responsive architecture smartly reconstructed into a single-column flow on mobile",
      "Automated Playwright-verified 2-page TR/EN PDF builds whenever content changes",
      "Up-to-date portfolio summary covering UniVerse, beaTTer, SoRita, and academic research",
    ],
    ctaLabel: "View CV",
    tags: ["Personal system"],
    images: [
      { caption: "Live web UI: dark sidebar, profile, and up-to-date experience architecture" },
      { caption: "2-page A4 print & PDF architecture: selected products and academic research" },
      { caption: "Responsive mobile experience: streamlined single-column flow" },
    ],
  },
  universe: {
    title: "UniVerse",
    hook: "A two-sided campus mobile platform connecting university students and student clubs around events and community feeds.",
    description:
      "Mobile community platform uniting university clubs, events, and student interactions into a single hub. Students discover campus events, buy tickets, join clubs, and share within their university feed. Prepared a comprehensive 28-page investor/product deck and launched on iOS and Android.",
    platform: "iOS · Android",
    status: "Live on iOS & Android",
    role: "Problem framing · User journeys · Figma UI/UX · Mobile engineering · App Store & Google Play release",
    highlights: [
      "Event discovery, ticket booking, and club membership flows",
      "Campus-specific social feed, club management tools, and push notification architecture",
      "28-page investor deck covering product architecture, TAM, and unit economics",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Campus", "Social"],
    images: [
      { caption: "Core flow: club events and ticket discovery" },
      { caption: "Social feed: campus community updates" },
      { caption: "Profile and saved event tickets" },
    ],
  },
  beatter: {
    title: "beaTTer",
    hook: "An unbeatable Rock-Paper-Scissors & MINDTWIN arena sensing finger tendon acceleration in mid-air (-140ms) with AI and robot arm integration.",
    description:
      "Real-time biomechanical computer vision platform predicting human hand moves in mid-air 140ms before full extension. Features dual-engine AI (MediaPipe CV + Markov behavioral engine), real-time live analyst dashboard, game theory mind-reading, and Arduino robotic arm physical actuation.",
    platform: "Web (Browser & Mobile Camera) + Hardware (Arduino Robot Arm)",
    status: "Live Web Build · v2.5",
    role: "Biomechanical modeling · Computer Vision & ML · UI/UX & WebRTC",
    highlights: [
      "Early tendon impulse extraction (-140ms) via real-time wrist and metacarpal velocity vectors",
      "MINDTWIN behavioral prediction engine with live confidence telemetry and probability breakdown",
      "Adaptive responsive game UI with audio feedback and Arduino robotic arm servo sync",
    ],
    ctaLabel: "Try live demo",
    tags: ["AI", "Computer Vision", "Game Theory"],
    images: [
      { caption: "beaTTer live 5-round AI arena and real-time analyst dashboard" },
    ],
  },
  sorita: {
    title: "SoRita",
    hook: "Social map application uniting location discovery, curated personal lists, and community notes on an interactive map.",
    description:
      "Location-based social discovery app designed to curate urban spots, save themed personal lists, and discover crowdsourced recommendations on a live interactive map.",
    platform: "iOS · Android",
    status: "Live on iOS & Android",
    role: "Product architecture · Geographic interaction design · UI/UX · Store launch",
    highlights: [
      "Interactive map exploration with custom geographic tagging and list sharing",
      "Curated venue detail sheets, search filtering, and user recommendation feed",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Map", "Social"],
    images: [
      { caption: "Map exploration: discovering curated city venues" },
      { caption: "Venue detail sheet and community reviews" },
      { caption: "Personal lists and saved spots" },
    ],
  },
  zlip: {
    title: "Zlip",
    hook: "Next-generation link-in-bio & mobile portal app for creators with personalized themes and interactive blocks.",
    description:
      "Mobile-first profile and link hub for digital creators. Allows users to craft custom microsites with interactive social blocks, media showcases, and customizable visual themes.",
    platform: "iOS · Android",
    status: "Live on iOS & Android",
    role: "Product concept · Mobile UI/UX · Frontend development · Store release",
    highlights: [
      "Drag-and-drop link curation and modular card blocks",
      "Dynamic themes, analytics previews, and instant mobile profile publishing",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Creator tools", "Mobile"],
    images: [
      { caption: "Creator profile builder with custom themes" },
      { caption: "Interactive link blocks and media embeds" },
      { caption: "Mobile preview and click analytics" },
    ],
  },
  wmatch: {
    title: "WMatch",
    hook: "Double-blind movie and TV matching platform helping couples and friends decide what to watch together without spoilers.",
    description:
      "Interactive swiping and recommendation app that eliminates decision fatigue when choosing movies or series with friends or partners. Once both users swipe right on the same title, an instant match is revealed.",
    platform: "iOS · Android",
    status: "Live on iOS & Android",
    role: "Product & interaction design · Mobile engineering · Store publishing",
    highlights: [
      "Real-time double-blind card swipe gesture matching",
      "Rich TMDB movie catalog with genre filtering, streaming provider badges, and match history",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Entertainment", "Social"],
    images: [
      { caption: "Double-blind card swipe interface" },
      { caption: "Instant match celebration and streaming provider info" },
      { caption: "Shared watchlists and genre filters" },
      { caption: "Group room setup and friend invitations" },
    ],
  },
  trai: {
    title: "trAI",
    hook: "See any fashion item on your own photo in multiple sizes before buying.",
    description:
      "Mobile-first virtual try-on MVP leveraging generative AI to render selected catalog garments realistically onto user front/back photos. Provides size recommendation decision support and outfit collection saving.",
    platform: "Mobile-first responsive web",
    status: "Controlled MVP · Live demo",
    role: "Product framing & UI/UX · Fullstack development · AI integration",
    highlights: [
      "AI garment rendering on user's front and back photos",
      "Size recommendation decision support and named outfit collections",
    ],
    ctaLabel: "Try demo",
    tags: ["AI", "Fashion"],
    images: [
      { caption: "Opening screen: try garments on your own photo" },
    ],
  },
  etkinlink: {
    title: "EtkinLink",
    hook: "Discover events; meet like-minded people attending the exact same experience.",
    description:
      "Social event discovery app combining curated real-world event ticketing with dedicated attendee-only chat rooms and contextual peer matching.",
    platform: "iOS · Android",
    status: "In development · Pre-store",
    role: "Product & UI/UX design · Mobile & backend engineering",
    highlights: [
      "Location and category-based event discovery and bookmarking",
      "Event-specific chat rooms unlocking exclusively for confirmed attendees",
    ],
    ctaLabel: "Open Figma prototype",
    tags: ["Events", "Social"],
    images: [
      { caption: "Event discovery feed with smart category filters" },
      { caption: "Attendee matchmaking and exclusive event chat room" },
    ],
  },
  mrap: {
    title: "MRAP",
    hook: "Walk real-world city streets; claim closed polygon loops on the live map.",
    description:
      "Real-world location-based social game combining GPS route tracking, closed-loop land claiming, and territory conquest. Features a live browser demo with virtual GPS joystick, exploration feed, and leaderboard.",
    platform: "Responsive web · Location-based social game",
    status: "MVP · Live demo",
    role: "Product & game design · Geospatial UI/UX · Technical development",
    highlights: [
      "Real-time GPS boundary detection and polygon land enclosure algorithms",
      "Leaderboard, territory ownership heatmaps, and virtual joystick demo mode",
    ],
    ctaLabel: "Try demo",
    tags: ["Map", "Game"],
    images: [
      { caption: "Interactive map with closed territory loops and virtual joystick" },
    ],
  },
  bibish: {
    title: "Bibish",
    hook: "Join one of two rival factions, capture castles, paint territories, and command open-field warfare.",
    description:
      "Multiplayer 3D territory conquest game built with Three.js and real-time WebSockets. Players capture fortified outposts, expand their faction's colored zone, and coordinate open-field battles.",
    platform: "Web · Desktop",
    status: "Playable demo · Live",
    role: "Independent game design · 3D WebGL client · Real-time backend",
    highlights: [
      "Smooth 3D WebGL graphics and low-latency multiplayer state synchronization",
      "Territory capture mechanics and dynamic faction scoreboards",
    ],
    ctaLabel: "Play game",
    tags: ["3D", "Multiplayer", "WebGL"],
    images: [
      { caption: "3D multiplayer castle conquest battle scene" },
    ],
  },
  merbut: {
    title: "Merbut",
    hook: "Two heroes, ten realms, and a singular destiny leading to Aku.",
    description:
      "Co-op hack-and-slash action game featuring dual-character tag-team mechanics, branching skill progression, and multi-phase epic boss encounters.",
    platform: "Web · Windows · Local co-op",
    status: "Playable demo · Published on itch.io",
    role: "Independent game design · Combat, progression & boss fight mechanics",
    highlights: [
      "Fluid combo combat system with responsive hitboxes and stamina management",
      "Multi-phase boss fights and atmospheric level aesthetics",
    ],
    ctaLabel: "Play on itch.io",
    tags: ["Action", "Co-op", "Indie game"],
    images: [
      { caption: "Boss fight arena and real-time combat mechanics" },
    ],
  },
  stresst: {
    title: "sTressT",
    hook: "Physics-based stress relief sandbox with ragdoll dynamics and kinetic interactive toys.",
    description:
      "Interactive physics sandbox playground designed for tactile relief. Features rigid-body simulations, destructible props, and responsive sound design.",
    platform: "Web · Desktop",
    status: "Playable demo · Live",
    role: "Game physics · Sound design · Interaction mechanics",
    highlights: [
      "Custom rigid-body physics simulations with real-time collision dynamics",
      "Satisfying tactile feedback and responsive audio design",
    ],
    ctaLabel: "Play in browser",
    tags: ["Physics", "Sandbox", "Web"],
    images: [
      { caption: "Physics playground with interactive destructible props" },
    ],
  },
  strolly: {
    title: "STROLLY",
    hook: "Atmospheric narrative walking simulator exploring memory, solitude, and urban quietude.",
    description:
      "Narrative 3D exploration experience where environmental storytelling and ambient spatial audio guide the player through nocturnal cityscapes and abstract memories.",
    platform: "Web · Desktop",
    status: "Playable demo · Live",
    role: "Level design · Environmental storytelling · 3D world building",
    highlights: [
      "Atmospheric post-processing effects and spatial ambient soundscape",
      "Non-linear environmental narrative clues and contemplative pacing",
    ],
    ctaLabel: "Experience in browser",
    tags: ["Narrative", "3D", "Atmospheric"],
    images: [
      { caption: "Atmospheric nocturnal urban exploration view" },
    ],
  },
  "dream-of-the-photo": {
    title: "The Dream of the Photo",
    hook: "Surreal photographic mystery puzzle navigating memory fragments inside frozen snapshots.",
    description:
      "Experimental puzzle adventure where players step into photographic memories, shifting perspective to uncover hidden anomalies and reconstruct forgotten events.",
    platform: "Web · Desktop",
    status: "Playable demo · Live",
    role: "Game design · Narrative puzzle mechanics · Art direction",
    highlights: [
      "Perspective-shifting visual puzzles and photographic freeze-frame mechanics",
      "Minimalist UI designed to maximize immersive focus",
    ],
    ctaLabel: "Play game",
    tags: ["Puzzle", "Experimental", "Surreal"],
    images: [
      { caption: "Frozen snapshot puzzle room with perspective clues" },
    ],
  },
  remember: {
    title: "Remember You Must Die",
    hook: "Philosophical existential interactive narrative reflecting on time, choice, and memento mori.",
    description:
      "Interactive digital narrative weaving classical philosophy and existential dialogue into a branching interactive experience.",
    platform: "Responsive web",
    status: "Interactive experience · Live",
    role: "Concept · Writing & dialogue design · Web development",
    highlights: [
      "Branching dialogue tree with philosophical consequences",
      "Atmospheric typography and cinematic audio pacing",
    ],
    ctaLabel: "Open experience",
    tags: ["Narrative", "Philosophy", "Web"],
    images: [
      { caption: "Existential dialogue interface with interactive choices" },
    ],
  },
  desain: {
    title: "desAIn",
    hook: "AI-assisted generative layout and interface design ideation tool for creative makers.",
    description:
      "Experimental web app exploring how generative models can assist designers in brainstorming layouts, color palettes, and typographic hierarchies in real time.",
    platform: "Responsive web",
    status: "Concept MVP · Live",
    role: "Product concept · AI prompt engineering · Frontend architecture",
    highlights: [
      "Interactive canvas with generative component variations",
      "Real-time CSS token generation and export tools",
    ],
    ctaLabel: "Explore tool",
    tags: ["AI", "Design tool", "Web"],
    images: [
      { caption: "Generative UI layout playground and token editor" },
    ],
  },
  audioroom: {
    title: "AudioRoom",
    hook: "Spatial 3D audio-visual library transforming music albums into explorable spatial realms.",
    description:
      "Interactive 3D WebGL soundstage where each album is represented as a physical, walkthrough architectural acoustic room with reactive sound visualization.",
    platform: "Web · 3D WebGL & Web Audio",
    status: "Live Demo",
    role: "Concept · Spatial audio design · 3D scene architecture",
    highlights: [
      "Positional 3D Web Audio spatialization and frequency-reactive shader effects",
      "Walkable virtual exhibition rooms for albums and experimental soundscapes",
    ],
    ctaLabel: "Open 3D demo",
    tags: ["3D", "Audio", "WebGL"],
    images: [
      { caption: "Walkable 3D acoustic room with spatial sound visualization" },
    ],
  },
  atkafasi: {
    title: "AtKafası Fanzin",
    hook: "Independent culture and thought zine with two published issues, typography, and original stickers.",
    description:
      "Self-published print and digital culture zine covering art, social commentary, and indie philosophy. Completely handcrafted from editorial writing and visual identity to layout design and a bespoke 18-piece sticker set.",
    platform: "Print publication · Digital PDF · Sticker pack",
    status: "Issues 1 & 2 published",
    role: "Writing · Editorial & visual identity · Page layout · Publishing",
    highlights: [
      "Handcrafted editorial layouts and custom typographic hierarchies",
      "18-piece die-cut sticker series and independent distribution via Shopier & Gumroad",
    ],
    ctaLabel: "Get on Shopier",
    tags: ["Editorial", "Zine", "Print"],
    images: [
      { caption: "AtKafası Zine: printed cover and interior spread" },
    ],
  },
  "atkafasi-stickers": {
    title: "AtKafası Sticker Series",
    hook: "18-piece original illustrative sticker collection accompanying the zine.",
    description:
      "Illustrated vector sticker series reflecting the irreverent tone, philosophical references, and visual aesthetic of AtKafası Zine.",
    platform: "Die-cut print stickers",
    status: "Available on Shopier & Gumroad",
    role: "Illustration · Vector graphic design · Print prep",
    highlights: [
      "18 bespoke vector illustrations with philosophical and satirical motifs",
      "Print-ready vector assets and physical merchandise packaging",
    ],
    ctaLabel: "View on Shopier",
    tags: ["Illustration", "Merchandise"],
    images: [
      { caption: "Complete 18-piece sticker collection overview" },
    ],
  },
  "quantum-entanglement": {
    title: "Quantum Entanglement",
    hook: "Comprehensive academic research paper on Einstein-Podolsky-Rosen paradox, Bell inequalities, and quantum cryptography.",
    description:
      "In-depth academic term monograph exploring the foundational physics and mathematical formalism of quantum entanglement, including Bell test violations and modern quantum key distribution (QKD) protocols.",
    platform: "Academic paper · PDF",
    status: "Completed study · Available as PDF",
    role: "Literature review · Mathematical modeling · Academic authoring",
    highlights: [
      "Rigorous mathematical derivations of Bell inequalities and CHSH game",
      "Analysis of experimental verification tests (Aspect et al.) and QKD applications",
    ],
    ctaLabel: "Read paper",
    tags: ["Physics", "Quantum", "Paper"],
    images: [
      { caption: "Quantum entanglement academic monograph cover and equations" },
    ],
  },
  "general-relativity": {
    title: "General Relativity & Gravitational Waves",
    hook: "Academic slide deck and research review on spacetime curvature, geodesic motion, and LIGO gravitational wave detection.",
    description:
      "Slide presentation and technical monograph summarizing Einstein's field equations, Schwarzschild metric, spacetime curvature, and the interferometric detection principles of LIGO.",
    platform: "Academic presentation · PPTX",
    status: "Completed research · Downloadable presentation",
    role: "Research synthesis · Scientific visualization · Presentation design",
    highlights: [
      "Visual explanations of spacetime metrics and tensor formulations",
      "Analysis of gravitational wave waveforms from binary black hole mergers",
    ],
    ctaLabel: "Download presentation",
    tags: ["Physics", "Relativity", "Astrophysics"],
    images: [
      { caption: "Spacetime curvature and gravitational waves presentation slide" },
    ],
  },
  "dyson-ring": {
    title: "Dyson Ring Megastructure Study",
    hook: "TÜBİTAK 2209-A research proposal evaluating orbital mechanics, material stress, and solar energy capture of Dyson Rings.",
    description:
      "Formal scientific research proposal prepared for the TÜBİTAK 2209-A University Research Projects Program, examining orbital dynamics, structural limits of nanomaterials, and astronomical energy transmission.",
    platform: "TÜBİTAK Research Proposal · DOCX",
    status: "Submitted proposal · Downloadable document",
    role: "Research proposal · Orbital simulation · Technical paper",
    highlights: [
      "Orbital stability analysis and solar radiation pressure modeling",
      "Material tensile requirements and energy harvesting feasibility calculations",
    ],
    ctaLabel: "Read proposal",
    tags: ["Physics", "Astrophysics", "TÜBİTAK"],
    images: [
      { caption: "Dyson Ring proposal abstract and structural schema" },
    ],
  },
  "jump-analysis": {
    title: "Vertical Jump Height Prediction",
    hook: "Machine learning comparative analysis predicting jump heights from biomechanical force plate parameters.",
    description:
      "Comparative data science and machine learning research evaluating Gradient Boosting, Random Forest, and KNN regression models on biomechanical impulse and force metrics to predict athletic jump height.",
    platform: "Data science research · Canva presentation",
    status: "Completed study · Canva presentation",
    role: "Data preprocessing · Model training · Comparative evaluation · Presentation",
    highlights: [
      "Feature engineering on ground reaction force time-series curves",
      "Comparative regression benchmarks: RMSE, MAE, and R-squared evaluation",
    ],
    ctaLabel: "View on Canva",
    tags: ["Machine Learning", "Biomechanics", "Data"],
    images: [
      { caption: "Biomechanical force plate curve and model evaluation matrix" },
    ],
  },
  "damped-oscillator": {
    title: "Damped Harmonic Oscillator Simulation",
    hook: "Numerical Python solution and scientific poster analyzing underdamped, critically damped, and overdamped oscillators.",
    description:
      "Scientific simulation and academic poster solving second-order differential equations of damped harmonic motion using Euler's method and Runge-Kutta in Python/Colab, with phase space and energy dissipation plots.",
    platform: "Python Colab notebook · Scientific poster (PDF)",
    status: "Completed study · Colab & PDF available",
    role: "Numerical modeling · Python simulation · Scientific poster design",
    highlights: [
      "Euler and RK4 numerical solutions for damping regimes",
      "Phase space trajectories and mechanical energy dissipation analysis",
    ],
    ctaLabel: "Read scientific poster",
    tags: ["Physics", "Simulation", "Python"],
    images: [
      { caption: "Scientific poster layout and numerical damping trajectories" },
    ],
  },
  "kepce-operatoru": {
    title: "Hydraulic Excavator Physical Model",
    hook: "Working scale hydraulic excavator model built with pneumatic/hydraulic syringes and articulated linkage arms.",
    description:
      "Physical engineering project demonstrating Pascal's principle and mechanical advantage using fluid-filled syringes and calibrated wooden mechanical linkages.",
    platform: "Physical prototype · Video demonstration",
    status: "Built prototype · Video available",
    role: "Mechanical design · Prototyping · Fluid physics application",
    highlights: [
      "Pascal's principle hydraulic transmission with 3 degrees of articulated motion",
      "Demonstration video documenting arm reach and load lifting kinematics",
    ],
    ctaLabel: "Watch demo video",
    tags: ["Engineering", "Physics", "Hardware"],
    images: [
      { caption: "Working physical hydraulic excavator model with syringe controls" },
    ],
  },
  "uniforumhub-flyer": {
    title: "UniForumHub Marketing Flyer",
    hook: "Editorial tri-fold marketing flyer and visual branding designed for campus student community app.",
    description:
      "Three-page marketing flyer designed for print distribution across university campuses, showcasing feature highlights, community guidelines, and mobile download QR codes.",
    platform: "Print flyer · Digital graphics",
    status: "Completed design",
    role: "Graphic design · Print layout · Copywriting",
    highlights: [
      "High-impact typographic layout optimized for student campus bulletin boards",
      "Visual app screenshots with concise feature benefit callouts",
    ],
    ctaLabel: "View flyer",
    tags: ["Graphic design", "Print"],
    images: [
      { caption: "Tri-fold marketing flyer design for university distribution" },
    ],
  },
  "sorita-promo": {
    title: "SoRita Promo Video",
    hook: "Dynamic motion teaser and social promo video showcasing the app's interactive map and discovery features.",
    description:
      "High-tempo motion design teaser produced to drive pre-orders and store launches for the SoRita social map application.",
    platform: "Social video · Motion graphics",
    status: "Published promo",
    role: "Motion design · Video editing · Sound sync",
    highlights: [
      "Fast-paced device frame animations highlighting map pins and list creation",
      "Rhythm-synced typography and mobile UI screen recordings",
    ],
    ctaLabel: "Watch video",
    tags: ["Motion design", "Video"],
    images: [
      { caption: "Motion design teaser frame for social media launch" },
    ],
  },
  "universe-poster": {
    title: "UniVerse Investor Deck",
    hook: "28-page comprehensive seed investor pitch deck covering market sizing, user personas, and product roadmap.",
    description:
      "Investor pitch presentation detailing the campus problem space, dual-sided marketplace dynamics, competitive analysis, traction metrics, and monetization models for UniVerse.",
    platform: "Pitch presentation · PDF",
    status: "Completed deck",
    role: "Product strategy · Financial modeling · Slide design · Copywriting",
    highlights: [
      "TAM/SAM/SOM market sizing and student acquisition funnel breakdown",
      "Complete product screenshots, UI flowcharts, and revenue projections",
    ],
    ctaLabel: "View deck",
    tags: ["Product deck", "Strategy"],
    images: [
      { caption: "Investor deck cover and problem space breakdown" },
    ],
  },
  "audio-room-poster": {
    title: "AudioRoom 3D Promo Poster",
    hook: "Visual branding and 3D architectural soundstage concept artwork for the AudioRoom experience.",
    description:
      "Key art and promotional poster conceptualizing the intersection of 3D spatial geometry and audio frequency visualization.",
    platform: "Digital key art",
    status: "Completed artwork",
    role: "3D rendering · Graphic design · Art direction",
    highlights: [
      "Acoustic room perspective renders with neon visualizer accents",
      "Bold typography and minimalist exhibition layout aesthetic",
    ],
    ctaLabel: "View artwork",
    tags: ["3D Art", "Poster"],
    images: [
      { caption: "Key promotional artwork for AudioRoom 3D soundstage" },
    ],
  },
  "card-race": {
    title: "Card Race Game",
    hook: "High-speed card and reflex racing game testing quick tactical decisions.",
    description:
      "Fast-paced browser card game challenging players to match suits and card values under intense time pressure to outpace opponents.",
    platform: "Web browser",
    status: "Playable game",
    role: "Game design · Frontend engineering",
    highlights: ["Speed-matching card mechanics", "Responsive browser controls"],
    ctaLabel: "Play game",
    tags: ["Cards", "Casual"],
  },
  battleship: {
    title: "Battleship",
    hook: "Classic naval warfare strategy game reimagined with clean grid UI and computer AI opponent.",
    description:
      "Digital grid strategy game where players place their naval fleet on a tactical matrix and attempt to sink the enemy fleet through coordinate prediction.",
    platform: "Web browser",
    status: "Playable game",
    role: "Game logic · Grid UI design · AI turns",
    highlights: ["Adaptive computer targeting logic", "Clean audio and hit feedback"],
    ctaLabel: "Play game",
    tags: ["Strategy", "Grid"],
  },
  "old-maid": {
    title: "Old Maid (Papaz Kaçtı)",
    hook: "Classic suspenseful card game against virtual opponents where nobody wants the final Joker.",
    description:
      "Card game simulation pitting the player against smart AI players in a game of passing hidden cards while matching pairs and discarding the unwanted Joker.",
    platform: "Web browser",
    status: "Playable game",
    role: "Card logic · UI/UX · AI behavior",
    highlights: ["Animated card passing interactions", "Multi-opponent turn handling"],
    ctaLabel: "Play game",
    tags: ["Cards", "Classic"],
  },
  tictactoe: {
    title: "Tic Tac Toe",
    hook: "Polished minimal Tic-Tac-Toe with unbeatable Minimax AI option and two-player local mode.",
    description:
      "Minimalist, zero-latency Tic-Tac-Toe built with smooth SVG animations, two-player hotseat mode, and an unbeatable recursive Minimax algorithm.",
    platform: "Web browser",
    status: "Playable game",
    role: "Game logic · Minimax AI · Minimalist UI",
    highlights: ["Minimax optimal decision tree AI", "Smooth tactile click feedback"],
    ctaLabel: "Play game",
    tags: ["Classic", "AI"],
  },
  "son-40-saniye": {
    title: "Son 40 Saniye",
    hook: "High-adrenaline 40-second reflex challenge where every micro-decision counts.",
    description:
      "Tense micro-puzzle arcade game giving players exactly 40 seconds to solve cascading obstacles and reach peak score.",
    platform: "Web browser",
    status: "Playable game",
    role: "Arcade mechanics · Timer systems · Sound design",
    highlights: ["Fast-decay countdown loop", "Dynamic score multiplier chains"],
    ctaLabel: "Play game",
    tags: ["Arcade", "Action"],
  },
  asmaca: {
    title: "Asmaca (Hangman)",
    hook: "Modern responsive word-guessing game with curated vocabulary categories.",
    description:
      "Stylized hangman word game featuring letter-by-letter clues, category selections, and progressive SVG illustration stages.",
    platform: "Web browser",
    status: "Playable game",
    role: "Word database · Progressive graphics · Keyboard input",
    highlights: ["Physical and virtual keyboard support", "Multiple dictionary difficulty levels"],
    ctaLabel: "Play game",
    tags: ["Word game", "Puzzle"],
  },
  "monster-wrangler": {
    title: "Monster Wrangler",
    hook: "Fast-action creature capturing game requiring agile steering and precision timing.",
    description:
      "Top-down 2D action arena game where players corral increasingly fast mythical creatures into target pens while dodging hazards.",
    platform: "Web browser",
    status: "Playable game",
    role: "2D collision mechanics · Character controls · Level design",
    highlights: ["Kinetic movement physics", "Multi-stage creature speed progression"],
    ctaLabel: "Play game",
    tags: ["Arcade", "2D Action"],
  },
  "catch-the-clown": {
    title: "Catch the Clown",
    hook: "Reflex arcade game challenging hand-eye coordination against an unpredictable bouncing clown.",
    description:
      "Classic carnival arcade recreation testing player mouse tracking reflexes against erratic bounce trajectories.",
    platform: "Web browser",
    status: "Playable game",
    role: "Arcade design · Velocity physics · Score systems",
    highlights: ["Increasing velocity curve", "Sound effect timing feedback"],
    ctaLabel: "Play game",
    tags: ["Arcade", "Reflex"],
  },
  snake: {
    title: "Snake",
    hook: "Crisp modern revival of the legendary retro snake arcade game.",
    description:
      "Clean, responsive interpretation of the iconic retro Snake game with smooth grid movement, fruit multipliers, and personal high scores.",
    platform: "Web browser",
    status: "Playable game",
    role: "Grid array logic · Keyboard response · Retro aesthetics",
    highlights: ["Zero input lag keyboard handling", "Local high score persistence"],
    ctaLabel: "Play game",
    tags: ["Retro", "Arcade"],
  },
  "burger-dog": {
    title: "Burger Dog",
    hook: "Playful arcade platformer helping a hungry pup collect falling burgers while dodging spikes.",
    description:
      "Charming retro 2D arcade game with platform jumping, gravity mechanics, and escalating hamburger drops.",
    platform: "Web browser",
    status: "Playable game",
    role: "Platformer physics · Sprite animation · Game balance",
    highlights: ["Satisfying jump and catch arcs", "Progressive difficulty pacing"],
    ctaLabel: "Play game",
    tags: ["2D", "Casual"],
  },
  "feed-the-dragon": {
    title: "Feed the Dragon",
    hook: "Action arcade defense game feeding coins to a soaring mythical dragon.",
    description:
      "Side-scrolling arcade challenge maneuvering coins past fireballs into the jaws of a swooping dragon.",
    platform: "Web browser",
    status: "Playable game",
    role: "Flight trajectory physics · Collision detection · Sound effects",
    highlights: ["Velocity-based projectile aiming", "Retro audio effects"],
    ctaLabel: "Play game",
    tags: ["Arcade", "Action"],
  },
};

/**
 * Returns the localized project object based on the requested locale.
 */
export function getLocalizedProject(project: Project, locale: "tr" | "en"): Project {
  if (locale === "tr") return project;
  const en = projectsEn[project.id];
  if (!en) return project;

  return {
    ...project,
    ...en,
    images: project.images.map((img, idx) => ({
      ...img,
      caption: en.images?.[idx]?.caption ?? img.caption,
    })),
  };
}

/**
 * Returns all projects localized to the given locale.
 */
export function getLocalizedProjects(projects: Project[], locale: "tr" | "en"): Project[] {
  if (locale === "tr") return projects;
  return projects.map((p) => getLocalizedProject(p, locale));
}
