import Cabecera2 from "../ComponentesGeneral/Cabecera2";
import Cabecera3 from "../ComponentesGeneral/Cabecera3";
import Pie from "../ComponentesGeneral/Pie";

function DetalleOrden() {


    return (
        <div style={{
            height: '90dvh',
        }}>
            <Cabecera2 />
            <div style={{
                marginTop: '100px',
            }}>
                <div style={{
                    marginLeft: '20px',
                }}>
                    <h2 style={{textAlign: 'start'}}>   
                        Detalles de Orden Nro 131124141141
                    </h2>
                </div>
                
                <Cabecera3 title={'Datos de Compra'}/>
              
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    marginLeft: '20px',
                }}>
                    <div style={{background: '#FFFFFF', padding: '10px',
                        borderRadius: '8px',
                    }}>
                        <h2 >Direccion de envio</h2>
                        <div>
                            <p>Jiron Huaralchan 12144 Departamento 922</p>
                            <p>Jesus Maria, lima</p>
                            <p> Lima</p>
                            <p>Peru</p>
                        </div>

                    </div>
                    <div style={{background: '#FFFFFF', padding: '10px',
                        borderRadius: '8px',
                    }}>
                        <h2>Pago</h2>
                        <div>
                            <div>
                                <input type="radio" name="tipoPago" />
                                <label htmlFor="codigo">Pago con codigo QR</label>
                            </div>
                           
                            <div>
                                <input type="radio" name="tipoPago" checked/>
                                <label htmlFor="tarjeta">Pago con Tarjeta de Credito</label>
                            </div>
                        </div>
                        
                        <p>Tarjeta de Credito que termina en: ****8859</p>
                    </div>
                </div>

                <Cabecera3 title={'Metodo de Envío'}/>

                <div style={{
                    display: 'flex',
                    padding: '10px',
                    marginLeft: '20px',
                    marginRight: '20px',
                    background: '#FFFFFF',
                }}>
                    <div style={{
                        padding: '10px'
                    }}>
                        <input type="radio" name="tipoEnvio" />
                        <label htmlFor="codigo">Economico Areo - S/ 10.00</label>
                    </div>
                    <div style={{
                        padding: '10px',
                        marginLeft: '10px',
                    }}>
                    <input type="radio" name="tipoEnvio" />
                        <label htmlFor="tarjeta">Envio prioritario(5 a 10 dias) - S/17.00</label>
                    </div>
                </div>
            </div>


            <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    margin: '20px',
                }}>
                    <div style={{background: '#FFFFFF', padding: '10px',
                        borderRadius: '8px',
                    }}>
                        <h2>Items en Pedido</h2>
                        <div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '0.5fr 0.2fr'
                            }} >
                                <p>1x Juego de Cartas Pokemon Masters</p> <p>S/ 50.00</p>
                            </div>
                            <div style={{
                                 display: 'grid',
                                 gridTemplateColumns: '0.5fr 0.2fr'
                            }}> 
                                <p>1x Juego de Cartas Pokemon Masters</p> <p>S/ 50.00</p>
                            </div>
                            
                        </div>

                    </div>
                    <div style={{background: '#FFFFFF', padding: '10px',
                        borderRadius: '8px',
                    }}>
                        <h2 >Resumen de Orden</h2>
                            <div style={{
                                margin: 'auto',
                                width: '50%',
                                padding: '10px',
                                textAlign: 'center'
                            }}>

                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <p>Subtotal: </p> <p>S/ 100.00</p>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <p>Envio: </p> <p>S/ 17.00</p>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <p>Impuestos: </p> <p>S/ 18.00</p>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <p>Total: </p> <p>S/ 135.00</p>
                                </div>

                                    <button>Cancelar Pedido</button>
                            </div>
                    </div>
                </div>
            <Pie/>
        </div>
    )
}

export default DetalleOrden;