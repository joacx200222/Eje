import React from 'react';
import '../../css/Dashboard.css';

const TablaProductos = () => {
    const datos = [
        {
            id: 1,
            detalle: 'Manga Dragon Ball Vol 1...',
            serie: 'Dragon Ball',
            precio: 'S/ 30.99',
            fechaRegistro: '11/02/2022',
            stock: 12,
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 1,
            detalle: 'Manga Dragon Ball Vol 1...',
            serie: 'Dragon Ball',
            precio: 'S/ 30.99',
            fechaRegistro: '11/02/2022',
            stock: 12,
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 1,
            detalle: 'Manga Dragon Ball Vol 1...',
            serie: 'Dragon Ball',
            precio: 'S/ 30.99',
            fechaRegistro: '11/02/2022',
            stock: 12,
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 1,
            detalle: 'Manga Dragon Ball Vol 1...',
            serie: 'Dragon Ball',
            precio: 'S/ 30.99',
            fechaRegistro: '11/02/2022',
            stock: 12,
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        
    ];

    return (
    
        <div className="main-content">
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
                        {datos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.detalle}</td>
                                <td>{producto.serie}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.fechaRegistro}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.estado}</td>
                                <td>{producto.acciones}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
       
    );
};

export default TablaProductos;