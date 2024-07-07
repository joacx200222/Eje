import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import Pie from '../ComponentesGeneral/Pie';

const Producto = ({ id }) => {
    <Cabecera2 />
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {

    const fetchProducto = async () => {
      try {
        const response = await fetch(`http://localhost:3080/api/productos/findAllxId/${id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Error: ${errorData.message}`);
        }
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error('Error al obtener producto:', error);
        setError(error.message);
      }
    };

    fetchProducto();
  }, [id]);

  if (error) {
    return <div className={`div${id}`}><p className="error">{error}</p></div>;
  }

  if (!producto) {
    return <div className={`div${id}`}><p>Cargando...</p></div>;
  }


  return (
    <section>
    <div>
    <div className={`div${id}`}>
      <Link to={`/producto/${id}`}> {/* Modifica esta lÃnea para usar Link */}
        <img 
          src={producto.imagen} 
          className={`ImagenItem${id}`} 
          alt={`imagenitem${id}`} 
          width={370} 
          height={370} 
        />
      </Link>
      <p>{producto.nombre}</p>
    </div>
    </div>
    </section>
  );
};

const CargarProductos = () => {
  const ids = [4, 5, 6, 7, 8 ,9 ]; // IDs de productos que deseas obtener

  return (  
    <div><Cabecera2 /> 
    <div className="PrincipalBody">
      {ids.map(id => (
        <Producto key={id} id={id} />
      ))}
    </div><Pie /></div>
  );
};

export default CargarProductos;