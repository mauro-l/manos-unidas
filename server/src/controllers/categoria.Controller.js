import Categoria from '../models/categoria.model.js';

// Obtener todas las categorías
export const getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};//meterle

// Obtener una categoría por ID
export const getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findById(req.params.id);
        if (!categoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva categoríass
export const createCategoria = async (req, res) => {
    try {


        const { categoria_id, nombre, descripcion } = req.body;

        if (!categoria_id || !nombre || !descripcion) {
            return res.status(400).json({ message: "Todos los campos son obligatorios." });
        }

        const newCategoria = new Categoria(req.body)

        await newCategoria.save();
        res.status(201).json(newCategoria);
    } catch (error) {
        console.error("Error en createCategoria:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Actualizar una categoría por ID
export const updateCategoria = async (req, res) => {
    try {
        const updatedCategoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.status(200).json(updatedCategoria);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar una categoría por ID
export const deleteCategoria = async (req, res) => {
    try {
        const deletedCategoria = await Categoria.findByIdAndDelete(req.params.id);
        if (!deletedCategoria) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.status(200).json({ message: 'Categoría eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};