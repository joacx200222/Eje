import React from 'react';
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import { Link } from "react-router-dom";
import "./styles/checkout.css"
import { useEffect, useState } from "react"
function Checkoutv(){

    const [linea1, setLinea1] = useState( ()=> {
        const valorGuardado = localStorage.getItem("linea1")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [linea2, setLinea2] = useState( ()=> {
        const valorGuardado = localStorage.getItem("linea2")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [distrito, setDistrito] = useState( ()=> {
        const valorGuardado = localStorage.getItem("distrito")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [ciudad, setCiudad] = useState( ()=> {
        const valorGuardado = localStorage.getItem("ciudad")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    const [pais, setPais] = useState( ()=> {
        const valorGuardado = localStorage.getItem("pais")
        const valorInicial = JSON.parse(valorGuardado)
        return valorInicial || ''
    })

    useEffect( () => {
        //Guardar en local storage nombre
        localStorage.setItem("linea1", JSON.stringify(linea1))
    }, [linea1] )

    useEffect( () => {
        //Guardar en local storage nombre
        localStorage.setItem("linea2", JSON.stringify(linea2))
    }, [linea2] )

    useEffect( () => {
        //Guardar en local storage nombre
        localStorage.setItem("distrito", JSON.stringify(distrito))
    }, [distrito] )

    useEffect( () => {
        //Guardar en local storage nombre
        localStorage.setItem("ciudad", JSON.stringify(ciudad))
    }, [ciudad] )

    useEffect( () => {
        //Guardar en local storage nombre
        localStorage.setItem("pais", JSON.stringify(pais))
    }, [pais] )

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
                        <input type="text" name='linea1' placeholder='Linea 1' 
                        value={linea1}
                        onChange={
                            (e) => setLinea1(e.target.value)
                        }/>
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='linea2' placeholder='Linea 2' 
                        value={linea2}
                        onChange={
                            (e) => setLinea2(e.target.value)
                        }/>
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='distrito' placeholder='Distrito' 
                        value={distrito}
                        onChange={
                            (e) => setDistrito(e.target.value)
                        }/>
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='ciudad' placeholder='Ciudad' 
                        value={ciudad}
                        onChange={
                            (e) => setCiudad(e.target.value)
                        }/>
                    </div>
                    <div class="inputcheckAV">
                        <input type="text" name='País' placeholder='País' 
                        value={pais}
                        onChange={
                            (e) => setPais(e.target.value)
                        }/>
                    </div>
                </form>
            </div>

            <div className='segundocheckouAV'>

                <p><strong>Dirección de envio</strong></p>
                <form action="" className='formdecheckout'>
                    <div class="inputcheckAV2">
                        <input type="checkbox" name='pagoqr' />
                        <label htmlFor="">Pago con código QR</label>
                    </div>
                    <div class="inputcheckAV2">
                        <input type="checkbox" name='pagotarjeta'/>
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

        <div className='rectav2'>
            <div class="inputcheckAV2">
                        <input type="checkbox" name='economico' />
                        <label htmlFor="">Económico Aéreo - S/10.00</label>
                    </div>
                    <div class="inputcheckAV2">
                        <input type="checkbox" name='prioritario'/>
                        <label htmlFor="">Envío prioritario (5 a 10 días) - S/ 17.00</label>
            </div>
            
        </div>



        <div>
            <div className='lineaAV'>
                <div className='primercheckouAV'>
            
                    <p><strong>Items en Pedido:</strong></p>
                    <p>1x Juego de Cartas Pokemon Masters League - s/50</p>
                    <p>2 x Juego de Cartas Magic The Gathering - s/50</p>
                </div>

                <div className='segundocheckouAV'>

                    <p><strong>Resumen de Orden</strong></p>
                
                
                <div className='ordenAV'>
                    <ul>
                        <li>Subtotal:</li>
                        <li>Envío:</li>
                        <li>Impuestos: </li>
                        <li>Total: </li>
                    </ul>
                    <ul>
                        <li>s/159</li>
                        <li>s/89</li>
                        <li>s/69</li>
                        <li>s/329</li>
                    </ul>

                </div>
                
                    
                    <center><button className='botoncheckAV2'><Link to = "/pedidocompleto"> <strong>Completar Orden</strong> </Link> </button></center>
                    
                </div>
            </div>



        </div>


        </section>
        


        <Pie/>
    </body>


    )
    

    
    
}
export default Checkoutv;