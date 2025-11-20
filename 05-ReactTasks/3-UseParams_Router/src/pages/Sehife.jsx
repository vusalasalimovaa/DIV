import React from "react";
import { useParams } from "react-router-dom";

const Sehife = ({ category, products }) => {
  return (
    <div className="cards">
      {products
        .filter((item) => item.category == category)
        .map((item) => {
          return (
            <div className="card">
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Sehife;
