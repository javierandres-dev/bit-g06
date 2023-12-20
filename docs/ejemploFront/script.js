/* ORDEN DEL CÓDIGO
1. Importaciones
2. Variables ("let", "const" -> procure usar "const" tanto como sea posible)
3. Funciones
4. Ejecución del código
*/
'use strict';
// Importaciones
import { obtenerRaiz, leerRegalos, leerRegalo } from './peticiones.js';
// Variables
const d = document;

const $saludo = d.getElementById('saludo'),
  $listaRegalos = d.getElementById('listaRegalos'),
  $regalo = d.getElementById('regalo');
// Funciones
async function saludar() {
  const retornado = await obtenerRaiz();
  $saludo.textContent = retornado.mensaje;
}

async function mostrarRegalos() {
  const listaRegalos = await leerRegalos();
  let contenidoLista = '';
  listaRegalos.datos.forEach((elemento) => {
    contenidoLista += `<li>${elemento.destinatario} <button id="${elemento.id}" class="btn-leer">leer regalo</button></li>`;
  });
  $listaRegalos.innerHTML = contenidoLista;

  const $btnsLeer = d.querySelectorAll('.btn-leer');
  $btnsLeer.forEach(($btn) => {
    $btn.addEventListener('click', async (e) => {
      const respuesta = await leerRegalo(e.target.id);
      $regalo.textContent = `💝 ${respuesta.datos.nombre}`;
    });
  });
}
// Ejecución del código
d.addEventListener('DOMContentLoaded', () => {
  saludar();
  mostrarRegalos();
});
