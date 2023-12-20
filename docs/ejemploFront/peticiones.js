'use strict';
const API = 'http://localhost:4100/';

export async function obtenerRaiz() {
  const respuesta = await fetch(API);
  return await respuesta.json();
}

export async function leerRegalos() {
  const respuesta = await fetch(`${API}regalos`);
  return await respuesta.json();
}

export async function leerRegalo(id) {
  const respuesta = await fetch(API + 'regalos/' + id);
  return await respuesta.json();
}
