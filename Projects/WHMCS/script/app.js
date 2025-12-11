/////////////////////////////////////////////////// Navigation Toggle ///////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", ()=> {
  // Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navClose = document.querySelector(".nav-close");
  const navList = document.querySelector(".nav-links");
  console.log(navToggle)

  navToggle.addEventListener("click", ()=> {
    navList.style.right = "0px";
  })

  navClose.addEventListener("click", ()=> {
    navList.style.right = "-600px";
  })
})

//////////////////////////////////////////////////// Domain API ////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const domainForm = document.getElementById('domainSearchForm');
    const domainInput = document.getElementById('domainInput');
    const tldSelect = document.getElementById('tldSelect');
    const popularTlds = document.querySelectorAll('.tld-badge');
    const loader = document.getElementById('loader');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const pricingButtons = document.querySelectorAll('.pricing-button');
    
    // Sample pricing data (in a real app, this would come from WHMCS API)
    const pricingData = {
        '.com': { register: '$9.99', renewal: '$15.99', transfer: '$12.99' },
        '.net': { register: '$12.99', renewal: '$17.99', transfer: '$14.99' },
        '.org': { register: '$10.99', renewal: '$16.99', transfer: '$12.99' },
        '.io': { register: '$29.99', renewal: '$49.99', transfer: '$39.99' },
        '.co': { register: '$19.99', renewal: '$29.99', transfer: '$24.99' },
        '.tech': { register: '$24.99', renewal: '$39.99', transfer: '$29.99' },
        '.store': { register: '$14.99', renewal: '$24.99', transfer: '$19.99' },
        '.online': { register: '$9.99', renewal: '$19.99', transfer: '$14.99' },
        '.pk': { register: '$14.99', renewal: '$24.99', transfer: '$19.99' }
    };
    
    // Popular TLD badges click handler
    popularTlds.forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.preventDefault();
            const tld = this.getAttribute('data-tld');
            tldSelect.value = tld;
            
            // Highlight selected badge
            popularTlds.forEach(b => b.style.backgroundColor = '');
            popularTlds.forEach(b => b.style.color = '');
            this.style.backgroundColor = "var(--primary)";
            this.style.color = 'white';
            
            domainInput.focus();
        });
    });
    
    // Form submission handler
    domainForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const domainName = domainInput.value.trim();
        const tld = tldSelect.value;
        
        if (!domainName) {
            alert('Please enter a domain name to search');
            return;
        }
        
        // Show loader
        loader.style.display = 'block';
        resultsContainer.style.display = 'none';
        
        try {
            // In a real implementation, you would call WHMCS API here
            const results = await checkDomainAvailabilityWHMCS(domainName, tld);
            
            // Display results
            displayResults(results);
            
            // Hide loader and show results
            loader.style.display = 'none';
            resultsContainer.style.display = 'block';
        } catch (error) {
            console.error('Error checking domain:', error);
            loader.style.display = 'none';
            alert('Error checking domain availability. Please try again.');
        }
    });
    
    // Pricing buttons click handler
    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tld = this.closest('.pricing-card').querySelector('.pricing-tld').textContent;
            console.log(`Register ${tld} domain`);
            // In a real implementation, this would redirect to WHMCS cart
            alert(`Redirecting to register ${tld} domain`);
        });
    });
    
    // WHMCS API integration function
    async function checkDomainAvailabilityWHMCS(domainName, tld) {
        // This is where you would integrate with WHMCS API
        // Example WHMCS API call (pseudo-code):
        /*
        const response = await fetch('https://yourdomain.com/includes/api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                action: 'DomainWhois',
                username: 'API_USERNAME',
                password: 'API_PASSWORD',
                domain: domainName + tld,
                responsetype: 'json'
            })
        });
        const data = await response.json();
        return data;
        */
        
        // Mock response for demonstration
        return mockWHMCSResponse(domainName, tld);
    }
    
    // Mock WHMCS response (remove in production)
    function mockWHMCSResponse(domainName, tld) {
        const mainDomain = domainName + tld;
        const variations = [
            mainDomain,
            domainName + 'online' + tld,
            domainName + 'hq' + tld,
            domainName + 'app' + tld,
            domainName + 'shop' + tld
        ];
        
        return variations.map((domain, index) => ({
            domain,
            available: index % 2 === 0, // Alternate availability for demo
            price: pricingData[tld]?.register || '$12.99',
            renewal: pricingData[tld]?.renewal || '$15.99',
            transfer: pricingData[tld]?.transfer || '$12.99'
        }));
    }
    
    // Display results in the grid
    function displayResults(results) {
        resultsGrid.innerHTML = '';
        
        const availableDomains = results.filter(r => r.available);
        resultsCount.textContent = `${availableDomains.length} ${availableDomains.length === 1 ? 'result' : 'results'} found`;
        
        availableDomains.slice(0, 5).forEach(result => {
            const domainResult = document.createElement('div');
            domainResult.className = 'domain-result';
            
            domainResult.innerHTML = `
                <div class="domain-info">
                    <span class="domain-name">${result.domain}</span>
                    <span class="domain-status status-available">Available</span>
                </div>
                <div class="domain-price">${result.price}/yr</div>
                <button class="domain-action" data-domain="${result.domain}" data-price="${result.price}">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            `;
            
            resultsGrid.appendChild(domainResult);
        });
        
        // Add event listeners to the new buttons
        document.querySelectorAll('.domain-action').forEach(button => {
            button.addEventListener('click', function() {
                const domain = this.getAttribute('data-domain');
                const price = this.getAttribute('data-price');
                addToCartWHMCS(domain, price);
            });
        });
    }
    
    // WHMCS Add to Cart function
    function addToCartWHMCS(domain, price) {
        console.log(`Adding ${domain} to WHMCS cart at ${price}`);
        // In a real implementation, this would call WHMCS API
        // Example:
        /*
        fetch('https://yourdomain.com/includes/api.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                action: 'AddOrder',
                username: 'API_USERNAME',
                password: 'API_PASSWORD',
                clientid: 'CLIENT_ID',
                pid: 'DOMAIN_PRODUCT_ID',
                domain: domain,
                billingcycle: 'annually',
                responsetype: 'json'
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.result === 'success') {
                window.location.href = 'https://yourdomain.com/cart.php';
            }
        });
        */
        
        // For demo purposes:
        alert(`Adding ${domain} to cart at ${price}/yr`);
    }
});

