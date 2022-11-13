import { Button } from "../Button";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../assets/logos/top-models-v4.svg";
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
  const activeStyle = {
    color: "red",
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="sidebar-nav-item">
        <NavLink to="/" end className="button">
          <img src={homeIcon} alt="" />
          Inicio
        </NavLink>
        <NavLink to="/estoque" end className="button">
          <img src={estoqueIcon} alt="" />
          Estoque
        </NavLink>
        <NavLink to="/novo-produto" end className="button">
          <img src={plusCircleIcon} alt="" />
          Novo Produto
        </NavLink>
        <NavLink to="/editar-produto" end className="button">
          <img src={editIcon} alt="" />
          Editar Produto
        </NavLink>
        <NavLink to="/contato" end className="button">
          <img src={helpCircleIcon} alt="" />
          Contato
        </NavLink>
      </div>

      {/* <div className="sidebar-nav-item">
        <span>APP</span>

        <div className="sidebar-nav"></div>
      </div> */}
    </div>
  );
}
