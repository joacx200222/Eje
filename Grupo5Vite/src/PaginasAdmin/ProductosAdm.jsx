import BuscadorProducto from '../Componentes5/ProductosAdm/BuscadorProducto'
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'

import Footer from '../Componentes5/ProductosAdm/footerAdm'

import TablaProductos from '../Componentes5/ProductosAdm/TablaProductos'

import SeccionProducto from '../Componentes5/ProductosAdm/SeccionProducto'

import Paginacion from '../Componentes5/ProductosAdm/Paginacion'

import '../css/Dashboard.css'

function ProductosAdm (){
    return (
    <>
   

            <Headeradm/>
            <Nav/>
            <SeccionProducto/>
            <TablaProductos/>
            <Paginacion/>
            <br /><br />
            <Footer/>
            

       
    </>
    )
}

export default ProductosAdm