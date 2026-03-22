// ────────────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

// Modal controls (unique names)
const certModal = document.getElementById('certificate-verification-modal');
const certModalInner = document.getElementById('cert-modal-content');
const certModalClose = document.getElementById('cert-modal-close-btn');
const certModalTitle = document.getElementById('cert-modal-title');
const certModalBody = document.getElementById('cert-modal-body');
const certModalLink = document.getElementById('cert-modal-verify-link');

function openCertModal(title, contentHTML, link = "#") {
  certModalTitle.textContent = title;
  certModalBody.innerHTML = contentHTML;
  certModalLink.href = link;
  certModalLink.style.display = link === "#" ? "none" : "inline-flex";

  certModal.classList.remove('hidden');
  certModal.classList.add('flex');

  gsap.fromTo(certModalInner,
    { scale: 0.85, opacity: 0, y: 40 },
    { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.2)" }
  );
}

function closeCertModal() {
  gsap.to(certModalInner, {
    scale: 0.85,
    opacity: 0,
    y: 40,
    duration: 0.35,
    ease: "power2.in",
    onComplete: () => {
      certModal.classList.add('hidden');
      certModal.classList.remove('flex');
    }
  });
}

certModalClose.addEventListener('click', closeCertModal);
certModal.addEventListener('click', e => { if (e.target === certModal) closeCertModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCertModal(); });

// Filter logic with unique class
document.querySelectorAll('.cert-tab-btn').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.cert-tab-btn').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-pressed', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-pressed', 'true');

    const filterValue = tab.dataset.filter;
    const allCards = gsap.utils.toArray('.certificate-card');

    allCards.forEach(card => {
      const shouldShow = filterValue === 'all' || card.dataset.certCategory === filterValue;

      gsap.to(card, {
        opacity: shouldShow ? 1 : 0,
        scale: shouldShow ? 1 : 0.92,
        y: shouldShow ? 0 : 20,
        duration: 0.4,
        ease: "power2.inOut",
        onStart: () => { if (shouldShow) card.style.display = 'block'; },
        onComplete: () => { if (!shouldShow) card.style.display = 'none'; }
      });
    });
  });
});

// Entrance animation
gsap.utils.toArray('.certificate-card').forEach((card, i) => {
  gsap.from(card, {
    scale: 0.92,
    y: 40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    delay: i * 0.07,
    scrollTrigger: {
      trigger: card,
      start: "top 88%"
    }
  });
});

// Open modal for tech certs only
document.querySelectorAll('.certificate-card[data-cert-category="tech"]').forEach(card => {
  const clickHandler = (e) => {
    if (e.target.tagName !== 'A') {
      const title = card.querySelector('h3').textContent.trim();
      let bodyHtml = "";
      let verifyUrl = "#";

      if (title.includes("HTML")) {
        bodyHtml = "Full foundational front-end course from Codeliber. Covered semantic HTML, modern CSS, responsive layouts, Flexbox, Grid.";
        verifyUrl = "certs/html-codeliber.html"; // ← real link
      } else if (title.includes("React")) {
        bodyHtml = "Focused on modern React (Hooks, Context, Performance). Quiz-based verification with QR code on certificate.";
        verifyUrl = "certs/react-hooks.html"; // ← real link
      }

      openCertModal(title, bodyHtml, verifyUrl);
    }
  };

  card.addEventListener('click', clickHandler);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      clickHandler(e);
    }
  });
});