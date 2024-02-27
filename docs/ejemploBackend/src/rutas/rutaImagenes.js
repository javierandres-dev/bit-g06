import { Router } from 'express';
import ControladorImagenes from '../controladores/controladorImagenes.js';

const enrutadorImagenes = Router();

enrutadorImagenes.post('/', ControladorImagenes.cargarImagen);

export default enrutadorImagenes;
