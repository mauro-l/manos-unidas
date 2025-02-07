import express from "express";
import Joi from "joi";
import {
  getAllInscripciones,
  getInscripcionById,
  createInscripcion,
  updateInscripcion,
  deleteInscripcion,
  getInscripcionesByActividadId,
} from "../controllers/inscripcion.controller.js";

const router = express.Router();

const validateInscripcionData = (req, res, next) => {
  const schema = Joi.object({
    voluntario_id: Joi.string().required(),
    actividad_id: Joi.string().required(),
    estado: Joi.string().valid(
      "Pendiente",
      "Aprobada",
      "Rechazada",
      "Cancelado"
    ), // Agregar validación para estado
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

router.get("/", getAllInscripciones);
router.get("/:id", getInscripcionById);
router.get("/activity/:id", getInscripcionesByActividadId);
router.post("/", validateInscripcionData, createInscripcion);
router.put("/:id", validateInscripcionData, updateInscripcion);
router.delete("/:id", deleteInscripcion);

export default router;

