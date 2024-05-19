import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import '../../css/Dashboard.css';
import datos from '../../Data/productos.json';

const TablaProductos = () => {
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (event) => {
        setBusqueda(event.target.value.toLowerCase());
    };

    const resultados = datos.filter((producto) =>
        producto.id.toString().includes(busqueda) ||
        producto.serie.toLowerCase().includes(busqueda) ||
        producto.detalle.toLowerCase().includes(busqueda)
    );

    return (
        <div className="main-content">
            <div className="buscador-container">
                <input
                    type="text"
                    className="buscador-producto"
                    placeholder="Buscar por Id, serie o detalle..."
                    value={busqueda}
                    onChange={handleChange}
                />
            </div>
            <div className="tabla-container">
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Detalle</th>
                            <th>Serie</th>
                            <th>Precio</th>
                            <th>Fecha de Registro</th>
                            <th>Stock</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.detalle}</td>
                                <td>{producto.serie}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.fechaRegistro}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.estado}</td>
                                <td>
                                    <Link to={`/VerProducto`} >Ver</Link>
                                    <Link to={`/`} >Desactivar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablaProductos;