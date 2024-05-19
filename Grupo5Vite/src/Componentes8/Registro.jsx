import React from 'react';
import './Registro.css'
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import { useEffect, useState } from "react"

function Registro(){

    const [nombre, setNombre] = useState( ()=> {
        const valorGuardado = localStorage.getItem("nombre")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [apellido, setApellido] = useState( ()=> {
        const valorGuardado = localStorage.getItem("apellido")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [correo, setCorreo] = useState( ()=> {
        const valorGuardado = localStorage.getItem("correo")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [pwd, setPwd] = useState( ()=> {
        const valorGuardado = localStorage.getItem("pwd")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [cpwd, setCpwd] = useState( ()=> {
        const valorGuardado = localStorage.getItem("cpwd")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    useEffect( () => {
        //Guardar en local storage nombre
        localStorage.setItem("nombre", JSON.stringify(nombre))
    }, [nombre] )

    useEffect( () => {
        //Guardar en local storage apellido
        localStorage.setItem("apellido", JSON.stringify(apellido))
    }, [apellido] )

    useEffect( () => {
        //Guardar en local storage correo
        localStorage.setItem("correo", JSON.stringify(correo))
    }, [correo] )

    useEffect( () => {
        //Guardar en local storage pwd
        localStorage.setItem("pwd", JSON.stringify(pwd))
    }, [pwd] )

    useEffect( () => {
        //Guardar en local storage pwd
        localStorage.setItem("cpwd", JSON.stringify(cpwd))
    }, [cpwd] )
    
    return(
        <>
        <Cabecera2/>
        <div>
            <div className='wrapperR'>
                <form action="">
                    <h4>Registra una cuenta nueva</h4>
                    <div className='input-boxR'>
                        <input type='text' placeholder='Nombre' 
                        value={nombre}
                        onChange={
                            (e) => setNombre(e.target.value)
                        } required/>
                    </div>
                    <div className='input-boxR'>
                        <input type='text' placeholder='Apellido' 
                        value={apellido}
                        onChange={
                            (e) => setApellido(e.target.value)
                        }
                        required/>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='email' placeholder='Correo' 
                            value={correo}
                            onChange={
                                (e) => setCorreo(e.target.value)
                            }
                            required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' placeholder='Password' 
                            value={pwd}
                            onChange={
                                (e) => setPwd(e.target.value)
                            }
                            required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' placeholder='Confim Password' 
                            value={cpwd}
                            onChange={
                                (e) => setCpwd(e.target.value)
                            }
                            required/>
                        </div>
                    </div>
                    
                    <button type='submit'>Crear Cuenta Nueva</button>
                    
                </form>
            </div>
        </div>
        <Pie/>
       
        </>
    )
}

export default Registro