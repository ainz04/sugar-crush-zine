// ============================================================
// SUGAR CRUSH ZINE — 5 User Photos Cutout Metadata & Presets
// ============================================================

export const CUTOUT_PHOTOS = [
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
    bowPos: { top: "9%", left: "53%", rotate: 16 },
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
    bowPos: { top: "7%", left: "51%", rotate: 14 },
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
    bowPos: { top: "13%", left: "52%", rotate: 18 },
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
    bowPos: { top: "11%", left: "51%", rotate: 15 },
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
    bowPos: { top: "8%", left: "50%", rotate: 14 },
    outfit: "Tactical Utility Vest + Cargo Shorts",
    camera: "Daylight Action Cutout",
    desc: "Rompi lapangan berpatch Merah-Putih dengan cangkul kayu di pundak bak protagonis manga aksi.",
    featured: false,
    stickerAccent: "starburst"
  }
];

export const HEADLINE_PRESETS = [
  { top: "SUGAR", bottom: "CRUSH", sLeft: "Sug", sRight: "sh", label: "SUGAR CRUSH (REF)" },
  { top: "MAIN", bottom: "CHAR", sLeft: "Real", sRight: "one", label: "MAIN CHAR" },
  { top: "HYPER", bottom: "RUSH", sLeft: "Too", sRight: "cool", label: "HYPER RUSH" },
  { top: "NO", bottom: "PHOTOS", sLeft: "VIP", sRight: "only", label: "NO PHOTOS" }
];

export const THEME_PALETTES = [
  {
    id: "sugar-blue",
    name: "COBALT ZINE",
    primary: "#0273B5",
    bright: "#0588D4",
    deep: "#014B80",
    headline: "#FFF238",
    extrude: "#B81218",
    script: "#DC1B22"
  },
  {
    id: "racing-red",
    name: "RACING RED",
    primary: "#B9151B",
    bright: "#D91E26",
    deep: "#78090E",
    headline: "#FFF238",
    extrude: "#0B0B0D",
    script: "#FFFFFF"
  },
  {
    id: "cyber-teal",
    name: "EMERALD POP",
    primary: "#04786E",
    bright: "#08998D",
    deep: "#024943",
    headline: "#FFF238",
    extrude: "#C8181E",
    script: "#FF3B47"
  },
  {
    id: "shibuya-ink",
    name: "SHIBUYA INK",
    primary: "#181924",
    bright: "#25283B",
    deep: "#0B0C12",
    headline: "#FFF238",
    extrude: "#DC1B22",
    script: "#FF4D6D"
  }
];
