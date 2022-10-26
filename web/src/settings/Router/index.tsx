import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NovoProduto from "../../pages/NovoProduto";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NovoProduto />} path="novo-produto" />
      </Routes>
    </Router>
  );
};

export default Routers;
