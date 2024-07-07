/*
import React, { useState } from 'react';
import '../../css/Dashboard.css';
import ordenes from '../../Data/ordenes.json';

const TablaOrdenes = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const manejarCambio = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const ordenesFiltradas = ordenes.filter(ordenes =>
    `${ordenes.usuario} ${ordenes.id} ${ordenes.total}`.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  return (
    <div className="main-content">
      <div className="buscador-container">
        <input
          type="text"
          placeholder="Buscar orden..."
          value={textoBusqueda}
          onChange={manejarCambio}
          className="buscador-ordenes"
        />
      </div>
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
            </tr>
          </thead>
          <tbody>
            {ordenesFiltradas.map(ordenes => (
              <tr key={ordenes.id}>
                <td>{ordenes.id}</td>
                <td>{ordenes.usuario}</td>
                <td>{ordenes.fechaOrden}</td>
                <td>{ordenes.total}</td>
                <td>{ordenes.correo}</td>
                <td>{ordenes.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default TablaOrdenes;
*/

import React, { useState, useEffect } from 'react';
import '../../css/Dashboard.css';

const TablaOrdenes = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const response = await fetch('http://localhost:3080/api/basedatos/findAllOrdenes');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setOrdenes(data);
        setLoading(false);
      } catch (error) {
        setError('Error al obtener órdenes');
        setLoading(false);
      }
    };

    fetchOrdenes();
  }, []); // Dependencias vacías para que se ejecute solo una vez

  const manejarCambio = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const ordenesFiltradas = ordenes.filter(orden =>
    `${orden.cliente} ${orden.producto} ${orden.id}`.toLowerCase().includes(textoBusqueda.toLowerCase())
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
          placeholder="Buscar orden..."
          value={textoBusqueda}
          onChange={manejarCambio}
          className="buscador-ordenes"
        />
      </div>
      <div className="tabla-container">
        <table className="tabla-ordenes">
          <thead>
            <tr>
              <th>ID</th>
              <th>Direccion</th>
              <th>Cantidad</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Producto</th>
              <th>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {ordenesFiltradas.map(orden => (
              <tr key={orden.id}>
                <td>{orden.id}</td>
                <td>{orden.cliente}</td>
                <td>{orden.producto}</td>
                <td>{orden.cantidad}</td>
                <td>{orden.fecha}</td>
                <td>{orden.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaOrdenes;
