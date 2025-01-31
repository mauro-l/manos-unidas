import express from 'express';
import { isValidObjectId } from 'mongoose';
import Joi from 'joi';
import { getAllActividades, getActividadById, createActividad, updateActividad, deleteActividad } from '../controllers/actividadController.js';

const router = express.Router();

const validateId = (req, res, next) => {
    if (!isValidObjectId(req.params.id)) {
        return res.status(400).json({ message: 'ID no válido' });
    }
    next();
};

const validateActividadData = (req, res, next) => {
    const schema = Joi.object({
        actividad_id: Joi.string().required(),
        titulo: Joi.string().required(),
        descripcion: Joi.string().required(),
        fecha_inicio: Joi.date().required(),
        fecha_fin: Joi.date().required(),
        ubicacion: Joi.string().required(),
        cupo_disponible: Joi.boolean().required(),
        fundacion_id: Joi.string().required(),
        categoria_id: Joi.string().optional(),
        tareas: Joi.array().items(Joi.string()).optional(),
        categoria: Joi.string().optional(),
        habilidades: Joi.array().items(Joi.string()).optional(),
        perfil_buscado: Joi.string().optional()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

router.get('/', getAllActividades);

router.get('/:id', validateId, getActividadById);
router.post('/', validateActividadData, createActividad);
router.put('/:id', validateId, validateActividadData, updateActividad);
router.delete('/:id', validateId, deleteActividad);

export default router;
