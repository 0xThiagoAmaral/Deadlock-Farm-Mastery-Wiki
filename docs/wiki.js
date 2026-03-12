(() => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("wiki-theme");
  if (savedTheme === "light") {
    root.setAttribute("data-theme", "light");
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach((panel) => {
        const group = panel.dataset.group || "wiki";
        panel.style.display = tab === "all" || tab === group ? "block" : "none";
      });
    });
  });

  themeToggle?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("wiki-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("wiki-theme", "light");
    }
  });
})();

