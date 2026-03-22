// ───────────── ABOUT GSAP ─────────────────
gsap.registerPlugin(ScrollTrigger);

document.fonts.ready.then(() => {

  const visual = document.querySelector(".about-visual");

  // Improved pinning – starts earlier, ends earlier, better centering
  ScrollTrigger.create({
    trigger: visual,
    start: "top 10%",           // begin pinning when top of visual reaches ~65% of viewport
    end: "bottom 40%",        // release when bottom reaches ~40% (prevents bottom cutoff)
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,           // helps reduce jank on mobile
    scrub: 0.6,
    // debug helper (remove in production)
    // markers: true,
  });

  // Fallback micro-adjustment during pin to prevent bottom clipping
  ScrollTrigger.create({
    trigger: visual,
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.8,
    onUpdate: (self) => {
      if (self.isActive) {
        const offset = self.progress * -20; // gentle upward nudge while pinned
        gsap.to(visual, { y: offset, overwrite: "auto", duration: 0 });
      }
    }
  });

  // Text line reveals (unchanged)
  gsap.utils.toArray(".about-text").forEach((p) => {
    gsap.fromTo(p,
      { clipPath: "inset(0 0 100% 0)", opacity: 0.35 },
      {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: p,
          start: "top 82%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Stat entrance (slightly delayed & smoother)
  gsap.from(".about-visual .flex.flex-col", {
    y: 40,
    scale: 0.92,
    opacity: 0.4,
    duration: 1.6,
    ease: "expo.out",
    scrollTrigger: {
      trigger: visual,
      start: "top 75%",
    }
  });

});