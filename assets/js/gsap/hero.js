// GSAP animation – word stagger + glow pulse

// Wait for fonts to be ready (optional but improves CLS)
document.fonts.ready.then(() => {

  gsap.registerPlugin(ScrollTrigger);

  // Split text simulation (already done with <span class="word">)
  const words = gsap.utils.toArray("#hero-title .word");

  gsap.set(words, { yPercent: 120, opacity: 0, scale: 0.84 });

  gsap.to(words, {
    yPercent: 0,
    opacity: 1,
    scale: 1,
    duration: 1.2,
    stagger: 0.14,
    ease: "expo.out",
    delay: 0.4
  });

  // Subtle continuous pulse on background glow
  gsap.to("#glow", {
    opacity: 0.30,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // Optional: very subtle parallax on scroll (modern feel)
  gsap.to("#glow", {
    y: "-=80",
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.2
    }
  });

});