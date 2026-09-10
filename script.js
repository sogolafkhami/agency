const menuButton = document.querySelector('.mobile-menu');
const nav = document.querySelector('.desktop-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('mobile-open', !open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('mobile-open');
  }));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const style = document.createElement('style');
style.textContent = `
@media (max-width:900px){
  .desktop-nav.mobile-open{position:absolute;top:72px;right:0;left:0;display:flex;flex-direction:column;gap:4px;padding:12px;border-radius:18px;background:rgba(11,10,9,.93);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(18px)}
  .desktop-nav.mobile-open a{padding:10px 12px}
}`;
document.head.appendChild(style);
