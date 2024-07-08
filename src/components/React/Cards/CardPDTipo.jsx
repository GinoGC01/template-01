import { useState } from "react";
import CardPDTRequisitos from "./CardPDTRequisitos";
import "animate.css";

export function PracticaTipo({ practica }) {
  const [openTipo, setOpenTipo] = useState(false);

  const handleTipos = () => {
    setOpenTipo(!openTipo);
  };

  return (
    <>
      {practica.tipo && (
        <button
          onClick={handleTipos}
          className={
            openTipo ? "cardPDT-button cardPDT-open" : "cardPDT-button"
          }
        >
          {practica.tipo.length > 1
            ? `TIPOS de ${practica.title}`
            : `TIPO de ${practica.title}`}
        </button>
      )}

      {/* tipos */}
      {practica.tipo && openTipo && (
        <ul className="tipo-conteiner">
          {practica.tipo.map((tipo, index) => {
            return (
              <li
                key={tipo.id}
                className={`animate__animated animate__fadeInLeft animate__faster animate__delay-${index}s tipo`}
              >
                <h5>• {tipo.title}</h5>
                <p>{tipo.descripcion}</p>
                {/* requisitos */}
                <CardPDTRequisitos tipo={tipo} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
