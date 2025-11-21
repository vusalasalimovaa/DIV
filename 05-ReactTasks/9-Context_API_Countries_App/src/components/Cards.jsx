import React from "react";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const { countries,filteredData } = useContext(Context);
  // const { regions } = useContext(Context);
  // console.log(countries);

  return (
    <div className="cards">
      {filteredData.map((item) => {
        return (
          <div className="card" key={crypto.randomUUID()}>
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
