import { isValidObjectId } from 'mongoose';
import Actividad from '../models/actividad.model.js';
const validateId = async (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).json({
            message: `El ID ${id} no es válido. Debe ser un ObjectId de Mongoose.`,
        });
    }

    try {
        const actividad = await Actividad.findById(id);
        if (!actividad) {
            return res.status(404).json({
                message: `No se encontró ninguna actividad con el ID ${id}.`,
            });
        }
    } catch (error) {
        console.error("Error al verificar el ID de la actividad:", error);
        return res.status(500).json({
            message: 'Error al verificar el ID de la actividad. Inténtelo de nuevo más tarde.',
            error: error.message,
        });
    }

    next();
};

export default validateId;