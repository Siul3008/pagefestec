(() => {
  const drops = [...document.querySelectorAll('.nav-drop')];
  const closeOthers = active => drops.forEach(drop => {
    if (drop !== active) {
      drop.classList.remove('open');
      drop.querySelector('button').setAttribute('aria-expanded', 'false');
    }
  });
  drops.forEach(drop => {
    const button = drop.querySelector('button');
    button.addEventListener('click', event => {
      event.preventDefault();
      const isOpen = drop.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      closeOthers(drop);
    });
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.nav-drop')) closeOthers(null);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeOthers(null);
  });
})();
