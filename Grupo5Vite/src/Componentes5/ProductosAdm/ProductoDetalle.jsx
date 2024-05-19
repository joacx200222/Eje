import React from 'react';
import { useParams } from 'react-router-dom';
import datos from '../../Data/productos.json';

const ProductoDetalle = () => {
    const { id } = useParams();
    const producto = datos.find(p => p.id === parseInt(id));

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <h2>Detalles del Producto</h2>
            <p>ID: {producto.id}</p>
            <p>Detalle: {producto.detalle}</p>
            <p>Serie: {producto.serie}</p>
            <p>Precio: {producto.precio}</p>
            <p>Fecha de Registro: {producto.fechaRegistro}</p>
            <p>Stock: {producto.stock}</p>
            <p>Estado: {producto.estado}</p>
        </div>
    );
};

export default ProductoDetalle;