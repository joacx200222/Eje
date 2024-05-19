import React from 'react';
import {useEffect, useState} from 'react';
import data from "../Data/articulos.json"


function Buscador(){

    const [objeto, setobjeto] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(data)
        .then(resultado => resultado.json())
        .then(
            (resultado) => {
                setIsLoaded(true);
                setobjeto(resultado);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);


    return(
    <>
        <div className='buscador'>
            <input type="text" id="barrabuscador" nombre="barrabuscador" placeholder='Busca productos por nombre...' 
            value={objeto} onChange={(evento) => setobjeto(evento.target.value)}></input>
            <br></br>
            <button type='button'>BUSCAR</button>
        </div>
        
        
    </>
)}

export default Buscador