// ==========================================================================
// SUGAR CRUSH // ARC 2025 — Self-Contained Interactive Bundle
// Works seamlessly on BOTH http://localhost AND direct file:// double-click!
// ==========================================================================

(() => {
  "use strict";

  // ------------------------------------------------------------
  // 1. AUTHENTIC REFERENCE SVG STICKERS & SOUND ENGINE
  // ------------------------------------------------------------
  const STICKER_SVGS = {
    bow: `<svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
      <filter id="bow-shadow" x="-15%" y="-15%" width="135%" height="140%">
        <feDropShadow dx="-2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.42"/>
      </filter>
      <g filter="url(#bow-shadow)">
        <path d="M89 39C72 16 39 8 22 25C8 39 10 77 25 96C39 113 68 106 86 89C90 93 96 93 100 89C118 106 147 113 161 96C176 77 178 39 164 25C147 8 114 16 97 39C94 37 92 37 89 39Z"
          fill="#FFFFFF" stroke="#FFFFFF" stroke-width="16" stroke-linejoin="round"/>
        <path d="M84 49C69 24 38 17 24 32C12 45 14 77 27 92C40 107 67 99 84 81Z"
          fill="#E81E25" stroke="#0B0B0D" stroke-width="8.5" stroke-linejoin="round"/>
        <path d="M102 49C117 24 148 17 162 32C174 45 172 77 159 92C146 107 119 99 102 81Z"
          fill="#E81E25" stroke="#0B0B0D" stroke-width="8.5" stroke-linejoin="round"/>
        <path d="M68 57C58 51 48 52 42 58" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
        <path d="M68 73C59 76 50 75 44 70" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
        <path d="M118 57C128 51 138 52 144 58" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
        <path d="M118 73C127 76 136 75 142 70" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
        <ellipse cx="93" cy="66" rx="19" ry="23" fill="#F0242C" stroke="#0B0B0D" stroke-width="8.5"/>
        <ellipse cx="42" cy="40" rx="8" ry="4.5" transform="rotate(-22 42 40)" fill="#FF6B72" opacity="0.75"/>
        <ellipse cx="88" cy="54" rx="5" ry="3.5" transform="rotate(-15 88 54)" fill="#FF6B72" opacity="0.75"/>
      </g>
    </svg>`,

    naruto: `<svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
      <filter id="naruto-shadow" x="-15%" y="-15%" width="135%" height="140%">
        <feDropShadow dx="-3" dy="5" stdDeviation="3.5" flood-color="#000000" flood-opacity="0.42"/>
      </filter>
      <g filter="url(#naruto-shadow)">
        <path d="M90 14 C99 14,105 21,113 19 C122 17,130 22,135 29 C141 36,150 38,154 46 C158 55,164 62,163 71 C162 80,168 88,164 97 C160 105,163 115,156 122 C150 129,149 139,140 144 C132 148,128 157,118 159 C109 161,101 167,91 166 C82 165,73 168,65 163 C56 158,47 159,40 151 C34 144,25 141,21 132 C17 123,11 116,13 106 C15 97,10 88,15 79 C19 71,18 61,25 54 C31 47,34 37,43 33 C51 29,57 20,67 19 C76 18,82 14,90 14Z"
          fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" stroke-linejoin="round"/>
        <path d="M90 18 C98 18,104 24,112 22 C120 20,128 25,133 32 C138 38,147 40,151 48 C154 56,160 63,159 71 C158 80,164 88,160 96 C156 104,159 113,152 120 C146 126,145 136,137 140 C129 144,125 153,116 155 C107 157,100 163,91 162 C82 161,74 164,66 159 C58 154,49 155,43 148 C37 141,28 138,25 129 C21 121,15 114,17 105 C19 96,14 88,19 79 C23 71,22 62,28 55 C34 49,37 39,45 35 C53 32,59 23,68 22 C77 21,83 18,90 18Z"
          fill="#FFFFFF" stroke="#0B0B0D" stroke-width="5.5" stroke-linejoin="round"/>
        <path d="M90 29 C97 29,102 34,109 33 C116 31,123 35,127 41 C131 46,139 48,142 55 C145 62,150 67,149 74 C148 82,153 88,150 95 C146 102,149 110,143 116 C138 121,137 129,130 133 C123 136,120 144,112 145 C104 147,98 152,91 151 C83 150,76 153,69 149 C62 145,55 145,50 139 C45 133,37 131,34 123 C31 116,26 110,28 103 C30 95,25 88,29 81 C33 74,32 66,37 60 C42 55,45 47,52 44 C59 41,64 33,71 33 C79 32,84 29,90 29Z"
          fill="#FFFFFF" stroke="#0B0B0D" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M90 90 C94 86, 100 88, 100 94 C100 103, 87 107, 80 100 C70 90,74 72,88 68 C106 62,121 77,118 96 C115 117,92 128,72 120 C52 111,48 84,61 65 C73 48,98 46,115 56"
          fill="none" stroke="#EB84B3" stroke-width="8.5" stroke-linecap="round"/>
      </g>
    </svg>`,

    pixelHeart: `<svg viewBox="0 0 13 12" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" class="pixel-heart-svg">
      <path fill="#FFFFFF" d="M2,0h3v1h3V0h3v1h1v1h1v4h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v-1H5v-1H4V9H3V8H2V7H1V6H0V2h1V1h1V0z"/>
      <path fill="#0D0D0D" d="M2,1h3v1h1v1h1V2h1V1h3v1h1v4h-1v1h-1v1H9v1H8v1H7v1H6v-1H5V9H4V8H3V7H2V6H1V2h1V1z"/>
      <path fill="#E81E25" d="M2,2h3v1h1v1h1V3h1V2h3v4h-1v1H9v1H8v1H7v1H6V9H5V8H4V7H3V6H2V2z"/>
      <path fill="#B81218" d="M10,3h1v3h-1v1H9v1H8v1H7v1H6V9h1V8h1V7h1V6h1V3z"/>
      <rect x="3" y="3" width="1" height="1" fill="#FFFFFF"/>
      <rect x="2" y="4" width="1" height="1" fill="#FFFFFF"/>
    </svg>`,

    patch: `<svg viewBox="0 0 170 110" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
      <filter id="patch-shadow" x="-15%" y="-15%" width="135%" height="140%">
        <feDropShadow dx="-3" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.4"/>
      </filter>
      <g filter="url(#patch-shadow)">
        <rect x="8" y="8" width="154" height="94" rx="8" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="10"/>
        <rect x="11" y="11" width="148" height="88" rx="4" fill="#F8DE2A" stroke="#0B0B0D" stroke-width="5"/>
        <rect x="17" y="17" width="136" height="76" rx="2" fill="none" stroke="#C8191E" stroke-width="2.5" stroke-dasharray="5 3"/>
        <text x="85" y="42" text-anchor="middle" fill="#C8191E" font-family="Impact, Anton, sans-serif" font-size="22" letter-spacing="1.5">RACING CREW</text>
        <text x="85" y="61" text-anchor="middle" fill="#0B0B0D" font-family="monospace" font-weight="900" font-size="10.5">FT UNIMED // DEPT.25</text>
        <rect x="32" y="69" width="106" height="16" fill="#C8191E"/>
        <text x="85" y="81" text-anchor="middle" fill="#FFF238" font-family="Impact, Anton, sans-serif" font-size="12" letter-spacing="2">PREMIERE ISSUE</text>
      </g>
    </svg>`,

    starburst: `<svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
      <filter id="star-shadow" x="-15%" y="-15%" width="135%" height="140%">
        <feDropShadow dx="-2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.42"/>
      </filter>
      <g filter="url(#star-shadow)">
        <polygon points="80,8 96,42 132,24 122,60 156,74 126,96 142,132 104,122 92,156 72,124 36,144 44,106 10,94 40,70 22,34 60,46"
          fill="#FFFFFF" stroke="#FFFFFF" stroke-width="12" stroke-linejoin="round"/>
        <polygon points="80,12 95,44 129,27 120,61 152,74 123,95 138,129 102,119 91,151 73,121 39,140 46,104 14,93 43,70 26,37 61,48"
          fill="#FFF238" stroke="#0B0B0D" stroke-width="5.5" stroke-linejoin="round"/>
        <text x="82" y="78" text-anchor="middle" fill="#DC1B22" font-family="Impact, Anton, sans-serif" font-size="23" transform="rotate(-8 82 78)">100%</text>
        <text x="84" y="101" text-anchor="middle" fill="#0B0B0D" font-family="Impact, Anton, sans-serif" font-size="19" transform="rotate(-8 84 101)">ICONIC</text>
      </g>
    </svg>`,

    digicam: `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
      <filter id="cam-shadow" x="-15%" y="-15%" width="135%" height="140%">
        <feDropShadow dx="-2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.42"/>
      </filter>
      <g filter="url(#cam-shadow)">
        <rect x="14" y="22" width="132" height="82" rx="14" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="14"/>
        <rect x="30" y="14" width="32" height="12" rx="4" fill="#E81E25" stroke="#0B0B0D" stroke-width="5"/>
        <rect x="16" y="24" width="128" height="78" rx="12" fill="#DCE4EC" stroke="#0B0B0D" stroke-width="6"/>
        <rect x="26" y="34" width="32" height="16" rx="3" fill="#FFF238" stroke="#0B0B0D" stroke-width="4"/>
        <circle cx="96" cy="64" r="27" fill="#0375B8" stroke="#0B0B0D" stroke-width="6"/>
        <circle cx="96" cy="64" r="16" fill="#0B0B0D"/>
        <circle cx="90" cy="58" r="5" fill="#FFFFFF"/>
        <circle cx="42" cy="74" r="7" fill="#E81E25" stroke="#0B0B0D" stroke-width="4"/>
      </g>
    </svg>`,

    arcLogo: `<svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="arc-logo-svg">
      <g transform="skewX(-24) translate(20, 0)">
        <text x="4" y="38" fill="#FFFFFF" font-family="Impact, Anton, sans-serif" font-weight="900" font-size="40" letter-spacing="2">ARC</text>
        <rect x="2" y="23" width="76" height="3.2" fill="#0267A6"/>
      </g>
      <text x="114" y="14" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="7">TM</text>
    </svg>`
  };

  class ZineSoundEngine {
    constructor() {
      this.enabled = true;
      this.ctx = null;
    }
    init() {
      if (!this.ctx && typeof window !== "undefined") {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
    }
    play(type = "pop") {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        if (type === "pop" || type === "click") {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(type === "pop" ? 520 : 340, now);
          osc.frequency.exponentialRampToValueAtTime(type === "pop" ? 980 : 140, now + 0.075);
          gain.gain.setValueAtTime(0.14, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.085);
        } else if (type === "heart") {
          [587.33, 880, 1174.66].forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = "square";
            osc.frequency.setValueAtTime(freq, now + idx * 0.045);
            gain.gain.setValueAtTime(0.06, now + idx * 0.045);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.09);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + idx * 0.045);
            osc.stop(now + idx * 0.045 + 0.095);
          });
        } else if (type === "scan") {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(1480, now);
          osc.frequency.setValueAtTime(1960, now + 0.06);
          gain.gain.setValueAtTime(0.11, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + 0.17);
        } else if (type === "peel") {
          const bufferSize = Math.floor(this.ctx.sampleRate * 0.09);
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
          const noise = this.ctx.createBufferSource();
          const filter = this.ctx.createBiquadFilter();
          filter.type = "bandpass";
          filter.frequency.setValueAtTime(1800, now);
          filter.frequency.linearRampToValueAtTime(3600, now + 0.09);
          const gain = this.ctx.createGain();
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.005, now + 0.09);
          noise.buffer = buffer;
          noise.connect(filter);
          filter.connect(gain);
          gain.connect(this.ctx.destination);
          noise.start(now);
        }
      } catch (_) {}
    }
  }

  const sfx = new ZineSoundEngine();

  // ------------------------------------------------------------
  // 2. CUTOUT PHOTOS & THEME DATA
  // ------------------------------------------------------------
  const CUTOUT_PHOTOS = [
    {
      id: "01",
      zineSrc: "assets/cutouts/zine_01.png",
      cleanSrc: "assets/cutouts/clean_01.png",
      title: "CAP TILT // MAIN CHAR",
      cardBgWord: "SUGAR",
      cardScript: "Main char!",
      mood: "Y2K DIGICAM",
      coverTop: "SUGAR",
      coverBottom: "CRUSH",
      scriptLeft: "Sug",
      scriptRight: "sh",
      bowPos: { top: "16%", left: "54%" },
      outfit: "FT UNIMED Navy Cap + Crisp White Tee",
      camera: "High-Angle Flash // 2000s Vibe",
      desc: "Tatapan tajam high-angle khas cover majalah Harajuku era 2000-an dengan topi FT UNIMED miring ikonik.",
      featured: true,
      stickerAccent: "bow"
    },
    {
      id: "02",
      zineSrc: "assets/cutouts/zine_02.png",
      cleanSrc: "assets/cutouts/clean_02.png",
      title: "CAPE BLAZER // CAMPUS",
      cardBgWord: "CRUSH",
      cardScript: "Iconic!",
      mood: "STREET FORMAL",
      coverTop: "SUGAR",
      coverBottom: "CRUSH",
      scriptLeft: "Sug",
      scriptRight: "sh",
      bowPos: { top: "7%", left: "51%" },
      outfit: "Draped Emerald Blazer + Olive Shirt",
      camera: "Outdoor Portrait // Crisp Cut",
      desc: "Siluet almamater hijau zamrud disampirkan di bahu ala karakter utama streetwear editorial.",
      featured: true,
      stickerAccent: "patch"
    },
    {
      id: "03",
      zineSrc: "assets/cutouts/zine_03.png",
      cleanSrc: "assets/cutouts/clean_03.png",
      title: "NO PHOTOS // FLASH BLOCK",
      cardBgWord: "FLASH",
      cardScript: "No press!",
      mood: "PAPARAZZI",
      coverTop: "NO",
      coverBottom: "PRESS",
      scriptLeft: "Too",
      scriptRight: "hot!",
      bowPos: { top: "13%", left: "52%" },
      outfit: "Charcoal Long-Sleeve Oversized",
      camera: "Direct Digicam Flash",
      desc: "Pose dua telapak tangan menahan blitz kamera paparazzi — misterius, raw, dan penuh karakter zine.",
      featured: false,
      stickerAccent: "digicam"
    },
    {
      id: "04",
      zineSrc: "assets/cutouts/zine_04.png",
      cleanSrc: "assets/cutouts/clean_04.png",
      title: "BLINDED // SYMMETRY",
      cardBgWord: "RUSH",
      cardScript: "Raw cut",
      mood: "EDITORIAL",
      coverTop: "HYPER",
      coverBottom: "RUSH",
      scriptLeft: "Pure",
      scriptRight: "vibe",
      bowPos: { top: "11%", left: "51%" },
      outfit: "Cream Sleeveless Athletic Tank",
      camera: "Hard Flash // Album Cut",
      desc: "Komposisi siku simetris menutup wajah dengan kontras flash tajam layaknya sampul album indie pop-punk.",
      featured: false,
      stickerAccent: "naruto"
    },
    {
      id: "05",
      zineSrc: "assets/cutouts/zine_05.png",
      cleanSrc: "assets/cutouts/clean_05.png",
      title: "FIELD BOSS // KKN ARC",
      cardBgWord: "CREW",
      cardScript: "Boss lvl",
      mood: "ACTION ARC",
      coverTop: "REBEL",
      coverBottom: "CREW",
      scriptLeft: "Arc",
      scriptRight: "25!",
      bowPos: { top: "8%", left: "50%" },
      outfit: "Tactical Utility Vest + Cargo Shorts",
      camera: "Daylight Action Cutout",
      desc: "Rompi lapangan berpatch Merah-Putih dengan cangkul kayu di pundak bak protagonis manga aksi.",
      featured: false,
      stickerAccent: "starburst"
    }
  ];

  const HEADLINE_PRESETS = [
    { top: "SUGAR", bottom: "CRUSH", sLeft: "Sugar", sRight: "rush" },
    { top: "MAIN", bottom: "CHAR", sLeft: "Real", sRight: "iconic" },
    { top: "HYPER", bottom: "RUSH", sLeft: "Super", sRight: "cool" },
    { top: "NO", bottom: "PRESS", sLeft: "VIP", sRight: "only" }
  ];

  const THEME_PALETTES = [
    { id: "sugar-blue", name: "COBALT ZINE", primary: "#0273B5", bright: "#0588D4", deep: "#014B80", headline: "#FFF238", extrude: "#B81218", script: "#DC1B22" },
    { id: "racing-red", name: "RACING RED", primary: "#B9151B", bright: "#D91E26", deep: "#78090E", headline: "#FFF238", extrude: "#0B0B0D", script: "#FFFFFF" },
    { id: "cyber-teal", name: "EMERALD POP", primary: "#04786E", bright: "#08998D", deep: "#024943", headline: "#FFF238", extrude: "#C8181E", script: "#FF3B47" },
    { id: "shibuya-ink", name: "SHIBUYA INK", primary: "#181924", bright: "#25283B", deep: "#0B0C12", headline: "#FFF238", extrude: "#DC1B22", script: "#FF4D6D" }
  ];

  // ------------------------------------------------------------
  // 3. INTERACTIVE HTML5 CANVAS POSTER STUDIO
  // ------------------------------------------------------------
  class PosterStudio {
    constructor(canvasId, toastFn) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.toast = toastFn || (() => {});
      this.W = 900;
      this.H = 1125;
      this.canvas.width = this.W;
      this.canvas.height = this.H;

      this.state = {
        photoIndex: 0,
        paletteIndex: 0,
        topWord: "SUGAR",
        bottomWord: "CRUSH",
        scriptText: "Sugar rush",
        yearText: "2025",
        halftone: true,
        modelX: this.W * 0.5,
        modelY: this.H * 0.99,
        modelScale: 0.92,
        selectedItem: null
      };

      this.cutoutImages = [];
      this.stickerImages = {};
      this.placedStickers = [
        { type: "bow", x: 505, y: 185, size: 138, rot: 0.26 },
        { type: "naruto", x: 745, y: 650, size: 168, rot: 0.1 },
        { type: "pixelHeart", x: 95, y: 660, size: 46, rot: 0 },
        { type: "pixelHeart", x: 146, y: 660, size: 46, rot: 0 },
        { type: "pixelHeart", x: 197, y: 660, size: 46, rot: 0 }
      ];
      this.dragging = null;
      this.dragOffset = { x: 0, y: 0 };

      this.preloadAssets().then(() => this.render());
      this.bindEvents();
    }

    async preloadAssets() {
      const loadImg = (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null);
          img.src = src;
        });

      this.cutoutImages = await Promise.all(CUTOUT_PHOTOS.map((p) => loadImg(p.zineSrc)));
      for (const [key, svgMarkup] of Object.entries(STICKER_SVGS)) {
        const encoded = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgMarkup);
        this.stickerImages[key] = await loadImg(encoded);
      }
    }

    setPhoto(idx) {
      this.state.photoIndex = idx;
      this.render();
    }
    setPalette(idx) {
      this.state.paletteIndex = idx;
      this.render();
    }
    setWords(top, bottom, script) {
      if (typeof top === "string") this.state.topWord = top.toUpperCase() || "SUGAR";
      if (typeof bottom === "string") this.state.bottomWord = bottom.toUpperCase() || "CRUSH";
      if (typeof script === "string") this.state.scriptText = script;
      this.render();
    }
    addSticker(type) {
      sfx.play("pop");
      const defaultSize = type === "pixelHeart" ? 56 : type === "patch" ? 165 : 145;
      this.placedStickers.push({
        type,
        x: this.W * (0.28 + Math.random() * 0.44),
        y: this.H * (0.25 + Math.random() * 0.48),
        size: defaultSize,
        rot: (Math.random() - 0.5) * 0.35
      });
      this.state.selectedItem = this.placedStickers.length - 1;
      this.render();
    }
    removeSelectedSticker() {
      if (typeof this.state.selectedItem === "number") {
        this.placedStickers.splice(this.state.selectedItem, 1);
        this.state.selectedItem = null;
        sfx.play("peel");
        this.render();
      } else {
        this.toast("KLIK STIKER DI KANVAS DULU UNTUK MENGHAPUS!");
      }
    }
    resetLayout() {
      sfx.play("peel");
      this.state.modelX = this.W * 0.5;
      this.state.modelY = this.H * 0.99;
      this.state.modelScale = 0.92;
      this.placedStickers = [
        { type: "bow", x: 505, y: 185, size: 138, rot: 0.26 },
        { type: "naruto", x: 745, y: 650, size: 168, rot: 0.1 },
        { type: "pixelHeart", x: 95, y: 660, size: 46, rot: 0 },
        { type: "pixelHeart", x: 146, y: 660, size: 46, rot: 0 },
        { type: "pixelHeart", x: 197, y: 660, size: 46, rot: 0 }
      ];
      this.state.selectedItem = null;
      this.render();
    }

    bindEvents() {
      const getPos = (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
          x: ((clientX - rect.left) / rect.width) * this.W,
          y: ((clientY - rect.top) / rect.height) * this.H
        };
      };

      const onDown = (e) => {
        const pos = getPos(e);
        for (let i = this.placedStickers.length - 1; i >= 0; i--) {
          const s = this.placedStickers[i];
          const half = s.size * 0.52;
          if (Math.abs(pos.x - s.x) <= half && Math.abs(pos.y - s.y) <= half) {
            this.dragging = { kind: "sticker", index: i };
            this.state.selectedItem = i;
            this.dragOffset = { x: pos.x - s.x, y: pos.y - s.y };
            sfx.play("click");
            this.render();
            e.preventDefault();
            return;
          }
        }
        this.dragging = { kind: "model" };
        this.state.selectedItem = "model";
        this.dragOffset = { x: pos.x - this.state.modelX, y: pos.y - this.state.modelY };
        this.render();
      };

      const onMove = (e) => {
        if (!this.dragging) return;
        e.preventDefault();
        const pos = getPos(e);
        if (this.dragging.kind === "sticker") {
          const s = this.placedStickers[this.dragging.index];
          s.x = Math.max(30, Math.min(this.W - 30, pos.x - this.dragOffset.x));
          s.y = Math.max(30, Math.min(this.H - 30, pos.y - this.dragOffset.y));
        } else if (this.dragging.kind === "model") {
          this.state.modelX = Math.max(120, Math.min(this.W - 120, pos.x - this.dragOffset.x));
          this.state.modelY = Math.max(400, Math.min(this.H + 120, pos.y - this.dragOffset.y));
        }
        this.render();
      };

      const onUp = () => { this.dragging = null; };

      this.canvas.addEventListener("mousedown", onDown);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
      this.canvas.addEventListener("touchstart", onDown, { passive: false });
      window.addEventListener("touchmove", onMove, { passive: false });
      window.addEventListener("touchend", onUp);

      this.canvas.addEventListener("wheel", (e) => {
        if (this.state.selectedItem === null) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 1.06 : 0.94;
        if (typeof this.state.selectedItem === "number") {
          const s = this.placedStickers[this.state.selectedItem];
          if (s) s.size = Math.max(32, Math.min(340, s.size * delta));
        } else if (this.state.selectedItem === "model") {
          this.state.modelScale = Math.max(0.55, Math.min(1.35, this.state.modelScale * delta));
        }
        this.render();
      }, { passive: false });
    }

    render(forExport = false) {
      const ctx = this.ctx;
      const W = this.W;
      const H = this.H;
      const pal = THEME_PALETTES[this.state.paletteIndex] || THEME_PALETTES[0];

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#0B0B0D";
      ctx.fillRect(0, 0, W, H);

      const pad = 18;
      const innerW = W - pad * 2;
      const innerH = H - pad * 2;

      ctx.save();
      ctx.beginPath();
      ctx.rect(pad, pad, innerW, innerH);
      ctx.clip();

      const grad = ctx.createRadialGradient(W * 0.5, H * 0.42, 40, W * 0.5, H * 0.5, H * 0.72);
      grad.addColorStop(0, pal.bright);
      grad.addColorStop(0.58, pal.primary);
      grad.addColorStop(1, pal.deep);
      ctx.fillStyle = grad;
      ctx.fillRect(pad, pad, innerW, innerH);

      if (this.state.halftone) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.11)";
        for (let y = pad; y < H - pad; y += 8) {
          for (let x = pad + ((y / 8) % 2) * 4; x < W - pad; x += 8) {
            ctx.fillRect(x, y, 2, 2);
          }
        }
      }

      const drawBlockWord = (word, yPos) => {
        ctx.save();
        ctx.font = "900 245px Anton, Impact, 'Arial Black', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        const metrics = ctx.measureText(word);
        const targetW = innerW - 44;
        const scaleX = metrics.width > 0 ? Math.min(1.08, targetW / metrics.width) : 1;
        ctx.translate(W * 0.5, yPos);
        ctx.scale(scaleX, 1.24);

        ctx.fillStyle = pal.extrude;
        for (let step = 10; step >= 2; step -= 2) {
          ctx.fillText(word, -step / scaleX, step * 0.85);
        }
        ctx.fillStyle = pal.headline;
        ctx.fillText(word, 0, 0);
        ctx.restore();
      };

      drawBlockWord(this.state.topWord, 36);
      drawBlockWord(this.state.bottomWord, 336);

      if (this.state.scriptText.trim()) {
        ctx.save();
        ctx.font = "700 106px 'Permanent Marker', 'Segoe Script', cursive";
        ctx.fillStyle = pal.script;
        ctx.shadowColor = "rgba(0,0,0,0.28)";
        ctx.shadowOffsetX = -2;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 4;

        const parts = this.state.scriptText.trim().split(/\s+/);
        const leftPart = parts[0] || "";
        const rightPart = parts.slice(1).join(" ") || "";

        ctx.save();
        ctx.translate(W * 0.21, H * 0.37);
        ctx.rotate(-0.22);
        ctx.textAlign = "center";
        ctx.fillText(leftPart, 0, 0);
        ctx.restore();

        if (rightPart) {
          ctx.save();
          ctx.translate(W * 0.80, H * 0.27);
          ctx.rotate(-0.16);
          ctx.textAlign = "center";
          ctx.fillText(rightPart, 0, 0);
          ctx.restore();
        }
        ctx.restore();
      }

      const heroImg = this.cutoutImages[this.state.photoIndex];
      if (heroImg && heroImg.width) {
        const targetH = H * 0.78 * this.state.modelScale;
        const ratio = heroImg.width / heroImg.height;
        const targetW = targetH * ratio;
        const drawX = this.state.modelX - targetW / 2;
        const drawY = this.state.modelY - targetH;

        ctx.save();
        ctx.shadowColor = "rgba(0, 14, 38, 0.52)";
        ctx.shadowOffsetX = -7;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 18;
        ctx.drawImage(heroImg, drawX, drawY, targetW, targetH);
        ctx.restore();
      }

      this.placedStickers.forEach((s, idx) => {
        const img = this.stickerImages[s.type];
        if (!img) return;
        const aspect = img.width && img.height ? img.width / img.height : 1;
        const sw = s.size;
        const sh = s.size / aspect;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot || 0);
        ctx.drawImage(img, -sw / 2, -sh / 2, sw, sh);
        if (!forExport && this.state.selectedItem === idx) {
          ctx.strokeStyle = "#FFF238";
          ctx.lineWidth = 3;
          ctx.setLineDash([7, 5]);
          ctx.strokeRect(-sw / 2 - 6, -sh / 2 - 6, sw + 12, sh + 12);
        }
        ctx.restore();
      });

      // Torn Barcode Label
      ctx.save();
      ctx.translate(32, H - 186);
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0,0,0,0.42)";
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 4;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(64, 0);
      ctx.lineTo(72, 16);
      ctx.lineTo(65, 34);
      ctx.lineTo(74, 55);
      ctx.lineTo(66, 78);
      ctx.lineTo(73, 102);
      ctx.lineTo(64, 124);
      ctx.lineTo(71, 146);
      ctx.lineTo(0, 146);
      ctx.closePath();
      ctx.fill();
      ctx.shadowColor = "transparent";

      ctx.fillStyle = "#0B0B0D";
      const heights = [3, 1.5, 4, 2, 1.5, 5, 2, 3, 1.5, 4, 2, 3.5, 1.5, 2.5, 4, 1.5, 3, 2, 4.5, 2];
      let by = 14;
      heights.forEach((bh) => {
        ctx.fillRect(20, by, 40, bh);
        by += bh + 3.2;
      });
      ctx.save();
      ctx.translate(14, 134);
      ctx.rotate(-Math.PI / 2);
      ctx.font = "bold 11px monospace";
      ctx.fillText("3 25270 73250 6", 0, 0);
      ctx.restore();
      ctx.restore();

      // Year & ARC
      ctx.save();
      ctx.font = "italic 900 34px 'Permanent Marker', sans-serif";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";
      ctx.shadowColor = "#0B0B0D";
      ctx.shadowOffsetX = -3;
      ctx.shadowOffsetY = 3;
      ctx.fillText(this.state.yearText, W * 0.51, H - 36);
      ctx.restore();

      if (this.stickerImages.arcLogo) {
        ctx.drawImage(this.stickerImages.arcLogo, W - 148, H - 72, 114, 38);
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(pad + 1, pad + 1, innerW - 2, innerH - 2);
      ctx.restore();
    }

    exportPNG() {
      sfx.play("heart");
      try {
        this.render(true);
        const dataUrl = this.canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `SUGAR-CRUSH-POSTER-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
        this.render(false);
        this.toast("POSTER PNG BERHASIL DIUNDUH!");
      } catch (_) {
        this.render(false);
        this.toast("BUKA LEWAT START_WEB.BAT (LOCALHOST) UNTUK EXPORT PNG!");
      }
    }
  }

  // ------------------------------------------------------------
  // 4. BOOTSTRAP UI CONTROLLERS
  // ------------------------------------------------------------
  document.addEventListener("DOMContentLoaded", () => {
    let activeCoverIdx = 0;
    let activeHeadlineIdx = 0;
    let lockSugarCrush = true;
    let hypeCount = 2025;
    let cursorTrailOn = true;

    document.querySelectorAll("[data-sticker-svg]").forEach((el) => {
      const key = el.getAttribute("data-sticker-svg");
      if (STICKER_SVGS[key]) el.innerHTML = STICKER_SVGS[key];
    });

    const barcodeBarsContainer = document.getElementById("heroBarcodeBars");
    if (barcodeBarsContainer) {
      const pattern = [4, 2, 5, 2, 3, 6, 2, 3, 2, 5, 2, 4, 2, 3, 5, 2, 4, 2, 5, 3];
      barcodeBarsContainer.innerHTML = pattern
        .map((h) => `<span class="barcode-line" style="height:${h}px"></span>`)
        .join("");
    }

    const toastEl = document.getElementById("zineToast");
    let toastTimer = null;
    function showToast(msg) {
      if (!toastEl) return;
      toastEl.textContent = msg;
      toastEl.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2300);
    }

    function spawnHeartParticles(x, y, count = 7) {
      for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.className = "floating-particle";
        p.style.left = `${x - 14}px`;
        p.style.top = `${y - 14}px`;
        p.style.width = `${22 + Math.random() * 14}px`;
        p.style.setProperty("--tx", `${(Math.random() - 0.5) * 170}px`);
        p.style.setProperty("--ty", `${-60 - Math.random() * 130}px`);
        p.style.setProperty("--rot", `${(Math.random() - 0.5) * 70}deg`);
        p.innerHTML = STICKER_SVGS.pixelHeart;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 920);
      }
    }

    const flashEl = document.getElementById("cameraFlash");
    function triggerCameraFlash() {
      if (!flashEl) return;
      flashEl.classList.add("active");
      requestAnimationFrame(() => {
        setTimeout(() => flashEl.classList.remove("active"), 55);
      });
    }

    const heroImg = document.getElementById("heroCutoutImg");
    const heroWrapper = document.getElementById("heroCutoutWrapper");
    const topWordEl = document.getElementById("heroTopWord");
    const topExtrudeEl = document.getElementById("heroTopExtrude");
    const bottomWordEl = document.getElementById("heroBottomWord");
    const bottomExtrudeEl = document.getElementById("heroBottomExtrude");
    const scriptLeftEl = document.getElementById("heroScriptLeft");
    const scriptRightEl = document.getElementById("heroScriptRight");
    const heroBowEl = document.getElementById("heroStickerBow");
    const thumbDock = document.getElementById("poseThumbDock");

    function setHeroWords(top, bottom, sLeft, sRight) {
      if (topWordEl) topWordEl.textContent = top;
      if (topExtrudeEl) topExtrudeEl.textContent = top;
      if (bottomWordEl) bottomWordEl.textContent = bottom;
      if (bottomExtrudeEl) bottomExtrudeEl.textContent = bottom;
      if (scriptLeftEl) scriptLeftEl.textContent = sLeft;
      if (scriptRightEl) scriptRightEl.textContent = sRight;
    }

    function switchHeroPose(idx, withFlash = true) {
      if (idx < 0 || idx >= CUTOUT_PHOTOS.length) return;
      activeCoverIdx = idx;
      const item = CUTOUT_PHOTOS[idx];

      sfx.play("pop");
      if (withFlash) triggerCameraFlash();

      heroWrapper.classList.add("switching");
      setTimeout(() => {
        heroImg.src = item.zineSrc;
        heroImg.alt = item.title;
        if (!lockSugarCrush) {
          setHeroWords(item.coverTop, item.coverBottom, item.scriptLeft, item.scriptRight);
        }
        if (heroBowEl && !heroBowEl.dataset.userDragged) {
          heroBowEl.style.top = item.bowPos.top;
          heroBowEl.style.left = item.bowPos.left;
        }
        heroWrapper.classList.remove("switching");
      }, 170);

      document.querySelectorAll("#poseThumbDock .pose-thumb-btn").forEach((b, i) => {
        b.classList.toggle("active", i === idx);
      });
      showToast(`COVER STAR: ${item.title}`);
    }

    if (thumbDock) {
      thumbDock.innerHTML = CUTOUT_PHOTOS.map(
        (p, idx) => `
        <button class="pose-thumb-btn ${idx === activeCoverIdx ? "active" : ""}"
                data-pose-idx="${idx}" title="${p.title}" type="button">
          <img src="${p.zineSrc}" alt="${p.title}" />
          <span class="pose-num-badge">0${idx + 1}</span>
        </button>`
      ).join("");

      thumbDock.querySelectorAll(".pose-thumb-btn").forEach((btn) => {
        btn.addEventListener("click", () => switchHeroPose(Number(btn.dataset.poseIdx), true));
      });
    }

    heroImg?.addEventListener("click", (e) => {
      spawnHeartParticles(e.clientX, e.clientY, 5);
      switchHeroPose((activeCoverIdx + 1) % CUTOUT_PHOTOS.length, true);
    });

    document.getElementById("btnCycleHeadline")?.addEventListener("click", () => {
      sfx.play("click");
      activeHeadlineIdx = (activeHeadlineIdx + 1) % HEADLINE_PRESETS.length;
      const preset = HEADLINE_PRESETS[activeHeadlineIdx];
      lockSugarCrush = activeHeadlineIdx === 0;
      setHeroWords(preset.top, preset.bottom, preset.sLeft, preset.sRight);
      showToast(`HEADLINE: ${preset.top} ${preset.bottom}`);
    });

    let currentThemeIdx = 0;
    document.getElementById("btnCycleTheme")?.addEventListener("click", () => {
      sfx.play("pop");
      currentThemeIdx = (currentThemeIdx + 1) % THEME_PALETTES.length;
      const pal = THEME_PALETTES[currentThemeIdx];
      const root = document.documentElement;
      root.style.setProperty("--canvas-primary", pal.primary);
      root.style.setProperty("--canvas-bright", pal.bright);
      root.style.setProperty("--canvas-deep", pal.deep);
      root.style.setProperty("--headline-fill", pal.headline);
      root.style.setProperty("--headline-shadow", pal.extrude);
      root.style.setProperty("--script-color", pal.script);
      showToast(`TEMA WARNA: ${pal.name}`);
    });

    const posterFrame = document.getElementById("heroPosterFrame");
    const wallSvg = document.querySelector(".hero-wall-svg");
    if (posterFrame) {
      posterFrame.addEventListener("mousemove", (e) => {
        const rect = posterFrame.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        if (wallSvg) wallSvg.style.transform = `translate(${nx * -12}px, ${ny * -8}px)`;
        if (heroImg) heroImg.style.transform = `translate(${nx * 16}px, ${ny * 8}px)`;
      });
      posterFrame.addEventListener("mouseleave", () => {
        if (wallSvg) wallSvg.style.transform = "translate(0, 0)";
        if (heroImg) heroImg.style.transform = "translate(0, 0)";
      });
    }

    document.querySelectorAll(".cover-sticker").forEach((el) => {
      let dragging = false, startX = 0, startY = 0, origLeft = 0, origTop = 0;
      el.addEventListener("pointerdown", (e) => {
        dragging = true;
        el.setPointerCapture(e.pointerId);
        el.classList.add("dragging");
        el.dataset.userDragged = "true";
        sfx.play("peel");
        const parentRect = posterFrame.getBoundingClientRect();
        const rect = el.getBoundingClientRect();
        origLeft = rect.left - parentRect.left;
        origTop = rect.top - parentRect.top;
        startX = e.clientX;
        startY = e.clientY;
        e.preventDefault();
      });
      el.addEventListener("pointermove", (e) => {
        if (!dragging) return;
        const parentRect = posterFrame.getBoundingClientRect();
        el.style.left = `${((origLeft + (e.clientX - startX)) / parentRect.width) * 100}%`;
        el.style.top = `${((origTop + (e.clientY - startY)) / parentRect.height) * 100}%`;
        el.style.right = "auto";
      });
      el.addEventListener("pointerup", () => {
        if (!dragging) return;
        dragging = false;
        el.classList.remove("dragging");
        sfx.play("pop");
      });
    });

    document.getElementById("btnResetStickers")?.addEventListener("click", () => {
      sfx.play("peel");
      const item = CUTOUT_PHOTOS[activeCoverIdx];
      if (heroBowEl) {
        delete heroBowEl.dataset.userDragged;
        heroBowEl.style.top = item.bowPos.top;
        heroBowEl.style.left = item.bowPos.left;
        heroBowEl.style.right = "auto";
      }
      const narutoEl = document.getElementById("heroStickerNaruto");
      if (narutoEl) {
        narutoEl.style.top = "50%";
        narutoEl.style.right = "11%";
        narutoEl.style.left = "auto";
      }
      showToast("POSISI STIKER DIRESET!");
    });

    const heartsRow = document.getElementById("pixelHeartsRow");
    const hypeValueEl = document.getElementById("hypeCountVal");
    heartsRow?.addEventListener("click", (e) => {
      hypeCount += 10;
      if (hypeValueEl) hypeValueEl.textContent = hypeCount;
      sfx.play("heart");
      spawnHeartParticles(e.clientX, e.clientY, 9);
      heartsRow.querySelectorAll(".pixel-heart-item").forEach((h, idx) => {
        h.classList.remove("pulse");
        setTimeout(() => h.classList.add("pulse"), idx * 55);
      });
      showToast(`SUGAR RUSH +10! (${hypeCount} HP)`);
    });

    const barcodeCard = document.getElementById("heroBarcodeCard");
    barcodeCard?.addEventListener("click", () => {
      barcodeCard.classList.remove("scanning");
      void barcodeCard.offsetWidth;
      barcodeCard.classList.add("scanning");
      sfx.play("scan");
      showToast("SCAN OK // EDITION #3-25270-ARC // VERIFIED");
    });

    const modalBackdrop = document.getElementById("inspectModal");
    const modalImg = document.getElementById("modalCutoutImg");
    const modalBgWord = document.getElementById("modalBgWord");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalOutfit = document.getElementById("modalOutfit");
    const modalCamera = document.getElementById("modalCamera");
    const btnToggleBorderMode = document.getElementById("btnModalToggleBorder");
    let modalIdx = 0;
    let modalShowZineBorder = true;

    function openInspectModal(idx) {
      modalIdx = idx;
      modalShowZineBorder = true;
      const item = CUTOUT_PHOTOS[idx];
      sfx.play("pop");
      modalImg.src = item.zineSrc;
      modalBgWord.textContent = item.cardBgWord;
      modalTitle.textContent = item.title;
      modalDesc.textContent = item.desc;
      modalOutfit.textContent = item.outfit;
      modalCamera.textContent = item.camera;
      if (btnToggleBorderMode) btnToggleBorderMode.textContent = "MODE: WHITE DIE-CUT STICKER";
      modalBackdrop.classList.add("open");
    }

    const lookbookGrid = document.getElementById("lookbookGrid");
    if (lookbookGrid) {
      lookbookGrid.innerHTML = CUTOUT_PHOTOS.map(
        (item, idx) => `
        <article class="zine-photo-card ${item.featured ? "featured-wide" : ""}" data-card-idx="${idx}">
          <span class="card-issue-pill">CUTOUT #0${idx + 1}</span>
          <div class="card-bg-word">${item.cardBgWord}</div>
          <div class="card-script-tag">${item.cardScript}</div>
          <div class="card-cutout-viewport">
            <img src="${item.zineSrc}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="card-corner-sticker">${STICKER_SVGS[item.stickerAccent] || STICKER_SVGS.bow}</div>
          <div class="card-info-footer">
            <div class="card-title-row">
              <h3 class="card-title">${item.title}</h3>
              <span class="card-mood-chip">${item.mood}</span>
            </div>
            <p class="card-desc">${item.desc}</p>
            <div class="card-actions-row">
              <button class="btn-card-action btn-make-cover" data-idx="${idx}" type="button">★ JADIKAN COVER</button>
              <button class="btn-card-action secondary btn-open-modal" data-idx="${idx}" type="button">INSPECT</button>
            </div>
          </div>
        </article>`
      ).join("");

      lookbookGrid.querySelectorAll(".btn-make-cover").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          spawnHeartParticles(e.clientX, e.clientY, 6);
          switchHeroPose(Number(btn.dataset.idx), true);
          document.getElementById("coverSection")?.scrollIntoView({ behavior: "smooth" });
        });
      });

      lookbookGrid.querySelectorAll(".btn-open-modal").forEach((btn) => {
        btn.addEventListener("click", () => openInspectModal(Number(btn.dataset.idx)));
      });
    }

    document.querySelectorAll("[data-fx-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        sfx.play("click");
        const mode = btn.getAttribute("data-fx-mode");
        document.body.setAttribute("data-cutout-fx", mode);
        document.querySelectorAll("[data-fx-mode]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        showToast(`EFEK CETAK FOTO: ${mode.toUpperCase()}`);
      });
    });

    document.getElementById("btnCloseModal")?.addEventListener("click", () => {
      sfx.play("click");
      modalBackdrop.classList.remove("open");
    });
    modalBackdrop?.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove("open");
    });
    btnToggleBorderMode?.addEventListener("click", () => {
      sfx.play("peel");
      modalShowZineBorder = !modalShowZineBorder;
      const item = CUTOUT_PHOTOS[modalIdx];
      modalImg.src = modalShowZineBorder ? item.zineSrc : item.cleanSrc;
      btnToggleBorderMode.textContent = modalShowZineBorder
        ? "MODE: WHITE DIE-CUT STICKER"
        : "MODE: CLEAN TRANSPARENT CUTOUT";
    });

    const studio = new PosterStudio("posterCanvas", showToast);

    const studioPhotoRow = document.getElementById("studioPhotoChoices");
    if (studioPhotoRow) {
      studioPhotoRow.innerHTML = CUTOUT_PHOTOS.map(
        (p, idx) => `
        <button class="pose-thumb-btn ${idx === 0 ? "active" : ""}" data-studio-photo="${idx}" title="${p.title}" type="button">
          <img src="${p.zineSrc}" alt="${p.title}" />
          <span class="pose-num-badge">0${idx + 1}</span>
        </button>`
      ).join("");
      studioPhotoRow.querySelectorAll("[data-studio-photo]").forEach((btn) => {
        btn.addEventListener("click", () => {
          sfx.play("pop");
          const idx = Number(btn.dataset.studioPhoto);
          studio.setPhoto(idx);
          studioPhotoRow.querySelectorAll("[data-studio-photo]").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });
    }

    const studioSwatches = document.getElementById("studioPaletteSwatches");
    if (studioSwatches) {
      studioSwatches.innerHTML = THEME_PALETTES.map(
        (pal, idx) => `
        <button class="swatch-btn ${idx === 0 ? "active" : ""}" data-studio-pal="${idx}" type="button"
                style="background:${pal.primary}; color:${pal.headline}; text-shadow:-2px 2px 0 ${pal.extrude}">
          ${pal.name}
        </button>`
      ).join("");
      studioSwatches.querySelectorAll("[data-studio-pal]").forEach((btn) => {
        btn.addEventListener("click", () => {
          sfx.play("click");
          const idx = Number(btn.dataset.studioPal);
          studio.setPalette(idx);
          studioSwatches.querySelectorAll("[data-studio-pal]").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });
    }

    const inpTop = document.getElementById("inpStudioTop");
    const inpBottom = document.getElementById("inpStudioBottom");
    const inpScript = document.getElementById("inpStudioScript");
    [inpTop, inpBottom, inpScript].forEach((inp) => {
      inp?.addEventListener("input", () => studio.setWords(inpTop.value, inpBottom.value, inpScript.value));
    });

    document.querySelectorAll("[data-add-sticker]").forEach((btn) => {
      btn.addEventListener("click", () => studio.addSticker(btn.getAttribute("data-add-sticker")));
    });

    document.getElementById("btnDeleteSticker")?.addEventListener("click", () => studio.removeSelectedSticker());
    document.getElementById("btnResetStudio")?.addEventListener("click", () => {
      studio.resetLayout();
      showToast("KANVAS STUDIO DIRESET!");
    });
    document.getElementById("btnExportPoster")?.addEventListener("click", () => studio.exportPNG());

    document.getElementById("btnModalSendStudio")?.addEventListener("click", () => {
      modalBackdrop.classList.remove("open");
      studio.setPhoto(modalIdx);
      document.querySelectorAll("[data-studio-photo]").forEach((b, i) => b.classList.toggle("active", i === modalIdx));
      document.getElementById("studioSection")?.scrollIntoView({ behavior: "smooth" });
      showToast("FOTO DIKIRIM KE POSTER STUDIO!");
    });

    const btnToggleSfx = document.getElementById("btnToggleSfx");
    btnToggleSfx?.addEventListener("click", () => {
      sfx.enabled = !sfx.enabled;
      btnToggleSfx.classList.toggle("muted", !sfx.enabled);
      btnToggleSfx.textContent = sfx.enabled ? "SFX: ON" : "SFX: OFF";
      if (sfx.enabled) sfx.play("pop");
    });

    const btnToggleTrail = document.getElementById("btnToggleTrail");
    btnToggleTrail?.addEventListener("click", () => {
      cursorTrailOn = !cursorTrailOn;
      sfx.play("click");
      btnToggleTrail.classList.toggle("muted", !cursorTrailOn);
      btnToggleTrail.textContent = cursorTrailOn ? "TRAIL: ON" : "TRAIL: OFF";
    });

    let lastTrailTime = 0;
    window.addEventListener("mousemove", (e) => {
      if (!cursorTrailOn) return;
      const now = performance.now();
      if (now - lastTrailTime < 95) return;
      lastTrailTime = now;
      const dot = document.createElement("div");
      dot.className = "floating-particle";
      dot.style.left = `${e.clientX - 7}px`;
      dot.style.top = `${e.clientY - 7}px`;
      dot.style.width = "14px";
      dot.style.setProperty("--tx", `${(Math.random() - 0.5) * 28}px`);
      dot.style.setProperty("--ty", `${-18 - Math.random() * 24}px`);
      dot.style.setProperty("--rot", `${(Math.random() - 0.5) * 40}deg`);
      dot.innerHTML = STICKER_SVGS.pixelHeart;
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 650);
    });

    const navLinks = document.querySelectorAll(".nav-menu .menu-btn[href^='#']");
    const sections = ["coverSection", "lookbookSection", "studioSection"].map((id) => document.getElementById(id));
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY + 240;
      sections.forEach((sec, idx) => {
        if (!sec) return;
        if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
          navLinks.forEach((l) => l.classList.remove("active"));
          navLinks[idx]?.classList.add("active");
        }
      });
    });
  });
})();
