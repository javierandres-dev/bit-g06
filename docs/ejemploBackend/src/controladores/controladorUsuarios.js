import bcrypt from 'bcryptjs';
import ModeloUsuario from '../modelos/modeloUsuario.js';

const ControladorUsuarios = {
  crearUsuario: async (solicitud, respuesta) => {
    try {
      console.log(solicitud.body);
      const { nombre, nombreUsuario, contrasenia } = solicitud.body;
      const hashContrasenia = await bcrypt.hash(contrasenia, 10);
      const nuevoUsuario = new ModeloUsuario({
        nombre,
        nombreUsuario,
        contrasenia: hashContrasenia,
      });
      const usuarioCreado = await nuevoUsuario.save();
      if (usuarioCreado._id) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'usuario creado',
          datos: usuarioCreado._id,
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
  leerUsuarios: async (solicitud, respuesta) => {
    try {
      const todosLosUsuarios = await ModeloUsuario.find();
      const usuarios = todosLosUsuarios.filter((usuario) => usuario._id);
      respuesta.json({
        resultado: 'bien',
        mensaje: 'todos los usuarios',
        datos: usuarios,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  leerUsuario: async (solicitud, respuesta) => {
    try {
      const usuario = await ModeloUsuario.findById(solicitud.params.id);
      respuesta.json({
        resultado: 'bien',
        mensaje: 'usuario leido',
        datos: usuario,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  actualizarUsuario: async (solicitud, respuesta) => {
    try {
      const actualizado = await ModeloUsuario.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'usuario actualizado',
        datos: actualizado._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  eliminarUsuario: async (solicitud, respuesta) => {
    try {
      const eliminado = await ModeloUsuario.findByIdAndDelete(
        solicitud.params.id
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'usuario eliminado',
        datos: eliminado._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
};

export default ControladorUsuarios;
