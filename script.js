// ----- MOBILE MENU -----
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger?.addEventListener('click', () => navMenu.classList.toggle('active'));

// Close menu when a non-dropdown link is clicked
document.querySelectorAll('.nav-menu a:not(.dropdown-toggle)').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 992) navMenu.classList.remove('active');
  });
});

// ----- MOBILE DROPDOWN TOGGLE -----
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.closest('li');
    const dropdown = parent.querySelector('.dropdown-menu');
    dropdown.classList.toggle('open');
  });
});

// ----- NAVBAR SCROLLED CLASS -----
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ----- ANIMATED COUNTER (impact page) -----
const counters = document.querySelectorAll('.stat-number');
if (counters.length) {
  const animate = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    const update = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(update, 30);
      } else { counter.innerText = target; }
    };
    update();
  };
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animate(entry.target); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.3 });
  counters.forEach(counter => obs.observe(counter));
}

// ----- CONTACT FORM (action page) -----
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMessage');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.textContent = 'Thanks! (demo)';
  formMsg.style.color = '#16a34a';
  contactForm.reset();
});

// ----- COPY LINK (action page) -----
const copyBtn = document.getElementById('copyLinkBtn');
copyBtn?.addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.origin + '/race-to-sustainability/');
  alert('Link copied!');
});

// ----- AOS Init -----
AOS.init({ duration: 800, once: true, easing: 'ease-out' });