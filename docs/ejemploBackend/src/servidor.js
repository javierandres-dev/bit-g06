import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import enrutadorRegalos from './rutas/rutaRegalos.js';
import enrutadorSesion from './rutas/rutaSesion.js';
import enrutadorUsuarios from './rutas/rutaUsuarios.js';
import enrutadorImagenes from './rutas/rutaImagenes.js';

const servidor = express();
const puerto = process.env.PUERTO;

servidor.set('port', puerto);

servidor.use(cors());
servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use('/regalos/', enrutadorRegalos);
servidor.use('/sesion/', enrutadorSesion);
servidor.use('/usuarios/', enrutadorUsuarios);
servidor.use('/imagenes/', enrutadorImagenes);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde la raíz.' });
});

export default servidor;
