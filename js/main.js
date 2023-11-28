'use strict';
const equipo = [
  {
    id: 1,
    nombre: 'Eduardo Alaña',
    web: 'https://toco0222.github.io/www/',
    foto: 'https://toco0222.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 2,
    nombre: 'Juan Castillo',
    web: 'https://juanscastillo54.github.io/www/',
    foto: 'https://juanscastillo54.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 3,
    nombre: 'Brian Córdoba',
    web: 'https://brianco007.github.io/www/',
    foto: 'https://brianco007.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 4,
    nombre: 'Pablo Escobar',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 5,
    nombre: 'Angelica Mosquera',
    web: 'https://angemost.github.io/www/',
    foto: 'https://angemost.github.io/www/assets/mi-foto.jpg',
    genero: 'xx',
  },
  {
    id: 6,
    nombre: 'Carlos Hernan Molano',
    web: 'https://carmobu.github.io/www/',
    foto: 'https://carmobu.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 7,
    nombre: 'Carlos Andrés Molano',
    web: 'https://camolano85.github.io/www/',
    foto: 'https://camolano85.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 8,
    nombre: 'Andrés Martinez',
    web: 'https://afmartinezv.github.io/www/',
    foto: 'https://afmartinezv.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 9,
    nombre: 'Leonhard Iglesias',
    web: 'https://leonhardiv94.github.io/www/',
    foto: 'https://leonhardiv94.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 10,
    nombre: 'Luis Fuquen',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 11,
    nombre: 'Juan Brunal',
    web: 'https://sebastianbrunal.github.io/www/',
    foto: 'https://sebastianbrunal.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 12,
    nombre: 'Carlos Castro',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 13,
    nombre: 'Nicolas Guzman',
    web: 'https://nicolasg16.github.io/www/',
    foto: 'https://nicolasg16.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 14,
    nombre: 'Carlos Romero',
    web: 'https://dan1elr0mero.github.io/www/',
    foto: 'https://dan1elr0mero.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 15,
    nombre: 'Laura Garzón',
    web: 'https://kamilau27.github.io/www/',
    foto: 'https://kamilau27.github.io/www/assets/mi-foto.jpg',
    genero: 'xx',
  },
  {
    id: 16,
    nombre: 'Juan Rodriguez',
    web: 'https://drodriguezria.github.io/www/',
    foto: 'https://drodriguezria.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 17,
    nombre: 'Miguel Arango',
    web: 'https://miguelarangoe.github.io/www/',
    foto: 'https://miguelarangoe.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 18,
    nombre: 'Diego Sanchez',
    web: 'https://diansa22.github.io/www/',
    foto: 'https://diansa22.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 19,
    nombre: 'Carlos Angulo',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 20,
    nombre: 'Claudia Florez',
    web: null,
    foto: null,
    genero: 'xx',
  },
  {
    id: 21,
    nombre: 'Darleida Prada',
    web: 'https://darly-prada.github.io/www/',
    foto: 'https://darly-prada.github.io/www/assets/mi-foto.jpg',
    genero: 'xx',
  },
  {
    id: 22,
    nombre: 'Daniel Vanegas',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 23,
    nombre: 'Javier Quintero',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 24,
    nombre: 'Julieth Espitia',
    web: null,
    foto: null,
    genero: 'xx',
  },
  {
    id: 25,
    nombre: 'Juan Moncada',
    web: 'https://luthiensindar.github.io/www/',
    foto: 'https://luthiensindar.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 26,
    nombre: 'Ingrid Rincón',
    web: null,
    foto: null,
    genero: 'xx',
  },
  {
    id: 27,
    nombre: 'Jefferson Villamizar',
    web: 'https://sheriffrude.github.io/www/',
    foto: 'https://sheriffrude.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 28,
    nombre: 'Frank Ramirez',
    web: 'https://frank2126.github.io/www/',
    foto: 'https://frank2126.github.io/www/assets/mi-foto.jpg',
    genero: 'xy',
  },
  {
    id: 29,
    nombre: 'José Rodriguez',
    web: null,
    foto: null,
    genero: 'xy',
  },
  {
    id: 30,
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
