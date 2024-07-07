const express = require("express");
const db = require("../../db/models/index.js");
const seriesRoute = express.Router();

seriesRoute.post("/agregar", async (req, res) => {
  const { nombre, descripcion, imagen } = req.body;

  try {
    if (!nombre || !descripcion) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    let nuevaSerie = await db.Series.create({
      nombre,
      descripcion,
      imagen,
    });

    return res
      .status(200)
      .json({ msg: "Serie creada exitosamente", serie: nuevaSerie });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error del servidor, agregar serie" });
  }
});

seriesRoute.get("/all", async (req, res) => {
  try {
    const series = await db.Series.findAll();

    return res.status(201).json({ series: series });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Error del servidor, listar series" });
  }
});

seriesRoute.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, imagen } = req.body;

    const series = await db.Series.findByPk(id);

    if (!series) {
      return res.status(404).json({ msg: "La serie no ha sido encontrada" });
    }

    series.nombre = nombre;
    series.descripcion = descripcion;
    series.imagen = imagen;
    await series.save();

    res
      .status(201)
      .json({ msg: "Serie exitosamente actualizada", serie: series });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "error en el servidor, actualizar serie" });
  }
});

module.exports = seriesRoute;
