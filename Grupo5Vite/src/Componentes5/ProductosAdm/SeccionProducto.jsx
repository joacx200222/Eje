import React from 'react';
import '../../css/Dashboard.css';
import { Link } from 'react-router-dom';

function SeccionProducto() {
    return (
        <main>
            <article className="tituloH2-background">
                <h2 className="tituloH2-text"><strong>Productos</strong></h2>    
                <Link to="/AgregarProducto"> <p className="agregarProducto">+ Agregar Producto</p> </Link>
            </article>
            </main>
    );
}

export default SeccionProducto;

