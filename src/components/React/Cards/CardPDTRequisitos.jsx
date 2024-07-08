import { useState } from "react";
export default function CardPDTRequisitos({ tipo }) {
  const [openItem, setOpenItem] = useState(false);

  const handleItems = () => {
    setOpenItem(!openItem);
  };
  return (
    <div className="CardPDTRequisitos">
      {tipo.requisitos.length > 1 && (
        <button
          onClick={handleItems}
          className={
            openItem
              ? "CardPDTRequisitos-button  CardPDTRequisitos-open"
              : "CardPDTRequisitos-button"
          }
        >
          ver requisitos
        </button>
      )}
      {openItem && (
        <ul className="item-container">
          {/* requisitos */}
          {tipo.requisitos?.map((requisito, index) => {
            return (
              <li
                key={index}
                className={`animate__animated animate__fadeInLeft animate__faster animate__delay-${index}s requisito`}
              >
                • {requisito}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
