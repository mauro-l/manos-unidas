import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

if (!dbUser || !dbPassword || !dbHost || !dbName) {
    throw new Error('Las variables de entorno de la base de datos no están definidas correctamente');
}

const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority&appName=${dbName}`;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('No se pudo conectar a MongoDB', err);
        process.exit(1); // Salir del proceso con fallo
    }
};

export default connectDB;
