/*import React from 'react';
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

export default RecuperarContraseña*/ 
import React, { useState } from 'react';
import './RecuperarContraseña.css';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import Pie from '../ComponentesGeneral/Pie';
import { Link } from "react-router-dom";

function RecuperarContraseña() {
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3080/api/basedatos/cambiarPassword', {//mi api de cambiar pass, OJO QUE ES A 1235!!!
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ correo })
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje('Contraseña cambiada exitosamente a 1235.');
        setError('');
      } else {
        setError(data.msg || 'Error al cambiar la contraseña');
        setMensaje('');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      setError('Error al cambiar la contraseña. Inténtalo de nuevo.');
      setMensaje('');
    }
  };

  return (
    <>
      <Cabecera2 />
      <div>
        <div className='wrapperRC'>
          <form onSubmit={handleSubmit}>
            <h4>Ingrese su correo para enviar contraseña</h4>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            {error && <p className="error">{error}</p>}
            <div className='input-boxRC'>
              <input
                type='text'
                placeholder='Email'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <button type='submit'>Recuperar contraseña</button>
            <div className='return-login'>
              <Link to="/login"><p>Regresar al Login</p></Link>
            </div>
          </form>
        </div>
      </div>
      <Pie />
    </>
  );
}

export default RecuperarContraseña;