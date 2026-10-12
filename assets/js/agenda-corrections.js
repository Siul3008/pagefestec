(() => {
  const schedule = document.querySelector('.schedule');
  if (!schedule) return;

  const link = (id, text) => `<a href="actividad.html?id=${id}">${text}</a>`;
  const event = text => `<div class="event">${text}</div>`;
  const blank = '<div class="blank">—</div>';
  const time = value => `<div class="time">${value}</div>`;

  schedule.innerHTML = [
    '<div class="head">HORA</div><div class="head">MARTES 20 OCTUBRE</div><div class="head">MIÉRCOLES 21 OCTUBRE</div><div class="head">JUEVES 22 OCTUBRE</div><div class="head">VIERNES 23 OCTUBRE</div>',
    time('10:00'), event('Acto inicial'), blank, event(link('basketball', 'Baloncesto')), blank,
    time('11:00'), event(`${link('origami', 'Taller de Origami')} / ${link('futbol', 'Fútbol')}`), event(`${link('esports', 'Torneo de E-Sports')} / ${link('voleibol', 'Voleibol')}<br>${link('pintura', 'Pintura de Lienzos')}`), event(link('pintura', 'Pintura de Tote Bags')), blank,
    time('13:00'), blank, blank, event(`${link('feria', 'Feria de emprendimientos')}<br>Intercambio de libros / Recolección de residuos`), event(link('ajedrez', 'Ajedrez')),
    time('15:00'), event(`${link('baile-teatro', 'Torneo de Just Dance')}<br>${link('crochet', 'Taller de Crochet')}`), blank, blank, blank,
    time('16:00'), event(link('cafe-juegos', 'Café y juegos de mesa')), event(link('badminton', 'Badminton')), blank, event(link('bingo', 'Bingo')),
    time('17:00'), blank, event(`${link('cine', 'Noche de cine')} / ${link('baile', 'Taller de baile')}`), blank, blank,
    time('18:00'), event(link('scape-room', 'Scape Room')), blank, blank, blank,
    time('20:00'), event('Taller de finanzas'), blank, event(link('parrillada', 'Parrillada / Trivia')), event('Cierre y premiación de torneos')
  ].join('');

  const note = document.createElement('p');
  note.className = 'agenda-saturday';
  note.innerHTML = `<strong>SÁBADO 24 OCTUBRE</strong> · ${link('cartago', 'Viaje a Cartago')} · 9:00 a. m. – 11:00 p. m. aprox. · Salida a las 9:00 a. m. desde el Campus Tecnológico Local San José.`;
  document.querySelector('.hunt')?.before(note);

  document.head.insertAdjacentHTML('beforeend', '<style>.schedule .event a,.agenda-saturday a{color:#00546a;text-decoration:underline;text-decoration-color:#8d9d50;text-underline-offset:3px}.schedule .event a:hover,.agenda-saturday a:hover{color:#8d9d50}.agenda-saturday{margin:1rem 0 0;padding:.8rem 1rem;border:1px solid #dcd3c0;background:#faf6eb;text-align:center;font-size:.8rem;line-height:1.55}.agenda-saturday strong{color:#596d3b}</style>');
})();
