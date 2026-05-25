const sections = document.querySelectorAll("main > section, main > header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      target.classList.toggle("visible", isIntersecting);
    });
  },
  { threshold: 0.55 }
);

sections.forEach((section) => observer.observe(section));
