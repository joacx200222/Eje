import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Dashboard.css';

function Nav() {
    return (
        <div className="asideCV">
            <div className="left-navigation">
                <h3>Admin</h3>
                <ul>
                    <li><Link to="/AdminDashBoard">Dashboard</Link></li>
                    <li><Link to="/UsuariosRegistrados">Usuarios registrados</Link></li>
                    <li><Link to="/ProductosAdm">Productos</Link></li>
                    <li><Link to="/Ordenes">Órdenes</Link></li>
                    <li><Link to="/">Productos más vendidos</Link></li>
                    <li><Link to={"/Series"}>Series</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;