import {Router} from 'express';
import voluntarioRoutes from './voluntario.routes.js';
import authRoutes from './auth.routes.js';
import fundacionRoutes from './fundacion.routes.js';
import habilidadRoutes from './habilidad.routes.js';
import ubicacionRoutes from './ubicacion.routes.js';
import inscripcionRoutes from './inscripcion.routes.js';
import mensajeRoutes from './mensaje.routes.js';

const router = Router();

router.use('/voluntarios', voluntarioRoutes);
router.use('/auth', authRoutes);
router.use('/fundaciones', fundacionRoutes);
router.use('/habilidades', habilidadRoutes);
router.use('/ubicaciones', ubicacionRoutes);
router.use('/inscripciones', inscripcionRoutes);
router.use('/mensajes', mensajeRoutes);

export default router;