///////////////////////////////////////////////// Why Choose Us Section /////////////////////////////////////////////////
// Counter animation for stats
function animateCounters() {
    const customers = document.getElementById('customers-count');
    const uptime = document.getElementById('uptime-percent');
    const support = document.getElementById('support-response');
    
    const targetCustomers = 15000;
    const targetUptime = 99.9;
    const targetSupport = 2;
    
    let currentCustomers = 0;
    let currentUptime = 0;
    let currentSupport = 0;
    
    const incrementCustomers = targetCustomers / 50;
    const incrementUptime = targetUptime / 50;
    const incrementSupport = targetSupport / 50;
    
    const counterInterval = setInterval(() => {
        currentCustomers += incrementCustomers;
        currentUptime += incrementUptime;
        currentSupport += incrementSupport;
        
        if (currentCustomers >= targetCustomers) {
            currentCustomers = targetCustomers;
            currentUptime = targetUptime;
            currentSupport = targetSupport;
            clearInterval(counterInterval);
        }
        
        customers.textContent = Math.floor(currentCustomers).toLocaleString();
        uptime.textContent = currentUptime.toFixed(1);
        support.textContent = currentSupport.toFixed(0);
    }, 20);
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('trust-stats')) {
                animateCounters();
            }
        }
    });
}, { threshold: 0.1 });

// Observe elements
document.querySelectorAll('.trust-feature, .trust-stats').forEach(el => {
    observer.observe(el);
});

