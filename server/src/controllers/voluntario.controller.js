import Voluntario from "../models/voluntario.model.js";

// Crear un nuevo voluntario
export const createVoluntario = async (req, res) => {
  try {
    const newVoluntario = new Voluntario(req.body);
    await newVoluntario.save();
    res.status(201).json(newVoluntario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todos los voluntarios
export const getVoluntarios = async (req, res) => {
  try {
    const voluntarios = await Voluntario.find()
      .populate("ubicacion")
      .populate("habilidades");
    res.status(200).json(voluntarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un voluntario por ID
export const getVoluntarioById = async (req, res) => {
  try {
    const voluntario = await Voluntario.findById(req.params.id)
      .populate("ubicacion")
      .populate("habilidades");
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

