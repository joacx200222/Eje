import { useEffect, useState } from "react";
import "./styles/listaSeries.css";

function ListaSeries() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const handleSeries = async () => {
      try {
        const res = await fetch("http://localhost:3080/api/series/all");
        if (res.ok) {
          const data = await res.json();
          setSeries(data.series);
        }
      } catch (error) {
        console.error(error);
      }
    };

    handleSeries();
  }, []);

  return (
    <div
      style={{
        marginLeft: "20px",
      }}
    >
      <table className="tableSeries">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Fecha de Creacion</th>
            <th>Nro. Productos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {series &&
            series.map((serie) => (
              <tr key={serie.id}>
                <td>{serie.id}</td>
                <td>{serie.nombre}</td>
                <td>{serie.descripcion}</td>
                <td>{serie.createdAt}</td>
                <td>12</td>
                <td>
                  <a href="#">ver</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaSeries;

