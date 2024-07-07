import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import "../css/PaginaProducto.css";
import Cabecera1 from '../ComponentesGeneral/Cabecera1';
import Pie from '../ComponentesGeneral/Pie';
import { CarritoContext } from '../App';

function PaginaProductoPrincipal() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState('');
    const [cantidad, setCantidad] = useState(1);
    const [mostrarEnvios, setMostrarEnvios] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const { agregarAlCarrito } = useContext(CarritoContext);

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

    const handleCantidadChange = (newCantidad) => {
        if (newCantidad < 1) return;
        setCantidad(newCantidad);
    };

    const toggleEnvios = () => {
        setMostrarEnvios(!mostrarEnvios);
    };

    const cerrarEnvios = () => {
        setMostrarEnvios(false);
    };

    const handleAgregarAlCarrito = () => {
        agregarAlCarrito({ ...producto, cantidad });
        setPopupVisible(true);
        setTimeout(() => {
            setPopupVisible(false);
        }, 4000); 
    };

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <Cabecera1 />
            <div>
                <h4 className='ProductoAvTi'>Título del producto: {producto.nombre}</h4>
                <h4 id="Subtitulo" >Por: {producto.fabricante} - Serie: {producto.serie}</h4>
                <div style={{ borderTop: "2px solid black", width: "100%" }}></div>
            </div>
            <hr />

            <div className='ProductoContenido'>
                <nav id="arriba_derecha" className='ProductoContenidoE'>
                    <h4 id="DisponibleTitulo">Disponible</h4>
                    <p id="Precio">S/{producto.precio * cantidad}</p>

                    <button type='button' id="AnadirCarritoBoton" onClick={handleAgregarAlCarrito}>Añadir al Carrito</button>
                    <p id="textoCantidad">Cantidad</p>
                    <div id="cantidadControl">
                        <button onClick={() => handleCantidadChange(cantidad - 1)}>-</button>
                        <input type="number" value={cantidad} onChange={(e) => handleCantidadChange(Number(e.target.value))} />
                        <button onClick={() => handleCantidadChange(cantidad + 1)}>+</button>
                    </div>

                    <p onClick={toggleEnvios} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
                        Ver métodos de envío disponibles
                    </p>
                    <div id="overlay" className={mostrarEnvios ? "visible" : ""}></div>
                    <div id="metodosEnvio" className={mostrarEnvios ? "visible" : ""}>
                        <button onClick={cerrarEnvios} className="close-btn">x</button>
                        <p>Económico Aéreo - S/10.00</p>
                        <p>Envío prioritario (5 a 10 días) - S/17.00</p>
                    </div>
                </nav>
                <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} className="ImagenProductoAV" />
                <div id='Detallado' className='ProductoContenidoE'>
                    <h4>Descripción</h4>
                    <li className='DescAv'>Fabricado por {producto.fabricante} con serie {producto.serie} - {producto.nombre}</li>
                    <p id="Detalletexto">{producto.descripcion}</p>
                </div>
                <div id='Caracteristicas' className='ProductoContenidoE ProductoAV1'>
                    <h4 className='h4nuevoAV'>Características del producto:</h4>
                    <li>Precio: S/{producto.precio}</li>
                    <li>Material: {producto.material}</li>
                    <li>Tamaño: {producto.tamano} cm</li>
                    <li>Fabricante: {producto.fabricante}</li>
                    <ul>
                        {producto.caracteristicas && producto.caracteristicas.split(',').map((caracteristica, index) => (
                            <li key={index}>{caracteristica}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {popupVisible && (
                <div className="popup">
                    Producto agregado al carrito!
                </div>
            )}
            <Pie />
        </>
    );
}

export default PaginaProductoPrincipal;
