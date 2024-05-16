import ActualizarDatosForm from "../Componentes4/ActualizarDatosForm";
import MenuUsuario from "../Componentes4/MenuUsuario";
import Cabecera2 from "../ComponentesGeneral/Cabecera2";
import Cabecera3 from "../ComponentesGeneral/Cabecera3";
import Pie from "../ComponentesGeneral/Pie";

function RegistroDatos () {

    return (
        <div>
            <Cabecera2 />
            
            <div style={{height:'70dvh', padding: '100px', display: 'grid', gridTemplateColumns: '0.3fr 1fr',
                border: '1px solid black'
               }}>
                <MenuUsuario />
                <div>
                    <Cabecera3 title={'Datos de Registro'}/>
                    <ActualizarDatosForm />
                </div>
               
            </div>
            <Pie />
        </div>

    )
}

export default RegistroDatos;