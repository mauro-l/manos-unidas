import express from 'express';
import connectDB from './src/config/connection.js';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';
import swaggerConfig from './src/config/swagger.util.js';
import corsMiddleware from './src/config/cors.middleware.js';
import actividadesRoutes from './src/routes/actividad.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use(corsMiddleware);
app.use('/api', actividadesRoutes);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(() => {
        process.exit(1); // Salir del proceso con fallo
    });

swaggerConfig(app);

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenido a la API de Gestión de Voluntariado - Manos Unidas",
        version: "1.0",
        description: "Esta API proporciona servicios para la gestión de voluntariado, incluyendo la administración de organizaciones y voluntarios.",
        documentation: "/api-docs",
        endpoints: [
            "/v1/api/login",
            "/v1/api/fundaciones",
            "/v1/api/habilidades",
            "/v1/api/ubicaciones",
            "/v1/api/voluntarios",
            "/v1/api/actividades",
        ]
    });
});

app.use('/v1/api', routes);