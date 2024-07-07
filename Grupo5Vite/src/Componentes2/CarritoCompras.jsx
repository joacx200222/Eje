import React, { useContext } from 'react';
import './styles/Carrito.css';
import { Link } from "react-router-dom";
import { CarritoContext } from '../App';
import Cabecera1 from '../ComponentesGeneral/Cabecera1';
import Pie from '../ComponentesGeneral/Pie';

function CarritoCompras() {
    const { carrito, eliminarDelCarrito, moverAGuardadoParaDespues, guardadoParaDespues } = useContext(CarritoContext);

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    };
    <div></div>
    return (
        <div><Cabecera1 />
        <div className="compra">
            
            <div>
                <h2 className="tituloscomprasAV">{carrito.length} Items en tu Carrito de Compras</h2>
            </div>
            <div > 
            {carrito.map((producto, index) => (
                <div key={index} className="itemCarrito">
                    <img className= "imagenAvNuevo"src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                    <div className='CambioAV'>
                        <p><strong>{producto.nombre}</strong></p>
                        <p>Por: {producto.fabricante} - Serie: {producto.serie}</p>
                        <p>S/ {producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Precio total: S/ {producto.precio * producto.cantidad}</p>
                        <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                        <button onClick={() => moverAGuardadoParaDespues(index)}>Guardar para después</button>
                    </div>
                </div>
            ))}
            </div>
            
            <div className="totalcarritoAV">
                Total: S/ {calcularTotal()}
            </div>
            <button className="botoncheckAV">
                <Link to="/Checkoutv"><strong>Checkout</strong></Link>
            </button>
            <div className="recta">
                <p className="ItemsAV"><strong>Guardado para después</strong></p>
                {guardadoParaDespues.map((producto, index) => (
                    <div key={index} className="itemCarrito">
                        <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                        <div>
                            <p><strong>{producto.nombre}</strong></p>
                            <p>Por: {producto.fabricante} - Serie: {producto.serie}</p>
                            <p>S/ {producto.precio}</p>
                            <p>Cantidad: {producto.cantidad}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Pie />
        </div>
    );
    
    
}

export default CarritoCompras;
