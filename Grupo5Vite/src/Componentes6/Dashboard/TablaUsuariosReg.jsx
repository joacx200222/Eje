/*
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
*/
/*
import React, { useState, useEffect } from 'react';
import '../../css/Dashboard.css';

const TablaUsuarios = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:3080/api/basedatos/findAllusuarios');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setUsuarios(data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener usuarios');
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []); // Dependencias vacías para que se ejecute solo una vez

  const manejarCambio = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const usuariosFiltrados = usuarios.filter(usuario =>
    `${usuario.nombre} ${usuario.apellido} ${usuario.id}`.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
*/

import React, { useState, useEffect } from 'react';
import '../../css/Dashboard.css';

const TablaUsuarios = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('http://localhost:3080/api/basedatos/findAllusuarios');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setUsuarios(data);
        console.log(usuarios)
        setLoading(false);
      } catch (error) {
        setError('Error al obtener usuarios');
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []); // Dependencias vacías para que se ejecute solo una vez

  

  const manejarCambio = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const usuariosFiltrados = usuarios.filter(usuario =>
    `${usuario.nombre} ${usuario.apellido} ${usuario.id}`.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
                <td>{usuario.createdAt}</td> 
                <td>{usuario.activo ? 'Activo' : 'Inactivo'}</td> {/* Asegúrate de que la propiedad exista */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaUsuarios;

