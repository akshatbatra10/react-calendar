import React from "react";

const CardComponent = ({ item }) => (
  <div className="card" key={item.id}>
    <div className="card-body">
      <span className="date" style={{ backgroundColor: item.color }}>
        {item.date}
      </span>
      <span className="month">{item.month}</span>
      <h5 className="card-title">{item.title}</h5>
      <h6 className="card-subtitle">{item.description}</h6>
    </div>
  </div>
);

export default CardComponent;
