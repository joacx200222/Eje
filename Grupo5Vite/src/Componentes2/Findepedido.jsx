import React from 'react';
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import "./styles/pedidocompleto.css"

function Findepedido(){
    return(
        <body>
        <Cabecera2/>
            <section>
                <div>
                    <center><h2 className='tituloscomprasAV'>¡Muchas gracias por tu pedido!</h2></center>
                    <center><p>Puedes ver el detalle y estado de tu pedido ingresando a tu cuenta.</p></center>
                    <p className='interesAV'>Tambien te podria interesar</p>
                </div>
            <ul className='PrincipalBody1'>
                <ul>
                    <li><img src="" className='ImagenItem4' alt="imagenitem4"/></li>
                    <li><p>Item 1</p></li>
                    <li><h6><p>learn more</p></h6></li>
                </ul>
                <ul>
                    <li><img src="" className='ImagenItem5' alt="imagenitem5"/></li>
                    <li><p>Item 1</p></li>
                    <li><h6><p>learn more</p></h6></li>
                </ul>
                <ul>
                    <li><img src="" className='ImagenItem6' alt="imagenitem6"/></li>
                    <li><p>Item 1</p></li>
                    <li><h6><p>learn more</p></h6></li>
                </ul>
                <ul>
                    <li><img src="" className='ImagenItem7' alt="imagenitem7"/></li>
                    <li><p>Item 1</p></li>
                    <li><h6><p>learn more</p></h6></li>
                </ul>
                <ul>
                    <li><img src="" className='ImagenItem8' alt="imagenitem8"/></li>
                    <li><p>Item 1</p></li>
                    <li><h6><p>learn more</p></h6></li>
                </ul>
            </ul>

            </section>
        <Pie/>
        </body>
        


    )

    

}
export default Findepedido;