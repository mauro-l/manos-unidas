import mongoose from 'mongoose';

const categoriaSchema = new mongoose.Schema({
    categoria_id: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

export default Categoria;