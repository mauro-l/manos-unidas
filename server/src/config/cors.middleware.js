import cors from 'cors';

const corsOptions = {
    origin: '*', // Permite solicitudes desde cualquier URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeceras permitidas
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
