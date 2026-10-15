(() => {
  const nav = document.querySelector('.ref-header nav');
  if (!nav) return;
  const currentId = new URLSearchParams(location.search).get('id');
  const currentActivity = window.FESTEC.activities.find(activity => activity.id === currentId);
  if (currentActivity?.registrations) {
    const facts = document.querySelector('.ref-facts');
    const firstButton = document.querySelector('.ref-button');
    facts.innerHTML = currentActivity.registrations.map(registration => `<li>${registration.day}</li><li>Aula XXX</li>`).join('');
    firstButton.outerHTML = `<div class="registration-buttons">${currentActivity.registrations.map(registration => `<a class="ref-button" href="${registration.url}" target="_blank" rel="noopener">${registration.label.toUpperCase()}</a>`).join('')}</div>`;
    document.head.insertAdjacentHTML('beforeend', '<style>.registration-buttons{display:grid;gap:.65rem}.registration-buttons .ref-button{max-width:560px}</style>');
  }
  document.head.insertAdjacentHTML('beforeend', `<style>
    .ref-art img:first-child{display:none!important}.ref-art img:last-child{position:static!important;width:min(75%,330px)!important;mix-blend-mode:multiply!important;opacity:.92}.ref-art:after{content:'Imagen de la actividad próximamente';position:absolute;bottom:16px;left:50%;transform:translateX(-50%);font:italic .7rem Georgia,serif;color:#8d9d50;white-space:nowrap}
    .ref-header .detail-drop{position:relative}.ref-header .detail-drop button{border:0;background:transparent;color:#171313;font:inherit;font-size:.82rem;cursor:pointer;padding:0}.ref-header .detail-drop button:after{content:'';display:inline-block;width:6px;height:6px;border-right:1px solid;border-bottom:1px solid;transform:rotate(45deg);margin:0 0 3px .45rem}.ref-header .detail-menu{display:none;position:absolute;z-index:10;top:25px;right:0;min-width:220px;background:#d99b91;padding:.45rem 0;box-shadow:0 3px 9px #0003}.ref-header .detail-drop.open .detail-menu{display:block}.ref-header .detail-menu a{display:block;padding:.55rem 1rem;font-size:.78rem;white-space:nowrap}.ref-header .detail-menu a:hover{background:#ffffff44}@media(max-width:720px){.ref-header .detail-menu{right:auto;left:0}.ref-header .detail-drop button{font-size:.68rem}.ref-art:after{font-size:.62rem}}
  </style>`);
  const menu = (label, entries) => `<div class="detail-drop"><button aria-expanded="false">${label}</button><div class="detail-menu">${entries.map(([text,id]) => `<a href="actividad.html?id=${id}">${text}</a>`).join('')}</div></div>`;
  nav.innerHTML = `<a href="index.html">Inicio</a>${menu('Arte',[['Taller de Origami','origami'],['Taller de baile','baile'],['Noche de cine','cine'],['Taller de Crochet','crochet'],['Pintura de Lienzos','pintura'],['Pintura de Tote Bags','totebags']])}${menu('Cultura',[['Acto inicial','acto-inicial'],['Tarde de café y juegos','cafe-juegos'],['Torneo de Just Dance','baile-teatro'],['Bingo','bingo'],['Parrillada','parrillada'],['Trivia','trivia'],['Karaoke','karaoke'],['Photobooth','photobooth'],['Feria de Emprendedores','feria'],['Recolección de Residuos','recoleccion'],['Intercambio de Libros','intercambio-libros'],['Taller de finanzas','finanzas'],['Scape Room Intercarreras','scape-room'],['Tour Amón','tour-amon'],['Cierre, Premiación y Merch','cierre'],['Viaje a Cartago','cartago']])}${menu('Deporte',[['Badminton','badminton'],['Torneo de Videojuegos','esports'],['Fútbol','futbol'],['Ajedrez','ajedrez'],['Voleibol','voleibol'],['Basketball','basketball']])}`;
  const drops = [...nav.querySelectorAll('.detail-drop')];
  drops.forEach(drop => drop.querySelector('button').addEventListener('click', () => { const open = drop.classList.toggle('open'); drop.querySelector('button').setAttribute('aria-expanded', String(open)); drops.filter(other => other !== drop).forEach(other => other.classList.remove('open')); }));
  document.addEventListener('click', event => { if (!event.target.closest('.detail-drop')) drops.forEach(drop => drop.classList.remove('open')); });
})();
