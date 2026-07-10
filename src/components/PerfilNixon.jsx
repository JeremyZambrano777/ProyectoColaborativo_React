import { useState } from "react";
import "./Componentes.css";

function PerfilCompañeroNixon() {

  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="card">

      <h2>👩‍💻 Desarrollador Frontend</h2>

      <p><strong>Nombre:</strong> Nixon</p>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar información" : "Mostrar información"}
      </button>

      {mostrar && (
        <p className="info">
          Este integrante desarrolló un componente utilizando React,
          Hooks y CSS para mejorar la interfaz del proyecto.
        </p>
      )}

    </div>
  );
}

export default PerfilCompañeroNixon ;