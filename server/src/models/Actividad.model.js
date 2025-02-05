import mongoose from 'mongoose';
//import Ubicacion from './ubicacion.model';

const actividadSchema = new mongoose.Schema({
    actividad_id: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    fecha_limite: { type: Date, required: true },
    ubicacion: { type: [String], required: false, },
    cupo_maximo: { type: Number, required: true },
    cupo_disponible: { type: Boolean, required: true },
    fundacion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fundacion', required: true }, // Referencia a Fundacion
    categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }, // Referencia a Categoria
    tareas: { type: [String], required: false },// referencia a tareas list obje|
    habilidades: { type: [String], required: false },
    perfil_buscado: { type: String, required: false },
    disponibilidad: { type: String, required: false },
    // imagen: { type: Buffer }
});
const Actividad = mongoose.models.Actividad || mongoose.model("Actividad", actividadSchema);

export default Actividad;