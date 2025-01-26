import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

dotenv.config();

const CSS_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gestión de Voluntariado - Manos Unidas',
            version: '1.0.0',
            description: 'Esta API proporciona servicios para la gestión de voluntariado, incluyendo la administración de organizaciones y voluntarios.',
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3001}/v1/api`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default (app) => {
    app.use(
        '/api-docs', 
        swaggerUi.serve, 
        swaggerUi.setup(swaggerSpec, {
            customCss:
            '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
            customCssUrl: CSS_URL 
        }));
};