/* ============================================================
   BABY BAKERS — INTERACTIONS & RENDERING
   Reads content from js/data.js and builds the page.
   ============================================================ */
(function () {
  "use strict";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Branded fallback tile if any photo fails to load */
  const FALLBACK =
    "data:image/svg+xml," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'>
        <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0' stop-color='#FCE8A8'/><stop offset='1' stop-color='#F4B400'/></linearGradient></defs>
        <rect width='400' height='400' fill='url(#g)'/>
        <g stroke='#E2231A' stroke-width='9' fill='none' stroke-linecap='round'>
        <path d='M200 120v170'/>
        <path d='M200 165c-22-20-46-20-64 0M200 165c22-20 46-20 64 0'/>
        <path d='M200 210c-22-20-46-20-64 0M200 210c22-20 46-20 64 0'/>
        <path d='M200 255c-22-20-46-20-64 0M200 255c22-20 46-20 64 0'/></g>
      </svg>`
    );
  window.__imgErr = function (img) {
    if (img.dataset.fb) return;
    img.dataset.fb = "1";
    img.src = FALLBACK;
    const p = img.parentElement;
    if (p) p.classList.add("imgfallback");
  };
  const imgTag = (src, alt) =>
    `<img loading="lazy" src="${src}" alt="${alt.replace(/"/g, "&quot;")}" onerror="window.__imgErr(this)">`;

  const waLink = (text) =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

  /* ---------------- CONFIG-DRIVEN TEXT / LINKS ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
    const wa = $("#waFab");
    if (wa) wa.href = waLink(`Hi ${CONFIG.brand}, I'd like to place an order.`);
    $$("[data-wa-generic]").forEach(
      (a) => (a.href = waLink(`Hi ${CONFIG.brand}, I'd like to place an order.`))
    );
    $$("[data-wa-cake]").forEach(
      (a) =>
        (a.href = waLink(
          `Hi ${CONFIG.brand}, I'd like to design a custom cake. Occasion: ____, Flavour: ____, Weight: ____, Date needed: ____`
        ))
    );
    $$("[data-phone]").forEach((a) => {
      a.href = "tel:" + CONFIG.phoneTel;
      a.textContent = CONFIG.phoneDisplay;
    });
    $$("[data-email]").forEach((a) => {
      a.href = "mailto:" + CONFIG.email;
      a.textContent = CONFIG.email;
    });
    $$("[data-region]").forEach((el) => (el.textContent = CONFIG.region));

    renderCategories();
    renderMenu();
    renderLocations();
    renderTimeline();
    renderStats();
    setupNav();
    setupMotion();
  });

  /* ---------------- CATEGORY SHOWCASE ---------------- */
  function renderCategories() {
    const track = $("#track");
    if (!track) return;
    track.innerHTML = CATEGORIES.map(
      (c) => `
      <article class="cat-card" data-jump="${c.jump}">
        <div class="cat-photo">
          ${imgTag(c.img, c.name)}
          <span class="cat-ml ml">${c.ml}</span>
        </div>
        <div class="cat-body">
          <h3>${c.name}</h3>
          <span class="go" aria-hidden="true">&rarr;</span>
        </div>
      </article>`
    ).join("");
    // clicking a shelf jumps to that menu category
    $$(".cat-card", track).forEach((card) =>
      card.addEventListener("click", () => {
        const jump = card.dataset.jump;
        setTab(jump);
        $("#menu").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      })
    );
  }

  /* ---------------- MENU ---------------- */
  const tabsWrap = () => $("#tabs");
  const grid = () => $("#menuGrid");
  let activeTab = "All";
  const tabNames = () => ["All", ...new Set(MENU.map((i) => i.cat))];

  function setTab(t) {
    activeTab = tabNames().includes(t) ? t : "All";
    drawTabs();
    drawGrid();
  }
  function drawTabs() {
    tabsWrap().innerHTML = tabNames()
      .map(
        (t) =>
          `<button class="tab ${t === activeTab ? "active" : ""}" data-tab="${t}">${t}</button>`
      )
      .join("");
  }
  function drawGrid() {
    const items = activeTab === "All" ? MENU : MENU.filter((i) => i.cat === activeTab);
    grid().innerHTML = items
      .map(
        (i) => `
      <article class="item-card">
        <div class="item-photo">
          ${i.popular ? `<span class="badge-pop">★ Popular</span>` : ""}
          <span class="diet-dot ${i.diet === "egg" ? "egg" : ""}" title="${
          i.diet === "egg" ? "Contains egg (eggless on request)" : "Pure vegetarian"
        }"><i></i></span>
          ${imgTag(i.img, i.name)}
        </div>
        <div class="item-info">
          <h4>${i.name}</h4>
          <span class="ml">${i.ml || ""}</span>
          <span class="price">${i.price}</span>
          <a class="order-link" href="${waLink(
            `Hi ${CONFIG.brand}, I'd like to order: ${i.name} (${i.price})`
          )}" target="_blank" rel="noopener">Order on WhatsApp &rarr;</a>
        </div>
      </article>`
      )
      .join("");
    // fade the new cards in
    if (!reduce) {
      $$(".item-card", grid()).forEach((c, idx) => {
        c.style.opacity = 0;
        c.style.transform = "translateY(18px)";
        setTimeout(() => {
          c.style.transition = "opacity .5s ease, transform .5s ease";
          c.style.opacity = 1;
          c.style.transform = "none";
        }, 40 + idx * 45);
      });
    }
  }
  function renderMenu() {
    if (!tabsWrap() || !grid()) return;
    drawTabs();
    drawGrid();
    tabsWrap().addEventListener("click", (e) => {
      const b = e.target.closest(".tab");
      if (b) setTab(b.dataset.tab);
    });
  }

  /* ---------------- LOCATIONS ---------------- */
  function renderLocations() {
    const list = $("#locList");
    if (!list) return;
    list.innerHTML = LOCATIONS.map((l) => {
      const hyper = /hyper/i.test(l.type);
      return `
      <div class="loc-card">
        <div>
          <div class="l-name"><span class="loc-pin ${hyper ? "hyper" : ""}"></span>${l.name}</div>
          <div class="l-meta">${l.type} · ${l.area} · ${l.hours}</div>
        </div>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${l.lat},${l.lng}" target="_blank" rel="noopener">Directions</a>
      </div>`;
    }).join("");
    // center map on the main branch
    const iframe = $("#mapFrame");
    if (iframe) {
      const m = LOCATIONS[0];
      iframe.src = `https://www.google.com/maps?q=${m.lat},${m.lng}&z=15&output=embed`;
    }
  }

  /* ---------------- TIMELINE ---------------- */
  function renderTimeline() {
    const tl = $("#timeline");
    if (!tl) return;
    tl.innerHTML = TIMELINE.map(
      (t) => `
      <div class="tl-item reveal">
        <div class="tl-dot">${t.year}</div>
        <h4>${t.year}</h4>
        <p>${t.text}</p>
      </div>`
    ).join("");
  }

  /* ---------------- STATS ---------------- */
  function renderStats() {
    const row = $("#statRow");
    if (!row) return;
    row.innerHTML = STATS.map(
      (s) => `
      <div class="stat reveal">
        <div class="num" data-count="${s.num}" data-suffix="${s.suffix || ""}">0</div>
        <div class="lbl">${s.label}</div>
      </div>`
    ).join("");
  }

  /* ---------------- NAV ---------------- */
  function setupNav() {
    const nav = $("#siteNav");
    window.addEventListener(
      "scroll",
      () => nav.classList.toggle("scrolled", window.scrollY > 60),
      { passive: true }
    );
    const toggle = $(".nav-toggle"),
      links = $(".nav-links");
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    $$(".nav-links a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      })
    );
  }

  /* ---------------- MOTION (GSAP) ---------------- */
  function setupMotion() {
    // hero logo entrance (independent of GSAP)
    const logo = $("#heroLogo");
    if (logo) requestAnimationFrame(() => logo.classList.add("in"));

    if (typeof gsap === "undefined") {
      $$(".reveal").forEach((el) => el.classList.add("is-in"));
      $$("[data-count]").forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // floating grain dots in hero
    if (!reduce) {
      const hero = $(".hero");
      for (let i = 0; i < 14; i++) {
        const d = document.createElement("span");
        d.className = "grain-dot";
        const s = 4 + Math.random() * 10;
        d.style.cssText = `width:${s}px;height:${s}px;left:${Math.random() * 100}%;top:${
          20 + Math.random() * 70
        }%`;
        hero.appendChild(d);
        gsap.to(d, {
          y: -30 - Math.random() * 60,
          x: (Math.random() - 0.5) * 40,
          opacity: 0,
          duration: 3 + Math.random() * 3,
          repeat: -1,
          delay: Math.random() * 3,
          ease: "power1.out",
        });
      }
      // hero bg parallax
      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    }

    // generic reveals
    $$(".reveal").forEach((el) => {
      if (reduce) return el.classList.add("is-in");
      ScrollTrigger.create({
        trigger: el,
        start: "top 86%",
        once: true,
        onEnter: () => el.classList.add("is-in"),
      });
    });

    // count-up stats
    $$("[data-count]").forEach((el) => {
      const target = +el.dataset.count,
        suffix = el.dataset.suffix || "";
      if (reduce) return (el.textContent = target + suffix);
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          const o = { v: 0 };
          gsap.to(o, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: () => (el.textContent = Math.round(o.v) + suffix),
          });
        },
      });
    });

    // pinned horizontal category showcase
    const pin = $("#showcasePin"),
      track = $("#track");
    if (pin && track) {
      if (reduce || window.innerWidth < 760) {
        track.style.overflowX = "auto";
        track.style.scrollSnapType = "x mandatory";
        track.style.paddingBottom = "1rem";
        $$(".cat-card", track).forEach((c) => (c.style.scrollSnapAlign = "center"));
      } else {
        const dist = () => track.scrollWidth - window.innerWidth + window.innerWidth * 0.12;
        gsap.to(track, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => "+=" + dist(),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }
    }
  }

  /* hide loader when everything is ready */
  window.addEventListener("load", () => {
    const l = $("#loader");
    if (l) setTimeout(() => l.classList.add("done"), 350);
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.refresh();
  });
})();
