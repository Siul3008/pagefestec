(() => {
  const schedule = document.querySelector('.schedule');
  if (!schedule) return;

  const link = (id, text) => `<a href="actividad.html?id=${id}">${text}</a>`;
  const event = text => `<div class="event">${text}</div>`;
  const blank = '<div class="blank">—</div>';
  const time = value => `<div class="time">${value}</div>`;
  const separate = (...items) => items.join(' <span class="event-separator" aria-hidden="true">/</span> ');

  schedule.innerHTML = [
    '<div class="head">HORA</div><div class="head">MARTES 20 OCTUBRE</div><div class="head">MIÉRCOLES 21 OCTUBRE</div><div class="head">JUEVES 22 OCTUBRE</div><div class="head">VIERNES 23 OCTUBRE</div><div class="head">SÁBADO 24 OCTUBRE</div>',
    time('10:00'), event(link('acto-inicial', 'Acto inicial')), blank, blank, blank, event(`${link('cartago', 'Viaje a Cartago')}<br><small>9:00 a. m. – 11:00 p. m. aprox.</small>`),
    time('11:00'), event(`${separate(link('futbol', 'Torneo de Fútbol'), link('origami', 'Taller de Origami'))}<br><small>11:00 a. m. – 1:00 p. m.</small>`), event(`${separate(link('voleibol', 'Torneo de Voleibol'), link('pintura', 'Pintura de Lienzos'))}<br><small>11:00 a. m. – 1:00 p. m.</small>`), event(`${separate(link('basketball', 'Torneo de Baloncesto'), link('totebags', 'Pintura de Tote Bags'))}<br><small>11:00 a. m. – 1:00 p. m.</small>`), event(`${separate(link('badminton', 'Torneo de Badminton'), link('ajedrez', 'Torneo de Ajedrez'))}<br><small>11:00 a. m. – 1:00 p. m.</small>`), blank,
    time('13:00'), blank, blank, event(`${separate(link('feria', 'Feria de emprendedores'), link('recoleccion', 'Recolección de residuos'), link('intercambio-libros', 'Intercambio de libros'))}<br><small>1:00 p. m. – 4:00 p. m.</small>`), blank, blank,
    time('14:00'), event(link('crochet', 'Taller de Crochet')), event(link('tour-amon', 'Tour Amón')), blank, event(`${link('bingo', 'Bingo')}<br><small>2:00 p. m. – 5:00 p. m.</small>`), blank,
    time('16:00'), event(`${link('finanzas', 'Taller de finanzas')}<br><small>4:00 p. m. – 6:00 p. m.</small>`), event(`${separate(link('esports', 'Torneo de Videojuegos'), link('baile-teatro', 'Torneo de Just Dance'))}<br><small>4:00 p. m. – 6:00 p. m.</small>`), event(link('cafe-juegos', 'Café y juegos de mesa')), blank, blank,
    time('18:00'), event(link('scape-room', 'Scape Room Intercarreras')), event(separate(link('cine', 'Noche de cine'), link('baile', 'Taller de baile'))), event(separate(link('parrillada', 'Parrillada'), link('trivia', 'Trivia'), link('karaoke', 'Karaoke'), link('photobooth', 'Photobooth'))), event(link('cierre', 'Cierre FESTEC, Premiación y Entrega de Merch')), blank
  ].join('');
  document.head.insertAdjacentHTML('beforeend', '<style>.schedule{grid-template-columns:80px repeat(5,1fr);min-width:940px}.schedule .event{display:block;padding:.6rem .35rem}.schedule .event a{color:#00546a;text-decoration:underline;text-decoration-color:#8d9d50;text-underline-offset:3px}.schedule .event a:hover{color:#8d9d50}.event-separator{padding:0 .18rem;color:#8d9d50;font-weight:bold}</style>');
})();
