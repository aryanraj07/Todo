import React from "react";
import "../App.css";

const Card = ({ title = "NUll", desc = "Null" }) => {
  return (
    <div className="card">
      <img src="./vite.svg" alt="vite logo" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
