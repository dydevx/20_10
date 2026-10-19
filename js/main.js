const portraits = [
  {
    name: "Chị Hiếu",
    file: "Chị Hiếu.jpg",
    wish: "Chúc chị lúc nào cũng xinh đẹp, vui vẻ và deadline tự động biến mất 😆"
  },
  {
    name: "Chị Hòa",
    file: "Chị Hòa.jpg",
    wish: "Chúc chị tiền vào như nước, việc nhẹ lương cao và ngày nào cũng thật vui."
  },
  {
    name: "Chị Như",
    file: "Chị Như.png",
    wish: "Chúc chị luôn rạng rỡ, bình an và giữ mãi nguồn năng lượng tích cực."
  },
  {
    name: "Chị Trang",
    file: "Chị Trang.jpg",
    wish: "Chúc chị luôn gặp thật nhiều may mắn và có thật nhiều điều để mỉm cười."
  },
  {
    name: "Chị Trinh",
    file: "Chị Trinh.png",
    wish: "Chúc chị mỗi ngày đi làm đều nhẹ nhàng, vui vẻ và đầy cảm hứng."
  },
  {
    name: "Chị Tuyết",
    file: "Chị Tuyết.jpg",
    wish: "Chúc chị luôn được yêu thương, nâng niu và nhận thật nhiều hoa xinh."
  },
  {
    name: "Chị Vy",
    file: "Chị Vy.png",
    wish: "Chúc chị ngày càng thành công, hạnh phúc và luôn là phiên bản rực rỡ nhất."
  },
  {
    name: "Hồng Thi",
    file: "Hồng Thi.jpg",
    wish: "Chúc em luôn xinh tươi, tự tin và có những ngày thật đáng nhớ."
  },
  {
    name: "Chị Hồng",
    file: "Chị Hồng.jpg",
    wish: "Chúc chị thật nhiều niềm vui, công việc hanh thông và luôn gặp điều tốt lành."
  },
  {
    name: "Chị Nhi",
    file: "Chị Nhi.png",
    wish: "Chúc chị lúc nào cũng vui như có trà sữa, may mắn như trúng quà mỗi ngày."
  },
  {
    name: "Chị Dương",
    file: "Chị Dương.jpg",
    wish: "Chúc chị luôn dịu dàng với chính mình và tỏa sáng theo cách thật riêng."
  },
  {
    name: "Chị Kiều",
    file: "Chị Kiều.jpg",
    wish: "Chúc chị ngày càng xinh đẹp, thành công và có thật nhiều khoảnh khắc hạnh phúc."
  },
  {
    name: "Yên My",
    file: "Yên My.jpg",
    wish: "Chúc em luôn an yên, rạng rỡ và được cuộc sống chiều chuộng thật nhiều."
  }
];

const polaroidCaptions = ["Beautiful", "Lovely", "Amazing", "Queen", "Wonderful"];
const wishes = [
  "Hôm nay bạn sẽ nhận được thật nhiều hoa 💐",
  "Chúc bạn ngày càng xinh đẹp và thành công ✨",
  "Chúc bạn luôn vui vẻ và gặp thật nhiều may mắn 🍀",
  "Chúc deadline nhìn thấy bạn là tự động chạy mất 😆",
  "Chúc lương tăng đều nhưng cân nặng thì không 😎",
  "Chúc mỗi sáng đi làm đều có người mua trà sữa 🧋",
  "Chúc công việc nhẹ nhàng, tài khoản thì ngày càng nặng 💰",
  "Chúc bạn luôn là phiên bản rực rỡ nhất của chính mình 👑"
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isSmallScreen = window.matchMedia("(max-width: 720px)").matches;
const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const galleryGrid = document.querySelector("#gallery-grid");
const polaroidRail = document.querySelector("#polaroid-rail");
const polaroidTrack = document.querySelector("#polaroid-track");
const peopleGrid = document.querySelector("#people-grid");
const mainContent = document.querySelector("#main-content");
const welcome = document.querySelector("#welcome");
const loader = document.querySelector("#loader");
const petalLayer = document.querySelector("#petal-layer");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxClose = document.querySelector("#lightbox-close");
const lightboxPrevious = document.querySelector("#lightbox-prev");
const lightboxNext = document.querySelector("#lightbox-next");
const wishButton = document.querySelector("#draw-wish");
const wishResult = document.querySelector("#wish-result");
const wishText = document.querySelector("#wish-text");
const flowerSection = document.querySelector(".flower-section");
const receiveFlowersButton = document.querySelector("#receive-flowers");
const flowerReveal = document.querySelector("#flower-reveal");
const soundButton = document.querySelector("#sound-toggle");
const soundStatus = document.querySelector("#sound-status");
const menuToggle = document.querySelector("#menu-toggle");
const mainNav = document.querySelector("#main-nav");
const footerHeart = document.querySelector("#footer-heart");
const surpriseOverlay = document.querySelector("#surprise-overlay");
const surpriseClose = document.querySelector("#surprise-close");

let activePhotoIndex = 0;
let lastPhotoTrigger = null;
let lastWishIndex = -1;
let audioContext = null;
let melodyTimer = null;
let melodyStarting = false;
let confettiCount = 0;
let heartCount = 0;
let heartResetTimer = 0;
let cursorFrame = 0;
let pointerX = -100;
let pointerY = -100;
let lastMouseSparkle = 0;

function photoUrl(photo) {
  return encodeURI(`images/${photo.file}`);
}

function makePhotoButton(photo, index, className) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.dataset.photoIndex = String(index);
  button.setAttribute("aria-label", `Mở ảnh ${photo.name}`);

  const image = document.createElement("img");
  image.src = photoUrl(photo);
  image.alt = photo.name;
  image.loading = "lazy";
  image.decoding = "async";

  button.append(image);
  return button;
}

