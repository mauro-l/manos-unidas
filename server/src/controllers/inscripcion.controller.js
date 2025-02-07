import Inscripcion from "../models/inscripcion.model.js";

// Obtener todas las inscripciones
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

// Obtener una inscripción por ID con datos de la actividad
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

// Crear una nueva inscripción
export const createInscripcion = async (req, res) => {
  const { voluntario_id, actividad_id } = req.body;

  try {
    const newInscripcion = new Inscripcion({
      voluntario_id,
      actividad_id,
      fecha_inscripcion: new Date(),
    });

    const savedInscripcion = await newInscripcion.save();

    res.status(201).json(savedInscripcion);
  } catch (error) {
    console.error("Error al crear inscripción:", error); // Log del error
    res
      .status(500)
      .json({ message: "Error al crear inscripción", error: error.message }); // Respuesta con más detalle
  }
};

// Actualizar una inscripción por id
export const updateInscripcion = async (req, res) => {
  try {
    const updatedInscripcion = await Inscripcion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ); // runValidators para validar las actualizaciones
    if (!updatedInscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }
    res.status(200).json(updatedInscripcion);
  } catch (error) {
    console.error("Error al actualizar inscripción:", error); // Log del error
    res.status(500).json({
      message: "Error al actualizar inscripción",
      error: error.message,
    }); // Respuesta con más detalle
  }
};

// Eliminar una inscripción por ID
export const deleteInscripcion = async (req, res) => {
  try {
    const deletedInscripcion = await Inscripcion.findByIdAndDelete(
      req.params.id
    );
    if (!deletedInscripcion) {
      return res.status(404).json({ message: "Inscripción no encontrada" });
    }
    res.status(200).json({ message: "Inscripción eliminada" });
  } catch (error) {
    console.error("Error al eliminar inscripción:", error); // Log del error
    res
      .status(500)
      .json({ message: "Error al eliminar inscripción", error: error.message }); // Respuesta con más detalle
  }
};

export const getInscripcionesByActividadId = async (req, res) => {
  try {
    // Validar que el ID sea un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "ID de actividad no válido" });
    }

    const actividadObjectId = new mongoose.Types.ObjectId(req.params.id);

    // Buscar todas las inscripciones que coincidan con el ID de la actividad
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

