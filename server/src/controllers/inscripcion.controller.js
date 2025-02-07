import Actividad from "../models/Actividad.model.js";
import Inscripcion from "../models/inscripcion.model.js";
import Voluntario from "../models/voluntario.model.js";
import mongoose from "mongoose";

export const getAllInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.find().populate(
      "actividad_id",
      "titulo fecha_inicio fecha_fin voluntarios_inscriptos cupo_maximo"
    );

    res.status(200).json(inscripciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getInscripcionById = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.findById(req.params.id).populate(
      "actividad_id",
      "titulo fecha_inicio fecha_fin voluntarios_inscriptos cupo_maximo"
    );

    if (!inscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }

    res.status(200).json(inscripcion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createInscripcion = async (req, res) => {
  const { voluntario_id, actividad_id } = req.body;
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const voluntario = await Voluntario.findById(voluntario_id).session(
      session
    );
    if (!voluntario) {
      throw new Error("El voluntario no existe");
    }

    const actividad = await Actividad.findById(actividad_id).session(session);
    if (!actividad) {
      throw new Error("La actividad no existe");
    }

    if (!actividad.cupo_disponible) {
      throw new Error("No hay cupos disponibles para esta actividad");
    }

    const inscripcionesCount = await Inscripcion.countDocuments({
      actividad_id,
    }).session(session);

    if (inscripcionesCount >= actividad.cupo_maximo) {
      actividad.cupo_disponible = false;
      await actividad.save({ session });
      throw new Error("No hay cupos disponibles para esta actividad");
    }

    const newInscripcion = new Inscripcion({
      voluntario_id,
      actividad_id,
      fecha_inscripcion: new Date(),
    });

    const savedInscripcion = await newInscripcion.save({ session });

    actividad.voluntarios_inscriptos++;
    if (actividad.voluntarios_inscriptos >= actividad.cupo_maximo) {
      actividad.cupo_disponible = false;
    }
    await actividad.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json(savedInscripcion);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Error al crear inscripción:", error);
    res
      .status(500)
      .json({ message: "Error al crear inscripción", error: error.message });
  }
};

export const updateInscripcion = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (
      updatedData.estado &&
      !["Pendiente", "Aprobada", "Rechazada", "Cancelado"].includes(
        updatedData.estado
      )
    ) {
      return res.status(400).json({
        message:
          "Valor de 'estado' no válido. Debe ser uno de los siguientes: Pendiente, Aprobada, Rechazada, Cancelado.",
      });
    }

    const updatedInscripcion = await Inscripcion.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedInscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }

    res.status(200).json(updatedInscripcion);
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar inscripción",
      error: error.message,
    });
  }
};

export const deleteInscripcion = async (req, res) => {
  try {
    const deletedInscripcion = await Inscripcion.findByIdAndDelete(
      req.params.id
    );

    if (!deletedInscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }

    const actividad = await Actividad.findById(deletedInscripcion.actividad_id);
    if (actividad) {
      actividad.voluntarios_inscriptos = Math.max(
        0,
        actividad.voluntarios_inscriptos - 1
      );

      actividad.cupo_disponible =
        actividad.voluntarios_inscriptos < actividad.cupo_maximo;

      await actividad.save();
    }

    res.status(200).json({ message: "Inscripción eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar inscripción:", error);
    res
      .status(500)
      .json({ message: "Error al eliminar inscripción", error: error.message });
  }
};

export const getInscripcionesByActividadId = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "ID de actividad no válido" });
    }

    const actividadObjectId = new mongoose.Types.ObjectId(req.params.id);

    const inscripciones = await Inscripcion.find({
      actividad_id: actividadObjectId,
    })
      .populate("voluntario_id")
      .populate("actividad_id");

    if (!inscripciones.length) {
      return res
        .status(404)
        .json({ message: "No hay inscripciones para esta actividad" });
    }

    res.status(200).json(inscripciones);
  } catch (error) {
    console.error("Error al obtener inscripciones por actividad:", error);
    res.status(500).json({ message: error.message });
  }
};

