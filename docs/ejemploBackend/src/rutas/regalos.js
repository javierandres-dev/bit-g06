import { Router } from 'express';

const enrutador = Router();

enrutador.get('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde GET regalos' });
});
enrutador.post('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde POST regalos' });
});
enrutador.put('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde PUT regalos' });
});
enrutador.delete('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'Hola desde DELETE regalos' });
});

export default enrutador;
