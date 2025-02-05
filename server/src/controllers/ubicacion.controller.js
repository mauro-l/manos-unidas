import Ubicacion from '../models/ubicacion.model.js';

// Crear una nueva ubicación
export const createUbicacion = async (req, res) => {
    try {
        const newUbicacion = new Ubicacion(req.body);
        await newUbicacion.save();
        res.status(201).json(newUbicacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las ubicaciones
export const getUbicaciones = async (req, res) => {
    try {
        const ubicaciones = await Ubicacion.find();
        res.status(200).json(ubicaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una ubicación por ID
export const getUbicacionById = async (req, res) => {
    try {
        const ubicacion = await Ubicacion.findById(req.params.id);
        if (!ubicacion) return res.status(404).json({ message: 'Ubicación no encontrada' });
        res.status(200).json(ubicacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una ubicación por ID
export const updateUbicacion = async (req, res) => {
    try {
        const updatedUbicacion = await Ubicacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUbicacion) return res.status(404).json({ message: 'Ubicación no encontrada' });
        res.status(200).json(updatedUbicacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una ubicación por ID
export const deleteUbicacion = async (req, res) => {
    try {
        const deletedUbicacion = await Ubicacion.findByIdAndDelete(req.params.id);
        if (!deletedUbicacion) return res.status(404).json({ message: 'Ubicación no encontrada' });
        res.status(200).json({ message: 'Ubicación eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
