import express from 'express';
import {
    createActividad,
    getAllActividades,
    getActividadById,
    updateActividad,
    deleteActividad
} from '../controllers/actividad.Controller.js';
import validateId from '../config/validate_id.middleware.js';

const router = express.Router();

router.get('/', getAllActividades);
router.get('/:id', validateId, getActividadById);
router.post('/', createActividad);
router.put('/:id', validateId, updateActividad);
router.delete('/:id', validateId, deleteActividad);

export default router;