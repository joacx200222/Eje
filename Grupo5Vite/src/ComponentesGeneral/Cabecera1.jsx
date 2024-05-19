import React from 'react'
import Carrito from '../assets/imagenes/carrito.png'
import { Link } from "react-router-dom";
import '../App.css'

const links = [

]

function Cabecera1(){
    return (
        <>
        <header>       
            <ul id="izquierda">
                <li className='title' id="Titulo" ><Link to = "/"> <strong>Tienda</strong> </Link></li>
                <li>Más vendidos</li>
                <li>Nuevos</li>
                <li>Ofertas</li>
                <li><Link to = "/Checkoutv"> <strong>Checkout</strong> </Link></li>
            </ul>
            <ul id="derecha">
                <li><Link to = "/carritocompras"><img src={Carrito} className="CarritoCompras" alt="CarritodeCompras"/></Link></li>
                <li>Ayuda</li>
                <li><Link to = "/login"><button id="Micuenta">Mi Cuenta</button></Link></li>
            </ul> 
        </header>      
        </>
    )
}

export default Cabecera1