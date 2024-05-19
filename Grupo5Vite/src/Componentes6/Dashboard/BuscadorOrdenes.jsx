import React from 'react';
import '../../css/Dashboard.css';

function BuscadorOrdenes() {
    return (
        <main>
            <div className="buscador-container">
                <input type="text" className="buscador-ordenes" placeholder="Buscar por nombre o apellido de usuario o nro de orden..."/>
            </div>
        </main>
    );
}

export default BuscadorOrdenes;