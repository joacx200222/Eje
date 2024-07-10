// TablaProductos.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Dashboard.css';

const TablaProductos = () => {
    const [busqueda, setBusqueda] = useState("");
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('http://localhost:3080/api/dashboard/products');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Error: ${errorData.message}`);
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
                setError('Error al obtener productos');
            }
        };

        fetchProductos();
    }, []);

    const handleChange = (event) => {
        setBusqueda(event.target.value.toLowerCase());
    };

    const resultados = productos.filter((producto) =>
        producto.id.toString().includes(busqueda) ||
        producto.serie.toLowerCase().includes(busqueda) ||
        producto.name.toLowerCase().includes(busqueda)
    );

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="main-content">
            <div className="buscador-container">
                <input
                    type="text"
                    className="buscador-producto"
                    placeholder="Buscar por Id, serie o nombre..."
                    value={busqueda}
                    onChange={handleChange}
                />
            </div>
            <div className="tabla-container">
                <table className="tabla-productos">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Serie</th>
                            <th>Precio</th>
                            <th>Fecha de Registro</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.serie}</td>
                                <td>{producto.precio}</td>
                                <td>{new Date(producto.createdAt).toLocaleDateString()}</td>
                                <td>activo</td>
                                <td>
                                    <Link to={`/VerProducto/${producto.id}`}>Ver</Link>
                                    <Link to={`/`}>Desactivar</Link>
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