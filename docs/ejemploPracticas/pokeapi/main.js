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
    mostrarModal('error');
  } finally {
    switchSpinner();
  }
}

function switchSpinner() {
  const $spinner = document.getElementById('spinner');
  $spinner.classList.toggle('d-none');
}

function mostrarModal(tipo, datos) {
  console.log('datos:', datos);
  const $modal = new bootstrap.Modal(document.getElementById('modal'));
  const $titulo = document.querySelector('.modal-title');
  const $contenido = document.querySelector('.modal-body');

  if (tipo === 'error') {
    $titulo.textContent = 'Ocurrió un error';
    $contenido.textContent = 'Por favor intente más tarde';
  }
  if (tipo === 'pokemon') {
    $titulo.textContent = `${datos.name}`;
    $contenido.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${datos.sprites.front_default}" class="card-img-top" alt="Imagen frontal de ${datos.name}">
      <img src="${datos.sprites.back_default}" class="img-fluid rounded-start" alt="Imagen trasera de ${datos.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Experiencia base: ${datos.base_experience}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Peso: ${datos.weight}</li>
          <li class="list-group-item">Altura: ${datos.height}</li>
        </ul>
      </div>
    </div>
  </div>
</div>`;
  }
  $modal.toggle();
}

async function mostrarPokemons(pokemons, anterior, siguiente) {
  const $main = document.querySelector('main');
  let contenidoHtml = '<div class="contenedor-pokemons">';
  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    //console.log(pokemon);
    const detallePokemon = await obtenerDetallePokemon(pokemon.url);
    //console.log(detallePokemon);
    contenidoHtml += `<div class="card">
  <img src="${detallePokemon.sprites.front_default}" class="card-img-top" alt="Imagen de ${pokemon.name}">
  <div class="card-body">
    <h5 class="card-title text-capitalize">${pokemon.name}</h5>
    <button type="button" class="btn btn-outline-info" id="${detallePokemon.id}">Ver más</button>
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
    mostrarModal('error');
  } finally {
    switchSpinner();
  }
}

function vigilarBotones(urlAnterior, urlSiguiente) {
  const $botonesInfo = document.querySelectorAll('.btn-outline-info');
  const $botonAnterior = document.getElementById('anterior');
  const $botonSiguiente = document.getElementById('siguiente');

  let i = 0;
  while (i < $botonesInfo.length) {
    const $boton = $botonesInfo[i];
    $boton.addEventListener('click', () => {
      mostrarPokemon($boton.id);
    });
    i++;
  }

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

function mostrarPokemon(id) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + id)
    .then((respuesta) => {
      switchSpinner();
      return respuesta.json();
    })
    .then((datos) => {
      mostrarModal('pokemon', datos);
    })
    .catch((error) => {
      mostrarModal('error');
    })
    .finally(() => {
      switchSpinner();
    });
}
