import React from 'react'
import { Link } from "react-router-dom";

function PaginaProductoPrincipal(){
    return(
        <>
        <br></br>
        <h4>Título del producto: Puede ser bastante largo</h4>
        <br></br>
        <p><h4 id="Subtitulo">Por: "" - Serie: ""</h4></p>

        <hr></hr>

        <nav className='derecha'>
            <div id="arriba_derecha">
                <h4>Disponible</h4>
                <p>S/...</p>
                <button type='button' id="AnadirCarritoBoton">Añadir al Carrito</button>
            </div>
        </nav>
        </>
    )
}

export default PaginaProductoPrincipal