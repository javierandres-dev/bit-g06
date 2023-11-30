'use strict';
const objetoJs = {
  message: 'Powered by random-d.uk',
  url: 'https://random-d.uk/api/171.jpg',
};
/*
console.log(objetoJs);
console.log(typeof objetoJs);
console.log(objetoJs instanceof Object);
console.log(objetoJs.message);
console.log(objetoJs['url']);
*/
const stringJson = `{
    "message": "Powered by random-d.uk",
    "url": "https://random-d.uk/api/171.jpg"
}`;
/*
console.log(stringJson);
console.log(typeof stringJson);
console.log(stringJson instanceof Object);
console.log(stringJson.message);
console.log(stringJson['url']);
*/
const stringJsonObjeto = `{
  "name": "pepita",
  "peso": 60,
  "altura": 1.70,
  "pasatiempos": ["bailar", "leer"],
  "contacto": {
    "celular": "555",
    "direccion": "calle 0 cra 1"
  },
  "habilitado": true,
  "perfil": null
}`;
/*
console.log(stringJsonObjeto);
console.log(typeof stringJsonObjeto);
*/
const stringJsonArreglo = `["cadenas de texto", 60, 1.70, true, null, [], {}]`;
/*
console.log(stringJsonArreglo);
console.log(typeof stringJsonArreglo);
*/
const stringJsonArregloDeObjetos = `[
  {
    "nombre": "pepita",
    "correo": "pepita@ejemplo.com"
  },
  {
    "nombre": "pepito",
    "correo": "pepito@ejemplo.com"
  }
]`;
/*
console.log(stringJsonArregloDeObjetos);
console.log(typeof stringJsonArregloDeObjetos);
*/
const stringJSON = `{
    "nombre": "pepita",
    "correo": "pepita@ejemplo.com"
  }`;
/*
console.log(stringJSON);
console.log(typeof stringJSON);

const deserealizado = JSON.parse(stringJSON);
console.log(deserealizado);
console.log(typeof deserealizado);
console.log(deserealizado.nombre);
console.log(deserealizado['correo']);
*/
const objetoJAVASCRIPT = {
  nombre: 'pepito',
  correo: 'pepito@ejemplo.com',
};
/*
console.log(objetoJAVASCRIPT);
console.log(typeof objetoJAVASCRIPT);
console.log(objetoJAVASCRIPT.nombre);
console.log(objetoJAVASCRIPT['correo']);

const serealizado = JSON.stringify(objetoJAVASCRIPT);
console.log(serealizado);
console.log(typeof serealizado);
*/
