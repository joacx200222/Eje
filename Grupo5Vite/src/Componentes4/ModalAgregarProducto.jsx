import './styles/modal.css'

function ModalAgregarProducto({handleCloseModal}) {
    return (
        <div className="modal">
            <div className="modalContent">
                <div className='header'>
                    <h3>Agregar Producto</h3>
                    <button 
                    className='closeButton'
                    onClick={handleCloseModal}>close</button>
                </div>
                <div className='searchContainer'>
                <input className='modalSearch' type="search" placeholder="Buscar por descripcion o ID"/> <button className='searchButton'>Buscar</button>
                </div>
                <table>
                    <tr>
                        <th >ID</th>
                        <th style={{width: '80%'}}>Descripcion</th>
                        <th>Accion</th>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Manga Dragon Ball Vol 1</td>
                        <td><a href="#">Agregar</a></td>
                    </tr>
                </table>
            </div>
        </div>
    )

}

export default ModalAgregarProducto;
