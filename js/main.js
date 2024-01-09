'use strict';
const equipo = [
  {
    id: 1,
    nombre: 'Juan Castillo',
    web: 'https://juanscastillo54.github.io/www/',
    foto: 'https://juanscastillo54.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 2,
    nombre: 'Brian Córdoba',
    web: 'https://brianco007.github.io/www/',
    foto: 'https://brianco007.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 3,
    nombre: 'Carlos Hernan Molano',
    web: 'https://carmobu.github.io/www/',
    foto: 'https://carmobu.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 4,
    nombre: 'Andrés Martinez',
    web: 'https://afmartinezv.github.io/www/',
    foto: 'https://afmartinezv.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 5,
    nombre: 'Leonhard Iglesias',
    web: 'https://leonhardiv94.github.io/www/',
    foto: 'https://leonhardiv94.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 6,
    nombre: 'Juan Brunal',
    web: 'https://sebastianbrunal.github.io/www/',
    foto: 'https://sebastianbrunal.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 7,
    nombre: 'Carlos Castro',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 8,
    nombre: 'Nicolas Guzman',
    web: 'https://nicolasg16.github.io/www/',
    foto: 'https://nicolasg16.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 9,
    nombre: 'Carlos Romero',
    web: 'https://dan1elr0mero.github.io/www/',
    foto: 'https://dan1elr0mero.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 10,
    nombre: 'Laura Garzón',
    web: 'https://kamilau27.github.io/www/',
    foto: 'https://kamilau27.github.io/www/assets/mi-foto.jpg',
    genero: 'xx',
  },
  {
    id: 11,
    nombre: 'Juan Rodriguez',
    web: 'https://drodriguezria.github.io/www/',
    foto: 'https://drodriguezria.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 12,
    nombre: 'Darleida Prada',
    web: 'https://darly-prada.github.io/www/',
    foto: 'https://darly-prada.github.io/www/assets/mi-foto.jpg',
    genero: 'xx',
  },
  {
    id: 13,
    nombre: 'Juan Moncada',
    web: 'https://luthiensindar.github.io/www/',
    foto: 'https://luthiensindar.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 14,
    nombre: 'Jefferson Villamizar',
    web: 'https://sheriffrude.github.io/www/',
    foto: 'https://sheriffrude.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 15,
    nombre: 'Frank Ramirez',
    web: 'https://frank2126.github.io/www/',
    foto: 'https://frank2126.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 16,
    nombre: 'Gabriel Martinez',
    web: 'https://igabe23.github.io/www/',
    foto: 'https://igabe23.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const $root = document.getElementById('root');
  let contenidoHtml = '';
  for (let i = 0; i < equipo.length; i++) {
    if (equipo[i].web) {
      contenidoHtml += `
    <a
      href="${equipo[i].web}"
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure>
        <img
          src="${equipo[i].foto}"
          alt="Foto de ${equipo[i].nombre}"
        />
        <figcaption class="${equipo[i].genero}">${equipo[i].nombre}</figcaption>
      </figure>
    </a>
    `;
    }
  }
  $root.innerHTML = contenidoHtml;
});
