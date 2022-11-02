import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../../components/Product";
import { Sidebar } from "../../components/Sidebar";

interface Produto {
  produtoId: string;
  nome: string;
  qtd: string;
  categoriaId: string;
}

function EditProduct() {
  return (
    <div className="main-grid">
      <Sidebar />
      <div className="main-content">
        <h1 style={{ margin: "2rem" }}>Editar produtos!</h1>
      </div>
    </div>
  );
}

export default EditProduct;
