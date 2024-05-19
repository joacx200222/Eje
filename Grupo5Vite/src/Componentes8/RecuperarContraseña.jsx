import React from 'react';
import './RecuperarContraseña.css'
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import Pie from '../ComponentesGeneral/Pie';
import { Link } from "react-router-dom";


function RecuperarContraseña(){
    return(
        <>
        <Cabecera2/>
        <div>
            <div className='wrapperRC'>
                <form action="">
                    <h4>Ingrese su correo para enviar contraseña</h4>
                    <div className='input-boxRC'>
                        <input type='text' placeholder='email' required/>
                    </div>
                    <button type='submit'>Enviar</button>
                    <div className='return-login'>
                    <Link to="/login"><p>Regresar al Login</p></Link>
                    </div>
                </form>
            </div>
        </div>
        <Pie/>
        </>
    )
}

export default RecuperarContraseña