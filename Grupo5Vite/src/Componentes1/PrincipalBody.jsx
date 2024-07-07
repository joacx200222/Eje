import React from 'react'
import { Link } from "react-router-dom";
import Goku from '../assets/imagenes/20357871.webp'
import BabyYoda from '../assets/imagenes/segundaimagen.png'
import Garfield from '../assets/imagenes/terceraimagen.png'


function PrincipalBody(){


    return(
        <>
        <ul className='PrincipalBody'>
            <ul>
                <li><img src={Goku} className='ImagenItem1' alt="imagenitem1" width={370} height={370}/></li>
                <li><p>Colección de items 1: Especiales para regresar al colegio</p></li>
                <li><h6><p><link to ="/"/>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={BabyYoda} className='ImagenItem2' alt="imagenitem2" /></li>
                <li><p>Colección de items 2: Especiales para la casa</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Goku} className='ImagenItem3' alt="imagenitem3" width={370} height={370}/></li>
                <li><p>Colección de items 3: Especiales para los pequeños</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
        </ul>
        <br/><br/>
        <ul className='PrincipalBody1'>
            <ul>
                <li><img src={Garfield} className='ImagenItem4' alt="imagenitem4"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem5' alt="imagenitem5"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem6' alt="imagenitem6"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem7' alt="imagenitem7"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem8' alt="imagenitem8"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
        </ul>
        
        
      
        
        </>

    )
}

export default PrincipalBody