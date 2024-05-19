import React from 'react'
import HeaderAdmin from '../Componentes6/Dashboard/HeaderAdmin'
import Nav from '../Componentes5/Dashboard/Nav'
import Seccion from '../Componentes5/Dashboard/Seccion'
import Footer from '../Componentes5/ProductosAdm/footerAdm'

import '../css/Dashboard.css'

function UsuariosRegistrados (){
    return (
    <>
        <div>
            <HeaderAdmin/>
            <Nav/>
            <Seccion/>
            <div>USUARIOS REGISTRADOS</div>
            <Footer/>
        </div>
    </>
    )
}
export default UsuariosRegistrados;