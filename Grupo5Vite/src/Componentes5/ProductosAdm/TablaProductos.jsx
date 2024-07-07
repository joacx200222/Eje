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



/*

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Dashboard.css';

const ProductoFila = ({ producto }) => (
    <tr key={producto.id}>
        <td>{producto.id}</td>
        <td>{producto.nombre}</td>
        <td>{producto.fabricante}</td>
        <td>{producto.precio}</td>
        <td>{producto.serie}</td>
        <td>{producto.tamano}</td>
        <td>{producto.material}</td>
        <td>{producto.movilidad ? 'Sí' : 'No'}</td>
        <td>{producto.piezas}</td>
        <td>{producto.combinable ? 'Sí' : 'No'}</td>
        <td>
            <img src={producto.imagen} alt={Imagen de ${producto.nombre}} width={50} height={50} />
        </td>
        <td>
            <Link to={/VerProducto/${producto.id}}>Ver</Link>
            <Link to="#">Desactivar</Link>
        </td>
    </tr>
);

const TablaProductos = () => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await fetch('http://localhost:3080/api/productos'); // Ajusta esto si tu endpoint es diferente
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(Error: ${errorData.message});
                }
                const data = await response.json();
                setProductos(data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    const handleChange = (event) => {
        setBusqueda(event.target.value.toLowerCase());
    };

    const resultados = productos.filter((producto) =>
        producto.id.toString().includes(busqueda) ||
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.serie.toLowerCase().includes(busqueda)
    );

    return (
        <div className="main-content">
            <div className="buscador-container">
                <input
                    type="text"
                    className="buscador-producto"
                    placeholder="Buscar por Id, nombre o serie..."
                    value={busqueda}
                    onChange={handleChange}
                />
            </div>
            {loading && <p>Cargando productos...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <div className="tabla-container">
                    <table className="tabla-productos">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Fabricante</th>
                                <th>Precio</th>
                                <th>Serie</th>
                                <th>Tamaño</th>
                                <th>Material</th>
                                <th>Movilidad</th>
                                <th>Piezas</th>
                                <th>Combinable</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map((producto) => (
                                <ProductoFila key={producto.id} producto={producto} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TablaProductos;¨

*/