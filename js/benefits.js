/* ─── Ledger hover → image panel ─────── */
(function () {
  const rows = document.querySelectorAll('.benefit-row');
  const imgs = document.querySelectorAll('#benefitsFrame img');
  function activate(row) {
    rows.forEach(r => {
      r.classList.toggle('active', r === row);
      r.setAttribute('aria-pressed', r === row ? 'true' : 'false');
    });
    imgs.forEach(im => im.classList.toggle('active', im.dataset.img === row.dataset.img));
  }
  rows.forEach(row => {
    row.addEventListener('mouseenter', () => activate(row));
    row.addEventListener('focusin', () => activate(row));
    row.addEventListener('click', () => activate(row));
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(row);
      }
    });
  });
})();
