import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../../components/Product";
import { Sidebar } from "../../components/Sidebar";
import Swal from "sweetalert2";

interface Produto {
  produtoId: string;
  nome: string;
  qtd: string;
  categoriaName: string;
  tamanho: string;
}

function EditProduct() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function getProdutos() {
    axios("http://localhost:3333/estoque").then((response) => {
      setProdutos(response.data);
    });
  }
  useEffect(() => {
    getProdutos();
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
                categoria={produto.categoriaName}
                qtd={produto.qtd}
                inDelete={true}
                funcionalidade={
                  () =>
                    Swal.fire({
                      title: "Tem certeza que deseja fazer isso?",
                      text: "Você não conseguirá reverter está ação.",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Sim, exclua!",
                      cancelButtonText: "Cancelar",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire(
                          "Deletado!",
                          "O produto foi deletado!",
                          "success",
                        );

                        axios.delete(
                          `http://localhost:3333/produto/${produto.produtoId}`,
                        );
                        window.location.reload();
                        getProdutos();
                      }
                    })
                  // axios.delete(
                  //   `http://localhost:3333/produto/${produto.produtoId}`,
                  // )
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
