import React from "react";

const OfferCard = ({ icon, title, text }) => {
  return (
    <div className="card offer-card">
      <div className="offer-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default OfferCard;
