import { Schema, model } from 'mongoose';

const esquemaImagen = new Schema(
  {
    nombre: { type: String, required: false },
    imagen: { data: Buffer, contentType: String },
  },
  { versionKey: false, timestamps: true }
);

export default model('Imagen', esquemaImagen);
