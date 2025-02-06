import express from "express";
import {
  createFundacion,
  getFundaciones,
  getFundacionById,
  updateFundacion,
  deleteFundacion,
} from "../controllers/fundacion.controller.js";
import authenticateJWT from "../config/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Fundaciones
 *   description: Gestión de fundaciones
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Fundacion:
 *       type: object
 *       required:
 *         - fundacion_id
 *         - nombre
 *         - email
 *         - contrasena
 *         - telefono
 *         - direccion
 *         - descripcion
 *         - nro_registro
 *       properties:
 *         fundacion_id:
 *           type: string
 *           description: ID de la fundación
 *         nombre:
 *           type: string
 *           description: Nombre de la fundación
 *         email:
 *           type: string
 *           description: Email de la fundación
 *         contrasena:
 *           type: string
 *           description: Contraseña de la fundación
 *         telefono:
 *           type: string
 *           description: Teléfono de la fundación
 *         direccion:
 *           type: string
 *           description: Dirección de la fundación
 *         descripcion:
 *           type: string
 *           description: Descripción de la fundación
 *         fecha_registro:
 *           type: string
 *           format: date
 *           description: Fecha de registro de la fundación
 *         logo:
 *           type: string
 *           format: binary
 *           description: Logo de la fundación
 *         web:
 *           type: string
 *           description: Sitio web de la fundación
 *         email_contacto:
 *           type: string
 *           description: Email de contacto de la fundación
 *         area_principal:
 *           type: string
 *           description: Área principal de la fundación
 *         nro_registro:
 *           type: string
 *           description: Número de registro de la fundación
 *       example:
 *         nombre: "Fundación Ejemplo"
 *         email: "contacto@fundacionejemplo.org"
 *         contrasena: "password123"
 *         telefono: "123456789"
 *         direccion: "Calle Falsa 123"
 *         descripcion: "Descripción de la fundación"
 *         fecha_registro: "2023-10-01"
 *         web: "http://www.fundacionejemplo.org"
 *         email_contacto: "info@fundacionejemplo.org"
 *         area_principal: "Educación"
 *         nro_registro: "REG123456"
 */

/**
 * @swagger
 * /v1/api/fundaciones:
 *   post:
 *     summary: Crear una nueva fundación
 *     tags: [Fundaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fundacion'
 *     responses:
 *       201:
 *         description: Fundación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fundacion'
 *       400:
 *         description: Error en la solicitud
 */
router.post("/", createFundacion);

/**
 * @swagger
 * /v1/api/fundaciones:
 *   get:
 *     summary: Obtener todas las fundaciones
 *     tags: [Fundaciones]
 *     responses:
 *       200:
 *         description: Lista de fundaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fundacion'
 */
router.get("/", getFundaciones);

/**
 * @swagger
 * /v1/api/fundaciones/{id}:
 *   get:
 *     summary: Obtener una fundación por ID
 *     tags: [Fundaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la fundación
 *     responses:
 *       200:
 *         description: Fundación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fundacion'
 *       404:
 *         description: Fundación no encontrada
 */
router.get("/:id", authenticateJWT, getFundacionById);

/**
 * @swagger
 * /v1/api/fundaciones/{id}:
 *   put:
 *     summary: Actualizar una fundación por ID
 *     tags: [Fundaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la fundación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Fundacion'
 *     responses:
 *       200:
 *         description: Fundación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fundacion'
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Fundación no encontrada
 */
router.put("/:id", authenticateJWT, updateFundacion);

/**
 * @swagger
 * /v1/api/fundaciones/{id}:
 *   delete:
 *     summary: Eliminar una fundación por ID
 *     tags: [Fundaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la fundación
 *     responses:
 *       200:
 *         description: Fundación eliminada exitosamente
 *       404:
 *         description: Fundación no encontrada
 */
router.delete("/:id", authenticateJWT, deleteFundacion);

export default router;

