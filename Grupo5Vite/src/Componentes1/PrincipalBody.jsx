/*import React from 'react'
import { Link } from "react-router-dom";
import Goku from '../assets/imagenes/20357871.webp'
import BabyYoda from '../assets/imagenes/segundaimagen.png'
import Garfield from '../assets/imagenes/terceraimagen.png'


function PrincipalBody(){


    return(
        <>
        <ul className='PrincipalBody'>
            <ul>
                <li><img src={Goku} className='ImagenItem1' alt="imagenitem1" width={370} height={370}/></li>
                <li><p>Colección de items 1: Especiales para regresar al colegio</p></li>
                <li><h6><p><link to ="/"/>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={BabyYoda} className='ImagenItem2' alt="imagenitem2" /></li>
                <li><p>Colección de items 2: Especiales para la casa</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
            <ul>
                <li><img src={Goku} className='ImagenItem3' alt="imagenitem3" width={370} height={370}/></li>
                <li><p>Colección de items 3: Especiales para los pequeños</p></li>
                <li><h6><p>learn more</p></h6></li>

            </ul>
        </ul>
        <br/><br/>
        <ul className='PrincipalBody1'>
            <ul>
                <li><img src={Garfield} className='ImagenItem4' alt="imagenitem4"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem5' alt="imagenitem5"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem6' alt="imagenitem6"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem7' alt="imagenitem7"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
            <ul>
                <li><img src={Garfield} className='ImagenItem8' alt="imagenitem8"/></li>
                <li><p>Item 1</p></li>
                <li><h6><p>learn more</p></h6></li>
            </ul>
        </ul>
        
        
      
        
        </>

    )
}

export default PrincipalBody
*/

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Producto = ({ id }) => {
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
    <div className={`div${id}`}>
      <Link to={`/producto/${id}`}>
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
  );
};

const CargarProductos = () => {

  const ids = [1, 2, ,9,8,7,6,5,4,3]; // IDs de productos que deseas obtener

  return (
    <div className="PrincipalBody">
      {ids.map(id => (
        <Producto key={id} id={id} />
      ))}
    </div>
  );
};

export default CargarProductos;