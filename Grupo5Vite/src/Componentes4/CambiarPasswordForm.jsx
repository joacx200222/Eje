import "./styles/FormCambiarPassword.css";
import React, { useEffect, useState } from "react";

function CambiarPasswordForm() {
  const storedUser = localStorage.getItem("usuario");
  const user = JSON.parse(storedUser);

  const [lastPass, setLassPast] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassTwo, setNewPassTwo] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async () => {
    try {
      const res = await fetch(
        "http://localhost:3080/api/basedatos/changePass",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lastPass,
            newPassTwo,
            newPass,
            id: user.id,
          }),
        },
      );

      const data = await res.json();
      if (res.ok) {
        setMessage("");
        setMessage(data.msg);
      } else {
        setMessage("");
        setMessage(data.msg);
      }

      setNewPass("");
      setNewPassTwo("");
      setLassPast("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div>
        <div className="inputContainer">
          <input
            placeholder="Actual"
            className="inputCambiar"
            name="lastPass"
            value={lastPass}
            onChange={(e) => setLassPast(e.target.value)}
            required
          />
          <input
            placeholder="Nuevo"
            className="inputCambiar"
            name="newPass"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            required
          />
          <input
            placeholder="Repetir"
            className="inputCambiar"
            name="newPassTwo"
            value={newPassTwo}
            onChange={(e) => setNewPassTwo(e.target.value)}
            required
          />
        </div>
        {message && <p>{message}</p>}
        <div className="btnContainer">
          <button className="btnCambiar" onClick={handleChangePassword}>
            Cambiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CambiarPasswordForm;

