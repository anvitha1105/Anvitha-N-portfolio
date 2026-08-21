// ============ Footer year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Nav: scroll shadow + mobile toggle ============
const navWrap = document.querySelector('.nav-wrap');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

const onScroll = () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ============ Scroll reveal ============
const revealEls = document.querySelectorAll('.reveal, .reveal-art');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ============ Animated counters ============
const counters = document.querySelectorAll('.stat-num');

function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const isDecimal = el.dataset.decimal === 'true';
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value = target * eased;
    el.textContent = isDecimal ? value.toFixed(2) : Math.round(value);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = isDecimal ? target.toFixed(2) : target;
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(el => counterObserver.observe(el));

// ============ Active nav link on scroll ============
const sections = document.querySelectorAll('main .section, .hero');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => { if (sec.id) sectionObserver.observe(sec); });
