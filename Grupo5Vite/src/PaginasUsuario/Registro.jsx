import React from 'react';
import './Registro.css'
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';

function Registro(){
    return(
        <>
        <Cabecera2/>
        <div>
            <div className='wrapperR'>
                <form action="">
                    <h4>Registra una cuenta nueva</h4>
                    <div className='input-boxR'>
                        <input type='text' placeholder='Nombre' required/>
                    </div>
                    <div className='input-boxR'>
                        <input type='text' placeholder='Apellido' required/>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='text' placeholder='Correo' required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' placeholder='Password' required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' placeholder='Confim Password' required/>
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