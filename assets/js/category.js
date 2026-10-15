(() => {
  const type = new URLSearchParams(location.search).get('tipo');
  const details = {
    deporte: { title: 'Torneos deportivos', intro: 'Elige un torneo para consultar su horario, detalles y formulario de inscripción.' },
    arte: { title: 'Talleres artísticos', intro: 'Conoce los talleres creativos de FESTEC y encuentra la información de cada actividad.' },
    cultura: { title: 'Actividades culturales', intro: 'Explora las experiencias culturales, recreativas y comunitarias de la semana.' }
  };
  const current = details[type] || details.deporte;
  const activities = window.FESTEC.activities.filter(activity => activity.cat === (details[type] ? type : 'deporte'));
  const escape = text => text.replace(/[&<>"']/g, character => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;' }[character]));
  const visuals = {
    futbol:['⚽','#087e8b'], badminton:['🏸','#557a95'], esports:['🎮','#633f7b'], ajedrez:['♟','#4f5360'], voleibol:['🏐','#ca7a2b'], basketball:['🏀','#b9542d'],
    origami:['◇','#6c8950'], baile:['♫','#b87575'], cine:['▣','#445f70'], crochet:['〰','#ad7178'], pintura:['✦','#bd7e7b'], totebags:['✦','#b48455'],
    'acto-inicial':['✦','#73557e'], 'cafe-juegos':['♧','#856640'], 'baile-teatro':['◒','#a25e7c'], bingo:['◎','#945b4d'], parrillada:['♨','#8a493a'], trivia:['?','#5c7182'], karaoke:['♫','#7b4d86'], photobooth:['◉','#6c6a91'], feria:['▤','#788a45'], recoleccion:['♻','#477c67'], 'intercambio-libros':['▤','#735c47'], finanzas:['▣','#437083'], 'scape-room':['✦','#744c70'], 'tour-amon':['◈','#6f8052'], cierre:['★','#754b46'], cartago:['✧','#49717b']
  };

  document.title = `${current.title} · FESTEC 2026`;
  document.querySelector('#title').textContent = current.title;
  document.querySelector('#intro').textContent = current.intro;
  document.querySelector('#activity-list').innerHTML = activities.length ? activities.map(activity => `
    <a class="card" href="actividad.html?id=${encodeURIComponent(activity.id)}" data-symbol="${(visuals[activity.id] || ['✦','#00546a'])[0]}" style="--accent:${(visuals[activity.id] || ['✦','#00546a'])[1]}">
      <small>${escape(activity.day)} · ${escape(activity.time)}</small><h2>${escape(activity.title)}</h2><p>${escape(activity.place)}</p><b>Ver actividad →</b>
    </a>`).join('') : '<p class="empty">Pronto compartiremos las actividades de esta categoría.</p>';
})();
