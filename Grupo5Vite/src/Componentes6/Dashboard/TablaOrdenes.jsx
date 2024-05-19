import React from 'react';
import '../../css/Dashboard.css';

const TablaOrdenes = () => {
    const datos = [
        {
            id: 1,
            usuario: 'Juan Sanchez',
            fechaOrden: '11/03/2023',
            total: 'S/ 125.00',
            correo: 'altavista@123.com',
            estado: 'Entregado',
            acciones: 'Ver'
        },
        {
            id: 1,
            usuario: 'Juan Sanchez',
            fechaOrden: '11/03/2023',
            total: 'S/ 125.00',
            correo: 'altavista@123.com',
            estado: 'Entregado',
            acciones: 'Ver'
        },
        {
            id: 1,
            usuario: 'Juan Sanchez',
            fechaOrden: '11/03/2023',
            total: 'S/ 125.00',
            correo: 'altavista@123.com',
            estado: 'Entregado',
            acciones: 'Ver'
        },        
    ];

    return (
    
        <div className="main-content">
            <div className="tabla-container">
                <table className="tabla-ordenes">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Fecha de orden</th>
                            <th>Total</th>
                            <th>Correo</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((orden) => (
                            <tr>
                                <td>{orden.id}</td>
                                <td>{orden.usuario}</td>
                                <td>{orden.fechaOrden}</td>
                                <td>{orden.total}</td>
                                <td>{orden.correo}</td>
                                <td>{orden.estado}</td>
                                <td>{orden.acciones}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
       
    );
};

export default TablaOrdenes;