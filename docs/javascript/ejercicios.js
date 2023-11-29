'use strict';
// 1. Preguntar nombre al usuario y saludarlo por su nombre.
/*
function saludarUsuario(nombre) {
  document.write(`Hola, ${nombre}`);
}
saludarUsuario(prompt('Por favor ingrese su nombre:'));
*/

/* 2. Preguntar nombre al usuario y saludarlo por su nombre.
Si el usuario no escribe su nombre saludar: "Hola, desconocido."
*/
/*
const nombre = prompt('Por favor ingrese su nombre:');
if (nombre) {
  document.write('hola, ' + nombre);
} else {
  document.write('hola, desconocido.');
}
*/

// 3. Leer nombre y apellido, saludar por nombre y apellido.
// 4. Pregunte al usuario si desea continuar, responder con hola o adiós.
// 5. Leer nombre y edad, Mostrar si es o no mayor de edad.
// 6. Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.
/*
function accesoXrol(rol) {
  switch (rol) {
    case 'admin':
      return 'Acceso a la zona de administradores.';
    case 'ventas':
      return 'Acceso a la zona de vendedores.';
    case 'cliente':
      return 'Acceso a la zona de clientes.';
    default:
      return 'Acceso no autorizado.';
  }
}
const retornado = accesoXrol(prompt('Por favor escriba un rol:'));
document.write(retornado);
*/

// 7. Leer un número, mostrar el doble de n.
// 8. Leer un número, mostrar la mitad de n.
// 9. Leer un número, mostrar si es positivo, negativo o cero.
// 10. Leer un número, mostrar si es par o impar.
// 11. Leer dos números, mostrar el mayor.
// 12. Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).
// 13. Leer dos números, mostrar la suma dividido en la resta.
// 14. Pedir un número y mostrar los números pares desde 1 hasta n.
// 15. Pedir un número, mostrar la suma total desde 1 hasta n.
// 16. Pedir un número, mostrar la suma de los números pares desde 1 hasta n.
// 17. Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
// 18. Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
// 19. Pedir un número, mostrar los números desde n hasta 0.
// 20. Pedir un número, mostrar los números desde 0 hasta n.
// 21. Pedir un número, mostrar su tabla de multiplicar desde 0 hasta 10.
// 22. Adivinar el número, leer un número y decir si adivinó el número
/*
const adivinaNumero = () => {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  console.log(numeroAleatorio);
  let numeroUsuario = null;
  const maximoIntentos = 3;
  let contadorIntentos = 0;
  do {
    contadorIntentos++;
    if (contadorIntentos > maximoIntentos) return;
    numeroUsuario = prompt('Por favor ingrese un número entre 1 y 10:');
    if (numeroUsuario > numeroAleatorio) {
      alert('El número ingresado es mayor');
    } else if (numeroUsuario < numeroAleatorio) {
      alert('El número ingresado es menor');
    } else {
      alert('¡Adivinaste el número!');
    }
  } while (numeroUsuario != numeroAleatorio);
};

adivinaNumero();
*/
