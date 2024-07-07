import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/PaginaProducto.css";
import Cabecera1 from '../ComponentesGeneral/Cabecera1';
import Pie from '../ComponentesGeneral/Pie';

function PaginaProductoPrincipal() {
    const { id } = useParams();
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
        return <p className="error">{error}</p>;
    }

    if (!producto) {
        return <p>Cargando...</p>;
    }
    
    return (
        
        <>  <Cabecera1/>
            <div>
                <h4>Título del producto: {producto.nombre}</h4>
                <h4 id="Subtitulo" >Por: {producto.fabricante} - Serie: {producto.serie}</h4>
            </div>
            <hr />
            <div className='ProductoContenido'>
                <nav id="arriba_derecha" className='ProductoContenidoE'>
                    <h4 id="DisponibleTitulo">Disponible</h4>
                    <p id="Precio">S/{producto.precio}</p>
                    <button type='button' id="AnadirCarritoBoton">Añadir al Carrito</button>
                    <p id="textoCantidad">Cantidad</p>
                    <p>Cantidad exacta</p>
                    <p>Ver métodos de envío disponibles</p>
                </nav>
                <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} className="ImagenProductoAV" />
                <div id='Detallado' className='ProductoContenidoE'>
                    <h4>Descripción</h4>
                    <li className='DescAv'>Fabricado por {producto.fabricante} con serie {producto.serie} - {producto.nombre} </li>
                    <p id="Detalletexto">{producto.descripcion}</p>
                </div>
                <div id='Caracteristicas' className='ProductoContenidoE ProductoAV1' >
                    <h4 className='h4nuevoAV'>Características del producto:</h4>
                    <li>Precio: S/{producto.precio}</li>
                    <li>Material: {producto.material}</li>
                    <li>Tamano: {producto.tamano} cm</li>
                    <li>Fabricante:{producto.fabricante}</li>

                    <ul>
                        {producto.caracteristicas && producto.caracteristicas.split(',').map((caracteristica, index) => (
                            <li key={index}>{caracteristica}</li>
                        ))}
                    </ul>
                </div>
                
            </div>
            <Pie/>
        </>
    );
}

export default PaginaProductoPrincipal;
