import type { Project } from "../projects";

export type ProjectEnOverride = Partial<
  Omit<Project, "images"> & {
    images?: { caption: string }[];
  }
>;

export const projectsEn: Record<string, ProjectEnOverride> = {
  simulab: {
    title: "SimuLab",
    hook: "A 3D oscillation and chaos laboratory with verified numerical solvers, in which every result is measured and compared with theory.",
    description:
      "Solves a damped, driven spring–mass oscillator and chaotic pendulum chains of one to six links in the browser with fixed-step Runge–Kutta (RK4 at 1 kHz by default) and the adaptive Dormand–Prince method. An energy ledger shows the numerical error live; virtual instruments put the period, amplitude, damping, resonance curve, spectrum, Lyapunov exponent and Poincaré section next to the theory. Fourteen verification experiments (67 criteria) can be rerun in the browser, and theory, methods and verification come with the app as a bilingual technical report with 147 references.",
    platform: "Web (Next.js 15, React 19, Three.js & KaTeX)",
    status: "Live web version · v2.1",
    role: "Computational physics · Numerical methods · Verification · Product & UI/UX design",
    highlights: [
      "Five integrators (explicit Euler to Dormand–Prince 5(4)) and fixed steps from 60 to 2000 Hz; the energy-ledger residual measures the numerical error live",
      "Pendulum of 1–6 links: twin trajectory, Lyapunov exponent by Benettin's method, Poincaré section and normal modes",
      "Driven oscillator: comparison with the closed-form solution, frequency response, amplitude spectrum and stops with Newtonian restitution",
      "14 verification experiments, 67 criteria and 154 automated tests; 9 task sheets in a predict–observe–explain format",
      "Interface aimed at WCAG 2.2 AA: camera and mass selection from the keyboard, MathML formulas, Turkish and English",
    ],
    ctaLabel: "Open the laboratory",
    tags: ["Computational Physics", "Chaos Theory", "Numerical Analysis", "Verification"],
    images: [
      {
        caption:
          "Chaotic double pendulum: twin separation, Lyapunov estimate, Poincaré section and normal modes",
      },
      {
        caption:
          "Driven oscillator at resonance: theoretical and measured frequency response, amplitude spectrum and parameter panel",
      },
    ],
  },
  "life-of-a-photon": {
    title: "Life of a Photon",
    hook: "A first-person special-relativity simulation that shows in real time what a traveller sees while speeding up to 99.999% of the speed of light: the street crowding forward, Doppler colours and heat light becoming visible.",
    description:
      "Answers, as far as physics allows, the question Einstein asked at sixteen: 'What would I see if I chased a beam of light?' The view of an observer accelerating along a night-time avenue from rest to 0.99999 c is computed pixel by pixel with the exact law of relativistic aberration, the Doppler shift, the Lorentz transformation of radiance, the CIE 1931 colour-matching functions and Planck's law. Besides the 'seen' and 'measured' views there is a thesis-level bilingual scientific dossier and a live panel that explains everything on the screen in words a child understands: it marks on the picture what it talks about, and a guided tour of nine stops leads through the whole range of speeds.",
    platform: "Web (Next.js, React Three Fiber, WebGL 2)",
    status: "Live web version · v1.0",
    role: "Relativity and colour-science modelling · GLSL shaders · UI/UX design",
    highlights: [
      "Exact relativistic aberration: at 0.99999 c the whole forward hemisphere fits into a cone of 0.26°",
      "Every light source's spectrum is integrated with the CIE 1931 observer after its Doppler shift: the Doppler rainbow ring of the LEDs, a red traffic light turning green at 0.2 c",
      "The invisible heat light of the 15 °C street glows red ahead, then white, as the speed grows; above 0.995 c it outshines the surface of the Sun",
      "A thesis-level bilingual scientific dossier with 77 references",
      "The 'Why does it look like this?' panel: explains what is seen in primary-school words, explains every object and instrument on the screen, marks on the picture what it talks about; a guided tour and two small drawings",
    ],
    ctaLabel: "Launch the simulation",
    tags: ["Special relativity", "Optics", "WebGL", "Three.js"],
    images: [
      {
        caption:
          "Stop 5 of the guided tour, 0.99 c: the whole forward hemisphere fits into a cone of 8.1°; the Doppler rainbow ring marked, the thermal glow of the surroundings in the middle",
      },
      {
        caption:
          "Stop 2 of the tour, 0.2 c: heading into its waves, the red traffic light looks green; the mark shows the light itself",
      },
      {
        caption:
          "'What is on the screen?': every object and instrument explained in plain words; the selected Moon is marked on the picture",
      },
      {
        caption:
          "Scientific dossier: Lorentz boost, proper time and rapidity; numbered equations, figures and a referenced bilingual text",
      },
    ],
  },
  "event-horizon": {
    title: "Event Horizon",
    hook: "A real-time general-relativity black hole simulator visualizing Kerr spacetime curvature, Stephen Hawking's horizon physics, and live non-linear spaghettification of a 3D NASA Space Shuttle.",
    description:
      "Integrates 3D Schwarzschild/Kerr null geodesics per pixel in WebGL 2, featuring a volumetric GRMHD accretion disk with Beer–Lambert dark dust lanes, HDR optical bloom with AgX filmic tonemapping, relativistic Doppler beaming (I ∝ g⁴), Bardeen's asymmetric D-shaped shadow, Blandford–Znajek polar jets, and a 3D Flamm's Paraboloid curvature funnel. As you scroll inward, the official 3D NASA Space Shuttle Orbiter undergoes non-linear GPU Weyl spaghettification (1/r³ axial nose stretching, lateral wing crushing, Kerr frame-drag twist, gravitational redshift, and a 460-particle tidal debris stream). Compare Cygnus X-1, Sagittarius A*, M87*, and TON 618 across Hawking External Observer, Proper Time (τ) interior plunge, and Cockpit views, backed by 5 graphics presets and a 10-chapter plain-language + KaTeX scientific guide with 14 clickable peer-reviewed citations.",
    platform: "Web (React 19, Three.js, WebGL 2 / GLSL & KaTeX)",
    status: "Live web version · v1.0",
    role: "General relativity & astrophysics modelling · GLSL raytracer · 3D GPU deformation · UI/UX",
    highlights: [
      "Real-time 3D Schwarzschild/Kerr null geodesic raytracing: HDR volumetric GRMHD accretion disk, Beer–Lambert dust lanes, n=1/n=2 photon subring, AgX tonemapping, and Blandford–Znajek polar jets",
      "Non-linear GPU Weyl spaghettification on the 3D NASA Space Shuttle (onBeforeCompile), 460-particle tidal disruption debris stream, gravitational redshift, and time-dilated freezing navigation strobes",
      "4 peer-reviewed black holes (Cygnus X-1, Sagittarius A*, M87*, TON 618), 3 reference frames (Hawking Distant Observer, Proper Time τ plunge to r→0, Cockpit), 3D Flamm curvature grid, and 5 graphics quality presets",
      "Plain-language 'In Simple Words' analogies paired with KaTeX equations, clear separation of proven observations vs. open hypotheses, 14 clickable academic citations, bilingual TR/EN UI, and 12 analytical unit tests",
    ],
    ctaLabel: "Launch the simulation",
    tags: ["General Relativity", "Black Holes", "WebGL 2 / GLSL", "Astrophysics"],
    images: [
      {
        caption:
          "Cygnus X-1 (a* = 0.998): D-shaped Kerr shadow, blue-white approaching / crimson receding Doppler accretion disk, Blandford–Znajek polar jet, and 3D NASA Space Shuttle",
      },
      {
        caption:
          "Live non-linear GPU Weyl spaghettification: 1/r³ tidal gradient pulls the Shuttle nose into a glowing molten filament while crushing its delta wings inward and stripping superheated debris",
      },
      {
        caption:
          "3D Flamm's Paraboloid spacetime curvature funnel alongside the plain-language + KaTeX bilingual Science Guide with 14 clickable peer-reviewed references",
      },
    ],
  },
  "pulse-plus": {
    title: "PULSE+",
    hook: "An interactive acoustic physics digital twin and puzzle instrument that sculpts 45,000+ free ballistic sand grains into digits, words, and drawings on an uncut flat metal plate via Kirchhoff–Love wave interference.",
    description:
      "Solves the 4th-order Kirchhoff–Love free-edge thin elastic plate equation (ρh ∂²w/∂t² + D∇⁴w + c ∂w/∂t = F) across 266+ Euler–Bernoulli flexural modes on a 25×25 cm × 1.5 mm flat plate. With zero grooves, 7-segment bars, or reference lines, a 2-stage target-adaptive solver scans 16 natural modal bands to pick the optimal 8 (or 10) frequencies per shape and optimizes complex perimeter piezo amplitudes and phases via Minimax-Barrier Adam gradient descent — carving quiet nodal valleys (I ≈ 0) inside the glyph while enforcing I ≥ 0.48 outside to eliminate stray sand clumps. 45,000–85,000 3D ballistic sand grains respond strictly to local plate acceleration (Γ = a/g > 1) and intensity gradients (−∇I). Includes a non-blocking side-expanding Physics Lab with per-channel manual gain (0%–200%), real-time Kirchhoff–Love Hz retuning, and individual (↺) reset controls, an 8-level Lorentzian resonance cipher game, 35 contextual (?) help popovers, a 5-chapter kid-friendly + academic bilingual (TR/EN) guide with 8 clickable peer-reviewed papers, and real hardware Channel CSV export.",
    platform: "Web (ES Modules, Web Worker, Web Audio API & Canvas 2D)",
    status: "Live web version · v1.0",
    role: "Acoustic plate physics & inverse wave solver · 3D granular sand simulation · Web Audio · UI/UX",
    highlights: [
      "Free-edge Kirchhoff–Love plate solver validated against NASA SP-160 (Leissa, 1969: λ₁,₁ = 13.89 vs. reference 13.49) across 4 materials (Aluminum 6061-T6, Brass C260, Steel 304, Acrylic PMMA)",
      "2-stage target-adaptive frequency discovery + Minimax-Barrier Adam synthesis: ~89% avg IoU (14.3× contrast) on 8 Piezos, ~95% avg IoU (19.0× contrast) on 16 Piezos, ~98% avg IoU on 40 Piezos, plus 1-Speaker symmetry bound validation (~16% IoU)",
      "Non-blocking side-expanding Physics Lab: independent per-channel gain (0%–200%) and live Hz tuning that recomputes exact Kirchhoff–Love Green's wavefields in the Web Worker, with individual (↺) and global reset controls",
      "45,000–85,000 3D ballistic sand grains, real-time multi-channel Web Audio synthesizer, 8-level Lorentzian acoustic cipher game, 35 contextual (?) tooltips, bilingual (TR/EN) plain-language + academic guide with 8 peer-reviewed citations, and hardware Channel CSV/JSON export",
    ],
    ctaLabel: "Launch the simulation",
    tags: ["Acoustic Physics", "Kirchhoff–Love PDE", "Chladni Plate", "Web Audio"],
    images: [
      {
        caption:
          "Studio view: digit '3' formed in loose golden silica sand on an uncut flat metal plate via 16 perimeter piezos and 8 simultaneous frequencies (1940 Hz peak · Mode 2,6 · 93.1% IoU · 15.4× contrast)",
      },
      {
        caption:
          "Non-blocking side-expanding Physics Laboratory: per-channel manual frequency console (F1–F8) with independent gain (0%–200%), live Kirchhoff–Love Hz retuning, and individual (↺) channel reset",
      },
      {
        caption:
          "'How It Works' bilingual (TR/EN) guide: kid-friendly trampoline and noise-cancelling analogies, standing-wave SVG diagram, simple/full-science reading toggle, and 8 peer-reviewed papers",
      },
    ],
  },
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
      "Up-to-date portfolio summary covering SimuLab, Life of a Photon, UniVerse, beaTTer, Zlip, SoRita, and academic research",
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
      "End-to-end mobile platform addressing event ticketing for student clubs and campus discovery for university students. Designed and built from scratch—from Figma design system and Supabase backend architecture to Expo/React Native engineering and live App Store & Google Play publishing.",
    platform: "iOS · Android",
    status: "Live on iOS & Android",
    role: "Product & UI/UX design · Mobile & Supabase engineering",
    highlights: [
      "Dedicated student and club profiles, event discovery, and campus social follow architecture",
      "Photo/video event albums, community feed interactions, and real-time push notifications",
      "Approved, actively downloadable production builds live on both the App Store and Google Play",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Campus", "Social"],
    images: [
      { caption: "Main feed: university club events" },
      { caption: "Search: events and student clubs" },
      { caption: "Student profile and event albums" },
    ],
  },
  beatter: {
    title: "beaTTer",
    hook: "A Rock-Paper-Scissors opponent that seals its move with SHA-256 on a frame before your hand lands: it reads your fingers in mid-air and, under the tournament setting, cannot lose a valid round by rule.",
    description:
      "A Rock-Paper-Scissors opponent that tracks the hand on camera with MediaPipe, reads the moment the fingers start to open in mid-air, and seals its decision with SHA-256 on a frame before the hand lands. The referee never looks at the AI's move; under the tournament setting a valid round cannot be lost by rule (Theorem 1 of the thesis), while throws that open late or cannot be read count as fouls or void rounds and are replayed. After each round every seal is opened and verified. The camera-free demo plays with a synthetic hand; all numbers are simulations; apart from the first single-player camera sessions there is no data from real players. On camera only the hand is shown sharp, and the picture never leaves the device.",
    platform: "Web (browser · camera or camera-free demo)",
    status: "Live web version · v4.2.3",
    role: "Algorithms & game theory · Computer vision · Cryptographic commitment · UI/UX · Thesis",
    highlights: [
      "Decision before the landing: the move is sealed with SHA-256 on a frame before the hand lands; at the end of the round every seal is opened and verified",
      "No loss in a valid round under the tournament setting (by rule); zero losses in 17,404 valid rounds of a 15,000-session adversarial fuzz test (simulation)",
      "Against a synthetic player matched to the detector, 94.75% of attempts are won and 5% are fouls that are replayed; 0.46% of honest on-time throws are fouled (simulation)",
      "Privacy: the whole camera picture is blurred and only the tracked hand stays sharp; hand tracking runs on the GPU, 2.5 to 2.9 times faster than on the CPU",
      "126 automated tests; the v4.2 audit closed the guarantee gap found by the fuzz test and removed unfair fouls on honest paper; optional (off by default) cloud sync, step-by-step round report and a thesis in Turkish",
    ],
    ctaLabel: "Play in the arena",
    tags: ["AI", "Computer Vision", "Game Theory"],
    images: [
      {
        caption:
          "Camera-free demo (synthetic hand): the AI has sealed its move while the stroke is still in the air, ~365 ms before landing; live prediction and beat strip",
      },
      {
        caption:
          "Round report: decision 97 ms before landing, with 59% of the move formed; four SHA-256 seals opened and verified",
      },
      {
        caption:
          "Laboratory: score, decision-time distribution and prediction quality over 13 synthetic rounds, with Wilson intervals and a simulation label",
      },
    ],
  },
  "battle-ground": {
    title: "Battle Ground",
    hook: "Paint 117 real 3D units onto an arena, live-convert armies across 6 visual modes, and clash forces balanced from real-world physics data.",
    description:
      "A real-time 3D tactical battle simulator running in the browser. Default HP, damage, speed, armor, and knockback are derived from real physical mass (kg), speed (km/h), and kinetic or bite energy (J/N). Ultra Realistic, Stylized, Feudal Manga, Voxel 3D, and Architectural CAD each use dedicated 3D asset libraries and live-convert active units on mode switch, while Hybrid mode merges all universes into one arena. Includes 14 autonomous special powers (live 3D frog polymorph, divine smite, dragon fire breath, necromancy, etc.), 4 factions, 4 AI protocols, a live unit inspector, and 13 preset scenarios.",
    platform: "Web · Desktop (Three.js, WebGL 2, TypeScript)",
    status: "Live web version · v1.0",
    role: "Game design · 3D engine & shaders · Scientific balancing · UI/UX",
    highlights: [
      "117 playable units and structures (101 verified CC0 GLB models + 16 procedural 3D constructs), auto-ranked strongest to weakest with live 3D studio portraits",
      "6 visual & game modes (Hybrid All-in-One, Ultra Realistic PBR, Stylized, Seinen Manga ink/halftone, 100% Voxel 3D Bayer, Architectural CAD) with live arena model conversion",
      "14 stochastic special powers: 5.5s live 3D frog Polymorph, Divine Smite, Dragon Breath, EMP Overload, Seismic Leap, Stampede trample, and manual casting via inspector",
      "Scientifically grounded defaults (65-ton / 12 MJ M1A2 Tank, 8.8-ton / 57 kN T-Rex, 18 mythological gods & dragons), per-unit telemetry drawer, 5 biomes, 13 scenarios, and bilingual TR/EN UI",
    ],
    ctaLabel: "Play in the arena",
    tags: ["3D Simulation", "Three.js", "Tactical Sandbox", "WebGL"],
    images: [
      {
        caption:
          "Hybrid / All-Assets mode: Archangel Seraph, Voxel Zeus, Shogun, M1A2 Tank, T-Rex, and Dragons clashing in one 3D arena",
      },
      {
        caption:
          "Ultra Realistic mode & live unit inspector: manual special-power casting, polymorphed frogs, and the 18-unit mythological roster",
      },
      {
        caption:
          "Command panel, collapsible quick-start bar, and 117 units ranked strongest-to-weakest with live 3D studio portraits",
      },
    ],
  },
  sorita: {
    title: "SoRita",
    hook: "Turn the city from an ordinary map into a social discovery story you write together with your friends.",
    description:
      "Mobile product where users create venue cards on an interactive map with personal photos, videos, and experience notes, curating them into themed lists and sharing them in a social feed. Unites geographic exploration with social network dynamics in a single interface.",
    platform: "iOS · Android",
    status: "Live on iOS & Android",
    role: "Product & UI/UX design · Mobile & backend engineering",
    highlights: [
      "Venue cards with photos, videos, titles, and personal experience notes",
      "Public and private curated lists; follow, like, comment, block, and reporting flows",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Map", "Social"],
    images: [
      { caption: "Feed: shared venue lists on the interactive map" },
      { caption: "Explore: curated lists and places" },
      { caption: "User profile and saved lists" },
    ],
  },
  zlip: {
    title: "Zlip",
    hook: "Turn Galaxy Z Flip's cover screen into a live showcase, lock-screen saver and interactive mini hub.",
    description:
      "Android app turning foldable hardware limits into a creative UI/UX surface. Built with Jetpack WindowManager and Compose, it powers smart cards, background notification playback controls, screen mirroring and cover-screen interaction whether the phone is open or folded.",
    platform: "Android · Galaxy Z Flip",
    status: "Live · v1.2.7 APK · Google Play coming soon",
    role: "Product & UI/UX design · Android engineering",
    highlights: [
      "Continuous background cover playback: keeps the cover display active even when the app is closed or swiped away, with Spotify / YouTube Music style ongoing and dismissible notification controls",
      "Unified UI/UX for open and folded states: screen saver in front of the cover lock screen, date & clock overlay, LED matrix style, Pomodoro focus timer, stopwatch, spinner wheel, 3D dice, coin flip and counter",
      "Photo/GIF/video playlists, pan-and-zoom screen mirroring, built-in media player (mm:ss scrub bar), pixel art, marquee LED text, collage, countdowns, QR cards and one-tap lossless in-app OTA updates",
    ],
    tags: ["Android"],
    images: [
      { caption: "Home screen: active cover content and playback controls" },
      { caption: "Add to cover: gallery media, pixel drawing, marquee text, collage, groups and smart cards" },
      { caption: "Settings: cover display, folded behaviour and controls" },
    ],
  },
  wmatch: {
    title: "WMatch",
    hook: "Let what you watch decide who you match with.",
    description:
      "18+ mobile product turning movie and TV taste into social matching. Users explore titles in the TMDB catalog, build favorites and watch histories, inspect profiles with taste compatibility scores, match, and chat in real time.",
    platform: "iOS · Android",
    status: "Live on iOS · Android in preparation",
    role: "Product & UI/UX design · Mobile & backend engineering",
    highlights: [
      "Compatibility score computed from shared favorites and watch history; matching after mutual likes",
      "Real-time chat, online/typing indicators, read receipts, and push notifications",
    ],
    ctaLabel: "Open in App Store",
    tags: ["Entertainment", "Social"],
    images: [
      { caption: "Explore: currently watching and popular movies" },
      { caption: "Taste compatibility score screen" },
      { caption: "Real-time messages" },
      { caption: "Profile and viewing preferences" },
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
    tags: ["AI"],
    images: [
      { caption: "Opening screen: try garments on your own photo" },
    ],
  },
  etkinlink: {
    title: "EtkinLink",
    hook: "Discover an event; meet people who share the exact same excitement.",
    description:
      "Social event application combining real-world event discovery, filtering, and saving flows with event-specific chat rooms and peer matching exclusively among users attending the same event.",
    platform: "iOS · Android",
    status: "In development · Pre-store",
    role: "Product & UI/UX design · Mobile & backend engineering",
    highlights: [
      "City, search, and filter-driven event discovery powered by etkinlik.io data",
      "Dedicated event chat rooms, attendance-based matching, and post-match messaging",
    ],
    ctaLabel: "Open Figma prototype",
    tags: ["Events", "Social"],
    images: [
      { caption: "Explore: upcoming events" },
      { caption: "Dedicated event chat rooms" },
      { caption: "Matching with fellow event attendees" },
      { caption: "Post-match conversation" },
    ],
  },
  mrap: {
    title: "MRAP",
    hook: "Draw routes on city streets; the areas you enclose on the map become yours.",
    description:
      "Responsive web MVP combining real-world map route enclosure, unique territory ownership, and a social map feed. Includes a demo mode with virtual GPS movement to paint territories, explore community claims, and climb leaderboards.",
    platform: "Responsive web · Location-based social game",
    status: "MVP · Live demo",
    role: "Product & game design · Geospatial UX · Technical development",
    highlights: [
      "Territory enclosure via route segments, unique ownership scoring, and re-painting rules",
      "Playable virtual-location demo mode; discovery feed of claimed area cards and leaderboards",
    ],
    ctaLabel: "Try demo",
    tags: ["Map"],
    images: [
      { caption: "Explore feed: territory cards painted by the community" },
    ],
  },
  bibish: {
    title: "Bibish",
    hook: "Join one of two armies; capture outposts, paint the terrain, and shape open-field warfare.",
    description:
      "Online WebGL FPS where Red and Blue factions battle over 10 outposts on Bibish Island. Players engage with ranged and melee weapons while directly painting the terrain in their team's colors.",
    platform: "Web · Desktop",
    status: "Live",
    role: "Independent game design · 3D WebGL client · Real-time backend",
    highlights: [
      "10 capturable outposts and team-colored terrain painting in a single global room",
      "Combat and paint modes: capturing an outpost unlocks a new spawn point, and the match ends when the map is filled",
    ],
    ctaLabel: "Play game",
    tags: ["3D", "Multiplayer", "WebGL"],
    images: [
      { caption: "Outpost skirmish and live leaderboard" },
    ],
  },
  "trophe-as-cat": {
    title: "Trophe As Cat",
    hook: "A bald cat, a perfect porcelain city: nothing is off the table. On screen the name glitches: CAT AS TROPHE.",
    description:
      "A 3D chaos sandbox where you play Trophe, a Sphynx cat dropped onto the Owner's perfect Table. Everything man-made breaks, topples and collapses: buildings come down piece by piece and thousands of things scatter; the porcelain people film your chaos on their phones, call the police and chase you. Take any car off the road and its driver runs off shouting; chaos stars bring the police, the fire brigade and SWAT, while trees and animals stay cat-proof. The graphics tune themselves to the machine. A four-block browser demo is playable online, and the full Windows game is a download on itch.io.",
    platform: "Web · Windows · Single player",
    status: "Live demo · v0.9.2",
    role: "Independent game design · Destruction, physics & city systems",
    highlights: [
      "Buildings that collapse piece by piece, thousands of breakable things and cars whose drivers run for it",
      "Porcelain people who film your chaos and call the police; fourteen jobs, a catnip shop and 18 achievements",
    ],
    ctaLabel: "Play demo in browser",
    purchase: {
      href: "https://memode.itch.io/trophe-as-cat",
      label: "Download full version",
      store: "itch.io",
    },
    tags: ["Sandbox", "Destruction", "Indie game"],
    images: [
      { caption: "Trophe in a wizard hat and the perfect city" },
      { caption: "The end of the domino run: fuel drums and a truck" },
      { caption: "The Ferris wheel rolls through the car park" },
    ],
  },
  merbut: {
    title: "Merbut",
    hook: "Two heroes, ten realms, and a singular destiny leading to Aku.",
    description:
      "Local two-player 2.5D action game where Hazrat Ali and Samurai Jack are controlled on the same keyboard or with two gamepads. Ten realms each with its own mechanic, Aku's Shadow, and a three-phase Aku boss; original album-cover-style artwork and dynamic combat music. The full game is free on itch.io: play it in the browser, or download it for Windows and play offline. An unofficial, independent fan game.",
    platform: "Web · Windows · Local two-player",
    status: "Live · Free · v3.2.0",
    role: "Independent game design · Combat, progression & boss systems",
    highlights: [
      "Ten realms, ten mechanics; four difficulty tiers, 19 achievements, and save-state continuation",
      "Three-hit combo chains, Twin Strike, projectile deflection, and a time-portal finale",
    ],
    ctaLabel: "Play in browser",
    purchase: {
      href: "https://memode.itch.io/merbut",
      label: "Download for Windows",
      store: "itch.io",
    },
    tags: ["Action", "Co-op", "Indie game"],
    images: [
      { caption: "Main menu: hero and Aku's legion face to face" },
      { caption: "Each realm opens like an album track card" },
      { caption: "Combat in Aku Metropolis and Jack's shield" },
    ],
  },
  stresst: {
    title: "Haluk Has Had Enough",
    hook: "His stress bar is his name: when it fills, the A falls off, and everything breaks.",
    description:
      "A first-person office comedy: one week in about an hour. Every day the office takes something else from Haluk: his name, his dignity, his credit, his desk, his rank, his voice, his job. Dull work, Cenk's jokes and the meeting where the A falls; in the evening, at sTressT, the stress centre, you break things, then sort the pieces into the right bins. A week card and an incident report keep track of what is gone. In English and Turkish. The free demo (Monday and Tuesday, about 15 minutes) plays in the browser and on Windows via itch.io; the full week is in development.",
    platform: "Web · Windows · Keyboard and mouse",
    status: "In development · Free demo on itch.io",
    role: "Independent game design · Breaking and physics systems · Programming and production in Godot",
    highlights: [
      "Office by day, sTressT in the evening: break things with Jolt physics, then sort the pieces into the right bins",
      "Godot 4.7.2 and typed GDScript; a single-threaded web build under a 40 MB download budget, made to run smoothly on old hardware",
    ],
    ctaLabel: "Play the demo on itch.io",
    tags: ["Comedy", "First-person", "Physics"],
    images: [
      { caption: "The meeting: the bar is full and the A falls" },
      { caption: "The morning after, at the office: nobody mentions yesterday" },
      { caption: "Evening at sTressT: break what is on the shelf, bin the big pieces" },
      { caption: "The end of the demo: the week card and the incident report" },
    ],
  },
  strolly: {
    title: "STROLLY",
    hook: "Scroll and time flows, look around and meaning shifts: nine short stories you can turn 360° inside.",
    description:
      "Nine cinematic, scroll-driven interactive short stories: LIVING, BEYOND, ONE FOOT, RAGE EXPERIENCE SIMULATION, OBSESSION, PARALLEL-CORPSE, RECURRENCE, BRAIN-STEM, and STATE—all adapted from the author's original texts. Scrolling is time; drag to look 360° around the scene, where certain details exist only behind you. At times the reader questions a machine or makes a choice that alters subsequent lines, staging, and sound. Characters, screens, and all audio are generated procedurally in code; models, textures, and lighting are CC0 scans (Poly Haven). In Turkish and English.",
    platform: "Web · Desktop and mobile",
    status: "Live",
    role: "Independent narrative game · Writing & staging · 3D client & procedural audio",
    highlights: [
      "Nine stories, each bound line-by-line to a 3D stage; branching choices, journal, discoveries, and chapter saves",
      "Real CC0 scanned models and surfaces, procedurally generated characters and spatial audio; frame-verified sync",
      "Turkish and English; accessibility settings and a WebGL-free reading mode",
    ],
    ctaLabel: "Read the stories",
    tags: ["Narrative", "3D", "Interactive"],
    images: [
      { caption: "RECURRENCE: a room whose walls open into a forest; a real 360° photograph on the screen walls" },
      { caption: "BEYOND: a ship bound for the galactic centre, Earth shrinking behind it" },
      { caption: "PARALLEL-CORPSE: a swing set up on the edge of a cliff" },
      { caption: "STATE: asking the machine that knows the state of everything about a single electron" },
      { caption: "LIVING: a kid in an internet café whose time is about to run out" },
      { caption: "ONE FOOT: punishment by the bin corner; the whole class looking at Eren" },
      { caption: "OBSESSION: a shadow cast on the wall through a half-open door" },
      { caption: "Selection screen of the nine stories" },
    ],
  },
  "dream-of-the-photo": {
    title: "The Dream of the Photo",
    hook: "The dream of a photograph turns hair white; the dream of a photograph, every evening, half.",
    description:
      "One evening at half past six you leave the dinner table, go out into the street and photograph the house. The photograph is the narrator: while its image comes up in your hand it dreams the thirty-three years in which you never go back in; seven evenings, a minute for every year. Each evening is a run of short scenes, each built on a common fear, and it breaks off in the middle of the motto, a little later every time: you are back in the street, your hair a little whiter, the window of the house a little emptier. A 33-minute cinematic nightmare, narrated and subtitled in Turkish and English; it plays by itself, and scrolling hurries it.",
    platform: "Web · Desktop and mobile",
    status: "Live",
    role: "Independent short-film experience · Script, editing and staging · 3D client, sound and score",
    highlights: [
      "A story the photograph tells: more than 160 lines in three voices (the narrator, the mother in the house, the people of the dream), synthetic speech made locally in two languages with every take checked by speech recognition; subtitles follow the voice",
      "Cut like a short film: 39 scenes cut like shots, entered late and left early; every evening breaks off in the middle of the motto, and the lullaby gets a bar further each evening and is played whole only at the last table",
      "Real-time three.js: scenes compiled ahead and built under the cut to black; a warp that bends all of space, individually licence-checked 3D assets and a sound design of more than 600 real recordings, levelled room by room",
    ],
    ctaLabel: "Enter the nightmare",
    tags: ["Horror", "Experimental", "Surreal"],
    images: [
      { caption: "The title, and the motto that breaks off every evening" },
      { caption: "Coming home unseen: the first warm light of the film, before your place at the table is cleared" },
      { caption: "The barber: a headless man in the mirror cuts your hair white" },
      { caption: "The cellar: a hand with a ring sets your plate aside, every evening" },
      { caption: "The family portrait: years pass with every flash, your place stays empty" },
      { caption: "The plane: your kitchen window flies alongside the wing" },
      { caption: "The lift: the doors open on a wall holding a photo of the crowd you stand in" },
      { caption: "The dentist, from inside your own mouth" },
      { caption: "The flood: dinner below the waterline" },
      { caption: "Holes: a man whose face opens into holes" },
      { caption: "The oil sea, the half sun and a duck the size of a house" },
      { caption: "Thirty-three years later: the white-haired man still standing in the street" },
    ],
  },
  remember: {
    title: "Remember You Must Die",
    hook: "Dare to walk inside a world that reminds you of mortality.",
    description:
      "Experimental web experience transforming SUICIDE SILENCE's 'You Must Die' into a single interactive 3D memento mori stage. Explore the Ouroboros, skull, DNA helix, hourglass, and galaxy through music and dynamic lighting.",
    platform: "Web · Desktop-first",
    status: "Live · Experimental",
    role: "Independent concept · 3D experience & UI design · Frontend",
    highlights: [
      "Cinematic camera, OrbitControls, and per-object/global lighting controls",
      "Bilingual TR/EN content, synchronized music & lyrics interface, and draggable windows",
    ],
    ctaLabel: "Enter experience",
    tags: ["3D", "Music", "WebGL"],
    images: [
      { caption: "Ouroboros and skull stage with interactive lighting controls" },
    ],
  },
  desain: {
    title: "desAIn",
    hook: "Enter your room dimensions; turn them into a 3D interior layout in a few taps.",
    description:
      "Desktop-focused low-poly 3D interior editor where users define exact room geometry and real-world dimensions, then drag and place parametric furniture pieces.",
    platform: "Web · Desktop",
    status: "Live MVP",
    role: "Product framing & UI/UX · 3D editor experience · Technical development",
    highlights: [
      "Rectangular, square, L-shaped, and custom room footprints; parametric furniture inventory",
      "Collision and clearance validation, randomized layouts, and account-based project saving",
    ],
    ctaLabel: "Open editor",
    tags: ["3D Editor", "Interior", "Web"],
    images: [
      { caption: "3D editor viewport and room configuration panel" },
      { caption: "Living room layout" },
      { caption: "Bedroom layout" },
      { caption: "L-shaped room configuration" },
    ],
  },
  audioroom: {
    title: "AudioRoom",
    hook: "Don't just listen to an album; walk inside its world.",
    description:
      "A library of music experiences transforming albums and singles into walkable, playable 3D worlds. Four worlds are live, with two upcoming album worlds in the catalog. An independent fan project with no official affiliation to the artists.",
    platform: "Responsive web hub · 3D worlds",
    status: "Live · Evolving · 4 live / 2 upcoming",
    role: "Concept & experience design · Product/UI-UX · Creative frontend engineering",
    highlights: [
      "Four playable 3D music worlds for Hayko Cepkin, Henry the Lee, and Redd",
      "Redd 21 and Pink Floyd / The Dark Side of the Moon worlds coming soon",
    ],
    ctaLabel: "Explore worlds",
    tags: ["3D", "Audio", "WebGL"],
    images: [
      { caption: "Redd — Mükemmel Boşluk world" },
      { caption: "Hayko Cepkin — Beni Büyüten Şarkılar world" },
      { caption: "Klostrofobik Kaplumbağa world" },
      { caption: "Quantum Entanglement world" },
    ],
  },
  atkafasi: {
    title: "AtKafası Fanzin",
    hook: "Print and digital culture zine where independent ideas, illustrations, and street culture collide.",
    description:
      "Two-issue independent publication series I created end-to-end—from articles and visual identity to an 18-piece sticker series and page layouts. Available in print and digital formats via Shopier and Gumroad.",
    platform: "Independent publication · Digital & print distribution",
    status: "2 issues published · On Sale",
    role: "Content & writing · Editorial & visual identity · Page layout · Publishing",
    highlights: [
      "Print and digital distribution with supporter flow across Shopier and Gumroad",
    ],
    ctaLabel: "Buy on Shopier",
    secondaryLabel: "Explore on Gumroad",
    tags: ["Editorial", "Zine", "Print"],
    images: [
      { caption: "Issue 1 cover" },
      { caption: "Issue 2 cover" },
      { caption: "Gumroad digital storefront" },
    ],
  },
  "atkafasi-stickers": {
    title: "AtKafası Sticker Series",
    hook: "18 stickers for Issue 1 of AtKafası Zine: the zine's horse mascot, characters, and slogans.",
    description:
      "Prepared in Canva, every sticker in this 18-piece series shares the signature @atkafasifanzin circular frame, combining the horse motif, characters, and sharp slogans. One illustration in the set is by Derin Su (@theoryofapen).",
    platform: "Circular sticker set",
    status: "Completed",
    role: "Sticker design · Visual language · Typography",
    highlights: [
      "“Issue 1 is out.” launch sticker with a QR code linking to the zine's Linktree",
      "Stickers titled Sisyphus, On Ash, Homunculus, Were-Man, Bet-Men, Call to Reality, and Ampulistan 4891",
    ],
    ctaLabel: "Explore stickers on Canva",
    tags: ["Canva", "AtKafası"],
    images: [
      { caption: "Six stickers from the series" },
      { caption: "All 18 stickers in the collection" },
      { caption: "“Issue 1 is out.”" },
      { caption: "“Just horsing around…”" },
      { caption: "Sisyphus" },
      { caption: "Ampulistan 4891" },
      { caption: "“Don't think. Don't feel. Just consume.”" },
    ],
  },
  "quantum-entanglement": {
    title: "Quantum Entanglement",
    hook: "What Einstein called 'spooky action at a distance': do entangled particles really influence each other instantaneously?",
    description:
      "Physics research paper examining quantum entanglement, Bell's inequality, and the local hidden-variables debate through the lens of the 2022 Nobel Prize in Physics experiments—tracing the path from the EPR paradox to Alain Aspect's tests.",
    platform: "PDF · Independent research paper",
    status: "Completed",
    role: "Research · Academic writing",
    highlights: [
      "Bell inequality tests and the experimental bounds of local hidden-variable theories",
      "Chronological narrative from the EPR paradox to the 2022 Nobel Prize in Physics experiments",
    ],
    ctaLabel: "Read document",
    tags: ["Physics"],
    images: [
      { caption: "2022 Nobel Prize in Physics: Aspect, Clauser, and Zeilinger" },
      { caption: "Schrödinger's cat thought experiment" },
      { caption: "The historic debate between Einstein and Bohr" },
    ],
  },
  "general-relativity": {
    title: "General Relativity",
    hook: "How does gravity bend light? Observational evidence from Mercury's orbit to the Twin Quasar.",
    description:
      "Physics presentation bringing together the core principle of general relativity, the equivalence of gravity and acceleration, and real observational evidence of light bending (Mercury's perihelion precession and the Twin Quasar).",
    platform: "PowerPoint presentation",
    status: "Completed",
    role: "Research · Presentation design",
    highlights: [
      "Logical progression from the equivalence principle to gravitational light deflection",
      "Observational proofs including Mercury's orbital precession and the Twin Quasar",
    ],
    ctaLabel: "Read document",
    tags: ["Physics"],
    images: [
      { caption: "Starlight bending as it passes near the Sun" },
      { caption: "Spacetime curved by mass" },
      { caption: "Gravitational lensing and the Twin Quasar" },
    ],
  },
  "dyson-ring": {
    title: "Dyson Ring",
    hook: "Is it possible to build a giant energy ring around a star? Research proposal prepared for TÜBİTAK 2209-A.",
    description:
      "Formal research proposal prepared at Marmara University for the TÜBİTAK 2209-A Undergraduate Research Projects Support Program, evaluating the technical and economic feasibility of a Dyson ring through literature review, simulation, and prototyping.",
    platform: "Word document · Formal research proposal",
    status: "TÜBİTAK 2209-A application",
    role: "Researcher · Proposal author",
    highlights: [
      "Four work packages covering literature review, simulation modeling, and prototype production",
      "Advisor: Caner Değer · Marmara University",
    ],
    ctaLabel: "Read document",
    tags: ["Astrophysics"],
    images: [
      { caption: "TÜBİTAK 2209-A application form cover" },
      { caption: "Project aims and objectives" },
      { caption: "Risk management and research facilities tables" },
    ],
  },
  "jump-analysis": {
    title: "Jump Height Analysis",
    hook: "End-to-end machine learning study predicting vertical jump height from biomechanical data.",
    description:
      "End-to-end data analysis and machine learning presentation spanning dataset curation, correlation heatmaps, feature engineering, and comparative evaluation of Gradient Boosting, Random Forest, and KNN models.",
    platform: "Canva presentation",
    status: "Completed",
    role: "Data analysis · Presentation design",
    highlights: [
      "Exploratory data analysis via correlation heatmap and feature engineering",
      "Comparative evaluation of Gradient Boosting, Random Forest, and KNN models",
    ],
    ctaLabel: "Open presentation on Canva",
    tags: ["Machine learning"],
    images: [
      { caption: "Presentation overview" },
      { caption: "Correlation heatmap" },
      { caption: "Feature engineering breakdown" },
    ],
  },
  "damped-oscillator": {
    title: "Damped Harmonic Oscillator",
    hook: "How does a spring's oscillation decay? Numerical solution in Python, energy plots, and interactive simulation.",
    description:
      "Numerical study solving the equation of motion of a forced damped harmonic oscillator using Euler's method in Python, comparing the effects of mass, damping coefficient, spring constant, driving force, and initial conditions on position, velocity, phase space, and energy. Prepared with a four-person team for Marmara University's COMP2083 Scientific Programming course and summarized in a scientific poster.",
    platform: "Python · Google Colab · Scientific poster",
    status: "Completed · Course project",
    role: "Team of four · Numerical modeling, simulation & analysis",
    highlights: [
      "Step-by-step numerical solution of the equation of motion via Euler's method (dt = 0.01 s)",
      "Comparison table summarizing the effect of seven parameters on position, velocity, and energy",
    ],
    ctaLabel: "Open code in Colab",
    secondaryLabel: "Inspect poster",
    tags: ["Python", "Numerical methods"],
    images: [
      { caption: "Animation frame: position, velocity, phase diagram, and energy" },
      { caption: "COMP2083 scientific poster" },
      { caption: "Total energy across different spring constants and masses" },
      { caption: "Forced spring simulation across varying initial positions" },
      { caption: "Parameter interaction comparison table" },
    ],
  },
  "kepce-operatoru": {
    title: "Excavator Arm Scale Model",
    hook: "An excavator arm made of popsicle sticks: four servos, four potentiometers, four independent axes.",
    description:
      "Scale model built with an Arduino Uno as a high-school senior physics project, simulating the motion axes of a real excavator. The boom and chassis were constructed from wooden popsicle sticks; 4 servo motors wired to 4 potentiometers independently drive base rotation, boom, dipper, and bucket axes, while a Nokia 5110 LCD displays live telemetry.",
    platform: "Arduino Uno · Physical scale model",
    status: "Completed",
    role: "Electronics design · Arduino programming · Physical model building",
    highlights: [
      "4-axis excavator arm independently controlled via 4 servo motors and 4 potentiometers",
      "Popsicle-stick chassis and real-time status feedback on a Nokia 5110 LCD screen",
    ],
    tags: ["Electronics"],
    images: [
      { caption: "Scale model, Nokia 5110 LCD screen, and potentiometer control panel" },
    ],
  },
  "uniforumhub-flyer": {
    title: "UniForumHub Brochure",
    hook: "Brochure for a university forum where students share everything from lecture notes to second-hand gear.",
    description:
      "Canva brochure design introducing the UniForumHub university forum concept—bringing together lecture note sharing, event ideas, book/film/music discussions, roommate search, and second-hand listings, with featured posts cross-published in AtKafası Zine.",
    platform: "Canva brochure design",
    status: "Design completed",
    role: "Visual design · Concept",
    highlights: [
      "All-in-one campus forum concept uniting lecture notes, events, second-hand listings, and discussions",
      "Cross-promotion with AtKafası Zine",
    ],
    ctaLabel: "Explore on Canva",
    tags: ["Canva"],
    images: [
      { caption: "Brochure cover" },
      { caption: "QR codes and forum overview" },
      { caption: "AtKafası Zine cross-promotion page" },
    ],
  },
  "sorita-promo": {
    title: "SoRita Promo Video",
    hook: "Promotional motion design communicating SoRita's 'follow friends, see the places they save' promise.",
    description:
      "Short promotional video template designed in Canva to announce the social map experience of the SoRita mobile application.",
    platform: "Canva video template",
    status: "Completed",
    role: "Visual design",
    highlights: [
      "Promotional narrative highlighting SoRita's venue saving and friend-following features",
      "Visuals backed by real SoRita mobile app screens",
    ],
    ctaLabel: "Explore on Canva",
    tags: ["Canva", "SoRita"],
    images: [
      { caption: "Key frame of the promotional video" },
    ],
  },
  "universe-poster": {
    title: "UniVerse Investor Deck",
    hook: "28-page startup pitch deck for UniVerse: problem, solution, competitor analysis, and business model.",
    description:
      "28-page Canva startup presentation prepared under the 'Mobile Apps by MeMoDe' banner, covering UniVerse's student/club problem space, solution, real app screenshots, competitor analysis (UniClubs, Kampüslü), and business model—presented alongside SoRita and WMatch.",
    platform: "Canva presentation · 28 pages",
    status: "Completed",
    role: "Visual design · Pitch content",
    highlights: [
      "Real application screenshots showcasing clubs, events, and social follow flows",
      "Full deck including competitor analysis (UniClubs, Kampüslü) and business model slides",
    ],
    ctaLabel: "Open deck on Canva",
    tags: ["Canva", "UniVerse"],
    images: [
      { caption: "Cover: Mobile Apps by MeMoDe" },
      { caption: "Student and club problem statements" },
      { caption: "Competitor analysis" },
    ],
  },
  "audio-room-poster": {
    title: "AudioRoom Promo Poster",
    hook: "Poster explaining AudioRoom's 'Mükemmel Boşluk' world with control schemes and QR codes.",
    description:
      "Canva poster introducing AudioRoom's 3D world for Redd's 'Mükemmel Boşluk' album with keyboard controls, minimap, and player UI, while listing live and upcoming worlds (Hayko Cepkin, Pink Floyd, Quantum Entanglement).",
    platform: "Canva promotional poster",
    status: "Completed",
    role: "Visual design",
    highlights: [
      "Single-frame layout summarizing keyboard controls, map, and audio player UI",
      "Showcase of live and upcoming AudioRoom 3D worlds",
    ],
    ctaLabel: "Explore on Canva",
    tags: ["Canva", "AudioRoom"],
    images: [
      { caption: "Poster with controls and QR codes" },
      { caption: "Live and upcoming 3D worlds" },
    ],
  },
  "card-race": {
    title: "Card Race Game",
    hook: "Four aces, four lanes, and a race that shifts with every drawn card.",
    description:
      "Playing-card race game where four aces compete along eight-step suit lanes. Each drawn card advances its matching suit; whenever all aces pass a checkpoint, a penalty card flips and pushes its suit backward.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Game mechanics · Python prototype · Browser adaptation",
    highlights: [
      "Probability loop driven by four independent lanes and eight checkpoint penalty cards",
      "Responsive, touch-friendly game where the leading ace wins if the deck runs out",
    ],
    ctaLabel: "Play game",
    tags: ["Cards", "Casual"],
    images: [
      { caption: "Ace Race: suit lanes and card deck" },
    ],
  },
  battleship: {
    title: "Battleship",
    hook: "Replay classic naval warfare with music, sound effects, and drag-and-drop fleet placement.",
    description:
      "Seven-ship 10×10 Battleship game. Players drag, rotate, or randomly place their fleet before taking turns firing against a computer opponent.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Game development · UI & interaction design · Web adaptation",
    highlights: [
      "Long-press and double-tap ship rotation on touchscreens",
      "Hit accuracy statistics and independent music & SFX controls",
    ],
    ctaLabel: "Play game",
    tags: ["Strategy", "Grid"],
    images: [
      { caption: "Fleet placement and radar grid" },
    ],
  },
  "old-maid": {
    title: "Old Maid (Papaz Kaçtı)",
    hook: "Draw a hidden card from the hand on your right; don't be left holding the unmatched King.",
    description:
      "Four-player card game played with one human and three computer opponents. Matching pairs are discarded, and the last player left holding the lone King loses.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Game logic · Object-oriented Python · Web adaptation",
    highlights: [
      "Reshuffled hands each round and discarded pairs tracked live on the table",
      "Two-second card reveal pacing designed for both desktop and mobile play",
    ],
    ctaLabel: "Play game",
    tags: ["Cards", "Classic"],
    images: [
      { caption: "Four-player card table" },
    ],
  },
  tictactoe: {
    title: "Tic Tac Toe",
    hook: "Pick your board size; win the rivalry from three-in-a-row up to five-in-a-row.",
    description:
      "Expanded Tic Tac Toe game where two players on the same device compete across 3×3, 4×4, 5×5, or 6×6 boards.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Game logic · Python/NumPy prototype · Web interface",
    highlights: [
      "Three-, four-, or five-in-a-row win conditions scaled to board size",
      "Winning line highlight and session X/O/draw scoreboard",
    ],
    ctaLabel: "Play game",
    tags: ["Classic", "Grid"],
    images: [
      { caption: "Board size selection and game grid" },
    ],
  },
  "son-40-saniye": {
    title: "Son 40 Saniye",
    hook: "You're doomed to die; you have 40 seconds to purge 33 search history entries and save your reputation.",
    description:
      "Dark-comedy reputation game built around managing 33 browser search records in 40 seconds after a traffic accident. Keeping innocent searches and deleting incriminating ones determines your final reputation score from 0 to 1000.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Concept & game design · Product/UI-UX · Frontend & API engineering",
    highlights: [
      "Community-contributed search pool, global leaderboard, and 20 reputation titles",
      "Moderation/score management, IP/device rate-limiting, and audit logs",
    ],
    ctaLabel: "Play game",
    tags: ["Dark Comedy", "Arcade"],
    images: [
      { caption: "Opening screen and browser search history records" },
    ],
  },
  asmaca: {
    title: "Asmaca (Hangman)",
    hook: "Knowledge decides fate; every answer you give changes the verdict on stage.",
    description:
      "Bilingual (Turkish & English) web game combining cited trivia questions with a cinematic 3D gallows stage.",
    platform: "Responsive web · Desktop and mobile",
    status: "Live",
    role: "Game & experience design · 3D frontend · UI/UX & content system",
    highlights: [
      "Classic, HANG, and RESCUE modes across three difficulty tiers",
      "Six characters; 99 questions per difficulty tier with clickable source citations",
    ],
    ctaLabel: "Play game",
    tags: ["3D", "Trivia", "Word game"],
    images: [
      { caption: "Cinematic 3D gallows stage" },
    ],
  },
  "monster-wrangler": {
    title: "Monster Wrangler",
    hook: "Catch the target color; hitting the wrong monster costs you a life.",
    description:
      "Arcade game where you catch moving monsters matching the target color in the center pen. Each correct catch scores points; each wrong collision costs a life.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Pygame development · Web adaptation · Responsive control design",
    highlights: [
      "Five lives, two starting warps, and one bonus warp earned per cleared round",
      "Growing monster swarms each round with touch-friendly controls",
    ],
    ctaLabel: "Play game",
    tags: ["Arcade", "2D Action"],
    images: [
      { caption: "Target color pen and moving monsters" },
    ],
  },
  "catch-the-clown": {
    title: "Catch the Clown",
    hook: "Every catch speeds the clown up; every miss costs a life.",
    description:
      "Reflex arcade game where every click on the bouncing clown increases both your score and its speed. Each miss costs one of five lives.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Pygame development · Browser adaptation · Touch interaction",
    highlights: [
      "Direction changes and accelerating speed on every hit",
      "Pointer/touch input with custom sound effects and background music",
    ],
    ctaLabel: "Play game",
    tags: ["Arcade", "Reflex"],
    images: [
      { caption: "Gameplay screen: score and remaining lives" },
    ],
  },
  snake: {
    title: "Snake",
    hook: "Every apple grows your tail; your own body makes the next turn harder.",
    description:
      "Web adaptation of the classic arcade game where you steer a growing snake to collect apples without hitting the walls or your own body.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Pygame development · Web adaptation · Mobile control design",
    highlights: [
      "Keyboard, on-screen D-pad, and swipe gesture controls",
      "Collision-safe apple spawning on empty cells and independent audio toggle",
    ],
    ctaLabel: "Play game",
    tags: ["Retro", "Arcade"],
    images: [
      { caption: "Gameplay grid and score" },
    ],
  },
  "burger-dog": {
    title: "Burger Dog",
    hook: "Burgers fall faster, the dog gets hungrier; every missed bite costs a life.",
    description:
      "Reflex arcade game where you steer a dog to catch falling burgers. Every catch boosts burger fall speed and score; each missed burger costs a life.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Pygame development · Responsive web adaptation · Control design",
    highlights: [
      "Three lives and a regenerating sprint boost meter",
      "Dynamic scoring scaled by fall speed and catch distance",
    ],
    ctaLabel: "Play game",
    tags: ["2D", "Casual"],
    images: [
      { caption: "Gameplay screen: score, lives, and boost meter" },
    ],
  },
  "feed-the-dragon": {
    title: "Feed the Dragon",
    hook: "Every coin feeds the dragon, speeds up the stream, and tightens the next move.",
    description:
      "Arcade game where you steer a dragon vertically to catch incoming gold coins from the right. Every coin increases score and scroll speed; missed coins cost a life.",
    platform: "Responsive web · Desktop and mobile browser",
    status: "Live",
    role: "Pygame development · Web adaptation · Mobile interaction design",
    highlights: [
      "Five lives and a continuously accelerating arcade loop",
      "Keyboard, on-screen buttons, and touch-drag controls",
    ],
    ctaLabel: "Play game",
    tags: ["Arcade", "Action"],
    images: [
      { caption: "Gameplay screen: dragon and incoming gold coin" },
    ],
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
