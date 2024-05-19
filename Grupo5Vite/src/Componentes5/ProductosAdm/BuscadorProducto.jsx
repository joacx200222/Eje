import React from 'react';
import '../../css/Dashboard.css';

function BuscadorProducto() {
    return (
        <main>
        <div className="buscador-container">
            <input type="text" className="buscador-producto" placeholder="Buscar por Id, serie o detalle..."/>
        </div>
        </main>
    );
}

export default BuscadorProducto;