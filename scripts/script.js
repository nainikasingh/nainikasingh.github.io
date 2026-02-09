// Fade-in on scroll
const sections = document.querySelectorAll('.section-fade');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));

// Scroll progress indicator
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.getElementById("progressBar").style.width = progress + "%";
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-slate-900");
});
