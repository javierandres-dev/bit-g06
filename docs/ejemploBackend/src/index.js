import express from 'express';

const servidor = express();
const puerto = 4100;

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ message: 'WORKS!' });
});

servidor.listen(puerto, () => {
  console.log(`Servidor ejecutandose en el puerto: ${puerto}`);
});
