import mongoose from 'mongoose';

const actividadSchema = new mongoose.Schema({
    actividad_id: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    cupo_disponible: { type: Boolean, required: true },
    fundacion_id: { type: String, required: true },
    categoria_id: { type: String, required: false },
    tareas: { type: [String], required: false },
    categoria: { type: String, required: false },
    habilidades: { type: [String], required: false },
    perfil_buscado: { type: String, required: false }
});

export default mongoose.model("Actividad", actividadSchema);