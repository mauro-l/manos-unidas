
import Actividad from '../models/Actividad.model.js';
import Fundacion from '../models/fundacion.model.js';
import Categoria from '../models/categoria.model.js';
import mongoose from 'mongoose';
/*--------creacion de esta cosa MARAVILLOSA----💖----------------------*/
export const createActividad = async (req, res) => {
    try {
        const {
            titulo,
            descripcion,
            fecha_inicio,
            fecha_fin,
            fecha_limite,
            ubicacion,
            cupo_maximo,
            cupo_disponible,
            fundacion_id,
            categoria_id,
            tareas,
            habilidades,
            perfil_buscado,
            disponibilidad,
        } = req.body;

        /*console.log("Datos recibidos:", req.body); // ✅ Depuración*/
        /*console.log("Fundacion ID recibido:", fundacion_id);*/



        //  Validación de datos de entrada
        if (!titulo || !descripcion || !fundacion_id || !categoria_id) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }

        //  Convertir fundacion_id y categoria_id a ObjectId si es necesario
        const fundacionObjectId = new mongoose.Types.ObjectId(fundacion_id);
        const categoriaObjectId = new mongoose.Types.ObjectId(categoria_id);

        //  Verifico  que la fundación y la categoría existen malditaseas//
        const [fundacion, categoria] = await Promise.all([
            Fundacion.findById(fundacionObjectId),
            Categoria.findById(categoriaObjectId),
        ]);

        if (!categoria) {
            return res.status(400).json({ message: 'ID de categoría no válido' });
        }

        // Crear nueva actividad  la fundación y la categoría existen 😊
        const nuevaActividad = new Actividad({
            actividad_id: `act-${Date.now()}`, // Generar un ID único
            titulo,
            descripcion,
            fecha_inicio,
            fecha_fin,
            fecha_limite,
            ubicacion,
            cupo_maximo,
            cupo_disponible,
            fundacion_id: fundacionObjectId,
            categoria_id: categoriaObjectId,
            tareas,
            habilidades,
            perfil_buscado,
            disponibilidad,
        });

        //  Guardar en la base de datos la puta madre
        const actividadGuardada = await nuevaActividad.save();

        //  Responder con la concha de la lora!!
        res.status(201).json({
            message: 'Actividad creada exitosamente',
            actividad: actividadGuardada,
        });

    } catch (error) {
        console.error('Error al crear actividad:', error);
        res.status(500).json({
            message: 'Error al crear actividad',
            error: error.message,
        });
    }
};
/*---------el problema es el create--------------------------------------------*/

export const getAllActividades = async (req, res) => {
    try {
        const actividades = await Actividad.find().populate({ path: 'categoria_id', select: 'categoria_id nombre' });
        res.json(actividades);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getActividadById = async (req, res) => {
    try {
        const actividad = await Actividad.findById(req.params.id)
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
