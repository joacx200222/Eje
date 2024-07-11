const express = require("express");
const db = require("../../db/models/index.js"); // Asegúrate de que esta ruta es correcta
const Product = db.product; // `product` en minúscula si sigue el nombre del modelo definido
const ruta = express.Router();
const { Sequelize, Op } = require('sequelize');

// Ruta para crear un nuevo producto
ruta.post("/agregar", async (req, res) => {
  const {
    nombre,
    fabricante,
    precio,
    serie,
    tamano,
    material,
    movilidad,
    piezas,
    combinable,
    imagen,
  } = req.body;

  try {
    // Revisar si el producto ya está registrado
    const existingProduct = await Product.findOne({ where: { nombre } });
    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "Ya existe un producto con ese nombre" });
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
      imagen,
    });

    res.status(201).json({
      message: "Producto registrado exitosamente",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error al registrar producto:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Ruta para obtener un producto por ID
ruta.get("/findAllxId/:idProducto", async (req, res) => {
  const id = req.params.idProducto;
  console.log("Consulta de productos por PK !");
  try {
    const product = await Product.findByPk(id); // Asegúrate de que `Product` está definido correctamente
    if (product) {
      console.log(product);
      res.status(200).json(product);
    } else {
      res.status(404).json({ msg: "No se encontró ID" });
    }
  } catch (error) {
    console.error("Error al buscar producto:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

ruta.get('/findByName/:nombreProducto', async (req, res) => {
  const nombre = req.params.nombreProducto;
  console.log("Consulta de productos por nombre");
  try {
    const products = await Product.findAll({
      where: {
        nombre: {
          [Op.like]: `%${nombre}%` // Utiliza el operador `like` para buscar coincidencias parciales
        }
      }
    });
    if (products.length > 0) {
      console.log(products);
      res.status(200).json(products);
    } else {
      res.status(404).json({ msg: "No se encontraron productos con ese nombre" });
    }
  } catch (error) {
    console.error("Error al buscar productos por nombre:", error.message);
    console.error(error.stack);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});



ruta.get("/all", async (req, res) => {
  try {
    const productos = await Product.findAll();
    if (productos) {
      res.status(200).json(productos);
    } else {
      re.status(404).json({ msg: "no hay ningun producto" });
    }
  } catch (error) {
    console.error(error);
  }
});



module.exports = ruta;
