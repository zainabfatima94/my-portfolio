// ────────────────────────────────────────────────
function initActivityCards() {
  const cards = document.querySelectorAll('.activity-card');

  // Scroll entrance stagger
  gsap.utils.toArray(cards).forEach((card, i) => {
    gsap.from(card, {
      y: 35,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: i * 0.08,
      scrollTrigger: {
        trigger: card,
        start: "top 88%",
        toggleActions: "play none none reverse"
      }
    });
  });
}

// Run after fonts are loaded for better CLS
if (document.fonts) {
  document.fonts.ready.then(initActivityCards);
} else {
  window.addEventListener('load', initActivityCards);
}