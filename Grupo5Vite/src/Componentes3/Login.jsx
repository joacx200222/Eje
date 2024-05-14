import React from 'react';
import Cabecera2 from '../ComponentesGeneral/Cabecera2'
import Pie from '../ComponentesGeneral/Pie'

const Login = () => {
    return (
        <div>
            <Cabecera2 />
            <h1>Ingreso para usuarios registrados</h1>
            <form>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Ingresar</button>
            </form>
            <a href="/forgot-password">Olvide mi password</a>
            <a href="/register">No tengo cuenta, deseo registrarme</a>
            <Pie />
        </div>
    );
};

export default Login;
