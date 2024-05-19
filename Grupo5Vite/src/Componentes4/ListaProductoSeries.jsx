import './styles/listaProductoSeries.css'

function ListaProductoSeries({handleOpenModal}) {

    return (
        <div 
        style={{
            marginTop: '10px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#d9d9d9'
            }}>
                <h3 style={{
                    width: 'fit-content',
                    margin: 0,
                    padding: '10px'
                }}>
                    Productos en la Serie
                    </h3>
                <button onClick={handleOpenModal}>+</button>
            </div>
            <table style={{
                background: '#FFFFFF',
                width: '100%',
            }}>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Descripcion
                    </th>
                    <th>
                        Accion
                    </th>
                </tr>
                <tr>
                    <td>ID</td>
                    <td>Manga Dragon Ball Vol 1</td>
                    <td><a href="#">Remover</a></td>
                </tr>
            </table>
        </div>
    )
}

export default ListaProductoSeries