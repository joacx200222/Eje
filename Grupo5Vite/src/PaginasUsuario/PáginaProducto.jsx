import '../App.css'
import Cabecera1 from '../ComponentesGeneral/Cabecera1'
import Pie from '../ComponentesGeneral/Pie'
import PaginaProd from '../Componentes1/PaginaProductoPrincipal'

function PaginaProducto(){
    return(
        <>
        <div>
            <Cabecera1/>
            <PaginaProd/>
            <Pie/>
        </div>
        </>
    )
}

export default PaginaProducto