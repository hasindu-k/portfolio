var typed = new Typed(".text", {
  strings: ["Programming", "Web Development", "Designing"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Navbar scroll effect
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Progress bar animation
const progressBars = document.querySelectorAll(".progress-line span");
const radialBars = document.querySelectorAll(".radial-bar");

// console.log("Found progress bars:", progressBars.length);

let progressBarsAnimated = false;
let radialBarsAnimated = false;

// Function to animate progress bars
function animateProgressBars() {
  if (progressBarsAnimated) return;

  progressBars.forEach((bar) => {
    const targetWidth = bar.getAttribute("data-width");
    if (targetWidth) {
      bar.style.width = targetWidth + "%";
      //   console.log("Set width to:", targetWidth + "%");
    }
  });

  progressBarsAnimated = true;
}

// Function to animate radial bars
function animateRadialBars() {
  if (radialBarsAnimated) return;

  radialBars.forEach((radialBar) => {
    const path = radialBar.querySelector(".path");
    const percentage = radialBar.querySelector(".percentage");

    if (path && percentage) {
      const percent = parseInt(percentage.textContent);
      const radius = 80;
      const circumference = 2 * Math.PI * radius;
      const dashArray = (percent / 100) * circumference;

      console.log(
        `Radial bar: ${percentage.textContent}, percent: ${percent}, circumference: ${circumference}, dashArray: ${dashArray}`
      );

      // Reset to 0 first
      path.style.strokeDasharray = `0 ${circumference}`;

      // Animate to target
      setTimeout(() => {
        path.style.strokeDasharray = `${dashArray} ${circumference}`;
        console.log(`Set radial dasharray to: ${dashArray} ${circumference}`);
      }, 100);
    }
  });

  radialBarsAnimated = true;
}

// Check if Skills section is visible on scroll
window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("Skills");
  if (skillsSection) {
    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible && !progressBarsAnimated) {
      console.log("Skills section visible, animating progress bars");
      animateProgressBars();
    }

    if (isVisible && !radialBarsAnimated) {
      console.log("Skills section visible, animating radial bars");
      animateRadialBars();
    }
  }
});

// Also trigger on page load if Skills section is already visible
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("Skills");
  if (skillsSection) {
    const rect = skillsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      console.log("Skills section already visible on load");
      setTimeout(() => {
        animateProgressBars();
        animateRadialBars();
      }, 500);
    }
  }
});

// Test function to manually trigger animations
// function testProgressBars() {
//   progressBars.forEach((bar) => {
//     const targetWidth = bar.getAttribute("data-width");
//     if (targetWidth) {
//       bar.style.width = targetWidth + "%";
//       console.log("Manually set width to:", targetWidth + "%");
//     }
//   });

//   radialBars.forEach((radialBar) => {
//     const path = radialBar.querySelector(".path");
//     const percentage = radialBar.querySelector(".percentage");

//     if (path && percentage) {
//       const percent = parseInt(percentage.textContent);
//       const radius = 80;
//       const circumference = 2 * Math.PI * radius;
//       const dashArray = (percent / 100) * circumference;

//       path.style.strokeDasharray = `${dashArray} ${circumference}`;
//       console.log(
//         `Manually set radial dasharray to: ${dashArray} ${circumference}`
//       );
//     }
//   });
// }

// Call test function after 3 seconds as backup
// setTimeout(testProgressBars, 3000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Parallax effect for background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector("body::before");
  if (parallax) {
    const speed = scrolled * 0.5;
    document.body.style.setProperty("--parallax-y", `${speed}px`);
  }
});

// Loading animation
window.addEventListener("load", () => {
  const loading = document.querySelector(".loading");
  if (loading) {
    setTimeout(() => {
      loading.classList.add("hidden");
    }, 1000);
  }
});

// Hover effects for project cards
document.querySelectorAll(".row").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Skill bar hover effects
document.querySelectorAll(".bar").forEach((bar) => {
  bar.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(10px) scale(1.02)";
  });

  bar.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0) scale(1)";
  });
});

// Service card hover effects
document.querySelectorAll(".prj-list div").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Contact form validation (if you add a form later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add some interactive effects
document.addEventListener("DOMContentLoaded", () => {
  // Add floating animation to social icons
  const socialIcons = document.querySelectorAll(".home-sci a");
  socialIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.1}s`;
  });

  // Add typing effect to the name
  const name = document.querySelector(".home-content h1");
  if (name) {
    const text = name.textContent;
    name.textContent = "";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        name.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 2000);
  }
});

// Resume download link update
document.addEventListener("DOMContentLoaded", (event) => {
  const newUrl =
    "https://drive.google.com/uc?export=download&id=1vLggvdYEpu-9UKEJza-YmGGrmPkOsjBC";
  const links = document.querySelectorAll(".abtbtn-box");
  links.forEach((link) => {
    link.href = newUrl;
  });
});
