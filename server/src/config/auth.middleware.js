import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ mensaje: 'No hay token, autorización denegada' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ mensaje: 'Formato de token incorrecto' });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ mensaje: 'El token no es válido' });
    }
};

export default auth;