function buildGallery() {
  const galleryFragment = document.createDocumentFragment();
  const galleryPortraits = [...portraits];
  const hongThiIndex = galleryPortraits.findIndex((photo) => photo.name === "Hồng Thi");
  const chiHongIndex = galleryPortraits.findIndex((photo) => photo.name === "Chị Hồng");
  [galleryPortraits[hongThiIndex], galleryPortraits[chiHongIndex]] = [
    galleryPortraits[chiHongIndex],
    galleryPortraits[hongThiIndex]
  ];

  galleryPortraits.forEach((photo, index) => {
    const button = makePhotoButton(photo, portraits.indexOf(photo), `gallery-item gallery-item--${index + 1} reveal`);
    const name = document.createElement("span");
    name.className = "gallery-item__name";
    name.textContent = photo.name;
    const heart = document.createElement("span");
    heart.className = "gallery-item__heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♥";
    button.append(name, heart);
    galleryFragment.append(button);
  });

  galleryGrid.append(galleryFragment);
}

function buildPolaroids() {
  const createGroup = (isDuplicate = false) => {
    const group = document.createElement("div");
    group.className = "polaroid-group";
    group.setAttribute("role", "list");

    if (isDuplicate) {
      group.setAttribute("aria-hidden", "true");
    }

    portraits.forEach((photo, index) => {
      const frame = document.createElement("article");
      frame.className = "polaroid";
      frame.setAttribute("role", "listitem");

      const photoButton = makePhotoButton(photo, index, "polaroid__photo");
      if (isDuplicate) photoButton.tabIndex = -1;

      const caption = document.createElement("div");
      caption.className = "polaroid__caption";
      const label = document.createElement("span");
      label.textContent = polaroidCaptions[index % polaroidCaptions.length];
      const name = document.createElement("strong");
      name.textContent = photo.name;
      caption.append(label, name);
      frame.append(photoButton, caption);
      group.append(frame);
    });

    return group;
  };

  polaroidTrack.append(createGroup());
  if (!prefersReducedMotion) polaroidTrack.append(createGroup(true));
}

function setupPolaroidMotion() {
  if (prefersReducedMotion) return;

  const setMotionState = (isVisible) => {
    polaroidRail.classList.toggle("is-in-view", isVisible && !document.hidden);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      setMotionState(entries.some((entry) => entry.isIntersecting));
    }, { threshold: .08 });
    observer.observe(polaroidRail);
  } else {
    setMotionState(true);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      setMotionState(false);
      return;
    }

    const bounds = polaroidRail.getBoundingClientRect();
    setMotionState(bounds.bottom > 0 && bounds.top < window.innerHeight);
  });
}

