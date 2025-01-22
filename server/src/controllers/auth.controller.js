import Voluntario from '../models/voluntario.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const loginVoluntario = async (req, res) => {
    const { email, contrasena } = req.body;

    try {
        // Buscar voluntario por email
        const voluntario = await Voluntario.findOne({ email });
        if (!voluntario) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(contrasena, voluntario.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Crear JWT
        const payload = {
            user: {
                id: voluntario.id,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, voluntario });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
