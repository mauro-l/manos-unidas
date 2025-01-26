import express from 'express';
import {
    createUbicacion,
    getUbicaciones,
    getUbicacionById,
    updateUbicacion,
    deleteUbicacion
} from '../controllers/ubicacion.controller.js';
import authenticateJWT from '../config/auth.middleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ubicaciones
 *   description: Gestión de ubicaciones
 */

/**
 * @swagger
 * /ubicaciones:
 *   get:
 *     summary: Obtener todas las ubicaciones
 *     tags: [Ubicaciones]
 *     responses:
 *       200:
 *         description: Lista de ubicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ubicacion'
 */
router.get('/', getUbicaciones);

/**
 * @swagger
 * /ubicaciones:
 *   post:
 *     summary: Crear una nueva ubicación
 *     tags: [Ubicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ubicacion'
 *     responses:
 *       201:
 *         description: Ubicación creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', authenticateJWT, createUbicacion);

/**
 * @swagger
 * /ubicaciones/{id}:
 *   get:
 *     summary: Obtener una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ubicacion'
 *       404:
 *         description: Ubicación no encontrada
 */
router.get('/:id', authenticateJWT, getUbicacionById);

/**
 * @swagger
 * /ubicaciones/{id}:
 *   put:
 *     summary: Actualizar una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la ubicación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ubicacion'
 *     responses:
 *       200:
 *         description: Ubicación actualizada exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Ubicación no encontrada
 */
router.put('/:id', authenticateJWT, updateUbicacion);

/**
 * @swagger
 * /ubicaciones/{id}:
 *   delete:
 *     summary: Eliminar una ubicación por ID
 *     tags: [Ubicaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la ubicación
 *     responses:
 *       200:
 *         description: Ubicación eliminada exitosamente
 *       404:
 *         description: Ubicación no encontrada
 */
router.delete('/:id', authenticateJWT, deleteUbicacion);

export default router;
