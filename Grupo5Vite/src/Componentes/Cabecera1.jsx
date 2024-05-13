import React from 'react'
import Carrito from '../assets/imagenes/carrito.png'
import { Link } from "react-router-dom";
import '../App.css'

function Cabecera1(){
    return (
        <>
        <header>
            <ul id="izquierda">
                <li id="Titulo" ><strong><Link to = "/">Tienda</Link></strong></li>
                <li>Más vendidos</li>
                <li>Nuevos</li>
                <li>Ofertas</li>
            </ul>
            <ul id="derecha">
                <li><Link to = "/Carrito"><img src={Carrito} className="CarritoCompras" alt="CarritodeCompras"/></Link></li>
                <li>Ayuda</li>
                <li><Link to = "/Cuenta"><button id="Micuenta">Mi Cuenta</button></Link></li>
            </ul> 
        </header>
        
        </>
    )
}

export default Cabecera1