import axios from "axios";
import { useState, useEffect } from "react";
import { NewProduct } from "../../components/NewProduct/NewProduct";
import { Sidebar } from "../../components/Sidebar";
import "./styles.css";

function NovoProduto() {
  return (
    <div className="main-grid">
      <Sidebar />
      <div className="main-content new-product-container">
        <div className="new-product-title">
          <h1>Cadastrar produto</h1>
          <p>Para cadastrar um novo produto, preencha todos os campos :).</p>
        </div>

        <NewProduct></NewProduct>
      </div>
    </div>
  );
}

export default NovoProduto;
