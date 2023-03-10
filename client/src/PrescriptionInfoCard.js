import React from "react";

function PrescriptionInfoCard( {prescription} ) {
  return (
      <div className="card">
        <div className="card__content">
          <div className="card__title">{prescription.medication.name}</div>
          <p className="card__text">{prescription.medication.strength}</p>
          <p className="card__text">{prescription.dosing_frequency}</p>
          <div className="card__detail">
            <p>
                {prescription.rx_number} | {prescription.provider}
            </p>

          </div>
        </div>
        <div className="info-card-divider"></div>
      </div>

  );
}

export default PrescriptionInfoCard;
