import { useState } from "react";
import ListaProductoSeries from "./ListaProductoSeries";
import ModalAgregarProducto from "./ModalAgregarProducto";


function NewSerie() {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal= () =>  {
        setOpenModal(!openModal)
        console.log('press')
    }

    return (
        <div style={{
            marginLeft: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="/#" style={{
                    border: '1px solid black',
                    width: '100%',
                    borderRadius: '8px',
                    minHeight: '300px'
                }}/>
                <button style={{
                    marginTop: '10px',
                }}> Agregar Imagen</button>
            </div>
            

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '20px',
            }}>
                <label htmlFor="nombre">Nombre</label>
                <input name="nombre" style={{
                    fontSize: 18,
                    padding: '10px',
                    borderRadius: '8px',
                }}/>
                <label htmlFor="Descripcion" >Descripcion</label>
                <textarea  name='Descripcion'  style={{borderRadius: '8px', minHeight: '100px', border: '1px solid black'}}/>
                <ListaProductoSeries handleOpenModal={handleOpenModal}/>
                <div style={{
                    marginTop: '20px',
                    textAlign: 'end'
                }}>
                    <button>Guardar</button>
                </div>
                
            </div>
            {
                openModal && <ModalAgregarProducto  handleCloseModal={handleOpenModal}/>
            }
            
        </div>
    )
}
 export default NewSerie;