// Ativar/fechar menu mobile
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Efeito na navbar ao rolar
const nav = document.getElementById("main-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("bg-white", "shadow-md");
    nav.classList.remove("bg-white/70");
  } else {
    nav.classList.remove("bg-white", "shadow-md");
    nav.classList.add("bg-white/70");
  }
});

// Inicializar AOS
AOS.init({
  duration: 800,
  once: true,
});
