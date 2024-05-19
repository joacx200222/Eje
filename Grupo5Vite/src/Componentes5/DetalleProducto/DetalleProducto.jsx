import React, { useRef } from 'react';
import '../../css/Dashboard.css';

function CasillasProducto() {
    const fileInputRef = useRef(null);

    const handleImageUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Aquí puedes manejar la imagen seleccionada
            console.log('Imagen seleccionada:', file.name);
        }
    };

    return (
        <div className="product-form-container">
            <div className="left-column">
                <div className="image-preview"></div>
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
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" className="inputNombre1" placeholder="Producto XYZ" />
                </div>
                <div className="form-row">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" className="inputDesc1" placeholder="Este es un producto de prueba" />
                </div>
                <div className="form-row">
                    <label htmlFor="caracteristicas">Características:</label>
                    <input type="text" id="caracteristicas" className="inputCarac1" placeholder="Característica 1, Característica 2" />
                </div>
                <div className="form-row-inline">
                    <div className="inline-field">
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" className="inputResto1" placeholder="Marca Ejemplo" />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="serie">Serie:</label>
                        <input type="text" id="serie" className="inputSerie1" placeholder="12345ABC" />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="precio">Precio:</label>
                        <input type="text" id="precio" className="inputResto1" placeholder="$99.99" />
                    </div>
                </div>
                <div className="form-row-inline">
                    <div className="inline-field">
                        <label htmlFor="tipo">Tipo:</label>
                        <input type="text" id="tipo" className="inputResto1" placeholder="Electrónico" />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="stock">Stock:</label>
                        <input type="text" id="stock" className="inputResto1" placeholder="Disponible" />
                    </div>
                </div>
                <div className="form-row">
                    <button type="button" className="save-button">Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default CasillasProducto;