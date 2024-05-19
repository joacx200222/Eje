import React from 'react';
import {useEffect, useState} from 'react';
import data from "../Data/articulos.json"


function Buscador(){

    const [objeto, setobjeto] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [rpta, setRpta] = useState([]);
 
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


    function buscar(cadena){
        console.log(cadena)

        let lista = []
        let i=0

        objeto.forEach(element => {
            element.Buscador.filter((objeto) => {
                let m = modelo['num']
                if( m.includes(cadena)){
                    i = i + 1
                    lista.push(<li key={i}>{element.detalle} - {m} <img src={modelo['imagen']} className='juguete'></img> </li>)
                }
            })
        })
        

        setRpta(lista)
    }

    

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