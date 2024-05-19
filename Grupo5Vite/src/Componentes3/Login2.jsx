import React from 'react';

function Login2(){
    return (
        <div>
            <h1>Ingreso para usuarios registrados</h1>
            <form>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="password" />
                <button type="submit">Ingresar</button>
            </form>
            <a href="/forgot-password">Olvide mi password</a>
            <a href="/register">No tengo cuenta, deseo registrarme</a>
        </div>
    )
}

export default Login2;
