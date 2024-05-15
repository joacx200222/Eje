import '../Componentes4/styles/menuUsuario.css'

function MenuUsuario() {
    return (
        <aside className="containerAside">
            <nav>
                <h2>Mi cuenta</h2>

                <ul>
                    <li>Ordenes Recientes</li>
                    <li>Datos de Registros</li>
                    <li>Cambiar Passsword</li>
                </ul>
            </nav>
        </aside>
    )

}

export default MenuUsuario;