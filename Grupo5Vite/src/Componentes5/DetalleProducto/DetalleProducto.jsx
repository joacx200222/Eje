import React, { useRef } from 'react';
import '../../css/Dashboard.css';

function DetalleProducto() {
    const fileInputRef = useRef(null);

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Imagen seleccionada:', file.name);
        }
    };

    return (
        <div className="product-form-container">
            <div className="left-column">
                <div className="image-preview">
                    {/* Aquí se mostrará la imagen seleccionada */}
                </div>
                <button className="image-upload-button" onClick={handleImageUploadClick}>
                    Agregar Imagen
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                />
            </div>
            <div className="right-column">
                <div className="form-row">
                    <label htmlFor="detalle">Detalle:</label>
                    <input type="text" id="detalle" className="inputDetalle" />
                </div>
                <div className="form-row">
                    <label htmlFor="serie">Serie:</label>
                    <input type="text" id="serie" className="inputSerie" />
                </div>
                <div className="form-row">
                    <label htmlFor="precio">Precio:</label>
                    <input type="text" id="precio" className="inputPrecio" />
                </div>
                <div className="form-row">
                    <label htmlFor="fechaRegistro">Fecha de Registro:</label>
                    <input type="text" id="fechaRegistro" className="inputFechaRegistro" />
                </div>
                <div className="form-row">
                    <label htmlFor="stock">Stock:</label>
                    <input type="text" id="stock" className="inputStock" />
                </div>
                <div className="form-row">
                    <label htmlFor="estado">Estado:</label>
                    <input type="text" id="estado" className="inputEstado" />
                </div>
                <div className="form-row">
                    <button type="button" className="save-button">Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default DetalleProducto;