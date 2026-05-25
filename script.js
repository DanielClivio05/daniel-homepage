const sections = document.querySelectorAll("main > section, main > header");

if (sections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        target.classList.toggle("visible", isIntersecting);
      });
    },
    { threshold: 0.55 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

const backToTop = document.querySelector(".back-to-top");
const scrollMarker =
  document.getElementById("hero") ||
  document.querySelector("main > header, main > section");

if (backToTop && scrollMarker) {
  const backTopObserver = new IntersectionObserver(
    ([entry]) => {
      const show = !entry.isIntersecting;
      backToTop.hidden = !show;
      backToTop.classList.toggle("is-visible", show);
    },
    { threshold: 0 }
  );

  backTopObserver.observe(scrollMarker);

  backToTop.addEventListener("click", () => {
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  });
}

const header = document.querySelector("body > header");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (header && navToggle && navMenu) {
  const navMedia = window.matchMedia("(max-width: 48rem)");

  function closeNav() {
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  navMedia.addEventListener("change", (event) => {
    if (!event.matches) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("nav-open")) {
      closeNav();
      navToggle.focus();
    }
  });
}
