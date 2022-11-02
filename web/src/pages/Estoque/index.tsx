import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../../components/Product";
import { Sidebar } from "../../components/Sidebar";

interface Produto {
  produtoId: string;
  nome: string;
  qtd: string;
  categoriaId: string;
  tamanho: string;
}

function Estoque() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/estoque").then((response) => {
      setProdutos(response.data); //pega as informações dos jogos no back-end (API)
    });
  }, []);

  return (
    <div className="main-grid">
      <Sidebar />
      <div className="main-content">
        <div className="productListHeader">
          <span>Nome</span>
          <span>Código</span>
          <span>Tamanho</span>
          <span>Quantidade</span>
          <span className="productListHeaderCategory">Categoria</span>
        </div>

        <div className="productListBody">
          {produtos.map((produto) => {
            return (
              <Product
                nome={produto.nome}
                key={produto.produtoId}
                produtoId={produto.produtoId}
                tamanho={produto.tamanho}
                categoria={produto.categoriaId}
                qtd={produto.qtd}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Estoque;
