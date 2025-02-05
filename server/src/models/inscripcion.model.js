import mongoose from 'mongoose';

const inscripcionSchema = new mongoose.Schema({
    voluntario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Voluntario', required: true },
    actividad_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad', required: true },
    fecha_inscripcion: { type: Date, required: true },
    estado: { type: String, required: true, default: 'Pendiente', enum: ['Pendiente', 'Aprobada', 'Rechazada', 'Cancelado'] }
});

export default mongoose.model('Inscripcion', inscripcionSchema);