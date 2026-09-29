# Project preview sources

- `trai.png`: live capture from `trai-theta.vercel.app`
- `mrap.png`: local verified demo capture from `mrap.vercel.app`
- `merbut-menu.png`, `merbut-titlecard.png`, `merbut-combat.png`: live captures of v3.1.0 at
  `merbut.vercel.app` (main menu duel, the Aku Metropolü album title card, and the first fight
  with Jack's shield up), taken on 2026-09-26 with real keyboard input from a fresh save
- `bibish.png`: owner-supplied local gameplay capture from Bibish
- `remember-ouroboros.png`: owner-supplied capture from `remember-you-must-die-web.vercel.app`
- `desain.png`: live project at `des-ai-n.vercel.app`
- `audioroom-mukemmel-bosluk.png`: owner-supplied Mükemmel Boşluk capture from `audio-room-ecru.vercel.app`
- `etkinlink-1.png` through `etkinlink-4.png`: exported from the owner-supplied EtkinLink Figma prototype (Discover, Rooms, Match, and Direct Chat frames)
- `wmatch-1.png` through `wmatch-4.png`: owner-supplied WMatch demo-account captures
- `sorita-1.png` through `sorita-3.png`: owner-supplied SoRita demo-account captures
- `universe-1.png` through `universe-3.png`: owner-supplied UniVerse demo-account captures
- `card-race.png`: live capture from `card-race-game.vercel.app`
- `battleship.png`: live capture from `battleship-pygame.vercel.app`
- `old-maid.png`: live capture from `old-maid-card-game.vercel.app`
- `tictactoe.png`: live capture from `tic-tac-toe-game-delta-jade.vercel.app`
- `son-40-saniye.png`: live capture from `google-history-clear-game.vercel.app`
- `atkafasi.png`: live capture from `atkafasifanzin.gumroad.com`
- `quantum-nobel-2022.jpg`, `quantum-schrodingers-cat.jpg`, `quantum-einstein-bohr.jpg`: real
  images extracted directly from `quantuuuum.pdf` (the 2022 Nobel Prize laureates, the
  Schrödinger's cat diagram, and the Einstein/Bohr illustration used in the document)
- `general-relativity-light-bending.jpg`, `general-relativity-spacetime-grid.jpg`,
  `general-relativity-gravitational-lensing.jpg`: real images extracted directly from the
  `GENERAL_RELATIVITY.pptx` slides (light-bending diagram, spacetime curvature grid, and
  gravitational lensing/twin quasar diagram)
- `dyson-ring-cover.jpg`, `dyson-ring-aims.jpg`, `dyson-ring-risk-table.jpg`: real screenshots of
  three different pages (cover, Aims and Objectives, Risk Management/Research Opportunities
  tables) of `SCIENNNNNTIFIC.docx` (Dyson Ring), rendered via Microsoft's Office Online viewer
- `jump-height-ml-presentation.jpg`, `jump-height-correlation-heatmap.jpg`,
  `jump-height-feature-engineering.jpg`: real headless-browser screenshots of three different
  slides (1, 5, 9 of 18) of the Canva presentation at `canva.link/9uou0pjp4wumn1g` — a real ML
  coursework deck estimating jump height from a dataset (correlation heatmap, feature
  engineering, Gradient Boosting/Random Forest/KNN comparison)
- `uniforumhub-flyer.jpg`, `uniforumhub-flyer-page2.jpg`, `uniforumhub-flyer-page3.jpg`: real
  headless-browser screenshots of the 3 pages of the Canva flyer at
  `canva.link/qx0tf07ri8ul5t1` (front hero art, the UniForumHub QR/description panel, and the
  AtKafası Fanzin cross-promo cover)
- `sorita-promo.jpg`: real headless-browser screenshot of the Canva video design at
  `canva.link/57hgko0vw2x3g0r` (a single still composition — the "video" has no content change
  over its 5s runtime), paired in the gallery with the existing real `sorita-1.png`/`sorita-2.png`
  demo captures for variety
- `universe-app-promo.jpg`, `universe-app-promo-problems.jpg`,
  `universe-app-promo-competitors.jpg`: real headless-browser screenshots of 3 of the 28 pages
  (cover, Problems, Rakip Analizi) of the Canva pitch deck at `canva.link/2v5p2m45n4c8nda` — a
  full investor-style deck for UniVerse, not just a single promo image
- `audioroom-info-poster.jpg`, `audioroom-info-poster-page2.jpg`: real headless-browser
  screenshots of 2 of the 3 pages of the Canva design at `canva.link/vvz204q9oy7b53y` (the
  controls/QR poster and the "Yayındakiler & Yakındakiler" album showcase; the 3rd page is blank
  in the source file)

- `cayankuzu-cv.png`, `cayankuzu-cv-projects.png`: captures of the two-column CV document
  (`/tr`, header and "Seçili Projeler" section), taken from the local build on 2026-09-30
- `kepce-operatoru.jpg`: real frame extracted and cropped from the owner-supplied 2020 physics
  project video (`InShot_20200118_212358091.mp4`), showing the full desk setup — the popsicle-stick
  arm tower, the Nokia 5110 LCD, and the 4-potentiometer breadboard control panel

These files are captures or original assets from the projects themselves, not generated mockups.
The Canva screenshots were captured by loading each design's public `/view` URL in headless
Chrome (the JS-rendered page can't be read via a plain HTTP fetch, but a real browser renders it
normally), navigating between pages/slides with real mouse and keyboard input, and cropping to
the relevant frame with Pillow. The Word document pages were captured the same way, but via
Microsoft's Office Online embed viewer instead of Canva.

## Gameplay/experience videos (`videos/`)

All of the following are real screen recordings, captured the same way as the screenshots above
(headless Chrome via Playwright, connected over CDP) but recording video while real keyboard/mouse
input was sent to the live, deployed game — not scripted/staged footage, not screen-captured from
a human play session, and not AI-generated video. Each is a genuine session against the actual
production build:

- `snake-gameplay.mp4`, `tictactoe-gameplay.mp4`, `monster-wrangler-gameplay.mp4`,
  `feed-the-dragon-gameplay.mp4`, `catch-the-clown-gameplay.mp4`, `battleship-gameplay.mp4`,
  `old-maid-gameplay.mp4`: real gameplay clips from each game's live Vercel deployment
- `son-40-saniye-gameplay.mp4`: real capture of the game's opening cinematic (phone lock screen →
  fingerprint unlock); the automated input couldn't reliably reach the later list-editing mechanic
- `asmaca-gameplay.mp4`: real capture through character select → mode select → an actual trivia
  question inside the 3D hangman scene
- `bibish-gameplay.mp4`: real capture of joining a live match and the spawn-point selection map
  (automated input couldn't reliably click a specific spawn to get further into open movement)
- `merbut-gameplay.mp4`: real capture of the first fight in v3.1.0 (re-recorded 2026-09-26): Hz. Ali
  and Samuray Jack played with real keyboard input through three-cut chains, Ali's fireball and
  Jack's shield against the opening wave in Aku Metropolü
- `remember-gameplay.mp4`: real capture of the Ouroboros 3D scene being rotated via drag.
  Re-recorded twice on 2026-09-16: first after fixing a bug on that site where the skull inside
  the ring failed to render in time (see that project's own repo history), then again after
  noticing the drag direction left the camera looking at the back of the skull's head — dragging
  the opposite way brings the skull's face toward the camera instead.
- `burger-dog-gameplay.mp4`: real gameplay clip. The `#startButton` didn't respond to coordinate
  clicks or text-locator clicks (see below), but did respond to a direct
  `page.locator("#startButton").click()` — worth remembering for any future automation on this
  game.

`card-race` kept its existing static screenshot only. Its "Kart çek" button did not respond to
automated clicks after several different approaches (coordinate clicks, text-locator clicks,
longer waits), so no real gameplay footage could be captured for it; no video was fabricated as
a substitute.

AudioRoom no longer uses a video (`audioroom-gameplay.mp4` removed) — see below, it now shows a
real photo per completed album instead.

- `kepce-operatoru-demo.mp4`: real 8-second clip trimmed from the same owner-supplied physics
  project video as `kepce-operatoru.jpg` above, showing the servo/popsicle-stick arm assembly and
  the breadboard control panel up close. Cropped to remove the source video's blurred vertical
  padding bars, then re-encoded to H.264/mp4 (OpenCV + OpenH264, since the local ffmpeg.exe binary
  was blocked from reading files mid-session — see project notes) — not AI-generated, a direct
  re-encode of real footage.
- `kepce-operatoru-full.mp4`: the full ~2:16 source video (same crop applied, downscaled to
  480x274/15fps, original audio track re-encoded to AAC and kept), used as the card's click-through
  target since this project has no live site to link to. Muxed with PyAV (in-process libx264/libavcodec
  bindings) since the local ffmpeg.exe binary stayed blocked; the first version of this file was
  silent because the initial OpenCV-based encode only wrote a video stream — this version restores
  the original audio.

## AudioRoom album photos

`audioroom-mukemmel-bosluk.png` (existing, unchanged) plus three more real captures, one per
other completed ("YAYINDA") album confirmed by paging through the live library carousel:

- `audioroom-hayko-cepkin.png`: owner-supplied capture of the "Beni Büyüten Şarkılar Vol.1" world
- `audioroom-klostrofobik-kaplumbaga.png`: owner-supplied capture of Henry the Lee's
  "Klostrofobik Kaplumbağa" world
- `audioroom-kuantum-dolaniklik.png`: real capture of Henry the Lee's "Kuantum Dolanıklık" world
  (the site's own "4 yayında" claim didn't line up with only 3 known worlds until this one — a
  single track, easy to miss in the carousel — was found and confirmed YAYINDA)

The two still-YAKINDA worlds (Redd — 21, Pink Floyd — The Dark Side of the Moon) are correctly
left out.

## desAIn room photos

`desain.png` (existing) plus three more real captures showing genuinely different configurations,
not just camera angles on the same room — changing the "Oda Türü" and "Oda Tipi" dropdowns
produces a different parametric furniture layout each time:

- `desain-salon.jpg`: default rectangular "Salon" (living room) layout
- `desain-yatak-odasi.jpg`: rectangular "Yatak Odası" (bedroom) layout
- `desain-l-tipi.jpg`: "L Tipi" (L-shaped) room, still "Yatak Odası"

## mrap.vercel.app — not touched

`mrap.vercel.app` currently serves an unrelated site ("MRA — Moroccan Rap Archive"), not the
street-painting map game described in the `mrap` project card. This was already flagged once
before and is still true as of this update — no screenshots were taken from it, since that would
mean showing the wrong project's content as if it were MRAP. The card's existing preview image
was left alone. This needs the actual deployment fixed before any new screenshots make sense.
- `damped-oscillator-*.jpg`: rendered from the owner-supplied COMP2083 poster
  (`public/documents/sonumlu-harmonik-osilator.pdf`); teammates' student numbers and e-mail
  addresses were redacted before publishing, names are kept as credit
