import React from "react";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
// import Cards from '../components/Cards'

const Sefihe = ({ item }) => {
  const { countries } = useContext(Context);
  // console.log(countries.filter(elem => elem.region == item));
  const navigate = useNavigate();
  return (
    <div className="cards">
      {countries
        .filter((elem) => elem.region == item)
        .map((el) => {
          return (
            <div
              onClick={() => navigate(`/detail/${el.cca3}`)}
              className="card"
              key={crypto.randomUUID()}
            >
              <Card item={el} />
            </div>
          );
        })}
    </div>
  );
};

export default Sefihe;
