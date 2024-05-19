
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'
import Footer from '../Componentes5/ProductosAdm/footerAdm'
import SeccionAproducto from '../Componentes5/AgregarProducto/SeccionAproducto'
import CasillasProducto from '../Componentes5/AgregarProducto/CasillasProducto'
import '../css/Dashboard.css'

function AgregarProducto (){
    return (
    <>
   

            <Headeradm/>
            <Nav/>
            <SeccionAproducto/>
            <CasillasProducto/>
            <Footer/>
            

       
    </>
    )
}

export default AgregarProducto