function buildPeopleCards() {
  const peopleFragment = document.createDocumentFragment();

  portraits.forEach((photo) => {
    const card = document.createElement("article");
    card.className = "person-card reveal tilt-card";

    const portrait = document.createElement("div");
    portrait.className = "person-card__portrait";
    const image = document.createElement("img");
    image.src = photoUrl(photo);
    image.alt = photo.name;
    image.loading = "lazy";
    image.decoding = "async";
    portrait.append(image);

    const name = document.createElement("h3");
    name.textContent = photo.name;
    const wish = document.createElement("p");
    wish.className = "person-card__wish";
    wish.textContent = `“${photo.wish}”`;
    const sparkle = document.createElement("span");
    sparkle.className = "person-card__spark";
    sparkle.setAttribute("aria-hidden", "true");
    sparkle.textContent = "✧";

    card.append(portrait, name, wish, sparkle);
    peopleFragment.append(card);
  });

  peopleGrid.append(peopleFragment);
}

function openPhoto(index, trigger) {
  activePhotoIndex = (index + portraits.length) % portraits.length;
  lastPhotoTrigger = trigger;
  updateLightboxImage();

  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
  } else {
    lightbox.setAttribute("open", "");
  }

  lightboxClose.focus();
}

function updateLightboxImage() {
  const photo = portraits[activePhotoIndex];
  lightboxImage.classList.remove("is-switching");
  lightboxImage.src = photoUrl(photo);
  lightboxImage.alt = photo.name;
  lightboxCaption.textContent = photo.name;
  requestAnimationFrame(() => lightboxImage.classList.add("is-switching"));
}

function closeLightbox() {
  if (lightbox.open && typeof lightbox.close === "function") {
    lightbox.close();
  } else {
    lightbox.removeAttribute("open");
  }
}

function createPetals() {
  if (prefersReducedMotion) return;

  const count = isSmallScreen ? 7 : 15;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < count; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--left", `${Math.random() * 100}%`);
    petal.style.setProperty("--size", `${7 + Math.random() * (isSmallScreen ? 9 : 15)}px`);
    petal.style.setProperty("--blur", `${Math.random() * 1.1}px`);
    petal.style.setProperty("--opacity", `${0.28 + Math.random() * 0.42}`);
    petal.style.setProperty("--rotation", `${Math.random() * 360}deg`);
    petal.style.setProperty("--duration", `${14 + Math.random() * 18}s`);
    petal.style.setProperty("--delay", `${-Math.random() * 28}s`);
    petal.style.setProperty("--drift", `${-70 + Math.random() * 140}px`);
    fragment.append(petal);
  }

  petalLayer.append(fragment);
}

function createConfetti(amount = 58) {
  if (prefersReducedMotion) return;

  const available = Math.max(0, 150 - confettiCount);
  const count = Math.min(amount, available);
  const colors = ["#f8b7c4", "#fff0dd", "#d4af76", "#da7f96", "#fff9f0", "#ac596e"];

  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.setProperty("--left", `${Math.random() * 100}%`);
    piece.style.setProperty("--size", `${4 + Math.random() * 6}px`);
    piece.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
    piece.style.setProperty("--duration", `${2.5 + Math.random() * 2.2}s`);
    piece.style.setProperty("--delay", `${Math.random() * .55}s`);
    piece.style.setProperty("--drift", `${-120 + Math.random() * 240}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 850}deg`);
    confettiCount += 1;
    piece.addEventListener("animationend", () => {
      piece.remove();
      confettiCount -= 1;
    }, { once: true });
    document.body.append(piece);
  }
}

function createBurstPetals(originX = window.innerWidth / 2, originY = window.innerHeight / 2, amount = 18) {
  if (prefersReducedMotion) return;

  const symbols = ["✿", "✧", "✦"];
  for (let index = 0; index < amount; index += 1) {
    const petal = document.createElement("span");
    petal.className = "burst-petal";
    petal.setAttribute("aria-hidden", "true");
    petal.textContent = symbols[index % symbols.length];
    petal.style.left = `${originX}px`;
    petal.style.top = `${originY}px`;
    petal.style.setProperty("--angle", `${(360 / amount) * index + Math.random() * 18}deg`);
    petal.style.setProperty("--distance", `${55 + Math.random() * 120}px`);
    petal.style.setProperty("--petal-size", `${12 + Math.random() * 15}px`);
    const angle = Number.parseFloat(petal.style.getPropertyValue("--angle")) * Math.PI / 180;
    const distance = Number.parseFloat(petal.style.getPropertyValue("--distance"));
    petal.style.setProperty("--burst-x", `${Math.cos(angle) * distance}px`);
    petal.style.setProperty("--burst-y", `${Math.sin(angle) * distance}px`);
    document.body.append(petal);
    petal.addEventListener("animationend", () => petal.remove(), { once: true });
  }
}

