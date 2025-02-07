import Fundacion from "../models/fundacion.model.js";
import Ubicacion from "../models/ubicacion.model.js";

// Crear una nueva fundación
export const createFundacion = async (req, res) => {
  try {
    const { ubicacion, ...fundacionData } = req.body;

    let ubicacionDoc = await Ubicacion.findOne({ ciudad: ubicacion.ciudad });
    if (!ubicacionDoc) {
      // Si no existe, se crea una nueva ubicación
      ubicacionDoc = new Ubicacion(ubicacion);
      await ubicacionDoc.save();
    }

    const newFundacion = new Fundacion({
      ...fundacionData,
      ubicacion: ubicacionDoc._id,
    });

    await newFundacion.save();
    res.status(201).json(newFundacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obtener todas las fundaciones con sus ubicaciones populadas
export const getFundaciones = async (req, res) => {
  try {
    const fundaciones = await Fundacion.find().populate("ubicacion");
    res.status(200).json(fundaciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una fundación por ID con su ubicación populada
export const getFundacionById = async (req, res) => {
  try {
    const fundacion = await Fundacion.findById(req.params.id).populate(
      "ubicacion"
    );
    if (!fundacion)
      return res.status(404).json({ message: "Fundación no encontrada" });

    res.status(200).json(fundacion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una fundación por ID
export const updateFundacion = async (req, res) => {
  try {
    const updatedFundacion = await Fundacion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedFundacion)
      return res.status(404).json({ message: "Fundación no encontrada" });

    res.status(200).json(updatedFundacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar una fundación por ID
export const deleteFundacion = async (req, res) => {
  try {
    const deletedFundacion = await Fundacion.findByIdAndDelete(req.params.id);
    if (!deletedFundacion)
      return res.status(404).json({ message: "Fundación no encontrada" });

    res.status(200).json({ message: "Fundación eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

