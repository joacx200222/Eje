import React from 'react'
import { Link } from "react-router-dom";

function PrincipalBody(){
    return(
        <>
        <ul className='PrincipalBody'>
            <ul>
                <li><img src="" className='ImagenItem1' alt="imagenitem1" /></li>
                <li><p>Colección de items 1: Especiales para regresar al colegio</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src="" className='ImagenItem2' alt="imagenitem2" /></li>
                <li><p>Colección de items 2: Especiales para la casa</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src="" className='ImagenItem3' alt="imagenitem3" /></li>
                <li><p>Colección de items 3: Especiales para los pequeños</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
        </ul>
        </>

    )
}

export default PrincipalBody