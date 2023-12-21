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

export async function crearRegalo(objeto) {
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objeto),
  };
  const respuesta = await fetch(`${API}regalos`, opciones);
  return await respuesta.json();
}

export async function actualizarRegalo(id, objeto) {
  const opciones = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objeto),
  };
  const respuesta = await fetch(`${API}regalos/${id}`, opciones);
  return await respuesta.json();
}

export async function eliminarRegalo(id) {
  const opciones = {
    method: 'DELETE',
  };
  const respuesta = await fetch(`${API}regalos/${id}`, opciones);
  return await respuesta.json();
}
