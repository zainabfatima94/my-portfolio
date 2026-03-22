// ────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

document.fonts.ready.then(() => {

  const track = document.getElementById('marquee-track');
  const group = track.querySelector('.marquee-group');

  // Duplicate the group enough times for seamless loop (at least 2×)
  for (let i = 0; i < 3; i++) {
    track.appendChild(group.cloneNode(true));
  }

  const cards = gsap.utils.toArray('.glass-card');

  // Continuous horizontal scroll
  const tl = gsap.timeline({
    repeat: -1,
    defaults: { ease: "none" }
  });

  tl.to(track, {
    x: "-50%",               // move exactly half (since duplicated)
    duration: 15,            // adjust speed – higher = slower
    ease: "none"
  });

  // Pause on hover (any card)
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => tl.pause());
    card.addEventListener('mouseleave', () => tl.play());
  });

  // Touch devices: pause when touching
  track.addEventListener('touchstart', () => tl.pause(), { passive: true });
  track.addEventListener('touchend', () => tl.play(), { passive: true });

  // Optional: gentle scale + glow on hover
  gsap.utils.toArray('.glass-card').forEach(card => {
    gsap.to(card, {
      scale: 1.04,
      duration: 0.4,
      paused: true,
      overwrite: "auto"
    });

    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.04, duration: 0.4 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.4 });
    });
  });

});