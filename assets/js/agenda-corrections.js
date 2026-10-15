(() => {
  const schedule = document.querySelector('.schedule');
  if (!schedule) return;

  const link = (id, text) => `<a href="actividad.html?id=${id}">${text}</a>`;
  const hourRow = hour => hour - 8;
  const position = (day, start, duration) =>
    `grid-column:${day};grid-row:${hourRow(start)}/span ${duration}`;

  const block = (day, start, duration, content, extraClass = '') =>
    `<div class="event schedule-block ${extraClass}" style="${position(day, start, duration)}">${content}</div>`;

  const group = (day, start, duration, items) => {
    const cards = items.map(item =>
      `<div class="mini-event ${item.className || ''}" style="grid-column:${item.column}${item.columnSpan ? `/span ${item.columnSpan}` : ''};grid-row:${item.offset + 1}/span ${item.duration}${item.style ? `;${item.style}` : ''}">${item.content}</div>`
    ).join('');
    const lanes = Math.max(...items.map(item => item.column + (item.columnSpan || 1) - 1));
    return `<div class="event-group" style="${position(day, start, duration)};--hours:${duration};--lanes:${lanes}">${cards}</div>`;
  };

  const heads = [
    'HORA',
    'MARTES 20 OCTUBRE',
    'MIÉRCOLES 21 OCTUBRE',
    'JUEVES 22 OCTUBRE',
    'VIERNES 23 OCTUBRE',
    'SÁBADO 24 OCTUBRE'
  ].map((label, index) =>
    `<div class="head" style="grid-column:${index + 1};grid-row:1">${label}</div>`
  ).join('');

  const times = Array.from({ length: 11 }, (_, index) => {
    const hour = index + 10;
    return `<div class="time" style="grid-column:1;grid-row:${index + 2}">${String(hour).padStart(2, '0')}:00</div>`;
  }).join('');

  schedule.innerHTML = heads + times + [
    block(2, 10, 1, link('acto-inicial', 'Acto inicial'), 'tone-pink'),
    group(2, 11, 2, [
      { column: 1, offset: 0, duration: 2, className: 'tone-olive', content: link('futbol', 'Torneo FUT 3x3') },
      { column: 2, offset: 0, duration: 1, className: 'tone-pink', content: link('origami', 'Taller de Origami') }
    ]),
    block(2, 14, 1, link('crochet', 'Taller de Crochet'), 'tone-cream'),
    block(2, 15, 2, link('finanzas', 'Taller de finanzas'), 'tone-olive'),
    block(2, 17, 2, link('scape-room', 'Scape Room Intercarreras'), 'tone-pink'),

    group(3, 11, 2, [
      { column: 1, offset: 0, duration: 2, className: 'tone-cream', content: link('voleibol', 'Torneo de Voleibol') },
      { column: 2, offset: 0, duration: 1, className: 'tone-pink', content: link('pintura', 'Pintura de lienzo') }
    ]),
    block(3, 12, 6, `${link('feria', 'Feria de emprendedores')}`, 'narrow-right tone-cream'),
    block(3, 14, 2, link('tour-amon', 'Tour Amón'), 'narrow-left tone-olive'),
    block(3, 16, 2, link('esports', 'Torneo de E-Sports'), 'narrow-left tone-pink'),
    group(3, 18, 3, [
      {
        column: 1,
        columnSpan: 2,
        offset: 0,
        duration: 3,
        className: 'party-combo',
        content: `<span class="party-part tone-olive">${link('parrillada', 'Parrillada')}</span><span class="party-part tone-cream">${link('photobooth', 'Photobooth')}<br><span class="event-separator">+</span><br>${link('karaoke', 'Karaoke')}</span>`
      },
      { column: 3, offset: 0, duration: 3, className: 'tone-pink', style: 'height:83.333%;align-self:start', content: `${link('baile', 'Taller de baile')}<br><small>6:00–8:30 p. m.</small>` }
    ]),

    group(4, 11, 2, [
      { column: 1, offset: 0, duration: 2, className: 'tone-olive', content: link('totebags', 'Pintura de Tote Bags') },
      { column: 2, offset: 0, duration: 2, className: 'tone-pink', content: link('basketball', 'Torneo de Baloncesto') }
    ]),
    group(4, 13, 2, [
      { column: 1, offset: 0, duration: 2, className: 'tone-olive', content: link('intercambio-libros', 'Intercambio de libros') },
      { column: 2, offset: 0, duration: 2, className: 'tone-cream', content: link('recoleccion', 'Recolección de residuos') }
    ]),
    block(4, 15, 3, link('cafe-juegos', 'Café y juegos de mesa'), 'tone-pink'),
    block(4, 18, 3, link('cine', 'Noche de cine'), 'tone-olive'),

    group(5, 11, 2, [
      { column: 1, offset: 0, duration: 2, className: 'tone-olive', content: link('ajedrez', 'Torneo de Ajedrez') },
      { column: 2, offset: 0, duration: 2, className: 'tone-cream', content: link('badminton', 'Torneo de Badminton') }
    ]),
    block(5, 14, 2, link('bingo', 'Gran Bingo'), 'tone-cream'),
    block(5, 17, 1, link('cierre', 'Acto de cierre'), 'tone-pink'),

    block(6, 11, 10, `${link('cartago', 'Nos vamos a Cartago')}<br><small>Transporte · volvemos a las 9:00 p. m.</small>`, 'cartago tone-olive')
  ].join('');

  document.head.insertAdjacentHTML('beforeend', `
    <style>
      .schedule{
        grid-template-columns:80px repeat(5,minmax(150px,1fr));
        grid-template-rows:auto repeat(11,52px);
        min-width:980px;
        position:relative
      }
      .schedule>div{min-height:0}
      .schedule .head,.schedule .time{position:relative;z-index:3;background:#fffdf8}
      .schedule .time{display:flex;align-items:flex-start;justify-content:center;padding-top:.45rem}
      .schedule-block,.event-group{
        margin:3px;
        border:1px solid rgba(0,84,106,.25)!important;
        border-radius:4px;
        background:#f8efd9;
        position:relative;
        z-index:2;
        overflow:hidden
      }
      .schedule .schedule-block{
        display:flex;
        align-items:center;
        justify-content:center;
        padding:.45rem;
        line-height:1.25
      }
      .event-group{
        display:grid;
        grid-template-columns:repeat(var(--lanes,2),minmax(0,1fr));
        grid-template-rows:repeat(var(--hours),minmax(0,1fr));
        padding:2px!important;
        gap:3px
      }
      .mini-event{
        display:flex;
        align-items:center;
        justify-content:center;
        padding:.35rem .25rem;
        border-radius:3px;
        background:#eef0dc;
        line-height:1.18;
        overflow:hidden
      }
      .schedule .event a,.mini-event a{
        color:#00546a;
        text-decoration:underline;
        text-decoration-color:#8d9d50;
        text-underline-offset:3px
      }
      .schedule .event a:hover,.mini-event a:hover{color:#8d9d50}
      .event-separator{color:#8d9d50;font-weight:bold}
      .narrow-left{width:48%;justify-self:start}
      .narrow-right{width:48%;justify-self:end}
      .party-combo{
        display:grid;
        grid-template-columns:.9fr 1.1fr;
        gap:3px;
        padding:2px
      }
      .party-part{
        display:flex;
        align-items:center;
        justify-content:center;
        min-width:0;
        padding:.35rem .25rem;
        border-radius:3px;
        line-height:1.18
      }
      .tone-olive{background:#aab66b!important}
      .tone-pink{background:#dda39a!important}
      .tone-cream{background:#f5eccd!important}
      .tone-olive a,.tone-pink a{color:#173f45!important}
      .cartago{
        background:#aab66b;
        border-color:#8d9d50!important;
        font-size:.9rem
      }
      .cartago small{display:block;margin-top:.45rem;font:600 .65rem/1.3 Arial,sans-serif;color:#596d3b}
      @media(max-width:720px){
        .schedule{grid-template-columns:72px repeat(5,150px)}
      }
    </style>
  `);
})();