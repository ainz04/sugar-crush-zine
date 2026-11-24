// ============================================================
// SUGAR CRUSH ZINE — Interactive HTML5 Canvas Poster Studio
// ============================================================

import { CUTOUT_PHOTOS, THEME_PALETTES } from "./data.js";
import { STICKER_SVGS, sfx } from "./stickers.js";

export class PosterStudio {
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
      selectedItem: null // 'model' or sticker index
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

    this.preloadAssets().then(() => {
      this.render();
    });
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

    this.cutoutImages = await Promise.all(
      CUTOUT_PHOTOS.map((p) => loadImg(p.zineSrc))
    );

    const svgEntries = Object.entries(STICKER_SVGS);
    for (const [key, svgMarkup] of svgEntries) {
      const blob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      this.stickerImages[key] = await loadImg(url);
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
    const jitterX = this.W * (0.28 + Math.random() * 0.44);
    const jitterY = this.H * (0.25 + Math.random() * 0.48);
    const defaultSize = type === "pixelHeart" ? 56 : type === "patch" ? 165 : 145;
    this.placedStickers.push({
      type,
      x: jitterX,
      y: jitterY,
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
      this.toast("PILIH STIKER DI KANVAS DULU!");
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
      // Check stickers top-most first
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
      // Otherwise drag central hero cutout
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

    const onUp = () => {
      this.dragging = null;
    };

    this.canvas.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    this.canvas.addEventListener("touchstart", onDown, { passive: false });
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);

    // Mouse wheel scales selected sticker or model
    this.canvas.addEventListener(
      "wheel",
      (e) => {
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
      },
      { passive: false }
    );
  }

  render(forExport = false) {
    const ctx = this.ctx;
    const W = this.W;
    const H = this.H;
    const pal = THEME_PALETTES[this.state.paletteIndex] || THEME_PALETTES[0];

    ctx.clearRect(0, 0, W, H);

    // 1. Outer Black Poster Frame
    ctx.fillStyle = "#0B0B0D";
    ctx.fillRect(0, 0, W, H);

    const pad = 18;
    const innerW = W - pad * 2;
    const innerH = H - pad * 2;

    ctx.save();
    ctx.beginPath();
    ctx.rect(pad, pad, innerW, innerH);
    ctx.clip();

    // 2. Radial Print Blue/Theme Background
    const grad = ctx.createRadialGradient(W * 0.5, H * 0.42, 40, W * 0.5, H * 0.5, H * 0.72);
    grad.addColorStop(0, pal.bright);
    grad.addColorStop(0.58, pal.primary);
    grad.addColorStop(1, pal.deep);
    ctx.fillStyle = grad;
    ctx.fillRect(pad, pad, innerW, innerH);

    // 3. Subtle Halftone Print Dots
    if (this.state.halftone) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.11)";
      for (let y = pad; y < H - pad; y += 8) {
        for (let x = pad + ((y / 8) % 2) * 4; x < W - pad; x += 8) {
          ctx.fillRect(x, y, 2, 2);
        }
      }
    }

    // 4. Giant Condensed Block Headline (SUGAR / CRUSH)
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

      // Hard Crimson 3D Extrusion Layers
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

    // 5. Red Marker Handwritten Script Overlay
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

    // 6. Central Cutout Subject (with White Magazine Die-Cut Border!)
    const heroImg = this.cutoutImages[this.state.photoIndex];
    if (heroImg) {
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

    // 7. Placed Stickers
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

    // 8. Bottom Left Torn White Barcode Label
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

    // Barcode lines
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

    // 9. Bottom Center "2025" & Bottom Right "ARC"
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

    // 10. Scuffed White Magazine Trim Border inside Black Frame
    ctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(pad + 1, pad + 1, innerW - 2, innerH - 2);

    ctx.restore();
  }

  exportPNG() {
    sfx.play("heart");
    this.render(true);
    const link = document.createElement("a");
    link.download = `SUGAR-CRUSH-POSTER-${Date.now()}.png`;
    link.href = this.canvas.toDataURL("image/png");
    link.click();
    this.render(false);
    this.toast("POSTER PNG BERHASIL DIUNDUH!");
  }
}
