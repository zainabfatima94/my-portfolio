// ────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

document.fonts.ready.then(() => {

  // Card entrance with blur reveal
  gsap.fromTo("#offer-card",
    {
      y: 80,
      opacity: 0,
      filter: "blur(10px)"
    },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#offer-card",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );

  // Slow pulsing glow on CTA
  gsap.to(".hero-cta", {
    boxShadow: "0 0 60px rgba(16,185,129,0.6)",
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // Optional: subtle float on hover
  document.querySelector(".hero-cta").addEventListener("mouseenter", () => {
    gsap.to(".hero-cta", {
      y: -6,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  document.querySelector(".hero-cta").addEventListener("mouseleave", () => {
    gsap.to(".hero-cta", {
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  });

});