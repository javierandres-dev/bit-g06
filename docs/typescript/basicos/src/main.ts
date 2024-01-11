// primitivo o simple
// implícito, inferir
let miString1 = 'hola';
console.log(miString1);
let miNumber1 = 10;
console.log(miNumber1);
let miBoolean1 = true;
console.log(miBoolean1);

// explícito
let miString2: string;
let miNumber2: number;
let miBoolean2: boolean;
miString2 = 'hello';
miNumber2 = 20;
miBoolean2 = false;
console.log(miString2);
console.log(miNumber2);
console.log(miBoolean2);

// unión de tipos
let miId: string | number;
miId = 'abc';
miId = 123;
miId = 'darly' + 2086;
console.log(miId);
