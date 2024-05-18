import React from 'react';
import './LoginError.css'
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import Pie from '../ComponentesGeneral/Pie';


function LoginError(){
    return(
        <>
        <Cabecera2/>
        <div>
            <div className='wrapperLE'>
                <form action="">
                    <h4>Ingreso para clientes registrados</h4>
                    <div className='input-boxLE'>
                        <input type='text' placeholder='email' required/>
                    </div>
                    <div className='input-boxLE'>
                        <input type='password' placeholder='password' required/>
                    </div>
                    <div className='incorrect-pwd'>
                        <p>*Email o Password Incorrectos</p>
                    </div>
                    <button type='submit'>Ingresar</button>
                    <p></p>
                </form>
            </div>
        </div>
        <Pie/>
        </>
    )
}

export default LoginError