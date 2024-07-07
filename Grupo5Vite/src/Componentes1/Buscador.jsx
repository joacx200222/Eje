import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Buscador() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let isMounted = true; // Flag to track mounted state

        const buscar = async (cadena) => {
            if (!cadena) return; // Early return if cadena is empty
            setIsLoaded(false);
            try {
                const response = await fetch(`http://localhost:3080/api/productos/findbyName/${cadena}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (isMounted) {
                    setResults(data);
                    setIsLoaded(true);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                    setIsLoaded(true);
                }
            }
        };

        buscar(searchTerm);

        return () => {
            isMounted = false; // Set flag to false when the component unmounts
        };
    }, [searchTerm]);

    const handleProductClick = (productId) => {
        history.push(`/product/${productId}`);
    };

    return (
        <>
            <div className='buscador'>
                <input
                    type="text"
                    id="barrabuscador"
                    name="barrabuscador"
                    placeholder='Busca productos por nombre...'
                    value={searchTerm}
                    onChange={(evento) => setSearchTerm(evento.target.value)}
                />
                <button onClick={() => searchTerm && buscar(searchTerm)}>Buscar</button>
            </div>
            {error && <div>Error: {error.message}</div>}
            {!isLoaded ? (
                <div>Cargando...</div>
            ) : (
                <div>
                    {results.map((product) => (
                        <div key={product.id} onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer' }}>
                            {product.nombre}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default Buscador;