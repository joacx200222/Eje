import React, { useState, useEffect } from 'react';
import BuscadorUsuarios from './BuscadorUsuarios';

import '../../css/Dashboard.css';

const TablaUsuarios = () => {
    const [datos, setDatos] = useState([]);
    const [filteredDatos, setFilteredDatos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('/datos.json')
            .then(response => response.json())
            .then(data => {
                setDatos(data);
                setFilteredDatos(data);
            });
    }, []);

    const toggleModal = (user) => {
        setSelectedUser(user);
        setModalVisible(!modalVisible);
    };

    const toggleEstado = (id) => {
        const updatedDatos = datos.map(user => {
            if (user.id === id) {
                return { ...user, estado: user.estado === 'Activo' ? 'Inactivo' : 'Activo' };
            }
            return user;
        });
        setDatos(updatedDatos);
        setFilteredDatos(updatedDatos);
    };

    const handleSearch = (searchTerm) => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredData = datos.filter(item => {
            return (
                item.nombre.toLowerCase().includes(lowercasedFilter) ||
                item.apellido.toLowerCase().includes(lowercasedFilter) ||
                item.correo.toLowerCase().includes(lowercasedFilter)
            );
        });
        setFilteredDatos(filteredData);
    };

    return (    
        <div className="main-content">
            <BuscadorUsuarios onSearch={handleSearch} />
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
                        {filteredDatos.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nombre}</td>
                                <td>{user.apellido}</td>
                                <td>{user.correo}</td>
                                <td>{user.estado}</td>
                                <td>
                                    <button onClick={() => toggleModal(user)}>Ver</button>
                                    <button onClick={() => toggleEstado(user.id)}>
                                        {user.estado === 'Activo' ? 'Desactivar' : 'Activar'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modalVisible && selectedUser && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => toggleModal(null)}>&times;</span>
                        <h2>Detalles del Usuario</h2>
                        <p><strong>ID:</strong> {selectedUser.id}</p>
                        <p><strong>Nombre:</strong> {selectedUser.nombre}</p>
                        <p><strong>Apellido:</strong> {selectedUser.apellido}</p>
                        <p><strong>Correo:</strong> {selectedUser.correo}</p>
                        <p><strong>Estado:</strong> {selectedUser.estado}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TablaUsuarios;