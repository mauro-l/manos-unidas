import Mensaje from '../models/mensaje.model.js';

export const getAllMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.find();
        res.status(200).json(mensajes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getMensajeById = async (req, res) => {
    try {
        const mensaje = await Mensaje.findById(req.params.id);
        if (!mensaje) {
            return res.status(404).json({ message: 'Mensaje no encontrado' });
        }
        res.status(200).json(mensaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createMensaje = async (req, res) => {
    const { remitente_id, destinatario_id, mensaje } = req.body;
    try {
        const newMensaje = new Mensaje({
            remitente_id,
            destinatario_id,
            mensaje,
            fecha_mensaje: new Date(),
        });
        await newMensaje.save();
        res.status(201).json(newMensaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const updateMensaje = async (req, res) => {
    try {
        const updatedMensaje = await Mensaje.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMensaje) {
            return res.status(404).json({ message: 'Mensaje no encontrado' });
        }
        res.status(200).json(updatedMensaje);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteMensaje = async (req, res) => {
    try {
        const deletedMensaje = await Mensaje.findByIdAndDelete(req.params.id);
        if (!deletedMensaje) {
            return res.status(404).json({ message: 'Mensaje no encontrado' });
        }
        res.status(200).json({ message: 'Mensaje eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};