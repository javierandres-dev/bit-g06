import express from 'express';
import enrutadorRegalos from './rutas/regalos.js';

const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

servidor.use('/regalos/', enrutadorRegalos);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde la raíz.' });
});

export default servidor;
