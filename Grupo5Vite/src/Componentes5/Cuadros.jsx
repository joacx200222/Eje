import React from 'react'
import '../css/Dashboard.css'

function Cuadros(){
    return (
        <>
            <div className="dashboard">
                <div className="numero">68</div>
                <div className="texto">Órdenes del día de hoy</div>
            </div>
            
            <div className="dashboard">
                <div className="numero">12</div>
                <div className="texto">Usuarios nuevos</div>
            </div>
            
            <div className="dashboard">
                <div className="numero1">S/ 13,500.00</div>
                <div className="texto">Ingresos de hoy</div>
            </div>
        </>
    )
}

export default Cuadros