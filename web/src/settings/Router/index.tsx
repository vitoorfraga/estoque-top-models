import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Estoque from "../../pages/Estoque";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NovoProduto from "../../pages/NovoProduto";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Estoque />} path="estoque" />
        <Route element={<NovoProduto />} path="novo-produto" />

        <Route element={<Login />} path="login" />
      </Routes>
    </Router>
  );
};

export default Routers;
