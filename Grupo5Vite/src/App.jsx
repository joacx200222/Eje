import { Routes, Route } from "react-router-dom"

import CarritoCompras from "./Componentes2/CarritoCompras";
import Login from "./Componentes8/Login"
import Registro from "./Componentes8/Registro"
import LoginError from "./Componentes8/LoginError"
import LandingPage from "./PaginasUsuario/LandingPage"
import CambiarContra from "./PaginasUsuario/CambiarContra";
import AdminDashBoard from "./PaginasAdmin/AdminDashBoard";
import RegistroDatos from "./PaginasUsuario/DatosRegistro";
import PaginaProducto from "./PaginasUsuario/PáginaProducto";
import UsuariosRegistrados from "./PaginasAdmin/UsuariosRegistrados";
import Ordenes from "./PaginasAdmin/Ordenes";
import Productos from "./PaginasAdmin/ProductosAdm";
import Checkoutv from "./Componentes2/checkoutv";
import MenuUsuario from "./Componentes8/MenuUsuario";
import RecuperarContraseña from "./Componentes8/RecuperarContraseña";
import Findepedido from "./Componentes2/Findepedido";
import ProductosAdm from "./PaginasAdmin/ProductosAdm";
import AgregarProducto from "./PaginasAdmin/AgregarProducto";
import VerProducto from "./PaginasAdmin/VerProducto";
import DetalleOrden from "./PaginasUsuario/DetalleOrden";
import Series from "./PaginasAdmin/Series";
import PaginaProductoPrincipal from './Componentes1/PaginaProductoPrincipal';
import AddSerie from "./PaginasAdmin/AddSerie";

import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage/> } />
        <Route path="/login" element={<Login />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carritocompras" element={<CarritoCompras />} />
        <Route path="/CambiarContra" element={<CambiarContra/>} />
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
        <Route path="/RegistroDatos" element={<RegistroDatos/>} />        
        <Route path="/PaginaProducto" element={<PaginaProducto />}/>
        <Route path="/UsuariosRegistrados" element={<UsuariosRegistrados />}/>
        <Route path="/Ordenes" element={<Ordenes />}/>
        <Route path="/Productos" element={<Productos />}/>
        <Route path="/Checkoutv" element={ <Checkoutv /> } />
        <Route path="/MenuUsuario" element={<MenuUsuario/>}/>
        <Route path="/recuperarcontraseña" element={<RecuperarContraseña/>}/>
        <Route path="/pedidocompleto" element={<Findepedido/>}/>
        <Route path="/ProductosAdm" element={<ProductosAdm/>}/>
        <Route path="/AgregarProducto" element={<AgregarProducto/>}/>
        <Route path="/VerProducto" element={<VerProducto/>}/>
        <Route path="/DetalleOrden" element={<DetalleOrden />}/>
        <Route path="/producto/:id" element={<PaginaProductoPrincipal />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/AddSerie" element={<AddSerie />} />


      </Routes>
    </div>
  )
}

export default App
