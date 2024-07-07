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