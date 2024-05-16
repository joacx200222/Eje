import Cabecera2 from "../ComponentesGeneral/Cabecera2";
import Cabecera3 from "../ComponentesGeneral/Cabecera3";
import Pie from "../ComponentesGeneral/Pie";


function OrdenesRecientes() {
    return (
        <div style={{
            height: '90dvh',
        }}>
            <Cabecera2 />
            <div style={{
                marginTop: '100px',
            }}>
                <h2 style={{border: '1px solid black', textAlign: 'start'}}>   
                    Detalles de Orden Nro 131124141141
                </h2>
                <Cabecera3 title={'Datos de Compra'}/>
              
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    padding: '20px',
                }}>
                    <div style={{border: '1px solid black', width: '100%'}}>
                        <h3 style={{width: 'fit-content'}}>Direccion de envio</h3>
                        <ul>
                            <li>
                            Jiron Huaralchan 12144 Departamento 922
                            </li>
                            <li>
                                Jesus Maria, lima
                            </li>
                            <li>
                                Lima
                            </li>
                            <li>
                                Peru
                            </li>
                        </ul>

                    </div>
                    <div style={{border: '1px solid black'}}>
                        <h3>Pago</h3>
                        <ul>
                            <li>
                                Pago con Codigo QR
                            </li>
                            <li>
                                Pago con tarjeta de credito 
                            </li>
                        </ul>
                    </div>
                </div>

                <Cabecera3 title={'Metodo de Envío'}/>

                <div style={{
                    display: 'flex',
                    padding: '10px',
                    background: '#FFFFFF'
                }}>
                    <div>
                        <p>Economico Aereo - S/10.00</p>
                    </div>
                    <div>
                        <p>Envio prioritario (5 a 10 días) - S/17.00</p>
                    </div>
                </div>
            </div>


            <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                    padding: '20px',
                }}>
                    <div style={{border: '1px solid black', width: '100%'}}>
                        <h3 style={{width: 'fit-content'}}>Items en Pedido</h3>
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
                    <div style={{border: '1px solid black'}}>
                        <h3 style={{width: 'fit-content'}}>Resumen de Orden</h3>
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

export default OrdenesRecientes;