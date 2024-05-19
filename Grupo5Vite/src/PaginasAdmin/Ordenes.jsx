import React from 'react'
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'
import Seccion from '../Componentes5/Dashboard/Seccion'
import Footer from '../Componentes5/ProductosAdm/footerAdm'

import '../css/Dashboard.css'

function Ordenes (){
    return (
    <>
        <div>
            <Headeradm/>
            <Nav/>
            <Seccion/>
            <div>ORDENES</div>
            <Footer/>
        </div>
    </>
    )
}
export default Ordenes;