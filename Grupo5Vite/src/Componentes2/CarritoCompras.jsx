import React from 'react';
import './Carrito.css'
import Cabecera1 from '../ComponentesGeneral/Cabecera1'
import Pie from '../ComponentesGeneral/Pie';



function CarritoCompras(){
    return(
        <body>
            <Cabecera1/>
            <div className='compra'>
                <div>
                    <h2 className='tituloscomprasAV'>X Items en tu Carrito de Compras</h2>
                </div>
                <div className='recta'>
                    <p className='ItemsAV'><strong>Items Disponibles para envio</strong></p>
                </div>
                <div className='totalcarritoAV'>
                    <p className='totalAV'>Total: $</p>
                </div>

                

                <div className='recta'>
                    <p className='ItemsAV'><strong>Guardado para despúes</strong></p>
                </div>

                <div>
                    
                </div>
                

            </div>
            <Pie/>
            
            
        </body>

    )
    
    
}
export default CarritoCompras;