import axios from "axios";
import { FirebaseError } from "firebase/app";
import { useState, useEffect } from "react";
import Product from "../../components/Product";
import { Sidebar } from "../../components/Sidebar";
// import { getLoggedUser, viewUser } from "../../settings/Auth";

interface Produto {
  produtoId: string;
  nome: string;
  qtd: string;
  categoriaName: string;
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

          <button
          onClick={() => {
            console.log('clicou')
            
            // console.log(getLoggedUser())
          }}
          >Ver usuario</button>
        </div>

        <div className="productListBody">
          {produtos.map((produto) => {
            return (
              <Product
                nome={produto.nome}
                key={produto.produtoId}
                produtoId={produto.produtoId}
                tamanho={produto.tamanho}
                categoria={produto.categoriaName}
                qtd={produto.qtd}
                inDelete={false}
                funcionalidade={undefined}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Estoque;
