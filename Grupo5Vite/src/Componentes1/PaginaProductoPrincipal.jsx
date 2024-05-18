import React from 'react'
import { Link } from "react-router-dom";
import "../css/PaginaProducto.css"

function PaginaProductoPrincipal(){
    return(
        <>
        <div>
            <h4>Título del producto: Puede ser bastante largo</h4>
            <h4 id="Subtitulo">Por: "" - Serie: ""</h4>
        </div>
        

        <hr></hr>

        <div className='ProductoContenido'>
            <nav id="arriba_derecha" className='ProductoContenidoE'>
                <h4 id="DisponibleTitulo"> Disponible</h4>
                <p id="Precio">S/...</p>
                <button type='button' id="AnadirCarritoBoton">Añadir al Carrito</button>
                <p id="textoCantidad">Cantidad</p>
                <p>Cantidad exacta</p>
                <p>Ver métodos de envío Disponibles</p>
                
            </nav>

            <div id= 'Detallado' className='ProductoContenidoE'>
                <h4>Descripción</h4>
                <h4>hola</h4>
                <p id="Detalletexto">Detalle...</p>
            </div>

            <div id='Caractericticas' className='ProductoContenidoE'>
                <h4>Características del producto:</h4>
                    <ul>
                        <li>Mide...</li>
                        <ol>Hecho en ...</ol>
                        <ol>De la serie ...</ol>
                        <ol>Articulado...</ol>
                        <ol>Mide...</ol>
                        <ol>... piezas distintas</ol>
                        <ol>... con otras figuras</ol>
                    </ul>
            </div>

        </div>

        </>
    )
}

export default PaginaProductoPrincipal