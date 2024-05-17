import '../App.css'
import Cabecera1 from '../ComponentesGeneral/Cabecera1'
import Pie from '../ComponentesGeneral/Pie'
import PaginaProd from '../Componentes1/PaginaProductoPrincipal'

function PaginaProducto(){
    return(
        <>
        <div>
            <Cabecera1/>
            <br></br>
            <PaginaProd/>
            <br></br>
            <Pie/>
        </div>
        </>
    )
}

export default PaginaProducto