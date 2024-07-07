import React, { useState } from 'react';
import '../../css/Dashboard.css';
import usuarios from '../../Data/usuarios.json';

const TablaUsuarios = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const manejarCambio = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const usuariosFiltrados = usuarios.filter(usuario =>
    `${usuario.nombre} ${usuario.apellido} ${usuario.id}`.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="buscador-container">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={textoBusqueda}
          onChange={manejarCambio}
          className="buscador-usuarios"
        />
      </div>
      <div className="tabla-container">
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Fecha registro</th>
              <th>Activo</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.fechaRegistro}</td>
                <td>{usuario.activo ? 'Activo' : 'Inactivo'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default TablaUsuarios;