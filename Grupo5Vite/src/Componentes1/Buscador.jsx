import React from 'react';
import {useEffect, useState} from 'react';


function Buscador(){

    return(
    <>
        <div className='buscador'>
            <input type="text" id="barrabuscador" nombre="barrabuscador" placeholder='Busca productos por nombre...'></input>
            <br></br>
            <input type="button" value="Buscar" id='buscarProductos'/>
            
        </div>
        
    </>
)}

export default Buscador

/*<button type='button'>BUSCAR</button>*/ 