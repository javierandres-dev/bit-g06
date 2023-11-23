'use strict';
const $body = document.body;
const $h1 = document.createElement('h1');
const $img = document.createElement('img');
const $button = document.createElement('button');

let contador = 0;
let elDoble = null;

$body.style.backgroundColor = 'grey';
$body.style.color = 'white';

$h1.textContent = 'Ejemplo DOM';

$img.setAttribute('src', './img/apagado.png');

$button.innerText = 'Encender / Apagar';

$body.appendChild($h1);
$body.appendChild($img);
$body.appendChild($button);

$button.addEventListener('click', function () {
  contador++;
  elDoble = contador * 2;
  let nombreImagen = $img.getAttribute('src');

  nombreImagen === './img/apagado.png'
    ? (nombreImagen = './img/encendido.png')
    : (nombreImagen = './img/apagado.png');

  $img.setAttribute('src', nombreImagen);

  if (contador === 1) {
    $h1.textContent = '¡Funciona!';
  }
  if (contador === 5) {
    $h1.textContent = '¡Super!';
  }
  if (contador > 5) {
    const contenidoHtml = `Clicks <strong>${contador}</strong> x 2 = ${elDoble}`;
    if (contador === 6) {
      const $p = document.createElement('p');
      $p.innerHTML = contenidoHtml;
      $body.appendChild($p);
    } else {
      const $p = document.querySelector('p');
      $p.innerHTML = contenidoHtml;
    }
  }
});
