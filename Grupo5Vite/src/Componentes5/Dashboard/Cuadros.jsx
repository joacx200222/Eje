import React from 'react'
import '../../css/Dashboard.css';

function Cuadros(){
    return (

        <>
    <main>
    <article>
    <div className="contenedor">
        <div className="cuadro">
            <p className="numero">68</p>
            <p className="texto">Órdenes del día de hoy</p>
        </div>
        <div className="cuadro" id="cuadro2">
            <p className="numero">12</p>
            <p className="texto">Usuarios nuevos</p>

        </div>
        <div className="cuadro" id="cuadro3">
            <p className="numero1">S/ 13,500.00</p>
            <p className="texto1">Ingresos de hoy</p>
        </div>
    </div>
    
    </article>
    </main>
        </>
    )
}

export default Cuadros