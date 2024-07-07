import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Buscador() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
    const history = useHistory();

    const buscar = async (cadena) => {
        setIsLoaded(false);
        try {
            const response = await fetch(`/api/productos/findByName/${cadena}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setResults(data);
            setIsLoaded(true);
        } catch (error) {
            setError(error);
            setIsLoaded(true);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            buscar(searchTerm);
        }
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
                <button onClick={() => buscar(searchTerm)}>Buscar</button>
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