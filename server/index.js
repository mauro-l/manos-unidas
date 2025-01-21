import express from 'express';
import connectDB from './src/config/connection.js';
const app = express();

// Routes
//app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000

connectDB()
    .then(async () => {
        server.listen(PORT, () => {
            console.log(`Server running port ${PORT}`)
        });
    })
    .catch(() => {
        process.exit(1); // Salir del proceso con fallo
    });
