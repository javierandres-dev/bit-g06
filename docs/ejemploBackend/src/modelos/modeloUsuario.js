import { Schema, model } from 'mongoose';

const esquemaUsuario = new Schema(
  {
    nombre: { type: String, required: true },
    nombreUsuario: { type: String, required: true },
    contrasenia: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model('Usuario', esquemaUsuario);
