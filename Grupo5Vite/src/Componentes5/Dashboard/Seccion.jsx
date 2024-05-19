import '../../css/Dashboard.css';
import React, { useState } from 'react';

const Seccion = () => {
  const [showDateInput, setShowDateInput] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    alert('Fecha seleccionada: ' + event.target.value);
    // Aquí puedes añadir más lógica para manejar la fecha seleccionada
  };

  return (
    <main className="mainSeccion">
        <h2 className="tituloH2-text">Dashboard</h2>
      {!showDateInput && (
        <p
          id="mostrarFecha"
          onClick={() => setShowDateInput(true)}
          style={{ cursor: 'pointer', color: 'black' }}
        >
          Cambiar fecha o periodo
        </p>
      )}
      {showDateInput && (
        <input
          type="date"
          id="fechaInput"
          value={selectedDate}
          onChange={handleDateChange}
          autoFocus
        />
      )}
    </main>
  );
};

export default Seccion;


/*
function Seccion() {
    return (
        <main>
            <article className="tituloH2-background">
                <h2 className="tituloH2-text">Dashboard</h2>
                <p className="otro-texto">Cambiar Fecha o Periodo</p>
            </article>
            </main>
    );
}

export default Seccion;
*/
/* 
// Seccion.js
import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import '../../css/Dashboard.css';

function Seccion() {
    const [showCalendar, setShowCalendar] = useState(false);

    const handleClick = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        <article className="tituloH2-background">
            <h2 className="tituloH2-text">Dashboard</h2>
            <p className="otro-texto" onClick={handleClick}>
                Cambiar Fecha o Periodo
            </p>
            {showCalendar && <CalendarComponent />}
        </article>
    );
}

export default Seccion;
*/