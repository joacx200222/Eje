const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3080;

app.use(cors());
app.use(bodyParser.json());

let productos = [
    {
        id: 1,
        detalle: 'Producto 1',
        serie: 'SER001',
        precio: 100,
        fechaRegistro: '2024-07-07',
        stock: 50,
        estado: 'Activo',
    },
    {
        id: 2,
        detalle: 'Producto 2',
        serie: 'SER002',
        precio: 150,
        fechaRegistro: '2024-07-07',
        stock: 30,
        estado: 'Activo',
    },
];

// Todos los productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// Producto por ID
app.get('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find((p) => p.id === id);
    if (!producto) {
        res.status(404).send('Producto no encontrado');
    } else {
        res.json(producto);
    }
});

// Agregar producto
app.post('/api/productos', (req, res) => {
    const producto = req.body;
    producto.id = productos.length + 1; // Genera un nuevo ID
    productos.push(producto);
    res.status(201).json(producto);
});

// Actualizar producto 
app.put('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productoIndex = productos.findIndex((p) => p.id === id);
    if (productoIndex === -1) {
        res.status(404).send('Producto no encontrado');
    } else {
        productos[productoIndex] = req.body;
        productos[productoIndex].id = id;
        res.json(productos[productoIndex]);
    }
});

// Endpoint para eliminar un producto
app.delete('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    productos = productos.filter((p) => p.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Servidor backend corriendo en http://localhost:${port}`);
});