const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach(link => {
  link.onclick = () => {
    navbar.classList.remove("active");
  };
});

// ===== TERMINAL TYPING EFFECT =====

// First line typing
const text1 = "Hello, I'm";
let i = 0;

function typeLine1() {
  if (i < text1.length) {
    document.getElementById("typing-text").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeLine1, 50);
  } else {
    setTimeout(typeRole, 500);
  }
}

// Role typing (loop)
const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Cloud & DevOps Enthusiast",
  "AI Enthusiast",
];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const currentRole = roles[roleIndex];
  const roleElement = document.getElementById("typing-role");

  if (!deleting) {
    roleElement.innerHTML = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeRole, 1000);
      return;
    }
  } else {
    roleElement.innerHTML = currentRole.substring(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeRole, deleting ? 40 : 80);
}

// Start animation
window.onload = () => {
  typeLine1();
};

const initText = "> initializing profile...";
let j = 0;

function typeInit() {
  if (j < initText.length) {
    document.getElementById("init-text").innerHTML += initText.charAt(j);
    j++;
    setTimeout(typeInit, 40);
  }
}

typeInit();

const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    toggle.innerText = "🌞";
  } else {
    toggle.innerText = "🌙";
  }
};
