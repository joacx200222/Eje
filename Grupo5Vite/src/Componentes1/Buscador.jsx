import React from 'react';
import {useEffect, useState} from 'react';


function Buscador(){

    return(
    <>
        <div className='buscador'>
            <input type="text" id="barrabuscador" nombre="barrabuscador" placeholder='Busca productos por nombre...'></input>
            <br></br>
            <button type='button'>BUSCAR</button>
        </div>
        
    </>
)}

export default Buscador