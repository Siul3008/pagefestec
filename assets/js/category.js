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
  const backgrounds = { deporte:'assets/images/activities-sport.png', arte:'assets/images/activities-art.png', cultura:'assets/images/activities-culture.png' };

  document.title = `${current.title} · FESTEC 2026`;
  document.querySelector('#title').textContent = current.title;
  document.querySelector('#intro').textContent = current.intro;
  document.querySelector('#activity-list').innerHTML = activities.length ? activities.map(activity => `
    <a class="card" href="actividad.html?id=${encodeURIComponent(activity.id)}">
      <img src="${backgrounds[activity.cat]}" alt="" loading="lazy"><small>${escape(activity.day)} · ${escape(activity.time)}</small><h2>${escape(activity.title)}</h2><p>${escape(activity.place)}</p><b>Ver actividad →</b>
    </a>`).join('') : '<p class="empty">Pronto compartiremos las actividades de esta categoría.</p>';
})();
