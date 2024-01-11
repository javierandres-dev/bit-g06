import { Router } from 'express';
import ControladorUsuarios from '../controladores/controladorUsuarios.js';

const enrutadorUsuarios = Router();

enrutadorUsuarios.post('/', ControladorUsuarios.crearUsuario);
enrutadorUsuarios.get('/', ControladorUsuarios.leerUsuarios);
enrutadorUsuarios.get('/:id', ControladorUsuarios.leerUsuario);
enrutadorUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario);
enrutadorUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario);

export default enrutadorUsuarios;
