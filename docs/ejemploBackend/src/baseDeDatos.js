import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGOBD_ATLAS_URI)
  .then((dato) => console.info('Conectado a la base de datos.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos.'));
