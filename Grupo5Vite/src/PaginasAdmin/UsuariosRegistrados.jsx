import React from 'react'
import HeaderAdmin from '../Componentes6/Dashboard/HeaderAdmin'
import Nav from '../Componentes5/Dashboard/Nav'
import SeccionUsuariosReg from '../Componentes6/Dashboard/SeccionUsuariosReg'


import BuscadorUsuarios from '../Componentes6/Dashboard/BuscadorUsuarios'
import TablaUsuariosReg from '../Componentes6/Dashboard/TablaUsuariosReg'
import TablaUsuariosFinal from '../Componentes6/TablaUsuariosFinal/TablaUsuariosFinal'
import Paginacion from '../Componentes5/ProductosAdm/Paginacion'
import Footer from '../Componentes5/ProductosAdm/footerAdm'
import '../css/Dashboard.css'

function UsuariosRegistrados (){
    return (
    <>
        <div>
            <HeaderAdmin/>
            <Nav/>
            <SeccionUsuariosReg/>
            <BuscadorUsuarios/>
            <br />
            <TablaUsuariosReg/>
            <Paginacion/>
            <br /><br />
            <Footer/>
            
        </div>
    </>
    )
}
export default UsuariosRegistrados;