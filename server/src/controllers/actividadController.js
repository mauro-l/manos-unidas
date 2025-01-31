import Actividad from '../models/Actividad.model.js';

export const getAllActividades = async (req, res) => {
    try {
        const actividades = await Actividad.find();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createActividad = async (req, res) => {
    try {
        const actividad = new Actividad(req.body);
        const savedActividad = await actividad.save();
        res.status(201).json(savedActividad);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getActividadById = async (req, res) => {
    try {
        const actividad = await Actividad.findById(req.params.id);
        if (!actividad) return res.status(404).json({ message: 'Actividad no encontrada' });
        res.json(actividad);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateActividad = async (req, res) => {
    try {
        const updatedActividad = await Actividad.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedActividad) return res.status(404).json({ message: 'Actividad no encontrada' });
        res.json(updatedActividad);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteActividad = async (req, res) => {
    try {
        const deletedActividad = await Actividad.findByIdAndDelete(req.params.id);
        if (!deletedActividad) return res.status(404).json({ message: 'Actividad no encontrada' });
        res.json({ message: 'Actividad eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
