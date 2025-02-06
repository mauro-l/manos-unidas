import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Ubicacion:
 *       type: object
 *       required:
 *         - ciudad
 *         - pais
 *       properties:
 *         id:
 *           type: string
 *           description: ID de la ubicación
 *         ciudad:
 *           type: string
 *           description: Ciudad de la ubicación
 *         pais:
 *           type: string
 *           description: País de la ubicación
 *       example:
 *         id: "60d0fe4f5311236168a109cb"
 *         ciudad: "Buenos Aires"
 *         pais: "Argentina"
 */
const UbicacionSchema = new mongoose.Schema({
  pais: {
    type: String,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
  },
});

const Ubicacion = mongoose.model("Ubicacion", UbicacionSchema);
export default Ubicacion;

