import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://bit06userxXx:NucS3zq408uO0upJxXx@bit-cluster.2njakta.mongodb.net/?retryWrites=true&w=majority'
  )
  .then((dato) => console.log('Camino feliz, conectado a la base de datos.'))
  .catch((error) =>
    console.log('Camino triste, no se pudo conectar a la base de datos.')
  );
