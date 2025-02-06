import Habilidad from "../models/habilidad.model.js";

// Crear una nueva habilidad
export const createHabilidad = async (req, res) => {
  try {
    const newHabilidad = new Habilidad(req.body);
    await newHabilidad.save();
    res.status(201).json(newHabilidad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las habilidades
export const getHabilidades = async (req, res) => {
  try {
    const habilidades = await Habilidad.find();
    res.status(200).json(habilidades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una habilidad por ID
export const getHabilidadById = async (req, res) => {
  try {
    const habilidad = await Habilidad.findById(req.params.id);
    if (!habilidad)
      return res.status(404).json({ message: "Habilidad no encontrada" });
    res.status(200).json(habilidad);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una habilidad por ID
export const updateHabilidad = async (req, res) => {
  try {
    const updatedHabilidad = await Habilidad.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHabilidad)
      return res.status(404).json({ message: "Habilidad no encontrada" });
    res.status(200).json(updatedHabilidad);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una habilidad por ID
export const deleteHabilidad = async (req, res) => {
  try {
    const deletedHabilidad = await Habilidad.findByIdAndDelete(req.params.id);
    if (!deletedHabilidad)
      return res.status(404).json({ message: "Habilidad no encontrada" });
    res.status(200).json({ message: "Habilidad eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

