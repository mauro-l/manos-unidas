import mongoose from 'mongoose';

const mensajeSchema = new mongoose.Schema({
    remitente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Voluntario', required: true },
    destinatario_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Voluntario', required: true },
    mensaje: { type: String, required: true },
    fecha_mensaje: { type: Date, required: true },
    estado: { type: String, required: true, default: 'pendiente', enum: ['pendiente', 'enviado', 'leido'] },
});

const Mensaje = mongoose.model('Mensaje', mensajeSchema);

export default Mensaje;