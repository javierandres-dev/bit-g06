// primitivo o simple
// implícito
let miString1 = 'hola';
let miNumber1 = 10;
let miBoolean1 = true;
/* console.log(miString1);
console.log(miNumber1);
console.log(miBoolean1); */

// explícito
let miString: string;
let miNumber: number;
let miBoolean: boolean;
miString = 'hello';
miNumber = 20;
miBoolean = false;
/* console.log(miString);
console.log(miNumber);
console.log(miBoolean); */

// unión de tipos
let miId: string | number;
miId = 'abc';
miId = 123;
miId = 'pepita' + 1234;
/* console.log(miId); */

// especiales
let miNull: null = null;
/* console.log(miNull); */

let miUndefined: undefined = undefined;
/* console.log(miUndefined); */

let miUnknown: unknown;
miUnknown = 100;
miUnknown = 'abc';
miUnknown = true;
/* console.log(miUnknown); */

let miAny: any;
miAny = 'hola';
miAny = 1;
miAny = false;
/* console.log(miAny); */

// arreglos
let arrNumber1: Array<number> = [1, 2, 3];
let arrNumber2: number[] = [1, 2, 3];
let arrString1: Array<string> = ['a', 'b', 'c'];
let arrString2: string[] = ['a', 'b', 'c'];
let arrAny: any[] = [1, 'a', true];
/* console.log(arrNumber1);
console.log(arrNumber2);
console.log(arrString1);
console.log(arrString2);
console.log(arrAny); */

// inferencia
let arr = [1, 'a', true, [], {}, function name() {}];
/* console.log(arr); */

// tuplas
let miTupla: [boolean, string, number];
miTupla = [true, 'abc', 100];
/* console.log(miTupla); */

// objetos
let objeto1: object;
objeto1 = {};
objeto1 = {
  nombre: 'pepita',
  nombreUsuario: 'pepa',
  contrasenia: 'asd',
};
let objeto2: {
  nombre: string;
  hijos: number;
  activo: boolean;
  casado?: boolean;
} = {
  nombre: 'pepito',
  hijos: 2,
  activo: true,
};
let objeto3: { [prop: string]: string } = {};
objeto3.nombre = 'lionel';
objeto3.apellido = 'Messi';
/* console.log(objeto1);
console.log(objeto2);
console.log(objeto3); */

// enums
enum CodigosPermisos {
  Administrador,
  Vendedor,
  Supervisor,
}
/* console.log(CodigosPermisos.Administrador);
console.log(CodigosPermisos.Vendedor);
console.log(CodigosPermisos.Supervisor); */

// Alias
type NombreEmpleado = string;
type HijosEmpleado = number;
type EstadoEmpleado = boolean;
let nombreEmpleado: NombreEmpleado = 'fulinato';
let nombreEmpleados: NombreEmpleado[] = ['hugo', 'paco', 'luis'];
type Empleado = {
  nombre: NombreEmpleado;
  hijos: HijosEmpleado;
  activo: EstadoEmpleado;
};
let miEmpleado: Empleado;
miEmpleado = {
  nombre: nombreEmpleado,
  hijos: 3,
  activo: false,
};
/* console.log(miEmpleado); */

// interfaces
interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  curso: string;
  activo: boolean;
}
let miEstudiante: Estudiante;
miEstudiante = {
  id: 1,
  nombre: 'lionel',
  apellido: 'messi',
  curso: 'a1',
  activo: true,
};
/* console.log(miEstudiante); */

// casteo
let miVariable: unknown = 'works';
/* console.log(miVariable);
console.log(miVariable.length);
console.log((miVariable as string).length);
console.log((<string>miVariable).length); */

// funciones
let retornado: any;
const fn1 = () => {
  console.log('soy fn1');
};
/* retornado = fn1(); */
const fn2 = (): void => {
  console.log('soy fn2');
};
/* retornado = fn2(); */
const fn3 = (nombre: string): string => 'Hola, ' + nombre + '!👋';
retornado = fn3('Pepita');
function multiplicarDosNum(num1: number, num2: number): number {
  return num1 * num2;
}
retornado = multiplicarDosNum(2, 4);
function porDos(num1: number): number {
  return num1 * 2;
}
retornado = porDos(2);
function sumaDosNum(num1: number | string, num2: number | string): number {
  let n1: number, n2: number;
  if (typeof num1 === 'string') {
    n1 = parseInt(num1);
  } else {
    n1 = num1;
  }
  if (typeof num2 === 'string') {
    n2 = parseInt(num2);
  } else {
    n2 = num2;
  }
  return n1 + n2;
}
retornado = sumaDosNum(2, 4);
retornado = sumaDosNum('4', '2');
retornado = sumaDosNum('a', 'b');
/* console.log(typeof retornado); */
const saludar = (nombre?: string): string =>
  nombre ? `Hola, ${nombre}!👋` : `Hola, desconocido!👋`;
retornado = saludar('pepita');
retornado = saludar();
function saludo(texto: string = 'hello'): string {
  return texto;
}
retornado = saludo('hola');
retornado = saludo();
/* console.log(retornado); */
