// ============================================================
// SUGAR CRUSH ZINE — Authentic Reference Stickers & WebAudio FX
// ============================================================

export const STICKER_SVGS = {
  // 1. Kawaii Red Bow (Exact match to reference hair bow: chunky black outline + white die-cut border)
  bow: `<svg viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
    <filter id="bow-shadow" x="-15%" y="-15%" width="135%" height="140%">
      <feDropShadow dx="-2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.42"/>
    </filter>
    <g filter="url(#bow-shadow)">
      <!-- White die-cut sticker border -->
      <path d="M89 39C72 16 39 8 22 25C8 39 10 77 25 96C39 113 68 106 86 89C90 93 96 93 100 89C118 106 147 113 161 96C176 77 178 39 164 25C147 8 114 16 97 39C94 37 92 37 89 39Z"
        fill="#FFFFFF" stroke="#FFFFFF" stroke-width="16" stroke-linejoin="round"/>
      <!-- Left Loop -->
      <path d="M84 49C69 24 38 17 24 32C12 45 14 77 27 92C40 107 67 99 84 81Z"
        fill="#E81E25" stroke="#0B0B0D" stroke-width="8.5" stroke-linejoin="round"/>
      <!-- Right Loop -->
      <path d="M102 49C117 24 148 17 162 32C174 45 172 77 159 92C146 107 119 99 102 81Z"
        fill="#E81E25" stroke="#0B0B0D" stroke-width="8.5" stroke-linejoin="round"/>
      <!-- Inner Crease Dimples -->
      <path d="M68 57C58 51 48 52 42 58" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
      <path d="M68 73C59 76 50 75 44 70" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
      <path d="M118 57C128 51 138 52 144 58" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
      <path d="M118 73C127 76 136 75 142 70" stroke="#0B0B0D" stroke-width="7" stroke-linecap="round"/>
      <!-- Center Oval Knot -->
      <ellipse cx="93" cy="66" rx="19" ry="23" fill="#F0242C" stroke="#0B0B0D" stroke-width="8.5"/>
      <!-- Subtle Cute Highlight -->
      <ellipse cx="42" cy="40" rx="8" ry="4.5" transform="rotate(-22 42 40)" fill="#FF6B72" opacity="0.75"/>
      <ellipse cx="88" cy="54" rx="5" ry="3.5" transform="rotate(-15 88 54)" fill="#FF6B72" opacity="0.75"/>
    </g>
  </svg>`,

  // 2. Narutomaki Ramen Fishcake Swirl (Exact scalloped double-ring + pink spiral + white die-cut border)
  naruto: `<svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" class="sticker-svg">
    <filter id="naruto-shadow" x="-15%" y="-15%" width="135%" height="140%">
      <feDropShadow dx="-3" dy="5" stdDeviation="3.5" flood-color="#000000" flood-opacity="0.42"/>
    </filter>
    <g filter="url(#naruto-shadow)">
      <!-- White die-cut outer shell -->
      <path d="M90 14 C99 14,105 21,113 19 C122 17,130 22,135 29 C141 36,150 38,154 46 C158 55,164 62,163 71 C162 80,168 88,164 97 C160 105,163 115,156 122 C150 129,149 139,140 144 C132 148,128 157,118 159 C109 161,101 167,91 166 C82 165,73 168,65 163 C56 158,47 159,40 151 C34 144,25 141,21 132 C17 123,11 116,13 106 C15 97,10 88,15 79 C19 71,18 61,25 54 C31 47,34 37,43 33 C51 29,57 20,67 19 C76 18,82 14,90 14Z"
        fill="#FFFFFF" stroke="#FFFFFF" stroke-width="15" stroke-linejoin="round"/>
      <!-- Outer Scalloped Black Ring -->
      <path d="M90 18 C98 18,104 24,112 22 C120 20,128 25,133 32 C138 38,147 40,151 48 C154 56,160 63,159 71 C158 80,164 88,160 96 C156 104,159 113,152 120 C146 126,145 136,137 140 C129 144,125 153,116 155 C107 157,100 163,91 162 C82 161,74 164,66 159 C58 154,49 155,43 148 C37 141,28 138,25 129 C21 121,15 114,17 105 C19 96,14 88,19 79 C23 71,22 62,28 55 C34 49,37 39,45 35 C53 32,59 23,68 22 C77 21,83 18,90 18Z"
        fill="#FFFFFF" stroke="#0B0B0D" stroke-width="5.5" stroke-linejoin="round"/>
      <!-- Inner Scalloped Black Ring -->
      <path d="M90 29 C97 29,102 34,109 33 C116 31,123 35,127 41 C131 46,139 48,142 55 C145 62,150 67,149 74 C148 82,153 88,150 95 C146 102,149 110,143 116 C138 121,137 129,130 133 C123 136,120 144,112 145 C104 147,98 152,91 151 C83 150,76 153,69 149 C62 145,55 145,50 139 C45 133,37 131,34 123 C31 116,26 110,28 103 C30 95,25 88,29 81 C33 74,32 66,37 60 C42 55,45 47,52 44 C59 41,64 33,71 33 C79 32,84 29,90 29Z"
        fill="#FFFFFF" stroke="#0B0B0D" stroke-width="4.5" stroke-linejoin="round"/>
      <!-- Pink Ramen Spiral -->
      <path d="M90 90 C94 86, 100 88, 100 94 C100 103, 87 107, 80 100 C70 90,74 72,88 68 C106 62,121 77,118 96 C115 117,92 128,72 120 C52 111,48 84,61 65 C73 48,98 46,115 56"
        fill="none" stroke="#EB84B3" stroke-width="8.5" stroke-linecap="round"/>
    </g>
  </svg>`,

  // 3. Single 8-bit Pixel Heart (crisp pixel blocks matching reference 3-hearts row)
  pixelHeart: `<svg viewBox="0 0 13 12" shape-rendering="crispEdges" xmlns="http://www.w3.org/2000/svg" class="pixel-heart-svg">
    <!-- White Die-cut Pixel Halo -->
    <path fill="#FFFFFF" d="M2,0h3v1h3V0h3v1h1v1h1v4h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v-1H5v-1H4V9H3V8H2V7H1V6H0V2h1V1h1V0z"/>
    <!-- Black Pixel Outline -->
    <path fill="#0D0D0D" d="M2,1h3v1h1v1h1V2h1V1h3v1h1v4h-1v1h-1v1H9v1H8v1H7v1H6v-1H5V9H4V8H3V7H2V6H1V2h1V1z"/>
    <!-- Red Pixel Fill -->
    <path fill="#E81E25" d="M2,2h3v1h1v1h1V3h1V2h3v4h-1v1H9v1H8v1H7v1H6V9H5V8H4V7H3V6H2V2z"/>
    <!-- Darker Crimson Shading -->
    <path fill="#B81218" d="M10,3h1v3h-1v1H9v1H8v1H7v1H6V9h1V8h1V7h1V6h1V3z"/>
    <!-- White Specular Pixel Shine -->
    <rect x="3" y="3" width="1" height="1" fill="#FFFFFF"/>
    <rect x="2" y="4" width="1" height="1" fill="#FFFFFF"/>
  </svg>`,

  // 4. Racing Crew Yellow Woven Patch (inspired by the sleeve patch on the reference jacket!)
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

  // 5. Y2K Starburst Sticker
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

  // 6. Y2K Digicam Flash Sticker
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

  // 7. ARC Speed Italic Logo (bottom-right of reference poster)
  arcLogo: `<svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="arc-logo-svg">
    <g transform="skewX(-24) translate(20, 0)">
      <text x="4" y="38" fill="#FFFFFF" font-family="Impact, Anton, sans-serif" font-weight="900" font-size="40" letter-spacing="2">ARC</text>
      <rect x="2" y="23" width="76" height="3.2" fill="#0267A6"/>
    </g>
    <text x="114" y="14" fill="#FFFFFF" font-family="sans-serif" font-weight="700" font-size="7">TM</text>
  </svg>`
};

// Tactile Zine WebAudio Synth (Sticker Peel, Stamp Click, Laser Scan, Heart Pop)
class ZineSoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  play(type = 'pop') {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      if (type === 'pop' || type === 'click') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(type === 'pop' ? 520 : 340, now);
        osc.frequency.exponentialRampToValueAtTime(type === 'pop' ? 980 : 140, now + 0.075);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.085);
      } else if (type === 'heart') {
        [587.33, 880, 1174.66].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(freq, now + idx * 0.045);
          gain.gain.setValueAtTime(0.06, now + idx * 0.045);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.09);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now + idx * 0.045);
          osc.stop(now + idx * 0.045 + 0.095);
        });
      } else if (type === 'scan') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1480, now);
        osc.frequency.setValueAtTime(1960, now + 0.06);
        gain.gain.setValueAtTime(0.11, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.17);
      } else if (type === 'peel') {
        const bufferSize = this.ctx.sampleRate * 0.09;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }
        const noise = this.ctx.createBufferSource();
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
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
    } catch (_) {
      // Ignore audio errors when autoplay blocked
    }
  }
}

export const sfx = new ZineSoundEngine();
