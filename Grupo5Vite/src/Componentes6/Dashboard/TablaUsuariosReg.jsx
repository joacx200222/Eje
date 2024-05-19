import React, { useEffect, useState } from 'react';
import '../../css/Dashboard.css';
import BuscadorUsuarios from './BuscadorUsuarios';

const TablaUsuariosReg = () => {

    
    const [usuarios, setUsuarios] = useState([]);
/*
    useEffect(() => {
        // Cargar los datos desde un archivo JSON local
        fetch('usuarios.json')
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => console.error('Error al cargar los datos:', error));
      }, []);

      const [usuarios, setUsuarios] = useState([]);
*/
    useEffect(() => {
        // Recuperar los datos de localStorage
        const data = localStorage.getItem('usuarios');
        if (data) {
        setUsuarios(JSON.parse(data));
        }
    }, []);

    
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
                        {usuarios.map((usuariosRegistrados) => (
                            <tr key={usuariosRegistrados.id}>
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