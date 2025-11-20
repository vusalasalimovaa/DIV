import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const region = [...new Set(countries.map((item) => item.region))];
  // console.log(region);

  useEffect(() => {
    axios(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,languages,borders,maps,unMember,cca3"
    )
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // console.log(regions);

  return (
    <div>
      <Context.Provider value={{ countries, loading, region }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;
