import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Habilidad:
 *       type: object
 *       required:
 *         - nombre
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la habilidad
 *         nombre:
 *           type: string
 *           description: Nombre de la habilidad
 *       example:
 *         id: "60d0fe4f5311236168a109ca"
 *         nombre: "Programación"
 */
const HabilidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
});

const Habilidad = mongoose.model("Habilidad", HabilidadSchema);
export default Habilidad;

