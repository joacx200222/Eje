import React from 'react'
import Cuadros from '../Componentes5/Cuadros'
import Headeradm from '../Componentes5/Headeradm'
import Nav from '../Componentes5/Nav'
import Seccion from '../Componentes5/Seccion'
import Pie from '../ComponentesGeneral/Pie'
import '../css/Dashboard.css'

function AdminDashBoard (){
    return (
    <>
        <div>
            <Headeradm/>
            <Nav/>
            <Seccion/>
            <Cuadros/>
            <Pie/>

        </div>
    </>
    )
}
export default AdminDashBoard