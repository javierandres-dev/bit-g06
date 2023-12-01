'use strict';
const $modal = new bootstrap.Modal(document.getElementById('modal'));

document.addEventListener('DOMContentLoaded', () => {
  obtenerPokemons('https://pokeapi.co/api/v2/pokemon/');
  ('https://pokeapi.co/api/v2/pokemon/20/');
});

async function obtenerPokemons(url) {
  try {
    switchSpinner();
    let pokemons = await fetch(url);
    pokemons = await pokemons.json();
    //console.log(pokemons);
    mostrarPokemons(pokemons.results);
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
  $modal.toggle();
}

async function mostrarPokemons(pokemons) {
  const $main = document.querySelector('main');
  let contenidoHtml = '';
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    //console.log(pokemon);
    const detallePokemon = await obtenerDetallePokemon(pokemon.url);
    //console.log(detallePokemon);
    contenidoHtml += `<div class="card">
  <img src="${detallePokemon.sprites.front_default}" class="card-img-top" alt="Imagen de ${pokemon.name}">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <a href="#" class="btn btn-primary">Ver más</a>
  </div>
</div>`;
  }
  $main.innerHTML = contenidoHtml;
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
