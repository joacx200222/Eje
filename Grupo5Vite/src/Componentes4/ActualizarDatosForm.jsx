import { useState } from "react";
import "./styles/FormCambiarPassword.css";

function ActualizarDatosForm() {
  const storedUser = localStorage.getItem("usuario");
  const user = JSON.parse(storedUser);

  const [nombre, setNombre] = useState(user.nombre);
  const [correo, setCorreo] = useState(user.correo);
  const [apellido, setApellido] = useState(user.apellido);
  const [message, setMessage] = useState("");

  const handleUpdateUser = async () => {
    try {
      const res = await fetch(
        "http://localhost:3080/api/basedatos/updateUser",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre,
            apellido,
            correo,
            id: user.id,
          }),
        },
      );

      const data = res.json();

      if (res.ok) {
        setMessage("");
        setMessage(data.msg);
      } else {
        setMessage("");
        setMessage(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div>
        <div className="inputContainer">
          <input
            placeholder="Nombre"
            className="inputCambiar"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            placeholder="Apellido"
            className="inputCambiar"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <input
            placeholder="Correo"
            className="inputCambiar"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
          />
        </div>
        {message && <p>{message}</p>}
        <div className="btnContainer">
          <button className="btnCambiar" onClick={handleUpdateUser}>
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActualizarDatosForm;

