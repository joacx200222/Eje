import { useState } from "react";
import ListaProductoSeries from "./ListaProductoSeries";
import ModalAgregarProducto from "./ModalAgregarProducto";
import { useNavigate } from "react-router-dom";

function NewSerie() {
  const [openModal, setOpenModal] = useState(false);

  //manejo del agregado de serie
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const [productoAgregado, setProductoAgregado] = useState([]);

  const navigate = useNavigate();

  const handleAddSerie = async () => {
    try {
      const res = await fetch("http://localhost:3080/api/series/agregar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          descripcion: descripcion,
          imagen: imagen,
        }),
      });

      if (res.ok) {
        setNombre("");
        setDescripcion("");
        setImagen("");

        navigate("/Series");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    console.log("press");
  };

  return (
    <div
      style={{
        marginLeft: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imagen}
          style={{
            border: "1px solid black",
            width: "100%",
            borderRadius: "8px",
            minHeight: "300px",
          }}
        />
        <input
          type="text"
          value={imagen}
          maxLength={225}
          name="imagen"
          onChange={(e) => setImagen(e.target.value)}
        />
        <button
          style={{
            marginTop: "10px",
          }}
        >
          {" "}
          Agregar Imagen
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <label htmlFor="nombre">Nombre</label>
        <input
          name="nombre"
          style={{
            fontSize: 18,
            padding: "10px",
            borderRadius: "8px",
          }}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="Descripcion">Descripcion</label>
        <textarea
          name="Descripcion"
          style={{
            borderRadius: "8px",
            minHeight: "100px",
            border: "1px solid black",
          }}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <ListaProductoSeries
          handleOpenModal={handleOpenModal}
          productoAgregado={productoAgregado}
          setProductoAgregado={setProductoAgregado}
        />
        <div
          style={{
            marginTop: "20px",
            textAlign: "end",
          }}
        >
          <button onClick={() => handleAddSerie()}>Guardar</button>
        </div>
      </div>
      {openModal && (
        <ModalAgregarProducto
          handleCloseModal={handleOpenModal}
          setProductoAgregado={setProductoAgregado}
          productoAgregado={productoAgregado}
        />
      )}
    </div>
  );
}
export default NewSerie;

