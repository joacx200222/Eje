import React from 'react'
import Carrito from '../assets/imagenes/carrito.png'
import { Link } from "react-router-dom";

function Cabecera1(){
    return (
        <>
        <header>
            <ul id="izquierda">
            <li id = "Título"><Link to = "/">Tienda</Link></li>
            <li>Más vendidos</li>
            <li>Nuevos</li>
            <li>Ofertas</li>
            </ul>
            <ul id="derecha">
            <li><Link to = "/Carrito">Tienda</Link><img src={Carrito} className="CarritoCompras" alt="CarritodeCompras"/></li>
            <li>Ayuda</li>
            <li><Link to = "/Cuenta">Tienda</Link><button id="Micuenta">Mi Cuenta</button></li>
            </ul> 
        </header>
        </>
    )
}

export default Cabecera1