import './styles/FormCambiarPassword.css'

function ActualizarDatosForm( ){

    return (
        <div className='container'>
            <form action='#' className='waza'> 
                <div className='inputContainer'>
                    <input placeholder='Nombre' className='inputCambiar' disabled/>
                    <input placeholder='Apellido' className='inputCambiar'  />
                    <input placeholder='Correo' className='inputCambiar'/>
                </div>

                <div className='btnContainer'>
                <button  className='btnCambiar'>Actualizar</button>
                </div>
            </form>
        </div>
    )
}

export default ActualizarDatosForm