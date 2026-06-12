/* ================= NAVBAR TOGGLE ================= */
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

/* Close navbar when link clicked (mobile) */
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

/* ================= TYPING EFFECT ================= */
const roles = ["Java FullStack Developer", "Web Developer", "Frontend Developer","Database Administrator", "Java Programmer"];
let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();

/* ================= SKILLS PROGRESS ANIMATION ================= */
const progressBars = document.querySelectorAll(".progress");

function animateSkills() {
  progressBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
}

/* ================= SCROLL REVEAL ================= */
const revealElements = document.querySelectorAll(
  ".about, .project-card, .skill-card, .contact"
);

function revealOnScroll() {
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

/* ================= RUN ON SCROLL ================= */
window.addEventListener("scroll", () => {
  revealOnScroll();

  // Animate skills only once
  const skillsSection = document.getElementById("skills");
  const skillsTop = skillsSection.getBoundingClientRect().top;

  if (skillsTop < window.innerHeight - 100) {
    animateSkills();
  }
});

/* ================= CONTACT FORM MESSAGE ================= */
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("successMsg").textContent =
    "✅ Message sent successfully!";
  this.reset();
});
