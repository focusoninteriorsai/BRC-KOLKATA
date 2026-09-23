(function () {
  "use strict";

  /* ═══════════════════════════════════════════════════════════════════════
     🔗🔗🔗  SITE_MEDIA — SABHI HYPERLINKS YAHAN HAIN · YAHAN SE REPLACE KARO
     ═══════════════════════════════════════════════════════════════════════
     Koi bhi PHOTO ya VIDEO badalne ke liye sirf neeche ka LINK change karo.
     Site me kahin aur kuch badalne ki zarurat NAHI hai.

     • VIDEO  → YouTube link yahan paste karo (youtu.be / youtube.com / shorts
                / embed — koi bhi format chalega). Player + thumbnail + button
                teeno apne aap update ho jayenge.
     • PHOTOS → path ("./images/.../photo.jpg") ya direct URL (https://...)
                dono chalenge. Lightbox, gallery aur hero sab update ho jayenge.
     ═══════════════════════════════════════════════════════════════════════ */

  const SITE_MEDIA = {
    /* ▶️ PROJECT FILM — YouTube video ka link (yahan replace karo) */
    video: "https://youtu.be/7DvNoR_8eFk",

    /* 📁 Optional 4K original file (Drive) — buttons ke liye */
    video4kView: "https://drive.google.com/file/d/1OKRYQh_SsAHSd5LOtB4rT_0f4VkJlP8Y/view",
    video4kDownload: "https://drive.google.com/uc?export=download&id=1OKRYQh_SsAHSd5LOtB4rT_0f4VkJlP8Y",

    /* 🖼️ CLIENT PHOTO (CMD Mr. Arun Kumar Rai) — link paste karo.
          Example: "https://your-link.com/photo.jpg" ya "./images/clients/arun-kumar-rai.jpg"
          Khali chhodoge to placeholder dikhega. */
    clientPhoto: "./images/clients/arun-kumar-rai.jpg",

    /* 🖼️ HERO ke upar jo photos cycle hoti hain (bade size me) */
    hero: [
      "./images/gallery/KRI_3180.jpg",
      "./images/gallery/KRI_3128.jpg",
      "./images/gallery/KRI_3207.jpg",
      "./images/gallery/KRI_3118.jpg",
      "./images/gallery/KRI_3228.jpg",
    ],

    /* 🖼️ GALLERY — thumb (chhota), full (lightbox me khulta hai), cap (naam)
          Koi bhi row replace / aur photos add kar sakte ho. */
    gallery: [
      { thumb: "./images/gallery/thumb-KRI_3128.jpg", full: "./images/gallery/KRI_3128.jpg", cap: "Reception" },
      { thumb: "./images/gallery/thumb-KRI_3118.jpg", full: "./images/gallery/KRI_3118.jpg", cap: "Lounge" },
      { thumb: "./images/gallery/thumb-KRI_3180.jpg", full: "./images/gallery/KRI_3180.jpg", cap: "Executive cabin" },
      { thumb: "./images/gallery/thumb-KRI_3207.jpg", full: "./images/gallery/KRI_3207.jpg", cap: "Director’s bay" },
      { thumb: "./images/gallery/thumb-KRI_3228.jpg", full: "./images/gallery/KRI_3228.jpg", cap: "Meeting & work floor" },
      { thumb: "./images/gallery/KRI_3128-reception.jpg", full: "./images/gallery/KRI_3128-reception.jpg", cap: "Reception detail" },
      { thumb: "./images/gallery/KRI_3118-greenwall.jpg", full: "./images/gallery/KRI_3118-greenwall.jpg", cap: "Green wall" },
      { thumb: "./images/gallery/KRI_3228-workstations.jpg", full: "./images/gallery/KRI_3228-workstations.jpg", cap: "Workstations" },
      { thumb: "./images/gallery/KRI_3207-desk.jpg", full: "./images/gallery/KRI_3207-desk.jpg", cap: "Cabin millwork" },
      { thumb: "./images/gallery/KRI_3180-lounge.jpg", full: "./images/gallery/KRI_3180-lounge.jpg", cap: "Cabin lounge" },
    ],
  };

  /* ═══════════════════════════════════════════════════
     Neeche site ka code hai — isse chhed-chhed ki zarurat nahi
     ═══════════════════════════════════════════════════ */

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* Sticky glass nav */
  const nav = $("#site-nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  $("#nav-toggle").addEventListener("click", () => {
    nav.classList.toggle("is-open");
    document.body.style.overflow = nav.classList.contains("is-open") ? "hidden" : "";
  });

  $$("[data-go]").forEach((el) => {
    el.addEventListener("click", (e) => {
      const id = el.getAttribute("data-go");
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      nav.classList.remove("is-open");
      document.body.style.overflow = "";
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* Scroll reveals */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* Animated counters */
  const counters = $$("[data-count]");
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const duration = 1400;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const val = Math.round(end * eased);
          el.textContent = prefix + val.toLocaleString("en-IN") + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => cio.observe(el));

  /* ── YouTube helpers ─────────────────────────────────────────── */
  const youTubeId = (url) => {
    if (!url) return "";
    const m = String(url).match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/))([A-Za-z0-9_-]{6,})/
    );
    return m ? m[1] : "";
  };
  const ytThumb = (id) => (id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : "");
  const ytThumbFallback = (id) => (id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "");
  const ytEmbed = (id) =>
    id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : "";

  const YT_ID = youTubeId(SITE_MEDIA.video);

  /* ── Hero Ken Burns cycle (SITE_MEDIA.hero se) ───────────────── */
  const heroWrap = $("#hero-slides");
  if (heroWrap && SITE_MEDIA.hero && SITE_MEDIA.hero.length) {
    heroWrap.innerHTML = SITE_MEDIA.hero
      .map(
        (src, i) =>
          `<img class="${i === 0 ? "is-on" : ""}" src="${src}" alt="${
            i === 0 ? "BRC Group Kolkata office" : ""
          }" loading="${i === 0 ? "eager" : "lazy"}" title="Click to expand" />`
      )
      .join("");
  }
  const heroSlides = $$(".hero-slides img");
  let heroIdx = 0;
  if (heroSlides.length) {
    setInterval(() => {
      heroSlides[heroIdx].classList.remove("is-on");
      heroIdx = (heroIdx + 1) % heroSlides.length;
      heroSlides[heroIdx].classList.add("is-on");
    }, 7000);
  }

  /* ── Masonry gallery (SITE_MEDIA.gallery se) ─────────────────── */
  const masonry = $("#masonry");
  const gallery = (SITE_MEDIA.gallery || []).map((g) => ({
    src: g.full,
    caption: g.cap,
  }));
  if (masonry && SITE_MEDIA.gallery && SITE_MEDIA.gallery.length) {
    masonry.innerHTML = SITE_MEDIA.gallery
      .map(
        (g, i) => `
        <button data-lb="${i}" type="button" aria-label="Expand: ${g.cap}">
          <img src="${g.thumb}" alt="${g.cap}" loading="lazy" />
          <span class="cap">${g.cap}</span>
        </button>`
      )
      .join("");
  }

  /* ── LIGHTBOX — sab photos expandable ────────────────────────── */
  const lb = $("#lightbox");
  const lbImg = $("#lb-img");
  const lbCap = $("#lb-cap");
  const lbCount = $("#lb-count");
  const lbOpen = $("#lb-open");
  let lbItems = gallery;
  let lbIndex = 0;
  let lastFocus = null;

  const preload = (list, i) => {
    [i - 1, i + 1].forEach((j) => {
      const item = list[(j + list.length) % list.length];
      if (item && item.src) {
        const im = new Image();
        im.src = item.src;
      }
    });
  };

  const renderLb = () => {
    const item = lbItems[lbIndex];
    if (!item) return;
    lbImg.classList.add("is-loading");
    lbImg.onload = () => lbImg.classList.remove("is-loading");
    lbImg.src = item.src;
    lbImg.alt = item.caption || "";
    lbCap.textContent = item.caption || "";
    lbCount.textContent =
      String(lbIndex + 1).padStart(2, "0") + " / " + String(lbItems.length).padStart(2, "0");
    /* 🔗 har photo ki asli hyperlink — “Open full photo” */
    lbOpen.href = item.src;
    const multi = lbItems.length > 1;
    $("#lb-prev").style.display = multi ? "" : "none";
    $("#lb-next").style.display = multi ? "" : "none";
    preload(lbItems, lbIndex);
  };

  const openLb = (items, i, opener) => {
    lbItems = items && items.length ? items : gallery;
    lbIndex = Math.max(0, Math.min(i || 0, lbItems.length - 1));
    lastFocus = opener || document.activeElement;
    renderLb();
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $("#lb-close").focus();
  };

  const closeLb = () => {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  };

  const stepLb = (dir) => {
    if (lbItems.length < 2) return;
    lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
    renderLb();
  };

  /* Gallery buttons */
  const bindGalleryButtons = () => {
    $$("[data-lb]").forEach((btn) => {
      btn.addEventListener("click", () => openLb(gallery, Number(btn.dataset.lb), btn));
    });
  };
  bindGalleryButtons();

  /* Hero photos → expandable (jo slide dikhi wahi lightbox me) */
  heroWrap &&
    heroWrap.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (!img) return;
      const src = img.getAttribute("src");
      const idx = gallery.findIndex((g) => g.src === src);
      if (idx >= 0) {
        openLb(gallery, idx, img);
      } else {
        /* hero photo gallery me nahi hai — akeli expand karo */
        openLb([{ src: src, caption: "Project photo" }], 0, img);
      }
    });

  /* Film cover photo → expandable */
  const filmStill = $("#film-still");
  const filmExpand = $("#film-expand");
  const openStill = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (filmStill) {
      openLb([{ src: filmStill.src, caption: "Project film — cover" }], 0, filmExpand);
    }
  };
  if (filmExpand) filmExpand.addEventListener("click", openStill);

  /* Client photo slot (CMD) — link lagao to expand ho jayegi */
  const photoSlot = $("#client-photo");
  const photoImg = $("#client-photo-img");
  const photoPh = $("#client-photo-ph");
  const CLIENT_PHOTO = SITE_MEDIA.clientPhoto || (photoSlot && photoSlot.getAttribute("href")) || "";

  const showClientPhoto = (src) => {
    if (!photoImg || !photoSlot || !src) return;
    photoImg.onload = () => {
      photoImg.hidden = false;
      if (photoPh) photoPh.style.display = "none";
      photoSlot.classList.add("has-photo");
      photoSlot.setAttribute("href", src);
      photoSlot.addEventListener("click", (e) => {
        e.preventDefault();
        openLb([{ src: src, caption: photoSlot.dataset.cap || "Client" }], 0, photoSlot);
      });
    };
    photoImg.src = src;
  };

  if (CLIENT_PHOTO) {
    const probe = new Image();
    probe.onload = () => showClientPhoto(CLIENT_PHOTO);
    probe.onerror = () => {
      /* photo nahi mili — placeholder rehne do, flag me link ka hint hai */
    };
    probe.src = CLIENT_PHOTO;
  }

  /* Film player — YouTube (lazy mount) */
  const poster = $("#film-poster");
  const player = $("#film-player");
  const frame = $("#film-frame");
  const launch = $("#film-launch");
  const loading = $("#film-loading");
  const linkYT = $("#link-youtube");
  const link4k = $("#link-4k");

  /* 🔁 video + buttons ke hyperlinks SITE_MEDIA se */
  if (linkYT && SITE_MEDIA.video) linkYT.href = SITE_MEDIA.video;
  if (link4k && SITE_MEDIA.video4kView) link4k.href = SITE_MEDIA.video4kView;

  /* Poster thumbnail — YouTube se (badalne par auto-update) */
  if (filmStill && YT_ID) {
    filmStill.src = ytThumb(YT_ID);
    filmStill.addEventListener("error", function onErr() {
      filmStill.removeEventListener("error", onErr);
      filmStill.src = ytThumbFallback(YT_ID);
      filmStill.addEventListener("error", () => {
        filmStill.src = "./images/gallery/KRI_3180.jpg";
      });
    });
  }

  const startFilm = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (frame.dataset.loaded) return;

    if (!YT_ID) {
      /* link sahi nahi hai — user ko hint do */
      loading.classList.remove("hidden");
      loading.querySelector("span:last-child").textContent =
        "Video link check karo — js/main.js → SITE_MEDIA.video";
      player.hidden = false;
      player.setAttribute("aria-hidden", "false");
      poster.setAttribute("aria-hidden", "true");
      poster.hidden = true;
      frame.dataset.loaded = "1";
      return;
    }

    frame.src = ytEmbed(YT_ID);
    frame.dataset.loaded = "1";
    loading.classList.remove("hidden");
    player.hidden = false;
    player.setAttribute("aria-hidden", "false");
    poster.setAttribute("aria-hidden", "true");
    poster.hidden = true;

    frame.addEventListener("load", () => {
      loading.classList.add("hidden");
    });
  };

  if (launch) launch.addEventListener("click", startFilm);
  if (poster) {
    poster.setAttribute("role", "button");
    poster.setAttribute("tabindex", "0");
    poster.setAttribute("aria-label", "Play the BRC Group project film");
    poster.addEventListener("click", (e) => {
      if (e.target.closest("#film-expand")) return;
      startFilm(e);
    });
    poster.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startFilm();
      }
    });
  }

  /* Lightbox controls */
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", () => stepLb(-1));
  $("#lb-next").addEventListener("click", () => stepLb(1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.id === "lb-stage") closeLb();
  });
  window.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") stepLb(-1);
    if (e.key === "ArrowRight") stepLb(1);
  });

  /* Touch swipe — mobile par left/right photo */
  let touchX = null;
  const stage = $("#lb-stage");
  stage.addEventListener(
    "touchstart",
    (e) => {
      touchX = e.changedTouches[0].clientX;
    },
    { passive: true }
  );
  stage.addEventListener(
    "touchend",
    (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 45) stepLb(dx < 0 ? 1 : -1);
      touchX = null;
    },
    { passive: true }
  );
})();
