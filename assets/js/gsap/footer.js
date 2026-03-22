// ────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// 1. Year in copyright
document.getElementById("current-year").textContent = new Date().getFullYear();

// 2. Email hover split + color shift
gsap.utils.toArray(".email-split").forEach((letter, i) => {
  letter.style.display = "inline-block";

  letter.addEventListener("mouseenter", () => {
    gsap.to(letter, {
      y: -8,
      color: "#10B981",
      duration: 0.3,
      ease: "power2.out",
      delay: i * 0.02
    });
  });

  letter.addEventListener("mouseleave", () => {
    gsap.to(letter, {
      y: 0,
      color: "white",
      duration: 0.3,
      ease: "power2.out",
      delay: i * 0.015
    });
  });
});

// 3. Social icons scale + color on hover
document.querySelectorAll(".social-icon").forEach(link => {
  const icon = link.querySelector("i");

  link.addEventListener("mouseenter", () => {
    gsap.to(icon, {
      scale: 1.35,
      rotation: 8,
      color: "#10B981",
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      color: "#94A3B8",
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

// 4. Optional gentle entrance on scroll (luxury feel)
gsap.from("#contact .container", {
  y: 60,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#contact",
    start: "top 70%",
  }
});
