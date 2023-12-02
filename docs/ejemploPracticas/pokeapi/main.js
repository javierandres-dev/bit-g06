'use strict';
document.addEventListener('DOMContentLoaded', () => {
  obtenerPokemons('https://pokeapi.co/api/v2/pokemon/');
});

async function obtenerPokemons(url) {
  try {
    switchSpinner();
    let pokemons = await fetch(url);
    pokemons = await pokemons.json();
    mostrarPokemons(pokemons.results, pokemons.previous, pokemons.next);
  } catch (error) {
    mostrarModal();
  } finally {
    switchSpinner();
  }
}

function switchSpinner() {
  const $spinner = document.getElementById('spinner');
  $spinner.classList.toggle('d-none');
}

function mostrarModal() {
  const $modal = new bootstrap.Modal(document.getElementById('modal'));
  $modal.toggle();
}

async function mostrarPokemons(pokemons, anterior, siguiente) {
  const $main = document.querySelector('main');
  let contenidoHtml = '<div class="contenedor-pokemons">';
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    //console.log(pokemon);
    const detallePokemon = await obtenerDetallePokemon(pokemon.url);
    console.log(detallePokemon);
    contenidoHtml += `<div class="card">
  <img src="${detallePokemon.sprites.front_default}" class="card-img-top" alt="Imagen de ${pokemon.name}">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>`;
  }
  contenidoHtml += `</div><div class="text-center my-5"><div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
  ${
    anterior
      ? '<button type="button" class="btn btn-outline-primary" id="anterior">Anterior</button>'
      : ''
  }
  ${
    siguiente
      ? '<button type="button" class="btn btn-outline-primary" id="siguiente">Siguiente</button>'
      : ''
  }
</div></div>`;
  $main.innerHTML = contenidoHtml;
  vigilarBotones(anterior, siguiente);
}

async function obtenerDetallePokemon(url) {
  try {
    switchSpinner();
    const pokemon = await fetch(url);
    return await pokemon.json();
  } catch (error) {
    mostrarModal();
  } finally {
    switchSpinner();
  }
}

function vigilarBotones(urlAnterior, urlSiguiente) {
  const $botonAnterior = document.getElementById('anterior');
  const $botonSiguiente = document.getElementById('siguiente');

  if ($botonAnterior) {
    $botonAnterior.addEventListener('click', () => {
      obtenerPokemons(urlAnterior);
    });
  }
  if ($botonSiguiente) {
    $botonSiguiente.addEventListener('click', () => {
      obtenerPokemons(urlSiguiente);
    });
  }
}
