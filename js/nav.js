/* ─── Nav scroll state ───────────────── */
(function () {
  const nav = document.getElementById('site-nav');
  const onScroll = () => nav.classList.toggle('scrolled', scrollY > 60);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = document.querySelector('.nav-hamburger');
  const menu = document.getElementById('nav-menu');
  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('menu-open');
  }

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('menu-open', open);
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') closeMenu();
  });
  document.addEventListener('click', e => {
    if (menu.classList.contains('open') && !nav.contains(e.target)) closeMenu();
  });
})();
