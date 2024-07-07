import React, { useContext } from 'react';
import './styles/Carrito.css';
import { Link } from "react-router-dom";
import { CarritoContext } from '../App';

function CarritoCompras() {
    const { carrito } = useContext(CarritoContext);

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    };

    return (
        <div className="compra">
            <div>
                <h2 className="tituloscomprasAV">{carrito.length} Items en tu Carrito de Compras</h2>
            </div>
            {carrito.map((producto, index) => (
                <div key={index} className="itemCarrito">
                    <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
                    <div>
                        <p><strong>{producto.nombre}</strong></p>
                        <p>Por: {producto.fabricante} - Serie: {producto.serie}</p>
                        <p>S/ {producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Precio total: S/ {producto.precio * producto.cantidad}</p>
                    </div>
                </div>
            ))}
            <div className="totalcarritoAV">
                Total: S/ {calcularTotal()}
            </div>
            <div>
                <button className="botoncheckAV">
                    <Link to="/Checkoutv"><strong>Checkout</strong></Link>
                </button>
            </div>
            <div className="recta">
                <p className="ItemsAV"><strong>Guardado para después</strong></p>
            </div>
        </div>
    );
}

export default CarritoCompras;
