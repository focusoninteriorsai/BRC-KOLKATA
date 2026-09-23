(function () {
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

  /* Hero Ken Burns cycle */
  const heroSlides = $$(".hero-slides img");
  let heroIdx = 0;
  if (heroSlides.length) {
    setInterval(() => {
      heroSlides[heroIdx].classList.remove("is-on");
      heroIdx = (heroIdx + 1) % heroSlides.length;
      heroSlides[heroIdx].classList.add("is-on");
    }, 7000);
  }

  /* Film player — lazy-mounts the Google Drive embed on demand */
  const film = $("#film");
  const poster = $("#film-poster");
  const player = $("#film-player");
  const frame = $("#film-frame");
  const launch = $("#film-launch");
  const loading = $("#film-loading");

  const VIDEO_FILE_ID = "1OKRYQh_SsAHSd5LOtB4rT_0f4VkJlP8Y";
  const VIDEO_EMBED = `https://drive.google.com/file/d/${VIDEO_FILE_ID}/preview`;

  const startFilm = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    if (frame.dataset.loaded) return;

    /* Populate the src first so the frame can start buffering */
    frame.src = VIDEO_EMBED;
    frame.dataset.loaded = "1";
    loading.classList.remove("hidden");
    player.hidden = false;
    player.setAttribute("aria-hidden", "false");
    poster.setAttribute("aria-hidden", "true");
    poster.hidden = true;

    /* The poster holds the layout; swap when the iframe is ready */
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
      startFilm(e);
    });
    poster.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        startFilm();
      }
    });
  }

  /* Lightbox */
  const gallery = [
    { src: "./images/gallery/KRI_3128.jpg", caption: "Reception" },
    { src: "./images/gallery/KRI_3118.jpg", caption: "Lounge" },
    { src: "./images/gallery/KRI_3180.jpg", caption: "Executive cabin" },
    { src: "./images/gallery/KRI_3207.jpg", caption: "Director’s bay" },
    { src: "./images/gallery/KRI_3228.jpg", caption: "Meeting & work floor" },
    { src: "./images/gallery/KRI_3128-reception.jpg", caption: "Reception detail" },
    { src: "./images/gallery/KRI_3118-greenwall.jpg", caption: "Green wall" },
    { src: "./images/gallery/KRI_3228-workstations.jpg", caption: "Workstations" },
    { src: "./images/gallery/KRI_3207-desk.jpg", caption: "Cabin millwork" },
    { src: "./images/gallery/KRI_3180-lounge.jpg", caption: "Cabin lounge" },
  ];

  const lb = $("#lightbox");
  const lbImg = $("#lb-img");
  const lbCap = $("#lb-cap");
  const lbCount = $("#lb-count");
  let lbIndex = 0;

  const renderLb = () => {
    const item = gallery[lbIndex];
    lbImg.src = item.src;
    lbImg.alt = item.caption;
    lbCap.textContent = item.caption;
    lbCount.textContent =
      String(lbIndex + 1).padStart(2, "0") + " / " + String(gallery.length).padStart(2, "0");
  };

  const openLb = (i) => {
    lbIndex = i;
    renderLb();
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };
  const closeLb = () => {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
  };
  const prevLb = () => {
    lbIndex = (lbIndex - 1 + gallery.length) % gallery.length;
    renderLb();
  };
  const nextLb = () => {
    lbIndex = (lbIndex + 1) % gallery.length;
    renderLb();
  };

  $$("[data-lb]").forEach((btn) => {
    btn.addEventListener("click", () => openLb(Number(btn.dataset.lb)));
  });
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", prevLb);
  $("#lb-next").addEventListener("click", nextLb);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLb();
  });
  window.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") prevLb();
    if (e.key === "ArrowRight") nextLb();
  });
})();
