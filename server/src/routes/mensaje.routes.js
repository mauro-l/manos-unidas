import express from 'express';
import Joi from 'joi';
import { getAllMensajes, getMensajeById, createMensaje, updateMensaje, deleteMensaje } from '../controllers/mensaje.controller.js';

const router = express.Router();

const validateMensajeData = (req, res, next) => {
    const schema = Joi.object({
        remitente_id: Joi.string().required(),
        destinatario_id: Joi.string().required(),
        mensaje: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

router.get('/', getAllMensajes);
router.get('/:id', getMensajeById);
router.post('/', validateMensajeData, createMensaje);
router.put('/:id', validateMensajeData, updateMensaje);
router.delete('/:id', deleteMensaje);

export default router;