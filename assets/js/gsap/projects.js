gsap.registerPlugin(ScrollTrigger);

const projectsData = {
  "1": {
    title: "Frontend-w",
    category: "portfolio",
    image: "assets/img/project/frontend-w.png",
    problem: "Traditional portfolios lack engagement and fail to showcase technical depth.",
    solution: "GSAP-powered animations, AOS scroll effects, and vanilla JS architecture for maximum performance.",
    outcome: "Smooth 60fps animations • 95+ Lighthouse score • Zero external framework bloat",
    tech: [
      { icon: "fa-brands fa-js", color: "text-[#F7DF1E]" },
      { icon: "fa-solid fa-wind", color: "text-emerald-400" },
      { icon: "fa-solid fa-arrow-down-wide-short", color: "text-sky-400" }
    ]
  },
  "2": {
    title: "Chirpley AI",
    category: "ai-platform",
    image: "assets/img/project/chirpley.png",
    problem: "Micro-influencers struggle to monetize without complex, expensive platforms.",
    solution: "Low-code 3D landing page with React, Node.js, Stripe integration, and AI-powered matching.",
    outcome: "Rapid MVP deployment • Scalable architecture • Payment-ready in 7 days",
    tech: [
      { icon: "fa-brands fa-react", color: "text-[#61DAFB]" },
      { icon: "fa-brands fa-node-js", color: "text-[#68A063]" },
      { icon: "fa-solid fa-credit-card", color: "text-emerald-400" }
    ]
  },
  "3": {
    title: "TCD Horizon Capital",
    category: "fintech",
    image: "assets/img/project/tcd-capital.png",
    problem: "Financial firms need dynamic data visualization without sacrificing performance.",
    solution: "Chart.js + Swiper.js + AOS for responsive, interactive financial dashboards.",
    outcome: "Real-time chart rendering • Mobile-optimized UX • Sub-2s load time",
    tech: [
      { icon: "fa-brands fa-js", color: "text-[#F7DF1E]" },
      { icon: "fa-solid fa-chart-simple", color: "text-violet-400" },
      { icon: "fa-solid fa-sliders", color: "text-sky-400" }
    ]
  },
  "4": {
    title: "TicketFlow",
    category: "fintech",
    image: "assets/img/project/ticket-system.png",
    problem: "Ticket booking systems often have fragmented auth flows and poor UX.",
    solution: "Unified Node.js backend with Bootstrap frontend, dual auth portals, and streamlined booking flow.",
    outcome: "Single-codebase maintenance • Secure role-based access • Intuitive 3-step checkout",
    tech: [
      { icon: "fa-brands fa-node-js", color: "text-[#68A063]" },
      { icon: "fa-brands fa-bootstrap", color: "text-[#7952B3]" },
      { icon: "fa-solid fa-user-shield", color: "text-emerald-400" }
    ]
  }
};

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        gsap.to(card, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
      } else {
        gsap.to(card, {
          opacity: 0,
          y: 30,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => card.style.display = 'none'
        });
      }
    });
  });
});

const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('modal-close');

function openModal(id) {
  const data = projectsData[id];
  if (!data) return;
  document.getElementById('modal-image').src = data.image;
  document.getElementById('modal-badge').innerHTML = `#0${id}`;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-problem').textContent = data.problem;
  document.getElementById('modal-solution').textContent = data.solution;
  document.getElementById('modal-outcome').textContent = data.outcome;
  const techContainer = document.getElementById('modal-tech');
  techContainer.innerHTML = data.tech.map(t => `
    <div class="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-2xl">
      <i class="${t.icon} ${t.color} text-2xl"></i>
      <span class="font-mono text-sm text-[#CBD5E1]">Used</span>
    </div>
  `).join('');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  gsap.fromTo(modalContent,
    { scale: 0.92, opacity: 0, y: 40 },
    { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }
  );
}

function closeModal() {
  gsap.to(modalContent, {
    scale: 0.92,
    opacity: 0,
    y: 40,
    duration: 0.4,
    ease: "power2.in",
    onComplete: () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  });
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (!e.target.closest('a')) openModal(card.dataset.id);
  });
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

document.fonts.ready.then(() => {
  gsap.utils.toArray('.project-card').forEach((card) => {
    gsap.from(card, {
      scale: 0.9,
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 85%" }
    });
    card.addEventListener('mouseenter', () => gsap.to(card, { y: -16, duration: 0.4, ease: "power2.out" }));
    card.addEventListener('mouseleave', () => gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" }));
  });
});