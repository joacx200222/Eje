import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Pie from '../ComponentesGeneral/Pie';
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import "./styles/checkout.css"

function Checkoutv() {
    const [linea1, setLinea1] = useState("");
    const [linea2, setLinea2] = useState("");
    const [distrito, setDistrito] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [carrito, setCarrito] = useState([]);
    const [envio, setEnvio] = useState(0);
    
    useEffect(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("linea1", JSON.stringify(linea1));
    }, [linea1]);
    
    useEffect(() => {
        localStorage.setItem("linea2", JSON.stringify(linea2));
    }, [linea2]);
    
    useEffect(() => {
        localStorage.setItem("distrito", JSON.stringify(distrito));
    }, [distrito]);
    
    useEffect(() => {
        localStorage.setItem("ciudad", JSON.stringify(ciudad));
    }, [ciudad]);
    
    useEffect(() => {
        localStorage.setItem("pais", JSON.stringify(pais));
    }, [pais]);
    
    const calcularTotalCarrito = () => {
        return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    };

    const calcularTotal = () => {
        return calcularTotalCarrito() + envio;
    };

    const manejarSeleccionEnvio = (costoEnvio) => {
        setEnvio(costoEnvio);
    };

    return (
        <div>
            <Cabecera2 />
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
                        <form className='formdecheckout'>
                            <div className="inputcheckAV">
                                <input type="text" name='linea1' placeholder='Linea 1' 
                                    value={linea1}
                                    onChange={(e) => setLinea1(e.target.value)}
                                />
                            </div>
                            <div className="inputcheckAV">
                                <input type="text" name='linea2' placeholder='Linea 2' 
                                    value={linea2}
                                    onChange={(e) => setLinea2(e.target.value)}
                                />
                            </div>
                            <div className="inputcheckAV">
                                <input type="text" name='distrito' placeholder='Distrito' 
                                    value={distrito}
                                    onChange={(e) => setDistrito(e.target.value)}
                                />
                            </div>
                            <div className="inputcheckAV">
                                <input type="text" name='ciudad' placeholder='Ciudad' 
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                />
                            </div>
                            <div className="inputcheckAV">
                                <input type="text" name='pais' placeholder='País' 
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>

                    <div className='segundocheckouAV'>
                        <p><strong>Datos de pago</strong></p>
                        <form className='formdecheckout'>
                            <div className="inputcheckAV2">
                                <input type="checkbox" name='pagoqr' />
                                <label htmlFor="">Pago con código QR</label>
                            </div>
                            <div className="inputcheckAV2">
                                <input type="checkbox" name='pagotarjeta'/>
                                <label htmlFor="">Pago con tarjeta de crédito</label>
                            </div>
                            <div className="inputcheckAV">
                                <input type="text" name='numero de tarjeta' placeholder='Numero de tarjeta' />
                            </div>
                            <div className="inputcheckAV">
                                <input type="text" name='nombre de tarjeta' placeholder='Nombre de tarjeta' />
                            </div>
                            <div className='datostarjetaAV'>
                                <div className="inputcheckAV">
                                    <input type="text" name='vencimiento' placeholder='Vencimiento' />
                                </div>
                                <div className="inputcheckAV">
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
                    <div className="inputcheckAV2">
                        <input type="checkbox" name='economico' onChange={() => manejarSeleccionEnvio(10)} />
                        <label htmlFor="">Económico Aéreo - S/10.00</label>
                    </div>
                    <div className="inputcheckAV2">
                        <input type="checkbox" name='prioritario' onChange={() => manejarSeleccionEnvio(17)} />
                        <label htmlFor="">Envío prioritario (5 a 10 días) - S/17.00</label>
                    </div>
                </div>

                <div className='lineaAV'>
                    <div className='primercheckouAV'>
                        <p><strong>Items en Pedido:</strong></p>
                        {carrito.map((producto, index) => (
                            <p key={index}>{producto.cantidad} x {producto.nombre} - S/ {producto.precio * producto.cantidad}</p>
                        ))}
                    </div>

                    <div className='segundocheckouAV'>
                        <p><strong>Resumen de Orden</strong></p>
                        <div className='ordenAV'>
                            <ul>
                                <li>Subtotal:</li>
                                <li>Envío:</li>
                                <li>Total: </li>
                            </ul>
                            <ul>
                                <li>S/ {calcularTotalCarrito()}</li>
                                <li>S/ {envio}</li>
                                <li>S/ {calcularTotal()}</li>
                            </ul>
                        </div>
                        <center>
                            <button className='botoncheckAV2'>
                                <Link to="/pedidocompleto"><strong>Completar Orden</strong></Link>
                            </button>
                        </center>
                    </div>
                </div>
            </section>
            <Pie />
        </div>
    );
}

export default Checkoutv;
