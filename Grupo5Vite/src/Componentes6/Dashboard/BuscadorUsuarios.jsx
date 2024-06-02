import React from 'react';
import '../../css/Dashboard.css';

function BuscadorUsuarios({ onSearch }) {
    return (
        <div className="buscador-container">
            <input
                type="text"
                className="buscador-usuarios"
                placeholder="Buscar por correo, nombre o apellidos..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}

export default BuscadorUsuarios;
