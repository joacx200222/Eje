import './styles/FormCambiarPassword.css'
import React from 'react'


function CambiarPasswordForm() {
    return (
        <div className='container'>
            <form>
                <div className='inputContainer'>
                    <input placeholder="Actual" className='inputCambiar'/>
                    <input placeholder="Nuevo" className='inputCambiar'/>
                    <input placeholder="Repetir" className='inputCambiar'/>
                </div>

                <div className='btnContainer'>
                <button  className='btnCambiar'>Cambiar</button>
                </div>
            </form>
        </div>
    )
}

export default CambiarPasswordForm