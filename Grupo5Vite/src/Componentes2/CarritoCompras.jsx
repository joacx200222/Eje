import React from 'react';
import './Carrito.css'
import Cabecera1 from '../ComponentesGeneral/Cabecera1'



function CarritoCompras(){
    return(
        <body>
            <Cabecera1/>
            <div className='compra'>
                <div>
                    <h2>X Items en tu Carrito de Compras</h2>
                </div>
                <div className='recta'>
                    <p><strong>Items Disponibles para envio</strong></p>
                </div>

            </div>
            
            
        </body>

    )
    
    
}
export default CarritoCompras;