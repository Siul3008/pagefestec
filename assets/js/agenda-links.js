(() => {
  const links = {
    'Baloncesto': '<a href="actividad.html?id=basketball">Baloncesto</a>',
    'Taller de Origami / Fútbol': '<a href="actividad.html?id=origami">Taller de Origami</a> / <a href="actividad.html?id=futbol">Fútbol</a>',
    'Torneo de E-Sports / Voleibol': '<a href="actividad.html?id=esports">Torneo de E-Sports</a> / <a href="actividad.html?id=voleibol">Voleibol</a>',
    'Feria de emprendimientos / Intercambio de libros / Recolección de residuos': '<a href="actividad.html?id=feria">Feria de emprendimientos</a> / Intercambio de libros / Recolección de residuos',
    'Ajedrez': '<a href="actividad.html?id=ajedrez">Ajedrez</a>',
    'Taller de lienzos y Tote Bags': '<a href="actividad.html?id=pintura">Pintura de lienzos y Tote Bags</a>',
    'Café y juegos de mesa': '<a href="actividad.html?id=cafe-juegos">Café y juegos de mesa</a>',
    'Badminton': '<a href="actividad.html?id=badminton">Badminton</a>',
    'Noche de cine / Taller de baile': '<a href="actividad.html?id=cine">Noche de cine</a> / <a href="actividad.html?id=baile">Taller de baile</a>',
    'Parrillada / Trivia': '<a href="actividad.html?id=parrillada">Parrillada / Trivia</a>',
    'Taller de Crochet': '<a href="actividad.html?id=crochet">Taller de Crochet</a>',
    'Bingo': '<a href="actividad.html?id=bingo">Bingo</a>'
  };
  document.querySelectorAll('.schedule .event').forEach(cell => {
    const label = cell.textContent.trim();
    if (links[label]) cell.innerHTML = links[label];
  });
  document.head.insertAdjacentHTML('beforeend', '<style>.schedule .event a{color:#00546a;text-decoration:underline;text-decoration-color:#8d9d50;text-underline-offset:3px}.schedule .event a:hover{color:#8d9d50}</style>');
})();
