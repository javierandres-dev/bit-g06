import { Schema, model } from 'mongoose';

const esquemaRegalo = new Schema(
  {
    destinatario: { type: String, required: true },
    nombre: { type: String, required: true },
    entregado: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);

export default model('Regalo', esquemaRegalo);
