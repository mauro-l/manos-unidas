import express from 'express';
import { isValidObjectId } from 'mongoose';
import {
    getAllCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria
} from '../controllers/categoria.Controller.js';

const router = express.Router();

// ✅ Asegúrate de que esta función esté presente
const validateId = (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: 'ID no válido' });
    }
    next();
};

router.get('/', getAllCategorias);
router.get('/:id', validateId, getCategoriaById);
router.post('/', createCategoria);
router.put('/:id', updateCategoria);
router.delete('/:id', deleteCategoria);

export default router;