import React from 'react'
import '../css/Dashboard.css'

function Nav() {
    return (
        <nav className="left-navigation">
            <h3>Admin</h3>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Usuarios registrados</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Órdenes</a></li>
                <li><a href="#">Productos más vendidos</a></li>
                <li><a href="#">Series</a></li>
            </ul>
        </nav>
    )
}

export default Nav;

