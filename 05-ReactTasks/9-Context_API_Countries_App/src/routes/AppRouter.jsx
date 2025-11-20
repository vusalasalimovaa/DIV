import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Filter from "../components/Filter";
import { Context } from "../context/ContextProvider";
import Sefihe from "../pages/Sefihe";

const AppRouter = () => {
  const { loading, countries, region } = useContext(Context);
  // console.log(countries);
  // console.log(region);

  return (
    <div>
      {loading ? <div>Loading...</div> : <Filter />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        {region.map((item) => {
          return (
            <Route path={`/region/${item}`} element={<Sefihe item={item} />} />
          );
        })}
      </Routes>
    </div>
  );
};

export default AppRouter;
