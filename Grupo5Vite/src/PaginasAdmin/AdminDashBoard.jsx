import Cuadros from '../Componentes5/Dashboard/Cuadros'
import Headeradm from '../Componentes5/Dashboard/Headeradm'
import Nav from '../Componentes5/Dashboard/Nav'
import Footer from '../Componentes5/ProductosAdm/footerAdm'
import Seccion from '../Componentes5/Dashboard/Seccion'

import '../css/Dashboard.css'

function AdminDashBoard (){
    return (
    <>
   

            <Headeradm/>
            <Nav/>
            <Seccion/>
            <Cuadros/>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer/>
            

       
    </>
    )
}

export default AdminDashBoard