import express from 'express';
import {
    createVoluntario,
    getVoluntarios,
    getVoluntarioById,
    updateVoluntario,
    deleteVoluntario
} from '../controllers/voluntario.controller.js';
import authenticateJWT from '../config/auth.middleware.js';

const router = express.Router();

router.post('/', createVoluntario);
router.get('/', authenticateJWT,getVoluntarios);
router.get('/:id', getVoluntarioById);
router.put('/:id', updateVoluntario);
router.delete('/:id', deleteVoluntario);

export default router;
