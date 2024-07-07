import "./styles/listaProductoSeries.css";

function ListaProductoSeries({
  handleOpenModal,
  productoAgregado,
  setProductoAgregado,
}) {
  const eliminarProducto = (id) => {
    const nuevosProductos = productoAgregado.filter(
      (producto) => producto.id !== id,
    );
    setProductoAgregado(nuevosProductos);
  };

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#d9d9d9",
        }}
      >
        <h3
          style={{
            width: "fit-content",
            margin: 0,
            padding: "10px",
          }}
        >
          Productos en la Serie
        </h3>
        <button onClick={handleOpenModal}>+</button>
      </div>
      <table
        style={{
          background: "#FFFFFF",
          width: "100%",
        }}
      >
        <tr>
          <th>ID</th>
          <th>nombre</th>
          <th>Accion</th>
        </tr>
        {productoAgregado &&
          productoAgregado.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>
                <button onClick={() => eliminarProducto(producto.id)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default ListaProductoSeries;

