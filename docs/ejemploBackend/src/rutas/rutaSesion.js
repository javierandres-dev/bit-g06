import { Router } from 'express';
import ControladorSesion from '../controladores/controladorSesion.js';

const enrutadorSesion = Router();

enrutadorSesion.post('/', ControladorSesion.loguearUsuario);

export default enrutadorSesion;
