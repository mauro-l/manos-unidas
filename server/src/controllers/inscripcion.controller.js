import Inscripcion from '../models/inscripcion.model.js';

// Obtener todas las inscripciones
export const getAllInscripciones = async (req, res) => {
    try {
        const inscripciones = await Inscripcion.find();
        res.status(200).json(inscripciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una inscripción por ID
export const getInscripcionById = async (req, res) => {
    try {
        const inscripcion = await Inscripcion.findById(req.params.id);
        if (!inscripcion) {
            return res.status(404).json({ message: 'Inscripción no encontrada' });
        }
        res.status(200).json(inscripcion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva inscripción
export const createInscripcion = async (req, res) => {
    const { voluntario_id, actividad_id } = req.body;

    try {
        const newInscripcion = new Inscripcion({
            voluntario_id,
            actividad_id,
            fecha_inscripcion: new Date()
        });

        const savedInscripcion = await newInscripcion.save();

        res.status(201).json(savedInscripcion);
    } catch (error) {
        console.error("Error al crear inscripción:", error); // Log del error
        res.status(500).json({ message: 'Error al crear inscripción', error: error.message }); // Respuesta con más detalle
    }
};

// Actualizar una inscripción por id
export const updateInscripcion = async (req, res) => {
    try {
        const updatedInscripcion = await Inscripcion.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); // runValidators para validar las actualizaciones
        if (!updatedInscripcion) {
            return res.status(404).json({ message: 'Inscripción no encontrada' });
        }
        res.status(200).json(updatedInscripcion);
    } catch (error) {
        console.error("Error al actualizar inscripción:", error); // Log del error
        res.status(500).json({ message: 'Error al actualizar inscripción', error: error.message }); // Respuesta con más detalle
    }
};

// Eliminar una inscripción por ID
export const deleteInscripcion = async (req, res) => {
    try {
        const deletedInscripcion = await Inscripcion.findByIdAndDelete(req.params.id);
        if (!deletedInscripcion) {
            return res.status(404).json({ message: 'Inscripción no encontrada' });
        }
        res.status(200).json({ message: 'Inscripción eliminada' });
    } catch (error) {
        console.error("Error al eliminar inscripción:", error); // Log del error
        res.status(500).json({ message: 'Error al eliminar inscripción', error: error.message }); // Respuesta con más detalle
    }
};