function createHeartParticles(originX, originY, amount = 5) {
  if (prefersReducedMotion) return;

  for (let index = 0; index < amount; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-particle";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = index % 2 === 0 ? "♥" : "✧";
    heart.style.left = `${originX + (Math.random() * 42 - 21)}px`;
    heart.style.top = `${originY + (Math.random() * 22 - 11)}px`;
    heart.style.setProperty("--size", `${10 + Math.random() * 12}px`);
    heart.style.setProperty("--drift", `${-32 + Math.random() * 64}px`);
    heart.style.setProperty("--spin", `${-25 + Math.random() * 50}deg`);
    document.body.append(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

function unlockGift() {
  if (!welcome || welcome.classList.contains("is-leaving")) return;

  welcome.classList.add("is-leaving");
  welcome.setAttribute("aria-hidden", "true");
  mainContent.inert = false;
  mainContent.setAttribute("aria-hidden", "false");
  mainContent.classList.add("is-unlocked");
  document.body.classList.remove("intro-pending");
  createConfetti(isSmallScreen ? 34 : 60);
  createBurstPetals(window.innerWidth / 2, window.innerHeight * .58, isSmallScreen ? 11 : 19);
  window.setTimeout(() => {
    welcome.hidden = true;
    document.querySelector("#home .text-link").focus({ preventScroll: true });
  }, 1000);
}

function drawWish() {
  let nextIndex = Math.floor(Math.random() * wishes.length);
  if (wishes.length > 1 && nextIndex === lastWishIndex) {
    nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (wishes.length - 1))) % wishes.length;
  }
  lastWishIndex = nextIndex;
  wishText.textContent = wishes[nextIndex];
  wishResult.classList.remove("is-revealed");
  requestAnimationFrame(() => wishResult.classList.add("is-revealed"));
  const bounds = wishButton.getBoundingClientRect();
  createConfetti(isSmallScreen ? 17 : 25);
  createBurstPetals(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, isSmallScreen ? 7 : 11);
}

function revealFlowers() {
  flowerSection.classList.add("is-blooming");
  flowerReveal.classList.add("is-shown");
  flowerReveal.setAttribute("aria-hidden", "false");
  receiveFlowersButton.setAttribute("aria-expanded", "true");
  receiveFlowersButton.innerHTML = "<span aria-hidden=\"true\">♥</span> Hoa của bạn đây";
  const bounds = receiveFlowersButton.getBoundingClientRect();
  createConfetti(isSmallScreen ? 27 : 44);
  createBurstPetals(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, isSmallScreen ? 10 : 17);
  createHeartParticles(bounds.left + bounds.width / 2, bounds.top, 9);
}

function setupScrollReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    document.querySelector(".special-message").classList.add("is-visible");
    document.querySelectorAll("[data-count]").forEach((counter) => {
      counter.textContent = counter.dataset.count;
    });
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .14, rootMargin: "0px 0px -35px 0px" });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  const specialMessage = document.querySelector(".special-message");
  const specialObserver = new IntersectionObserver((entries, observer) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      specialMessage.classList.add("is-visible");
      observer.disconnect();
    }
  }, { threshold: .22 });
  specialObserver.observe(specialMessage);

  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const finalValue = Number(counter.dataset.count);

      if (prefersReducedMotion) {
        counter.textContent = String(finalValue);
      } else {
        const startTime = performance.now();
        const duration = 1250;
        const update = (now) => {
          const progress = Math.min(1, (now - startTime) / duration);
          const eased = 1 - (1 - progress) ** 4;
          counter.textContent = String(Math.round(finalValue * eased));
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
      observer.unobserve(counter);
    });
  }, { threshold: .65 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Mở menu");
  mainNav.classList.remove("is-open");
}

function toggleMenu() {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Mở menu" : "Đóng menu");
  mainNav.classList.toggle("is-open", !isOpen);
}

