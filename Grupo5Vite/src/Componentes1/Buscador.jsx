import React from 'react';
import {useEffect, useState} from 'react';
import data from "../Data/articulos.json"


function Buscador(){

    const [buscar, setBuscar] = useState("")


    useEffect(() => {
        fetch(data)
        .then(res => res.json())
        .then(
            (resultado) => 
        )
    })

    return(
    <>
        <div className='buscador'>
            <input type="text" id="barrabuscador" nombre="barrabuscador" placeholder='Busca productos por nombre...' 
            value={buscar} onChange={(evento) => setBuscar(evento.target.value)}></input>
            <br></br>
            <button type='button'>BUSCAR</button>
        </div>
        
    </>
)}

export default Buscador