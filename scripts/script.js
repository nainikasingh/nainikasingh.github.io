// Reveal animation
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => observer.observe(r));

// Scroll progress
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / height) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });
}

// Scroll to top when clicking NS
const logoLink = document.querySelector(".logo");
if (logoLink) {
  logoLink.addEventListener("click", (event) => {
    if (logoLink.getAttribute("href") === "/") {
      event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("primary-navigation");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
