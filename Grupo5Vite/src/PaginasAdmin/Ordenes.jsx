import React from 'react'
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'
import Footer from '../Componentes5/ProductosAdm/footerAdm'

import '../css/Dashboard.css'
import Seccion6 from '../Componentes6/Dashboard/Seccion6'
import BuscadorOrdenes from '../Componentes6/Dashboard/BuscadorOrdenes'
import TablaOrdenes from '../Componentes6/Dashboard/TablaOrdenes'
import Paginacion from '../Componentes5/ProductosAdm/Paginacion'

function Ordenes (){
    return (
    <>
        <div>
            <Headeradm/>
            <Nav/>
            <Seccion6/>
            <br />
            <TablaOrdenes/>
            <Paginacion/>
            <br /><br />
            <Footer/>
        </div>
    </>
    )
}
export default Ordenes;