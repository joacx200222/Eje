const express = require("express");
const router = express.Router();
const ruta = express.Router();
const db = require("../../db/models/index.js");
const Product = db.product;
const User = db.product;



  // Ruta para obtener la cantidad total de productos
router.get('/countProducts', async (req, res) => {
    try {
      const count = await Product.count(); 
      res.status(200).json({ count }); 
    } catch (error) {
      console.error('Error al obtener cantidad de productos:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }

  });
  router.get('/countUsers', async (req, res) => {
    try {
      const count = await User.count(); 
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error al obtener cantidad de usuarios:', error);
      res.status(500).json({ message: 'Error interno del servidor al contar usuarios' });
    }
  });



router.get('/sumProductsPrices', async (req, res) => {
  try {
    const sumResult = await Product.sum('precio');
    res.status(200).json({ sum: sumResult }); 
  } catch (error) {
    console.error('Error al obtener la suma de precios de productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll({
            attributes: ['id', 'nombre', 'serie', 'precio', 'createdAt'] 
        });
        res.json(products);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

router.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener producto:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});


router.post('/add', async (req, res) => {
    try {
        const {
            nombre,
            marca,
            serie,
            precio,
            tipo,
            stock,
           
        } = req.body;

   
        const newProduct = await Product.create({
            nombre,
            marca,
            serie,
            precio,
            tipo,
            stock,
           
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al agregar producto:', error);
        res.status(500).json({ message: 'Error al agregar producto' });
    }
});

module.exports = router;