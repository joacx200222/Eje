
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'

import Footer from '../Componentes5/ProductosAdm/footerAdm'

import SeccionDetalle from '../Componentes5/DetalleProducto/SeccionDetalle'
import DetalleProducto from '../Componentes5/DetalleProducto/DetalleProducto'
import '../css/Dashboard.css'

function VerProducto (){
    return (
    <>
   

            <Headeradm/>
            <Nav/>
            <SeccionDetalle/>
            <DetalleProducto/>
            <br /><br />
            <Footer/>
            

       
    </>
    )
}

export default VerProducto