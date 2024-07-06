const express = require('express');
const db = require('../../db/models/index.js');
const Usuario = db.usuario; 
const ruta = express.Router();

ruta.post('/api/register', async (req, res) => {
    const { nombre, apellido, correo, contraseña, tipo } = req.body;

    try {
        // Revisar si el email ya esta registrado
        const existingUser = await Usuario.findOne({ where: { correo } });
        if (existingUser) {
            return res.status(400).json({ message: 'El correo ya está registrado' });
        }

        // Crear el nuevo usuario
        const newUser = await Usuario.create({
            nombre,
            apellido,
            correo,
            contraseña, // Store the plain text password
            tipo,
        });

        res.status(201).json({ 
            message: 'Usuario registrado exitosamente', 
            user: newUser 
        }); 

    } catch (error) {
        console.error('Error al registrar usuario:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = ruta;