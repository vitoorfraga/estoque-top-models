import axios from "axios";
import { useState, useEffect } from "react";
import Dashboard from "../../components/Dashboard";
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
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;
