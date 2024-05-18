import React from 'react'
import Headeradm from '../Componentes5/Headeradm'
import Nav from '../Componentes5/Nav'
import Seccion from '../Componentes5/Seccion'
import Footer from '../Componentes5/footerAdm'

import '../css/Dashboard.css'

function Productos (){
    return (
    <>
        <div>
            <Headeradm/>
            <Nav/>
            <Seccion/>
            <div>PRODUCTOS</div>
            <Footer/>
        </div>
    </>
    )
}
export default Productos;