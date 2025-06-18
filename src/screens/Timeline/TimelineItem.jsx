import React from "react";

const TimelineItem = ({ year, title, description }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <h3>{year} - {title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
