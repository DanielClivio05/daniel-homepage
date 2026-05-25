const sections = document.querySelectorAll("main > section, main > header");

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        target.classList.toggle("visible", isIntersecting);
      });
    },
    { threshold: 0.55 }
  );

  sections.forEach((section) => observer.observe(section));
}
