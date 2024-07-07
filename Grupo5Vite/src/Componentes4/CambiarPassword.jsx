import Cabecera3 from "../ComponentesGeneral/Cabecera3";
import CambiarPasswordForm from "../Componentes4/CambiarPasswordForm";

function CambiarPassword() {
  return (
    <div>
      <Cabecera3 title={"Cambiar Contraseña"} />
      <CambiarPasswordForm />
    </div>
  );
}

export default CambiarPassword;

