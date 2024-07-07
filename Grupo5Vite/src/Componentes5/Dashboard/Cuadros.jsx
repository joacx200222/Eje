import React from 'react'
import '../../css/Dashboard.css';

function Cuadros(){
    return (

        <>
    <main>
    <article>
    <div className="contenedor">
        <div className="cuadro">
            <p className="numero">68</p>
            <p className="texto">Órdenes del día de hoy</p>
        </div>
        <div className="cuadro">
            <p className="numero">12</p>
            <p className="texto">Usuarios nuevos</p>

        </div>
        <div className="cuadro1">
            <p className="numero1">S/ 13,500.00</p>
            <p className="texto1">Ingresos de hoy</p>
        </div>
    </div>
    
    </article>
    </main>
        </>
    )
}

export default Cuadros



/*


import React, { useState, useEffect } from 'react';
import '../../css/Dashboard.css';

const Cuadros = () => {
  const [data, setData] = useState({ ordenes: 0, usuarios: 0, ingresos: 0 });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3080/api/dashboard');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error: ${errorData.message}`);
        }
        const result = await response.json();
        setData({
          ordenes: result.ordenes || 0,
          usuarios: result.usuarios || 0,
          ingresos: result.ingresos || 0,
        });
      } catch (error) {
        console.error('Error al obtener datos del dashboard:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando datos del dashboard...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <>
      <main>
        <article>
          <div className="contenedor">
            <div className="cuadro">
              <p className="numero">{data.ordenes}</p>
              <p className="texto">Órdenes del día de hoy</p>
            </div>
            <div className="cuadro">
              <p className="numero">{data.usuarios}</p>
              <p className="texto">Usuarios nuevos</p>
            </div>
            <div className="cuadro1">
              <p className="numero1">S/ {data.ingresos.toFixed(2)}</p>
              <p className="texto1">Ingresos de hoy</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default Cuadros;

*/