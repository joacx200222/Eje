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
                    <li><Link to="/">Usuarios registrados</Link></li>
                    <li><Link to="/ProductosAdm">Productos</Link></li>
                    <li><Link to="/">Órdenes</Link></li>
                    <li><Link to="/">Productos más vendidos</Link></li>
                    <li><Link to="/">Series</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;