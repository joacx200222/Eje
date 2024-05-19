import ListaSeries from "../Componentes4/ListaSeries";
import Nav from "../Componentes5/Dashboard/Nav";
import Cabecera2 from "../ComponentesGeneral/Cabecera2";
import Cabecera3 from "../ComponentesGeneral/Cabecera3";
import Pie from "../ComponentesGeneral/Pie";

function Series() {
    return (
        <>
            <Cabecera2 />
            <div style={{display: 'flex',
            width: '100%',

               }}>
                <Nav />

                <div style={{marginTop: '60px', width: '100%'}}>
                    <Cabecera3 title={'Series'}/>
                    <ListaSeries />
                </div>
            
            </div>
            
            <Pie />
        </>
    )
}

export default Series;