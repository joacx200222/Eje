import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Buscador() {
    const [busqueda, setBusqueda] = useState("");
    const [error, setError] = useState(null);
    const [resultados, setResultados] = useState([]);

    const buscar = async (cadena) => {
        if (!cadena.trim()) return; // Evita buscar cadenas vacías
        try {
            const response = await fetch(`http://localhost:3080/api/productos/findByName/${cadena}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${errorData.message}`);
            }
            const data = await response.json();
            setResultados(data);
        } catch (error) {
            console.error('Error al buscar productos:', error);
            setError(error.message);
        }
    };

    return (
        <>
            <div className='buscador'>
                <input
                    type="text"
                    id="barrabuscador"
                    name="barrabuscador"
                    placeholder='Busca productos por nombre...'
                    value={busqueda}
                    onChange={(evento) => setBusqueda(evento.target.value)}
                ></input>
                <br></br>
                <button type='button' onClick={() => buscar(busqueda)}>BUSCAR</button>
            </div>
            {error && <div>Error: {error}</div>}
            <ul>
                {resultados.map((producto) => (
                    <li key={producto.id}>
                        <Link to={`/producto/${producto.id}`}> {/* Use Link to wrap the product name and image */}
                            {producto.nombre} - <img src={producto.imagen} alt={producto.nombre} className='productoImagen'></img>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Buscador;