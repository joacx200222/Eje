import '../App.css'
import '../css/BuscadorPrincipal.css'
import '../css/body.css'
import Cabecera1 from '../ComponentesGeneral/Cabecera1'
import Pie from '../ComponentesGeneral/Pie'
import Body from '../Componentes1/PrincipalBody'
import Buscador from '../Componentes1/Buscador'

function LandingPage() {

    return (
      <>
        <div>
            <Cabecera1/>
            <Buscador/>
            <Body/>
            <br></br>
            <Pie/>
        </div>
      </>
    )
  }
  
  export default LandingPage;