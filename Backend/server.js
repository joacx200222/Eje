const express = require("express")
const bodyParser = require("body-parser")
const path = require("path") 

const cors = require('cors')

const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

const whitelist = ["http://localhost:5173"]
app.use(cors(whitelist))

// Agregar el servicio de paginas web. PETICIONES LLEGAN
app.get('/', (req, res) => {   //petición de llegada con 2 parametro (req = data que estoy enviando, res = data a devover a cliente)
    res.sendFile( path.join(__dirname,'./static/index.html')) //cuando se llama a ruta
})

// Agregamos API's
app.get( '/api/usuarios', (req, res) => {
    res.json( users ) //devuelve la lista de users
})

//agregamos data
app.post( '/api/usuarios/agregar', (req, res) => {
    const usuario = req.body.user //user es el nombre
    users.push(usuario)
    res.json( "usuario agregado ")
})