import React from "react";

function MedicationInfoCard( {medication} ) {
  return (
      <div className="card">
        <div className="card__content">
          <div className="card__title">{medication.name}</div>
          <p className="card__text">{medication.strength}</p>
        </div>
        <div className="info-card-divider"></div>
      </div>
  );
}

export default MedicationInfoCard;
