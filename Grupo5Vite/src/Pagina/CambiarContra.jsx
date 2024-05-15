import '../App.css'
import Cabecera2 from '../ComponentesGeneral/Cabecera2'
import MenuUsuario from '../Componentes4/MenuUsuario';
import CambiarPassword from '../Componentes4/CambiarPassword'
import Pie from '../ComponentesGeneral/Pie'

function CambiarContra() {

    return (
      <>
        <div>
            <Cabecera2/>
            <div style={{display: 'grid',
              gridTemplateColumns: '0.4fr 1fr',
              gridGap: '20px',
              height: '70dvh',
            }}>
              <MenuUsuario />
              <CambiarPassword />
              <Pie />
            </div>  
        </div>
      </>
    )
  }
  
export default CambiarContra