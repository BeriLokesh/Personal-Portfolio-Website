// Navigation, theme preference, scroll effects, and client-side form validation.
const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navActions = document.querySelector('.nav-actions');
const navLinks = document.querySelectorAll('.nav-list a');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

function setTheme(theme) {
  body.dataset.theme = theme;
  const isDark = theme === 'dark';
  themeIcon.textContent = isDark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}

setTheme(localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
themeToggle.addEventListener('click', () => {
  const nextTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('portfolio-theme', nextTheme);
});

navToggle.addEventListener('click', () => {
  const isOpen = navActions.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
navLinks.forEach(link => link.addEventListener('click', () => { navActions.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); }));

const sections = document.querySelectorAll('main section[id]');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => navObserver.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: .12 });
document.querySelectorAll('.fade-in').forEach(item => revealObserver.observe(item));

document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const fields = ['name', 'email', 'message'];
function showError(field, message) { document.getElementById(`${field}-error`).textContent = message; document.getElementById(field).classList.toggle('input-error', Boolean(message)); }
form.addEventListener('submit', event => {
  event.preventDefault(); success.textContent = ''; let valid = true;
  const name = form.name.value.trim(), email = form.email.value.trim(), message = form.message.value.trim();
  showError('name', name ? '' : 'Please enter your name.');
  showError('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Please enter a valid email address.');
  showError('message', message.length >= 10 ? '' : 'Please enter a message of at least 10 characters.');
  valid = Boolean(name) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && message.length >= 10;
  if (valid) { success.textContent = 'Thanks, your message is ready to send! I’ll get back to you soon.'; form.reset(); }
});
fields.forEach(field => document.getElementById(field).addEventListener('input', () => { showError(field, ''); success.textContent = ''; }));
