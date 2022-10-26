import { Button } from "../Button";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

export function Header() {
  return (
    <div className="headerBackground">
      <div className="headerContainer">
        <div className="menuLeft">
          <Link className="button" to="/">
            Estoque
          </Link>
        </div>

        <div className="menuRight">
          <Link className="button" to="/novo-produto">
            Novo Produto
          </Link>
          <Link className="button" to="/">
            Editar Produto
          </Link>
        </div>
      </div>
    </div>
  );
}
