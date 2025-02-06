import Habilidad from "../models/habilidad.model.js";
import Ubicacion from "../models/ubicacion.model.js";
import Voluntario from "../models/voluntario.model.js";

export const createVoluntario = async (req, res) => {
  try {
    const { habilidades, ubicacion, ...voluntarioData } = req.body;

    // Comprobar y crear habilidades
    const habilidadesDocs = [];
    for (const habilidad of habilidades) {
      let habilidadExistente = await Habilidad.findOne({ nombre: habilidad });
      if (!habilidadExistente) {
        // Si no existe, se crea una nueva habilidad
        habilidadExistente = await Habilidad.create({ nombre: habilidad });
      }
      habilidadesDocs.push(habilidadExistente);
    }

    // Comprobar y crear ubicación
    let ubicacionDoc = await Ubicacion.findOne({ ciudad: ubicacion.ciudad });
    if (!ubicacionDoc) {
      // Si no existe, se crea una nueva ubicación
      console.log(ubicacion);

      ubicacionDoc = new Ubicacion(ubicacion);
      await ubicacionDoc.save();
    }

    // Crear voluntario
    const newVoluntario = new Voluntario({
      ...voluntarioData,
      habilidades: habilidadesDocs.map((habilidad) => habilidad._id),
      ubicacion: ubicacionDoc._id,
    });
    await newVoluntario.save();

    res.status(201).json(newVoluntario);
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los voluntarios
export const getVoluntarios = async (req, res) => {
  try {
    const voluntarios = await Voluntario.find();
    res.status(200).json(voluntarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un voluntario por ID
export const getVoluntarioById = async (req, res) => {
  try {
    const voluntario = await Voluntario.findById(req.params.id);
    if (!voluntario)
      return res.status(404).json({ message: "Voluntario no encontrado" });
    res.status(200).json(voluntario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar un voluntario por ID
export const updateVoluntario = async (req, res) => {
  try {
    const updatedVoluntario = await Voluntario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedVoluntario)
      return res.status(404).json({ message: "Voluntario no encontrado" });
    res.status(200).json(updatedVoluntario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un voluntario por ID
export const deleteVoluntario = async (req, res) => {
  try {
    const deletedVoluntario = await Voluntario.findByIdAndDelete(req.params.id);
    if (!deletedVoluntario)
      return res.status(404).json({ message: "Voluntario no encontrado" });
    res.status(200).json({ message: "Voluntario eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

