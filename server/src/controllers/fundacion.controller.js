import Fundacion from '../models/fundacion.model.js';

// Crear una nueva fundación
export const createFundacion = async (req, res) => {
    try {
        const newFundacion = new Fundacion(req.body);
        await newFundacion.save();
        res.status(201).json(newFundacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener todas las fundaciones
export const getFundaciones = async (req, res) => {
    try {
        const fundaciones = await Fundacion.find();
        res.status(200).json(fundaciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una fundación por ID
export const getFundacionById = async (req, res) => {
    try {
        const fundacion = await Fundacion.findById(req.params.id);
        if (!fundacion) return res.status(404).json({ message: 'Fundación no encontrada' });
        res.status(200).json(fundacion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una fundación por ID
export const updateFundacion = async (req, res) => {
    try {
        const updatedFundacion = await Fundacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFundacion) return res.status(404).json({ message: 'Fundación no encontrada' });
        res.status(200).json(updatedFundacion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una fundación por ID
export const deleteFundacion = async (req, res) => {
    try {
        const deletedFundacion = await Fundacion.findByIdAndDelete(req.params.id);
        if (!deletedFundacion) return res.status(404).json({ message: 'Fundación no encontrada' });
        res.status(200).json({ message: 'Fundación eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
