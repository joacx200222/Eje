import React from 'react';
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import "./styles/checkout.css"
function Checkoutv(){
    return(
        <body>
        <Cabecera2/>

        <section className='compra'>
            <div className='recta'>
                <p className='ItemsAV'><strong>Datos de compra</strong></p>
            </div>
            <div className='primercheckouAV'>
                <form action="">
                    <div class="form-group">
                        <input type="text" name='linea1' placeholder='Linea 2' />
                    </div>
                    <div class="form-group">
                        <input type="text" name='linea1' placeholder='Linea 2' />
                    </div>
                    <div class="form-group">
                        <input type="text" name='distrito' placeholder='Distrito' />
                    </div>
                    <div class="form-group">
                        <input type="text" name='ciudad' placeholder='Ciudad' />
                    </div>
                    <div class="form-group">
                        <input type="text" name='País' placeholder='País' />
                    </div>
                </form>
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