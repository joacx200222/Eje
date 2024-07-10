// VerProducto.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/Dashboard.css';

const VerProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState("");
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

    useEffect(() => {
        const fetchProducto = async () => {
            try {
                const response = await fetch(`http://localhost:3080/api/dashboard/product/${id}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Error: ${errorData.message}`);
                }
                const data = await response.json();
                setProducto(data);
            } catch (error) {
                console.error('Error al obtener producto:', error);
                setError('Error al obtener producto');
            }
        };

        fetchProducto();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!producto) {
        return <div>Cargando...</div>;
    }

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
                    <input type="text" id="nombre" className="inputNombre1" value={producto.nombre} readOnly />
                </div>
                <div className="form-row">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" className="inputDesc1" value={producto.fabricante} readOnly />
                </div>
                <div className="form-row">
                    <label htmlFor="caracteristicas">Características:</label>
                    <input type="text" id="caracteristicas" className="inputCarac1" 
                        value={`Combinable: ${producto.combinable}, Movibilidad: ${producto.movilidad}`} readOnly />
                </div>
                <div className="form-row-inline">
                    <div className="inline-field">
                        <label htmlFor="marca">Marca:</label>
                        <input type="text" id="marca" className="inputResto1" value={producto.fabricante} readOnly />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="serie">Serie:</label>
                        <input type="text" id="serie" className="inputSerie1" value={producto.serie} readOnly />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="precio">Precio:</label>
                        <input type="text" id="precio" className="inputResto1" value={producto.precio} readOnly />
                    </div>
                </div>
                <div className="form-row-inline">
                    <div className="inline-field">
                        <label htmlFor="tipo">Tipo:</label>
                        <input type="text" id="tipo" className="inputResto1" value={producto.material} readOnly />
                    </div>
                    <div className="inline-field">
                        <label htmlFor="stock">Stock:</label>
                        <input type="text" id="stock" className="inputResto1" value={producto.piezas} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerProducto;