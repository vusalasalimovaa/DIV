import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="cards">
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
