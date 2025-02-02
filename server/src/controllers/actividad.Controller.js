import Actividad from '../models/Actividad.model.js';


export const createActividad = async (req, res) => {
    const { titulo, descripcion, fecha_inicio, fecha_fin, ubicacion, cupo_disponible, fundacion_id, categoria_id } = req.body;

    try {
        // Verifica 
        const fundacion = await Fundacion.findById(fundacion_id);
        if (!fundacion) {
            return res.status(400).json({ message: 'ID de fundación no válido' });
        }
        const categoria = await Categoria.findById(categoria_id);
        if (!categoria) {
            return res.status(400).json({ message: 'ID de categoría no válido' });
        }
        const nuevaActividad = new Actividad({
            titulo,
            descripcion,
            fecha_inicio,
            fecha_fin,
            ubicacion,
            cupo_disponible,
            fundacion_id,
            categoria_id,
        });

        await nuevaActividad.save();
        res.status(201).json({
            message: 'Actividad creada exitosamente',
            actividad: nuevaActividad,
        });
    } catch (error) {
        console.error('Error al crear actividad:', error);
        res.status(500).json({
            message: 'Error al crear actividad',
            error: error.message,
        });
    }
};


export const getAllActividades = async (req, res) => {
    try {
        const actividades = await Actividad.find();
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
