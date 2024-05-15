import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pagina/LandingPage"
import Login from "./Componentes3/Login";
import CarritoCompras from "./Componentes2/CarritoCompras";
import CambiarContra from "./Pagina/CambiarContra";

import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/carritocompras" element={<CarritoCompras />} />
        <Route path="/CambiarContra" element={<CambiarContra/>} />
      </Routes>
    </div>
  )
}

export default App
