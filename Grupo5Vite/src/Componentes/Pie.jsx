import React from 'react'
import '../App.css'


function Pie(){

    return(
        <>
        <footer>
            <ul className='primerfooter'>
                <li id="LaTienditaDelAbuelo">LA TIENDITA DEL ABUELO</li>
                <li>© 2010 - 2020</li>
                <li>Privacy - Terms</li>

            </ul>
            <ul className='segundofooter'>
                <li id="Segundotitle">Cuenta</li>
                <li>Login</li>
                <li>Registro</li>
                <li>Carrito</li>

            </ul>
            <ul className='tercerofooter'>
                <li id="tercerotitle">Productos</li>
                <li>Mas vendidos</li>
                <li>Nuevos</li>
                <li>Ofertas</li>

            </ul>
            <ul className='cuartofooter'>
                <li id="cuartotitle">Ayuda</li>
                <li> Acerca de Nosotros</li>
                <li> Politica de Envio</li>
                <li> FAQ </li>

            </ul>
            <ul className='quintofooter'>
                <li><img src="../assets/imagenes/facebook.png"></img></li> 
                <li><img src="../assets/imagenes/instagram.png"></img></li> 
                <li><img src="../assets/imagenes/twitter.png"></img></li> 
                <li><img src="../assets/imagenes/youtube.png"></img></li> 
            </ul>
        </footer>
        </>
    )
}
export default Pie