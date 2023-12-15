import ModeloRegalo from '../modelos/modeloRegalo.js';

// CRUD: Create, Read, Update, Delete => Crear, Leer, Actualizar, Eliminar
const ControladorRegalos = {
  crearRegalo: async (solicitud, respuesta) => {
    try {
      const nuevoRegalo = new ModeloRegalo(solicitud.body);
      const regaloCreado = await nuevoRegalo.save();
      if (regaloCreado._id) {
        respuesta.json({
          resultado: 'bien',
          mensaje: 'regalo creado',
          datos: regaloCreado._id,
        });
      }
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: null,
      });
    }
  },
  leerRegalos: async (solicitud, respuesta) => {
    try {
      const todosLosRegalos = await ModeloRegalo.find();
      respuesta.json({
        resultado: 'bien',
        mensaje: 'todos los regalos',
        datos: todosLosRegalos,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: null,
      });
    }
  },
  leerRegalo: async (solicitud, respuesta) => {
    try {
      const regalo = await ModeloRegalo.findById(solicitud.params.id);
      respuesta.json({
        resultado: 'bien',
        mensaje: 'regalo leido',
        datos: regalo._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: null,
      });
    }
  },
  actualizarRegalo: async (solicitud, respuesta) => {
    try {
      const actualizado = await ModeloRegalo.findByIdAndUpdate(
        solicitud.params.id,
        solicitud.body
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'regalo actualizado',
        datos: actualizado._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: null,
      });
    }
  },
  eliminarRegalo: async (solicitud, respuesta) => {
    try {
      const eliminado = await ModeloRegalo.findByIdAndDelete(
        solicitud.params.id
      );
      respuesta.json({
        resultado: 'bien',
        mensaje: 'regalo eliminado',
        datos: eliminado._id,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: null,
      });
    }
  },
};

export default ControladorRegalos;
