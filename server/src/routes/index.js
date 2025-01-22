import {Router} from 'express';
import voluntarioRoutes from './voluntario.routes.js';
import authRoutes from './auth.routes.js';

const router = Router();

router.use('/voluntarios', voluntarioRoutes);
router.use('/auth', authRoutes);

export default router;
