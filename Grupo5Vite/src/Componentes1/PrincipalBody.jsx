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
            <ul>
                <li><img src={Garfield} className='ImagenItem9' alt="imagenitem9"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem10' alt="imagenitem10"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem10' alt="imagenitem10"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem11' alt="imagenitem11"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem12' alt="imagenitem12"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
        </ul>
        <hr/>

        <h3>Nuevos</h3>
        <ul className='PrincipalBody2'>
            <ul>
                <li><img src={Garfield} className='ImagenItem13' alt="imagenitem13" /></li>
                <li><p>Colección de items 1: Especiales para regresar al colegio</p></li>
                <li><h6><p><link to ="/"/>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem14' alt="imagenitem14" /></li>
                <li><p>Colección de items 2: Especiales para la casa</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem15' alt="imagenitem15" /></li>
                <li><p>Colección de items 3: Especiales para los pequeños</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
        </ul>    
        <ul className='PrincipalBody3'>
            <ul>
                <li><img src={Garfield}className='ImagenItem16' alt="imagenitem16" /></li>
                <li><p>Item 1</p></li>
                <li><h6><p><link to ="/"/>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem17' alt="imagenitem17" /></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem18' alt="imagenitem18" /></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem19' alt="imagenitem19" /></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem20' alt="imagenitem20" /></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
        </ul>    
        
        </>

    )
}

export default PrincipalBody