////////////////////////////////////////////////// Portfolio Section //////////////////////////////////////////////////
// JavaScript for modal functionality
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      if (event.target == modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });
}

// Close modal with Escape key
document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.key === 'Escape') {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
          if (modal.style.display === 'block') {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          }
      });
  }
};

///////////////////////////////////////////////// Testinomials Section /////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const cardCount = cards.length;
    const cardWidth = cards[0].offsetWidth;
    
    // Initialize slider
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Animate the current testimonial
        document.querySelectorAll('.testimonial-inner').forEach(el => {
            el.classList.remove('animate-fade');
        });
        setTimeout(() => {
            cards[currentIndex].querySelector('.testimonial-inner').classList.add('animate-fade');
        }, 50);
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cardCount;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cardCount) % cardCount;
        updateSlider();
    }
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });
    
    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-rotate (optional)
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.testimonials-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });
    
    // Initialize
    updateSlider();
    
    // Responsive adjustments
    window.addEventListener('resize', () => {
        const newCardWidth = cards[0].offsetWidth;
        if (newCardWidth !== cardWidth) {
            track.style.transform = `translateX(-${currentIndex * newCardWidth}px)`;
        }
    });
});

//////////////////////////////////////////////////// Quote Section ////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const quoteBtn = document.getElementById('quoteBtn');
  
  // Smooth scroll to form (replace #quote-form with your actual form section ID)
  quoteBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const formSection = document.querySelector(this.getAttribute('href'));
      if (formSection) {
          formSection.scrollIntoView({
              behavior: 'smooth'
          });
          
          // Add focus to first form field (example)
          // const firstInput = formSection.querySelector('input, textarea, select');
          // if (firstInput) firstInput.focus();
      }
  });
  
  // Track CTA clicks (example analytics)
  function trackCTA(action) {
      console.log('CTA clicked:', action);
      // Replace with your actual analytics code
      // Example: ga('send', 'event', 'CTA', 'click', action);
  }
  
  document.querySelectorAll('.quote-btn, .phone-link, .whatsapp-btn').forEach(btn => {
      btn.addEventListener('click', function() {
          const action = this.classList.contains('quote-btn') ? 'quote_request' : 
                       this.classList.contains('phone-link') ? 'phone_call' : 'whatsapp_chat';
          trackCTA(action);
      });
  });
  
  // WhatsApp button visibility (optional)
  function checkWhatsApp() {
      // Show WhatsApp button only on mobile devices
      const whatsappBtn = document.querySelector('.whatsapp-btn');
      if (window.innerWidth <= 768) {
          whatsappBtn.style.display = 'flex';
      } else {
          whatsappBtn.style.display = 'none';
      }
  }
  
  // Uncomment to enable mobile-only WhatsApp button
  // checkWhatsApp();
  // window.addEventListener('resize', checkWhatsApp);
});

//////////////////////////////////////////////////// Blogs Section ////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Blog card interaction tracking
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't track if clicking on links (they'll be handled separately)
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') return;
            
            const title = this.querySelector('.blog-title').textContent;
            console.log('Blog post viewed:', title);
            // Replace with your analytics tracking:
            // ga('send', 'event', 'Blog', 'Click', title);
            
            // In a real implementation, you would navigate to the post
            // window.location.href = this.querySelector('.blog-title a').href;
        });
    });
    
    // Read more link tracking
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const postTitle = this.closest('.blog-card').querySelector('.blog-title').textContent;
            console.log('Read more clicked for:', postTitle);
            // Replace with your analytics tracking:
            // ga('send', 'event', 'Blog', 'Read More', postTitle);
            
            // In a real implementation, you would navigate to the post
            // window.location.href = this.href;
        });
    });
});

// Jounrey Section
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    // Smooth scroll to target section
    ctaButton.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
        
        // Track conversion (replace with your analytics)
        console.log('CTA clicked - Start Now');
        // ga('send', 'event', 'CTA', 'click', 'Footer Strip');
    });
});

