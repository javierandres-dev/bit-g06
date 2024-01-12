"use strict";
// primitivo o simple
// implícito
let miString1 = 'hola';
let miNumber1 = 10;
let miBoolean1 = true;
/* console.log(miString1);
console.log(miNumber1);
console.log(miBoolean1); */
// explícito
let miString;
let miNumber;
let miBoolean;
miString = 'hello';
miNumber = 20;
miBoolean = false;
/* console.log(miString);
console.log(miNumber);
console.log(miBoolean); */
// unión de tipos
let miId;
miId = 'abc';
miId = 123;
miId = 'pepita' + 1234;
/* console.log(miId); */
// especiales
let miNull = null;
/* console.log(miNull); */
let miUndefined = undefined;
/* console.log(miUndefined); */
let miUnknown;
miUnknown = 100;
miUnknown = 'abc';
miUnknown = true;
/* console.log(miUnknown); */
let miAny;
miAny = 'hola';
miAny = 1;
miAny = false;
/* console.log(miAny); */
// arreglos
let arrNumber1 = [1, 2, 3];
let arrNumber2 = [1, 2, 3];
let arrString1 = ['a', 'b', 'c'];
let arrString2 = ['a', 'b', 'c'];
let arrAny = [1, 'a', true];
/* console.log(arrNumber1);
console.log(arrNumber2);
console.log(arrString1);
console.log(arrString2);
console.log(arrAny); */
// inferencia
let arr = [1, 'a', true, [], {}, function name() { }];
/* console.log(arr); */
// tuplas
let miTupla;
miTupla = [true, 'abc', 100];
/* console.log(miTupla); */
// objetos
let objeto1;
objeto1 = {};
objeto1 = {
    nombre: 'pepita',
    nombreUsuario: 'pepa',
    contrasenia: 'asd',
};
let objeto2 = {
    nombre: 'pepito',
    hijos: 2,
    activo: true,
};
let objeto3 = {};
objeto3.nombre = 'lionel';
objeto3.apellido = 'Messi';
/* console.log(objeto1);
console.log(objeto2);
console.log(objeto3); */
// enums
var CodigosPermisos;
(function (CodigosPermisos) {
    CodigosPermisos[CodigosPermisos["Administrador"] = 0] = "Administrador";
    CodigosPermisos[CodigosPermisos["Vendedor"] = 1] = "Vendedor";
    CodigosPermisos[CodigosPermisos["Supervisor"] = 2] = "Supervisor";
})(CodigosPermisos || (CodigosPermisos = {}));
let nombreEmpleado = 'fulinato';
let nombreEmpleados = ['hugo', 'paco', 'luis'];
let miEmpleado;
miEmpleado = {
    nombre: nombreEmpleado,
    hijos: 3,
    activo: false,
};
let miEstudiante;
miEstudiante = {
    id: 1,
    nombre: 'lionel',
    apellido: 'messi',
    curso: 'a1',
    activo: true,
};
/* console.log(miEstudiante); */
// casteo
let miVariable = 'works';
/* console.log(miVariable);
console.log(miVariable.length);
console.log((miVariable as string).length);
console.log((<string>miVariable).length); */
// funciones
let retornado;
const fn1 = () => {
    console.log('soy fn1');
};
/* retornado = fn1(); */
const fn2 = () => {
    console.log('soy fn2');
};
/* retornado = fn2(); */
const fn3 = (nombre) => 'Hola, ' + nombre + '!👋';
retornado = fn3('Pepita');
function multiplicarDosNum(num1, num2) {
    return num1 * num2;
}
retornado = multiplicarDosNum(2, 4);
function porDos(num1) {
    return num1 * 2;
}
retornado = porDos(2);
function sumaDosNum(num1, num2) {
    let n1, n2;
    if (typeof num1 === 'string') {
        n1 = parseInt(num1);
    }
    else {
        n1 = num1;
    }
    if (typeof num2 === 'string') {
        n2 = parseInt(num2);
    }
    else {
        n2 = num2;
    }
    return n1 + n2;
}
retornado = sumaDosNum(2, 4);
retornado = sumaDosNum('4', '2');
retornado = sumaDosNum('a', 'b');
/* console.log(typeof retornado); */
const saludar = (nombre) => nombre ? `Hola, ${nombre}!👋` : `Hola, desconocido!👋`;
retornado = saludar('pepita');
retornado = saludar();
function saludo(texto = 'hello') {
    return texto;
}
retornado = saludo('hola');
retornado = saludo();
/* console.log(retornado); */
