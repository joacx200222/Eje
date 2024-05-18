import React from 'react'
import '../css/Dashboard.css'
import { Link } from "react-router-dom";

function Nav() {
    return (
        <aside className="left-navigation">
        
        <h3>Admin</h3>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><Link to = "/UsuariosRegistrados">Usuarios registrados</Link></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Órdenes</a></li>
                <li><a href="#">Productos más vendidos</a></li>
                <li><a href="#">Series</a></li>
            </ul>
        
    </aside>
    )
}

export default Nav;

