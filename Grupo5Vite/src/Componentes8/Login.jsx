import React from 'react';
import './Login.css'
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import Pie from '../ComponentesGeneral/Pie';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

function Login(){





    return(
        <>
        <Cabecera2/>
        <div>
            <div className='wrapperL'>
                <form action="">
                    <h4>Ingreso para clientes registrados</h4>
                    <div className='input-boxL'>
                        <input type='email' placeholder='email' required/>
                    </div>
                    <div className='input-boxL'>
                        <input type='password' placeholder='password' required/>
                    </div>
                    <button type='submit'>Ingresar</button>
                    <div className='forgot-passwordL'>
                        <Link to="/RecuperarContraseña"><p>Olvidé mi contraseña</p></Link>
                    </div>
                    <div className='registerL'>
                    <Link to="/registro">No tengo cuenta deseo registrarme</Link>
                    </div>
                </form>
            </div>
        </div>
        <Pie/>
        </>
    )
}

export default Login




