import ModeloRegalo from '../modelos/modeloRegalo.js';

// CRUD: Create, Read, Update, Delete => Crear, Leer, Actualizar, Eliminar
const ControladorRegalos = {
  crearRegalo: async (solicitud, respuesta) => {
    try {
      const nuevoRegalo = new ModeloRegalo(solicitud.body);
      const regaloCreado = await nuevoRegalo.save();
      if (regaloCreado._id) {
        respuesta.json({ mensaje: 'regalo creado' });
      }
    } catch (error) {
      respuesta.json({ mensaje: 'Ocurrió un error' });
    }
  },
  leerRegalos: async (solicitud, respuesta) => {
    try {
      const todosLosRegalos = await ModeloRegalo.find();
      respuesta.json({ mensaje: 'todos los regalos', todosLosRegalos });
    } catch (error) {
      respuesta.json({ mensaje: 'Ocurrió un error' });
    }
  },
  leerRegalo: async (solicitud, respuesta) => {
    try {
      const regalo = await ModeloRegalo.findById(solicitud.params.id);
      respuesta.json({ mensaje: 'regalo', regalo });
    } catch (error) {
      respuesta.json({ mensaje: 'Ocurrió un error' });
    }
  },
  actualizarRegalo: (solicitud, respuesta) => {
    respuesta.json({ mensaje: 'Hola desde PUT regalos' });
  },
  eliminarRegalo: async (solicitud, respuesta) => {
    try {
      const eliminado = await ModeloRegalo.findByIdAndDelete(
        solicitud.params.id
      );
      respuesta.json({ mensaje: 'Regalo eliminado' });
    } catch (error) {
      respuesta.json({ mensaje: 'Ocurrió un error' });
    }
  },
};

export default ControladorRegalos;
