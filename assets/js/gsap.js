// ───────────── Navigation Bar ────────────────────
const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = toggleBtn.querySelector('svg');
let isMenuOpen = false;
let lastScrollY = 0;
let ticking = false;

// Scroll handler – lightweight with rAF
function onScroll() {
  lastScrollY = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(updateNavbar);
    ticking = true;
  }
}

function updateNavbar() {
  ticking = false;

  if (lastScrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Toggle mobile menu
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  toggleBtn.setAttribute('aria-expanded', isMenuOpen);

  if (isMenuOpen) {
    mobileMenu.classList.remove('pointer-events-none');
    mobileMenu.classList.remove('hidden');

    gsap.to(mobileMenu, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    gsap.from(".mobile-link, #mobile-menu a[href='#contact']", {
      y: 40,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
      delay: 0.15
    });

    // Change icon to X
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';

  } else {
    gsap.to(mobileMenu, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.classList.add('pointer-events-none');
        mobileMenu.classList.add('hidden');
      }
    });

    // Back to hamburger
    menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" class="menu-icon-line" />';
  }
}

// Underline hover effect for desktop links
document.querySelectorAll('.nav-link').forEach(link => {
  const underline = document.createElement('span');
  underline.className = 'absolute left-0 bottom-[-4px] h-[2px] bg-accent origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100';
  link.appendChild(underline);
});

// Event listeners
window.addEventListener('scroll', onScroll, { passive: true });
toggleBtn.addEventListener('click', toggleMenu);

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (isMenuOpen) toggleMenu();
  });
});

// Close on escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});

// Initial check
updateNavbar();
