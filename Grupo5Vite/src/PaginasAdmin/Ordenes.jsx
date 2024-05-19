import React from 'react'
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'
import Seccion6 from '../Componentes6/Dashboard/Seccion6'
import BuscadorOrdenes from '../Componentes6/Dashboard/BuscadorOrdenes'
import Paginacion from '../Componentes5/ProductosAdm/Paginacion'
import TablaOrdenes from '../Componentes6/Dashboard/TablaOrdenes'
import Footer from '../Componentes5/ProductosAdm/footerAdm'

import '../css/Dashboard.css'

function Ordenes (){
    return (
    <>
        <div>
            <Headeradm/>
            <Nav/>
            <Seccion6/>
            <BuscadorOrdenes/>
            <TablaOrdenes/>
            <Paginacion/>
            <br /><br />
            <Footer/>
        </div>
    </>
    )
}
export default Ordenes;