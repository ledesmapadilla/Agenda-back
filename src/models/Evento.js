import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true, default: "" },
    fecha: { type: Date, required: true },
    seccion: {
      type: String,
      required: true,
      enum: ["lepa", "la-martina", "casa"],
    },
    completado: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Evento", eventoSchema);
