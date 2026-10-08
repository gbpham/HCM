/* ==========================================================================
   MẬT MÃ TÔN GIÁO & CNXH - APP LOGIC & GAME ENGINE
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATASET: 6 RELIGIOUS HISTORICAL SITES & THEORY TOPICS
// --------------------------------------------------------------------------
const PUZZLE_LEVELS = [
  {
    id: 1,
    title: "Đôi Dép Bác Hồ - Rèn Luyện Đạo Đức",
    image: "./docs/CẦN KIỆM LIÊM CHÍNH.jpg",
    topic: "Xây dựng Đạo đức Cách mạng theo Tư tưởng HCM",
    mode: "swap",
    modeLabel: "🔄 Đổi vị trí (3x3)",
    sourceUrl: "https://vi.wikipedia.org/wiki/%C4%90%C3%B4i_d%C3%A9p_B%C3%A1c_H%E1%BB%93",
    desc: "Biểu tượng đôi dép cao su giản dị của Chủ tịch Hồ Chí Minh - minh chứng tiêu biểu cho phẩm chất Cần, Kiệm, Liêm, Chính, chí công vô tư.",
    question: "Phẩm chất đạo đức cách mạng cốt lõi theo Tư tưởng Hồ Chí Minh thể hiện qua biểu tượng Đôi dép cao su giản dị là gì?",
    options: [
      "Cần, Kiệm, Liêm, Chính",
      "Trung thực, Tự trọng, Dũng cảm",
      "Khiêm tốn, Tự tin, Sáng tạo",
      "Kỷ luật, Tiên phong, Đoàn kết"
    ],
    correctOption: 0,
    primaryKeyword: "CẦN KIỆM LIÊM CHÍNH",
    badge: "🏆 Biểu Tượng Cần Kiệm Liêm Chính",
    rewardDesc: "Huy Hiệu Vàng: Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh về Cần, Kiệm, Liêm, Chính.",
    flashcard: "📌 VẬN DỤNG TƯ TƯỜNG HỒ CHÍ MINH: 'Cần, Kiệm, Liêm, Chính, Chí công vô tư' là gốc của đạo đức cách mạng. Vận dụng trong giai đoạn hiện nay đòi hỏi mỗi cán bộ, đảng viên và người dân luôn giữ gìn lối sống trong sạch, tiết kiệm, khiêm tốn và tận tụy phục vụ nhân dân."
  },
  {
    id: 2,
    title: "Giá Trị Bộ Đội Cụ Hồ",
    image: "./docs/NÊU GƯƠNG.jpg",
    topic: "Phát huy Trách nhiệm Nêu gương Hiện nay",
    mode: "swap",
    modeLabel: "🔄 Đổi vị trí (3x3)",
    sourceUrl: "https://www.qdnd.vn/phong-chong-dien-bien-hoa-binh/de-gia-tri-bo-doi-cu-ho-ngay-cang-toa-sang-669371",
    desc: "Hình ảnh Bộ đội Cụ Hồ tỏa sáng qua nhiều thế hệ, đại diện cho kỷ luật, cống hiến và tinh thần tiên phong nêu gương sáng.",
    question: "Phương thức giáo dục đạo đức và hành động tiên phong của cán bộ, chiến sĩ và thanh niên theo tư tưởng Hồ Chí Minh trong giai đoạn hiện nay là gì?",
    options: [
      "Tuyên truyền lý thuyết",
      "Nêu gương",
      "Khen thưởng hành chính",
      "Phạt vi phạm kỷ luật"
    ],
    correctOption: 1,
    primaryKeyword: "NÊU GƯƠNG",
    badge: "⭐ Tinh Thần Nêu Gương",
    rewardDesc: "Huy Hiệu Bạc: Đại diện tinh thần tiên phong, trách nhiệm và nêu gương sáng trong học tập và công tác.",
    flashcard: "📌 VẬN DỤNG TƯ TƯỜNG HỒ CHÍ MINH: 'Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền'. Nêu gương là phương thức quan trọng hàng đầu trong xây dựng đạo đức, lối sống cho con người Việt Nam giai đoạn hiện nay."
  },
  {
    id: 3,
    title: "Văn Hóa Ứng Xử Trên Mạng",
    image: "./docs/VĂN HÓA MẠNG.jpg",
    topic: "Xây dựng Văn hóa Con người Thời đại Số",
    mode: "swap",
    modeLabel: "🔄 Đổi vị trí (3x3)",
    sourceUrl: "https://www.thanhuytphcm.vn/tin-tuc/-hi-hoa-van-hoa-ung-xu-tren-mang-xa-hoi-1491879789",
    desc: "Tranh biếm họa và tuyên truyền quy tắc ứng xử trên mạng xã hội, nhắc nhở công dân tham gia môi trường số văn minh và lành mạnh.",
    question: "Yếu tố cốt lõi trong xây dựng con người Việt Nam hiện nay nhằm ứng xử văn minh, tôn trọng và có trách nhiệm trên không gian mạng là gì?",
    options: [
      "Kỹ năng tin học cơ bản",
      "Tăng thời gian sử dụng internet",
      "Văn hóa mạng",
      "Sử dụng nhiều tài khoản ẩn danh"
    ],
    correctOption: 2,
    primaryKeyword: "VĂN HÓA MẠNG",
    badge: "🌐 Đại Sứ Văn Hóa Mạng",
    rewardDesc: "Huy Hiệu Vàng: Tiên phong ứng xử văn minh, tôn trọng pháp luật và lan tỏa năng lượng tích cực trên không gian mạng.",
    flashcard: "📌 VẬN DỤNG TƯ TƯỜNG HỒ CHÍ MINH: Xây dựng văn hóa con người Việt Nam giai đoạn hiện nay cần gắn liền với môi trường không gian mạng lành mạnh. Mỗi công dân cần ứng xử văn minh, tuân thủ pháp luật và lan tỏa những giá trị nhân văn trên không gian số."
  },
  {
    id: 4,
    title: "Công Trình Thanh Niên Tình Nguyện",
    image: "./docs/SỨC TRẺ TÌNH NGUYỆN.jpg",
    topic: "Phát huy Sức trẻ & Nguồn lực Con người",
    mode: "slide",
    modeLabel: "🧩 Trượt ô (3x3)",
    sourceUrl: "https://thanhdoanhaiphong.gov.vn/cong-trinh-thanh-nien-trong-cay-xanh-va-ve-tranh-tuong-co-dong-nd26071.html",
    desc: "Đoàn viên thanh niên hăng hái trồng cây xanh, vẽ tranh tường cổ động, đóng góp sức trẻ tình nguyện cho sự phát triển của đất nước.",
    question: "Tinh thần xung kích, cống hiến không quản ngại khó khăn của tuổi trẻ Việt Nam vì cộng đồng trong giai đoạn hiện nay thể hiện điều gì?",
    primaryKeyword: "SỨC TRẺ TÌNH NGUYỆN",
    keywords: [
      "SUC TRE TINH NGUYEN",
      "SỨC TRẺ TÌNH NGUYỆN",
      "SUC TRE THANH NIEN",
      "TINH NGUYEN THANH NIEN"
    ],
    firstLetterHint: "S... T... T... N... (4 từ)",
    badge: "🔥 Sức Trẻ Tình Nguyện",
    rewardDesc: "Huy Hiệu Bạch Kim: Ghi nhận tinh thần cống hiến, xung kích tình nguyện của thế hệ trẻ vì cộng đồng.",
    flashcard: "📌 VẬN DỤNG TƯ TƯỜNG HỒ CHÍ MINH: Bác Hồ coi thanh niên là 'người chủ tương lai của nước nhà'. Phát huy sức trẻ tình nguyện qua các công trình ý nghĩa giúp rèn luyện phẩm chất, bản lĩnh và nhân cách con người Việt Nam mới."
  },
  {
    id: 5,
    title: "Tư Tưởng Văn Hóa Soi Đường",
    image: "./docs/SOI ĐƯỜNG.jpg",
    topic: "Văn hóa Soi đường cho Quốc dân đi",
    mode: "slide",
    modeLabel: "🧩 Trượt ô (3x3)",
    sourceUrl: "https://www.tinduc.vn/tim-hieu-ve-cac-loai-den-pin/a160.html?srsltid=AU7gw4UJafOQRcNSHb6OAbTxtvMwp7cT_M8raYUFSzo9ACpFMBS124V4",
    desc: "Hình ảnh chiếc đèn pin biểu trưng cho ánh sáng tư tưởng Hồ Chí Minh và tri thức văn hóa soi đường dẫn lối cho thành công.",
    question: "Chủ tịch Hồ Chí Minh khẳng định: 'Văn hóa phải ... cho quốc dân đi'. Từ khóa thể hiện sứ mệnh dẫn đường của văn hóa là gì?",
    primaryKeyword: "SOI ĐƯỜNG",
    keywords: [
      "SOI DUONG",
      "SOI ĐƯỜNG",
      "VAN HOA SOI DUONG",
      "VĂN HÓA SOI ĐƯỜNG",
      "SOI DUONG DAN LOI"
    ],
    firstLetterHint: "S... Đ... (2 từ)",
    badge: "💡 Ngọn Đèn Soi Đường",
    rewardDesc: "Huy Hiệu Kim Cương: Nhận thức sâu sắc vai trò quyết định của văn hóa và tư tưởng soi đường cho sự phát triển.",
    flashcard: "📌 VẬN DỤNG TƯ TƯỜNG HỒ CHÍ MINH: Hồ Chí Minh nhấn mạnh: 'Văn hóa soi đường cho quốc dân đi'. Trong giai đoạn hiện nay, phát triển văn hóa phải ngang tầm với kinh tế, chính trị, trở thành sức mạnh nội sinh và nền tảng tinh thần vững chắc của dân tộc."
  },
  {
    id: 6,
    title: "Cây Tre Việt Nam - Khát Vọng Tự Cường",
    image: "./docs/TỰ CƯỜNG.jpg",
    topic: "Khơi dậy Ý chí Tự lực Tự cường Dân tộc",
    mode: "slide",
    modeLabel: "🧩 Trượt ô (3x3)",
    sourceUrl: "https://thegioidisan.vn/vi/tre-viet-di-san-bieu-tuong.html",
    desc: "Cây tre - di sản biểu tượng cho bản lĩnh kiên cường, dẻo dai và khát vọng tự lực tự cường của dân tộc Việt Nam qua nhiều thế hệ.",
    question: "Hình tượng cây tre Việt Nam thể hiện bản sắc văn hóa, ý chí vươn lên và tinh thần dân tộc nào được vận dụng mạnh mẽ trong giai đoạn hiện nay?",
    primaryKeyword: "TỰ CƯỜNG",
    keywords: [
      "TU CUONG",
      "TỰ CƯỜNG",
      "TU LUC TU CUONG",
      "TỰ LỰC TỰ CƯỜNG",
      "Y CHI TU CUONG"
    ],
    firstLetterHint: "T... C... (2 từ)",
    badge: "🎋 Ý Chí Tự Cường",
    rewardDesc: "Huy Hiệu Huyền Thoại: Am hiểu sâu sắc bản sắc văn hóa dân tộc và phát huy tinh thần tự lực tự cường Việt Nam.",
    flashcard: "📌 VẬN DỤNG TƯ TƯỜNG HỒ CHÍ MINH: Vận dụng tư tưởng Hồ Chí Minh về xây dựng con người Việt Nam có khát vọng cống hiến, phát huy tinh thần tự lực tự cường, bản lĩnh văn hóa dân tộc để đưa đất nước phát triển phồn vinh, hạnh phúc."
  }
];

// --------------------------------------------------------------------------
// 2. AUDIO SYNTHESIZER ENGINE (Web Audio API)
// --------------------------------------------------------------------------
class SoundEngine {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSwap() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playVictory() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + idx * 0.12);
      osc.stop(this.ctx.currentTime + idx * 0.12 + 0.35);
    });
  }

  playMicPulse() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }

  playGiftUnlock() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    for (let i = 0; i < 8; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(600 + Math.random() * 600, this.ctx.currentTime + i * 0.05);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime + i * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.05 + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + i * 0.05);
      osc.stop(this.ctx.currentTime + i * 0.05 + 0.1);
    }
  }

  playWrong() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.25);

    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
}

const audioFX = new SoundEngine();

// --------------------------------------------------------------------------
// 3. BACKGROUND AMBIENT PARTICLES
// --------------------------------------------------------------------------
function initAmbientParticles() {
  const canvas = document.getElementById('bg-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 45 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? '#f59e0b' : '#10b981',
    alpha: Math.random() * 0.5 + 0.2,
    vx: (Math.random() - 0.5) * 0.4,
    vy: -Math.random() * 0.5 - 0.2
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// --------------------------------------------------------------------------
// 4. MAIN GAME STATE MANAGEMENT
// --------------------------------------------------------------------------
class PuzzleGame {
  constructor() {
    this.gridSize = 3; // Fixed 3x3
    this.currentMode = 'swap'; // Set per level ('swap' or 'slide')
    this.currentLevel = null;
    this.tiles = [];
    this.selectedTileIndex = null;
    this.moves = 0;
    this.timer = 0;
    this.timerInterval = null;
    this.unlockedBadges = this.loadUnlockedBadges();

    this.initDOMReferences();
    this.initEventListeners();
    this.renderLevelCards();
    this.renderCodex();
    this.updateTrophyVault();
  }

  initDOMReferences() {
    this.screens = {
      select: document.getElementById('screen-select'),
      game: document.getElementById('screen-game'),
      codex: document.getElementById('screen-codex'),
      trophy: document.getElementById('screen-trophy')
    };

    this.navBtns = {
      select: document.getElementById('nav-select'),
      codex: document.getElementById('nav-codex'),
      trophy: document.getElementById('nav-trophy')
    };

    this.modals = {
      preview: document.getElementById('modal-preview'),
      keyword: document.getElementById('modal-keyword'),
      reward: document.getElementById('modal-reward'),
      confirmReset: document.getElementById('modal-confirm-reset'),
      wrongAnswer: document.getElementById('modal-wrong-answer')
    };

    this.board = document.getElementById('puzzle-board');
    this.timerDisplay = document.getElementById('timer-display');
    this.movesDisplay = document.getElementById('moves-display');
    this.accuracyDisplay = document.getElementById('accuracy-display');
    this.progressFill = document.getElementById('progress-fill');
  }

  initEventListeners() {
    // Navigation switching
    Object.keys(this.navBtns).forEach((key) => {
      this.navBtns[key].addEventListener('click', () => this.switchScreen(key));
    });

    // Audio Toggle
    document.getElementById('audio-toggle').addEventListener('click', () => {
      audioFX.enabled = !audioFX.enabled;
      document.getElementById('audio-icon').textContent = audioFX.enabled ? '🔊' : '🔇';
    });

    // Reset All Progress Button (Header Icon) -> Open Custom Confirmation Modal
    const resetBtn = document.getElementById('btn-reset-game');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.openModal('confirmReset'));
    }

    // Modal Confirmation Controls
    const cancelResetBtn = document.getElementById('btn-cancel-reset');
    if (cancelResetBtn) {
      cancelResetBtn.addEventListener('click', () => this.closeModal('confirmReset'));
    }

    const closeConfirmResetBtn = document.getElementById('close-modal-confirm-reset');
    if (closeConfirmResetBtn) {
      closeConfirmResetBtn.addEventListener('click', () => this.closeModal('confirmReset'));
    }

    const doResetBtn = document.getElementById('btn-do-reset');
    if (doResetBtn) {
      doResetBtn.addEventListener('click', () => {
        this.resetAllProgress();
        this.closeModal('confirmReset');
      });
    }

    // Game Sidebar buttons
    document.getElementById('btn-back-select').addEventListener('click', () => this.switchScreen('select'));
    document.getElementById('btn-reshuffle').addEventListener('click', () => this.startLevel(this.currentLevel));

    // Preview Image Modal
    document.getElementById('btn-zoom-preview').addEventListener('click', () => {
      document.getElementById('full-preview-img').src = encodeURI(this.currentLevel.image);
      document.getElementById('preview-modal-title').textContent = this.currentLevel.title;
      this.openModal('preview');
    });
    document.getElementById('close-modal-preview').addEventListener('click', () => this.closeModal('preview'));

    // Keyword Form Input
    document.getElementById('keyword-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.getElementById('keyword-input').value;
      this.verifyKeyword(val);
    });

    // Toggle Hint Button in Keyword Modal
    const toggleHintBtn = document.getElementById('btn-toggle-hint');
    if (toggleHintBtn) {
      toggleHintBtn.addEventListener('click', () => {
        const hintBox = document.getElementById('keyword-hint-text');
        if (hintBox) {
          hintBox.classList.remove('hidden');
          toggleHintBtn.classList.add('hidden');
        }
      });
    }

    // Mystery Gift Click & Claim
    document.getElementById('gift-box-anim').addEventListener('click', () => this.openMysteryGift());
    document.getElementById('btn-claim-reward').addEventListener('click', () => {
      this.closeModal('reward');
      this.switchScreen('trophy');
    });

    // Wrong Answer Modal Controls
    const closeWrongBtn = document.getElementById('btn-close-wrong-modal');
    if (closeWrongBtn) {
      closeWrongBtn.addEventListener('click', () => this.closeModal('wrongAnswer'));
    }

    const closeWrongIcon = document.getElementById('close-modal-wrong-answer');
    if (closeWrongIcon) {
      closeWrongIcon.addEventListener('click', () => this.closeModal('wrongAnswer'));
    }
  }

  resetAllProgress() {
    this.unlockedBadges = [];
    try {
      localStorage.removeItem('religion_unlocked_badges');
      localStorage.removeItem('mln123_unlocked_badges');
    } catch {}
    this.renderLevelCards();
    this.renderCodex();
    this.updateTrophyVault();
    this.switchScreen('select');
  }

  resetSingleLevel(level) {
    this.unlockedBadges = this.unlockedBadges.filter((b) => b !== level.badge);
    this.saveUnlockedBadges();
    this.renderLevelCards();
    this.renderCodex();
    this.updateTrophyVault();
  }

  // ------------------------------------------------------------------------
  // NAVIGATION & MODALS
  // ------------------------------------------------------------------------
  switchScreen(screenName) {
    Object.keys(this.screens).forEach((key) => {
      this.screens[key].classList.toggle('active', key === screenName);
      if (this.navBtns[key]) {
        this.navBtns[key].classList.toggle('active', key === screenName);
      }
    });

    if (screenName !== 'game') {
      this.stopTimer();
    }
  }

  openModal(modalName) {
    if (this.modals[modalName]) {
      this.modals[modalName].classList.add('active');
    }
  }

  closeModal(modalName) {
    if (this.modals[modalName]) {
      this.modals[modalName].classList.remove('active');
    }
  }

  // ------------------------------------------------------------------------
  // PUZZLE SELECTION SCREEN RENDER
  // ------------------------------------------------------------------------
  renderLevelCards() {
    const container = document.getElementById('level-cards-container');
    container.innerHTML = '';

    PUZZLE_LEVELS.forEach((level) => {
      const isUnlocked = this.unlockedBadges.includes(level.badge);
      const card = document.createElement('div');
      card.className = 'level-card glass-card';

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${encodeURI(level.image)}" alt="${level.title}" />
          <span class="card-overlay-badge">${level.topic}</span>
          <span class="card-overlay-mode" style="position:absolute; bottom:0.8rem; right:0.8rem; background:rgba(245,158,11,0.9); color:#000; font-weight:800; font-size:0.75rem; padding:0.25rem 0.6rem; border-radius:12px;">${level.modeLabel}</span>
        </div>
        <div class="card-content">
          <div>
            <h3>${level.title}</h3>
            <p class="topic-desc">${level.desc}</p>
          </div>
          <div class="card-footer" style="gap:0.4rem;">
            <div class="stars-score">${isUnlocked ? '⭐⭐⭐ (Đã giải)' : '☆☆☆'}</div>
            <div style="display:flex; gap:0.4rem; flex-wrap:wrap; justify-content:flex-end;">
              <button class="btn-play-level">
                <span>▶</span> ${isUnlocked ? 'Chơi Lại' : 'Chơi Ngay'}
              </button>
            </div>
          </div>
        </div>
      `;

      card.querySelector('.btn-play-level').addEventListener('click', () => {
        this.startLevel(level);
      });

      container.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // GAME BOARD GENERATION & TILES ENGINE
  // ------------------------------------------------------------------------
  startLevel(level) {
    this.currentLevel = level;
    this.currentMode = level.mode; // Preset per level (3 swap, 3 slide)
    this.gridSize = 3; // Fixed 3x3

    document.getElementById('current-puzzle-title').textContent = level.title;
    document.getElementById('current-puzzle-topic').textContent = `${level.topic} • ${level.modeLabel}`;
    document.getElementById('reference-img').src = encodeURI(level.image);

    this.moves = 0;
    this.selectedTileIndex = null;
    this.updateStatsDisplay();

    this.switchScreen('game');
    this.generateTiles();
    this.startTimer();
  }

  generateTiles() {
    const totalTiles = this.gridSize * this.gridSize;
    this.board.style.gridTemplateColumns = `repeat(${this.gridSize}, 1fr)`;
    this.board.style.gridTemplateRows = `repeat(${this.gridSize}, 1fr)`;
    this.board.innerHTML = '';

    // Create array of tiles [0...totalTiles-1]
    let tileIndices = Array.from({ length: totalTiles }, (_, i) => i);

    // Shuffle tiles ensuring solvability for slide mode
    do {
      tileIndices = this.shuffleArray([...tileIndices]);
    } while (this.isAlreadySolved(tileIndices) || (this.currentMode === 'slide' && !this.isSolvable(tileIndices)));

    this.tiles = tileIndices.map((origPos, currPos) => ({
      originalPos: origPos,
      currentPos: currPos
    }));

    this.renderBoardTiles();
    this.calculateAccuracy();
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  isAlreadySolved(indices) {
    return indices.every((val, idx) => val === idx);
  }

  isSolvable(indices) {
    let inversions = 0;
    const len = indices.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (indices[i] !== len - 1 && indices[j] !== len - 1 && indices[i] > indices[j]) {
          inversions++;
        }
      }
    }
    if (this.gridSize % 2 !== 0) {
      return inversions % 2 === 0;
    } else {
      const blankRowFromBottom = Math.floor((len - 1 - indices.indexOf(len - 1)) / this.gridSize);
      return (inversions + blankRowFromBottom) % 2 === 0;
    }
  }

  renderBoardTiles() {
    this.board.innerHTML = '';
    const total = this.gridSize * this.gridSize;

    this.tiles.forEach((tile, index) => {
      const tileDiv = document.createElement('div');
      tileDiv.className = 'puzzle-tile';

      const origRow = Math.floor(tile.originalPos / this.gridSize);
      const origCol = tile.originalPos % this.gridSize;

      // Handle blank tile in slide mode (last piece is blank)
      const isBlank = this.currentMode === 'slide' && tile.originalPos === total - 1;

      if (isBlank) {
        tileDiv.classList.add('empty-tile');
      } else {
        tileDiv.style.backgroundImage = `url("${encodeURI(this.currentLevel.image)}")`;
        tileDiv.style.backgroundSize = `${this.gridSize * 100}% ${this.gridSize * 100}%`;
        tileDiv.style.backgroundPosition = `${(origCol / (this.gridSize - 1)) * 100}% ${(origRow / (this.gridSize - 1)) * 100}%`;

        if (tile.originalPos === index) {
          tileDiv.classList.add('correct');
        }
      }

      if (this.selectedTileIndex === index) {
        tileDiv.classList.add('selected');
      }

      tileDiv.addEventListener('click', () => this.handleTileClick(index));
      this.board.appendChild(tileDiv);
    });
  }

  handleTileClick(index) {
    if (this.currentMode === 'swap') {
      if (this.selectedTileIndex === null) {
        this.selectedTileIndex = index;
        audioFX.playSwap();
      } else if (this.selectedTileIndex === index) {
        this.selectedTileIndex = null;
      } else {
        // Swap 2 tiles
        [this.tiles[this.selectedTileIndex], this.tiles[index]] = [
          this.tiles[index],
          this.tiles[this.selectedTileIndex]
        ];
        this.selectedTileIndex = null;
        this.moves++;
        audioFX.playSwap();
      }
    } else if (this.currentMode === 'slide') {
      const blankIndex = this.tiles.findIndex((t) => t.originalPos === this.gridSize * this.gridSize - 1);
      if (this.isAdjacent(index, blankIndex)) {
        [this.tiles[index], this.tiles[blankIndex]] = [this.tiles[blankIndex], this.tiles[index]];
        this.moves++;
        audioFX.playSwap();
      }
    }

    this.updateStatsDisplay();
    this.renderBoardTiles();
    this.checkVictoryCondition();
  }

  isAdjacent(idx1, idx2) {
    const row1 = Math.floor(idx1 / this.gridSize);
    const col1 = idx1 % this.gridSize;
    const row2 = Math.floor(idx2 / this.gridSize);
    const col2 = idx2 % this.gridSize;

    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
  }

  calculateAccuracy() {
    let correct = 0;
    this.tiles.forEach((t, i) => {
      if (t.originalPos === i) correct++;
    });
    const percent = Math.round((correct / this.tiles.length) * 100);
    this.accuracyDisplay.textContent = `${percent}%`;
    this.progressFill.style.width = `${percent}%`;
    return percent;
  }

  checkVictoryCondition() {
    const percent = this.calculateAccuracy();
    if (percent === 100) {
      this.stopTimer();
      audioFX.playVictory();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => this.triggerKeywordChallenge(), 600);
    }
  }

  // ------------------------------------------------------------------------
  // TIMER & DASHBOARD
  // ------------------------------------------------------------------------
  startTimer() {
    this.stopTimer();
    this.timer = 0;
    this.timerInterval = setInterval(() => {
      this.timer++;
      const mins = String(Math.floor(this.timer / 60)).padStart(2, '0');
      const secs = String(this.timer % 60).padStart(2, '0');
      this.timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateStatsDisplay() {
    this.movesDisplay.textContent = this.moves;
    this.calculateAccuracy();
  }

  // ------------------------------------------------------------------------
  // KEYWORD CHALLENGE SYSTEM
  // ------------------------------------------------------------------------
  triggerKeywordChallenge() {
    document.getElementById('keyword-question-title').textContent = this.currentLevel.title;
    document.getElementById('keyword-question-desc').textContent = this.currentLevel.question;

    const mcContainer = document.getElementById('multiple-choice-container');
    const textContainer = document.getElementById('text-input-container');
    const badgeTag = document.getElementById('challenge-badge-tag');

    if (this.currentLevel.mode === 'swap') {
      // 1. DẠNG TRẮC NGHIỆM A B C D (Dành cho 3 màn Đổi vị trí) - Không có gợi ý
      if (badgeTag) badgeTag.textContent = "Thách Thức Trắc Nghiệm (A, B, C, D)";
      mcContainer.classList.remove('hidden');
      textContainer.classList.add('hidden');

      mcContainer.innerHTML = '';
      this.currentLevel.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.innerHTML = `<span style="color: var(--accent-gold-light); font-weight: 800; min-width: 24px;">${String.fromCharCode(65 + idx)}.</span> <span>${optText}</span>`;
        btn.addEventListener('click', () => this.verifyMultipleChoice(idx, btn));
        mcContainer.appendChild(btn);
      });
    } else {
      // 2. DẠNG NHẬP TỪ KHÓA & GỢI Ý (Dành cho 3 màn Trượt ô) - Giữ nguyên như cũ
      if (badgeTag) badgeTag.textContent = "Thách Thức Mật Mã Từ Khóa";
      mcContainer.classList.add('hidden');
      textContainer.classList.remove('hidden');

      document.getElementById('keyword-input').value = '';
      document.getElementById('first-letter-hint-val').textContent = this.currentLevel.firstLetterHint;

      const hintBox = document.getElementById('keyword-hint-text');
      const toggleHintBtn = document.getElementById('btn-toggle-hint');
      if (hintBox) hintBox.classList.add('hidden');
      if (toggleHintBtn) toggleHintBtn.classList.remove('hidden');
    }

    this.openModal('keyword');
  }

  verifyMultipleChoice(selectedIdx, btnEl) {
    if (selectedIdx === this.currentLevel.correctOption) {
      btnEl.classList.add('correct-choice');
      audioFX.playVictory();
      setTimeout(() => {
        this.closeModal('keyword');
        this.triggerRewardUnlock();
      }, 500);
    } else {
      btnEl.classList.add('wrong-choice');
      audioFX.playWrong();
      const msgEl = document.getElementById('wrong-modal-msg');
      if (msgEl) msgEl.textContent = 'Lựa chọn của bạn chưa chính xác. Vui lòng đọc kỹ câu hỏi và thử lại!';
      this.openModal('wrongAnswer');
      setTimeout(() => btnEl.classList.remove('wrong-choice'), 1200);
    }
  }

  normalizeStr(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .trim();
  }

  verifyKeyword(inputStr) {
    if (!inputStr) return;
    const userNorm = this.normalizeStr(inputStr);

    const isMatch = this.currentLevel.keywords.some(
      (kw) => this.normalizeStr(kw) === userNorm
    );

    if (isMatch) {
      this.closeModal('keyword');
      this.triggerRewardUnlock();
    } else {
      const inputEl = document.getElementById('keyword-input');
      inputEl.style.borderColor = 'var(--accent-rose)';
      audioFX.playWrong();
      const msgEl = document.getElementById('wrong-modal-msg');
      if (msgEl) msgEl.textContent = 'Từ khóa nhập vào chưa chính xác. Bạn có thể bấm nút "Xem Gợi Ý Chữ Cái Đầu" để được trợ giúp!';
      this.openModal('wrongAnswer');
      setTimeout(() => (inputEl.style.borderColor = ''), 1200);
    }
  }

  // ------------------------------------------------------------------------
  // REWARD UNLOCK SYSTEM (GIFT BOX & TROPHY SAVE)
  // ------------------------------------------------------------------------
  triggerRewardUnlock() {
    document.getElementById('gift-box-anim').classList.remove('hidden');
    document.getElementById('reward-result-card').classList.add('hidden');
    document.getElementById('reward-actions').classList.add('hidden');

    this.openModal('reward');
  }

  openMysteryGift() {
    document.getElementById('gift-box-anim').classList.add('hidden');
    document.getElementById('reward-result-card').classList.remove('hidden');
    document.getElementById('reward-actions').classList.remove('hidden');

    document.getElementById('reward-badge-icon').textContent = this.currentLevel.badge.slice(0, 2);
    document.getElementById('reward-badge-name').textContent = this.currentLevel.badge;
    document.getElementById('reward-badge-desc').textContent = this.currentLevel.rewardDesc;
    document.getElementById('reward-flashcard-text').textContent = this.currentLevel.flashcard;

    const sourceLinkEl = document.getElementById('reward-source-link');
    if (sourceLinkEl && this.currentLevel.sourceUrl) {
      sourceLinkEl.href = this.currentLevel.sourceUrl;
    }

    audioFX.playGiftUnlock();
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });

    // Save Badge & Update unlocked items
    if (!this.unlockedBadges.includes(this.currentLevel.badge)) {
      this.unlockedBadges.push(this.currentLevel.badge);
      this.saveUnlockedBadges();
      this.updateTrophyVault();
      this.renderLevelCards();
      this.renderCodex(); // Refresh codex to reveal newly unlocked card!
    }
  }

  loadUnlockedBadges() {
    try {
      const saved = localStorage.getItem('religion_unlocked_badges') || localStorage.getItem('mln123_unlocked_badges');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveUnlockedBadges() {
    try {
      localStorage.setItem('religion_unlocked_badges', JSON.stringify(this.unlockedBadges));
    } catch {}
  }

  updateTrophyVault() {
    document.getElementById('badge-count-tag').textContent = this.unlockedBadges.length;
    document.getElementById('total-badges-count').textContent = `${this.unlockedBadges.length} / ${PUZZLE_LEVELS.length}`;
    document.getElementById('total-stars-count').textContent = this.unlockedBadges.length * 3;
    document.getElementById('total-gifts-count').textContent = this.unlockedBadges.length;

    const vaultContainer = document.getElementById('vault-items-container');
    vaultContainer.innerHTML = '';

    PUZZLE_LEVELS.forEach((level) => {
      const isUnlocked = this.unlockedBadges.includes(level.badge);
      const card = document.createElement('div');
      card.className = `vault-card glass-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      card.innerHTML = `
        <div class="vault-badge-icon">${level.badge.slice(0, 2)}</div>
        <h4>${level.badge}</h4>
        <p>${level.rewardDesc}</p>
        ${isUnlocked 
          ? `<span class="unlocked-tag">ĐÃ SỞ HỮU</span>
             <div style="margin-top:0.5rem;"><a href="${level.sourceUrl}" target="_blank" rel="noopener noreferrer" style="font-size:0.75rem; color:var(--accent-cyan); text-decoration:none;">🌐 Nguồn Bài Viết & Ảnh</a></div>` 
          : '<span class="unlocked-tag" style="background:rgba(255,255,255,0.1);color:#aaa;">CHƯA MỞ</span>'}
      `;

      vaultContainer.appendChild(card);
    });
  }

  // ------------------------------------------------------------------------
  // CODEX THEORY SYSTEM (SHOWS FULL DETAILS ONLY WHEN LEVEL IS UNLOCKED)
  // ------------------------------------------------------------------------
  renderCodex() {
    const codexContainer = document.getElementById('codex-cards-container');
    codexContainer.innerHTML = '';

    PUZZLE_LEVELS.forEach((level) => {
      const isUnlocked = this.unlockedBadges.includes(level.badge);
      const card = document.createElement('div');

      if (isUnlocked) {
        card.className = 'codex-card glass-card unlocked';
        card.style.borderLeft = '4px solid var(--accent-emerald)';
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.4rem;">
            <h3 style="color:var(--accent-gold-light); font-size:1.15rem;">${level.id}. ${level.topic}</h3>
            <span class="unlocked-tag" style="background:rgba(16, 185, 129, 0.2); color:var(--accent-emerald); font-size:0.7rem; font-weight:700; padding:0.2rem 0.5rem; border-radius:4px;">ĐÃ MỞ KHÓA</span>
          </div>
          <p style="color:#ffffff; font-weight:700; font-size:0.95rem; margin-bottom:0.3rem;">📍 ${level.title}</p>
          <p style="font-size:0.88rem; color:var(--text-muted);"><strong>Từ khóa:</strong> <span style="color:var(--accent-gold-light); font-weight:bold;">${level.primaryKeyword}</span></p>
          <p style="margin-top:0.6rem; background:rgba(15,23,42,0.7); padding:0.8rem; border-radius:8px; border:1px solid rgba(255,255,255,0.08); font-size:0.88rem; line-height:1.5;">${level.flashcard}</p>
          <div style="margin-top:0.8rem; text-align:right;">
            <a href="${level.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size:0.78rem; color:var(--accent-cyan); border-color:rgba(6,182,212,0.4); text-decoration:none; padding:0.3rem 0.8rem; display:inline-flex; align-items:center; gap:0.3rem;">
              🌐 Xem Nguồn Bài Viết & Ảnh Chi Tiết →
            </a>
          </div>
        `;
      } else {
        card.className = 'codex-card glass-card locked';
        card.style.borderLeft = '4px solid #64748b';
        card.style.opacity = '0.6';
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">
            <h3 style="color:#94a3b8; font-size:1.1rem;">🔒 ${level.id}. Bài Học Chưa Mở Khóa</h3>
            <span style="font-size:0.7rem; background:rgba(255,255,255,0.1); color:#aaa; padding:0.2rem 0.5rem; border-radius:4px;">CHƯA HOÀN THÀNH</span>
          </div>
          <p style="margin-top:0.8rem; color:#94a3b8; font-size:0.88rem; font-style:italic; line-height:1.4;">
            Hãy giải xếp hình thành công bức ảnh <b>"${level.title}"</b> và giải mã từ khóa đúng để mở khóa thông tin lý luận & nguồn ảnh chi tiết của bài học này!
          </p>
        `;
      }

      codexContainer.appendChild(card);
    });
  }
}

// Initialize Application on Window Load
window.addEventListener('DOMContentLoaded', () => {
  initAmbientParticles();
  window.gameApp = new PuzzleGame();
});
