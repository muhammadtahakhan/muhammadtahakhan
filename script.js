const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index * 45, 250)}ms`;
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
const applyHeaderState = () => {
  if (!header) return;

  const isScrolled = window.scrollY > 20;
  header.style.background = isScrolled
    ? "rgba(255,255,255,.88)"
    : "rgba(255,255,255,.72)";
  header.style.borderBottom = isScrolled
    ? "1px solid rgba(15, 23, 42, .08)"
    : "1px solid rgba(15, 23, 42, .1)";
  header.style.boxShadow = isScrolled
    ? "0 10px 30px rgba(15, 23, 42, .06)"
    : "none";
};

applyHeaderState();
window.addEventListener("scroll", applyHeaderState, { passive: true });
