const typedText = document.getElementById("typed-text");
const phrases = ["Tech Enthusiast", "Works at Krusty Krab", "TRALALELO TRALALA"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typedText.textContent = currentPhrase.slice(0, charIndex--);
  } else {
    typedText.textContent = currentPhrase.slice(0, charIndex++);
  }

  let typingSpeed = 150;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    isDeleting = false;
  }

  setTimeout(type, typingSpeed);
}

type();

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const sections = document.querySelectorAll("section");
const navLinksList = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      navLinksList.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

function openLightbox(id) {
  document.getElementById(id).classList.add("active");
}

function closeLightbox(id) {
  document.getElementById(id).classList.remove("active");
}