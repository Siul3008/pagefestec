(() => {
  const cultureMenu = [...document.querySelectorAll('.nav-drop')].find(drop =>
    drop.querySelector('button')?.textContent.includes('Cultura')
  )?.querySelector('.drop-menu');
  if (!cultureMenu) return;

  cultureMenu.innerHTML = [
    ['acto-inicial', 'Acto inicial'],
    ['cafe-juegos', 'Tarde de café y juegos'],
    ['baile-teatro', 'Torneo de Just Dance'],
    ['bingo', 'Bingo'],
    ['parrillada', 'Parrillada, Trivia, Karaoke y Photobooth'],
    ['feria', 'Feria de Emprendedores'],
    ['finanzas', 'Taller de finanzas'],
    ['scape-room', 'Scape Room Intercarreras'],
    ['tour-amon', 'Tour Amón'],
    ['cierre', 'Cierre y premiación'],
    ['cartago', 'Viaje a Cartago']
  ].map(([id, label]) => `<a href="actividad.html?id=${id}">${label}</a>`).join('');
})();
