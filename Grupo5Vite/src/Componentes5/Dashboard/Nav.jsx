import React from 'react'
import '../../css/Dashboard.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="asideCV">
        <div className="left-navigation">
        
        <h3>Admin</h3>
            <ul>
                
                <li><Link to = "/AdminDashBoard">Dashboard</Link></li>
                <li><Link to = "/UsuariosRegistrados">Usuarios registrados</Link></li>
                <li><Link to = "/Productos">Productos</Link></li>
                <li><Link to = "/Ordenes">Ordenes</Link></li>
                <li><a href="#">Productos más vendidos</a></li>
                <li><a href="#">Series</a></li>
            </ul>
        
            </div>
            </div>

    )
}

export default Nav;

