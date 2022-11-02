import React from "react";
import "./styles.css";

interface productProps {
  nome: string;
  produtoId: string;
  qtd: string;
  categoria: string;
  tamanho: string;
}

export default function index(props: productProps) {
  return (
    <div className="productItem">
      <span>{props.nome}</span>
      <span>{props.produtoId}</span>
      <span className="size-badge">{props.tamanho}</span>
      <span>{props.qtd}</span>
      <span className="productCategory">{props.categoria}</span>
    </div>
  );
}
