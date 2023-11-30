'use strict';
const urlApi = 'https://random-d.uk/api/v2/random';
const $boton1 = document.getElementById('btn1');
const $boton2 = document.getElementById('btn2');
const $boton = document.getElementById('btn');
const $parrafo = document.getElementsByTagName('p');
const $imagen = document.querySelector('img');

$boton1.addEventListener('click', obtenerPato1);
$boton2.addEventListener('click', obtenerPato2);
$boton.addEventListener('click', obtenerPato);

function obtenerPato1() {
  fetch(urlApi)
    .then((respuesta) => respuesta.json())
    .then((objeto) => console.log('Camino feliz', objeto))
    .catch((error) => console.log('Camino triste', error));
}

async function obtenerPato2() {
  try {
    const respuesta = await fetch(urlApi);
    const objeto = await respuesta.json();
    console.log('Camino feliz', objeto);
  } catch (error) {
    console.log('Camino triste', error);
  }
}

function obtenerPato() {
  const $cargando = document.querySelector('.cargando');
  $cargando.classList.remove('no-mostrar');
  setTimeout(async () => {
    try {
      let respuesta = await fetch(urlApi);
      respuesta = await respuesta.json();
      $parrafo[0].textContent = '¡Camino feliz!';
      $imagen.src = respuesta.url;
    } catch (error) {
      $parrafo[0].textContent =
        '¡Camino triste, ocurrió un error, intente más tarde.!';
    } finally {
      $cargando.classList.add('no-mostrar');
    }
  }, 3000);
}
