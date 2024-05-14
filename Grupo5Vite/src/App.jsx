import { Routes, Route } from "react-router-dom"
import LandingPage from "./Pagina/LandingPage"
import './App.css'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
      </Routes>
    </div>
  )
}

export default App
