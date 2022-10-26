import axios from "axios";
import { useState, useEffect } from "react";
import { NewProduct } from "../../components/NewProduct/NewProduct";
import { Header } from "../../components/Header";
import "./styles.css";

function NovoProduto() {
  return (
    <>
      <Header />
      <div className="novo-produto-container">
        <h1>Cadastrar produto</h1>
        <p>Para cadastrar um novo produto, preencha todos os campos :).</p>
      </div>

      <NewProduct></NewProduct>
    </>
  );
}

export default NovoProduto;
