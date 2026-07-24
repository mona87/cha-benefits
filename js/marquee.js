/* ─── Pause marquee when off-screen ──── */
(function () {
  const marquee = document.querySelector('.marquee');
  if (!marquee) return;
  const io = new IntersectionObserver(([entry]) => {
    marquee.classList.toggle('offscreen', !entry.isIntersecting);
  }, { threshold: 0 });
  io.observe(marquee);
})();
