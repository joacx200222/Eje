import './styles/listaSeries.css'

function ListaSeries() {
    return (
        <div style={{
            marginLeft: '20px',
        }}>
            <table className="tableSeries" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha de Creacion</th>
                        <th>Nro. Productos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Manga Dragon Ball ZX</td>
                        <td>Colleccion del manga de dragon ball publicada por VIZ</td>
                        <td>11/02/2022</td>
                        <td>12</td>
                        <td><a href="#">ver</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListaSeries;