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

function Home() {
  return (
    <div className="main-grid">
      <Sidebar />
      <div className="main-content">
        <h1>HOME</h1>
      </div>
    </div>
  );
}

export default Home;
