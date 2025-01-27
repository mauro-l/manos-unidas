import Voluntario from '../models/voluntario.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const login = async (req, res) => {
    const { email, contrasena } = req.body;

    try {
        let user = await Voluntario.findOne({ email });
        let role = 'voluntario';
        // Si no se encuentra el voluntario, buscar fundación por email
        if (!user) {
            user = await Fundacion.findOne({ email });
            role = 'fundacion';
        }
        // Si no se encuentra ni voluntario ni fundación
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Crear JWT
        const payload = {
            user: {
                id: user.id,
                role: role,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, user, role });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
