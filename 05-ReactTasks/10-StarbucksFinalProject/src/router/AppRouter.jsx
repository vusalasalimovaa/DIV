import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Layout from "../../../3-UseParams_Router/src/Layout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Basket from "../pages/Basket";


const AppRouter = () => {
  return (
    <>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/basket" element={<Basket   />} />
          </Route>
        </Routes>
    </>
  );
};

export default AppRouter;
