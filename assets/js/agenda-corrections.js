(() => {
  const schedule = document.querySelector('.schedule');
  if (!schedule) return;

  const link = (id, text) => `<a href="actividad.html?id=${id}">${text}</a>`;
  const event = text => `<div class="event">${text}</div>`;
  const blank = '<div class="blank">—</div>';
  const time = value => `<div class="time">${value}</div>`;

  schedule.innerHTML = [
    '<div class="head">HORA</div><div class="head">MARTES 20 OCTUBRE</div><div class="head">MIÉRCOLES 21 OCTUBRE</div><div class="head">JUEVES 22 OCTUBRE</div><div class="head">VIERNES 23 OCTUBRE</div><div class="head">SÁBADO 24 OCTUBRE</div>',
    time('10:00'), event(link('acto-inicial', 'Acto inicial')), blank, blank, blank, event(`${link('cartago', 'Viaje a Cartago')}<br><small>9:00 a. m. – 11:00 p. m. aprox.</small>`),
    time('11:00'), event(`${link('futbol', 'Torneo de Fútbol')}<br>${link('origami', 'Taller de Origami')}<br><small>11:00 a. m. – 1:00 p. m.</small>`), event(`${link('voleibol', 'Torneo de Voleibol')}<br>${link('pintura', 'Pintura de Lienzos')}<br><small>11:00 a. m. – 1:00 p. m.</small>`), event(`${link('basketball', 'Torneo de Baloncesto')}<br>${link('totebags', 'Pintura de Tote Bags')}<br><small>11:00 a. m. – 1:00 p. m.</small>`), event(`${link('badminton', 'Torneo de Badminton')}<br>${link('ajedrez', 'Torneo de Ajedrez')}<br><small>11:00 a. m. – 1:00 p. m.</small>`), blank,
    time('13:00'), blank, blank, event(`${link('feria', 'Feria de emprendedores')}<br>${link('recoleccion', 'Recolección de residuos')}<br>${link('intercambio-libros', 'Intercambio de libros')}<br><small>1:00 p. m. – 4:00 p. m.</small>`), blank, blank,
    time('14:00'), event(link('crochet', 'Taller de Crochet')), event(link('tour-amon', 'Tour Amón')), blank, event(`${link('bingo', 'Bingo')}<br><small>2:00 p. m. – 5:00 p. m.</small>`), blank,
    time('16:00'), event(`${link('finanzas', 'Taller de finanzas')}<br><small>4:00 p. m. – 6:00 p. m.</small>`), event(`${link('esports', 'Torneo de Videojuegos')}<br>${link('baile-teatro', 'Torneo de Just Dance')}<br><small>4:00 p. m. – 6:00 p. m.</small>`), event(link('cafe-juegos', 'Café y juegos de mesa')), blank, blank,
    time('18:00'), event(link('scape-room', 'Scape Room Intercarreras')), event(`${link('cine', 'Noche de cine')}<br>${link('baile', 'Taller de baile')}`), event(`${link('parrillada', 'Parrillada')}<br>${link('trivia', 'Trivia')}<br>${link('karaoke', 'Karaoke')}<br>${link('photobooth', 'Photobooth')}`), event(link('cierre', 'Cierre FESTEC, Premiación y Entrega de Merch')), blank
  ].join('');
  document.head.insertAdjacentHTML('beforeend', '<style>.schedule{grid-template-columns:80px repeat(5,1fr);min-width:940px}.schedule .event a{color:#00546a;text-decoration:underline;text-decoration-color:#8d9d50;text-underline-offset:3px}.schedule .event a:hover{color:#8d9d50}</style>');
})();
