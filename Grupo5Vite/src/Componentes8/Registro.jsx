/*import React from 'react';
import './Registro.css'
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import { useEffect, useState } from "react"
import axios from 'axios';

const Registro=()=>{

const [DataRegistro, setDataRegistro] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    pwd: '',
    cpwd: '',
});


const alCambiar = async (e) => {
    const {name, value} = e.target;
    setDataRegistro({
        ...DataRegistro,
        [name]: value
    });
};
const alSubmit = async (e) => {
    e.preventDefault();
    try{
        const respuesta = await axios.post('http://localhost:5173/register', DataRegistro);
        console.log(respuesta.data)
    }catch(error){
        console.error('Error al registrar usuario', error)
    }
};



    
  return(
        <>
        <Cabecera2/>
        <div>
            <div className='wrapperR'>
                <form onSubmit={alSubmit}>
                    <h4>Registra una cuenta nueva</h4>
                    <div className='input-boxR'>
                        <input type='text' name='nombre' placeholder='Nombre' value={DataRegistro.nombre} onChange={alCambiar} required/>
                    </div>
                    <div className='input-boxR'>
                        <input type='text' name='apellido' placeholder='Apellido' value={DataRegistro.apellido} onChange={alCambiar} required/>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='email' name='correo' placeholder='Correo' value={DataRegistro.correo} onChange={alCambiar} required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' name='pwd' placeholder='Password' value={DataRegistro.pwd} onChange={alCambiar} required/>
                        </div>
                    </div>
                    <div>
                        <div className='input-boxR'>
                            <input type='password' name='cpwd' placeholder='Confim Password' value={DataRegistro.cpwd} onChange={alCambiar} required/>
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

export default Registro*/
import React, { useState } from 'react';
import './Registro.css';
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';

const Registro = () => {
  const [DataRegistro, setDataRegistro] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    pwd: '',
    cpwd: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const alCambiar = (e) => {
    const { name, value } = e.target;
    setDataRegistro({
      ...DataRegistro,
      [name]: value
    });
  };

  const alSubmit = async (e) => {
    e.preventDefault();

    if (DataRegistro.pwd !== DataRegistro.cpwd) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await fetch('http://localhost:3080/api/basedatos/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: DataRegistro.nombre,
          apellido: DataRegistro.apellido,
          correo: DataRegistro.correo,
          contraseña: DataRegistro.pwd,
          tipo: 'usuario' // Ajusta esto según tu modelo si es necesario
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Usuario registrado exitosamente');
        setError('');
      } else {
        setError(data.msg || 'Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al registrar usuario', error);
      setError('Error al registrar usuario');
    }
  };

  return (
    <>
      <Cabecera2 />
      <div>
        <div className='wrapperR'>
          <form onSubmit={alSubmit}>
            <h4>Registra una cuenta nueva</h4>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <div className='input-boxR'>
              <input
                type='text'
                name='nombre'
                placeholder='Nombre'
                value={DataRegistro.nombre}
                onChange={alCambiar}
                required
              />
            </div>
            <div className='input-boxR'>
              <input
                type='text'
                name='apellido'
                placeholder='Apellido'
                value={DataRegistro.apellido}
                onChange={alCambiar}
                required
              />
            </div>
            <div>
              <div className='input-boxR'>
                <input
                  type='email'
                  name='correo'
                  placeholder='Correo'
                  value={DataRegistro.correo}
                  onChange={alCambiar}
                  required
                />
              </div>
            </div>
            <div>
              <div className='input-boxR'>
                <input
                  type='password'
                  name='pwd'
                  placeholder='Password'
                  value={DataRegistro.pwd}
                  onChange={alCambiar}
                  required
                />
              </div>
            </div>
            <div>
              <div className='input-boxR'>
                <input
                  type='password'
                  name='cpwd'
                  placeholder='Confirma Password'
                  value={DataRegistro.cpwd}
                  onChange={alCambiar}
                  required
                />
              </div>
            </div>

            <button type='submit'>Crear Cuenta Nueva</button>
          </form>
        </div>
      </div>
      <Pie />
    </>
  );
}

export default Registro;