/* ─── Pause grain when tab is hidden ────── */
(function () {
  const grain = document.querySelector('.grain');
  if (!grain) return;
  document.addEventListener('visibilitychange', () => {
    grain.style.animationPlayState = document.hidden ? 'paused' : 'running';
  }, { passive: true });
})();
