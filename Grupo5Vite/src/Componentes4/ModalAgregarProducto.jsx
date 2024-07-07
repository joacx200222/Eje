import { useState } from "react";
import "./styles/modal.css";
import { Button } from "bootstrap";

function ModalAgregarProducto({
  handleCloseModal,
  setProductoAgregado,
  productoAgregado,
}) {
  const [producto, setProducto] = useState();
  const [error, setError] = useState("");
  const [id, setId] = useState(0);

  const agregarProducto = (producto) => {
    setProductoAgregado([...productoAgregado, producto]);
    console.log(producto);
    console.log(productoAgregado);
  };

  const handleFindProducto = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:3080/api/productos//findAllxId/${id}`,
      );

      const data = await res.json();

      if (res.ok) {
        setError("");

        setProducto(data);
      } else {
        setProducto("");
        setError(data.msg);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="header">
          <h3>Agregar Producto</h3>
          <button className="closeButton" onClick={handleCloseModal}>
            close
          </button>
        </div>
        <div className="searchContainer">
          <input
            className="modalSearch"
            type="search"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Buscar por ID"
          />{" "}
          <button
            className="searchButton"
            onClick={() => handleFindProducto(id)}
          >
            Buscar
          </button>
        </div>
        <table>
          <tr>
            <th>ID</th>
            <th style={{ width: "80%" }}>Descripcion</th>
            <th>Accion</th>
          </tr>
          {producto && (
            <tr>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>
                <button onClick={() => agregarProducto(producto)}>
                  Agregar
                </button>
              </td>
            </tr>
          )}
        </table>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default ModalAgregarProducto;
