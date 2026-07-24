/* ─── Pause blob-frame morph when off-screen ────── */
(function () {
  const frames = document.querySelectorAll('.blob-frame');
  if (!frames.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('offscreen', !entry.isIntersecting));
  }, { threshold: 0 });
  frames.forEach(f => io.observe(f));
})();
