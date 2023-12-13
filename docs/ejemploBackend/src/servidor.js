import express from 'express';

const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ message: 'WORKS!' });
});

export default servidor;
