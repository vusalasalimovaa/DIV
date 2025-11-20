import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
            <Link to={`/detail/${item.id}`} key={item.id} style={{display:'block'}}>
            {item.title}
            </Link>
        )
      })}
    </div>
  );
};

export default Cards;
