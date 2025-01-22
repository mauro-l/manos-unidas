import express from 'express';
import { loginVoluntario } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/login', loginVoluntario);

export default router;
