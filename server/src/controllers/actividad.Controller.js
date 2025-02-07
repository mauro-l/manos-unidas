import Actividad from "../models/Actividad.model.js";
import Fundacion from "../models/fundacion.model.js";
import Categoria from "../models/categoria.model.js";
import Ubicacion from "../models/ubicacion.model.js"; //redirigir la ubicacion
import mongoose from "mongoose";
import { response } from "express";

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
      imagen,
    } = req.body;

    //  Validación de datos de entrada
    if (!titulo || !descripcion || !fundacion_id || !categoria_id) {
      console.log(
        "Datos recibidos:",
        titulo,
        descripcion,
        fundacion_id,
        categoria_id
      ); // ✅ Depuración
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const [fundacion, categoria] = await Promise.all([
      Fundacion.findById(fundacion_id),
      Categoria.findOne({ categoria_id: categoria_id }),
    ]);

    if (!categoria) {
      return res.status(400).json({ message: "ID de categoría no válido" });
    }

    if (!fundacion) {
      return res.status(400).json({ message: "ID de fundación no válido" });
    }

    let ubicacionDoc = await Ubicacion.findOne({ ciudad: ubicacion.ciudad });
    if (!ubicacionDoc) {
      ubicacionDoc = new Ubicacion(ubicacion);
      await ubicacionDoc.save();
    }

    const nuevaActividad = new Actividad({
      titulo,
      descripcion,
      fecha_inicio,
      fecha_fin,
      fecha_limite,
      ubicacion: ubicacionDoc._id,
      cupo_maximo,
      cupo_disponible,
      fundacion_id: fundacion._id,
      categoria_id: categoria._id,
      tareas,
      habilidades,
      perfil_buscado,
      disponibilidad,
      imagen,
    });

    const actividadGuardada = await nuevaActividad.save();

    res.status(201).json({
      status: "success",
      actividadGuardada,
    });
  } catch (error) {
    console.error("Error al crear actividad:", error);
    res.status(500).json({
      message: "Error al crear actividad",
      error: error.message,
    });
  }
};

export const getActividadById = async (req, res) => {
  try {
    const actividad = await Actividad.findById(req.params.id)
      .populate({ path: "categoria_id", select: "categoria_id nombre" })
      .populate({ path: "fundacion_id", select: "fundacion_id nombre" })
      .populate("ubicacion");

    if (!actividad)
      return res.status(404).json({ message: "Actividad no encontrada" });
    res.json(actividad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getActividadesByFundacionId = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "ID de fundación no válido" });
    }
    const fundacionObjectId = new mongoose.Types.ObjectId(req.params.id);

    const actividades = await Actividad.find({
      fundacion_id: fundacionObjectId,
    })
      .populate({ path: "categoria_id", select: "categoria_id nombre" })
      .populate({ path: "fundacion_id", select: "id nombre" })
      .populate("ubicacion");

    if (!actividades.length) {
      return res
        .status(404)
        .json({ message: "No hay actividades para esta fundación" });
    }

    res.json(actividades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllActividades = async (req, res) => {
  try {
    const actividades = await Actividad.find()
      .populate({ path: "categoria_id", select: "categoria_id nombre" })
      .populate({ path: "fundacion_id", select: "fundacion_id nombre" })
      .populate("ubicacion");

    res.status(200).json({ status: "success", actividades });
  } catch (error) {
    console.error("Error al obtener todas las actividades:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateActividad = async (req, res) => {
  try {
    const updatedActividad = await Actividad.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedActividad)
      return res.status(404).json({ message: "Actividad no encontrada" });
    res.json(updatedActividad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteActividad = async (req, res) => {
  try {
    const deletedActividad = await Actividad.findByIdAndDelete(req.params.id);
    if (!deletedActividad)
      return res.status(404).json({ message: "Actividad no encontrada" });
    res.json({ message: "Actividad eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

