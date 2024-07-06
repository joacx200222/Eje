const express = require('express');
const db = require('../../db/models/index.js');
const Product = db.product; // Ensure this model name is accurate
const ruta = express.Router();

ruta.post('/api/products', async (req, res) => {
    const { nombre, fabricante, precio, serie, tamano, material, movilidad, piezas, combinable, imagen } = req.body;

    try {
        // Revisar si el producto ya esta registrado
        const existingProduct = await Product.findOne({ where: { nombre } });
        if (existingProduct) {
            return res.status(400).json({ message: 'Ya existe un producto con ese nombre' });
        }

        // Crear el nuevo producto
        const newProduct = await Product.create({
            nombre,
            fabricante,
            precio,
            serie,
            tamano,
            material,
            movilidad,
            piezas,
            combinable,
            imagen
        });

        res.status(201).json({ 
            message: 'Producto registrado exitosamente', 
            product: newProduct 
        });

    } catch (error) {
        console.error('Error al registrar producto:', error); 
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = ruta;
