import { Button } from "../Button";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../assets/logos/top-models-v2.svg";
import backgroundRoupas from "./../../assets/images/background-roupas.jpg";

// Icones
import archiveIcon from "./../../assets/icons/archive.svg";
import editIcon from "./../../assets/icons/edit.svg";
import plusCircleIcon from "./../../assets/icons/plus-circle.svg";
import homeIcon from "./../../assets/icons/home.svg";
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
        <span>DASHEBOARD</span>

        <div className="sidebar-nav">
          <div className="button">
            <img src={homeIcon} alt="" />
            <Link to="/">Inicio</Link>
          </div>
        </div>
      </div>

      <div className="sidebar-nav-item">
        <span>APP</span>

        <div className="sidebar-nav">
          <div className="button">
            <img src={archiveIcon} alt="" />
            <Link to="/">Estoque</Link>
          </div>

          <div className="button">
            <img src={plusCircleIcon} alt="" />
            <Link to="/novo-produto">Novo Produto</Link>
          </div>

          <div className="button">
            <img src={editIcon} alt="" />
            <Link to="/">Editar Produto</Link>
          </div>
        </div>
      </div>

      <div className="sidebar-nav-item">
        <span>SUPORTE</span>

        <div className="sidebar-nav">
          <div className="button">
            <img src={helpCircleIcon} alt="" />
            <Link to="/">Contato</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