function startMelody() {
  if (melodyStarting || soundButton.getAttribute("aria-pressed") === "true") return;
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    soundStatus.textContent = "Trình duyệt này chưa hỗ trợ phát giai điệu.";
    return;
  }

  const notes = [523.25, 659.25, 783.99, 659.25, 587.33, 698.46, 880, 698.46];

  const playPhrase = () => {
    if (!audioContext || audioContext.state !== "running") return;
    const startAt = audioContext.currentTime + .05;
    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const volume = audioContext.createGain();
      const noteStart = startAt + index * .38;
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      volume.gain.setValueAtTime(.0001, noteStart);
      volume.gain.exponentialRampToValueAtTime(.045, noteStart + .035);
      volume.gain.exponentialRampToValueAtTime(.0001, noteStart + .31);
      oscillator.connect(volume);
      volume.connect(audioContext.destination);
      oscillator.start(noteStart);
      oscillator.stop(noteStart + .33);
    });
  };

  let startingContext;
  melodyStarting = true;
  try {
    startingContext = new AudioContextConstructor();
    audioContext = startingContext;
  } catch (error) {
    melodyStarting = false;
    console.error("Không thể khởi tạo bộ phát giai điệu.", error);
    soundStatus.textContent = "Chưa thể bật giai điệu. Bạn có thể thử lại sau.";
    return;
  }

  startingContext.resume().then(() => {
    melodyStarting = false;
    if (audioContext !== startingContext) return;
    if (startingContext.state !== "running") {
      audioContext = null;
      soundButton.setAttribute("aria-pressed", "false");
      soundStatus.textContent = "Trình duyệt chưa cho phép phát giai điệu.";
      startingContext.close().catch((error) => {
        console.error("Không thể đóng bộ phát giai điệu.", error);
      });
      return;
    }
    soundButton.setAttribute("aria-pressed", "true");
    soundButton.setAttribute("aria-label", "Tắt giai điệu chúc mừng");
    soundStatus.textContent = "Đang phát giai điệu chúc mừng.";
    playPhrase();
    melodyTimer = window.setInterval(playPhrase, 3200);
  }).catch((error) => {
    melodyStarting = false;
    console.error("Không thể tiếp tục bộ phát giai điệu.", error);
    if (audioContext !== startingContext) return;
    soundStatus.textContent = "Chưa thể bật giai điệu. Hãy kiểm tra cài đặt âm thanh của trình duyệt.";
    audioContext = null;
    soundButton.setAttribute("aria-pressed", "false");
  });
}

function stopMelody() {
  melodyStarting = false;
  if (melodyTimer) {
    window.clearInterval(melodyTimer);
    melodyTimer = null;
  }
  soundButton.setAttribute("aria-pressed", "false");
  soundButton.setAttribute("aria-label", "Bật giai điệu chúc mừng");
  soundStatus.textContent = "Đã tắt giai điệu.";

  if (audioContext) {
    const closingContext = audioContext;
    audioContext = null;
    closingContext.close().catch((error) => {
      console.error("Không thể đóng bộ phát giai điệu.", error);
    });
  }
}

function toggleMelody() {
  if (soundButton.getAttribute("aria-pressed") === "true" || melodyStarting) {
    stopMelody();
  } else {
    startMelody();
  }
}

function showSurprise() {
  surpriseOverlay.classList.add("is-visible");
  surpriseOverlay.setAttribute("aria-hidden", "false");
  surpriseClose.focus();
  createConfetti(isSmallScreen ? 70 : 110);
  createBurstPetals(window.innerWidth / 2, window.innerHeight / 2, isSmallScreen ? 15 : 25);
}

function hideSurprise() {
  surpriseOverlay.classList.remove("is-visible");
  surpriseOverlay.setAttribute("aria-hidden", "true");
  footerHeart.focus();
}

function setupCustomCursor() {
  if (!hasFinePointer || prefersReducedMotion) return;

  const dot = document.querySelector(".cursor--dot");
  const ring = document.querySelector(".cursor--ring");
  let ringX = -100;
  let ringY = -100;

  const moveCursor = () => {
    dot.style.transform = `translate3d(${pointerX - 2.5}px, ${pointerY - 2.5}px, 0)`;
    ringX += (pointerX - ringX) * .16;
    ringY += (pointerY - ringY) * .16;
    ring.style.transform = `translate3d(${ringX - 17}px, ${ringY - 17}px, 0)`;
    cursorFrame = requestAnimationFrame(moveCursor);
  };

  document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (!cursorFrame) cursorFrame = requestAnimationFrame(moveCursor);
    dot.classList.add("is-active");
    ring.classList.add("is-active");

    const target = event.target instanceof Element ? event.target.closest("a, button, .gallery-item") : null;
    ring.classList.toggle("is-hovering", Boolean(target));

    const now = performance.now();
    if (target && now - lastMouseSparkle > 180 && Math.random() > .62) {
      lastMouseSparkle = now;
      createHeartParticles(pointerX, pointerY, 1);
    }
  }, { passive: true });

  document.addEventListener("pointerleave", () => {
    dot.classList.remove("is-active");
    ring.classList.remove("is-active");
    cancelAnimationFrame(cursorFrame);
    cursorFrame = 0;
  });

  document.addEventListener("pointerenter", () => {
    if (!cursorFrame) cursorFrame = requestAnimationFrame(moveCursor);
  });
}

