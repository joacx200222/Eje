import '../Componentes4/styles/menuUsuario.css'
import { Link } from 'react-router-dom';

function MenuUsuario() {
    return (
        <aside className="containerAside">
            <nav>
                <h2>Mi cuenta</h2>

                <ul>
                    <li><Link to={'/OrdenesRecientes'}>Ordenes Recientes</Link></li>
                    <li><Link to={'/RegistroDatos'}>Datos de Registros</Link></li>
                    <li><Link to={'/CambiarContra'}>Cambiar Passsword</Link></li>
                </ul>
            </nav>
        </aside>
    )

}

export default MenuUsuario;