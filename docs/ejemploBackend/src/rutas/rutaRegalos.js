import { Router } from 'express';
import ControladorRegalos from '../controladores/controladorRegalos.js';

const enrutadorRegalos = Router();

enrutadorRegalos.post('/', ControladorRegalos.crearRegalo);
enrutadorRegalos.get('/', ControladorRegalos.leerRegalos);
enrutadorRegalos.get('/:id', ControladorRegalos.leerRegalo);
enrutadorRegalos.put('/:id', ControladorRegalos.actualizarRegalo);
enrutadorRegalos.delete('/:id', ControladorRegalos.eliminarRegalo);

export default enrutadorRegalos;
