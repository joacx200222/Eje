import React from 'react';
import '../../css/Dashboard.css';

const TablaUsuariosReg = () => {
    const datos = [
        {
            id: 1,
            nombre: 'Antonio',
            apellido: 'Lopez Caro',
            correo: 'correo@sanchez.com',
            fechaRegistro: '11/02/2022 ',
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },
        {
            id: 12333,
            nombre: 'Ana',
            apellido: 'Sanchez',
            correo: 'anita123@hotmail.com',
            fechaRegistro: '11/02/2022 ',
            estado: 'Inactivo',
            acciones: 'Ver | Activar'
        },
        {
            id: 12334,
            nombre: 'Ana',
            apellido: 'Sanchez',
            correo: 'anita123@hotmail.com',
            fechaRegistro: '11/02/2022 ',
            estado: 'Inactivo',
            acciones: 'Ver | Activar'
        }, 
        {
            id: 2,
            nombre: 'Antonio',
            apellido: 'Lopez Caro',
            correo: 'correo@sanchez.com',
            fechaRegistro: '11/02/2022 ',
            estado: 'Activo',
            acciones: 'Ver | Desactivar'
        },         
    ];

    return (
    
        <div className="main-content">
            <div className="tabla-container">
                <table className="tabla-ordenes">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Fecha de registro</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((usuariosRegistrados) => (
                            <tr>
                                <td>{usuariosRegistrados.id}</td>
                                <td>{usuariosRegistrados.nombre}</td>
                                <td>{usuariosRegistrados.apellido}</td>
                                <td>{usuariosRegistrados.correo}</td>
                                <td>{usuariosRegistrados.fechaRegistro}</td>
                                <td>{usuariosRegistrados.estado}</td>
                                <td>{usuariosRegistrados.acciones}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
       
    );
};

export default TablaUsuariosReg;