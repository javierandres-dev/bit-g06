import ModeloRegalo from '../modelos/modeloRegalo.js';

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
        datos: error,
      });
    }
  },
  leerRegalos: async (solicitud, respuesta) => {
    try {
      const todosLosRegalos = await ModeloRegalo.find();
      const regalos = [];
      for (let i = 0; i < todosLosRegalos.length; i++) {
        const objeto = {
          id: todosLosRegalos[i]._id,
          destinatario: todosLosRegalos[i].destinatario,
        };
        regalos.push(objeto);
      }
      respuesta.json({
        resultado: 'bien',
        mensaje: 'todos los regalos',
        datos: regalos,
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
      });
    }
  },
  leerRegalo: async (solicitud, respuesta) => {
    try {
      const regalo = await ModeloRegalo.findById(solicitud.params.id);
      respuesta.json({
        resultado: 'bien',
        mensaje: 'regalo leido',
        datos: {
          id: regalo._id,
          destinatario: regalo.destinatario,
          nombre: regalo.nombre,
          entregado: regalo.entregado,
        },
      });
    } catch (error) {
      respuesta.json({
        resultado: 'mal',
        mensaje: 'ocurrió un error',
        datos: error,
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
        datos: error,
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
        datos: error,
      });
    }
  },
};

export default ControladorRegalos;
