'use strict';
const $formLogueo = document.getElementById('logueo');
const $borrar = document.getElementById('borrar');
const $borrarTodo = document.getElementById('borrarTodo');

document.addEventListener('DOMContentLoaded', () => {
  let credencialesObtenidas = localStorage.getItem('credenciales');
  credencialesObtenidas = JSON.parse(credencialesObtenidas);
  if (credencialesObtenidas && credencialesObtenidas.id === '0xxx1') {
    mostrarPrivado(credencialesObtenidas.nombre);
  }
});

$formLogueo.addEventListener('submit', (e) => {
  e.preventDefault();
  const credenciales = {
    id: '0xxx1',
    nombre: $formLogueo.nombre.value,
    correo: $formLogueo.correo.value,
  };
  localStorage.setItem('credenciales', JSON.stringify(credenciales));
  mostrarPrivado(credenciales.nombre);
});

$borrar.addEventListener('click', () => {
  localStorage.removeItem('credenciales');
});

$borrarTodo.addEventListener('click', () => {
  localStorage.clear();
});

function mostrarPrivado(nombre) {
  const $publica = document.getElementById('publica');
  const $privada = document.getElementById('privada');

  $publica.classList.add('no-mostrar');
  $privada.classList.remove('no-mostrar');

  saludar(nombre);
}

function saludar(nombre) {
  const $p = document.querySelector('p');
  $p.textContent = `Hola, ${nombre}!`;
}

localStorage.setItem('llave', 'valor');
localStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
);