function setupParallaxAndTilt() {
  if (!hasFinePointer || prefersReducedMotion) return;

  const hero = document.querySelector(".hero");
  const portraitsLayer = document.querySelector(".hero__portraits");
  let frame = 0;
  let targetX = 0;
  let targetY = 0;

  hero.addEventListener("pointermove", (event) => {
    targetX = (event.clientX / window.innerWidth - .5) * 9;
    targetY = (event.clientY / window.innerHeight - .5) * 7;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      portraitsLayer.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      frame = 0;
    });
  }, { passive: true });

  hero.addEventListener("pointerleave", () => {
    portraitsLayer.style.transform = "";
  });

  peopleGrid.addEventListener("pointermove", (event) => {
    const card = event.target instanceof Element ? event.target.closest(".tilt-card") : null;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - .5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - .5;
    card.style.transform = `perspective(700px) rotateX(${normalizedY * -4}deg) rotateY(${normalizedX * 4}deg) translateY(-3px)`;
  }, { passive: true });

  peopleGrid.addEventListener("pointerout", (event) => {
    const card = event.target instanceof Element ? event.target.closest(".tilt-card") : null;
    if (card && !card.contains(event.relatedTarget)) card.style.transform = "";
  });

  peopleGrid.addEventListener("focusout", (event) => {
    const card = event.target instanceof Element ? event.target.closest(".tilt-card") : null;
    if (card) card.style.transform = "";
  });
}

function setupEvents() {
  document.querySelector(".skip-link").addEventListener("click", (event) => {
    if (!mainContent.inert) return;
    event.preventDefault();
    unlockGift();
  });
  document.querySelector("#open-gift").addEventListener("click", unlockGift);
  galleryGrid.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element ? event.target.closest("[data-photo-index]") : null;
    if (trigger) openPhoto(Number(trigger.dataset.photoIndex), trigger);
  });
  polaroidRail.addEventListener("click", (event) => {
    const trigger = event.target instanceof Element ? event.target.closest("[data-photo-index]") : null;
    if (trigger) openPhoto(Number(trigger.dataset.photoIndex), trigger);
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrevious.addEventListener("click", () => {
    activePhotoIndex = (activePhotoIndex - 1 + portraits.length) % portraits.length;
    updateLightboxImage();
  });
  lightboxNext.addEventListener("click", () => {
    activePhotoIndex = (activePhotoIndex + 1) % portraits.length;
    updateLightboxImage();
  });
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener("close", () => {
    if (lastPhotoTrigger?.isConnected) lastPhotoTrigger.focus({ preventScroll: true });
  });
  wishButton.addEventListener("click", drawWish);
  receiveFlowersButton.addEventListener("click", revealFlowers);
  soundButton.addEventListener("click", toggleMelody);
  menuToggle.addEventListener("click", toggleMenu);
  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) closeMenu();
  });
  document.addEventListener("click", (event) => {
    if (menuToggle.getAttribute("aria-expanded") === "true" && !event.target.closest(".site-header")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      if (lightbox.open) closeLightbox();
      if (surpriseOverlay.classList.contains("is-visible")) hideSurprise();
    }
  });
  footerHeart.addEventListener("click", () => {
    heartCount += 1;
    window.clearTimeout(heartResetTimer);
    heartResetTimer = window.setTimeout(() => { heartCount = 0; }, 4500);
    if (heartCount >= 5) {
      heartCount = 0;
      showSurprise();
    }
  });
  surpriseClose.addEventListener("click", hideSurprise);
  surpriseOverlay.addEventListener("click", (event) => {
    if (event.target === surpriseOverlay) hideSurprise();
  });
}

function initialize() {
  buildGallery();
  buildPolaroids();
  buildPeopleCards();
  setupPolaroidMotion();
  setupEvents();
  setupScrollReveal();
  setupCustomCursor();
  setupParallaxAndTilt();
  createPetals();

  const revealLoader = () => {
    window.setTimeout(() => loader.classList.add("is-hidden"), 480);
  };

  if (document.readyState === "complete") {
    revealLoader();
  } else {
    window.addEventListener("load", revealLoader, { once: true });
  }
}

initialize();
