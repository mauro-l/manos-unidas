import express from 'express';
//import { isValidObjectId } from 'mongoose';
//import Joi from 'joi';
import { getAllCategorias, getCategoriaById, createCategoria, updateCategoria, deleteCategoria } from '../controllers/categoriaController.js';

const router = express.Router();

/*const validateId = (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: 'ID no válido' });
    }
    next();
};

/*const validateCategoriaData = (req, res, next) => {
    const schema = Joi.object({
        categoria_id: Joi.string().required(),
        nombre: Joi.string().required(),
        descripcion: Joi.string().optional(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
*/
router.get('/', getAllCategorias);
router.get('/:id', validateId, getCategoriaById);
router.post('/', validateCategoriaData, createCategoria);
router.put('/:id', validateId, validateCategoriaData, updateCategoria);
router.delete('/:id', validateId, deleteCategoria);

export default router