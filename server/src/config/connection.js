import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbUri = process.env.DB_URl;

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
