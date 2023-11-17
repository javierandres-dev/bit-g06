// Esto es un comentario JS de una línea
/*
  Esto es un comentario
  JS
  multi-línea
*/
//alert('Hola, desde archivo externo.');
//console.log('Hola, desde archivo externo.');

/* VARIABLES */
/*
manera1 = 1;
var manera2 = 2;
let manera3 = 3;
const manera4 = 4;
console.log(manera1);
console.log(manera2);
console.log(manera3);
console.log(manera4);
manera1 = 10;
console.log(manera1);
manera2 = 20;
console.log(manera2);
manera3 = 30;
console.log(manera3);
manera4 = 40;
console.log(manera4);
*/

/* Ámbito de las variables */
// ámbito global
/*
const nombre = 'pepita';
{
  // contenido del bloque
  // ámbito local
  console.log(nombre);
  const apellido = 'pérez';
  let sobrenombre = 'pepa';
  console.log(sobrenombre);
}
console.log(apellido);
*/

/* Modo estricto */
'use strict';
/*
nombre = 'pepita';
console.log(nombre);
*/

/* Tipos de dato primitivos */
/*
let miVariable = 'pepita'; // string
miVariable = 1; // number
miVariable = true; // boolean
miVariable = null; // null (bug)
miVariable = undefined; // undefined
console.log(miVariable);
console.log(typeof miVariable);
*/

/* Conversión de tipos */
/*
let miVariable = 1;
console.log(miVariable);
console.log(typeof miVariable);
miVariable = miVariable.toString();
console.log(miVariable);
console.log(typeof miVariable);
miVariable = Number(miVariable);
console.log(miVariable);
console.log(typeof miVariable);
*/

/* Truthy and Falsy */
// verdadero
/*
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean('a'));
*/
// false
/*
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
*/

/* Métodos de interacción */
/*
// entrada
const nombre = prompt('Escriba su nombre:');
const siOno = confirm('¿Acepta continuar?');
// salida
console.log(nombre);
console.log(typeof nombre);
console.log(siOno);
console.log(typeof siOno);
document.write(nombre);
alert(siOno);
*/
