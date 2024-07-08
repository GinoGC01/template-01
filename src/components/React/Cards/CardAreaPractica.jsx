import { useState } from "react";
import { PracticaTipo } from "./CardPDTipo.jsx";
import "animate.css";
import "./cardAreaPractica.css";

export function CardAreaPractica({ practica }) {
  const [descripcion, setDescripcion] = useState(false);
  const handleDescripcion = () => {
    setDescripcion(!descripcion);
  };
  return (
    <li className="cardAreaPractica-container ">
      <button onClick={handleDescripcion}>
        <span>{descripcion ? "-" : "+"}</span>
        {practica.title}
      </button>
      {/* practicas departamento */}
      {descripcion && (
        <div className="animate__animated animate__fadeInLeft animate__faster details">
          <p>{practica.practicaDescription}</p>
          <PracticaTipo practica={practica} />
        </div>
      )}
    </li>
  );
}
