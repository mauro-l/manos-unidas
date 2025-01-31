import { Router } from 'express';
import voluntarioRoutes from './voluntario.routes.js';
import authRoutes from './auth.routes.js';
import fundacionRoutes from './fundacion.routes.js';
import habilidadRoutes from './habilidad.routes.js';
import ubicacionRoutes from './ubicacion.routes.js';
import actividadRoutes from './actividad.routes.js';

const router = Router();
router.use('/actividades', actividadRoutes);
router.use('/voluntarios', voluntarioRoutes);
router.use('/auth', authRoutes);
router.use('/fundaciones', fundacionRoutes);
router.use('/habilidades', habilidadRoutes);
router.use('/ubicaciones', ubicacionRoutes);


export default router;
