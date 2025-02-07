import mongoose from "mongoose";
//import Ubicacion from './ubicacion.model';

const actividadSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha_inicio: { type: Date, required: true },
  fecha_fin: { type: Date, required: true },
  fecha_limite: { type: Date, required: true },
  ubicacion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ubicacion",
    required: true,
  },
  cupo_maximo: { type: Number, required: true },
  voluntarios_inscriptos: { type: Number, default: 0 },
  cupo_disponible: { type: Boolean, required: true },
  fundacion_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Fundacion",
    required: true,
  }, // Referencia a Fundacion
  categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" }, // Referencia a Categoria
  tareas: { type: [String], required: false }, // referencia a tareas list obje|
  habilidades: { type: [String], required: false },
  perfil_buscado: { type: String, required: false },
  disponibilidad: { type: String, required: false },
  imagen: { type: String },
});
const Actividad =
  mongoose.models.Actividad || mongoose.model("Actividad", actividadSchema);

export default Actividad;

