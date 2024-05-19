import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'

function Cabecera2(){
    return (
        <>
        <header>
        <ul id="izquierda">
            <li className='title' id="Titulo" ><Link to = "/"> <strong>Tienda</strong> </Link></li>
        </ul>        
        </header>
        </>
    )
}

export default Cabecera2