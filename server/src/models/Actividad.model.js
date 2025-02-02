import mongoose from 'mongoose';
import Fundacion from './fundacion.model.js';
import Categoria from './categoria.model.js';

const actividadSchema = new mongoose.Schema({
    actividad_id: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha_inicio: { type: Date, required: true },
    fecha_fin: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    cupo_disponible: { type: Boolean, required: true },
    fundacion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Fundacion', required: true }, // Referencia a Fundacion
    categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' }, // Referencia a Categoria
    tareas: { type: [String], required: false },
    categoria: { type: String, required: false },
    habilidades: { type: [String], required: false },
    perfil_buscado: { type: String, required: false }
});
//const Fundacion = mongoose.model("Fundacion", FundacionSchema);
//const categoria = mongoose.model('categoria', categoriaSchema);
const Actividad = mongoose.model("actividad", actividadSchema);
export default Actividad;