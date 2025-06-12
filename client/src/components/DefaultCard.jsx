import React from "react";
import "../css/DefaultCard.css";

export const DefaultCard = ({ category }) => {
  return (
    <div className="default-card" style={{ backgroundColor: category.color }}>
      <div className="default-card-text">{category.name}</div>
      <img
        className="default-card-img"
        src={category.img}
        alt={`${category.name} content`}
      />
    </div>
  );
};
