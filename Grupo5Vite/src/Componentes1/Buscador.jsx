import React from 'react';
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/boostrap.min.css"


function Buscador(){

    const [usuarios,setUsuarios] = UseState([]);
    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionesGet= async()=>{
        await axios.get("../Data/Artículos.json")
        .then(response=>{
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        peticionesGet();
    },[])

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