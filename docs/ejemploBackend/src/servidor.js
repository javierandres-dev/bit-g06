import express from 'express';
import enrutadorRegalos from './rutas/rutaRegalos.js';

const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

servidor.use(express.json());
servidor.use('/regalos/', enrutadorRegalos);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde la raíz.' });
});

export default servidor;
