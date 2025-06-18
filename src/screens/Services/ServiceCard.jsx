import React from "react";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <div className="service-title">{title}</div>
      <div className="service-text">{text}</div>
    </div>
  );
};

export default ServiceCard;
