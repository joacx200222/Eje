/*import React from 'react';
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
export default*/
import React, { useState } from "react";
import "./Login.css";
import Cabecera2 from "../ComponentesGeneral/Cabecera2";
import Pie from "../ComponentesGeneral/Pie";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3080/api/basedatos/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ correo, contraseña }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        //verificamos si el usuario es admin o no
        if (data.usuario.tipo == "admin") {
          localStorage.setItem("admin", JSON.stringify(data.usuario));
          navigate("/AddSerie");
        } else {
          localStorage.setItem("usuario", JSON.stringify(data.usuario));
          navigate("/menuUsuario");
        }
      } else {
        setError(data.msg || "Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <Cabecera2 />
      <div>
        <div className="wrapperL">
          <form onSubmit={handleSubmit}>
            <h4>Ingreso para clientes registrados</h4>
            {error && <p className="error">{error}</p>}
            <div className="input-boxL">
              <input
                type="email"
                placeholder="Email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div className="input-boxL">
              <input
                type="password"
                placeholder="Password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
            </div>
            <button type="submit">Ingresar</button>
            <div className="forgot-passwordL">
              <Link to="/RecuperarContraseña">
                <p>Olvidé mi contraseña</p>
              </Link>
            </div>
            <div className="registerL">
              <Link to="/registro">No tengo cuenta, deseo registrarme</Link>
            </div>
          </form>
        </div>
      </div>
      <Pie />
    </>
  );
}

export default Login;
