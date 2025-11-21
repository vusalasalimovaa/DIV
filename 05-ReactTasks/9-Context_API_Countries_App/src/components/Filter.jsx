import React, { useContext, useState } from "react";
import { Context } from "../context/ContextProvider";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

const Filter = () => {
  const { countries,search,setSearch } = useContext(Context);
  // console.log(countries);

  const region = [...new Set(countries.map((item) => item.region))];
  // console.log(region);

  // const {filterRegions} = useContext(Context)


  return (
    <div>
      <h1>Countries App</h1>
      <div className="region-btns">
        <input type="text" placeholder="Search country..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <NavLink className="region-btn" to={"/"}>
          All countries
        </NavLink>
        {region?.map((item) => {
          return (
            <div key={crypto.randomUUID()}>
              <NavLink className="region-btn" to={`/region/${item}`}>
                {item}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
