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

/**
 * @swagger
 * components:
 *   schemas:
 *     Voluntario:
 *       type: object
 *       required:
 *         - nombre
 *         - apellido
 *         - email
 *         - contrasena
 *         - sexo
 *         - idioma
 *         - telefono
 *         - intereses
 *         - estudios
 *         - habilidades
 *         - ubicacion
 *         - profesion
 *         - foto_perfil
 *       properties:
 *         voluntario_id:
 *           type: string
 *           description: ID del voluntario
 *         nombre:
 *           type: string
 *           description: Nombre del voluntario
 *         apellido:
 *           type: string
 *           description: Apellido del voluntario
 *         email:
 *           type: string
 *           description: Email del voluntario
 *         contrasena:
 *           type: string
 *           description: Contraseña del voluntario
 *         sexo:
 *           type: string
 *           description: Sexo del voluntario
 *         idioma:
 *           type: string
 *           description: Idioma del voluntario
 *         telefono:
 *           type: string
 *           description: Teléfono del voluntario
 *         intereses:
 *           type: array
 *           items:
 *             type: string
 *           description: Intereses del voluntario
 *         fecha_registro:
 *           type: string
 *           format: date
 *           description: Fecha de registro del voluntario
 *         estudios:
 *           type: string
 *           description: Estudios del voluntario
 *         habilidades:
 *           type: array
 *           items:
 *             type: string
 *           description: Habilidades del voluntario
 *         ubicacion:
 *           type: string
 *           description: Ubicación del voluntario
 *         profesion:
 *           type: string
 *           description: Profesión del voluntario
 *         foto_perfil:
 *           type: string
 *           format: binary
 *           description: Foto de perfil del voluntario
 *       example:
 *         nombre: Juan
 *         apellido: Pérez
 *         email: juan.perez@example.com
 *         contrasena: password123
 *         sexo: Masculino
 *         idioma: Español
 *         telefono: "123456789"
 *         intereses: ["Educación", "Salud"]
 *         fecha_registro: "2023-10-01"
 *         estudios: "Licenciatura en Educación"
 *         habilidades: ["Docencia", "Primeros auxilios"]
 *         ubicacion: "Madrid, España"
 *         profesion: "Profesor"
 *         foto_perfil: "binary data"
 */

/**
 * @swagger
 * tags:
 *   name: Voluntarios
 *   description: Gestión de voluntarios
 */

/**
 * @swagger
 * /v1/api/voluntarios:
 *   post:
 *     summary: Crear un nuevo voluntario
 *     tags: [Voluntarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Voluntario'
 *     responses:
 *       201:
 *         description: Voluntario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voluntario'
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', createVoluntario);

/**
 * @swagger
 * /v1/api/voluntarios:
 *   get:
 *     summary: Obtener todos los voluntarios
 *     tags: [Voluntarios]
 *     responses:
 *       200:
 *         description: Lista de voluntarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Voluntario'
 */
router.get('/', getVoluntarios);

/**
 * @swagger
 * /v1/api/voluntarios/{id}:
 *   get:
 *     summary: Obtener un voluntario por ID
 *     tags: [Voluntarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del voluntario
 *     responses:
 *       200:
 *         description: Voluntario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voluntario'
 *       404:
 *         description: Voluntario no encontrado
 */
router.get('/:id', authenticateJWT, getVoluntarioById);

/**
 * @swagger
 * /v1/api/voluntarios/{id}:
 *   put:
 *     summary: Actualizar un voluntario por ID
 *     tags: [Voluntarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del voluntario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Voluntario'
 *     responses:
 *       200:
 *         description: Voluntario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voluntario'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Voluntario no encontrado
 */
router.put('/:id', authenticateJWT, updateVoluntario);

/**
 * @swagger
 * /v1/api/voluntarios/{id}:
 *   delete:
 *     summary: Eliminar un voluntario por ID
 *     tags: [Voluntarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del voluntario
 *     responses:
 *       200:
 *         description: Voluntario eliminado exitosamente
 *       404:
 *         description: Voluntario no encontrado
 */
router.delete('/:id', authenticateJWT, deleteVoluntario);

export default router;
