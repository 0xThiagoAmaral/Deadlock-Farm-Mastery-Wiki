(() => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const searchInput = document.getElementById("searchInput");
  const navLinks = document.querySelectorAll(".nav a");
  const crumbCurrent = document.getElementById("crumbCurrent");
  const sidebar = document.getElementById("wikiSidebar");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const compactToggle = document.getElementById("compactToggle");

  const sectionById = {};
  document.querySelectorAll("section[id]").forEach((section) => {
    sectionById[section.id] = section;
  });

  const savedTheme = localStorage.getItem("wiki-theme");
  if (savedTheme === "light") {
    root.setAttribute("data-theme", "light");
  }

  const savedTab = localStorage.getItem("wiki-tab") || "all";
  const savedCompact = localStorage.getItem("wiki-compact") === "1";
  if (savedCompact) {
    document.body.classList.add("compact");
  }

  function applyTab(tab) {
    tabs.forEach((b) => {
      const active = b.dataset.tab === tab;
      b.classList.toggle("active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    panels.forEach((panel) => {
      const group = panel.dataset.group || "wiki";
      const isTabVisible = tab === "all" || tab === group;
      panel.dataset.tabVisible = isTabVisible ? "1" : "0";
      panel.hidden = !isTabVisible;
    });
    localStorage.setItem("wiki-tab", tab);
  }

  applyTab(savedTab);

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      applyTab(tab);
    });
  });

  searchInput?.addEventListener("input", () => {
    const term = searchInput.value.trim().toLowerCase();
    panels.forEach((panel) => {
      const text = panel.textContent?.toLowerCase() || "";
      const tabVisible = panel.dataset.tabVisible !== "0";
      const match = term === "" || text.includes(term);
      panel.hidden = !(tabVisible && match);
    });
  });

  function markActiveNav(id) {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const active = href === `#${id}`;
      link.classList.toggle("active", active);
      if (active) {
        const title = sectionById[id]?.dataset.title || sectionById[id]?.querySelector("h3")?.textContent || "Introducao";
        if (crumbCurrent) crumbCurrent.textContent = title;
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) {
        markActiveNav(visible.target.id);
      }
    },
    { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.4, 0.7] }
  );

  Object.values(sectionById).forEach((s) => observer.observe(s));

  const panelRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          panelRevealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );
  panels.forEach((panel) => panelRevealObserver.observe(panel));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 980px)").matches) {
        sidebar?.classList.remove("open");
        sidebarToggle?.setAttribute("aria-expanded", "false");
      }
    });
  });

  sidebarToggle?.addEventListener("click", () => {
    const open = sidebar?.classList.toggle("open");
    sidebarToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar?.classList.contains("open")) {
      sidebar.classList.remove("open");
      sidebarToggle?.setAttribute("aria-expanded", "false");
      sidebarToggle?.focus();
    }
  });

  themeToggle?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("wiki-theme", "dark");
      themeToggle.textContent = "Alternar tema";
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("wiki-theme", "light");
      themeToggle.textContent = "Alternar tema";
    }
  });

  compactToggle?.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("compact");
    localStorage.setItem("wiki-compact", enabled ? "1" : "0");
  });
})();

