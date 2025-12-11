// Simplified Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const milestones = document.querySelectorAll('.milestone');
    const milestoneItems = document.querySelectorAll('.milestone-item');
    
    const animateTimeline = () => {
      const timeline = document.querySelector('.timeline-visual');
      const timelinePosition = timeline.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (timelinePosition < screenPosition) {
        milestones.forEach((milestone, index) => {
          setTimeout(() => {
            milestone.classList.add('active');
            if (milestoneItems[index]) {
              milestoneItems[index].classList.add('active');
            }
          }, index * 200);
        });
      }
    };
    
  window.addEventListener('scroll', animateTimeline);
  animateTimeline(); // Trigger on load if already in view
});

// Add this to your app.js
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect for touch devices
    const expertiseCards = document.querySelectorAll('.expertise-card');
    
    expertiseCards.forEach(card => {
      card.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          this.classList.toggle('flipped');
        }
      });
    });
});

  // Add this to your app.js
document.addEventListener('DOMContentLoaded', function() {
  // Pause animation on hover
  const clientTrack = document.querySelector('.client-track');
  const clientsCarousel = document.querySelector('.clients-carousel');
  
  if (clientTrack && clientsCarousel) {
    clientsCarousel.addEventListener('mouseenter', () => {
      clientTrack.style.animationPlayState = 'paused';
    });
    
    clientsCarousel.addEventListener('mouseleave', () => {
      clientTrack.style.animationPlayState = 'running';
    });
    
    // Touch device support
    clientsCarousel.addEventListener('touchstart', () => {
      clientTrack.style.animationPlayState = 'paused';
    });
    
    clientsCarousel.addEventListener('touchend', () => {
      clientTrack.style.animationPlayState = 'running';
    });
  }
});

// Enhanced Counter Animation with Particles.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Particles.js
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#4CAF50" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#4CAF50", "opacity": 0.3, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
      },
      "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "repulse" } }
      }
    });
  }

  // Enhanced Counter Animation
  const counters = document.querySelectorAll('.counter-number');
  const speed = 150; // Lower number = faster animation
  
  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;
      
      if (count < target) {
        counter.innerText = target % 1 === 0 ? Math.ceil(count + increment) : (count + increment).toFixed(1);
        requestAnimationFrame(animateCounters);
      } else {
        // Formatting handled in CSS with separate symbol elements
        counter.innerText = target;
      }
    });
  }
  
  // Intersection Observer for scroll trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        // Add animation class to cards
        document.querySelectorAll('.counter-card').forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate-in');
          }, index * 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  observer.observe(document.querySelector('.counter-stats-section'));
});

