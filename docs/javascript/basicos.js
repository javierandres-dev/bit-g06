'use strict';
// Operadores
let miVariable = null;

// Op. Aritméticos
/*
console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(2 ** 3);
miVariable = 3;
console.log(miVariable);
miVariable++;
console.log(miVariable);
miVariable--;
console.log(miVariable);
*/

// Op. Asignación
/*
const ocho = 8;
const cuatro = 4;
let resultado = ocho + cuatro;
resultado += 3;
resultado -= 5;
resultado *= 2;
resultado /= 2;
resultado %= 3;
resultado **= 2;
console.log(resultado);
*/

// Op. Comparación
/*
console.log(8 == 4);
console.log(8 === 4);
console.log(8 == '8');
console.log(8 === '8');
console.log('Hola' == 'hola');
console.log('hola' === 'hello');
console.log(8 != 4);
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4);
*/

// Op. Lógicos
/*
console.log(true && true);
console.log(true && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false);
*/

// Op. Concatenación
/*
console.log('Pepita' + ' ' + 'Pérez');
const numero1 = 10;
const numero2 = '10';
console.log(numero1 + numero2);
console.log(numero1 + Number(numero2));
*/

// Precedencia de operadores
// PEMDAS: Paréntesis Exponentes Multiplicación División Adición Sustracción
/*
const operacion = 12 / 3 + 2 * 3 - 1;
console.log(operacion);
*/

// Secuencia
/*
console.log('hola');
console.log('¿qué más?');
console.log('chaito');
*/

// Control de flujo
/*
console.log('buenos días');
console.log('buenas tardes');
console.log('buenas noches');
*/

// Estructuras de control
// Es.Co. Condicionales
/*
if (true) {
  console.log('Si, se cumplió la condición.');
}

if (true) {
  console.log('Si, se cumplió la condición.');
} else {
  console.log('No se cumplió la condición.');
}

const hora = 20;
if (hora > 0 && hora < 12) {
  console.log('buenos días');
} else if (hora >= 12 && hora < 18) {
  console.log('buenas tardes');
} else {
  console.log('buenas noches');
}
const perfil = 'xxx';

switch (perfil) {
  case 'administrador':
    console.log('dirigir a panel administrativo.');
    break;
    case 'cliente':
      console.log('dirigir a la tienda virtual.');
      break;
  case 'contabilidad':
    console.log('dirigir a finanzas.');
    break;
    default:
      console.log('Acceso no autorizado.');
      break;
    }

    console.log('continua la secuencia');
*/
// Ciclos
/*
for (let i = 0; i < 5; i++) {
  console.log('desde ciclo for, valor de i:', i);
}

let i = 0;
while (i < 5) {
  console.log('desde ciclo while, valor de i:', i);
  i++;
}

let j = 0;
do {
  console.log('desde ciclo do...while, valor de j:', j);
  j++;
} while (j < 5);
*/
// Funciones
// Fu. Declarada.
/*
function saludar() {
  console.log('hola');
}
saludar();
const retornado = saludar();
console.log(retornado);
*/
/*
function obtenerSaludo() {
  return 'quiubo';
}
const retornado = obtenerSaludo();
console.log(retornado);
*/
/*
function saludarUsuario(nombre = 'Desconocido', apellido = '') {
  //return 'Hola, ' + nombre + ' ' + apellido + ' "bienvenido"';
  //return 'Hola, ' + nombre + ' ' + apellido + " 'bienvenido'";
  // Interpolación
  return `Hola ${nombre} ${apellido} "bienvenido"`;
}
console.log(saludarUsuario('Pepita', 'Pérez'));
console.log(saludarUsuario('Pepito', 'López'));
console.log(saludarUsuario('Fulanito', 'De Tal'));
console.log(saludarUsuario());
*/
