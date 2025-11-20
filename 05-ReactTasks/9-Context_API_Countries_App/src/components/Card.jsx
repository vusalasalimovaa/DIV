import React, { useContext } from "react";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const { countries } = useContext(Context);

  return (
    <div className="cards">
      <div
        onClick={() => navigate(`/detail/${item.cca3}`)}
        key={crypto.randomUUID()}
      >
        <img src={item.flags.png} alt="" />
        <h3>{item.name.common}</h3>
        <p>
          Population:
          <CountUp end={item.population} duration={2.5} separator="" />
        </p>
      </div>
    </div>
  );
};

export default Card;
