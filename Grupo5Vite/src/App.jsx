import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pagina/LandingPage"
import Login from "./Componentes3/Login";

import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
