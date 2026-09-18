document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#site-nav");
  const navLinks = document.querySelectorAll(".nav-link");
  const navCollapse = document.querySelector("#mainNav");

  const updateNav = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  navLinks.forEach((link) => link.addEventListener("click", () => {
    if (window.bootstrap && navCollapse.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  }));

  const sections = document.querySelectorAll("main section[id]");
  const observer = new IntersectionObserver((entries) => {
    entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });

  sections.forEach((section) => observer.observe(section));
});
