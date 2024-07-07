const express = require("express");
const db = require("../../db/models/index.js");
const usuario = "../Backend/db/models/usuario.js";

const sequelize = require("sequelize");
const ruta = express.Router();

ruta.get("/findAllxId/:idUser", async (req, res) => {
  id = req.params.idUser;
  console.log("Consulta de peliculas por PK !");
  let m = await db.usuario.findByPk(id);
  if (m) {
    console.log(m);
    res.status(200).json(m);
  } else {
    res.status(404).json({ msg: "No se encontro ID" });
  }
});

ruta.post("/register", async (req, res) => {
  const { nombre, apellido, correo, contraseña, tipo } = req.body;

  try {
    if (!nombre || !apellido || !correo || !contraseña || !tipo) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }
    let nuevoUsuario = await db.usuario.create({
      nombre,
      apellido,
      correo,
      contraseña,
      tipo,
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error del servidor" });
  }
  //COMANDO CURL PARA CREAR NUEVO USUARIO CON CURL Y FUNCIONA GENTE
  //curl -X POST "http://localhost:3080/api/basedatos/register" -H "Content-Type: application/json" -d "{\"nombre\": \"Nani\", \"apellido\": \"Grupo5\", \"correo\": \"juan.perez@example.com\", \"contraseña\": \"securepassword123\", \"tipo\": \"usuario\"}"
});
ruta.post("/login", async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await db.usuario.findOne({ where: { correo } });

    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    if (contraseña !== usuario.contraseña) {
      return res.status(401).json({ msg: "Contraseña incorrecta" });
    }
    res.status(200).json({
      msg: "Inicio de sesión exitoso",
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        correo: usuario.correo,
        tipo: usuario.tipo,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error del servidor" });
  }
});
ruta.post("/cambiarPassword", async (req, res) => {
  const { correo } = req.body;

  try {
    const usuario = await db.usuario.findOne({ where: { correo } });

    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    usuario.contraseña = "1235";
    await usuario.save();

    res.status(200).json({ msg: "Contraseña cambiada exitosamente" });
  } catch (error) {
    console.error("Error al cambiar la contraseña:", error);
    res.status(500).json({ msg: "Error del servidor" });
  }
});

ruta.put("/changePass", async (req, res) => {
  try {
    const { id, lastPass, newPass, newPassTwo } = req.body;

    const usuario = await db.usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }

    if (lastPass != usuario.contraseña) {
      res.status(403).json({ msg: "la password actual es incorrecta" });
    }

    if (newPassTwo != newPass) {
      return res.status(400).json({ msg: "password repetida incorrecta" });
    }

    usuario.contraseña = newPass;

    await usuario.save();

    res.status(201).json({ msg: "password exitosamente cambiada" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "error en el servidor, change pass" });
  }
});

ruta.put("/updateUser", async (req, res) => {
  try {
    const { id, nombre, correo, apellido } = req.body;

    const usuario = await db.usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ msg: "no usuario encontrado" });
    }

    if (!nombre || !correo || !apellido) {
      return res.status(400).json({ msg: "completa todos los campos" });
    }

    usuario.nombre = nombre;
    usuario.correo = correo;
    usuario.apellido = apellido;

    await usuario.save();

    return res
      .status(201)
      .json({ msg: "usuario corrrectamente actualizado", user: usuario });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "error del servidor update user" });
  }
});

ruta.get('/findAllusuarios', async (req, res) => {
  try {
    const usuarios = await db.usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = ruta;
