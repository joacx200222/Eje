import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pagina/LandingPage"
import CarritoCompras from "./Componentes2/CarritoCompras";
import CambiarContra from "./Pagina/CambiarContra";
import AdminDashBoard from "./Pagina/AdminDashBoard";
import RegistroDatos from "./Pagina/DatosRegistro";
import OrdenesRecientes from "./Pagina/OrdenesRecientes";
import Login from "./Componentes8/Login"
import Registro from "./Componentes8/Registro"
import LoginError from "./Componentes8/LoginError"

import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/loginerror" element={<LoginError />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/carritocompras" element={<CarritoCompras />} />
        <Route path="/CambiarContra" element={<CambiarContra/>} />
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>} />
        <Route path="/RegistroDatos" element={<RegistroDatos/>} />        
        <Route path="/OrdenesRecientes" element={<OrdenesRecientes />}/>
      </Routes>
    </div>
  )
}

export default App
