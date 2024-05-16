import '../App.css'
import Cabecera2 from '../ComponentesGeneral/Cabecera2'
import MenuUsuario from '../Componentes4/MenuUsuario';
import Pie from '../ComponentesGeneral/Pie'
import CambiarPasswordForm from '../Componentes4/CambiarPasswordForm';
import Cabecera3 from '../ComponentesGeneral/Cabecera3';
import { useState } from 'react';

function CambiarContra() {
    const [value, setValue] = useState('')

    const guardarvalue = (value) => {
      localStorage.setItem('item', value)  
      console.log(value)
    }

    return (
      <>
        <div>
            <Cabecera2/>
              <div style={{height:'70dvh', padding: '100px', display: 'grid', gridTemplateColumns: '0.3fr 1fr',
                border: '1px solid black'
               }}> 
                <MenuUsuario />
                <div>
                  <Cabecera3 title={'Cambiar Contaseña'}/>
                  <CambiarPasswordForm  actual={'Actual'} nuevo={'Nuevo'} repetir={'Repetir'} 
                  value={value} setValue={setValue} guardarValue={guardarvalue}/>
                </div>
              </div>
              <Pie />
        </div>
      </>
    )
  }
  
export default CambiarContra