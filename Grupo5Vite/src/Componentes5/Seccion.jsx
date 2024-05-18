import React from 'react';
import '../css/Dashboard.css';

function Seccion () {
    return (
<<<<<<< HEAD
        <div className="content">
        <h2 className="tituloH2-background">
            <span className="tituloH2-text">Dashboard</span>
            <span id="fechaInput">Cambiar Fecha o Periodo</span>
        </h2>
        </div>
    )
=======
        <main>
            <article className="tituloH2-background">
                <h2 className="tituloH2-text">Dashboard</h2>
                <p className="otro-texto">Cambiar Fecha o Periodo</p>
            </article>
            </main>
    );
>>>>>>> 1cd6604b73235e0a31228ea619ecfa93108d3dc5
}

export default Seccion;

{/* 
// Seccion.js
import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import '../css/Dashboard.css';

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
*/}