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
    res.send('Hola Mundo!');
});

app.use('/v1/api', routes);
