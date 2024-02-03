import bcrypt from 'bcryptjs';
import ModeloUsuario from '../modelos/modeloUsuario.js';
import { generarToken } from '../helpers/funciones.js';

const ControladorSesion = {
  loguearUsuario: async (solicitud, respuesta) => {
    try {
      const { nombreUsuario, contrasenia } = solicitud.body;
      const usuarioEncontrado = await ModeloUsuario.findOne({ nombreUsuario });
      if (usuarioEncontrado) {
        const contraseniaValida = await bcrypt.compare(
          contrasenia,
          usuarioEncontrado.contrasenia
        );
        if (contraseniaValida) {
          const token = await generarToken({
            id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
          });
          respuesta.json({
            resultado: 'bien',
            mensaje: 'token',
            datos: token,
          });
        } else {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'Credenciales incorrectas',
            datos: null,
          });
        }
      } else {
        respuesta.json({
          resultado: 'mal',
          mensaje: 'Credenciales incorrectas',
          datos: null,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
};

export default ControladorSesion;
