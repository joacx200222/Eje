import { Routes, Route } from "react-router-dom"

import LandingPage from "./ComponentesPágina/LandingPage"

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
