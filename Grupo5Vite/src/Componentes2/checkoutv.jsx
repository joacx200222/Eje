import React from 'react';
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import "./styles/checkout.css"
function Checkoutv(){
    return(
        <body>
        <Cabecera2/>

        <section className='compra'>
            <div>
                <h2 className='tituloscomprasAV'>¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón “completar orden” al final de la página.</h2>
            </div>
            <div className='recta'>
                <p className='datosAV'><strong>Datos de compra</strong></p>
            </div>
            
            <div className='lineaAV'>








            <div className='primercheckouAV'>
        
                <p><strong>Dirección de envio</strong></p>
                <form action="" className='formdecheckout'>
                    <div class="inputcheckAV">
                        <input type="text" name='linea1' placeholder='Linea 2' />
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='linea1' placeholder='Linea 2' />
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='distrito' placeholder='Distrito' />
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='ciudad' placeholder='Ciudad' />
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='País' placeholder='País' />
                    </div>
                </form>
            </div>

            <div className='segundocheckouAV'>

                <p><strong>Dirección de envio</strong></p>
                <form action="" className='formdecheckout'>
                    <div class="inputcheckAV2">
                        <input type="checkbox" name='linea1' />
                        <label htmlFor="">Pago con código QR</label>
                    </div>
                    <div class="inputcheckAV2">
                        <input type="checkbox" name='linea1'/>
                        <label htmlFor="">Pago con tarjeta de crédito</label>
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='numero de tarjeta' placeholder='Numero de tarjeta' />
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='nombre de tarjeta' placeholder='Nombre de tarjeta' />
                    </div>
                    <div className='datostarjetaAV'>
                        <div class="inputcheckAV">
                            <input type="text" name='vencimiento' placeholder='Vencimiento' />
                        </div>
                        <div class="inputcheckAV">
                            <input type="text" name='cvv' placeholder='CVV' />
                        </div>
                    </div>
                    
                </form>
            </div>








            </div>
            








            
            <div className='recta'>
                <p className='ItemsAV'><strong>Método de Envío</strong></p>
            </div>
        </section>
        <Pie/>
    </body>


    )
    

    
    
}
export default Checkoutv;