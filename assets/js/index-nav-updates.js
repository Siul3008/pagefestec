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
    ['parrillada', 'Parrillada'],
    ['trivia', 'Trivia'],
    ['karaoke', 'Karaoke'],
    ['photobooth', 'Photobooth'],
    ['feria', 'Feria de Emprendedores'],
    ['recoleccion', 'Recolección de Residuos'],
    ['intercambio-libros', 'Intercambio de Libros'],
    ['finanzas', 'Taller de finanzas'],
    ['scape-room', 'Scape Room Intercarreras'],
    ['tour-amon', 'Tour Amón'],
    ['cierre', 'Cierre, Premiación y Merch'],
    ['cartago', 'Viaje a Cartago']
  ].map(([id, label]) => `<a href="actividad.html?id=${id}">${label}</a>`).join('');
})();
