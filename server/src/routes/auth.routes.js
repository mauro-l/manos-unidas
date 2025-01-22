import express from 'express';
import { loginVoluntario } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticación
 *   description: Endpoints para autenticación de usuarios
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión como voluntario
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - contrasena
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email del voluntario
 *               contrasena:
 *                 type: string
 *                 description: Contraseña del voluntario
 *             example:
 *               email: juan.perez@example.com
 *               contrasena: password123
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT
 *                 voluntario:
 *                   $ref: '#/components/schemas/Voluntario'
 *       400:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error del servidor
 */
router.post('/login', loginVoluntario);

export default router;
