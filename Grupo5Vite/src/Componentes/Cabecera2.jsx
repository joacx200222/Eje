import React from 'react'
import { Link } from "react-router-dom";

function Cabecera2(){
    return (
        <>
        <header>
            <li id = "Título"><Link to = "/">Tienda</Link></li>
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