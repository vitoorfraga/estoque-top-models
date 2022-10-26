import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../../components/Product";
import { Header } from "../../components/Header";

interface Produto {
  produtoId: string;
  nome: string;
  qtd: string;
  categoriaId: string;
}

function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/estoque").then((response) => {
      setProdutos(response.data); //pega as informações dos jogos no back-end (API)
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="productListHeader">
        <span>Nome</span>
        <span>Código</span>
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
              categoria={produto.categoriaId}
              qtd={produto.qtd}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
