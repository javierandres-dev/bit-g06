import multer from 'multer';
import ModeloImagen from '../modelos/modeloImagenes.js';

const ControladorImagenes = {
  cargarImagen: async (solicitud, respuesta) => {
    try {
      const storage = multer.diskStorage({
        destination: 'imagenes',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      });
      const carga = multer({ storage: storage }).single('archivo_subido');
      carga(solicitud, respuesta, async (error) => {
        if (error) {
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al cargar la imagen',
            datos: error,
          });
        } else {
          const nuevaImagen = new ModeloImagen({
            nombre: solicitud.body.nombre,
            imagen: {
              data: solicitud.file.filename,
              contentType: 'image/png',
            },
          });
          const resp = await nuevaImagen.save();
          respuesta.json({
            resultado: 'bien',
            mensaje: 'imagen cargada',
            datos: resp,
          });
        }
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

export default ControladorImagenes;
