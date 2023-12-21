/* ORDEN DEL CÓDIGO
1. Importaciones
2. Variables ("let", "const" -> procure usar "const" tanto como sea posible)
3. Funciones
4. Ejecución del código
*/
'use strict';
// Importaciones
import {
  obtenerRaiz,
  leerRegalos,
  leerRegalo,
  crearRegalo,
  eliminarRegalo,
} from './peticiones.js';
// Variables
const d = document;

const $saludo = d.getElementById('saludo'),
  $listaRegalos = d.getElementById('listaRegalos'),
  $regalo = d.getElementById('regalo'),
  $crearRegalo = d.getElementById('crearRegalo');
// Funciones
async function saludar() {
  const retornado = await obtenerRaiz();
  $saludo.textContent = retornado.mensaje;
}

async function mostrarRegalos() {
  const listaRegalos = await leerRegalos();
  let contenidoLista = '';
  listaRegalos.datos.forEach((elemento) => {
    contenidoLista += `<li>${elemento.destinatario} <button id="leer${elemento.id}" class="btn btn-leer">leer regalo</button> <button id="eliminar${elemento.id}" class="btn btn-eliminar">eliminar regalo</button></li>`;
  });
  $listaRegalos.innerHTML = contenidoLista;

  const $btnsLeer = d.querySelectorAll('.btn-leer');
  $btnsLeer.forEach(($btn) => {
    $btn.addEventListener('click', async (e) => {
      const respuesta = await leerRegalo(e.target.id.substring(4));
      $regalo.textContent = `💝 ${respuesta.datos.nombre}`;
    });
  });

  const $btnsEliminar = d.querySelectorAll('.btn-eliminar');
  $btnsEliminar.forEach(($btn) => {
    $btn.addEventListener('click', async (e) => {
      const respuesta = await eliminarRegalo(e.target.id.substring(8));
      if (respuesta.resultado === 'bien') {
        mostrarRegalos();
      }
    });
  });
}

function escucharEventos() {
  $crearRegalo.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    const objeto = {
      destinatario: $crearRegalo.inDestinatario.value,
      nombre: $crearRegalo.inRegalo.value,
      entregado: false,
    };
    const respuesta = await crearRegalo(objeto);
    if (respuesta.resultado === 'bien') {
      mostrarRegalos();
    }
    $crearRegalo.reset();
  });
}
// Ejecución del código
d.addEventListener('DOMContentLoaded', () => {
  saludar();
  mostrarRegalos();
  escucharEventos();
});
