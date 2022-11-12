import React from "react";
import x from "./../../assets/icons/x.svg";
import "./styles.css";

interface productProps {
  nome: string;
  produtoId: string;
  qtd: string;
  categoria: string;
  tamanho: string;
  inDelete: boolean;
  funcionalidade: any;
}

export default function index(props: productProps) {
  return (
    <div className="productItem">
      {props.inDelete ? (
        <img
          onClick={props.funcionalidade}
          className="x-icon"
          src={x}
          alt="X Icon"
        />
      ) : null}

      <span>{props.nome}</span>
      <span>{props.produtoId}</span>
      <span className="size-badge">{props.tamanho}</span>
      <span>{props.qtd}</span>
      <span className="productCategory">{props.categoria}</span>
    </div>
  );
}
