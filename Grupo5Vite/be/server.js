const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5173;

app.use(express.static(path.join(__dirname,'../src/')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const usersFilePath = path.join(__dirname, '..', 'src', 'Data', 'usuariosSebas.json');

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/Componentes8/Registro.jsx'));
  });

app.post('/register', (req, res) => {
  const { nombre, apellido, correo, pwd, cpwd } = req.body;

  if (pwd !== cpwd) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  const newUser = { nombre, apellido, correo, pwd };

  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading file' });
    }

    let users = JSON.parse(data || '[]');
    
    const userExists = users.some(user => user.correo === correo);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    users.push(newUser);

    fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing file' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
