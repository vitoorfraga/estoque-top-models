import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import EditProduct from "../../pages/EditProduct";
import Estoque from "../../pages/Estoque";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import NovoProduto from "../../pages/NovoProduto";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="login" />

        <Route element={<Home />} path="/" />

        <Route element={<Estoque />} path="estoque" />
        <Route element={<NovoProduto />} path="novo-produto" />
        <Route element={<EditProduct />} path="editar-produto" />

        <Route element={<Contact />} path="contato" />
      </Routes>
    </Router>
  );
};

export default Routers;
