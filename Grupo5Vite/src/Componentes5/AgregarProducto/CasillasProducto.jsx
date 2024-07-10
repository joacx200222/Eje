import React from 'react';
import '../../css/Dashboard.css';

function CasillasProducto() {
    const handleGuardarClick = async () => {
        const nombre = document.getElementById('nombre').value;
        const marca = document.getElementById('fabricante').value;
        const serie = document.getElementById('serie').value;
        const precio = document.getElementById('precio').value;
        const tipo = document.getElementById('material').value;
        const stock = document.getElementById('piezas').value;

        try {
            const response = await fetch('http://localhost:3080/api/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre,
                    marca,
                    serie,
                    precio,
                    tipo,
                    stock,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message}`);
            }

            alert('Producto agregado correctamente');
            // Aquí podrías resetear los campos del formulario o hacer otra acción
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Error al agregar producto');
        }
    };

    return (
        <div className="product-form-container">
            <div className="right-column">
                <div className="form-row">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" className="inputNombre" />
                </div>
                <div className="form-row">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" className="inputDesc" />
                </div>
                <div className="form-row">
                    <label htmlFor="caracteristicas">Características:</label>
                    <input type="text" id="caracteristicas" className="inputCarac" />
                </div>
                <div className="form-row-inline">
                    <div className="inline-field">
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="fabricante" className="inputResto" />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="serie">Serie:</label>
                        <input type="text" id="serie" className="inputSerie" />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="precio">Precio:</label>
                        <input type="text" id="precio" className="inputResto" />
                    </div>
                </div>
                <div className="form-row-inline">
                    <div className="inline-field">
                        <label htmlFor="tipo">Tipo:</label>
                        <input type="text" id="material" className="inputResto" />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="stock">Stock:</label>
                        <input type="text" id="piezas" className="inputResto" />
                    </div>
                </div>
                <div className="form-row">
                    <button type="button" className="save-button" onClick={handleGuardarClick}>
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CasillasProducto;