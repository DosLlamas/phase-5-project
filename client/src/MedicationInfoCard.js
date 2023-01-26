import React from "react";

function MedicationInfoCard( {medication} ) {
  return (
    <li className="cards__item">
      <div className="card">
        <div className="card__content">
          <div className="card__title">{medication.name}</div>
          <p className="card__text">{medication.strength}</p>
        </div>
      </div>
    </li>
  );
}

export default MedicationInfoCard;
