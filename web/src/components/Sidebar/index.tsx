import { Button } from "../Button";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../assets/logos/top-models-v2.svg";
import backgroundRoupas from "./../../assets/images/background-roupas.jpg";

// Icones
import archiveIcon from "./../../assets/icons/archive.svg";
import editIcon from "./../../assets/icons/edit.svg";
import plusCircleIcon from "./../../assets/icons/plus-circle.svg";
import homeIcon from "./../../assets/icons/home.svg";
import estoqueIcon from "./../../assets/icons/folder.svg";
import helpCircleIcon from "./../../assets/icons/help-circle.svg";

import "./styles.css";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img className="logo" src={backgroundRoupas} alt="" />
        <p>Seja bem vindo ao seu sistema de gerenciamento de estoque!</p>
      </div>

      <div className="sidebar-nav-item">
        <Link to="/" className="button">
          <img src={homeIcon} alt="" />
          Inicio
        </Link>
        <Link to="/estoque" className="button">
          <img src={estoqueIcon} alt="" />
          Estoque
        </Link>
        <Link to="/novo-produto" className="button">
          <img src={plusCircleIcon} alt="" />
          Novo Produto
        </Link>
        <Link to="/editar-produto" className="button">
          <img src={editIcon} alt="" />
          Editar Produto
        </Link>
        <Link to="/contato" className="button">
          <img src={helpCircleIcon} alt="" />
          Contato
        </Link>
      </div>

      {/* <div className="sidebar-nav-item">
        <span>APP</span>

        <div className="sidebar-nav"></div>
      </div> */}
    </div>
  );
}
