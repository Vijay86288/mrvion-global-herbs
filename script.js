const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav nav');
const navCta = document.querySelector('.nav-cta');

menu.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('mobile-open');

  if (isOpen) {
    navLinks.style.cssText = `
      display: flex;
      position: fixed;
      inset: 72px 0 auto;
      background: #090b0a;
      color: #f5f0e6;
      flex-direction: column;
      padding: 35px 7vw;
      gap: 24px;
    `;
    navCta.style.display = 'block';
  } else {
    navLinks.style.cssText = '';
    navCta.style.display = '';
  }
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    navLinks.style.cssText = '';
    navCta.style.display = '';
  });
});
