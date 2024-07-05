const express = require('express');
const db = require('../Backend/db/models/index.js')
const usuario = ('../Backend/db/models/usuario.js')

// Para usar funciones
const sequelize = require('sequelize')
const ruta = express.Router();

ruta.get('/api/login', async (req, res) => {
    const { correo, contraseña } = req.body;

    try {
        let user = await db.usuario.findOne({ where: { correo, contraseña } });

        if (user) {
            res.status(200).json({ message: 'Login exitoso' });
        } else {
            res.status(401).json({ message: 'Credenciales invalidas' });
        }
    } catch (error) {
        res.status(404).json({ message: 'Internal server error' });
    }
});


module.exports = ruta



