import React from 'react';
import '../../css/Dashboard.css';

const TablaUsuarios = () => {
    const datos = [
        {
            id: 1,
            nombre: 'Manolo',
            apellido: 'Salas',
            correo: 'msalas12@hotmail.com',
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 2,
            nombre: 'Pablo',
            apellido: 'Roman',
            correo: 'proman54@hotmail.com',
            estado: 'Inactivo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 3,
            nombre: 'Paola',
            apellido: 'Milan',
            correo: 'paolam@hotmail.com',
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 4,
            nombre: 'Jude',
            apellido: 'Bellingham',
            correo: 'jude5@hotmail.com',
            estado: 'Inactivo',
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
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {datos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.nombre}</td>
                                <td>{producto.apellido}</td>
                                <td>{producto.correo}</td>
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

export default TablaUsuarios;