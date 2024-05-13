import '../App.css'
import '../css/BuscadorPrincipal.css'
import Cabecera1 from '../Componentes/Cabecera1'
import Cabecera2 from '../Componentes/Cabecera2'
import Pie from '../Componentes/Pie'
import Buscador from '../Components/Alumno1/Buscador'

function LandingPage() {

    return (
      <>
        <div>
            <Cabecera1/>
            <Cabecera2/>
            <Buscador/>
            <Pie/>
        </div>
      </>
    )
  }
  
  export default LandingPage;