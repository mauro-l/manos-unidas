import express from 'express';
import {
    createHabilidad,
    getHabilidades,
    getHabilidadById,
    updateHabilidad,
    deleteHabilidad
} from '../controllers/habilidad.controller.js';
import authenticateJWT from '../config/auth.middleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Habilidades
 *   description: Gestión de habilidades
 */

/**
 * @swagger
 * /v1/api/habilidades:
 *   get:
 *     summary: Obtener todas las habilidades
 *     tags: [Habilidades]
 *     responses:
 *       200:
 *         description: Lista de habilidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habilidad'
 */
router.get('/', getHabilidades);

/**
 * @swagger
 * /v1/api/habilidades:
 *   post:
 *     summary: Crear una nueva habilidad
 *     tags: [Habilidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habilidad'
 *     responses:
 *       201:
 *         description: Habilidad creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', authenticateJWT, createHabilidad);

/**
 * @swagger
 * /v1/api/habilidades/{id}:
 *   get:
 *     summary: Obtener una habilidad por ID
 *     tags: [Habilidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la habilidad
 *     responses:
 *       200:
 *         description: Habilidad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Habilidad'
 *       404:
 *         description: Habilidad no encontrada
 */
router.get('/:id', authenticateJWT, getHabilidadById);

/**
 * @swagger
 * /v1/api/habilidades/{id}:
 *   put:
 *     summary: Actualizar una habilidad por ID
 *     tags: [Habilidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la habilidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habilidad'
 *     responses:
 *       200:
 *         description: Habilidad actualizada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Habilidad no encontrada
 */
router.put('/:id', authenticateJWT, updateHabilidad);

/**
 * @swagger
 * /v1/api/habilidades/{id}:
 *   delete:
 *     summary: Eliminar una habilidad por ID
 *     tags: [Habilidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la habilidad
 *     responses:
 *       200:
 *         description: Habilidad eliminada exitosamente
 *       404:
 *         description: Habilidad no encontrada
 */
router.delete('/:id', authenticateJWT, deleteHabilidad);

export default router;
