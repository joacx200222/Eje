import React from 'react';
import '../../css/Dashboard.css';

function BuscadorUsuarios() {
    return (
        <main>
            <div className="buscador-container">
                <input type="text" className="buscador-usuarios" placeholder="Buscar por correo, nombre o apellidos..."/>
            </div>
        </main>
    );
}

export default BuscadorUsuarios;