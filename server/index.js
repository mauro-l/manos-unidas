import express from 'express';
import connectDB from './src/config/connection.js';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

connectDB()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`)
        });
    })
    .catch(() => {
        process.exit(1); // Salir del proceso con fallo
    });


app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a la API de Gestión de Voluntariado - Manos Unidas",
        version: "1.0",
        description: "Esta API proporciona servicios para la gestión de voluntariado, incluyendo la administración de organizaciones y voluntarios.",
        documentation: process.env.API_DOCUMENTATION_URL || "http://localhost:3000/api-docs",
        endpoints: [
            "/v1/api/login",
            "/v1/api/voluntarios"
        ]
    });
});

app.use('/v1/api', routes);
