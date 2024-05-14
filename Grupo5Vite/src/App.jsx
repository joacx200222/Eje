import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pagina/LandingPage"
import login from "./Pagina/login"
import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/enlaceMiCuenta" element={ <login /> } />
      </Routes>
    </div>
  )
}

export default App
