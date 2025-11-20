import React from "react";

const Products = ({ products }) => {
  return (
    <div className="cards">
      {products.map((item) => {
        return (
            <div className="card">
              <img id="image" src={item.image} alt="mehsul" />
              <h2 id="name"> {item.name}</h2>
              <p id="price">${item.price}</p>
              <button>Səbətə əlavə et</button>
            </div>
        );
      })}
    </div>
  );
};

export default Products;
