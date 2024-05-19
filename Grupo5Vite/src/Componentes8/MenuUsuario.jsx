import React from 'react';
import './MenuUsuario.css'
import Cabecera2 from '../ComponentesGeneral/Cabecera2';
import Pie from '../ComponentesGeneral/Pie';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import Data from '../Data/Artículos.json'
import Pagination from '../Componentes5/ProductosAdm/Paginacion';

function MenuUsuario(){
    return(
        <>
        <Cabecera2/>
        <div className='wrapperMU'> 
            <div className='my-accountMU'>
                <p>Mi Cuenta</p>
            </div>
            <div className='my-account-details'>
                <p>Órdenes Recientes</p>
                <p>Mis datos de registro</p>
                <p>Cambiar password</p>
            </div>
            <div className='wrapper-details'>
                <div className='wrapper-header'>
                    <div className='wrapper-header-head'><p>Órdenes recientes</p></div>
                    <div className='wrapper-header-filtro'>
                    <p>Ordenar por fecha (más antiguas primero)</p>
                    </div>
                </div>
                <div className='wrapper-ordenes'>
                    <p>Orden x3 Items (Juego de cartas, juego de cartas...)</p>
                    <div className='wrapper-detalles'>
                    <div className='wrapper-datos'>
                        <p>Fecha: 12 de febrero de 2022 - Total: S/ 122.00</p>
                        <p>Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru</p>
                        <div className='wrapper-orden'>
                            <p>Orden Nro. 12345232</p>
                        </div>
                        <div className='ver-detalle'>
                            <p>Ver detalle</p>
                        </div>
                        <hr></hr>
                    </div>
                    </div>
                    <p>Order x4 Items (Pokemon Red, Pokemon Blue, Ghost of Tsushima)</p>
                    <div className='wrapper-datos'>
                        <p>Fecha: 12 de febrero de 2022 - Total: S/ 122.00</p>
                        <p>Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru</p>
                        <div className='wrapper-orden'>
                            <p>Orden Nro. 12345232</p>
                        </div>
                        <div className='ver-detalle'>
                            <p>Ver detalle</p>
                        </div>
                    <hr></hr>
                    </div>
                    <p>Order x4 Items (Pokemon Red, Pokemon Blue, Ghost of Tsushima)</p>
                    <div className='wrapper-datos'>
                        <p>Fecha: 12 de febrero de 2022 - Total: S/ 122.00</p>
                        <p>Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru</p>
                        <div className='wrapper-orden'>
                            <p>Orden Nro. 12345232</p>
                        </div>
                        <div className='ver-detalle'>
                            <p>Ver detalle</p>
                        </div>
                    <hr></hr>
                    </div>
                    <p>Order x4 Items (Pokemon Red, Pokemon Blue, Ghost of Tsushima)</p>
                    <div className='wrapper-datos'>
                        <p>Fecha: 12 de febrero de 2022 - Total: S/ 122.00</p>
                        <p>Enviado a: Jiron Huascar 123, Jesus Maria, Lima, Peru</p>
                        <div className='wrapper-orden'>
                            <p>Orden Nro. 12345232</p>
                        </div>
                        <div className='ver-detalle'>
                            <p>Ver detalle</p>
                        </div>
                    <hr></hr>
                    </div>
                </div>
            </div>
        </div>
        <Pagination></Pagination>
        <Pie/>
        </>
    )
}

export default MenuUsuario