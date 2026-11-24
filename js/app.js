// ============================================================
// SUGAR CRUSH ZINE — Main Interactive Controller
// ============================================================

import { CUTOUT_PHOTOS, HEADLINE_PRESETS, THEME_PALETTES } from "./data.js";
import { STICKER_SVGS, sfx } from "./stickers.js";
import { PosterStudio } from "./studio.js";

document.addEventListener("DOMContentLoaded", () => {
  let activeCoverIdx = 0;
  let activeHeadlineIdx = 0;
  let lockSugarCrush = true; // Keep classic SUGAR CRUSH on load just like reference!
  let hypeCount = 2025;
  let cursorTrailOn = true;

  // Inject SVG Stickers into Static Slots
  document.querySelectorAll("[data-sticker-svg]").forEach((el) => {
    const key = el.getAttribute("data-sticker-svg");
    if (STICKER_SVGS[key]) el.innerHTML = STICKER_SVGS[key];
  });

  // Generate Barcode Bars in Hero Torn Sticker
  const barcodeBarsContainer = document.getElementById("heroBarcodeBars");
  if (barcodeBarsContainer) {
    const pattern = [4, 2, 5, 2, 3, 6, 2, 3, 2, 5, 2, 4, 2, 3, 5, 2, 4, 2, 5, 3];
    barcodeBarsContainer.innerHTML = pattern
      .map((h) => `<span class="barcode-line" style="height:${h}px"></span>`)
      .join("");
  }

  // Toast Helper
  const toastEl = document.getElementById("zineToast");
  let toastTimer = null;
  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2300);
  }

  // Particle Fountain Helper
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

  // Camera Flash Helper
  const flashEl = document.getElementById("cameraFlash");
  function triggerCameraFlash() {
    if (!flashEl) return;
    flashEl.classList.add("active");
    requestAnimationFrame(() => {
      setTimeout(() => flashEl.classList.remove("active"), 55);
    });
  }

  // ==========================================================
  // 1. HERO COVER POSE SWITCHER & PARALLAX
  // ==========================================================
  const heroImg = document.getElementById("heroCutoutImg");
  const heroWrapper = document.getElementById("heroCutoutWrapper");
  const topWordEl = document.getElementById("heroTopWord");
  const bottomWordEl = document.getElementById("heroBottomWord");
  const scriptLeftEl = document.getElementById("heroScriptLeft");
  const scriptRightEl = document.getElementById("heroScriptRight");
  const heroBowEl = document.getElementById("heroStickerBow");
  const thumbDock = document.getElementById("poseThumbDock");

  function renderPoseThumbs() {
    if (!thumbDock) return;
    thumbDock.innerHTML = CUTOUT_PHOTOS.map(
      (p, idx) => `
      <button class="pose-thumb-btn ${idx === activeCoverIdx ? "active" : ""}"
              data-pose-idx="${idx}"
              title="${p.title}">
        <img src="${p.zineSrc}" alt="${p.title}" loading="eager" />
        <span class="pose-num-badge">0${idx + 1}</span>
      </button>
    `
    ).join("");

    thumbDock.querySelectorAll(".pose-thumb-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.poseIdx);
        switchHeroPose(idx, true);
      });
    });
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
        topWordEl.textContent = item.coverTop;
        bottomWordEl.textContent = item.coverBottom;
        scriptLeftEl.textContent = item.scriptLeft;
        scriptRightEl.textContent = item.scriptRight;
      }

      // Reposition bow nicely if user hasn't manually dragged it
      if (heroBowEl && !heroBowEl.dataset.userDragged) {
        heroBowEl.style.top = item.bowPos.top;
        heroBowEl.style.left = item.bowPos.left;
      }

      heroWrapper.classList.remove("switching");
    }, 170);

    document.querySelectorAll(".pose-thumb-btn").forEach((b, i) => {
      b.classList.toggle("active", i === idx);
    });
    showToast(`COVER STAR: ${item.title}`);
  }

  renderPoseThumbs();

  // Clicking Hero Cutout cycles to next pose!
  if (heroImg) {
    heroImg.addEventListener("click", (e) => {
      spawnHeartParticles(e.clientX, e.clientY, 5);
      switchHeroPose((activeCoverIdx + 1) % CUTOUT_PHOTOS.length, true);
    });
  }

  // Headline Cycle Button
  const cycleHeadlineBtn = document.getElementById("btnCycleHeadline");
  if (cycleHeadlineBtn) {
    cycleHeadlineBtn.addEventListener("click", () => {
      sfx.play("click");
      activeHeadlineIdx = (activeHeadlineIdx + 1) % HEADLINE_PRESETS.length;
      const preset = HEADLINE_PRESETS[activeHeadlineIdx];
      lockSugarCrush = activeHeadlineIdx === 0;
      topWordEl.textContent = preset.top;
      bottomWordEl.textContent = preset.bottom;
      scriptLeftEl.textContent = preset.sLeft;
      scriptRightEl.textContent = preset.sRight;
      showToast(`HEADLINE: ${preset.top} ${preset.bottom}`);
    });
  }

  // Theme Switcher Button in Hero Dock
  let currentThemeIdx = 0;
  const btnCycleTheme = document.getElementById("btnCycleTheme");
  function applyGlobalPalette(pal) {
    const root = document.documentElement;
    root.style.setProperty("--canvas-primary", pal.primary);
    root.style.setProperty("--canvas-bright", pal.bright);
    root.style.setProperty("--canvas-deep", pal.deep);
    root.style.setProperty("--headline-fill", pal.headline);
    root.style.setProperty("--headline-shadow", pal.extrude);
    root.style.setProperty("--script-color", pal.script);
  }

  if (btnCycleTheme) {
    btnCycleTheme.addEventListener("click", () => {
      sfx.play("pop");
      currentThemeIdx = (currentThemeIdx + 1) % THEME_PALETTES.length;
      const pal = THEME_PALETTES[currentThemeIdx];
      applyGlobalPalette(pal);
      showToast(`TEMA WARNA: ${pal.name}`);
    });
  }

  // 3D Parallax on Hero Poster Frame
  const posterFrame = document.getElementById("heroPosterFrame");
  if (posterFrame) {
    posterFrame.addEventListener("mousemove", (e) => {
      const rect = posterFrame.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      if (topWordEl) {
        topWordEl.style.transform = `scaleY(1.16) translate(${nx * -14}px, ${ny * -8}px)`;
      }
      if (bottomWordEl) {
        bottomWordEl.style.transform = `scaleY(1.16) translate(${nx * -10}px, ${ny * -6}px)`;
      }
      if (heroImg) {
        heroImg.style.transform = `translate(${nx * 16}px, ${ny * 8}px)`;
      }
    });

    posterFrame.addEventListener("mouseleave", () => {
      if (topWordEl) topWordEl.style.transform = "scaleY(1.16)";
      if (bottomWordEl) bottomWordEl.style.transform = "scaleY(1.16)";
      if (heroImg) heroImg.style.transform = "translate(0, 0)";
    });
  }

  // ==========================================================
  // 2. DRAGGABLE HERO STICKERS (Bow, Naruto, Bonus Stickers)
  // ==========================================================
  function makeDraggableSticker(el) {
    let dragging = false;
    let startX = 0,
      startY = 0,
      origLeft = 0,
      origTop = 0;

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
      const nx = origLeft + (e.clientX - startX);
      const ny = origTop + (e.clientY - startY);
      el.style.left = `${(nx / parentRect.width) * 100}%`;
      el.style.top = `${(ny / parentRect.height) * 100}%`;
      el.style.right = "auto";
    });

    el.addEventListener("pointerup", () => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove("dragging");
      sfx.play("pop");
    });
  }

  document.querySelectorAll(".cover-sticker").forEach(makeDraggableSticker);

  const btnResetHeroStickers = document.getElementById("btnResetStickers");
  if (btnResetHeroStickers) {
    btnResetHeroStickers.addEventListener("click", () => {
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
  }

  // ==========================================================
  // 3. PIXEL HEARTS HYPE METER & TORN BARCODE SCANNER
  // ==========================================================
  const heartsRow = document.getElementById("pixelHeartsRow");
  const hypeValueEl = document.getElementById("hypeCountVal");
  if (heartsRow) {
    heartsRow.addEventListener("click", (e) => {
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
  }

  const barcodeCard = document.getElementById("heroBarcodeCard");
  if (barcodeCard) {
    barcodeCard.addEventListener("click", () => {
      barcodeCard.classList.remove("scanning");
      void barcodeCard.offsetWidth;
      barcodeCard.classList.add("scanning");
      sfx.play("scan");
      showToast("SCAN OK // EDITION #3-25270-ARC // VERIFIED");
    });
  }

  // ==========================================================
  // 4. LOOKBOOK SPREAD (ALL 5 BACKGROUND-REMOVED PHOTOS!)
  // ==========================================================
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
            <button class="btn-card-action btn-make-cover" data-idx="${idx}">
              ★ JADIKAN COVER
            </button>
            <button class="btn-card-action secondary btn-open-modal" data-idx="${idx}">
              INSPECT
            </button>
          </div>
        </div>
      </article>
    `
    ).join("");

    // Bind Make Cover & Inspect Modal buttons
    lookbookGrid.querySelectorAll(".btn-make-cover").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const idx = Number(btn.dataset.idx);
        spawnHeartParticles(e.clientX, e.clientY, 6);
        switchHeroPose(idx, true);
        document.getElementById("coverSection")?.scrollIntoView({ behavior: "smooth" });
      });
    });

    lookbookGrid.querySelectorAll(".btn-open-modal").forEach((btn) => {
      btn.addEventListener("click", () => {
        openInspectModal(Number(btn.dataset.idx));
      });
    });
  }

  // Cutout Print Filter Mode Pills
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

  // ==========================================================
  // 5. INSPECT MODAL (Switch Die-Cut Border vs Clean Alpha!)
  // ==========================================================
  const modalBackdrop = document.getElementById("inspectModal");
  const modalImg = document.getElementById("modalCutoutImg");
  const modalBgWord = document.getElementById("modalBgWord");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalOutfit = document.getElementById("modalOutfit");
  const modalCamera = document.getElementById("modalCamera");
  const btnToggleBorderMode = document.getElementById("btnModalToggleBorder");
  const btnModalSendStudio = document.getElementById("btnModalSendStudio");
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
    modalBackdrop.classList.add("open");
  }

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

  // ==========================================================
  // 6. INTERACTIVE POSTER STUDIO INIT & CONTROLS
  // ==========================================================
  const studio = new PosterStudio("posterCanvas", showToast);

  // Studio Photo Selector
  const studioPhotoRow = document.getElementById("studioPhotoChoices");
  if (studioPhotoRow) {
    studioPhotoRow.innerHTML = CUTOUT_PHOTOS.map(
      (p, idx) => `
      <button class="pose-thumb-btn ${idx === 0 ? "active" : ""}" data-studio-photo="${idx}" title="${p.title}">
        <img src="${p.zineSrc}" alt="${p.title}" />
        <span class="pose-num-badge">0${idx + 1}</span>
      </button>
    `
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

  // Studio Palette Swatches
  const studioSwatches = document.getElementById("studioPaletteSwatches");
  if (studioSwatches) {
    studioSwatches.innerHTML = THEME_PALETTES.map(
      (pal, idx) => `
      <button class="swatch-btn ${idx === 0 ? "active" : ""}"
              data-studio-pal="${idx}"
              style="background:${pal.primary}; color:${pal.headline}; text-shadow:-2px 2px 0 ${pal.extrude}">
        ${pal.name}
      </button>
    `
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

  // Studio Live Headline Inputs
  const inpTop = document.getElementById("inpStudioTop");
  const inpBottom = document.getElementById("inpStudioBottom");
  const inpScript = document.getElementById("inpStudioScript");
  [inpTop, inpBottom, inpScript].forEach((inp) => {
    inp?.addEventListener("input", () => {
      studio.setWords(inpTop.value, inpBottom.value, inpScript.value);
    });
  });

  // Studio Add Sticker Buttons
  document.querySelectorAll("[data-add-sticker]").forEach((btn) => {
    btn.addEventListener("click", () => {
      studio.addSticker(btn.getAttribute("data-add-sticker"));
    });
  });

  document.getElementById("btnDeleteSticker")?.addEventListener("click", () => {
    studio.removeSelectedSticker();
  });

  document.getElementById("btnResetStudio")?.addEventListener("click", () => {
    studio.resetLayout();
    showToast("KANVAS STUDIO DIRESET!");
  });

  document.getElementById("btnExportPoster")?.addEventListener("click", () => {
    studio.exportPNG();
  });

  btnModalSendStudio?.addEventListener("click", () => {
    modalBackdrop.classList.remove("open");
    studio.setPhoto(modalIdx);
    document.querySelectorAll("[data-studio-photo]").forEach((b, i) => {
      b.classList.toggle("active", i === modalIdx);
    });
    document.getElementById("studioSection")?.scrollIntoView({ behavior: "smooth" });
    showToast("FOTO DIKIRIM KE POSTER STUDIO!");
  });

  // ==========================================================
  // 7. NAVBAR SOUND FX, TRAIL & ACTIVE SCROLL SPY
  // ==========================================================
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

  // Tactile hover/click sound on all Zine Menu & Sugar Buttons
  document.querySelectorAll(".menu-btn, .btn-sugar").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      // Subtle tactile tick on hover if audio already unlocked
      if (sfx.ctx && sfx.ctx.state === "running" && sfx.enabled) {
        const now = sfx.ctx.currentTime;
        const osc = sfx.ctx.createOscillator();
        const g = sfx.ctx.createGain();
        osc.frequency.setValueAtTime(660, now);
        g.gain.setValueAtTime(0.022, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
        osc.connect(g);
        g.connect(sfx.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.03);
      }
    });
  });

  // Subtle Pixel Heart Cursor Sparkle Trail
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

  // Scroll Spy for Menu Buttons
  const navLinks = document.querySelectorAll(".nav-menu .menu-btn[href^='#']");
  const sections = ["coverSection", "lookbookSection", "studioSection"].map((id) =>
    document.getElementById(id)
  );
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
