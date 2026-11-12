/* ==========================================================================
   TEMPLATE 3 — "Executive Sapphire & Maritime Slate Studio" Application Engine
   Handles: ☀️/🌙 Theme Switch, LocalStorage Cache, SVG Progress Ring,
            Speed Simulator, Trap Flip Cards, Top 60-Matrix, Split Workbench,
            Practice Timer, and PDF Export.
   ========================================================================== */

(() => {
  const STORAGE_KEY = "pcaof_t3_portal_state_v1";
  const THEME_KEY = "pcaof_t3_theme_v1";

  const DEFAULT_STATE = {
    currentId: 1,
    selected: {},
    confirmed: {},
    bookmarks: [],
    category: "ALL",
    statusFilter: "all", // "all" | "active" | "flagged" | "wrong"
    timerSeconds: 120 * 60,
    timerRunning: false
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_STATE };
      const p = JSON.parse(raw);
      return {
        ...DEFAULT_STATE,
        ...p,
        selected: p.selected || {},
        confirmed: p.confirmed || {},
        bookmarks: Array.isArray(p.bookmarks) ? p.bookmarks : [],
        timerRunning: false
      };
    } catch {
      return { ...DEFAULT_STATE };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore storage limits
    }
  }

  let state = loadState();
  let lastRenderedId = null;
  let timerInterval = null;

  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const getQuestions = () => (window.PCAOF_DATA && window.PCAOF_DATA.QUESTIONS) || [];
  const getById = (id) => getQuestions().find((q) => q.id === Number(id)) || null;

  function computeStats() {
    const qs = getQuestions();
    const cap = (window.PCAOF_DATA && window.PCAOF_DATA.EXAM_CONFIG.totalCapacity) || 60;
    let answered = 0;
    let correct = 0;
    qs.forEach((q) => {
      const pick = state.confirmed[q.id];
      if (pick) {
        answered++;
        if (pick === q.correct) correct++;
      }
    });
    const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
    return { totalActive: qs.length, totalCapacity: cap, answered, correct, accuracy };
  }

  function toast(msg) {
    let el = document.getElementById("t2-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "t2-toast";
      el.className = "t2-toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 2400);
  }

  /* ------------------------------------------------------------------------
     Theme Toggle (2-Emoji Sun / Moon Switch — Dark & Light)
     ------------------------------------------------------------------------ */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", theme === "dark" ? "Dark theme active — switch to Light theme" : "Light theme active — switch to Dark theme");
      btn.setAttribute("title", theme === "dark" ? "Dark Theme (click for Light)" : "Light Theme (click for Dark)");
    });
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const initial =
      saved === "dark" || saved === "light"
        ? saved
        : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    applyTheme(initial);

    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "light";
        const next = cur === "dark" ? "light" : "dark";
        applyTheme(next);
        toast(next === "dark" ? "🌙 Dark theme" : "☀️ Light theme");
      });
    });
  }

  function initDock() {
    const burger = document.getElementById("dock-burger");
    const nav = document.getElementById("dock-nav");
    if (burger && nav) {
      burger.addEventListener("click", () => nav.classList.toggle("open"));
    }

    document.querySelectorAll("[data-download-pdf]").forEach((btn) => {
      btn.addEventListener("click", exportPDF);
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.01, rootMargin: "120px 0px" }
      );
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 120) {
          el.classList.add("visible");
        } else {
          obs.observe(el);
        }
      });
    } else {
      items.forEach((el) => el.classList.add("visible"));
    }
  }

  /* ------------------------------------------------------------------------
     HOME PAGE (template 2/index.html)
     ------------------------------------------------------------------------ */
  function initHome() {
    const stats = computeStats();
    const set = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.textContent = v;
    };

    set("t2-stat-slots", stats.totalCapacity);
    set("t2-stat-live", stats.totalActive);
    set("t2-stat-done", `${stats.answered}/${stats.totalActive}`);
    set("t2-stat-acc", `${stats.accuracy}%`);

    const ring = document.getElementById("t2-ring-fg");
    const ringPct = document.getElementById("t2-ring-pct");
    const pct = stats.totalActive ? Math.round((stats.answered / stats.totalActive) * 100) : 0;
    if (ring) {
      const r = 23;
      const circ = 2 * Math.PI * r;
      ring.style.strokeDasharray = `${circ}`;
      ring.style.strokeDashoffset = `${circ * (1 - pct / 100)}`;
    }
    if (ringPct) ringPct.textContent = `${pct}%`;

    const resumeBtn = document.getElementById("t2-home-start-btn");
    if (resumeBtn && (stats.answered > 0 || Object.keys(state.selected).length > 0)) {
      resumeBtn.textContent = `Resume Quiz at Q#${state.currentId} →`;
    }

    const bentoHost = document.getElementById("t2-bento-domains");
    if (bentoHost && window.PCAOF_DATA) {
      const spans = ["bento-span-4", "bento-span-4", "bento-span-4", "bento-span-6", "bento-span-6"];
      bentoHost.innerHTML = window.PCAOF_DATA.CATEGORIES.map((c, idx) => {
        const count = getQuestions().filter((q) => q.category === c.id).length;
        return `
          <article class="bento bento-lift bento-pad ${spans[idx] || "bento-span-4"} reveal">
            <div class="domain-accent-bar"></div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
              <span class="k-tag k-tag-indigo">${c.icon} ${esc(c.short)}</span>
              <span class="mono" style="font-size:0.8rem; font-weight:700; color:var(--t2-secondary);">${count} Scenario MCQs</span>
            </div>
            <h3 style="font-size:1.12rem; margin-bottom:8px;">${esc(c.id)}</h3>
            <p style="font-size:0.9rem; color:var(--t2-ink-2); margin-bottom:14px;">${esc(c.description)}</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px;">
              ${c.topics.map((t) => `<span class="k-tag k-tag-emerald" style="font-size:0.68rem;">${esc(t)}</span>`).join("")}
            </div>
            <a class="k-btn k-btn-outline k-btn-sm" href="quiz.html?category=${encodeURIComponent(c.id)}">
              Drill ${esc(c.short)} →
            </a>
          </article>
        `;
      }).join("");
    }

    // Home interactive teaser card
    document.querySelectorAll("[data-teaser-opt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const pick = btn.getAttribute("data-teaser-opt");
        const out = document.getElementById("t2-teaser-out");
        if (!out) return;
        document.querySelectorAll("[data-teaser-opt]").forEach((b) => b.classList.remove("selected", "correct-reveal", "wrong-reveal"));
        document.querySelector('[data-teaser-opt="B"]')?.classList.add("correct-reveal");
        if (pick !== "B") btn.classList.add("wrong-reveal");
        out.style.display = "block";
        out.innerHTML =
          pick === "B"
            ? `<strong style="color:var(--t2-ok);">✓ Exact!</strong> 10% of 1,600 is 160, and half of 160 (5%) is 80 — 160 − 40 = 120 in seconds!`
            : `<strong style="color:var(--t2-err);">✕ Watch the base!</strong> 7.5% = 10% (160) − 2.5% (40) = 120 errors.`;
      });
    });
  }

  /* ------------------------------------------------------------------------
     TIPS & TRICKS PAGE (template 2/tips.html)
     ------------------------------------------------------------------------ */
  function initTips() {
    const SIM_DATA = {
      anchor: {
        title: "Easy Percentage Trick (10% · 5% · 25% · 50%)",
        problem: "Find 7.5% of 1,600 (no calculator allowed!)",
        steps: [
          "1. Find 10% by dropping one zero: 1,600 ÷ 10 = 160.",
          "2. Cut 10% in half to get 5%: 160 ÷ 2 = 80. Cut 5% in half to get 2.5%: 80 ÷ 2 = 40.",
          "3. Subtract or add: 10% − 2.5% = 160 − 40 = 120 (same as 5% + 2.5% = 80 + 40 = 120)."
        ],
        takeaway: "Use simple building blocks — 10% (÷10), 20% (÷5), 25% (÷4), 50% (÷2), and 5% (half of 10%) — instead of messy multiplication."
      },
      fraction: {
        title: "Fractions: Divide First, Then Multiply + What's Left?",
        problem: "40 files: 1/4 are out of date, then 1/5 of the remaining files are duplicates",
        steps: [
          "1. Jump straight to what stays: if 1/4 are removed, 3/4 stay.",
          "2. Divide by the bottom number first, then multiply: (40 ÷ 4) × 3 = 10 × 3 = 30 files stay.",
          "3. Next, 1/5 are duplicates, so 4/5 stay: (30 ÷ 5) × 4 = 6 × 4 = 24 files remain."
        ],
        takeaway: "Always divide by the bottom number first to keep numbers tiny, and solve for what stays right away so you don't stop halfway."
      },
      sample: {
        title: "Sample vs. Unchecked Shortcut",
        problem: "300 out of 1,200 tickets checked → 18 errors found. Expected in the 900 UNREAD tickets?",
        steps: [
          "1. Check carefully what is asked: the 900 unread tickets only, NOT all 1,200.",
          "2. See how many times bigger the unread group is: 900 ÷ 300 = 3 times bigger.",
          "3. Multiply the sample errors by 3: 18 × 3 = 54 expected errors in unread tickets."
        ],
        takeaway: "Compare the size of the target group with the checked sample — and never add back errors that were already fixed in the sample."
      },
      netunit: {
        title: "Real Time Saved (Your Time Only!) & Minutes to Hours",
        problem: "Manual scan takes 90 min. AI scan: you spend 10 min writing brief, AI runs 12 min, you spend 20 min checking.",
        steps: [
          "1. Only count YOUR own work time: 10 min (brief) + 20 min (check) = 30 minutes.",
          "2. Ignore the AI's 12-minute run time because you are not waiting idle as labor cost.",
          "3. Subtract from the old time: 90 − 30 = 60 minutes saved (60 ÷ 60 = 1 hour)."
        ],
        takeaway: "Real time saved = Old time − (your setup + your review/fix time). Convert minutes to hours by dividing by 60."
      },
      pp: {
        title: "Percentage Points vs. Real % Change",
        problem: "Accuracy improves from 80% in Cycle 1 to 92% in Cycle 2",
        steps: [
          "1. Percentage points = simple subtraction: 92% − 80% = 12 percentage points.",
          "2. Real percentage change divides by the STARTING number: 12 ÷ 80 = 3/20.",
          "3. Change 3/20 to a percent cleanly: since 1/20 = 5%, 3/20 = 15% relative increase."
        ],
        takeaway: "Percentage points = just subtract (New % − Old %). Relative % increase = divide the change by the starting %."
      },
      judgment: {
        title: "Is This Even a Math Question? (The ×10 Test)",
        problem: "AI recommends 3 hires ($270,000) under a $300,000 budget, but leadership froze hiring last week.",
        steps: [
          "1. Pretend every number is 10 times bigger (make the budget $3,000,000 instead of $300,000).",
          "2. Ask: does the right answer change? No — the hiring freeze still blocks the plan.",
          "3. Watch for this when real-world risk (public legal notice vs. internal draft) or privacy rules decide the answer."
        ],
        takeaway: "If making the numbers 10× bigger doesn't change the decision, the numbers are just decoration — follow the rule or risk!"
      }
    };

    const simStage = document.getElementById("t2-sim-stage");
    const renderSim = (key) => {
      const d = SIM_DATA[key];
      if (!d || !simStage) return;
      simStage.innerHTML = `
        <div>
          <span class="k-tag k-tag-emerald">Mental Math Simulation</span>
          <h3 style="margin-top:10px; font-size:1.2rem;">${esc(d.title)}</h3>
          <p class="mono" style="margin-top:6px; font-size:0.9rem; color:var(--t2-primary); font-weight:600;">${esc(d.problem)}</p>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${d.steps.map((s) => `<div class="sim-step">${esc(s)}</div>`).join("")}
        </div>
        <div style="font-size:0.88rem; color:var(--t2-ink-2); padding-top:8px; border-top:1px solid var(--t2-border);">
          <strong>Key Rule:</strong> ${esc(d.takeaway)}
        </div>
      `;
    };

    document.querySelectorAll("[data-sim-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-sim-key]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderSim(btn.getAttribute("data-sim-key"));
      });
    });
    if (simStage) renderSim("anchor");

    // Flip/Reveal Trap Cards
    document.querySelectorAll("[data-trap-card]").forEach((card) => {
      card.addEventListener("click", () => {
        const pane = card.querySelector(".trap-reveal-pane");
        const hint = card.querySelector(".trap-click-hint");
        if (!pane) return;
        const isOpen = pane.style.display !== "none";
        pane.style.display = isOpen ? "none" : "block";
        if (hint) hint.textContent = isOpen ? "Click to reveal Safe Fix →" : "Hide Fix ↑";
      });
    });

    // Warm-Up Drills
    document.querySelectorAll("[data-k-drill]").forEach((box) => {
      const right = box.getAttribute("data-right");
      const explain = box.getAttribute("data-explain");
      const fb = box.querySelector(".k-drill-fb");
      box.querySelectorAll("[data-opt]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const v = btn.getAttribute("data-opt");
          box.querySelectorAll("[data-opt]").forEach((b) => {
            b.classList.remove("correct-reveal", "wrong-reveal");
            if (b.getAttribute("data-opt") === right) b.classList.add("correct-reveal");
          });
          if (v !== right) btn.classList.add("wrong-reveal");
          if (fb) {
            fb.style.display = "block";
            fb.innerHTML = `<strong>${v === right ? "✓ Spot On!" : "✕ Trap Hit!"}</strong> ${esc(explain)}`;
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     QUIZ ARENA PAGE (template 2/quiz.html)
     ------------------------------------------------------------------------ */
  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function initQuiz() {
    const wb = document.getElementById("t2-workbench");
    if (!wb) return;

    const params = new URLSearchParams(window.location.search);
    const urlCat = params.get("category");
    const urlQ = params.get("q");
    if (urlCat) {
      state.category = urlCat;
      const first = getQuestions().find((q) => q.category === urlCat);
      if (first) state.currentId = first.id;
    }
    if (urlQ && Number(urlQ) >= 1 && Number(urlQ) <= 60) {
      state.currentId = Number(urlQ);
    }

    // Render category chips
    const chipHost = document.getElementById("t2-cat-chips");
    if (chipHost && window.PCAOF_DATA) {
      const chips = [
        { id: "ALL", label: "All Categories" },
        ...window.PCAOF_DATA.CATEGORIES.map((c) => ({ id: c.id, label: c.short }))
      ];
      chipHost.innerHTML = chips
        .map(
          (c) =>
            `<button type="button" class="cat-chip ${state.category === c.id ? "active" : ""}" data-cat-chip="${esc(
              c.id
            )}">${esc(c.label)}</button>`
        )
        .join("");

      chipHost.querySelectorAll("[data-cat-chip]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.category = btn.getAttribute("data-cat-chip");
          if (state.category !== "ALL") {
            const m = getQuestions().find((q) => q.category === state.category);
            if (m) state.currentId = m.id;
          }
          saveState();
          renderArena();
        });
      });
    }

    // Status filter chips
    document.querySelectorAll("[data-status-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.statusFilter = btn.getAttribute("data-status-filter");
        saveState();
        renderMatrix();
      });
    });

    // Optional Exam Timer
    const timerDisplay = document.getElementById("t2-timer-display");
    const timerToggle = document.getElementById("t2-timer-toggle");
    const timerReset = document.getElementById("t2-timer-reset");

    const syncTimerUI = () => {
      if (timerDisplay) timerDisplay.textContent = formatTimer(state.timerSeconds);
      if (timerToggle) timerToggle.textContent = state.timerRunning ? "Pause" : "Start";
    };

    if (timerToggle) {
      timerToggle.addEventListener("click", () => {
        state.timerRunning = !state.timerRunning;
        if (state.timerRunning) {
          timerInterval = setInterval(() => {
            if (state.timerSeconds > 0) {
              state.timerSeconds--;
              syncTimerUI();
              if (state.timerSeconds % 5 === 0) saveState();
            } else {
              state.timerRunning = false;
              clearInterval(timerInterval);
              syncTimerUI();
              toast("⏰ 120-minute exam clock finished!");
            }
          }, 1000);
        } else {
          clearInterval(timerInterval);
        }
        syncTimerUI();
      });
    }

    if (timerReset) {
      timerReset.addEventListener("click", () => {
        clearInterval(timerInterval);
        state.timerRunning = false;
        state.timerSeconds = 120 * 60;
        saveState();
        syncTimerUI();
        toast("Exam timer reset to 120:00");
      });
    }
    syncTimerUI();

    // Reset Progress Modal
    const resetBtn = document.getElementById("t2-reset-btn");
    const resetModal = document.getElementById("t2-reset-modal");
    const resetCancel = document.getElementById("t2-reset-cancel");
    const resetConfirm = document.getElementById("t2-reset-confirm");

    if (resetBtn && resetModal) {
      resetBtn.addEventListener("click", () => resetModal.classList.add("open"));
      resetCancel?.addEventListener("click", () => resetModal.classList.remove("open"));
      resetConfirm?.addEventListener("click", () => {
        clearInterval(timerInterval);
        state = { ...DEFAULT_STATE };
        saveState();
        syncTimerUI();
        resetModal.classList.remove("open");
        renderArena();
        toast("Local progress cleared");
      });
      resetModal.addEventListener("click", (e) => {
        if (e.target === resetModal) resetModal.classList.remove("open");
      });
    }

    // Keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;
      const q = getById(state.currentId);
      const map = { "1": "A", "2": "B", "3": "C", "4": "D", a: "A", b: "B", c: "C", d: "D" };
      const k = e.key.toLowerCase();
      if (q && map[k] && !state.confirmed[q.id]) {
        pickOption(q.id, map[k]);
      } else if (e.key === "Enter" && q && state.selected[q.id] && !state.confirmed[q.id]) {
        confirmQuestion(q.id);
      } else if (e.key === "ArrowRight") {
        stepQuestion(1);
      } else if (e.key === "ArrowLeft") {
        stepQuestion(-1);
      }
    });

    renderArena();
  }

  function renderArena() {
    renderHeaderStats();
    renderMatrix();
    renderWorkbench();
  }

  function renderHeaderStats() {
    const stats = computeStats();
    const set = (id, v) => {
      const el = document.getElementById(id);
      if (el) el.textContent = v;
    };
    set("t2-arena-answered", `${stats.answered} / ${stats.totalActive} Confirmed`);
    set("t2-arena-accuracy", `${stats.accuracy}% Accuracy`);

    document.querySelectorAll("[data-cat-chip]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-cat-chip") === state.category);
    });
  }

  function renderMatrix() {
    const rail = document.getElementById("t2-matrix-rail");
    if (!rail) return;

    document.querySelectorAll("[data-status-filter]").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-status-filter") === state.statusFilter);
    });

    const cap = (window.PCAOF_DATA && window.PCAOF_DATA.EXAM_CONFIG.totalCapacity) || 60;

    const cells = [];
    for (let i = 1; i <= cap; i++) {
      const q = getById(i);
      if (state.category !== "ALL" && (!q || q.category !== state.category)) continue;
      if (state.statusFilter === "active" && (!q || state.confirmed[i])) continue;
      if (state.statusFilter === "flagged" && !state.bookmarks.includes(i)) continue;
      if (state.statusFilter === "wrong") {
        if (!q || !state.confirmed[i] || state.confirmed[i] === q.correct) continue;
      }

      const cls = ["matrix-cell"];
      if (i === state.currentId) cls.push("is-current");
      if (!q) {
        cls.push("is-slot");
      } else {
        const conf = state.confirmed[i];
        if (conf) cls.push(conf === q.correct ? "is-correct" : "is-wrong");
        else if (state.selected[i]) cls.push("is-picked");
        if (state.bookmarks.includes(i)) cls.push("is-flagged");
      }

      cells.push(
        `<button type="button" class="${cls.join(" ")}" data-jump-q="${i}" title="${
          q ? `Q${i}: ${esc(q.category)}` : `Slot Q${i} (Pending bank item)`
        }">${i}</button>`
      );
    }

    rail.innerHTML = cells.length
      ? cells.join("")
      : `<span style="grid-column: 1 / -1; font-size:0.86rem; color:var(--t2-muted);">No questions match the current filter.</span>`;

    rail.querySelectorAll("[data-jump-q]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.currentId = Number(btn.getAttribute("data-jump-q"));
        saveState();
        renderMatrix();
        renderWorkbench();
      });
    });
  }

  function renderWorkbench() {
    const wb = document.getElementById("t2-workbench");
    if (!wb) return;

    const q = getById(state.currentId);
    if (!q) {
      wb.classList.remove("is-split");
      wb.innerHTML = `
        <article class="bento bento-pad" style="text-align:center; padding:42px 28px;">
          <span class="k-tag k-tag-amber">Slot Q${state.currentId} of 60 • Bank Architecture Ready</span>
          <h2 style="margin:14px 0 10px; font-size:1.55rem;">Question #${state.currentId} Slot Prepared</h2>
          <p style="max-width:560px; margin:0 auto 20px; color:var(--t2-ink-2);">
            This slot is reserved in <code>questions.js</code>.
          </p>
          <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
            <button type="button" class="k-btn k-btn-primary" id="t2-jump-q1">Jump to Active Q1–Q10</button>
            <button type="button" class="k-btn k-btn-outline" id="t2-slot-prev">← Prev</button>
            <button type="button" class="k-btn k-btn-outline" id="t2-slot-next">Next →</button>
          </div>
        </article>
      `;
      document.getElementById("t2-jump-q1")?.addEventListener("click", () => {
        state.currentId = 1;
        saveState();
        renderArena();
      });
      document.getElementById("t2-slot-prev")?.addEventListener("click", () => stepQuestion(-1));
      document.getElementById("t2-slot-next")?.addEventListener("click", () => stepQuestion(1));
      return;
    }

    const picked = state.selected[q.id] || null;
    const confirmed = state.confirmed[q.id] || null;
    const isConfirmed = Boolean(confirmed);
    const isCorrect = isConfirmed && confirmed === q.correct;
    const isFlagged = state.bookmarks.includes(q.id);
    const isSwitch = lastRenderedId !== q.id;
    lastRenderedId = q.id;

    wb.classList.toggle("is-split", isConfirmed);

    const optionsHtml = ["A", "B", "C", "D"]
      .map((letter) => {
        const cls = ["t2-opt"];
        if (isConfirmed) {
          if (letter === q.correct) cls.push("correct-reveal");
          else if (letter === confirmed) cls.push("wrong-reveal");
        } else if (letter === picked) {
          cls.push("selected");
        }
        return `
          <button type="button" class="${cls.join(" ")}" data-opt-pick="${letter}" ${isConfirmed ? "disabled" : ""}>
            <span class="t2-opt-badge">${letter}</span>
            <span>${esc(q.options[letter])}</span>
          </button>
        `;
      })
      .join("");

    const rightPaneHtml = isConfirmed
      ? `
        <aside class="bento breakdown-pane" aria-live="polite">
          <div style="padding:16px 18px; border-radius:16px; background:${isCorrect ? "var(--t2-ok-bg)" : "var(--t2-err-bg)"}; border:1.5px solid ${
          isCorrect ? "var(--t2-ok)" : "var(--t2-err)"
        };">
            <div style="font-family:var(--font-display); font-weight:700; font-size:1.05rem; color:${
              isCorrect ? "var(--t2-ok)" : "var(--t2-err)"
            }; margin-bottom:4px;">
              ${isCorrect ? `✓ Correct — Option ${q.correct} Verified` : `✕ Incorrect — You picked ${confirmed}, Answer is ${q.correct}`}
            </div>
            <p style="font-size:0.92rem;">${esc(q.whyCorrect)}</p>
          </div>

          <div>
            <span class="k-tag k-tag-indigo" style="margin-bottom:10px;">Step-by-Step Math Timeline</span>
            <ol class="timeline-list">
              ${q.solutionSteps.map((s) => `<li>${esc(s)}</li>`).join("")}
            </ol>
          </div>

          <div style="padding:14px 16px; border-radius:14px; background:var(--t2-amber-soft); border:1px solid rgba(217,119,6,0.3);">
            <div style="font-size:0.78rem; font-weight:700; text-transform:uppercase; color:var(--t2-amber); margin-bottom:4px;">
              ⚡ Calculator-Free Shortcut
            </div>
            <p style="font-size:0.9rem;">${esc(q.shortcut)}</p>
          </div>

          <div>
            <span class="k-tag k-tag-rose" style="margin-bottom:10px;">Why Every Option Is Right or Wrong</span>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${["A", "B", "C", "D"]
                .map((l) => {
                  const isR = l === q.correct;
                  const isUW = l === confirmed && !isR;
                  return `
                    <div class="trap-row ${isR ? "is-right" : isUW ? "is-user-wrong" : ""}">
                      <strong>Option ${l}${isR ? " ✓ (Correct)" : isUW ? " ✕ (Your Pick)" : ""}:</strong>
                      <span style="color:var(--t2-ink-2);">${esc(q.distractors[l])}</span>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        </aside>
      `
      : "";

    const scenarioParasHtml = String(q.scenario || "")
      .split(/\n{2,}/)
      .filter(Boolean)
      .map((p) => `<p class="scenario-para">${esc(p)}</p>`)
      .join("");

    const scenarioTableHtml = q.scenarioTable
      ? `
        <div class="scenario-table-wrap">
          <table class="scenario-table">
            <thead>
              <tr>${q.scenarioTable.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${q.scenarioTable.rows
                .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`)
                .join("")}
            </tbody>
          </table>
        </div>
      `
      : "";

    wb.innerHTML = `
      <article class="bento q-focus-card ${isSwitch ? "is-entering" : ""}">
        <div class="curriculum-strip">
          <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="font-weight:700; font-size:0.88rem; color:var(--t2-primary);">🎯 ${esc(q.topicFocus || q.chapter || q.category)}</span>
            <div style="display:flex; gap:6px; flex-wrap:wrap;">
              <span class="k-tag k-tag-emerald">${esc(q.category)}</span>
              <span class="k-tag k-tag-amber">${esc(q.difficulty)}</span>
            </div>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:6px; align-items:center;">
            <span class="mono" style="font-size:0.72rem; color:var(--t2-muted); text-transform:uppercase;">Concepts:</span>
            ${q.concepts.map((c) => `<span class="k-tag k-tag-indigo" style="font-size:0.7rem;">${esc(c)}</span>`).join("")}
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
          <span class="mono" style="font-weight:700; font-size:0.9rem; color:var(--t2-muted);">QUESTION ${String(q.id).padStart(2, "0")} / 60</span>
          <button type="button" class="k-btn k-btn-outline k-btn-sm" id="t2-flag-btn">
            ${isFlagged ? "★ Flagged" : "☆ Flag"}
          </button>
        </div>

        <div class="scenario-quote">${scenarioParasHtml}${scenarioTableHtml}</div>
        <h2 style="font-size:1.18rem; line-height:1.45; margin-bottom:20px;">${esc(q.question)}</h2>

        <div class="options-grid-2x2" role="radiogroup" aria-label="Answer options">
          ${optionsHtml}
        </div>

        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; padding-top:16px; border-top:1px solid var(--t2-border);">
          <button type="button" class="k-btn k-btn-primary" id="t2-confirm-btn" ${isConfirmed || !picked ? "disabled" : ""}>
            ${isConfirmed ? "Confirmed ✓" : "Confirm Answer"}
          </button>
          <div style="display:flex; gap:8px;">
            <button type="button" class="k-btn k-btn-outline k-btn-sm" id="t2-prev-btn">← Prev</button>
            <button type="button" class="k-btn k-btn-outline k-btn-sm" id="t2-next-btn">Next →</button>
          </div>
        </div>
      </article>
      ${rightPaneHtml}
    `;

    wb.querySelectorAll("[data-opt-pick]").forEach((btn) => {
      btn.addEventListener("click", () => pickOption(q.id, btn.getAttribute("data-opt-pick")));
    });
    document.getElementById("t2-confirm-btn")?.addEventListener("click", () => confirmQuestion(q.id));
    document.getElementById("t2-prev-btn")?.addEventListener("click", () => stepQuestion(-1));
    document.getElementById("t2-next-btn")?.addEventListener("click", () => stepQuestion(1));
    document.getElementById("t2-flag-btn")?.addEventListener("click", () => {
      const idx = state.bookmarks.indexOf(q.id);
      if (idx === -1) state.bookmarks.push(q.id);
      else state.bookmarks.splice(idx, 1);
      saveState();
      renderMatrix();
      renderWorkbench();
      toast(idx === -1 ? `Flagged Q#${q.id}` : `Unflagged Q#${q.id}`);
    });
  }

  function pickOption(qId, letter) {
    if (state.confirmed[qId]) return;
    state.selected[qId] = letter;
    saveState();
    renderMatrix();
    renderWorkbench();
  }

  function confirmQuestion(qId) {
    const pick = state.selected[qId];
    if (!pick || state.confirmed[qId]) return;
    state.confirmed[qId] = pick;
    saveState();
    renderArena();
    const q = getById(qId);
    if (q) toast(pick === q.correct ? `✓ Q${qId} Correct! Saved locally.` : `✕ Q${qId} Graded — see breakdown.`);
  }

  function stepQuestion(delta) {
    const cap = (window.PCAOF_DATA && window.PCAOF_DATA.EXAM_CONFIG.totalCapacity) || 60;
    const activeCount = getQuestions().length;
    const limit = state.statusFilter === "active" ? activeCount : cap;
    if (state.category !== "ALL") {
      const list = getQuestions().filter((q) => q.category === state.category);
      if (!list.length) return;
      const idx = list.findIndex((q) => q.id === state.currentId);
      state.currentId = list[idx === -1 ? 0 : (idx + delta + list.length) % list.length].id;
    } else {
      let next = state.currentId + delta;
      if (next < 1) next = limit;
      if (next > limit) next = 1;
      state.currentId = next;
    }
    saveState();
    renderMatrix();
    renderWorkbench();
  }

  /* ------------------------------------------------------------------------
     PDF EXPORT (Direct jsPDF + Offline Print Fallback)
     ------------------------------------------------------------------------ */
  function exportPDF() {
    const qs = getQuestions();
    if (!qs.length) return;

    if (window.jspdf && window.jspdf.jsPDF) {
      try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ unit: "pt", format: "a4" });
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();
        const margin = 42;
        const maxW = pageW - margin * 2;
        let y = 52;

        const pdfSafe = (str) =>
          String(str)
            .replace(/\u2212|\u2013/g, "-")
            .replace(/\u2014/g, "--")
            .replace(/\u2192/g, "->")
            .replace(/\u00f7/g, "/")
            .replace(/\u00d7/g, "x")
            .replace(/\u2022/g, "-")
            .replace(/\u2713/g, "[OK]")
            .replace(/\u26a1/g, "*")
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201c\u201d]/g, '"');

        const ensureSpace = (n = 36) => {
          if (y + n > pageH - 46) {
            doc.addPage();
            y = 48;
          }
        };

        const writeLine = (txt, size, style, color, indent = 0, gap = 4) => {
          doc.setFont("helvetica", style);
          doc.setFontSize(size);
          doc.setCharSpace(0);
          doc.setTextColor(...color);
          doc.splitTextToSize(pdfSafe(txt), maxW - indent).forEach((line) => {
            ensureSpace(size + 6);
            doc.text(line, margin + indent, y);
            y += size * 1.32;
          });
          y += gap;
        };

        doc.setFillColor(29, 78, 216);
        doc.rect(0, 0, pageW, 90, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(18);
        doc.setTextColor(255, 255, 255);
        doc.text("PCAO-F Quantitative Reasoning - Question Bank", margin, 42);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.text(
          pdfSafe(`Active Hard Scenarios: ${qs.length} of 60 Exam Slots - No Calculator Allowed - ${new Date().toLocaleDateString()}`),
          margin,
          64
        );
        y = 116;

        qs.forEach((q, idx) => {
          if (idx > 0) {
            ensureSpace(110);
            doc.setDrawColor(210, 210, 220);
            doc.line(margin, y, pageW - margin, y);
            y += 18;
          }
          writeLine(`Q${q.id}. [${q.category} - ${q.difficulty}]`, 11, "bold", [29, 78, 216], 0, 2);
          writeLine(`${q.topicFocus || q.category} | Concepts: ${q.concepts.join(", ")}`, 9, "bold", [90, 95, 115], 0, 5);
          writeLine(q.scenario, 10, "normal", [30, 35, 45], 0, 5);
          if (q.scenarioTable) {
            writeLine(q.scenarioTable.headers.join(" | "), 9, "bold", [29, 78, 216], 10, 2);
            q.scenarioTable.rows.forEach((r) => writeLine(r.join(" | "), 9, "normal", [45, 50, 65], 10, 2));
            y += 4;
          }
          writeLine(q.question, 10.5, "bold", [15, 20, 30], 0, 6);
          ["A", "B", "C", "D"].forEach((l) => {
            const isAns = l === q.correct;
            writeLine(`${l}) ${q.options[l]}${isAns ? " [CORRECT]" : ""}`, 9.5, isAns ? "bold" : "normal", isAns ? [5, 150, 105] : [45, 50, 65], 10, 3);
          });
          y += 4;
          writeLine(`Explanation: ${q.whyCorrect}`, 9.5, "normal", [25, 30, 40], 8, 4);
          writeLine(`Shortcut: ${q.shortcut}`, 9.5, "bold", [180, 90, 10], 8, 4);
          writeLine("Step-by-Step Working:", 9.5, "bold", [30, 35, 45], 8, 2);
          q.solutionSteps.forEach((s, si) => writeLine(`${si + 1}. ${s}`, 9, "normal", [55, 60, 75], 16, 2));
          writeLine("Option / Trap Analysis:", 9.5, "bold", [30, 35, 45], 8, 2);
          ["A", "B", "C", "D"].forEach((l) => writeLine(`- Option ${l}: ${q.distractors[l]}`, 8.8, "normal", [65, 70, 80], 14, 4));
        });

        const pages = doc.internal.getNumberOfPages();
        for (let p = 1; p <= pages; p++) {
          doc.setPage(p);
          doc.setFont("helvetica", "normal");
          doc.setFontSize(8.5);
          doc.setCharSpace(0);
          doc.setTextColor(130, 135, 145);
          doc.text("PCAO-F Quantitative Reasoning Portal - 60-Question Calculator-Free Bank", margin, pageH - 24);
          doc.text(`Page ${p} of ${pages}`, pageW - margin - 52, pageH - 24);
        }
        doc.save("PCAO-F-Quantitative-MCQs-Bank.pdf");
        toast("PDF downloaded: PCAO-F-Quantitative-MCQs-Bank.pdf");
        return;
      } catch (err) {
        console.warn("jsPDF fallback:", err);
      }
    }

    const w = window.open("", "_blank");
    if (!w) {
      toast("Allow pop-ups to print/save PDF");
      return;
    }
    w.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>PCAO-F Quantitative Bank</title><style>body{font-family:sans-serif;margin:30px;line-height:1.5;} .q{margin-bottom:22px;padding-bottom:14px;border-bottom:1px solid #ccc;break-inside:avoid;} .ok{color:#059669;font-weight:700;}</style></head><body><h1>PCAO-F Quantitative Reasoning Bank</h1>${qs
      .map(
        (q) =>
          `<div class="q"><div><strong>Q${q.id}.</strong> ${esc(q.topicFocus || q.category)} (${esc(q.concepts.join(", "))})</div><p>${esc(q.scenario)}</p><p><strong>${esc(q.question)}</strong></p><ul>${["A", "B", "C", "D"]
            .map((l) => `<li class="${l === q.correct ? "ok" : ""}">${l}) ${esc(q.options[l])}</li>`)
            .join("")}</ul><p><strong>Explanation:</strong> ${esc(q.whyCorrect)}</p><p><strong>Shortcut:</strong> ${esc(
            q.shortcut
          )}</p></div>`
      )
      .join("")}<script>window.onload=()=>window.print();<\/script></body></html>`);
    w.document.close();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initDock();
    initHome();
    initTips();
    initQuiz();
    initReveal();
  });
})();

