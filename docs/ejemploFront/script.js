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
  actualizarRegalo,
  eliminarRegalo,
} from './peticiones.js';
// Variables
const d = document;

const $saludo = d.getElementById('saludo'),
  $listaRegalos = d.getElementById('listaRegalos'),
  $regalo = d.getElementById('regalo'),
  $crearRegalo = d.getElementById('crearRegalo'),
  $actualizarRegalo = d.getElementById('actualizarRegalo');
// Funciones
async function saludar() {
  const retornado = await obtenerRaiz();
  $saludo.textContent = retornado.mensaje;
}

async function mostrarRegalos() {
  const listaRegalos = await leerRegalos();
  let contenidoLista = '';
  listaRegalos.datos.forEach((elemento) => {
    contenidoLista += `<li>${elemento.destinatario} <button id="leer${elemento.id}" class="btn btn-leer">leer regalo</button> <button id="actualizar${elemento.id}" class="btn btn-actualizar">actualizar regalo</button> <button id="eliminar${elemento.id}" class="btn btn-eliminar">eliminar regalo</button></li>`;
  });
  $listaRegalos.innerHTML = contenidoLista;

  const $btnsLeer = d.querySelectorAll('.btn-leer');
  $btnsLeer.forEach(($btn) => {
    $btn.addEventListener('click', async (e) => {
      const respuesta = await leerRegalo(e.target.id.substring(4));
      $regalo.textContent = `💝 ${respuesta.datos.nombre}`;
    });
  });

  const $btnsActualizar = d.querySelectorAll('.btn-actualizar');
  $btnsActualizar.forEach(($btn) => {
    $btn.addEventListener('click', async (e) => {
      const regaloActual = await leerRegalo(e.target.id.substring(10));
      $actualizarRegalo.inActDestinatario.value =
        regaloActual.datos.destinatario;
      $actualizarRegalo.inActRegalo.value = regaloActual.datos.nombre;
      $actualizarRegalo.inActEntregado.checked = regaloActual.datos.entregado;
      const $div = d.querySelector('div');
      $div.classList.remove('no-mostrar');
      $actualizarRegalo.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        const objeto = {
          destinatario: $actualizarRegalo.inActDestinatario.value,
          nombre: $actualizarRegalo.inActRegalo.value,
          entregado: $actualizarRegalo.inActEntregado.checked,
        };
        const respuesta = await actualizarRegalo(
          e.target.id.substring(10),
          objeto
        );
        if (respuesta.resultado === 'bien') {
          mostrarRegalos();
        }
        $actualizarRegalo.reset();
      });
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
