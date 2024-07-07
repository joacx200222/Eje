const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3080;

app.use(cors());
app.use(bodyParser.json());

let estadisticas = {
    ordenesHoy: 68,
    usuariosNuevos: 12,
    ingresosHoy: 13500,
};

// Obtener estadísticas del dashboard
app.get('/api/dashboard', (req, res) => {
    res.json(estadisticas);
});

// Actualizar estadísticas del dashboard
app.put('/api/dashboard', (req, res) => {
    estadisticas = req.body;
    res.json(estadisticas);
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});